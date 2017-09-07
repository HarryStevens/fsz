/*
@license: MIT License

Copyright (c) 2017 Harry Stevens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

"use strict";

var fs = require("fs"),
	http = require("http");

module.exports = fs;
module.exports = http;

/**
* Reads and parses a JSON file
* @param {string} file The JSON file
* @return {array} An array with the data 
*/
function readJSON(file){
  return JSON.parse(fs.readFileSync(file, "utf8"));
};

module.exports.readJSON = readJSON;

/**
* Writes a JSON file
* @param {string} file Name of the output file (.json extension will be added)
* @param {string} json The JSON variable
*/
function writeJSON(file, json){
	var s = file.split(".");
	if (s.length > 0) {
		var ext = s[s.length - 1];
		if (ext != "json"){
			file = file + ".json";
		}
	}
  fs.writeFileSync(file, JSON.stringify(json));
};

module.exports.writeJSON = writeJSON;

/**
* Returns a list of all directories in a parent directory
* @param {string} path The path of the parent directory
* @return {array} An array with a list of directories 
*/
function getDirectories(path){
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });	
}

module.exports.getDirectories = getDirectories;

/**
* Makes a directory if it doesn't already exist in a parent directory. Dependencies: getDirectories
* @param {string} dir The name of the new directory
* @param {string} [parent=.] The name of the parent directory
*/
function mkdirIf(dir, parent) {
	var path = parent ? parent : ".";
	if (getDirectories(path).indexOf(dir) == -1) fs.mkdir(path + "/" + dir);
}

module.exports.mkdirIf = mkdirIf;

/**
* Downloads a file.
* @param {string} input The input file path, often a URL.
* @param {string} [output=input file name] The name of the downloaded file.
*/
function download(input, output) {
	if (!output) output = input.split("/").pop();
	var file = fs.createWriteStream(output);
	var request = http.get(input, response => { response.pipe(file); });
}

module.exports.download = download;