#!/usr/bin/env node

const { connect } = require("./client");
const { setupInput } = require("./input");

const conn = connect();
setupInput(conn);

console.log("Connecting ...");
