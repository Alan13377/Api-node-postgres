import app from "./app.js";
import { sequelize } from "./database/database.js";
let port = process.env.PORT || 3000;
/* import "./models/Project.js";
import "./models/Task.js"; */
//Conexion a la base de datos
async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log(`Puerto ${port}`);
    });
    console.log("Server activo");
  } catch (error) {
    console.log("NO se pudo conectar a la db");
  }
}

main();
