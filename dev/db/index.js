const mysql = require("mysql");

const config = {
    host: "localhost",
    user: "dev", // permisos: crud only
    password: "dev",
    port: 3306,
    database: "protoportafoliowebsite_db",
    connectionLimit: 10
};
  
// iniciamos la conexion con un createPool para que siga a la escucha de posibles peticiones
const conn = mysql.createPool(config);

// objeto a devolver con los registros o el output de las operaciones
let output = {};

// testing area and template
output.testingQuery = () => {
    return new Promise(async (resolve, reject) => {
        // funcionando bien solo que no hay registros, crear base de datos test
        await conn.query(`select * from personas;`, (err, results) =>{
            if(err)return reject(err);
            else{
                return resolve(JSON.parse(JSON.stringify(results)));
            }
        });
    });
};

module.exports = output;