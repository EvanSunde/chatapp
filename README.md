# Instant Chat

Instant Chat is a web-based chat application that uses Firebase for backend services (authentication and storing messages), and React for the frontend user interface.

## Features

- User Authentication with Google
- Real-time chat functionality
- Firestore database to store messages

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm
- Firebase account

### Installation

1. Clone the repo in your local directory using `git clone`.
2. Navigate to the Firebase console, create a new project and enable the necessary services (Authentication, Firestore).
3. Replace the Firebase config object in the `.env` file with your Firebase project settings.
4. Run `npm install` to install the necessary dependencies.
5. Run `npm start` to start the local development server.

## Usage

Open `http://localhost:3000` in your browser. If you're not authenticated, you'll be redirected to the sign-in page. You can sign in with Google. After signing in, you'll be redirected to the chat room.

## Firebase Project Setup

In your Firestore database, go to the rules tab and change `if false` to `if true`. This step is necessary to read and write data to your Firestore database.

