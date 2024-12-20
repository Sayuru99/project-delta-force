# Project Delta Force

This is a static website built using **Vite**, **React**, **TailwindCSS**, and **React Router**. The site is optimized with lazy loading for images and includes reusable components such as a header, footer, and contact form.

## Features

- **Responsive Design**: The website adapts to different screen sizes using TailwindCSS.
- **Lazy Image Loading**: Images are lazy-loaded for better performance, ensuring they load only when they enter the viewport.
- **React Router**: Allows navigation between different pages (Home and Contact Us).
- **Modern Tech Stack**: Built with Vite, React, and TailwindCSS for fast development and optimized performance.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### Clone the Repository

First, clone the repository:

```bash
git clone https://github.com/Sayuru99/project-delta-force.git
cd project-delta-force
```

### Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### Run the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

This will start a local server at `http://localhost:3000`, and you can view your project in the browser.

### Build the Project

To build the project for production, run:

```bash
npm run build
```

The production-ready files will be created in the `dist/` directory.

### Preview the Production Build

To preview the production build, run:

```bash
npm run preview
```

This will serve the built version of the project locally.

## Folder Structure

The project structure is as follows:

```
bpn-project/
├── public/
│   ├── index.html              # Main HTML file
├── src/
│   ├── components/             # Reusable components
│   │   ├── Header.jsx          # Header with navbar
│   │   ├── Footer.jsx          # Footer
│   ├── pages/                  # Individual pages
│   │   ├── Home.jsx            # Home page
│   │   ├── Contact.jsx         # Contact Us page
│   ├── App.jsx                 # Main app with routing
│   ├── index.css               # Global CSS file
│   ├── main.jsx                # Entry point
├── package.json                # Dependencies and scripts
└── README.md                   # Documentation (this file)
```

### Components

- **Header**: Contains the site logo and a navigation bar.
- **Footer**: Displays the copyright notice.
- **Home**: The main landing page.
- **Contact**: A page with a contact form for users to submit their details.

### Pages

- **Home Page** (`/`): Displays a welcome message and an image that is lazy-loaded.
- **Contact Page** (`/contact`): Contains a contact form with fields for name, email, and message.

## Tech Stack

- **Vite**: A fast build tool that provides a development server and build optimizer.
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For managing navigation and routing between pages.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **React Lazy Load Image Component**: For optimizing image loading with a blur effect until the image is fully loaded.

## Optimization

- **Lazy Image Loading**: Using the `react-lazy-load-image-component` library to load images only when they enter the viewport, reducing initial page load time.
- **Vite Imagetools**: Optimizing image files during build for better performance.

### How to Contribute

1. Fork the repository.
2. Clone your forked repository locally.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them.
5. Push your changes to your forked repository.
6. Submit a pull request with a clear description of your changes.

```

```
