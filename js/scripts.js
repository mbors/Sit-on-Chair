(function() {
	document.addEventListener('DOMContentLoaded', function() {

		//slider 
		
		var buttonLeft = document.querySelector(".left");
		console.log(buttonLeft);
		var buttonRight = document.querySelector(".right");
		console.log(buttonRight);
		var slider = document.querySelector(".slider-container");
		console.log(slider);
		var slides = slider.querySelectorAll(".slide");
		console.log(slides);
		var slideIndex = 0;
		
		buttonRight.addEventListener("click", function(){
			if (slideIndex >= slides.length - 1) {
				slides[slideIndex].classList.remove("active");
				slideIndex = 0;
				slides[slideIndex].classList.add("active");
				
			} else {
				slides[slideIndex].classList.remove("active");
				slideIndex = slideIndex + 1;
				slides[slideIndex].classList.add("active");
			}
		
		})
		
		buttonLeft.addEventListener("click", function(){
			if (slideIndex <= 0) {
				slides[slideIndex].classList.remove("active"); 
				slideIndex = slides.length - 1;
				slides[slideIndex].classList.add("active");
			} else {
				slides[slideIndex].classList.remove("active");
				slideIndex = slideIndex -1;
				slides[slideIndex].classList.add("active");
			}
		})
		

		//boxes - picture description dissapearing 

		var myBoxes = document.querySelectorAll(".box-for-pic");
		console.log(myBoxes);
		for (var i=0; i<myBoxes.length; i++) {
			myBoxes[i].addEventListener("mouseover", function(){
				var myBoxesChild = this.firstElementChild;
				myBoxesChild.classList.add("aloha");
			})
		}
		for (var i=0; i<myBoxes.length; i++) {
			myBoxes[i].addEventListener("mouseout", function(){
				var myBoxesChild = this.firstElementChild;
				myBoxesChild.classList.remove("aloha");
			})
		}
	});
})();