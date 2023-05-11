// Lấy thông tin điểm đi và điểm đến từ form
const form = document.querySelector('form');
const departure = form.querySelector('#departure');
const destination = form.querySelector('#destination');

form.addEventListener('submit', function(event) {
event.preventDefault();
// Kiểm tra xem người dùng đã chọn điểm đi và điểm đến chưa
if (departure.value === '' || destination.value === '') {
alert('Vui lòng chọn điểm đi và điểm đến');
} else {
alert(`Đặt vé từ ${departure.value} đến ${destination.value}`);
}
});