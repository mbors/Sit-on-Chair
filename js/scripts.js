document.addEventListener('DOMContentLoaded', function() {
	
			//BURGER_NAV - burger navigation for mobile phones
			function manageMenu() {
				//finding elements needed to set up the burger navigation 
				var burger = document.querySelector(".burger-nav")
				console.log(burger);
				var menuNav = document.querySelector(".header-nav");
				console.log(menuNav);
	
				//function which hides the navigation if displayed & displays the navigation if hidden
				function navDisplay(){
					var display = menuNav.style.display 
					if (display === "none" || display === "") {
						menuNav.style.display ="inline-block"; 
					} else {
						menuNav.style.display="none";
					}
				}
	
				//implementation of the navDisplay function
				burger.addEventListener("click", navDisplay)
			}
		
	
	
			//SLIDER
			function manageSlider() {
				//finding elements needed to set up the slider
				var buttonLeft = document.querySelector(".left");
				console.log(buttonLeft);
				var buttonRight = document.querySelector(".right");
				console.log(buttonRight);
				var slider = document.querySelector(".slider-container");
				console.log(slider);
				var slides = slider.querySelectorAll(".slide");
				console.log(slides);
	
				var slideIndex = 0;
				
				//function which allows to browse through slides, to be implemented under the right button
				function sliderRight(){
					if (slideIndex >= slides.length - 1) {
						slides[slideIndex].classList.remove("active");
						slideIndex = 0;
						slides[slideIndex].classList.add("active");
						
					} else {
						slides[slideIndex].classList.remove("active");
						slideIndex = slideIndex + 1;
						slides[slideIndex].classList.add("active");
					}
				
				}
				
				//function which allows to browse through slides, to be implemented under the left button
				function sliderLeft() {
					if (slideIndex <= 0) {
						slides[slideIndex].classList.remove("active"); 
						slideIndex = slides.length - 1;
						slides[slideIndex].classList.add("active");
					} else {
						slides[slideIndex].classList.remove("active");
						slideIndex = slideIndex -1;
						slides[slideIndex].classList.add("active");
					}
				}
	
				//implementation of the functions: sliderLeft & sliderRight
				buttonLeft.addEventListener("click", sliderLeft);
				buttonRight.addEventListener("click", sliderRight);
		
			}
		
			function manageBoxes() {
				//BOXES - disappearing description while hovering through pictures 
				var myBoxes = document.querySelectorAll(".box-for-pic");
				
				//functions which allow the disappearance / appearance of the description when the picture is hovered through 
				function descriptionDisappear() {
					var myBoxesChild = this.firstElementChild;
					myBoxesChild.classList.add("aloha");
				}
				function descriptionAppear() {
					var myBoxesChild = this.firstElementChild;
					myBoxesChild.classList.remove("aloha");
				}
	
				//implementation of the functions
				for (var i=0; i<myBoxes.length; i++) {
					myBoxes[i].addEventListener("mouseover", descriptionDisappear)
				}
				for (var i=0; i<myBoxes.length; i++) {
					myBoxes[i].addEventListener("mouseout", descriptionAppear)
				}
			}
	
	
			manageMenu();
			manageSlider();
			manageBoxes() ;
	});