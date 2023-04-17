const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

menuBtn.addEventListener("click", () => {
	navList.classList.toggle("invisible");
	navList.classList.toggle("w-0");
	navList.classList.toggle("h-0");
	if (menuBtn.ariaExpanded === "false") {
		navList.ariaExpanded = "true";
		navList.ariaLabel = "close menu";
	} else {
		navList.ariaExpanded = "false";
		navList.ariaLabel = "open menu";
	}
});

const navMenuProductBtn = document.getElementById("navMenuProductBtn");
const navMenuCompanyBtn = document.getElementById("navMenuCompanyBtn");
const navMenuConnectBtn = document.getElementById("navMenuConnectBtn");

const toggleVisibilityList = (evt) => {
	const navList = evt.currentTarget.nextElementSibling;
	navList.classList.toggle("invisible");
	navList.classList.toggle("w-0");
	navList.classList.toggle("h-0");
	navList.classList.toggle("p-6");
	navList.classList.toggle("mt-3");
	if (evt.currentTarget.ariaExpanded === "false") {
		evt.currentTarget.ariaExpanded = "true";
		evt.currentTarget.ariaLabel = "close button";
	} else {
		evt.currentTarget.ariaExpanded = "false";
		evt.currentTarget.ariaLabel = "open button";
	}
};

navMenuProductBtn.addEventListener("click", toggleVisibilityList);
navMenuCompanyBtn.addEventListener("click", toggleVisibilityList);
navMenuConnectBtn.addEventListener("click", toggleVisibilityList);
