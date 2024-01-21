console.log("start");

setTimeout(function () {
	console.log("Macrotask 1");
},3);

setTimeout(function () {
	console.log("Macrotask 2");
},0);

Promise.resolve().then(function(){
	console.log("Microtask 2");
});
Promise.resolve().then(function(){
	console.log("Microtask 1");
});
console.log("end");
