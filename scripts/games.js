const animSpeed = 50;

function showElement(element){
	var whichElement = element.getAttribute("value");
	
	switch(whichElement){
		case "home":
			$("#home").slideToggle(animSpeed, "swing");
		break;

		case "about":
			$("#about").slideToggle(animSpeed, "swing");
		break;

		case "contact":
			$("#contact").slideToggle(animSpeed, "swing");
		break;

		case "join":
			$("#join").slideToggle(animSpeed, "swing");
		break;
	}
}