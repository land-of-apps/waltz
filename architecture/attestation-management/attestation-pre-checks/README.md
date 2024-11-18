# Attestation Pre-Checks

## Description

The **Attestation Pre-Checks** feature is a critical subcomponent of the larger attestation management system. It serves as a preliminary validation mechanism to ensure data integrity and compliance before an attestation process is initiated. The system evaluates logical data flows linked to entities and identifies potential violations or issues that must be addressed to proceed with attestation.

## Component Architecture

The architecture of the Attestation Pre-Checks feature comprises several interconnected modules and services:

1. **AttestationPreCheckService**: Central to the pre-check process, this service evaluates the logical flows associated with an entity and compiles a list of check failures. It utilizes the `AttestationPreCheckDao` to retrieve pre-check data.

2. **AttestationPreCheckEndpoint**: Handles HTTP requests for pre-check evaluations. It exposes an API endpoint that clients can use to perform pre-checks on logical flows.

3. **AttestationPreCheckDao**: Responsible for querying the database to collect logical flow attestation pre-check data. It calculates conditions to identify relevant upstream and downstream flows.

4. **LogicalFlowAttestationPreChecks Model**: Defines the structure of the pre-check results, encapsulating data about flow count, deprecated and unknown usage counts, and exemption statuses.

5. **AttestationPreCheckStore**: Acts as a front-end service interface, providing methods like `logicalFlowCheck` to interact with back-end services.

## Data Types

- **EntityReference**: Represents a generic entity reference used to identify the target of an attestation pre-check.
  
- **LogicalFlowAttestationPreChecks**: An immutable data model capturing the state of logical data flow checks, including counts of flows, deprecated use instances, and unknown data types, and flags for exemptions.

- **List<String>**: Utilized to hold messages or failures when logical flow checks breach preset conditions.

## Key Functions

- **calcLogicalFlowPreCheckFailures(EntityReference ref)**: Processes the entity's logical flows to pinpoint potential attestation failures based on predefined checks such as the absence of flows, deprecated usage, and unknown data types.

- **mkFailureMessage(Map<String, String> messageTemplates, String messageKey, String defaultMessage, int count)**: Constructs failure messages formatted according to message templates and the count of violations.

- **calcLogicalFlowAttestationPreChecks(EntityReference ref)**: A DAO method that produces an instance of `LogicalFlowAttestationPreChecks`, calculating conditions that may signify an attestation pre-check failure.

- **register()**: Part of the `AttestationPreCheckEndpoint`, this function registers a route handler for logical flow pre-check API endpoints, facilitating client applications in triggering pre-checks. 

The combination of these components and functions enables a systematic approach to validating entity data flows, ensuring data compliance before proceeding with the attestation process.