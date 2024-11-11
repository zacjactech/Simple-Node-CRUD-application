
# Simple Note-Taking App

This is a simple Note-Taking API built with Node.js. It allows users to perform CRUD operations (Create, Read, Update, Delete) on notes stored in a JSON file (`db.json`). Each operation is implemented in a separate JavaScript module.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [License](#license)

# Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

# Usage

1. Start the server:
   ```bash
   node app.js
   ```

2. Use an API client like Postman to test the endpoints or integrate with a frontend interface to interact with the Note-Taking API.

# API Endpoints

The following endpoints allow you to create, retrieve, update, and delete notes:

- **Add Note**: Adds a new note.
  - **Method**: `POST`
  - **Endpoint**: `/addData`
  - **Body**:
    ```json
    {
      "title": "Note Title",
      "content": "Note Content"
    }
    ```

- **Retrieve Notes**: Retrieves all notes.
  - **Method**: `GET`
  - **Endpoint**: `/retrieveData`

- **Update Note**: Updates an existing note by title.
  - **Method**: `PUT`
  - **Endpoint**: `/updateData`
  - **Body**:
    ```json
    {
      "title": "Note Title",
      "content": "Updated Note Content"
    }
    ```

- **Remove Note**: Deletes a note by title.
  - **Method**: `DELETE`
  - **Endpoint**: `/removeData`
  - **Body**:
    ```json
    {
      "title": "Note Title"
    }
    ```

- **Query Notes**: Retrieves notes based on a query.
  - **Method**: `GET`
  - **Endpoint**: `/queryDB`
  - **Query Parameters**:
    ```
    ?title=Note Title
    ```

## File Structure

- **app.js**: The entry point of the application (if applicable).
- **addData.js**: Module for adding new notes.
- **retrieveData.js**: Module for retrieving all notes.
- **updateData.js**: Module for updating a specific note.
- **removeData.js**: Module for deleting a note.
- **queryDB.js**: Module for querying notes based on specific criteria.
- **dbFileCheck.js**: Utility to check if `db.json` exists, and create it if necessary.
- **db.json**: JSON file used as the database to store notes.
- **package.json**: Contains project metadata and dependencies.
- **package-lock.json**: Automatically generated file that locks dependencies' versions.
- **.gitignore**: Specifies files and directories for Git to ignore.

## License

This project is open-source and available under the MIT License.

---

Feel free to expand on the descriptions or add more details based on specific requirements. Let me know if you'd like additional modifications!
