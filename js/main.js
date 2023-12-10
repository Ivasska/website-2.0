AOS.init();

const SwiperTestimonials = new Swiper(".SwiperTestimonials", {
	parallax: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

// ---------- SPOLLERS --------
const boxes = Array.from(document.querySelectorAll(".block__item")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
	box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
	e.preventDefault(); // сбрасываем стандартное поведение
	let currentBox = e.target.closest(".block__item"); // определяем текущий бокс
	let currentContent = e.target.nextElementSibling; // находим скрытый контент
	currentBox.classList.toggle("active"); // присваиваем ему активный класс
	if (currentBox.classList.contains("active")) {
		// если класс активный ..
		currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
	} else {
		// в противном случае
		currentContent.style.maxHeight = 0; // скрываем контент
	}
}


// -------------- Background Image Move on Mousemove
$('.header__content').mousemove(function (e) {
	let moveX = (e.pageX * -1 / 905);
	let moveY = (e.pageY * -1 / 15);
	$(this).css('background-position', moveX + 'px ' + moveY + 'px')
});


document.addEventListener('DOMContentLoaded', function () {
	let lightGalleryElement = document.getElementById('lightgallery');
	lightGallery(lightGalleryElement, {
		mode: 'lg-fade',
		download: false,
		counter: false,
		zoom: true,
		thumbnail: true,
		fullScreen: true, // Додано для включення кнопки повноекранного режиму
		hideBarsDelay: 1000, // Затримка перед тим, як приховати кнопки у повноекранному режимі
		plugins: [lgZoom, lgFullscreen] // Додаємо плагін lg-zoom
	});
	
});