'use strict';

const de = [
	{
		"id": "11",
		"img": "./imgs/de-1.png",
		"author": "Курт Вернер",
		"name": "Над городом",
		"kind": "Цветная литография (40х60)",
		"price": 16000,
	},
	{
		"id": "12",
		"img": "./imgs/de-2.png",
		"author": "Макс Рихтер",
		"name": "Птенцы",
		"kind": "Холст, масло (50х80)",
		"price": 14500,
	},
	{
		"id": "13",
		"img": "./imgs/de-3.png",
		"author": "Мартин Майер",
		"name": "Среди листьев",
		"kind": "Цветная литография (40х60)",
		"price": 20000,
	},
	{
		"id": "14",
		"img": "./imgs/de-4.png",
		"author": "Герман Беккер",
		"name": "Яркая птица",
		"kind": "Цветная литография (40х60)",
		"price": 13000,
	},
	{
		"id": "15",
		"img": "./imgs/de-5.png",
		"author": "Вульф Бауэр",
		"name": "Дятлы",
		"kind": "Бумага, акрил (50х80)",
		"price": 20000,
	},
	{
		"id": "16",
		"img": "./imgs/de-6.png",
		"author": "Вальтер Хартманн",
		"name": "Большие воды",
		"kind": "Бумага, акрил (50х80)",
		"price": 23000,
	},
];

const en = [
	{
		"id": "21",
		"img": "./imgs/en-1.png",
		"author": "Пол Смит",
		"name": "Дикий зверь",
		"kind": "Акварель, бумага (50х80)",
		"price": 19500,
	},
	{
		"id": "22",
		"img": "./imgs/en-2.png",
		"author": "Джон Уайт",
		"name": "Скалистый берег",
		"kind": "Цветная литография (40х60)",
		"price": 17500,
	},
	{
		"id": "23",
		"img": "./imgs/en-3.png",
		"author": "Джим Уотсон",
		"name": "Река и горы",
		"kind": "Акварель, бумага (50х80)",
		"price": 20500,
	},
	{
		"id": "24",
		"img": "./imgs/en-4.png",
		"author": "Юджин Зиллион",
		"name": "Белый попугай",
		"kind": "Цветная литография (40х60)",
		"price": 15500,
	},
	{
		"id": "25",
		"img": "./imgs/en-5.png",
		"author": "Эрик Гиллман",
		"name": "Ночная рыба",
		"kind": "Бумага, акрил (50х80)",
		"price": 12500,
	},
	{
		"id": "26",
		"img": "./imgs/en-6.png",
		"author": "Альфред Барр",
		"name": "Рыжий кот",
		"kind": "Цветная литография (40х60)",
		"price": 21000,
	},
];

const fr = [
	{
		"id": "31",
		"img": "./imgs/fr-1.png",
		"author": "Марсель Руссо",
		"name": "Охота Амура",
		"kind": "Холст, масло (50х80)",
		"price": 14500,
	},
	{
		"id": "32",
		"img": "./imgs/fr-2.png",
		"author": "Анри Селин",
		"name": "Дама с собачкой",
		"kind": "Акрил, бумага (50х80)",
		"price": 16500,
	},
	{
		"id": "33",
		"img": "./imgs/fr-3.png",
		"author": "Франсуа Дюпон",
		"name": "Процедура",
		"kind": "Цветная литография (40х60)",
		"price": 20000,
	},
	{
		"id": "34",
		"img": "./imgs/fr-4.png",
		"author": "Луи Детуш",
		"name": "Роза",
		"kind": "Бумага, акрил (50х80)",
		"price": 12000,
	},
	{
		"id": "35",
		"img": "./imgs/fr-5.png",
		"author": "Франсуа Дюпон",
		"name": "Птичья трапеза",
		"kind": "Цветная литография (40х60)",
		"price": 22500,
	},
	{
		"id": "36",
		"img": "./imgs/fr-6.png",
		"author": "Пьер Моранж",
		"name": "Пейзаж с рыбой",
		"kind": "Цветная литография (40х60)",
		"price": 20000,
	},
];

(function () {
	const catalog = document.querySelector('.products-block__catalog');

	const renderCatalog = (items) => {
		items.forEach(item => {
			const el = document.createElement('div');
			el.innerHTML = `<div id="${item.id}" class="products-block__card">
			<img class="products-block__card-img" src="${item.img}" alt="${item.author}, ${item.name}">
			<div class="products-block__card-author">${item.author}</div>
			<div class="products-block__card-title">${item.name}</div>
			<div class="products-block__card-subtitle">${item.kind}</div>
			<div class="products-block__card-price">
			<span class="products-block__card-price products-block__card-price_value">${item.price}</span> 
			руб.</div>
			<button type="submit" class="products-block__card-basket">В корзину</button>
		</div>`;
			catalog.insertAdjacentElement('beforeend', el);
		});

		const basket = [];

		function renderBasket() {
			const addedGoods = localStorage;
			if (localStorage.length > 0) {
				const basketCount = document.querySelector('.header__menu-basket-count');
				basketCount.classList.remove('invisible');
				basketCount.innerText = addedGoods.length;
				const cards = document.querySelectorAll('.products-block__card');
				cards.forEach(card => {
					if (Object.keys(localStorage).includes(card.attributes[0].value)) {
						const btn = card.childNodes[11];
						btn.classList.add('products-block__card-basket_added');
						btn.textContent = 'В корзине';
					}
				});
			}
		}

		renderBasket();

		function addToLocalStorage(good) {
			localStorage.setItem(`${good.id}`, JSON.stringify(good));
			renderBasket();
		}

		document.querySelectorAll('.products-block__card-basket').forEach(button => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				const btn = e.target;
				btn.textContent = 'В корзине';
				btn.classList.add('products-block__card-basket_added');
				const good = {};
				const card = e.target.closest('.products-block__card');
				good.id = card.getAttribute('id');
				good.img = card.childNodes[1].attributes.src.nodeValue;
				good.author = card.childNodes[3].innerText;
				good.name = card.childNodes[5].innerText;
				good.kind = card.childNodes[7].innerText;
				good.price = card.childNodes[9].lastElementChild.innerText;
				addToLocalStorage(good);
			});
		});
	};

	const filterOn = (country) => {
		const filters = document.querySelectorAll('.products-block__filter');
		filters.forEach((filter) => {
			if (filter.classList.contains('products-block__filter-selected'))
				return filter.classList.remove('products-block__filter-selected');
		});
		renderCatalog(country);
		if (country === de) return filters[1].classList.add('products-block__filter-selected');
		if (country === fr) return filters[0].classList.add('products-block__filter-selected');
		if (country === en) return filters[2].classList.add('products-block__filter-selected');
	};

	filterOn(fr);

	document.querySelector('.products-block__filters').addEventListener('click', (e) => {
		e.preventDefault();
		catalog.innerHTML = '';
		if (e.target.classList == 'products-block__filter') {
			if (e.target.textContent === 'Германия') return filterOn(de);
			if (e.target.textContent === 'Франция') return filterOn(fr);
			if (e.target.textContent === 'Англия') return filterOn(en);
		}
	});

	document.querySelector('.header__menu-mob-btn').addEventListener('click', (e) => {
		const mobHeaderMenu = document.querySelector('.overlay');
		mobHeaderMenu.classList.remove('invisible');
		const mobBtn = document.querySelector('.header__menu-mob-btn');
		mobBtn.classList.add('invisible');
		const basket = document.querySelector('.header__menu-basket');
		basket.classList.add('invisible');
		document.querySelector('.header__mob-menu-close').addEventListener('click', () => {
			mobHeaderMenu.classList.add('invisible');
			mobBtn.classList.remove('invisible');
			basket.classList.remove('invisible');
		});
	});


})();