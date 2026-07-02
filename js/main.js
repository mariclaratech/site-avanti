const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

if (searchButton) {

  searchButton.addEventListener("click", () => {

    const value = searchInput.value;

    if (value.trim() === "") {
      searchResult.innerHTML = "Digite algo para buscar.";
      return;
    }

    searchResult.innerHTML =
      `Você buscou por: "${value}"`;

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