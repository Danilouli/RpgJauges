window.addEventListener("load", function() {
	console.log("JS loade");
	document.querySelector("#lifeBar").addEventListener("click", function(){
		alert(this.querySelector("ratio").innerHTML);
	},false);
}, false);
