let tvshows = [
    {
        num: 1,
        name: "Série 1",
        type: "Série",
        category: "Drame",
        thumbnail: "../../assets/images/img-1.jpg",
        source: "../../assets/videos/limitless.mp4",
    },
    {
        num: 2,
        name: "Série 2",
        type: "Série",
        category: "Biopic",
        thumbnail: "../../assets/images/img-2.jpg",
        source: "",
    },
    {
        num: 3,
        name: "Série 3",
        type: "Série",
        category: "Drame",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
    {
        num: 4,
        name: "série 4",
        type: "Série",
        category: "Drame",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
];

let ordered_tvshows = tvshows.sort(function(a,b){
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
    let elements = document.querySelectorAll("#tv-show-box");
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
    const listcontents = document.getElementById("tv-shows");
    const content = document.querySelectorAll("#tv-show-box");
    const sname = listcontents.getElementsByClassName("tv-show-title");

    for(var i=0;i<sname.length;i++) {
        let match = content[i].getElementsByClassName("tv-show-title")[0];

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

for(let i=0;i<ordered_tvshows.length;i++) {
document.querySelector('#tv-shows').innerHTML += `
<div id="tv-show-box" class="tv-show-box ${tvshows[i].category.toLowerCase()} invisible">
   <img src="${tvshows[i].thumbnail}" alt="" class="tv-show-box-img">
   <div class="tv-show-box-overlay">                 
   </div>
   <div class="tv-show-box-text">
     <div id="btns-group" class="btns-group">
        <button id="btns-group-play${tvshows[i].num}" class="btns-group-play"><i class="fa fa-play"></i></button>             
     </div>  
     <h2 class="tv-show-title">${tvshows[i].name}</h2>
     <span class="tv-show-category">${tvshows[i].category}</span>
   </div>
</div>`
}

let video = document.querySelector(".video-container");

for(let i=0;i<tvshows.length;i++) {

    tsbox = "tsname" + i;
    window[tsbox] = document.querySelector("#btns-group-play"+`${tvshows[i].num}`);

window[tsbox].addEventListener('click', () => {
   document.querySelector(".video-box").innerHTML = `
   <video id="player" controls>
       <source src="${tvshows[i].source}" />
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