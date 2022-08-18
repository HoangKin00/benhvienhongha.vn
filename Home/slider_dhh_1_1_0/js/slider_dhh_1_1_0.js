const slider_dhh_1_1_0__data = [{
    link: '#',
    imgMb: 'Home/slider_dhh_1_1_0/images/slider-mb-1.jpg',
    imgPc: 'Home/slider_dhh_1_1_0/images/slider-pc-1.jpg',
    alt: 'pic'
}, {
    link: '#',
    imgMb: 'Home/slider_dhh_1_1_0/images/slider-mb-2.jpg',
    imgPc: 'Home/slider_dhh_1_1_0/images/slider-pc-2.jpg',
    alt: 'pic'
}, {
    link: '#',
    imgMb: 'Home/slider_dhh_1_1_0/images/slider-mb-3.jpg',
    imgPc: 'Home/slider_dhh_1_1_0/images/slider-pc-3.jpg',
    alt: 'pic'
}, {
    link: '#',
    imgMb: 'Home/slider_dhh_1_1_0/images/slider-mb-4.jpg',
    imgPc: 'Home/slider_dhh_1_1_0/images/slider-pc-4.jpg',
    alt: 'pic'
}]
const sliderItem = (props) => {
    return `
        <a href="${props.link}">
                <picture>
                    <source width="377" height="622" media="(max-width:767px)" srcset="${props.imgMb}">
                    <img width="1441" height="470" src="${props.imgPc}" alt="${props.alt}">
                </picture>
            </a>
    `
}
const slideShow = (idx) => {
    document.getElementById('slider_dhh_1_1_0__slider').innerHTML = sliderItem(slider_dhh_1_1_0__data[idx]);
    const slider_dhh_1_1_0__btn = document.querySelectorAll('.slider_dhh_1_1_0__dot');
    for (let i = 0; i < slider_dhh_1_1_0__btn.length; i++) {
        slider_dhh_1_1_0__btn[i].classList.remove("btn--active");
    }
    slider_dhh_1_1_0__btn[idx].classList.add("btn--active");
}
let index = 1;

// function autoRun() {
//     if (index >= slider_dhh_1_1_0__data.length) {
//         index = 0;
//     }
//     slideShow(index);
//     index++;
// }
slideShow(0)
    // setInterval(() => {
    //     autoRun();
    // }, 6000)