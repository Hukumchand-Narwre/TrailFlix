# Problem Statement

Many people struggle to find a simple and convenient way to watch movie trailers before deciding what to watch. App makes it easy for users to explore and preview trailers, leaving them without a straightforward tool to help them make informed decisions about their movie choices. Creating an app that addresses this need and provides a user-friendly solution is the main challenge.

## Target Customer

The target customers for an app

- **Movie Enthusiasts:** Individuals who love watching movies and want a quick and convenient way to preview trailers before deciding what to watch

- **Casual Viewers:** People who enjoy occasional movie nights and want an easy tool to discover new movies through trailers.

- **Decision-Makers:** Users who prefer making informed decisions about their entertainment choices and value the ability to preview a movie's content before committing to watching it.

## Demo

URL - https://netflix-clone-hukum.netlify.app/  

## Project Summary

I created a cool app where you can easily watch movie trailers. By using a special movie-trailer tool and connecting it with React YouTube, the app smoothly plays trailers. Making it look and feel like Netflix was a bit tricky, but I figured it out. Now, it's a simple and fun way to check out trailers before picking a movie!

**Component Tree Diagram**

![netflix](https://github.com/Hukumchand-Narwre/netflix_clone/assets/85044429/97e7e526-cc79-4e59-8e67-2caef310f442)

## Technology Used

- **React:**  The application is developed using React, providing a robust and efficient front-end framework for building user interfaces.
- **Movie Trailer API:** Integrates the Movie Trailer API to fetch movie data, including titles, posters, and trailer links.
- **React-YouTube:** Employs the React-YouTube library to embed and play YouTube videos seamlessly within the application.
- **Appwrite:** Appwrite is a cloud-based mobile and web application development platform that provides a set of ready-to-use APIs and real-time collaboration tools to build custom 
                applications without writing more code. It follows a No-code approach, allowing developers to create a new mobile app without any coding experience.
- **Netlify:** Netlify is a cloud-based web development platform that allows developers to host and deploy their websites, web applications, and React applications with 
               lightweight pre-built components and without server management

## Local Installation Guide

Follow these steps to set up the project on your local machine:

- **Prerequisites -**
Ensure you have Node.js installed:

You can download and install Node.js from https://nodejs.org/

**Installation steps**
- **1. Clone the repository**
```bash
git clone https://github.com/Hukumchand-Narwre/TrailFlix.git
```
- **2. Navigate to project directory**
```bash
cd netflix_clone
```
- **3. Install dependencies**
```bash
npm install
```
- **4. Configure environment variables:**
Create the .env.local file in root directory of the project  and create the following variables.
```bash
NEXT_PUBLIC_APPWRITE_PROJECT_ID
NEXT_PUBLIC_DATABASE_ID
NEXT_PUBLIC_COLLECTION_ID
NEXT_PUBLIC_GOOGLEAUTH_ID
```
Update the variables with your configuration.
- **5. Run the project**
```bash
 npm run dev
```
