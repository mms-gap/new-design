function loadPage(href){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
 }
 /*Load NavBar */
 
 var href = 'html/nav.html'
 window.onload = document.getElementById('navbar_home').innerHTML = loadPage(href);
 
 /*Load header*/
 
  var href = 'html/header.html'
 window.onload = document.getElementById('header').innerHTML = loadPage(href);
 
  /*Load ourProduct*/
 
  var href = 'html/ourProduct.html'
 window.onload = document.getElementById('OurProduct').innerHTML = loadPage(href);
 
   /*Load Feature*/
 
  var href = 'html/Feature.html'
 window.onload = document.getElementById('Feature').innerHTML = loadPage(href);
 
    /*Load register*/
 
  var href = 'html/register.html'
 window.onload = document.getElementById('register1').innerHTML = loadPage(href);
 
	/*Load ContactUs*/
 
  var href = 'html/ContactUs.html'
 window.onload = document.getElementById('ContactUs').innerHTML = loadPage(href);
 
 	/*Load about*/
 
  var href = 'html/about.html'
 window.onload = document.getElementById('about').innerHTML = loadPage(href);
 
  	/*Load footer*/
 
  var href = 'html/footer.html'
 window.onload = document.getElementById('footer_main').innerHTML = loadPage(href);
 
 