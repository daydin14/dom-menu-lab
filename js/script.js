const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "SEI Rocks!";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

var menuLinks = [
    {text: "about", href: "/about"},
    {text: "catalog", href: "/catalog"},
    {text: "orders", href: "/orders"},
    {text: "account", href: "/account"},
];

