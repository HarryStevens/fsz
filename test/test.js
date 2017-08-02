"use strict";

var expect = require("chai").expect;
var fsz = require("../index");

describe("#rdjson", function() {

    it("should read and parse JSON", function(){
        var result = fsz.readJSON("test/test.json");
        expect(result.length).to.equal(2);
        expect(result[0].name).to.equal("Harry");
        expect(result[0].age - result[1].age).to.equal(5);
    });

    it("should get a list of directories in another directory", function(){
    	var result = fsz.getDirectories(".");
    	expect(result.indexOf("blech")).to.equal(-1);
    });

    it("should not make a directory if it already exists", function(){
        fsz.mkdirIf("test");
        var result = fsz.getDirectories(".");
        expect(result.indexOf("blech")).to.equal(-1);
    });

});