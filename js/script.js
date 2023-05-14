var burger = document.getElementById("burger");
const toggleMenu = () => document.body.classList.toggle("open");

window.onscroll = function () {
  if (
    document.body.scrollTop >= 600 ||
    document.documentElement.scrollTop >= 600
  ) {
    burger.style.display = "block";
}
else if(document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100){
      burger.style.display = "none";
  }
};
