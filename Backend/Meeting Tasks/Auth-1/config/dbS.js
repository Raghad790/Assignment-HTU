import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
//sequelize object to connect to the database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    //type of database
    //if you are using mysql,sqlite,postgres, etc. you need to specify the dialect
    dialect: "postgres",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    dialectOptions: {
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: true }
          : false,
    },
  }
);
//Test the connection to the database
async () => {
  try {
    await sequelize.authenticate();
    console.log("Postgres connected via sequelize");
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
