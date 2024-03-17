// URL dem Iframe übergeben
const iframe = document.getElementById('myIframe');
if (iframe) {
	console.log('Iframe found!');
	const url = window.location.href; // Get parent window URL
	iframe.contentWindow.postMessage(url, '*'); // Send URL to iframe
} else {
	console.log('Iframe not found!');
}

	
// Magnific Popup http://dimsemenov.com/plugins/magnific-popup/
$(document).ready(function() {
  $('.image-link').magnificPopup({
    type: 'image', // Set type to image
    closeOnContentClick: true,
    closeBtnInside: true
  });
});

