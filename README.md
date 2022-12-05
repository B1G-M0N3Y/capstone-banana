# Banana

Banana.com is a parody of apple.com where instead of selling tech we 'sell' bananas. Currently users are able to sign up, fill up and checkout a cart, and leave reviews on their favorite products.

Live Site: https://banana-aa.herokuapp.com/


![image](https://user-images.githubusercontent.com/35247153/205614072-359aae9f-c104-426f-854b-3bac7026adda.png)

## Wiki Links
- [Database Schema](https://github.com/B1G-M0N3Y/capstone-banana/wiki/DB-Schema)
- [Feature List](https://github.com/B1G-M0N3Y/capstone-banana/wiki/Features)
- [User Stories](https://github.com/B1G-M0N3Y/capstone-banana/wiki/User-Stories)
- [Wireframes](https://github.com/B1G-M0N3Y/capstone-banana/wiki/Wire-Frames)

## Technologies:

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![postgresql](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white)

## Getting Started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/B1G-M0N3Y/capstone-banana.git
   ```

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Make sure the SQLite3 database connection URL is in the **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

## About Links
### Noah Kerner
<a href="https://www.linkedin.com/in/noah-kerner-694797235/" target="_blank">

![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)

</a>
