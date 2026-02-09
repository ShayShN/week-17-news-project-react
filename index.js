
const root = document.getElementById('root')
const main = document.getElementById('main')

const getData = async function () {
    const local = localStorage.getItem("data")
    if (!local) {
        const response = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=955a96fed1e54748bd8f9b6e9b9861c9")
        const data = await response.json()
        console.log(data);

        localStorage.setItem("data", JSON.stringify(data.articles));
        return data.articles
    }
    return JSON.parse(localStorage.getItem("data"));
}

const createNav = function () {
    const nav = document.createElement('nav')

    const home = document.createElement('a')
    const create = document.createElement('a')

    home.href = '/home'
    create.href = '/create'

    home.textContent = "Home"
    create.textContent = "Create"

    nav.append(home, create)
    nav.classList.add('link')
    root.appendChild(nav)
}

const clickAction = async function () {

    document.body.addEventListener('click', async (event) => {
        event.preventDefault()
        const target = event.target


        if (target) {
            console.log(target);

            // console.log(target.textContent);

            if (target.textContent == "Home") {
                await createAllCards()
            }

            if (target.textContent == "Create") {

            }

            if (target.classList.contains('news')) {
               
                await extend(target)

            } else if (target.parentElement.classList.contains('news')) {
    
                await extend(target.parentElement)
            }
        }
    });
}

const extend = async (card) => {

    console.log(card);

    const data = await getData()
    console.log(data);

    const cardDetails = data[card.id];
    console.log(cardDetails);

    main.innerHTML = "";

    let extended = document.createElement('div')

    let author = document.createElement('p')
    let title = document.createElement('h1')
    let urlImage = document.createElement('img')
    let description = document.createElement('p')
    let content = document.createElement('p')

    author.textContent = cardDetails.author
    title.textContent = cardDetails.title
    urlImage.src = cardDetails.urlToImage
    description.textContent = cardDetails.description
    content.textContent = cardDetails.content

    extended.append(author, title, urlImage, description, content)
    
    extended.className = 'extended'
    // main.id = 'extended'
    main.appendChild(extended)
}

const createAllCards = async () => {
    main.innerHTML = "";
    const articles = await getData()
    articles.forEach((art, i) => {
        let news = document.createElement('button')


        let author = document.createElement('p')
        let title = document.createElement('h1')
        let urlImage = document.createElement('img')

        author.textContent = art.author
        title.textContent = art.title
        urlImage.src = art.urlToImage

        news.append(author, title, urlImage)
        news.classList.add('news')
        news.id = i;
        main.appendChild(news)
    });
}

const createBlock = async () => {
    main.innerHTML = "";
    
    let header = document.createElement('h1')
    let title = document.createElement('input')
    let file = document.createElement('input')
    let description = document.createElement('p')

    header.textContent = 

}

clickAction()
createNav()
createAllCards();















































// const root = document.getElementById("root");

// const users = [
//     { username: "Moshe" },
//     { username: "Nisim" },
//     { username: "Ben" },
// ]

// function getData() {
//     if (!localStorage.getItem("data"))
//         fetch("/api", {});
//     localStorage.setItem("data", JSON.stringify(users));
// }
// getData()
// function createNav() {
//     const nav = document.createElement("nav");
//     const home = document.createElement("a");
//     home.href = "/home";
//     home.textContent = "Home";
//     home.classList.add("link");
//     home.addEventListener("click", (e) => {
//         e.preventDefault();
//         localStorage.setItem("route", "home");
//         createPage("Home page");
//     })
//     const about = document.createElement("a");
//     about.href = "/about";
//     about.textContent = "About";
//     about.classList.add("link");
//     about.addEventListener("click", (e) => {
//         e.preventDefault();
//         localStorage.setItem("route", "about");
//         createPage("About page");
//     })

//     nav.appendChild(home);
//     nav.appendChild(about);
//     root.appendChild(nav);
// }

// function loadRoute() {
//     const currRoute = localStorage.getItem("route");
//     if (currRoute === "home") createPage("Home page");
//     else if (currRoute === "about") createPage("About page");
//     else createNav();
// }

// function createPage(contentTitle) {
//     root.innerHTML = "";
//     const container = document.createElement("section");
//     const title = document.createElement("h1");
//     title.textContent = contentTitle;
//     container.appendChild(title);
//     createNav();
//     root.appendChild(container);
// }

// loadRoute();