---
name: waltz-appmap-setup
description: Build, test, and record AppMap data in the Waltz repo - JDK 17, the dedicated Postgres cluster, Maven profiles and flags, and jOOQ/H2 pitfalls. Use before running any Maven build, test, AppMap recording, or gold-traces work here.
---

# Skill: Waltz AppMap Setup

This repo is an AppMap gold-traces comparison setup, created with the
**appmap-setup** skill. For gold-traces or comparison work here, follow that
skill for the workflow and its companions for the mechanics: **appmap-record**
(how to record), **appmap-gold-traces** (baseline lifecycle),
**appmap-review** (the behavioral diff). If they are not installed, clone
https://github.com/getappmap/skills to a scratch directory and use the
SKILL.md files from there. This skill supplies the Waltz-specific facts those
skills assume you know.

The verified, copy-paste commands live in the repo:

- `docs/development/appmap.md` — database setup, unit and integration test
  recording commands.
- `gold_traces/manifest.yaml` — the canonical record command used by the
  gold-traces engine.

Read those before inventing a command. The rest of this skill is the facts
that make or break a run.

## Non-negotiable flags and settings

| Setting | Why |
|---|---|
| JDK 17, `JAVA_HOME` set explicitly on every `mvn` command | Shell state does not persist between tool calls. |
| `-Dtarget.db=postgres` on integration tests | The default is `mssql`, which tries to start Docker/MSSQL. Postgres uses Zonky embedded PG — no Docker needed. |
| `-am` with any `-pl` | The installed `waltz-test-common` pom contains `${jooq.group}`, which only resolves while a `waltz-*` database profile is active in the reactor. Repo resolution silently drops its dependencies (`NoClassDefFoundError`). |
| Profiles `waltz-postgres` (+ `integration-tests` for the IT module) | The canonical profiles; `.github/workflows` shows how CI runs them. |
| `-Dsurefire.failIfNoSpecifiedTests=false` with `-Dtest` | Otherwise other reactor modules fail. |

## Database

The `waltz-schema` build (Liquibase + jOOQ codegen) needs a real Postgres —
`docs/development/appmap.md` sets up a dedicated cluster on port 5435.

- **Never build the schema against H2.** H2 upper-cases identifiers, so the
  generated jOOQ classes break integration tests
  (`IllegalArgumentException: cannot find id column`,
  `table.field("id")` returns null). If that error appears, regenerate
  against Postgres.
- **Liquibase failing mid-changelog means a stale database.** Point
  `-Ddatabase.url` at a fresh database; don't try to repair or reuse a dev DB.
