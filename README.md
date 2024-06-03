# 🌤️ Weather App

A simple weather application built with React and TypeScript, utilizing the OpenWeatherMap API to fetch weather data based on city input.

## Features

- Allows users to input a city name and fetch current weather data.
- Displays temperature, weather description, and city name.
- Error handling for invalid city input or failed API requests.

## Technologies Used

- React ⚛️
- TypeScript 🚀
- Tailwind CSS 💅 (for styling)
- OpenWeatherMap API ☁️

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weatherApp.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd weatherapp
   ```

3. **Install dependencies:**

   Ensure you have Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/).

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory of the project. You can do this by running the following command:

   ```bash
   touch .env
   ```

   Open the `.env` file with a text editor and add your OpenWeatherMap API key like this:

   ```
   VITE_REACT_APP_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual API key obtained from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   This command will start the development server. Once it's running, open your web browser and navigate to `http://localhost:5173` to view the app.

6. **Explore the app:**

   Now you can explore the Weather App! Enter the name of a city in the input field and click the "Search" button to fetch weather data for that city.

## Usage

- Enter the name of the city you want to check the weather for in the input field.
- Click the "Search" button to fetch weather data for that city.
- Weather information will be displayed below the input field.

## Screenshots

![image](https://github.com/OrestisSl/weatherApp/assets/99047399/258205bb-bbd5-42c9-a136-bbdda7da7a89)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
