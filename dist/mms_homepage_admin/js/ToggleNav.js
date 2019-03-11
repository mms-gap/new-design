 function toggleNav(pageId){
		 activeColor();
		 var href = 'html/' + pageId + '.html';
		 window.onload = document.getElementById('main').innerHTML = loadPage(href); 
 }
 
 function activeColor(){
 	var header = document.getElementById("allNav");
	var btns = header.getElementsByClassName("notActive");
	for (var i = 0; i < btns.length; i++) {
		  var button1 = btns[i];
		  button1.addEventListener("click" , changeColor );
	}
 }

 function changeColor() {
					console.log("hi");
					var current = document.getElementsByClassName(" active");
					for (var i = 0; i <  current.length + 1; i++) { 
					  current[0].className = current[0].className.replace(" active", "");
					}
					
					var myString = this.id;
					var stringLength = myString.length; 
					var lastChar = myString.charAt(stringLength - 1);
					
					if(lastChar == "2"){
						var add = document.getElementById(this.id);
						var id2Nmae = add.id.slice(0, -1);
						var add2 = document.getElementById(id2Nmae);
						add.className += " active";
						add2.className += " active";
					}
					else{
						var add = document.getElementById(this.id);
						var id2Nmae = add.id + "2";
						var add2 = document.getElementById(id2Nmae);
						add.className += " active";
						add2.className += " active";
					}
					
				  }