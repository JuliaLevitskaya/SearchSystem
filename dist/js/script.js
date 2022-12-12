const categories = document.querySelector('.categories');
const dropdown = document.querySelector('.categories__dropdown-list');
const video = document.querySelector('.video');
const closeicons = document.querySelectorAll('.search__category-icon');
const search = document.querySelector('.search__btn')
const all = document.querySelector('.all');
const music = document.querySelector('.music');
const article = document.querySelector('.Articles');
const interviews = document.querySelector('.interviews');
const photography = document.querySelector('.photography');
const articles = document.querySelector('.articles');

const searchCategory1 = document.querySelector('.search__category[data-id="interviews"]');
const searchCategory2 = document.querySelector('.search__category[data-id="all"]');
const searchCategory3 = document.querySelector('.search__category[data-id="music"]');
const searchCategory4 = document.querySelector('.search__category[data-id="Articles"]');

categories.addEventListener("click", function() {
    dropdown.classList.toggle('show');
});

closeicons.forEach(icon => {
    icon.addEventListener("click", function() {
        const container = icon.closest('.show');
        if (container) {
            const dataId = container.getAttribute('data-id');
            container.classList.toggle('show');
            document.querySelector(`.checkbox[data-id="${dataId}"]`).checked = false;
        }
    });
})

video.addEventListener("click", function() {
    searchCategory1.classList.toggle('show');
});
all.addEventListener("click", function() {
    searchCategory2.classList.toggle('show');
});
music.addEventListener("click", function() {
    searchCategory3.classList.toggle('show');
});
article.addEventListener("click", function() {
    searchCategory4.classList.toggle('show');
});

video.addEventListener("click", function() {
    interviews.classList.toggle('show');
});

music.addEventListener("click", function() {
    photography.classList.toggle('show');
});

all.addEventListener("click", function() {
    interviews.classList.toggle('show');
    photography.classList.toggle('show');
    articles.classList.toggle('show');
});

article.addEventListener("click", function() {
    articles.classList.toggle('show');
});