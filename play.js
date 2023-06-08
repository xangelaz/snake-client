#!/usr/bin/env node

const { connect } = require("./client");
const { setupInput } = require("./input");

const conn = connect();
setupInput(conn);


console.log("Connecting ...");



// // code below is from cloning
// process.stdout.write("\x07");

// const { Game } = require("./src/Game")
// const { UserInterface } = require("./src/UserInterface")
// const { RemoteInterface } = require("./src/RemoteInterface")
// const game = new Game(new UserInterface(), new RemoteInterface())

// // Begin game
// game.start()
