# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

- Ticket 1: Add a custom ID field to the Agents table

Description: In order to allow Facilities to save their own custom ids for each Agent they work with, we need to add a custom ID field to the Agents table.

Acceptance Criteria:

A custom ID field is added to the Agents table.
The custom ID field should be unique for each Agent.
The custom ID field should have a maximum length of 20 characters.
Time/effort estimate: 2-4 hours.

Implementation Details:

Add a custom ID field to the Agents table.
Write a database migration script to update the Agents table.
Update the API and the client-side code to include the new custom ID field.

- Ticket 2: Update the Agent creation and editing forms to include the custom ID field

Description: In order to allow Facilities to save their own custom ids for each Agent they work with, we need to update the Agent creation and editing forms to include the custom ID field.

Acceptance Criteria:

The Agent creation and editing forms include the custom ID field.
The custom ID field is validated to be unique for each Agent.
The custom ID field is validated to have a maximum length of 20 characters.
Time/effort estimate: 4-6 hours.

Implementation Details:

Add the custom ID field to the Agent creation and editing forms.
Validate the custom ID field to be unique and to have a maximum length of 20 characters.
Update the database queries to include the custom ID field when creating or editing Agents.

- Ticket 3: Update the getShiftsByFacility function to return the custom Agent ID

Description: In order to allow Facilities to use their own custom ids when generating reports, we need to update the getShiftsByFacility function to return the custom Agent ID instead of the internal database id.

Acceptance Criteria:

The getShiftsByFacility function returns the custom Agent ID instead of the internal database id.
The custom Agent ID is included in the Shifts list returned by the function.
Time/effort estimate: 2-3 hours.

Implementation Details:

Update the getShiftsByFacility function to join the Agents table and return the custom Agent ID.
Update the database queries to include the custom Agent ID when retrieving Shifts.

- Ticket 4: Update the generateReport function to use the custom Agent ID

Description: In order to allow Facilities to use their own custom ids when generating reports, we need to update the generateReport function to use the custom Agent ID instead of the internal database id.

Acceptance Criteria:

The generateReport function uses the custom Agent ID instead of the internal database id.
The custom Agent ID is included in the generated report.
Time/effort estimate: 4-6 hours.

Implementation Details:

Update the generateReport function to use the custom Agent ID instead of the internal database id.
Update the PDF generation code to include the custom Agent ID in the report.

- Ticket 5: Update the API documentation to reflect the new custom ID field

Description: In order to inform Facilities of the new custom ID field, we need to update the API documentation to include information about the custom ID field.

Acceptance Criteria:

The API documentation includes information about the custom ID field.
The API documentation is updated to reflect any changes to the API endpoints.
Time/effort estimate: 2-3 hours.

Implementation Details:

Update the API documentation to include information about the custom ID field.
Update any examples or code snippets in the API documentation to reflect the changes to the API.