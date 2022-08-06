package bleep

import bleep.logging.Logger
import sourcecode.{Enclosing, File, Line}

import java.nio.file.Path
import scala.sys.process.{BasicIO, Process, ProcessIO}

object cli {
  sealed trait WrittenLine
  object WrittenLine {
    case class StdErr(line: String) extends WrittenLine
    case class StdOut(line: String) extends WrittenLine
  }

  case class WrittenLines(combined: Array[WrittenLine]) {
    def stdout: Array[String] = combined.collect { case WrittenLine.StdOut(line) => line }
    def stderr: Array[String] = combined.collect { case WrittenLine.StdErr(line) => line }
  }

  sealed trait StdIn
  object StdIn {
    case object No extends StdIn
    case object Attach extends StdIn
    case class Provided(data: Array[Byte]) extends StdIn
  }

  def apply(
      action: String,
      cwd: Path,
      cmd: List[String],
      logger: Logger,
      stdIn: StdIn = StdIn.No,
      env: List[(String, String)] = Nil
  )(implicit l: Line, f: File, e: Enclosing): WrittenLines = {
    val builder = Process(cmd, cwd = Some(cwd.toFile), env: _*)
    val output = Array.newBuilder[WrittenLine]
    val actionPrefix = if (action.isEmpty) "" else s"$action: "

    val processIO = new ProcessIO(
      writeInput = os =>
        stdIn match {
          case StdIn.No             => ()
          case StdIn.Attach         => BasicIO.connectToIn(os)
          case StdIn.Provided(data) =>
            os.write(data)
            os.close()
        },
      processOutput = BasicIO.processFully { line =>
        output += WrittenLine.StdOut(line)
        logger.info(actionPrefix + line)(implicitly, l, f, e)
      },
      processError = BasicIO.processFully { line =>
        output += WrittenLine.StdErr(line)
        logger.warn(actionPrefix + line)(implicitly, l, f, e)
      },
      daemonizeThreads = false
    )

    val exitCode = builder.run(processIO).exitValue()

    exitCode match {
      case 0 => WrittenLines(output.result())
      case n =>
        logger.debug(s"Failed command with error code $n: ${cmd.mkString(" ")}")
        throw new BleepException.Text(s"Failed external command '$action'")
    }
  }
}
