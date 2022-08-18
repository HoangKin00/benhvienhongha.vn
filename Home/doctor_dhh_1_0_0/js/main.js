const doctor = [{
        img: "Home/doctor_dhh_1_0_0/images/doctor-pic1.jpg",
        service: "Bác sĩ",
        name: "BS DANIEL NGUYỄN",
        info: `
        <ul>
            <li>- Tốt nghiệp bác sĩ đa khoa - Đại học Y Hà Nội</li>
            <li>- Bác sĩ chuyên khoa hồi sức cấp cứu - Bệnh Viện nhiệt đới trung ương</li>
            <li>- Bác sĩ chuyên khoa phẫu thuật tạo hình thẩm mỹ - Đại học y Hà Nội</li>
            <li>- Bác sĩ thẩm mỹ chuyên khoa thẩm mỹ Hồng Hà</li>
            <li>- Thành viên hiệp hội Thẩm mỹ Hàn quốc</li>
            <li>- 10 năm tu nghiệp tại Hàn Quốc</li>
        </ul
        `
    },
    {
        service: "Th.S BS",
        name: "NGUYỄN TIẾN SƠN",
        img: "Home/doctor_dhh_1_0_0/images/doctor-pic2.jpg",
        info: `
    <ul>
        <li>- Bác sĩ chuyên khoa ngoại > 25 năm kinh nghiệm</li>
        <li>- Giám đốc bệnh viện đa khoa Hồng Hà</li>
    </ul>
    `
    },
    {
        service: "PGS. TS",
        name: "VŨ BÁ QUYẾT",
        img: "Home/doctor_dhh_1_0_0/images/doctor-pic3.jpg",
        info: `   <ul>
    <li>- Nguyên giám đốc bệnh viện Phụ sản Trung ương Hà Nội</li>
    <li>- Tốt nghiệp Đại học Y Hà Nội (khóa 1976-1982)</li>
    <li>- Là chuyên gia sản khoa hàng đầu Việt Nam, được tu nghiệp nhiều năm tại Hà Lan, Pháp,…</li>
    <li>- Bác sĩ giỏi chuyên môn và có nhiều năm kinh nghiệm thăm khám, điều trị các bệnh rong kinh, rong huyết; viêm nhiễm phụ khoa, viêm cổ tử cung, viêm vùng chậu, viêm phần phụ, viêm tắc ống dẫn trứng,…</li>
</ul>`

    },
    {
        service: "ThS. BS",
        name: "VŨ THỊ HỒNG HẠNH",
        img: "Home/doctor_dhh_1_0_0/images/doctor-pic4.jpg",
        info: `   <ul>
    <li>- Chuyên gia 30 năm kinh nghiệm điều trị vô sinh hiếm muộn & bệnh sản phụ khoa</li>
    <li>- Thạc sĩ, bác sĩ chuyên khoa sản Đại học Y Hà Nội</li>
    <li>- Là chuyên gia sản khoa hàng đầu Việt Nam, được tu nghiệp nhiều năm tại Hà Lan, Pháp,…</li>
    <li>- Bác sĩ Bệnh viện Phụ sản Trung ương</li>
</ul>`
    },
    {
        service: "BS CKI",
        name: "ĐÀO THU HIỀN",
        img: "Home/doctor_dhh_1_0_0/images/doctor-pic5.jpg",
        info: `   <ul>
    <li>- Bác sĩ Phụ sản Bệnh viện Đa khoa Hồng Hà</li>
    <li>- Thạc sĩ, bác sĩ chuyên khoa sản Đại học Y Hà Nội</li>
    <li>- Bác sĩ 30 năm kinh nghiệm điều trị vô sinh hiếm muộn & bệnh phụ khoa</li>
    <li>- Bác sĩ chuyên khoa Phụ sản – Bệnh viện Phụ sản Trung ương</li>
    <li>- Tốt nghiệp Đại học Y Hà Nội</li>
</ul>`
    },
    {
        service: "Bác sĩ",
        name: "ROBERT NGUYỄN",
        img: "Home/doctor_dhh_1_0_0/images/doctor-pic6.jpg",
        info: `   <ul>
    <li>- Chuyên gia hàng đầu trong lĩnh vực PTTM</li>
    <li>- Thành viên hiệp hội PTTM Hàn Quốc</li>
    <li>- 15 năm kinh nghiệm PTTM tạo hình khuôn mặt và vóc dáng</li>
    <li>- Thực hiện thành công > 1000 ca PTTM mỗi năm</li>
</ul>`
    },
];

const doctorItem = document.getElementsByClassName("doctor_dhh_1_0_0__item");
console.log(doctorItem)
const doctorBox = document.getElementsByClassName("doctor_dhh_1_0_0__box")[0];

for (let i = 0; i < doctorItem.length; i++) {
    // const doctor = array[i];
    let HTML = "";
    doctorItem[i].addEventListener("click", function() {
        HTML = `<div class="doctor_dhh_1_0_0__avatar">
        <img src="${doctor[i].img}" alt="">
    </div>
    <div class="doctor_dhh_1_0_0__info">
        <div class="doctor_dhh_1_0_0__doctor">
            <p>
                ${doctor[i].service}
            </p>
        </div>
        <h2 class="doctor_dhh_1_0_0__name">
            <p>${doctor[i].name}</p>
        </h2>
        ${doctor[i].info}
    </div>`;
        console.log(HTML)
        doctorBox.innerHTML = HTML;
    });
}

function setActiveDoctor(element, className, event) {
    let elements = document.querySelectorAll(element);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, function(event) {
            [].forEach.call(elements, function(el) {
                el.classList.remove(className);
            });
            this.classList.add(className);
        });
    }
}

setActiveDoctor(".doctor_dhh_1_0_0__item", "active", "click");