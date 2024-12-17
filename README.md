# Chat App

A chat application built with React, Vite, and various other technologies.

## Project Description

This project is a chat application that allows users to sign up, log in, and chat with other users. It includes features like user authentication, profile management, and real-time updates.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/chat-app.git
    cd chat-app
    ```

2. Navigate to the `server` directory and install the dependencies:

    ```bash
    cd server
    npm install
    ```

3. Navigate to the `web` directory and install the dependencies:

    ```bash
    cd web
    npm install
    ```

4. Create a `.env` file in the `server` directory and add the following environment variables:

    ```properties
    CLOUDINARY_CLOUD_NAME="your_cloud_name"
    CLOUDINARY_API_KEY="your_api_key"
    CLOUDINARY_API_KEY_SECRET="your_api_secret"
    MONGODB_URL=mongodb://localhost:27017/
    PORT=5001
    JWT_SECRET=your_jwt_secret
    ```

5. Create a `.env` file in the `web` directory and add the following environment variable:

    ```properties
    VITE_API_BASE_URL=http://localhost:5001/api
    ```

## Usage

1. Start the server:

    ```bash
    cd server
    npm run dev
    ```

2. Start the development server for the web application:

    ```bash
    cd web
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- React
- Vite
- React Router
- Zustand
- Axios
- Lucide React
- React Hot Toast

## License

This project is licensed under the MIT License.
