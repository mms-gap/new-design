function Toggle(){
				  var smallMenue = document.getElementById("mySidebar");
				  var textarea = document.getElementsByClassName("textarea");
					if (smallMenue.style.display === "none") {
						 smallMenue.style.display = "block";
					} else {
						 smallMenue.style.display = "none";
					}
					
					var  bigMenue  = document.getElementById("mySidebar2");
					if (bigMenue.style.display === "block") {
						bigMenue.style.display = "none";
					} else {
						bigMenue.style.display = "block";
					}
				}
				
				
					