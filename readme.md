# Files reader

This is a simple files reader that can read the files in any folder. It is written using Node.js, the files are stored in a redux state. The files are read automatically when you launch the application, but in order to update the files list, you have to scan the folder again. After rescanning you will not only see all the files on the folder, but deleted files as well, they are marked as inactive files. You can also download the .json file that contains the full array of files, including the deleted ones.

### Routes

##### There are three routes:

- /list
  - shows the full list of files in a directory after the last update;
  - doesn't update the list automatically;
- /scan
  - updates the list of files in a directory;
  - if a file was deleted after the last update, changes the file active status to false;
  - if a file was reintroduced to the folder, changes the file active status to true;
  - shows the full list of files in a directory;
- /download-state
  - creates a .json file with the list of files in a directory;
  - automatically downloads the file;
  - doesn't update the list automatically;

### How to use

##### In order to use this application:

- Clone or download the master branch of this repository;
- Install npm packages using 'npm install' command in the main folder's terminal;
- Rename '.env.example' file to '.env' and change the angle brackets and text inside them to the variable value. There are two variables - PORT(to locally launch the application) and FOLDER_PATH(to select the directory for application to scan). For example:
  ```
  PORT=3000
  FOLDER_PATH=C:\Program Files
  ```
- Use command 'npm start' to start your application.

### Npm packages

##### In total 7 npm packages were used to create this application:

- @reduxjs/toolkit;
- cors;
- dotenv;
- express;
- morgan;
- redux;
- eslint.
