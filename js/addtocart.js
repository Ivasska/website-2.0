// ------------ shopping cart
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
window.quantity = document.querySelector('.shopping-quantity'); // Зробимо quantity глобальною змінною
let orderNowButton = document.querySelector('.orderNow'); // Додаємо посилання на кнопку "Order now"

openShopping.addEventListener('click', () => {
	body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
	body.classList.remove('active');
});



let products = [
	{
		id: 1,
		name: 'Bronze',
		image: '../images/block/box-img-1.jpg',
		price: 100,
	},
	{
		id: 2,
		name: 'Silver',
		image: '../images/block/box-img-1.jpg',
		price: 110,
	},
	{
		id: 3,
		name: 'Gold',
		image: '../images/block/box-img-1.jpg',
		price: 120,
	},

	{
		id: 4,
		name: 'Excalibur',
		image: '../images/block/box-img-5.jpg',
		price: 100,
	},
	{
		id: 5,
		name: 'Chimera',
		image: '../images/block/box-img-5.jpg',
		price: 100,
	},
	{
		id: 6,
		name: 'Obj. 279(e)',
		image: '../images/block/box-img-5.jpg',
		price: 100,
	},

	{
		id: 7,
		name: 'Stug IV',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},
	{
		id: 8,
		name: 'T28 Concept',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},
	{
		id: 9,
		name: 'T55 A',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},
	{
		id: 10,
		name: 'Obj. 260',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},

	{
		id: 11,
		name: 'First Mark 65 %',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 12,
		name: 'Second Mark 85 %',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 13,
		name: 'Third Mark 95 %',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 14,
		name: 'Tanks from Clobal Map',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 15,
		name: 'Obj. 279(e),Chieftain etc',
		image: '../images/block/box-img-7.png',
		price: 100,
	},

	{
		id: 16,
		name: 'WN8 Boosting 3000+ (50 Battles)',
		image: '../images/block/box-img-9.png',
		price: 50,
	},
	{
		id: 17,
		name: 'WN8 Boosting 3000+ (100 Battles)',
		image: '../images/block/box-img-9.png',
		price: 100,
	},
	{
		id: 18,
		name: 'WN8 Boosting 3700+ (50 Battles)',
		image: '../images/block/box-img-9.png',
		price: 150,
	},
	{
		id: 19,
		name: 'WN8 Boosting 3700+ (100 Battles)',
		image: '../images/block/box-img-9.png',
		price: 200,
	},

	{
		id: 20,
		name: 'GLOBAL MAP BOOST',
		image: '../images/block/box-img-2.png',
		price: 125,
	}
];

let listCards = [];

let cartProducts = [];

function initApp() {

	// ----  НОВЕ -------------
	let filteredProducts = [];

	if (window.location.pathname.includes('RB.html')) {
		// Отримуємо продукти з id 1, 2 та 3
		filteredProducts = products.filter(product => [1, 2, 3].includes(product.id));
	} else if (window.location.pathname.includes('PM_9.html')) {
		// Отримуємо продукти з id 4, 5 та 6
		filteredProducts = products.filter(product => [4, 5, 6].includes(product.id));
	} else if (window.location.pathname.includes('PM_0.html')) {
		// Отримуємо продукти з id 7, 8, 9 та 10
		filteredProducts = products.filter(product => [7, 8, 9, 10].includes(product.id));
	} else if (window.location.pathname.includes('Marks.html')) {
		// Отримуємо продукти з id 7, 8, 9 та 10
		filteredProducts = products.filter(product => [11, 12, 13, 14, 15].includes(product.id));
	} else if (window.location.pathname.includes('WN8.html')) {
		// Отримуємо продукти з id 7, 8, 9 та 10
		filteredProducts = products.filter(product => [16, 17, 18, 19].includes(product.id));
	} else if (window.location.pathname.includes('GM.html')) {
		// Отримуємо продукти з id 7, 8, 9 та 10
		filteredProducts = products.filter(product => [20].includes(product.id));
	}

	filteredProducts.forEach(product => {
		let newDiv = document.createElement('div');
		newDiv.classList.add('item');
		newDiv.innerHTML = `
        <input type="checkbox" value="${product.name}" class="checkbox" id="${product.name}">
        <div class="title">${product.name}</div>
        <div class="price">$ ${product.price.toLocaleString()}</div>`;
		list.appendChild(newDiv);
	});

	// Добавляем кнопку "Order now" после цикла, чтобы она была общей для всех товаров
	let orderButton = document.createElement('button');
	orderButton.textContent = "Order now";
	orderButton.addEventListener('click', addToCart);

	if (list) {
		list.appendChild(orderButton);
	} else {
		console.error('list is not found in the DOM.');
	}

	list.appendChild(orderButton);
}



// --------------- Credits -----------
document.addEventListener('DOMContentLoaded', () => {
	// Раніше визначені змінні та функції ...

	const quantityInput = document.getElementById('switch');
	const priceElement = document.getElementById('price');
	const minusButton = document.querySelector('.minus-btn');
	const plusButton = document.querySelector('.plus-btn');
	const orderButton = document.querySelector('.order-button');

	let quantity = 1;
	const basePricePerUnit = 3; // Вартість одиниці товару
	let pricePerUnit = basePricePerUnit; // Вартість товару, яку можна змінювати залежно від кількості

	// Функції для оновлення вартості на основі кількості
	function updateTotalPrice() {
		const totalPrice = quantity * pricePerUnit;
		priceElement.textContent = totalPrice;
	}

	function decreaseQuantity() {
		if (quantity > 1) {
			quantity--;
			quantityInput.value = quantity;
			updateTotalPrice();
		}
	}

	function increaseQuantity() {
		quantity++;
		quantityInput.value = quantity;
		updateTotalPrice();
	}

	// Обробники подій для кнопок збільшення та зменшення кількості
	minusButton.addEventListener('click', decreaseQuantity);
	plusButton.addEventListener('click', increaseQuantity);

	// Обробник події для замовлення
	orderButton.addEventListener('click', () => {
		// Змінюємо вартість товару в залежності від кількості
		pricePerUnit = basePricePerUnit * quantity;

		const selectedProduct = {
			id: 21,
			name: 'Credit Package',
			image: 'images/block/box-img-4.png',
			price: pricePerUnit,
			quantity: quantity,
		};

		selectedProducts.push(selectedProduct);

		localStorage.setItem('cartProducts', JSON.stringify(selectedProducts));

		updateShoppingQuantity();
		updateCart();
	});
});
// --------------- Credits -----------

// ---------- Tier-Leveling ---------------
document.addEventListener('DOMContentLoaded', function () {
	const quantityInput = document.getElementById('quantity');
	const priceSpan = document.getElementById('price');
	const plusBtn = document.querySelector('.plus-btn');
	const minusBtn = document.querySelector('.minus-btn');
	const tierlevelingOrderNowButton = document.querySelector('.content__box-btn');

	let basePrice = 120; // Базова ціна
	let maxQuantity = 9; // Максимальна кількість товару

	// Функція для оновлення ціни та кількості товарів
	function updatePriceAndQuantity() {
		const currentQuantity = parseInt(quantityInput.value);

		// Обмежуємо кількість від 1 до 9
		if (currentQuantity < 1) {
			quantityInput.value = 1;
		} else if (currentQuantity > maxQuantity) {
			quantityInput.value = maxQuantity;
		}

		// Оновлюємо ціну відповідно до вказаних умов
		const discountedPrice = basePrice - (currentQuantity - 1) * 5;
		priceSpan.textContent = discountedPrice;
	}

	// Обробники подій для кнопок "+" та "-"
	plusBtn.addEventListener('click', function () {
		quantityInput.value = parseInt(quantityInput.value) + 1;
		updatePriceAndQuantity();
	});

	minusBtn.addEventListener('click', function () {
		quantityInput.value = parseInt(quantityInput.value) - 1;
		updatePriceAndQuantity();
	});


	// Обробник події для кнопки "Order now" для нового товару
	tierlevelingOrderNowButton.addEventListener('click', function () {
		const currentQuantity = parseInt(quantityInput.value);

		const selectedProduct = {
			id: 22,
			name: 'Tank Grinding to Any Tier 10',
			image: '../images/block/box-img-3.png',
			price: basePrice - (currentQuantity - 1) * 5, // Оновлена ціна відповідно до умов
			quantity: currentQuantity,
		};

		selectedProducts.push(selectedProduct);

		localStorage.setItem('cartProducts', JSON.stringify(selectedProducts));

		updateShoppingQuantity();
		updateCart();
	});

	// Початкова ініціалізація
	updatePriceAndQuantity();
});
// ---------- Tier-Leveling ---------------


document.addEventListener('DOMContentLoaded', () => {
	const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

	if (cartProducts && cartProducts.length > 0) {
		const cartTotal = document.getElementById('cart-total');
		const cartProductsContainer = document.getElementById('cart-products');

		// -------------- new
		// Отримайте елемент зі змінною кількості товарів
		const shoppingQuantity = document.querySelector('.shopping-quantity');
		// Оновіть кількість товарів у корзині
		shoppingQuantity.textContent = cartProducts.length;
		// -------------- new

		cartProducts.forEach(product => {
			const productInfo = document.createElement('div');
			productInfo.classList.add('product-info');

			const productImage = document.createElement('img');
			productImage.src = product.image;
			productImage.alt = product.name;
			productInfo.appendChild(productImage);

			const productText = document.createElement('div');
			productText.classList.add('product-text');
			productText.textContent = `Product: ${product.name}, Price: $${product.price}`;
			productInfo.appendChild(productText);

			cartProductsContainer.appendChild(productInfo);

			// Перевірте, чи існують всі необхідні DOM-елементи на сторінці перед оновленням
			if (cartTotal) {
				cartTotal.innerText = (parseFloat(cartTotal.innerText) + product.price).toFixed(2);
			}
		});
	}
});


// Додайте функцію для оновлення кількості елементів в кошику
function updateShoppingQuantity() {
	const shoppingQuantity = document.querySelector('.shopping-quantity');
	shoppingQuantity.textContent = selectedProducts.length;
}

// const selectedProducts = [];
const selectedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
// Функция для обработки нажатия на кнопку "Order now"
function addToCart() {
	const checkboxes = document.querySelectorAll('.checkbox');
	let totalCost = 0;

	checkboxes.forEach((checkbox) => {
		if (checkbox.checked) {
			const productName = checkbox.value;
			const productPrice = getProductPrice(productName);
			const productImage = getProductImage(productName);

			// Проверяем, не выбран ли продукт уже в корзине
			if (!isSelected(productName)) {
				selectedProducts.push({ name: productName, price: productPrice, image: productImage });
				totalCost += productPrice;
			}
		}
	});

	// Обновляем количество выбранных позиций в элементе <div class="shopping">
	const shoppingQuantity = document.querySelector('.shopping-quantity');
	shoppingQuantity.textContent = selectedProducts.length;

	// Обновляем корзину
	updateCart();

	// Показываем корзину
	const shoppingCart = document.querySelector('.card');
	shoppingCart.style.display = 'block';

	// Зберігаємо обрані товари у Local Storage
	localStorage.setItem('cartProducts', JSON.stringify(selectedProducts));

	// Оновіть кількість товарів в кошику
	updateShoppingQuantity();

	// Оновіть корзину та інші елементи на сторінці
	updateCart();
}

// Функция для проверки, выбран ли продукт уже в корзине
function isSelected(productName) {
	return selectedProducts.some((product) => product.name === productName);
}

// Функция для получения изображения товара по его названию
function getProductImage(productName) {
	const product = products.find((item) => item.name === productName);
	return product ? product.image : '';
}

// Функция для получения цены товара по его названию
function getProductPrice(productName) {
	const product = products.find((item) => item.name === productName);
	return product ? product.price : 0;
}

function removeProduct(productName) {
	const productIndex = selectedProducts.findIndex((product) => product.name === productName);

	//  ---------- new
	// Отримайте елемент зі змінною кількості товарів
	const shoppingQuantity = document.querySelector('.shopping-quantity');
	// Оновіть кількість товарів у корзині
	shoppingQuantity.textContent = selectedProducts.length;
	//  ---------- new

	if (productIndex !== -1) {
		selectedProducts.splice(productIndex, 1); // Удаляем продукт из массива
	}
	// Після видалення товарів оновіть Local Storage
	localStorage.setItem('cartProducts', JSON.stringify(selectedProducts));

	updateShoppingQuantity();// Оновіть кількість товарів в кошику

	updateCart(); // Обновляем корзину
}

// Функция для обновления корзины
function updateCart() {
	let totalCost = 0;

	const cartList = document.querySelector('.listCard');
	cartList.innerHTML = ''; // Очищаем корзину перед обновлением

	selectedProducts.forEach((product) => {
		const listItem = document.createElement('li');
		listItem.innerHTML = `
            <img class='images' src="${product.image}">
            <div class="title">${product.name}</div>
            <div class="price">$${product.price.toLocaleString()}</div>
            <button class="remove-button">REMOVE</button>`;
		cartList.appendChild(listItem);

		// Добавляем обработчик события для кнопки "REMOVE"
		const removeButton = listItem.querySelector('.remove-button');
		removeButton.addEventListener('click', () => {
			removeProduct(product.name);
		});
		totalCost += product.price;
	});

	// Обновляем общую стоимость в корзине
	const cartTotal = document.querySelector('.total');
	cartTotal.innerHTML = `<div>Total cost: </div>$${totalCost.toLocaleString()}`; // Змінено вміст

	// Показываем корзину
	const shoppingCart = document.querySelector('.card');
	shoppingCart.style.display = 'block';
}

// // Функция для проверки, выбран ли продукт уже в корзине
// function isSelected(productName) {
// 	return selectedProducts.some((product) => product.name === productName);
// }

// Функция для получения цены товара по его названию
function getProductPrice(productName) {
	const product = products.find((item) => item.name === productName);
	return product ? product.price : 0;
}

// Функція для відкриття нового вікна з формою замовлення
function openOrderForm() {
	const selectedProducts = JSON.parse(localStorage.getItem('cartProducts')) || []; // Отримуємо обрані товари з локального сховища
	let orderPageUrl = 'order.html'; // URL сторінки для замовлення
	let orderInfo = encodeURIComponent(JSON.stringify(selectedProducts)); // Параметри для передачі інформації про товари у форму на новій сторінці

	orderPageUrl += `?products=${orderInfo}`; // Додавання параметрів до URL
	window.open(orderPageUrl, '_blank'); // Відкриття нового вікна зі зворотнім зв'язком та формою замовлення
}

orderNowButton.addEventListener('click', openOrderForm);

initApp();