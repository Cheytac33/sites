// tabs

var tabLinks = document.querySelectorAll(".tabs__header-item");
var tabContent = document.querySelectorAll(".tabs__content-item");


tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    var btnTarget = el.currentTarget;
    var contentId = btnTarget.dataset.content;
    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });
    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });
    document.querySelector("#" + contentId).classList.add("active");

    btnTarget.classList.add("active");
}
