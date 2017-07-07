"use strict";

var fs = require("fs");

/**
 * Reads and parses a JSON file
 * @param {string} file
 * @return {object}
 */
module.exports.readJSON = function(file){
  return JSON.parse(fs.readFileSync(file, "utf8"));
};

/**
 * Gets all directores in another directory
 * @param {string} path
 * @return {object}
 */
module.exports.getDirectories = function(path){
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}
