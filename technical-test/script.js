let cardArea = document.getElementById("real-card-area");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
prevButton.style.display = "none";
cardArea.addEventListener("scroll", function (e) {
	if (window.innerWidth > 768) {
		if (cardArea.scrollLeft === 0) {
			prevButton.style.display = "none";
		} else {
			prevButton.style.display = "block";
		}
		const maxScrollLeft = cardArea.scrollWidth - cardArea.clientWidth;
		if (cardArea.scrollLeft === 0 && cardArea.scrollLeft < maxScrollLeft) {
			nextButton.style.display = "block";
		} else if (Math.floor(cardArea.scrollLeft) === maxScrollLeft) {
			nextButton.style.display = "none";
		}
	}
	// console.log("scrollLeft", Math.floor(cardArea.scrollLeft));
	// console.log("maxScrollLeft", maxScrollLeft);
});

prevButton.onclick = () => {
	cardArea.scrollLeft -= 30;
};

nextButton.onclick = () => {
	cardArea.scrollLeft += 30;
};

let chevronState = true;
const showButton = document.getElementById("show-button");
const chevron = document.getElementById("chevron");
const PT = document.getElementById("PT");

showButton.addEventListener("click", function (e) {
	chevronState = !chevronState;
	if (chevronState === true) {
		chevron.style.rotate = "180deg";
		PT.style.display = "block";
	} else {
		chevron.style.rotate = "0deg";
		PT.style.display = "none";
	}
});

let scrollToTopButton = document.getElementById("scrollButton");
window.onscroll = function () {
	scrollToTop();
};

function scrollToTop() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopButton.style.display = "block";
	} else {
		scrollToTopButton.style.display = "none";
	}
}

function toTheMoon() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function prevFunction() {
	console.log("hehe");
}

function nextFunction() {
	let cardArea = document.getElementById("real-card-area");
	console.log(cardArea);
	cardArea.style.transform = "translateX(100px)";
}
