const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({ host: IP, port: PORT });

  conn.on('data', (message) => {
    console.log('The server message: ', message);
  });

  conn.on('connect', function() {
    console.log('Successfully connected to game server.');
    conn.write('Name: AZ');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect };
