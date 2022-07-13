let movies = [
    {
        num: 1,
        name: "Unfriended Dark Web",
        type: "Film",
        category: "Drame",
        thumbnail: "../../assets/images/unfriended-dark-web.jpg",
        source: "../../assets/videos/unfriended-dark-web.mp4",
    },
    {
        num: 2,
        name: "La Couleur de La Victoire",
        type: "Film",
        category: "Biopic",
        thumbnail: "../../assets/images/la-couleur-de-la-victoire.jpg",
        source: "../../assets/videos/la-couleur-de-la-victoire.mp4",
    },
    {
        num: 3,
        name: "Une Femme Pas Comme Les Autres",
        type: "Film",
        category: "Comédie",
        thumbnail: "../../assets/images/une-femme-pas-comme-les-autres.jpg",
        source: "../../assets/videos/une-femme-pas-comme-les-autres.mp4",
    },
    {
        num: 4,
        name: "Get On Up",
        type: "Film",
        category: "Biopic",
        thumbnail: "../../assets/images/get-on-up.jpg",
        source: "../../assets/videos/get-on-up.mp4",
    },
];

let ordered_movies = movies.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
});

let categories = ["Action","Aventure","Biopic","Comédie","Drame","Fiction","Horreur","Romance"];

for(let i=0;i<categories.length;i++) {
    let filter = document.getElementById("filter");
    let filter_opt = document.createElement("option");

    filter_opt.setAttribute("id", "select-value");

    filter_opt.setAttribute("value", categories[i].toLowerCase());

    filter.setAttribute("onchange", "filterContent()");

    filter_opt.innerHTML = categories[i];

    filter.appendChild(filter_opt);

}

function filterContent() {
    let elements = document.querySelectorAll("#movie-box");
    let value = document.getElementById("filter").value;
    
    elements.forEach((element) => {
        if(value == 'all') {
            element.classList.remove("invisible");
        }
        else {
            if(element.classList.contains(value)) {
                element.classList.remove("invisible");
            }
            else {
              element.classList.add("invisible");
          }
        }
    });
}

const searchContent = () => {
    const searchbox = document.getElementById("search-input").value.toUpperCase();
    const listcontents = document.getElementById("movies");
    const content = document.querySelectorAll("#movie-box");
    const mname = listcontents.getElementsByClassName("movie-title");

    for(var i=0;i<mname.length;i++) {
        let match = content[i].getElementsByClassName("movie-title")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                content[i].style.display = "";
            }else{
                content[i].style.display = "none";
            }
        }
    }

}

window.onload = () => {
    filterContent('all');
    }

for(let i=0;i<ordered_movies.length;i++) {
movies.sort(function(a,b){return a.name-b.name;});
document.querySelector('#movies').innerHTML += `
<div id="movie-box" class="movie-box ${movies[i].category.toLowerCase()} invisible">
   <img src="${movies[i].thumbnail}" alt="" class="movie-box-img">
   <div class="movie-box-overlay">                 
   </div>
   <div class="movie-box-text">
     <div id="btns-group" class="btns-group">
        <button id="btns-group-play${movies[i].num}" class="btns-group-play"><i class="fa fa-play"></i></button>             
     </div>  
     <h2 class="movie-title">${movies[i].name}</h2>
     <span class="movie-category">${movies[i].category}</span>
   </div>
</div>`
}

let video = document.querySelector(".video-container");

for(let i=0;i<movies.length;i++) {

    mbox = "mname" + i;
    window[mbox] = document.querySelector("#btns-group-play"+`${movies[i].num}`);

window[mbox].addEventListener('click', () => {
   document.querySelector(".video-box").innerHTML = `
   <video id="player" controls>
       <source src="${movies[i].source}" />
   </video>
   <button id="close"><i class="fa fa-times"></i></button>`
   let player = document.querySelector("#player");
   let closebtn = document.querySelector("#close");
   
   video.classList.add('show');
   player.play();
   
   closebtn.addEventListener('click', () => {
       video.classList.remove('show');
       player.pause();
 });
})
};