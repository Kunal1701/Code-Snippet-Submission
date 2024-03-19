Code Snippet Submission Web Application
This is a web application that facilitates the submission and display of code snippets. The application consists of two main parts: the frontend and the backend.


Frontend
The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. It provides two main pages:

Code Submission Form Page
This page allows users to submit code snippets along with additional information such as their username, preferred programming language, standard input, and source code. The form is constructed using React components and styled using Bootstrap for a clean and responsive layout.

Code Entries Page
This page displays all submitted code snippets in a tabular format. It showcases the username, code language, standard input, a preview of the source code, and the timestamp of submission. Bootstrap is used for styling to enhance the appearance of the table.


Backend
The backend of the application is built using Node.js and Express.js, providing RESTful APIs to handle data storage and retrieval. MySQL is used as the database to store user-submitted code snippets. The backend consists of the following main components:

Database Setup
A MySQL database is set up to store code snippets. The database schema includes a table named code_snippets with columns for the username, code language, standard input, source code, and timestamp of submission. The table is created automatically when the application starts, ensuring seamless data storage.

API Endpoints
The backend exposes several API endpoints to interact with the database:

POST /api/submit: Allows users to submit code snippets. The submitted data is stored in the code_snippets table.
GET /api/entries: Retrieves all submitted code snippets from the database.


Getting Started
To run the application locally, follow these steps:

Clone this repository to your local machine.

Navigate to the project directory.

Install dependencies for both the frontend and backend:

cd frontend
npm install
cd ../backend
npm install

Set up environment variables:
Create a .env file in the backend directory with the following variables:

PORT=<your_port_number>
DB_USER=<your_mysql_username>
DB_PASSWORD=<your_mysql_password>
Replace <your_mysql_username>, <your_mysql_password>, and <your_database_name> with your MySQL credentials and desired database name.

Create the database named "takeuforward" in your local machine using MySQL server.

Start the backend server:

cd backend
npm run dev

Start the frontend development server:

cd frontend
npm start
Open your web browser and navigate to http://localhost:3000 to view the application.

Technologies Used
Frontend:

React.js
Bootstrap


Backend:

Node.js
Express.js
MySQL