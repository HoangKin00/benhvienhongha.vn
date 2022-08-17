document.getElementById('headerMenuBtn').addEventListener('click', () => {
    document.getElementById('headerSideBar').style.display = "block"
    document.getElementById('headerBg').style.display = "block"
})
document.getElementById('headerBg').addEventListener('click', () => {
    document.getElementById('headerSideBar').style.display = "none"
    document.getElementById('headerBg').style.display = "none"
})