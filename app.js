let previous = document.getElementById("previous");
let next = document.getElementById("next");
let images = document.getElementsByTagName("img");
let index = 0;
next.addEventListener("click", () => {
    index++;
    if (index >= images.length) {
        index = 0
    }
    document.getElementsByClassName("show")[0].classList.remove("show");
    images[index].classList.add("show");
})
previous.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1 
    }
    document.getElementsByClassName("show")[0].classList.remove("show");
    images[index].classList.add("show");
})