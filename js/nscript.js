let novelass = [
    {
        num: 1,
        name: "Novelas 1",
        type: "Feuilleton",
        category: "Drame",
        thumbnail: "../../assets/images/img-1.jpg",
        source: "../../assets/videos/limitless.mp4",
    },
    {
        num: 2,
        name: "Novelas 2",
        type: "Feuilleton",
        category: "Biopic",
        thumbnail: "../../assets/images/img-2.jpg",
        source: "",
    },
    {
        num: 3,
        name: "Novelas 3",
        type: "Feuilleton",
        category: "Drame",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
    {
        num: 4,
        name: "Novelas 4",
        type: "Feuilleton",
        category: "Drame",
        thumbnail: "../../assets/images/img-3.jpg",
        source: "",
    },
];

let ordered_novelass = novelass.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
});

let categories = ["Action","Comédie","Drame"];

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
    let elements = document.querySelectorAll("#novelas-box");
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
    const listcontents = document.getElementById("novelass");
    const content = document.querySelectorAll("#novelas-box");
    const nname = listcontents.getElementsByClassName("novelas-title");

    for(var i=0;i<nname.length;i++) {
        let match = content[i].getElementsByClassName("novelas-title")[0];

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

for(let i=0;i<ordered_novelass.length;i++) {
document.querySelector('#novelass').innerHTML += `
<div id="novelas-box" class="novelas-box ${novelass[i].category.toLowerCase()} invisible">
   <img src="${novelass[i].thumbnail}" alt="" class="novelas-box-img">
   <div class="novelas-box-overlay">                 
   </div>
   <div class="novelas-box-text">
     <div id="btns-group" class="btns-group">
        <button id="btns-group-play${novelass[i].num}" class="btns-group-play"><i class="fa fa-play"></i></button>             
     </div>  
     <h2 class="novelas-title">${novelass[i].name}</h2>
     <span class="novelas-category">${novelass[i].category}</span>
   </div>
</div>`
}

let video = document.querySelector(".video-container");

for(let i=0;i<novelass.length;i++) {
    nbox = "nname" + i;
    window[nbox] = document.querySelector("#btns-group-play"+`${novelass[i].num}`);

window[nbox].addEventListener('click', () => {
   document.querySelector(".video-box").innerHTML = `
   <video id="player" controls>
       <source src="${novelass[i].source}" />
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