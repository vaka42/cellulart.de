function filmblock(){var e=document.querySelector("main .video");if(e){var n=e.querySelector(".play"),d=e.querySelector("video");n.classList.add("hidden"),e.addEventListener("click",function(){d.paused===!0?d.play():d.pause()}),d.addEventListener("canplay",function(){n.classList.remove("hidden")}),d.addEventListener("play",function(){n.classList.add("hidden"),d.controls=!0}),d.addEventListener("pause",function(){n.classList.remove("hidden"),d.controls=!1}),d.addEventListener("ended",function(){n.classList.remove("hidden"),d.controls=!1})}}document.body.classList.contains("filmblock")&&filmblock();