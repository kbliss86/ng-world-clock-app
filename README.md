# Time Zone Clocks Angular Application

## Overview
This Angular application allows users to create, manage, and display clocks for multiple time zones with customizable styles. Users can choose between digital or analog formats and adjust various clock properties.

### Key Features
- **Manage Multiple Clocks**: Add, edit, and delete clocks representing different time zones.
- **Customizable Clock Types**: Choose between digital or analog clocks.
- **Live Time Updates**: Clocks update in real time every second.
- **Responsive Design**: Application is styled to work on both mobile and desktop devices.

## Application Structure
The application consists of several components and a service that work together to manage clocks:

### Components
- **App Component**: The root component that manages the overall state and connects different components.
- **Settings Component**: Displays the list of clocks that can be configured.
  - **ClockForm Sub-component**: Displays the settings for a single clock (e.g., time zone, clock type).
- **Clocks Component**: Displays the list of active clocks.
  - **ClockDisplay Sub-component**: Displays an individual clock (either analog or digital).

### Services
- **Clocks Service**: Manages an array of clocks, including methods to add, edit, and delete clocks.

## Dependencies
- **Luxon**: Used for handling date and time data, specifically to manage time zones.

## Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/timezone-clocks-angular.git
   cd timezone-clocks-angular
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/` in your browser to view the app.

## Extended Challenges
- **Responsive Design**: Utilize mobile-first styling principles for better viewing on different devices.
- **Custom Clock Styles**: Allow customization of clock colors, size, fonts, and display format (e.g., show seconds, 12/24 hour).
- **Toggle Settings Panel**: Implement a button to show or hide the settings panel.

## Screenshots
Include screenshots of the application here to showcase the functionality and design.

## License
This project is licensed under the MIT License.
