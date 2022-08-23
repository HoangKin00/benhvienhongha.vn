document.getElementById('headerMenuBtn').addEventListener('click', () => {
    document.getElementById('headerSideBar').style.display = "block"
    document.getElementById('headerBg').style.display = "block"
})
document.getElementById('headerBg').addEventListener('click', () => {
    document.getElementById('headerSideBar').style.display = "none"
    document.getElementById('headerBg').style.display = "none"
})
const dropdownBtn = document.getElementsByClassName('haveDropdown');
for (let i = 0; i < dropdownBtn.length; i++) {
    dropdownBtn[i].addEventListener('click', () => {
        if (document.getElementsByClassName('header_dhh_1_1_0__dropdown')[i].style.display === "block") {
            document.getElementsByClassName('header_dhh_1_1_0__dropdown')[i].style.display = "none"
            document.querySelectorAll('.haveDropdown .header_dhh_1_1_0__menuTitle')[i].style.color = "#333"

        } else {
            document.getElementsByClassName('header_dhh_1_1_0__dropdown')[i].style.display = "block"
            document.querySelectorAll('.haveDropdown .header_dhh_1_1_0__menuTitle')[i].style.color = "#01abe6"

        }
    })
}