const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const searchButtonMobile = document.getElementById("searchButtonMobile");
const searchInputMobile = document.getElementById("searchInputMobile");

const searchResult = document.getElementById("searchResult");

function handleSearch(input) {
  const value = input.value;

  if (value.trim() === "") {
    searchResult.innerHTML = "Digite algo para buscar.";
    return;
  }

  searchResult.innerHTML = `Você buscou por: "${value}"`;
}

if (searchButton && searchInput) {
  searchButton.addEventListener("click", () => {
    handleSearch(searchInput);
  });
}

if (searchButtonMobile && searchInputMobile) {
  searchButtonMobile.addEventListener("click", () => {
    handleSearch(searchInputMobile);
  });
}

const footerButtons = document.querySelectorAll(".footer-btn");

footerButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const content =
      button.parentElement.querySelector(".footer-content");

    const arrow =
      button.querySelector(".footer-arrow");

    content.classList.toggle("hidden");

    arrow.classList.toggle("rotate-180");

  });

});

const departments = document.querySelectorAll(".department-item");
const contents = document.querySelectorAll(".department-content");

departments.forEach((department, index) => {
  department.addEventListener("click", () => {

    departments.forEach(dep => {
      dep.classList.remove("text-[#005CFF]", "font-bold");
      dep.classList.add("text-[#303030]", "font-normal");
      dep.classList.remove("active");

      dep.querySelector(".department-arrow").src =
        "./assets/icons/arrow-not-selected.png";
    });

    department.classList.add("text-[#005CFF]", "font-bold", "active");
    department.classList.remove("text-[#303030]", "font-normal");

    department.querySelector(".department-arrow").src =
      "./assets/icons/arrow-menu.png";

  });
});