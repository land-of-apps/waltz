# Using Versions:
# Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)
# Java version: 18.0.2.1, vendor: Oracle Corporation, runtime: /Users/petecheslock/.asdf/installs/java/oracle-18.0.2.1

# start postgres
docker-compose up -d postgres
# Get db dump https://github.com/finos/waltz/blob/master/waltz-sample-data/database/pg/versions/postgres-dump-1.47.1.sql.gz

psql -p 5432 -U waltz -h localhost -d waltz -c "CREATE EXTENSION IF NOT EXISTS pgcrypto;"
pg_restore -p 5432 -U waltz -h localhost -d waltz < ~/Downloads/postgres-dump-1.47.1.sql.gz
# bring schema up to date
mvn -s .build.settings.xml compile -P waltz-postgres,dev-postgres -f waltz-schema/pom.xml -DskipTests=true
# build package
mvn -s .build.settings.xml clean package -P waltz-postgres,dev-postgres -DskipTests=true

# run the jar with appmap enabled
java -javaagent:$HOME/.appmap/lib/java/appmap.jar -cp waltz-web/properties:waltz-local-config/src/main/resources:waltz-web/target/classes:waltz-web/src/main/resources:./waltz-web/target/waltz-web-jar-with-dependencies.jar -Dwaltz.port=8080 -Dappmap.recording.requests=false -Dappmap.disableLogFile=true -Dappmap.record.private=true org.finos.waltz.web.Main

# Open waltz (admin/password)
# NOTE: Can take 5-10 seconds to respond via web
http://localhost:8080