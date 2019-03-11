function loadPage(href){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
 }
 /*Load NavBar */
 
 var href = 'html/nav.html'
 document.getElementById('navbar_home').innerHTML = loadPage(href);
 
 
 /*Load header */
 
  var href = 'html/header.html'
 window.onload = document.getElementById('header').innerHTML = loadPage(href);
 
  /*Load Defulat page load */
 
  toggleNav('goals');


    /*Load modal*/
 
  var href = 'html/open.html'
 window.onload = document.getElementById('open1').innerHTML = loadPage(href);
 
 

 
 