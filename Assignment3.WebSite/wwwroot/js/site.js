// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const target = document.querySelector("iframe.video-item");
const trigger = document.querySelector("button.trigger");

trigger.addEventListener("click", (e) => {
    e.preventDefault();
        target.classList.add("apply-shake");
});

target.addEventListener("animationend", (e) => {
    target.classList.remove("apply-shake");
});