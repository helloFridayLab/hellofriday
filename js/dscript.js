let docuss = [
    {
        num: 1,
        name: "Docus 1",
        type: "Documentaire",
        category: "Enquêtes",
        thumbnail: "../../assets/images/img-1.jpg",
        source: "../assets/videos/limitless.mp4",
    },
    {
        num: 2,
        name: "Docus 2",
        type: "Documentaire",
        category: "Animaux",
        thumbnail: "../../assets/images/img-2.jpg",
        source: "",
    },
    {
        num: 3,
        name: "Docus 3",
        type: "Documentaire",
        category: "Histoire",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
    {
        num: 4,
        name: "Docus 4",
        type: "Documentaire",
        category: "Découvertes",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
];

let ordered_docuss = docuss.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
});

let categories = ["Animaux","Découvertes","Histoire","Enquêtes","Insolites","Nature","Sport"];

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
    let elements = document.querySelectorAll("#docus-box");
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
    const listcontents = document.getElementById("docuss");
    const content = document.querySelectorAll("#docus-box");
    const nname = listcontents.getElementsByClassName("docus-title");

    for(var i=0;i<nname.length;i++) {
        let match = content[i].getElementsByClassName("docus-title")[0];

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

for(let i=0;i<ordered_docuss.length;i++) {
document.querySelector('#docuss').innerHTML += `
<div id="docus-box" class="docus-box ${docuss[i].category.toLowerCase()} invisible">
   <img src="${docuss[i].thumbnail}" alt="" class="docus-box-img">
   <div class="docus-box-overlay">                 
   </div>
   <div class="docus-box-text">
     <div id="btns-group" class="btns-group">
        <button id="btns-group-play${docuss[i].num}" class="btns-group-play"><i class="fa fa-play"></i></button>             
     </div>  
     <h2 class="docus-title">${docuss[i].name}</h2>
     <span class="docus-category">${docuss[i].category}</span>
   </div>
</div>`
}

let video = document.querySelector(".video-container");

for(let i=0;i<docuss.length;i++) {

    dbox = "dname" + i;
    window[dbox] = document.querySelector("#btns-group-play"+`${docuss[i].num}`);

window[dbox].addEventListener('click', () => {
   document.querySelector(".video-box").innerHTML = `
   <video id="player" controls>
       <source src="${docuss[i].source}" />
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