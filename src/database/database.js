import Sequelize from "sequelize";

//Conexion a la base de datos
/* export const sequelize = new Sequelize(
  "dbb3q496fruu8e",
  "vljfvduzwsgxjf",
  "5aca7d3dc14bdc6fc1da53be570f32bdf63dd8aad2297e0bca3a1d0666c7340c",
  {
    host: "ec2-3-230-122-20.compute-1.amazonaws.com",
    dialect: "postgres",
  }
); */
export const sequelize = new Sequelize(
  "postgres://vljfvduzwsgxjf:5aca7d3dc14bdc6fc1da53be570f32bdf63dd8aad2297e0bca3a1d0666c7340c@ec2-3-230-122-20.compute-1.amazonaws.com:5432/dbb3q496fruu8e",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
