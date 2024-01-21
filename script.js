console.log("start");

setTimeout(function () {
	console.log("Macrotask 1");
},0);

Promise.resolve().then(function(){
	console.log("Microtask 2");
});
console.log("end");
