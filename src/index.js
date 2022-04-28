import app from "./app.js";
import { sequelize } from "./database/database.js";
/* import "./models/Project.js";
import "./models/Task.js"; */
//Conexion a la base de datos
async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false });
    app.listen(3000);

    console.log("Server activo");
  } catch (error) {
    console.log("NO se pudo conectar a la db");
  }
}

main();
