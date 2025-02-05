    // truọt xuống 
function slidedown() {
    let elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 50) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", slidedown);
slidedown(); // Để kiểm tra ngay khi tải trang

    // trượt trái 
function slideleft() {
    let elements = document.querySelectorAll(".left");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 50) {
            el.classList.add("showleft");
        }
    });
}

window.addEventListener("scroll", slideleft);
slideleft(); // Để kiểm tra ngay khi tải trang

function slideright() {
    let elements = document.querySelectorAll(".right");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 50) {
            el.classList.add("showright");
        }//  else {
        //     el.classList.remove("showright"); // Nếu chưa cuộn tới thì ẩn lại
        // }
    });
}

window.addEventListener("scroll", slideright);
// Không gọi `slideright();` ngay khi tải trang nữa, chỉ chờ sự kiện `scroll`
