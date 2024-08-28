<h1>About Project</h1>
YelpCamp is a full-stack web application that allows users to browse, create, and review campgrounds. The project is designed to help learners understand the fundamentals of web development, including front-end and back-end technologies. It's part of Colt Steele's "The Web Developer Bootcamp" course and serves as a comprehensive project to bring together various skills learned throughout the course.

<h1>Key Features</h1>

* <h5>User Authentication:</h5> Users can sign up, log in, and log out using Passport.js for authentication.
* <h5>Campground Management:</h5> Users can create, edit, and delete their own campgrounds.
* <h5>Review System:</h5> Users can leave reviews on campgrounds, and the owner of a campground can manage the reviews.
* <h5>Map Integration:</h5> Integration with Mapbox to display the locations of campgrounds on a map.
* <h5>Responsive Design:</h5> The application is fully responsive and works well on different screen sizes.


<h1>Technologies Used:</h1>

<h5>1. Frontend:</h5>

  * HTML/CSS: For structuring and styling the web pages.
  * JavaScript: For adding interactivity to the user interface.
  * Bootstrap: For responsive design and pre-styled components.
    
<h5>2. Backend:</h5>

  * Node.js: JavaScript runtime used to build the server-side application.
  * Express.js: Web framework for Node.js, used to handle routing, middleware, and server-side logic.
  * MongoDB: NoSQL database used to store campground, user, and review data.
  * Mongoose: Object Data Modeling (ODM) library for MongoDB, used to manage relationships and interact with the database.
  * Passport.js: Middleware for authentication, supporting strategies like local authentication.
    
<h5>3. APIs and Services:</h5>

  * Mapbox: Used for integrating maps to display campground locations.
  * Cloudinary: Used for image storage and management, allowing users to upload and manage campground photos.
  * Helmet.js: Middleware for securing HTTP headers.
  * Sanitize HTML & Express-Mongo-Sanitize: Used to protect against XSS (Cross-Site Scripting) and other vulnerabilities.
    
<h5>4. Environment Variables:</h5>

  * .env File: The application requires an .env file to store sensitive information, such as API keys and secret tokens. This file should not be committed to version control (e.g., GitHub) to keep the information secure. Key variables that need to be added include:
    * MAPBOX_TOKEN: The secret token for Mapbox API.
    * CLOUDINARY_CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET: Credentials for Cloudinary image storage.
    * Any other sensitive information like session secrets, database URLs, etc.
      
<h5>5. Additional Tools:</h5>

  * EJS (Embedded JavaScript): Templating language used to generate HTML markup with JavaScript.
  * Git & GitHub: Version control system used for tracking changes and collaboration.

<h1>Download and Run Instructions</h1>
<p><h5>Download Project:</h5>https://github.com/rahulagrawal084/YelpCamp.git</p>
<p><h5>Move current directory to project directory:</h5>cd Yelpcamp</p>
<p><h5>Install Dependencies:</h5>npm install</p>
<p><h5>Run App:</h5>node app.js</p>
