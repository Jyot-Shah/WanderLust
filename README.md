# Wanderlust - Airbnb Clone

A full-stack web application for listing and booking vacation rentals, built with Node.js, Express, MongoDB, and EJS templating.

## Features

- **User Authentication**: Sign up, login, logout with Passport.js
- **Listings Management**: Create, read, update, and delete listings
- **Image Upload**: Upload listing images to Cloudinary
- **Reviews System**: Add and delete reviews for listings
- **Authorization**: Only listing owners can edit/delete their listings
- **Responsive Design**: Bootstrap-based UI
- **Flash Messages**: User feedback for actions
- **Map Integration**: Mapbox integration for location display
- **Session Management**: Express sessions with MongoDB store
- **Data Validation**: Joi schema validation for listings and reviews

---

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Passport.js** - Authentication middleware
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage

### Frontend
- **EJS** - Template engine
- **Bootstrap 5** - CSS framework
- **Mapbox GL** - Map visualization
- **JavaScript** - Client-side scripting

### Development Tools
- **Dotenv** - Environment variables
- **Connect-mongo** - MongoDB session store
- **Express-session** - Session management
- **Connect-flash** - Flash messages
- **Method-override** - HTTP method override for forms

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)
- Mapbox account (for maps)

### Clone the Repository
```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```

### Install Dependencies
```bash
npm install
```

### Environment Setup
Create a `.env` file in the root directory and add the following:

```env
NODE_ENV=development
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust?retryWrites=true&w=majority
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAP_TOKEN=your_mapbox_token
SESSION_SECRET=your_session_secret
```

### Initialize Database (Optional)
To seed the database with sample listings:

```bash
node init/index.js
```

---

## Running the Project

### Development Mode
```bash
npm start
```
Or with nodemon for auto-reload:
```bash
npx nodemon app.js
```

The application will run on `http://localhost:8080`

### Production Mode
```bash
NODE_ENV=production npm start
```

---

## Project Structure

```
wanderlust/
├── controllers/
│   ├── listings.js        # Listing CRUD logic
│   ├── reviews.js         # Review logic
│   └── users.js           # User authentication logic
├── models/
│   ├── listing.js         # Listing schema
│   ├── review.js          # Review schema
│   └── user.js            # User schema
├── routes/
│   ├── listing.js         # Listing routes
│   ├── review.js          # Review routes
│   └── user.js            # User routes
├── views/
│   ├── listings/
│   │   ├── index.ejs      # Listings list
│   │   ├── show.ejs       # Single listing details
│   │   ├── new.ejs        # Create listing form
│   │   └── edit.ejs       # Edit listing form
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout
│   └── users/
│       ├── signup.ejs     # Sign up form
│       └── login.ejs      # Login form
├── middleware.js          # Custom middlewares
├── schema.js              # Joi validation schemas
├── cloudConfig.js         # Cloudinary configuration
├── app.js                 # Main application file
└── package.json           # Dependencies
```

---

## Key Features Explained

### Authentication
- Users can sign up with username and password
- Passport.js handles local authentication
- Sessions are stored in MongoDB using `connect-mongo`
- Flash messages provide user feedback

### Listings
- Users can create new listings with title, description, price, location, country, and images
- Images are uploaded to Cloudinary
- Only listing owners can edit or delete their listings
- Full CRUD operations with validation

### Reviews
- Authenticated users can add reviews to listings
- Each review contains a rating and comment
- Only review authors can delete their reviews
- Reviews are linked to listings and users

### Validation
- Joi schema validation for listing and review data
- Server-side validation before database operations
- Flash messages for validation errors

### Authorization
- `isLoggedIn` middleware checks if user is authenticated
- `isOwner` middleware checks if user owns the listing
- `isReviewAuthor` middleware checks if user authored the review
- Unauthorized users are redirected with flash messages

---

## Usage

### Create a New Listing
1. Log in to your account
2. Click "Create Listing"
3. Fill in the listing details (title, description, price, location, country)
4. Upload an image
5. Click "Add" to create the listing

### Edit a Listing
1. Go to your listing
2. Click "Edit"
3. Update the details or image
4. Click "Edit" to save changes

### Delete a Listing
1. Go to your listing
2. Click "Delete"
3. Confirm the deletion

### Add a Review
1. Visit a listing
2. Scroll to reviews section
3. Fill in your rating and comment
4. Click "Add Review"

### Delete a Review
1. Click the delete button on your review
2. Confirm deletion

---

## API Routes

### Listings
- `GET /listings` - Get all listings
- `GET /listings/:id` - Get single listing
- `POST /listings` - Create new listing
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing
- `GET /listings/:id/edit` - Edit form

### Reviews
- `POST /listings/:id/reviews` - Create review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Users
- `GET /signup` - Signup form
- `POST /signup` - Register user
- `GET /login` - Login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

---

## Common Issues & Solutions

### Image Upload Issues
- Ensure Cloudinary credentials are correct in `.env`
- Check Cloudinary account has sufficient quota
- Verify `multer` configuration in `cloudConfig.js`

### Database Connection Issues
- Verify MongoDB URI in `.env`
- Ensure MongoDB server is running
- Check network access for MongoDB Atlas

### Session/Authentication Issues
- Clear browser cookies if login persists after logout
- Ensure `SESSION_SECRET` is set in `.env`
- Check if user exists before authentication

### Infinite Loading on Edit
- Remove any extra async middlewares from routes
- Ensure all middlewares call `next()` or send a response
- Check browser console for errors

### Image Validation Errors
- Update Joi schema to allow optional images on update
- Handle missing images in controllers before validation
- Ensure form includes proper field names

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

## Author

Created as a learning project to build a full-stack web application similar to Airbnb.

---

## Acknowledgments

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Passport.js Documentation](https://www.passportjs.org/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Mapbox Documentation](https://docs.mapbox.com/)

---

## Support

For issues and questions, please open an issue on GitHub or contact the project maintainer.
