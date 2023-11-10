const btn = document.querySelectorAll(".btn");
const arr = ["w", "a", "s", "d", "j", "k", "l"];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    main(i);
  });
}
document.addEventListener("keydown", function (event) {
  const keyvalue = event.key;
  if (!arr.includes(keyvalue)) return;
  main(arr.indexOf(keyvalue));
});

function main(index) {
  const aud = new Audio(`./sound/sound-${index + 1}.mp3`);
  aud.play();

  btn[index].classList.add("animation");

  setTimeout(function () {
    btn[index].classList.remove("animation");
  }, 500);
}
