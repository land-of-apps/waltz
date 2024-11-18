# Licence Compliance

## Description

The **Licence Compliance** feature is a part of the broader Licence Management system, which allows for the importing, processing, and documenting of licence compliance data. This feature specifically deals with the validation and recording of compliance conditions, terms, and other related notes concerning various licensing agreements. It imports licence data from predetermined sources, processes the data for different compliance types, and records these findings into the database as structured notes.

## Component Architecture

The architecture of the Licence Compliance feature primarily revolves around the `FinosLicenceComplianceImporter` class:

- **FinosLicenceComplianceImporter**: Responsible for importing license compliance information and processing compliance terms. It works in tandem with the `LicenceDao` to access licence data and performs operations such as creating or updating compliance notes.

- **DSLContext**: Utilized for database interactions, particularly for inserting and deleting compliance notes related to licences in the underlying database tables.

- **LicenceDao**: A data access object that provides access to licence information necessary for compliance checks and data retrieval.

## Data Types

- **LicenceCompliance**: Represents a licence's compliance details, which can be parsed from external data files.

- **EntityNamedNoteRecord**: Represents a structured record in the database for storing compliance notes associated with licences.

- **ComplianceUseCase**: Denotes a use case category such as Unmodified Binary (UB), Modified Binary (MB), Unmodified Source (US), and Modified Source (MS), used to mark compliance notes.

- **ComplianceType**: Represents different types of compliance terms, including CONDITION, TERMINATION, LICENSE_VERSIONS, and OTHER.

## Key Functions

- **parseData(String directoryPath): List<LicenceCompliance>**
  - Reads and parses compliance data from a specified directory path, returning a list of `LicenceCompliance` objects.

- **parseCompliance(Path path): Optional<LicenceCompliance>**
  - Parses a single file to extract `LicenceCompliance` information. Handles file reading exceptions and returns the compliance data.

- **importData(String path)**
  - Orchestrates the import process of licence data. It initializes entity note definitions, deletes existing records, parses data files, and updates the compliance information.

- **doImport()**
  - Entry point for executing the overall import process. It sets up the directory path and calls `importData`.

- **createEntityNoteDefinitionIfNotExists**: 
  - Ensures that the structure for storing specific compliance note types (e.g., conditions, terminations) is available in the database.

- **noteText.append**: 
  - Constructs the compliance note descriptions that will be recorded in the database, marking which compliance use cases are applicable.