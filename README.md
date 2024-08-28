# About Project

YelpCamp is a full-stack web application that allows users to browse, create, and review campgrounds. The project is designed to help learners understand the fundamentals of web development, including front-end and back-end technologies. It's part of Colt Steele's "The Web Developer Bootcamp" course and serves as a comprehensive project to bring together various skills learned throughout the course.

# Key Features

* **User Authentication:** Users can sign up, log in, and log out using Passport.js for authentication.
* **Campground Management:** Users can create, edit, and delete their own campgrounds.
* **Review System:** Users can leave reviews on campgrounds, and the owner of a campground can manage the reviews.
* **Map Integration:** Integration with Mapbox to display the locations of campgrounds on a map.
* **Responsive Design:** The application is fully responsive and works well on different screen sizes.


# Technologies Used:

**1. Frontend:**

  * **HTML/CSS:** For structuring and styling the web pages.
  * **JavaScript:** For adding interactivity to the user interface.
  * **Bootstrap:** For responsive design and pre-styled components.
    
**2. Backend:**

  * **Node.js:** JavaScript runtime used to build the server-side application.
  * **Express.js:** Web framework for Node.js, used to handle routing, middleware, and server-side logic.
  * **MongoDB:** NoSQL database used to store campground, user, and review data.
  * **Mongoose:** Object Data Modeling (ODM) library for MongoDB, used to manage relationships and interact with the database.
  * **Passport.js:** Middleware for authentication, supporting strategies like local authentication.
    
**3. APIs and Services:**

  * **Mapbox:** Used for integrating maps to display campground locations.
  * **Cloudinary:** Used for image storage and management, allowing users to upload and manage campground photos.
  * **Helmet.js:** Middleware for securing HTTP headers.
  * **Sanitize HTML & Express-Mongo-Sanitize:** Used to protect against XSS (Cross-Site Scripting) and other vulnerabilities.
    
**4. Environment Variables:**

  * **.env File:** The application requires an .env file to store sensitive information, such as API keys and secret tokens. This file should not be committed to version control (e.g., GitHub) to keep the information secure. Key variables that need to be added include:
    * MAPBOX_TOKEN: The secret token for Mapbox API.
    * CLOUDINARY_CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET: Credentials for Cloudinary image storage.
    * Any other sensitive information like session secrets, database URLs, etc.
      
**5. Additional Tools:**

  * **EJS (Embedded JavaScript):** Templating language used to generate HTML markup with JavaScript.
  * **Git & GitHub:** Version control system used for tracking changes and collaboration.

# Download and Run Instructions

* **Download Project:** https://github.com/rahulagrawal084/YelpCamp.git
* **Move current directory to project directory:** cd Yelpcamp
* **Install Dependencies:** npm install
* **Run App:** node app.js
