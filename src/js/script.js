// Function to load the header content
function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html');
    window.alert("sometext "+ xhr.status);
    xhr.onload = function() {
        
      if (xhr.status === 200) {
        window.alert("sometext");
        document.getElementById('header').innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Load the header on page load
  window.onload = loadHeader;