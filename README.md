# **IMS Subscriber Service API**  

A **Node.js** and **Express** backend service for managing IMS home phone subscribers.  

## **Installation**  

Clone the repository:  
```sh
git clone https://github.com/danlenard/ims-service-node.git
cd ims-service-node
```

Install dependencies:  
```sh
npm install
```

## **Running the Server**  
Start the development server:  
```sh
npm run dev
```

## **Environment Variables**  
Create a `.env` file in the root directory and define the following:  
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=ims_phone
PORT=5000
```

## **Import Database in MySQL Workbench**  
1. Open **MySQL Workbench**.  
2. **Create the database**:  
   - Go to the **SQL Editor** and run:  
     ```sql
     CREATE DATABASE ims_phone;
     ```
   - Select the newly created `ims_phone` database.  
3. Go to **Server** → **Data Import**.  
4. Select **Import from Dump Project Folder** and choose the `ims_db_dump` folder.  
5. Select your target database (`ims_phone`).  
6. Click **Start Import** to load all SQL files into the database. 

## **Built With**  
- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **Sequelize** – ORM for database management  
- **MySQL** – Database  
- **TypeScript** – Type safety  
- **Bcrypt** – Password hashing 
