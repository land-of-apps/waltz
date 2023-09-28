docker-compose up -d postgres
java -javaagent:$HOME/.appmap/lib/java/appmap.jar -jar ./waltz-web/target/waltz-web-jar-with-dependencies.jar org.finos.waltz.web.Main