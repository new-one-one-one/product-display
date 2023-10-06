# Product Website Project

This project comprises both a backend server and a frontend client for a comprehensive product listing website.

## Running the Project Locally

### Backend Configuration

1. Begin by cloning this repository to your local environment:
   ```
   git clone https://github.com/new-one-one-one/product-display
   ```

2. Navigate to the server directory:
   ```
   cd server
   ```

3. Install the necessary server dependencies:
   ```
   npm install
   ```

4. Launch the backend server on port 3000:
   ```
   npm start
   ```

### Frontend Configuration

1. Move to the client directory:
   ```
   cd client
   ```

2. Install the required client-side dependencies:
   ```
   npm install
   ```

3. Start the frontend user interface on port 8080:
   ```
   npm start
   ```

This will initiate the frontend and make it accessible at http://localhost:8080.
4. In order to manage the backend request from frontend please configure .env.local file present inside client folder
```
REACT_APP_BACKEND_URL=http://localhost:3000 
```

You can change this as per your requirements

### Alternative Startup Script

To streamline the project launch process, you can also employ the provided bash script:

1. Execute the script with the desired backend and frontend port configuration:
   ```
   bash run-product-website.sh --backend-port 8000 --frontend-port 3000
   ```

## Frontend Highlights

- The frontend makes effective use of the Material-UI library for superior styling and design.
- Product data, albeit fictional, is presented via visually appealing cards.
- Product ratings are elegantly showcased using a star-based format.
- Enhanced user experience through robust search and sorting functionalities.
- User-friendly toast notifications provide immediate feedback upon purchase.
- The website's responsive design ensures optimal performance on mobile devices.

## Backend Highlights

- The backend is meticulously constructed with Express.js, facilitating efficient routing.
- Product data is stored methodically in JSON files, sorted by year, month, date, and hour.
- File operations, including both asynchronous and synchronous methods, are facilitated via `fs.readFileSync`.

## Deployed Project On Vercel

- [Product Display WebSite](https://product-display-frontend.vercel.app/)
- [Recording] (https://drive.google.com/file/d/1cnS1eYqjvFtrcY3r9VmzxGqPcN2ZBWX_/view?usp=sharing)
