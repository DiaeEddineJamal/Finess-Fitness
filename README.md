# 🏋️‍♀️ Finesse Fitness

> Your Personalized Fitness Dashboard



<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## About

Finesse Fitness is a comprehensive fitness dashboard designed to help you achieve your health and wellness goals. Built with React.js and Typescript on the frontend, and Maven Spring Boot on the backend, Finesse Fitness offers a seamless and intuitive user experience.

## Features

1. **User Authentication**: Users can sign up and sign in to access the Finesse Fitness dashboard.
2. **Homepage**: The homepage provides an overview of the user's fitness progress and insights.
3. **Workout Section**: Users can explore personalized workout routines based on their needs and preferences.
4. **Calorie Calculator**: Users can calculate their daily calorie intake and receive meal suggestions based on their calorie requirements.

## Installation

To run Finesse Fitness locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/finess-fitness.git
   ```

2. **Navigate to the project directory**:
   ```
   cd finesse-fitness
   ```

3. **Install dependencies for the frontend**:
   ```
   cd finess-fitness/frontend
   npm install
   ```

4. **Install dependencies for the backend**:
   ```
   cd finess-fitness/ffbackend/ffbackend
   mvn clean install
   ```

5. **Start the frontend development server**:
   ```
   cd finess-fitness/frontend
   npm start
   ```

6. **Start the backend Spring Boot application**:
   ```
    cd finess-fitness/ffbackend/ffbackend
   mvn spring-boot:run
   ```

The Finesse Fitness application should now be running on `http://localhost:3000` (frontend) and `http://localhost:8080` (backend).

## Usage

1. **Sign Up**: New users can sign up to create an account.
2. **Sign In**: Registered users can sign in to access the Finesse Fitness dashboard.
3. **Homepage**: The homepage displays the user's fitness progress and insights.
4. **Workout Section**: Users can browse and select personalized workout routines.
5. **Calorie Calculator**: Users can calculate their daily calorie intake and receive meal suggestions.

## Technologies

Finesse Fitness is built using the following technologies:

- **Frontend**:
  - [React.js](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [React Router](https://reactrouter.com/)
  - [Axios](https://axios-http.com/)
  - [Styled Components](https://styled-components.com/)
- **Backend**:
  - [Maven](https://maven.apache.org/)
  - [Spring Boot](https://spring.io/projects/spring-boot)
  - [Java](https://www.java.com/)
  - [Spring Security](https://spring.io/projects/spring-security)
  - [Spring Data JPA](https://spring.io/projects/spring-data-jpa)

## Contributing

We welcome contributions to the Finesse Fitness project. If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Push your branch to your forked repository
5. Submit a pull request

## License

Finesse Fitness is licensed under the [MIT License](LICENSE).
