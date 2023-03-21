//ponerlo bonito!!

let vh = window.visualViewport.height;

let video = document.querySelector(".videofondo");
video.style.height = `${vh}px`;

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.visualViewport.height;
  video.style.height = `${vh}px`;
});

// Esta es necesaria para chrome en ios (pega un saltito, pero es la unica forma)
window.addEventListener("orientationchange", () => {
  // We execute the same script as before
  let vh = window.visualViewport.height;
  video.style.height = `${vh}px`;
});

// const appHeight = () => {
//   const vh = window.innerHeight;
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
//   alert("resize");
// };
// window.addEventListener("resize", appHeight);
// appHeight();
