
# City Explorer

City Explorer is an engaging web application that enhances urban exploration with real-time information. It provides detailed maps, current weather forecasts, and showcases movies featuring selected cities. Built with React.js and Bootstrap, and supported by Express.js, City Explorer brings city exploration to life.

## Live Demo

Experience City Explorer in action: [Live Demo on Netlify](https://city-explorer-kat.netlify.app/)

## Version

Current version: v1.0

## Features

- **Dynamic City Mapping**: Interactive maps providing detailed layouts of cities.
- **Real-Time Weather Forecasts**: Up-to-date weather information for your selected city.
- **Movie Carousel**: A unique carousel showcasing movies related to the city.
- **Intuitive User Interface**: A user-friendly interface designed for ease of use and engagement.

## Usage Limitations

Please note that City Explorer has a limitation of 50 weather and movie API requests per 24 hours. If you encounter issues with the application not working as expected, it may be due to reaching this limit. I recommend waiting until the 24-hour period has passed or consider upgrading your API plan if you require more frequent access to weather and movie data.

## Installation

Get started with City Explorer using the following steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KatKho/city-explorer.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd city-explorer
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Environment Configuration**:
   - Create a `.env` file in the project root.
   - Add the following environment variables:
     ```
     VITE_LOCATIONIQ_API_KEY=your_locationiq_api_key_here
     VITE_EXPRESS_SERVER_URL=your_express_server_url_here
     ```

5. **Run the App**:
   ```bash
   npm start
   ```

## Domain Modeling

![Domain Modeling](./src/assets/Domain.png)

## Technology Stack

- **React.js**: A robust front-end library for building user interfaces.
- **Bootstrap**: For responsive and attractive UI components.
- **Express.js**: Back-end framework for handling API requests.

## App Structure

Here's a quick overview of the main components:

- **Maps**: Displays detailed maps of cities.
- **Weather**: Shows current weather information.
- **Movies**: Carousel of movies related to the city.
- **Styles**: Contains all styling files for the application.
- **API**: Handles all external API requests and interactions.

## Contact

For any inquiries or contributions, feel free to contact:

- [Ekaterina Khoroshilova](https://www.linkedin.com/in/ekaterina-khoroshilova)