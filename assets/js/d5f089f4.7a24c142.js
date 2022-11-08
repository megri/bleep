"use strict";(self.webpackChunkbleep_site=self.webpackChunkbleep_site||[]).push([[355],{9024:(e,n,t)=>{t.d(n,{F:()=>s});var a=t(7294),i=t(1262);const o=e=>{let{src:n,...i}=e;const o=a.useRef(null);return a.useEffect((()=>{const e=t(4128),a=o.current;a&&e.create(n,a,i)}),[n,o]),a.createElement("div",{ref:o})},s=e=>a.createElement(i.Z,null,(()=>a.createElement(o,e)))},6752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=t(7462),i=(t(7294),t(3905)),o=t(9024);const s=t.p+"ece1ccb17e3aefe8dc207559bcfa489a.cast";var l=t(814);const r={},p="Import sbt build",c={unversionedId:"demos/importing-sbt-build",id:"demos/importing-sbt-build",title:"Import sbt build",description:"We'll import the build for zio-http as an example",source:"@site/docs/demos/importing-sbt-build.mdx",sourceDirName:"demos",slug:"/demos/importing-sbt-build",permalink:"/docs/demos/importing-sbt-build",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create new cross build",permalink:"/docs/demos/creating-new-cross-build"},next:{title:"Video showing import into IDE",permalink:"/docs/demos/ide-import"}},m={},d=[{value:"Use <code>bleep import</code>",id:"use-bleep-import",level:2},{value:"Generated <code>bleep.yaml</code>",id:"generated-bleepyaml",level:2}],u={toc:d};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"import-sbt-build"},"Import sbt build"),(0,i.kt)("p",null,"We'll import the build for ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-http")," as an example"),(0,i.kt)("h2",{id:"use-bleep-import"},"Use ",(0,i.kt)("inlineCode",{parentName:"h2"},"bleep import")),(0,i.kt)(o.F,{src:s,cols:120,rows:30,fit:"width",mdxType:"AsciinemaPlayer"}),(0,i.kt)("h2",{id:"generated-bleepyaml"},"Generated ",(0,i.kt)("inlineCode",{parentName:"h2"},"bleep.yaml")),(0,i.kt)(l.Z,{language:"yaml",mdxType:"CodeBlock"},"$schema: https://raw.githubusercontent.com/oyvindberg/bleep/master/schema.json\n$version: 0.0.1-M20\nprojects:\n  scripts:\n    dependencies: build.bleep::bleep-core:${BLEEP_VERSION}\n    platform:\n      name: jvm\n    scala:\n      version: 3.2.0\n  zio-http:\n    cross:\n      jvm212:\n        dependencies: org.scala-lang.modules::scala-collection-compat:2.8.1\n    dependencies:\n    - dev.zio::zio-schema-json:0.2.1\n    - dev.zio::zio-schema:0.2.1\n    - dev.zio::zio-streams:2.0.3\n    - module: io.netty.incubator:netty-incubator-transport-native-io_uring:0.0.15.Final\n      publication:\n        classifier: linux-x86_64\n        ext: jar\n        name: netty-incubator-transport-native-io_uring\n        type: jar\n    - io.netty:netty-codec-http:4.1.82.Final\n    - io.netty:netty-handler-proxy:4.1.82.Final\n    - io.netty:netty-transport-native-epoll:4.1.82.Final\n    - module: io.netty:netty-transport-native-epoll:4.1.82.Final\n      publication:\n        classifier: linux-aarch_64\n        ext: jar\n        name: netty-transport-native-epoll\n        type: jar\n    - module: io.netty:netty-transport-native-epoll:4.1.82.Final\n      publication:\n        classifier: linux-x86_64\n        ext: jar\n        name: netty-transport-native-epoll\n        type: jar\n    - io.netty:netty-transport-native-kqueue:4.1.82.Final\n    - module: io.netty:netty-transport-native-kqueue:4.1.82.Final\n      publication:\n        classifier: osx-aarch_64\n        ext: jar\n        name: netty-transport-native-kqueue\n        type: jar\n    - module: io.netty:netty-transport-native-kqueue:4.1.82.Final\n      publication:\n        classifier: osx-x86_64\n        ext: jar\n        name: netty-transport-native-kqueue\n        type: jar\n    dependsOn: zio-http-logging\n    extends:\n    - template-common-main\n    - template-cross-all\n  zio-http-benchmarks:\n    dependencies:\n    - com.softwaremill.sttp.tapir::tapir-http4s-server:1.1.4\n    - com.softwaremill.sttp.tapir::tapir-json-circe:1.1.4\n    - org.openjdk.jmh:jmh-core:1.32\n    - org.openjdk.jmh:jmh-generator-bytecode:1.32\n    - org.openjdk.jmh:jmh-generator-reflection:1.32\n    dependsOn: zio-http\n    extends:\n    - template-common-main\n    - template-cross-all\n  zio-http-example:\n    dependencies: com.github.jwt-scala::jwt-core:9.1.1\n    dependsOn: zio-http\n    extends:\n    - template-common-main\n    - template-cross-all\n  zio-http-logging:\n    cross:\n      jvm212:\n        dependencies:\n          configuration: provided\n          module: org.scala-lang:scala-reflect:${SCALA_VERSION}\n      jvm213:\n        dependencies:\n          configuration: provided\n          module: org.scala-lang:scala-reflect:${SCALA_VERSION}\n    dependencies: dev.zio::zio:2.0.3\n    extends:\n    - template-common-main\n    - template-cross-all\n  zio-http-logging-test:\n    cross:\n      jvm212:\n        dependencies:\n          configuration: provided\n          module: org.scala-lang:scala-reflect:${SCALA_VERSION}\n      jvm213:\n        dependencies:\n          configuration: provided\n          module: org.scala-lang:scala-reflect:${SCALA_VERSION}\n    dependsOn: zio-http-logging\n    extends:\n    - template-common-test\n    - template-cross-all\n    folder: ./zio-http-logging\n  zio-http-test:\n    dependsOn: zio-http\n    extends:\n    - template-common-test\n    - template-cross-all\n    folder: ./zio-http\n  zio-http-testkit:\n    dependsOn: zio-http\n    extends:\n    - template-common-main\n    - template-cross-all\n  zio-http-testkit-test:\n    dependsOn: zio-http-testkit\n    extends:\n    - template-common-test\n    - template-cross-all\n    folder: ./zio-http-testkit\nscripts:\n  generate-resources: scripts/scripts.GenerateResources\ntemplates:\n  template-common:\n    platform:\n      jvmOptions: -DZIOHttpLogLevel=INFO -Dio.netty.leakDetectionLevel=paranoid -Duser.dir=${PROJECT_DIR}\n      name: jvm\n    scala:\n      options: -deprecation -encoding UTF-8 -feature -language:postfixOps -unchecked\n  template-common-main:\n    extends: template-common\n    sbt-scope: main\n  template-common-test:\n    dependencies:\n    - dev.zio::zio-test-sbt:2.0.3\n    - dev.zio::zio-test:2.0.3\n    extends: template-common\n    isTestProject: true\n    sbt-scope: test\n    testFrameworks: zio.test.sbt.ZTestFramework\n  template-cross-all:\n    cross:\n      jvm212:\n        extends: template-scala-2.12\n      jvm213:\n        extends: template-scala-2.13\n      jvm3:\n        extends: template-scala-3\n  template-scala-2:\n    scala:\n      options: -Wconf:cat=unused:info -Xcheckinit -Xfatal-warnings -Xlint:-infer-any\n        -Xlint:adapted-args -Xlint:constant -Xlint:delayedinit-select -Xlint:deprecation\n        -Xlint:doc-detached -Xlint:inaccessible -Xlint:missing-interpolator -Xlint:nullary-unit\n        -Xlint:option-implicit -Xlint:package-object-classes -Xlint:poly-implicit-overload\n        -Xlint:private-shadow -Xlint:stars-align -Xlint:type-parameter-shadow -Ybackend-parallelism\n        8 -Ycache-macro-class-loader:last-modified -Ycache-plugin-class-loader:last-modified\n        -Yrangepos -encoding utf-8 -explaintypes -language:existentials -language:higherKinds\n        -opt:l:inline\n  template-scala-2.12:\n    extends: template-scala-2\n    scala:\n      options: -Xlint:_,-missing-interpolator,-type-parameter-shadow,-infer-any -Ywarn-macros:after\n        -Ywarn-numeric-widen -Ywarn-unused:-implicits\n      version: 2.12.16\n  template-scala-2.13:\n    extends: template-scala-2\n    scala:\n      options: -Wdead-code -Wextra-implicit -Wmacros:after -Wnumeric-widen -Woctal-literal\n        -Wunused:locals -Wunused:patvars -Wunused:privates -Wvalue-discard -Xlint:eta-sam\n        -Xlint:eta-zero -Xlint:implicit-not-found -Xlint:nonlocal-return -Xlint:serial\n        -Xlint:valpattern\n      version: 2.13.8\n  template-scala-3:\n    scala:\n      options: -source:3.0-migration\n      version: 3.2.0\n"))}g.isMDXComponent=!0}}]);