## Application Structure

- Which React pages and reusable components did you create?
    - HomePage and EntriesPage. HomePage displays basic information and has the form to create new learning entries.
    - EntriesPage displays all of new and existing entries.
    - LearningEntry and LearningEntries are reusable components.
    
- What do React, Express and SQLite each do?
    - React handles all of the frontend.
    - Express handles requests from the React frontend and provides API endpoints.
    - SQLite stores all of the learning entries in a local database.

- What is the difference between /entries and GET /api/entries?
    - /entries is a frontend route. It displays the EntriesPage.
    - GET /api/entries is a backend API endpoint handled by Express. Retrieves data from SQLite database.

- Why is REST a reasonable choice for this app?
    - It is a reasonable choice, because this app needs a way for the frontend and backend to communicate.

## State Management

- Local State
    - Temporary data
- Zustand State
    - Application wide data
- SQLite
    - Persistant data

## Testing & Reliability

Created validation.test.js using Node.js's built-in test runner.

Two separate unit tests were implemented to test the validation logic used by the POST /api/entries endpoint.

- Test 1: Confidence validation
    - Valid input: 4 (accepted).
    - Invalid input: 6 (rejected).
    - Checks that confidence must be an integer between 1 and 5.

- Test 2: Topic validation
    - Valid input: "React" (accepted).
    - Invalid input: " " (rejected).
    - Checks that topic must be a non-empty string.

### Running the tests

    node --test validation.test.js


### Test results

- Both tests passed successfully:
    - Confidence validation: PASS.
    - Topic validation: PASS.
    - Total: 2 tests passed, 0 failed.
