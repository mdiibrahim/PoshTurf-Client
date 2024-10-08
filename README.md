# PoshTurf-Client

This is the Client Repo of [PoshTurf-Server](https://github.com/mdiibrahim/PoshTurf-Server)

## Introduction

PoshTurf Client is a responsive and modern web application designed for seamless turf service or sports booking management. Built using React and TypeScript, the project leverages a variety of technologies to provide a robust and efficient user experience. Both users and administrators have tailored functionalities for booking, managing facilities, and handling administrative tasks.

## Project Description

The PoshTurf Client project provides users with a platform to manage and interact with various turf services. Registered users can book facilities, make payments, and view their bookings on a personalized dashboard. Administrators have additional capabilities to add and manage facilities and other admin users, ensuring smooth operations.

## Live Demo

You can access the live demo of the application: [here](https://poshturf-client.vercel.app/).

## Features

- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Authentication:** Secure login and registration with JWT handling.
- **Facility Management:** Users can book facilities, view details, and make payments.
- **Admin Management:** Admins can add new facilities, manage existing facilities, and assign admin roles.
- **User Dashboard:** Personalized dashboard for users to manage bookings.
- **Dynamic UI Components:** Interactive elements such as carousels, date pickers, and form validations.
- **State Management:** Powered by Redux Toolkit.
- **Custom Components:** Reusable components for common UI patterns.

## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for efficient data handling.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Vite**: Fast front-end build tool.
- **Tailwind CSS**: Utility-first CSS framework.
- **DaisyUI**: UI component library for Tailwind CSS.
- **Axios**: Promise-based HTTP client for making API requests.

## Installation Guideline

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mdiibrahim/PoshTurf-Client.git
   cd PoshTurf-Client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173`.

### Build for production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

## Usage

### Running Locally

Start the development server and navigate to `http://localhost:5173`. You can then use the application to manage turf services. The application includes various components, such as:

- **Booking System:** Users can browse available facilities, book them, and complete payments securely.
- **Admin Panel:** Admins can add new facilities, manage existing ones, and assign admin roles.
- **User Dashboard:** Personalized dashboard for users to view and manage their bookings.

# Screenshots

Here are some key screenshots of the application:

1. **Home Page:** Showcases available facilities and user interactions.

   ![Home Page](./src/assets/screenshots/home.png)

2. **Facilities Listing:** Displays all available facilities with search and filter options.

   ![Facilities Listing](./src/assets/screenshots/facilityList.png)

3. **Facility Details:** Detailed view of a selected facility with booking options.

   ![Facility Details](./src/assets/screenshots/facilitydetails.png)

4. **Checkout:** Secure payment page for confirming bookings.

   ![Checkout](./src/assets/screenshots/checkout.png)

5. **User Dashboard:** Personalized dashboard for users to manage their bookings.

   ![User Dashboard](./src/assets/screenshots/user.png)

6. **Admin Dashboard:** Admin-specific interface for managing facilities and admins.

   ![Admin Dashboard](./src/assets/screenshots/admin.png)

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## Acknowledgements

I would like to express my gratitude to all the open-source contributors who helped shape this project through their invaluable contributions, to the creators of React, Redux Toolkit, Tailwind CSS, Vite, DaisyUI, and Axios for providing the powerful tools and libraries that made this application possible. Special thanks to GitHub for offering a platform that facilitates collaboration and project management. I am also deeply thankful to my mentors, friends, and family for their unwavering support and encouragement throughout the development process. This project would not have been possible without the collective effort and dedication of everyone involved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## Contact

For further information, please reach out to [E-mail](mailto:mdiibrahim549@gmail.com).
