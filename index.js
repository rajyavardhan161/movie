// const section=document.querySelector("section");
// const apikey="ee825af7ce9901a64495d007114e3a89"
// const movieurl="https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1"

// const movielink="https://api.themoviedb.org/3/movie/upcoming?api_key="+apikey+"&language=en-US&page=1"

// // console.log(apikey);

// async function fetchdatafromurl(url){
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//     showData(result.results);
    
// }
// fetchdatafromurl(movieurl)

// function showData(obj){
//     obj.map((movies)=>{
//         const main = document.createElement("div");
//         main.classList.add("movies");

//         const anchor=document.createElement("a");
//         anchor.href= movies;

//         const img = document.createElement("img");
//          const baseImageUrl = "https://image.tmdb.org/t/p/w500";
//         img.src = baseImageUrl + movies.poster_path;

//         anchor.append(img);

//         const name = document.createElement("h3")
//         name.textContent = "Name : " + movies.title

//         const language = document.createElement("p")
//         language.innerText ="Language : " + movies.original_language

//         const date = document.createElement("h4")
//         date.innerText = "Release_date : " + movies.release_date
 


//         main.append(anchor,name,language,date);
//         section.append(main);

//     })
// }
// ---------------------




// const section = document.querySelector("section");
// const API_KEY = "ee825af7ce9901a64495d007114e3a89";
// const BASE_URL = "https://api.themoviedb.org/3";
// // console.log(BASE_URL);


// const urls = {
//     popular: BASE_URL + "/movie/popular?api_key=" + API_KEY + "&language=en-US&page=1",
//     upcoming: BASE_URL + "/movie/upcoming?api_key=" + API_KEY + "&language=en-US&page=1",
//     originals: BASE_URL + "/discover/tv?api_key=" + API_KEY + "&with_networks=213",
//     trending: BASE_URL + "/trending/movie/day?language=en-US&api_key=" + API_KEY,
//     topRated: BASE_URL + "/movie/top_rated?language=en-US&page=1&api_key=" + API_KEY,
//     actionMovies: BASE_URL + "/discover/movie?language=en-US&sort_by=popularity.desc&with_genres=28&api_key=" + API_KEY,
//     comedyMovies: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=35",
//     horrorMovies: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=27",
//     romanticMovies: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=10749",
//     documentaries: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=99"
// };


// async function fetchAllCategories() {
//     try {
//         const responses = await Promise.all(Object.values(urls).map(url => fetch(url)));
//         const data = await Promise.all(responses.map(res => res.json()));

//         const categories = Object.keys(urls);

//         categories.forEach((category, index) => {
//             // console.log(category.toUpperCase() + ":", data[index]);
//             showData(data[index].results, category);
//         });

//     } catch (error) {
//         console.error("Error fetching movie categories:", error);
//     }
// }


// function showData(movies, category) {
//     const heading = document.createElement("h1");
//     heading.textContent = category.toUpperCase();

//     section.append(heading);


//     movies.map((movie) => {
//         const main = document.createElement("div");
//         main.classList.add("movies");

//         const anchor = document.createElement("a");
//         anchor.href ;

//         const img = document.createElement("img");
//         const imageurl = "https://image.tmdb.org/t/p/w500";
//         img.src = imageurl + movie.poster_path;

//         const name = document.createElement("h3")
//         name.textContent = "Name : " + movie.title

//         const language = document.createElement("p");
//         language.textContent = "Language: " + movie.original_language;

//         const date = document.createElement("h4")
//         date.innerText = "Release_date : " + movie.release_date

//         anchor.append(img);
//         main.append(anchor, name, language,date);
//         section.append(main);
//     });
// }
// fetchAllCategories();
// --------------------------------------------




const section = document.querySelector("section");
const API_KEY = "ee825af7ce9901a64495d007114e3a89";
const BASE_URL = "https://api.themoviedb.org/3";

const urls = {
    popular: BASE_URL + "/movie/popular?api_key=" + API_KEY + "&language=en-US&page=1",
    upcoming: BASE_URL + "/movie/upcoming?api_key=" + API_KEY + "&language=en-US&page=1",
    originals: BASE_URL + "/discover/tv?api_key=" + API_KEY + "&with_networks=213",
    trending: BASE_URL + "/trending/movie/day?language=en-US&api_key=" + API_KEY,
    topRated: BASE_URL + "/movie/top_rated?language=en-US&page=1&api_key=" + API_KEY,
    actionMovies: BASE_URL + "/discover/movie?language=en-US&sort_by=popularity.desc&with_genres=28&api_key=" + API_KEY,
    comedyMovies: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=35",
    horrorMovies: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=27",
    romanticMovies: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=10749",
    documentaries: BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=99"
};


function setRandomBanner(movies) {
    const banner = document.getElementById("banner");

    if (!movies || movies.length === 0) return;

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    banner.style.backgroundImage = "url(https://image.tmdb.org/t/p/original"+randomMovie.backdrop_path;

    const mid=document.createElement("div");
    mid.classList.add("mid")
    const title=document.createElement("h1");
    const overview=document.createElement("p");

    
    overview.textContent=randomMovie.overview;
    title.textContent=randomMovie.title ;
    mid.append(title,overview)

    console.log(title);
    banner.append (mid) ;
}

async function fetchAllCategories() {
    try {
        const responses = await Promise.all(Object.values(urls).map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));

        const categories = Object.keys(urls);

        categories.forEach((category, index) => {
            console.log(category);
            
            const results = data[index].results;
            console.log(results);
            
            if (category === "popular") {
                setRandomBanner(results);
            }
            showData(results, category);
        });

    } catch (error) {
        console.error("Error fetching movie categories:", error);
    }
}

function showData(movies, category) {
    const heading = document.createElement("h1");
    heading.textContent = category.toUpperCase();
    section.appendChild(heading);

    const container = document.createElement("div");
    container.classList.add("category");

    movies.forEach((movie) => {
        const main = document.createElement("div");
        main.classList.add("movies");

        const anchor = document.createElement("a");
        anchor.href ;

        const img = document.createElement("img");
        const imageurl = "https://image.tmdb.org/t/p/w500";
        img.src = imageurl + movie.poster_path;

        const name = document.createElement("h3")
        name.textContent = "Name : " + movie.title

        const language = document.createElement("p");
        language.textContent = "Language: " + movie.original_language;

        const date = document.createElement("h4")
        date.innerText = "Release_date : " + movie.release_date

        anchor.append(img);
        main.append(anchor, name, language,date);
        container.append(main);
    });

    section.append(container);
}


fetchAllCategories();
