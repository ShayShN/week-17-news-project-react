// import cors from 'cors'

const root = document.getElementById('root')


async function getData() {
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-01-08&sortBy=publishedAt&apiKey=955a96fed1e54748bd8f9b6e9b9861c9")
    const data = await response.json()
    // console.log(data);
    return (await data.articles)

    // console.log(await data.articles);


    // console.log( response.json(data));
    // console.log();


}
// getData()



const createNav = async function () {

    const nav = document.createElement('nav')

    const home = document.createElement('a')
    const create = document.createElement('a')
    const expanded = document.createElement('a')

    home.href = '/home'
    create.href = '/create'
    expanded.href = '/expanded'

    home.textContent = "Home"
    create.textContent = "Create"
    expanded.textContent = "Expanded"


    nav.append(home, create, expanded)
    nav.classList.add('link')


    document.body.addEventListener('click', async (event) => {
        event.preventDefault()
        const target = event.target
        if (target) {
            console.log(target.textContent);
            if (target.textContent == "Home") {
                const articles = await getData()
                articles.forEach(art => {
                    let news = document.createElement('div')
                    let author = document.createElement('author')
                    let title = document.createElement('p')
                    let urlToImage = document.createElement('img')

                    author.textContent = art.author
                    title.textContent = art.title
                    urlToImage.src = art.urlToImage

                    console.log(author);
                    

                    news.append(author, title, urlToImage)
                    news.classList.add('news')
                    root.appendChild(news)

                });
                console.log(articles);

            }

            if (target.textContent == "Create") {
            }

            if (target.textContent == "Expanded") {
            }
        }
    })
    root.appendChild(nav)

}
createNav()













































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