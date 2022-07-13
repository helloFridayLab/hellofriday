let n_popup = document.querySelector("#network_popup");
let container = document.querySelector(".container");
let footer = document.querySelector("#footer");

function request() {
    let x = new XMLHttpRequest();
    x.open("GET", "https://www.google.com", true);
    x.onload = ()=> {
        if(x.status == 200 && x.status < 300) {
                container.classList.remove("hide");
                n_popup.classList.add("hide");
                footer.classList.remove("hide");
        }
        else {
            container.classList.add("hide");
            n_popup.classList.remove("hide");
            footer.classList.add("hide");
        }
    }
    x.onerror = () => {
        container.classList.add("hide");
        n_popup.classList.remove("hide");
        footer.classList.add("hide");
    }
    x.send();
}

setInterval(() => {
    request();
}, 5000);