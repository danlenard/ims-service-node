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
2. Go to **Server** → **Data Import**.  
3. Select **Import from Self-Contained File** and choose the `ims_db.sql` file.  
4. Select your target database (`ims_phone`).  
5. Click **Start Import** to load the schema and data.  

## **Built With**  
- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **Sequelize** – ORM for database management  
- **MySQL** – Database  
- **TypeScript** – Type safety  
- **Bcrypt** – Password hashing 
