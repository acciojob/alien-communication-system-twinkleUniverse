console.log("start");

setTimeOut(function () {
	console.log("Macrotask 1");
},0);

promise.resolve().then(function(){
	console.log("Microtask 2");
});
console.log("end");
