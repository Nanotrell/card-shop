let check = 1;
let buttonTheme = document.getElementsByClassName('theme')[0];
let text = document.getElementsByClassName('text')[0];
let menuColor = document.getElementsByClassName('view-menu')[0];
let menuTextColor = document.getElementsByClassName('menu-text')[0];
let menuTextColor1 = document.getElementsByClassName('menu-text')[1];
let nextColor = document.getElementsByClassName('next')[0];
let	previousColor = document.getElementsByClassName('previous')[0];

let Cat1 = document.getElementsByClassName('cat-animation-1')[0];
let Cat2 = document.getElementsByClassName('cat-animation-2')[0];
let Cat3 = document.getElementsByClassName('cat-animation-3')[0];
let Cat4 = document.getElementsByClassName('cat-animation-4')[0];

let submit = document.getElementById('submit');

buttonTheme.onclick = function() {
	if (check === 1){
		buttonTheme.style.transition = ".5s";
		buttonTheme.style.backgroundColor = "rgba(128, 127, 141, 1)";
		menuColor.style.backgroundColor = "#0E0F0D";
		menuTextColor.style.color = "rgba(239, 227, 227, 1)";
		menuTextColor1.style.color = "rgba(239, 227, 227, 1)";
		nextColor.style.color = "rgba(239, 227, 227, 1)";
		previousColor.style.color = "rgba(239, 227, 227, 1)";
		buttonTheme.style.paddingLeft = "50px";
		buttonTheme.style.paddingRight = "5px";
		document.body.style.backgroundColor = "#0E0F0D";
		text.style.color = "rgba(239, 227, 227, 1)";
		document.body.style.color = "rgba(239, 227, 227, 1)";
		document.getElementsByClassName('text')[1].style.color = "rgba(239, 227, 227, 1)";
		submit.style.backgroundColor = "rgba(128, 127, 141, 1)";
		submit.style.color = "rgba(239, 227, 227, 1)";

		Cat1.style.display = "none";
		Cat2.style.display = "none";
		Cat3.style.display = "inline-block";
		Cat4.style.display = "inline-block";
		Cat3.style.animationDelay = ".5s";
		Cat4.style.animationDelay = "1s";

		check = check - 1;
	}
	else if (check === 0) {
		buttonTheme.style.transition = ".5s";
		buttonTheme.style.backgroundColor = "rgba(222, 255, 181, 1)";
		menuColor.style.backgroundColor = "rgba(234, 252, 223, 1)";
		menuTextColor.style.color = "#000";
		menuTextColor1.style.color = "#000";
		nextColor.style.color = "#000";
		previousColor.style.color = "#000";
		buttonTheme.style.paddingRight = "50px";
		buttonTheme.style.paddingLeft = "5px";
		document.body.style.backgroundColor = "rgba(234, 252, 223, 1)";
		text.style.color = "#000";
		document.body.style.color = "#000";
		document.getElementsByClassName('text')[1].style.color = "#000";
		submit.style.backgroundColor = "rgba(222, 255, 181, 1)";
		submit.style.color = "#000";

		Cat3.style.display = "none";
		Cat4.style.display = "none";
		Cat1.style.display = "inline-block";
		Cat2.style.display = "inline-block";
		Cat1.style.animationDelay = ".5s";
		Cat2.style.animationDelay = "1s";

		check = check + 1;
	}
}


let userLastNameLabel = document.getElementById('userLastNameLabel');
let userNameLabel = document.getElementById('userNameLabel');
let phoneNumberLabel = document.getElementById('phoneNumberLabel');

submit.onclick = function() {
	let userLastName = document.getElementById('userLastName').value;
	let userName = document.getElementById('userName').value;
	let phoneNumber = document.getElementById('phoneNumber').value;


	if (userLastName === ""){
		alert("Есть незаполненное поле! Пожалуйста, заполните все поля :). (Укажите Вашу фамилию).")
		userLastNameLabel.style.transition = "1s";
		userLastNameLabel.style.color = "red";
	}
	else {
		userLastNameLabel.style.transition = "1s";
		userLastNameLabel.style.color = "green";
	}
	if (userName === ""){
		alert("Есть незаполненное поле! Пожалуйста, заполните все поля :). (Укажите Ваше имя).")
		userNameLabel.style.transition = "1s";
		userNameLabel.style.color = "red";
	}
	else {
		userNameLabel.style.transition = "1s";
		userNameLabel.style.color = "green";
	}
	if (phoneNumber === "") {
		alert("Есть незаполненное поле! Пожалуйста, заполните все поля :). (Укажите Ваш номер телефона).")
		phoneNumberLabel.style.transition = "1s";
		phoneNumberLabel.style.color = "red";
	} 
	if (String(Number(phoneNumber)) === "NaN" ) {
		alert(`Номер телефона указан некорректно. Вы указали "${phoneNumber}". Повторите попытку.`);
		phoneNumberLabel.style.color = "red";
	}
	if (String(Number(phoneNumber)) !== "NaN" 
	&& typeof Number(phoneNumber) == "number" 
	&& phoneNumber !== "" ){
		phoneNumberLabel.style.transition = "1s";
		phoneNumberLabel.style.color = "green";
	}
	if (typeof userLastName == "string" 
	&& userLastName != "" 
	&& typeof userName == "string" 
	&& userName != "" 
	&& typeof Number(phoneNumber) == "number" 
	&& phoneNumber !== "" 
	&& String(Number(phoneNumber)) !== "NaN" ){
		alert(`${userLastName} ${userName}, вы авторизированы!`);
	}

	event.preventDefault();
}

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

let elemLike1 = document.getElementById('elemLike-1');
let elemLike2 = document.getElementById('elemLike-2');
let elemLike3 = document.getElementById('elemLike-3');

let Favourites = document.getElementsByClassName("favourites")[0];
let messageFavourite = document.getElementsByClassName("message-favourite")[0];

let imgGood1 = document.getElementById("good1").cloneNode();
let imgGood2 = document.getElementById("good2").cloneNode();
let imgGood3 = document.getElementById("good3").cloneNode();

imgGood1.style.objectFit = "cover";
imgGood1.style.width = "300px";
imgGood1.style.height = "300px";
imgGood1.style.borderRadius = "30px";

imgGood2.style.objectFit = "cover";
imgGood2.style.width = "300px";
imgGood2.style.height = "300px";
imgGood2.style.borderRadius = "30px";

imgGood3.style.objectFit = "cover";
imgGood3.style.width = "300px";
imgGood3.style.height = "300px";
imgGood3.style.borderRadius = "30px";

let LikeColor1 = "grey";
let LikeColor2 = "grey";
let LikeColor3 = "grey";

function elemLike1Do() {
	
	if (LikeColor1 == "grey") {
		elemLike1.className = "favourite-red";
		LikeColor1 = "red";
		Favourites.appendChild(imgGood1);
		messageFavourite.style.display = "none";
		alert('Товар №1 добавлен в "Избранное"!')
	}
	else if (LikeColor1 == "red") {
		elemLike1.className = "favourite-grey";
		LikeColor1 = "grey";
		imgGood1.remove();
	}
	if (LikeColor1 == "grey" && LikeColor2 == "grey" && LikeColor3 == "grey"){
		messageFavourite.style.display = "block";
	}
}
function elemLike2Do() {
	if (LikeColor2 == "grey") {
		elemLike2.className = "favourite-red";
		LikeColor2 = "red";
		Favourites.appendChild(imgGood2);
		messageFavourite.style.display = "none";
		alert('Товар №2 добавлен в "Избранное"!')
	}
	else if (LikeColor2 == "red") {
		elemLike2.className = "favourite-grey";
		LikeColor2 = "grey";
		imgGood2.remove();
	}
	if (LikeColor1 == "grey" && LikeColor2 == "grey" && LikeColor3 == "grey"){
		messageFavourite.style.display = "block";
	}
}
function elemLike3Do() {
	if (LikeColor3 == "grey") {
		elemLike3.className = "favourite-red";
		LikeColor3 = "red";
		Favourites.appendChild(imgGood3);
		messageFavourite.style.display = "none";
		alert('Товар №3 добавлен в "Избранное"!')
	}
	else if (LikeColor3 == "red") {
		elemLike3.className = "favourite-grey";
		LikeColor3 = "grey";
		imgGood3.remove();
	}
	if (LikeColor1 == "grey" && LikeColor2 == "grey" && LikeColor3 == "grey"){
		messageFavourite.style.display = "block";
	}
}

