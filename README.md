# Car Rental Application

A full-stack car rental application built with React (frontend) and Node.js/Express (backend).

## Project Structure

```
carRental/
├── client/          # React frontend application
├── server/          # Node.js/Express backend API
└── README.md        # This file
```

## Features

- User authentication and authorization
- Car listing and search functionality
- Booking management system
- Owner dashboard for car management
- Image upload and optimization
- Real-time availability checking

## Tech Stack

### Frontend (client/)
- React.js
- Vite
- CSS3
- Context API for state management

### Backend (server/)
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- ImageKit for image optimization
- Multer for file uploads

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- ImageKit account (for image uploads)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd carRental
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Environment Setup:

Create `.env` files in the server directory with the following variables:

```env
# Server .env file
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
PORT=3000
```

4. Start the development servers:

```bash
# Start the backend server (from server directory)
cd server
npm run server

# Start the frontend development server (from client directory)
cd client
npm run dev
```

## API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/data` - Get user data
- `GET /api/user/cars` - Get all available cars

### Owner Routes
- `POST /api/owner/change-role` - Change user role to owner
- `POST /api/owner/add-car` - Add a new car
- `GET /api/owner/cars` - Get owner's cars
- `POST /api/owner/toggle-car` - Toggle car availability
- `POST /api/owner/delete-car` - Delete a car
- `GET /api/owner/dashboard` - Get dashboard data
- `POST /api/owner/update-image` - Update user profile image

### Booking Routes
- `POST /api/bookings/check-availability` - Check car availability
- `POST /api/bookings/create` - Create a booking
- `GET /api/bookings/user` - Get user bookings
- `GET /api/bookings/owner` - Get owner bookings
- `POST /api/bookings/change-status` - Change booking status

## Environment Variables

Make sure to create a `.env` file in the server directory with the following variables:

- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `IMAGEKIT_PUBLIC_KEY`: ImageKit public key
- `IMAGEKIT_PRIVATE_KEY`: ImageKit private key
- `IMAGEKIT_URL_ENDPOINT`: ImageKit URL endpoint
- `PORT`: Server port (default: 3000)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

