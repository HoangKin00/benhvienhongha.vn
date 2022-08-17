let slider1 = [
    {
        title: 'Khuyến mãi',
        background: 'images/khuyen-mai.jpg',
        link: '#',
    },
    {
        title: 'Khuyến mãi 2',
        background: 'images/khuyen-mai.jpg',
        link: '#',
    },
];
let slider1mb = [
    {
        title: 'Khuyến mãi',
        background: 'images/khuyen-mai-m.jpg',
        link: '#',
    },
    {
        title: 'Khuyến mãi 2',
        background: 'images/khuyen-mai-m.jpg',
        link: '#',
    },
];
let currentSlideIndex = 0;

function buildSlider(slideArray, sliderContainer) {
    let myHTML = '', myStyle, slide = sliderContainer;
    let nav = `
        <div id="sliderNav" class="sliderNav">
            <div id="sliderPrev" class="sliderPrev" onclick="prevSlide(slider1, 'slider1');">
                <img width="32" height="32" src="images/left-arrow.svg" alt="left">
            </div>
            <div id="sliderNext" class="sliderNext" onclick="nextSlide(slider1, 'slider1');">
                <img width="32" height="32" src="images/right-arrow.svg" alt="right">
            </div>
        </div>
    `;

    for (let i = 0; i < slideArray.length; i++) {

        if (i == 0) {
            myStyle = `style="left:0"`;
        } else {
            myStyle = '';
        }

        myHTML += `
      <a href="${slideArray[i].link}">
        <img id="${slide}${i}" class="slider__item responsive__item" ${myStyle} src="${slideArray[i].background}" alt="${slideArray[i].title}"  width="1920" height="480" />
      </a>
    `;
    }
    document.getElementById(sliderContainer).innerHTML = myHTML + nav;
}

function prevSlide(slideArray, slide) {
    let nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    document.getElementById(slide + nextSlideIndex).style.left = "-100%";
    document.getElementById(slide + currentSlideIndex).style.left = 0;
    document
        .getElementById(slide + nextSlideIndex)
        .setAttribute("class", "slider__item slideInLeft");
    document
        .getElementById(slide + currentSlideIndex)
        .setAttribute("class", "slider__item slideOutRight");
    currentSlideIndex = nextSlideIndex;
}

function nextSlide(slideArray, slide) {
    let nextSlideIndex;
    if (currentSlideIndex === slideArray.length - 1) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
    document.getElementById(slide + nextSlideIndex).style.left = "100%";
    document.getElementById(slide + currentSlideIndex).style.left = 0;
    document
        .getElementById(slide + nextSlideIndex)
        .setAttribute("class", "slider__item slideInRight");
    document
        .getElementById(slide + currentSlideIndex)
        .setAttribute("class", "slider__item slideOutLeft");
    currentSlideIndex = nextSlideIndex;
}

function buildSliderMobile(slideArray, slide) {
    let myHTML = '';

    myHTML = `
        <a href="${slideArray[0].link}">
            <img id="${slide}${0}" class="slider__item responsive__item" style="left:0" src="${slideArray[0].background}" alt="${slideArray[0].title}"  width="1920" height="480" />
        </a>
    `;
    document.getElementById(slide).innerHTML = myHTML;
};

function buildSliderMobileRand(slideArray, sliderContainer){
    let random = Math.floor(Math.random() * slideArray.length);

    document
    .querySelector(`#${sliderContainer} a`)
    .setAttribute("href", slideArray[random].link);
    
    document
    .querySelector(`#${sliderContainer} img`)
    .setAttribute("src", slideArray[random].background);
    
    document
    .querySelector(`#${sliderContainer} img`)
    .setAttribute("alt", slideArray[random].title);
}