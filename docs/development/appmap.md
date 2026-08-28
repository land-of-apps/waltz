# Recording AppMap data

The root `pom.xml` configures the [AppMap Maven plugin](https://appmap.io/docs/reference/appmap-maven-plugin.html)
for every module. Any `mvn test` run records each executed test into the
repo-root `tmp/appmap/` directory, using the repo-root `appmap.yml`.

## Prerequisites

- JDK 17 (`export JAVA_HOME=...`)
- A Postgres database for the `waltz-schema` build (Liquibase + jOOQ codegen).
  Do not build the schema against H2: H2 upper-cases identifiers, which breaks
  `EntityHierarchyService` (`table.field("id")` returns null) in integration tests.

Example local database setup (dedicated cluster, port 5435):

```sh
initdb -D ~/data/waltz/pg14-appmap -U postgres --auth=trust
pg_ctl -D ~/data/waltz/pg14-appmap -o "-p 5435" -l ~/data/waltz/pg14-appmap/server.log start
psql -h localhost -p 5435 -U postgres -c "CREATE USER waltz WITH PASSWORD 'waltz';"
psql -h localhost -p 5435 -U postgres -c "CREATE DATABASE waltz OWNER waltz;"
```

Common database flags used below (note: in zsh use `${=DB_FLAGS}` when
expanding, since zsh does not word-split unquoted variables):

```sh
DB_FLAGS="-Ddatabase.url=jdbc:postgresql://localhost:5435/waltz \
  -Ddatabase.user=waltz -Ddatabase.password=waltz -Ddatabase.schema=public"
```

## Record a unit test

Unit tests need no database. Example (waltz-common):

```sh
mvn -B -P waltz-postgres -pl waltz-common -am $DB_FLAGS \
    -Dtest=StringUtilities_capitaliseTest \
    -Dsurefire.failIfNoSpecifiedTests=false test
```

Recordings land in `tmp/appmap/junit/`, one per test method.

## Record an integration test

Integration tests (`waltz-integration-test`) boot a Spring context against a
Zonky embedded Postgres. Notes:

- `-Dtarget.db=postgres` is required — the default is `mssql`.
- Run with `-am` (build deps in the reactor). Resolving the installed poms from
  the local repository fails because `${jooq.group}` in the installed
  `waltz-test-common` pom only resolves while a `waltz-*` database profile is
  active in the reactor.

```sh
mvn -B -P waltz-postgres,integration-tests -pl waltz-integration-test -am $DB_FLAGS \
    -Dtarget.db=postgres \
    -Dtest=AppGroupDaoTest \
    -Dsurefire.failIfNoSpecifiedTests=false test
```

`-Dtest` accepts `ClassName` or `ClassName#methodName`.
