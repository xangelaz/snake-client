// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // console.log(`input: ${key}`)
  // \u0003 maps to ctrl+c input
  switch (key) {
    case "\u0003":
      process.exit();
    case "w":
      connection.write("Move: up");
      break
    case "a":
      connection.write("Move: left");
      break
    case "s":
      connection.write("Move: down");
      break
    case "d":
      connection.write("Move: right");
      break
    case "h":
      connection.write("Say: Hello there!");
      break
    case "i":
      console.log("I'm going to win >:)");
  }
};


module.exports = { setupInput };
