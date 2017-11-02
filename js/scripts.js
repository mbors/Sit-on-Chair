(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var buttonLeft = document.querySelector(".left");
		console.log(buttonLeft);
		var buttonRight = document.querySelector(".right");
		console.log(buttonRight);
		var slider = document.querySelector(".slider-container");
		console.log(slider);
		var listElements = document.querySelectorAll(".slider-container li");
		console.log(listElements);

		var slideIndex = 0;
		listElements[0].classList.add("visible");
		
		buttonRight.addEventListener("click", function(){
			if (slideIndex >= listElements.length-1) {
				listElements[slideIndex].classList.add("visible")
			} else {
				listElements[slideIndex].classList.remove("visible");
				slideIndex = slideIndex + 1;
				listElements[slideIndex].classList.add("visible");
			}
		
		})
		
		buttonLeft.addEventListener("click", function(){
			if (slideIndex <= 0) {
				listElements[slideIndex].classList.add("visible")
			} else {
				listElements[slideIndex].classList.remove("visible");
				slideIndex = slideIndex -1;
				listElements[slideIndex].classList.add("visible");
			}
		})

		var myBoxes = document.querySelectorAll(".box-for-pic");
		console.log(myBoxes);
		// var imagesSection = document.querySelectorAll(".boxes img")
		// console.log(imagesSection);
		// var pictureTitles = document.querySelectorAll(".boxes .picture-title")
		// console.log(pictureTitles);

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