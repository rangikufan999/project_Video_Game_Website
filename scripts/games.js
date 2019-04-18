function showElement(element){
	var whichElement = element.getAttribute("value");
	
	switch(whichElement){
		case "home":
			$("#home").slideToggle("1000", "swing");
		break;

		case "about":
			$("#about").slideToggle("1000", "swing");
		break;

		case "contact":
			$("#contact").slideToggle("1000", "swing");
		break;

		case "join":
			$("#join").slideToggle("1000", "swing");
		break;
	}
}