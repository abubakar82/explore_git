var express = require("express"),
	app = express(),
	path = require("path");
	
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.get("/ch1", function(req, res){
	res.sendFile(path.join(__dirname, 'ch1.html'));
})

app.get("/ch3", function(req, res){
	res.sendFile(path.join(__dirname, 'ch3.html'));
})

app.get("/course", function(req, res){
	res.sendFile(path.join(__dirname, 'course.html'));
})

app.use("/assets", express.static(__dirname + '/assets'));

app.listen(3333);
console.log("server got started");
//commit1
//changed
