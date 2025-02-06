window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".header_navbar",".header-bg-nav");
    if (window.scrollY > 1) {  // Kéo xuống 200px thì navbar xuất hiện
        navbar.style.position = "fixed";
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "50px"; // Trở về vị trí ban đầu
    }
});