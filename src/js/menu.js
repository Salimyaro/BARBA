function myFunction(x) {
	if (x.matches) { 
		(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]");
	const menuLink1Ref = document.querySelector("[data-menu-link1]");
	const menuLink2Ref = document.querySelector("[data-menu-link2]");
	const menuLink3Ref = document.querySelector("[data-menu-link3]");
	const menuLink4Ref = document.querySelector("[data-menu-link4]");
	const menuLink5Ref = document.querySelector("[data-menu-link5]");
	const mobileMenuRef = document.querySelector("[data-menu]");
	const mobileBodyRef = document.querySelector("[data-body]");

	menuBtnRef.addEventListener("click", () => {
		const expanded =
			menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		mobileBodyRef.classList.toggle("is-open");
	});
	menuLink1Ref.addEventListener("click", () => {
		const expanded =
			menuLink1Ref.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		mobileBodyRef.classList.toggle("is-open");
	});
	menuLink2Ref.addEventListener("click", () => {
		const expanded =
			menuLink2Ref.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		mobileBodyRef.classList.toggle("is-open");
	});
	menuLink3Ref.addEventListener("click", () => {
		const expanded =
			menuLink3Ref.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		mobileBodyRef.classList.toggle("is-open");
	});
	menuLink4Ref.addEventListener("click", () => {
		const expanded =
			menuLink4Ref.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		mobileBodyRef.classList.toggle("is-open");
	});
	menuLink5Ref.addEventListener("click", () => {
		const expanded =
			menuLink5Ref.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		mobileBodyRef.classList.toggle("is-open");
	});
})();
	}
}
let x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Вызов функции прослушивателя во время выполнения
x.addListener(myFunction) // Присоединить функцию прослушивателя при изменении состояния
