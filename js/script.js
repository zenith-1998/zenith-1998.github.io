const nav = document.getElementById("nav");
const menu = document.getElementById("menuToggle");
const theme = document.getElementById("themeToggle");


/* =========================
   MOBILE MENU
========================= */

menu?.addEventListener("click", () => {
    nav.classList.toggle("open");
});


/* Close menu when clicking outside */

document.addEventListener("click", (e) => {

    if (
        nav &&
        !nav.contains(e.target) &&
        e.target !== menu &&
        !menu.contains(e.target)
    ) {
        nav.classList.remove("open");
    }

});


/* =========================
   DARK MODE
========================= */

function applyTheme(dark) {

    document.body.classList.toggle(
        "dark",
        dark
    );


    if (theme) {

        theme.innerHTML = dark
            ? `<i class="fa-solid fa-sun"></i>
               <span>Light</span>`

            : `<i class="fa-solid fa-moon"></i>
               <span>Dark</span>`;
    }


    localStorage.setItem(
        "academic-theme",
        dark ? "dark" : "light"
    );
}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("academic-theme");


applyTheme(
    savedTheme === "dark"
);


/* Theme toggle */

theme?.addEventListener("click", () => {

    applyTheme(
        !document.body.classList.contains("dark")
    );

});


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}