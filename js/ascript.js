let animes = [
    {
        num: 1,
        name: "Anime 1",
        type: "Anime",
        category: "Action",
        thumbnail: "../../assets/images/img-1.jpg",
        source: "../../assets/videos/limitless.mp4",
    },
    {
        num: 2,
        name: "Anime 2",
        type: "Anime",
        category: "Comédie",
        thumbnail: "../../assets/images/img-2.jpg",
        source: "",
    },
    {
        num: 3,
        name: "Anime 3",
        type: "Anime",
        category: "Romance",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
    {
        num: 4,
        name: "Anime 4",
        type: "Anime",
        category: "Horreur",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
    {
        num: 1,
        name: "Anime 5",
        type: "Anime",
        category: "Action",
        thumbnail: "../../assets/images/img-1.jpg",
        source: "../../assets/videos/limitless.mp4",
    }
];

let ordered_animes = animes.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
});

let categories = ["Action","Aventure","Comédie","Drame","Horreur","Thriller","Romance","Sport"];

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
    let elements = document.querySelectorAll("#anime-box");
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
    const listcontents = document.getElementById("animes");
    const content = document.querySelectorAll("#anime-box");
    const aname = listcontents.getElementsByClassName("anime-title");

    for(var i=0;i<aname.length;i++) {
        let match = content[i].getElementsByClassName("anime-title")[0];

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

for(let i=0;i<ordered_animes.length;i++) {
document.querySelector('#animes').innerHTML += `
<div id="anime-box" class="anime-box ${animes[i].category.toLowerCase()} invisible">
   <img src="${animes[i].thumbnail}" alt="" class="anime-box-img">
   <div class="anime-box-overlay">                 
   </div>
   <div class="anime-box-text">
     <div id="btns-group" class="btns-group">
        <button id="btns-group-play${animes[i].num}" class="btns-group-play"><i class="fa fa-play"></i></button>             
     </div>  
     <h2 class="anime-title">${animes[i].name}</h2>
     <span class="anime-category">${animes[i].category}</span>
   </div>
</div>`
}

let video = document.querySelector(".video-container");

for(let i=0;i<animes.length;i++) {

    abox = "aname" + i;
    window[abox] = document.querySelector("#btns-group-play"+`${animes[i].num}`);

window[abox].addEventListener('click', () => {
   document.querySelector(".video-box").innerHTML = `
   <video id="player" controls>
       <source src="${animes[i].source}" />
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