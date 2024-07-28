// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];

//Task 1
let mainEl = document.getElementById("main")
console.log(typeof(mainEl))
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = `<h1>SEI Rocks!</h1>`
mainEl.classList.add("flex-ctr")

//Task 2
let topMenuEl = document.getElementById("top-menu")
console.log(typeof(topMenuEl))
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

//Task 3
for (link in menuLinks) {
    console.log(menuLinks[link])
    topMenuEl.innerHTML += `<a href ${menuLinks[link].href}>${menuLinks[link].text}`
}