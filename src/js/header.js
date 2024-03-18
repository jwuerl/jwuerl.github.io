// Dem Iframe wird die URL übergeben anhand dessen die Linkfarbe gesetzt werden kann
window.addEventListener('message', function(event) {
	const parentUrl = event.data;
	// Use the received parentUrl here
	console.info("parentUrl=" + parentUrl);
	const portfolioLink = document.getElementById('portfolioLink');
	const kontaktLink = document.getElementById('kontaktLink');
	const s1 = parentUrl.indexOf("portfolio.html");
	const s2 = parentUrl.indexOf("blender.html");
	const s3 = parentUrl.indexOf("figma.html");
	const s4 = parentUrl.indexOf("fotos.html");
	const s5 = parentUrl.indexOf("videos.html");
	const s6 = parentUrl.indexOf("index.html");
	if (s1 > -1 || s2 > -1 || s3 > -1 || s4 > -1 || s5 > -1 || s6 > -1) {
		portfolioLink.style.color = "#888888";
	}
	if (parentUrl.indexOf("kontakt.html") > -1) {
		kontaktLink.style.color = "#888888";
	}
});