# Credit Card Form App

A simple React application that displays a credit card preview (front and back) while the user fills out a form.
The card details update in real-time as the user types.

## Live Demo

Check out the deployed version of this project here:  
[Credid Card Form ](https://credit-card-form-webapp.netlify.app/)

# Features

-Live Preview: Updates cardholder name, number, expiration date, and CVC instantly on the card images.
-Form Validation
-State Management: Uses React’s useState to track card details.
-Two Card Views: Shows both front and back of the card.

# Project Structure

src/
├── App.js # Main component that manages state
├── Form.js # Input form for card details
├── CardFront.js # Displays the front side of the card
├── CardBack.js # Displays the back side of the card
├── styles/
│ └── App.css # Styling for the application

# Tech Stack

- React
- CSS

# Usage

- Enter card details into the form.
- Watch as the preview updates automatically.
- Extend with validation or API integration if needed.

# Installation

``bash
git clone https://github.com/your-username/credit-card-form.git
cd credit-card-form // Clone the repository:
npm install // Install dependencies
npm start //Start the development server
http://localhost:3000 // Open in your browser
