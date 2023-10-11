// Lấy tất cả các phần tử hình chữ nhật
const rectangles = document.querySelectorAll('.rectangle');

// Thêm sự kiện cho từng phần tử hình chữ nhật
rectangles.forEach(rectangle => {
    // Thêm lớp CSS khi con trỏ rê chuột vào hình chữ nhật
    rectangle.addEventListener('mouseover', function() {
        rectangle.classList.add('hand-cursor');
    });

    // Loại bỏ lớp CSS khi con trỏ di chuột ra khỏi hình chữ nhật
    rectangle.addEventListener('mouseout', function() {
        rectangle.classList.remove('hand-cursor');
    });

    // Thêm sự kiện nhấp vào hình chữ nhật
    rectangle.addEventListener('click', function() {
        // Lấy URL từ thuộc tính dữ liệu (data attribute)
        const url = rectangle.getAttribute('data-url');
        if (url) {
            // Chuyển hướng đến URL được chỉ định cho hình chữ nhật này
            window.location.href = url;
        }
    });
});