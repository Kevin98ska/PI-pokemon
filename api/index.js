//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { conn } = require('./src/db.js');
const { sendData } = require('./src/dataHandlers.js');
const PORT = 3001;
const server = require('./src/server.js');

// Sincroniza la BD y luego inicia el servidor
conn.sync({ force: true }).then(() => {
  console.log("Base de datos sincronizada correctamente.");
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
    sendData(); // despues de sincronizar la BD
  });
}).catch((error) => {
  console.error("Error al sincronizar la base de datos:", error);
});