
// eventListener for hamburger menu on mobile view
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav__collection");

    burger.addEventListener("click", () => {

        //Burger Animation
        burger.classList.toggle("toggle");

        //Toggle Nav
        nav.classList.toggle("nav-active");
    });

}

navSlide();
