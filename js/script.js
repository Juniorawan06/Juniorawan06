var burger = document.getElementById("burger");
const toggleMenu = () => document.body.classList.toggle("open");

window.onscroll = function () {
  if (
    document.body.scrollTop >= 600 ||
    document.documentElement.scrollTop >= 600
  ) {
    burger.style.display = "block";
  } else if (
    document.body.scrollTop <= 100 ||
    document.documentElement.scrollTop <= 100
  ) {
    burger.style.display = "none";
  }
};

const particles = document.querySelectorAll(".particle-wrapper > div");

function handleMouseMovement(event) {
  const mouseX = (event.clientX / window.innerWidth) * 100;
  const mouseY = (event.clientY / window.innerHeight) * 100;

  particles.forEach((particle, index) => {
    particle.style.transition = "all 0.5s ease";
    particle.style.transform = `translate3d(${mouseX * 0.4}px, ${
      mouseY * 0.4
    }px, 0) scale3d(1, 1, 1) rotate(${mouseX}deg)`;
  });
}

function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const particleTop = document.querySelectorAll(
    ".particle-wrapper .particle-1,.particle-8"
  );

  particleTop.forEach((particle) => {
    particle.style.transform = `translate3d(${scrollY * 0.3}px, ${
      scrollY * -0.3
    }px, 0) rotate(${scrollY}deg)`;
  });
  const particleRight = document.querySelectorAll(
    ".particle-wrapper .particle-6,.particle-7"
  );

  particleRight.forEach((particle) => {
    particle.style.transform = `translate3d(${scrollY * 0.3}px, ${
      scrollY * 0.3
    }px, 0) rotate(${scrollY}deg)`;
  });

  const particleLeft = document.querySelectorAll(
    ".particle-wrapper .particle-3,.particle-4"
  );

  particleLeft.forEach((particle) => {
    particle.style.transform = `translate3d(${scrollY * -0.3}px, ${
      scrollY * -0.3
    }px, 0) rotate(${scrollY}deg)`;
  });

  const particleBottom = document.querySelectorAll(
    ".particle-wrapper .particle-2,.particle-5"
  );

  particleBottom.forEach((particle) => {
    particle.style.transform = `translate3d(${scrollY * -0.3}px, ${
      scrollY * 0.3
    }px, 0) rotate(${scrollY}deg)`;
  });
}

window.addEventListener("mousemove", handleMouseMovement);
window.addEventListener("scroll", handleScroll);
