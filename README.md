# Blog App

This is a blog application built using Vite, React, and Firebase. The app allows users to read and post comments on any blog. Only the admin has the privileges to create, update, or delete blogs.

## Features

- **Read Blogs:** Users can browse and read blogs posted by the admin.
- **Post Comments:** Users can post comments on any blog.
- **Admin Privileges:** Only the admin can create, update, or delete blogs.
- **Rich Text Editor:** The TinyMCE editor from [Tiny](https://www.tiny.cloud/) is used for creating and editing blogs.

## Tech Stack

- **Frontend:** Vite, React
- **Backend:** Firebase (Firestore, Authentication)
- **Editor:** TinyMCE from [Tiny](https://www.tiny.cloud/)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blog-app.git
    cd blog-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
   - Create a Firebase project.
   - Enable Firestore and Authentication (Email/Password sign-in).
   - Add your Firebase config to the project.

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Access the app in your browser at `http://localhost:3000`.

## Usage

- **Admin:**
  - Log in with your admin credentials.
  - Use the TinyMCE editor to create, update, or delete blogs.

- **Users:**
  - Browse the available blogs.
  - Post comments on any blog.

## Contributing

If you would like to contribute to this project, feel free to open a pull request or submit an issue.

## License

This project is open-source and available under the MIT License.
