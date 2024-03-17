// Magnific Popup http://dimsemenov.com/plugins/magnific-popup/
$(document).ready(function() {
  $('.image-link').magnificPopup({
    type: 'image', // Set type to image
    closeOnContentClick: true,
    closeBtnInside: true
  });
});


// Function to load the header content
function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html');
    
    xhr.onload = function() {
        
      if (xhr.status === 200) {
        window.alert("sometext");
        document.getElementById('header').innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Load the header on page load
  // window.onload = loadHeader;
  
  // window.alert("sometext "+ xhr.status);