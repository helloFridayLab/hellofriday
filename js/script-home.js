var swiper = new Swiper(".news-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".news-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",        
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
});

var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".popular-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",        
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
});

var swiper = new Swiper(".explorer-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".explorer-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",        
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
});

var loader = document.querySelector("#preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});