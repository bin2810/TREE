const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

// Đặt kích thước canvas theo container
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

// Tạo mảng chứa các hạt tuyết
const snowflakes = Array.from({ length: 50 }, () => createSnowflake());

// Hàm tạo một hạt tuyết
function createSnowflake() {
    return {
        x: Math.random() * canvas.width,    // Vị trí ngẫu nhiên theo trục X
        y: Math.random() * canvas.height,  // Vị trí ngẫu nhiên theo trục Y
        size: Math.random() * 3 + 1,       // Kích thước hạt tuyết
        speed: Math.random() * 1 + 0.5,    // Tốc độ rơi
        opacity: Math.random() * 0.5 + 0.5 // Độ trong suốt
    };
}

// Hàm vẽ và cập nhật vị trí hạt tuyết
function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Xoá canvas

    snowflakes.forEach((flake) => {
        flake.y += flake.speed; // Di chuyển xuống
        if (flake.y > canvas.height) {
            flake.y = 0; // Quay lại từ trên
            flake.x = Math.random() * canvas.width; // Vị trí X ngẫu nhiên
        }

        // Vẽ hạt tuyết
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
    });

    requestAnimationFrame(drawSnow); // Lặp lại hiệu ứng
}

// Bắt đầu hiệu ứng
drawSnow();
