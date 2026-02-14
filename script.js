const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scrambleText(element) {
  element.addEventListener("mouseover", () => {
    let iterations = 0;
    const finalText = element.dataset.value;

    const interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return finalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      iterations += 1 / 3;

      if (iterations >= finalText.length) {
        element.innerText = finalText;
        clearInterval(interval);
      }
    }, 30);
  });
}

scrambleText(document.querySelector("h1"));

document
  .querySelectorAll("#menu-items .menu-item")
  .forEach((el) => scrambleText(el));

document
  .querySelectorAll("#menu-items .scramble")
  .forEach((el) => scrambleText(el));

const trailer = document.getElementById("trailer");

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const elementUnderTrailer = document.elementFromPoint(e.clientX, e.clientY);

  if (elementUnderTrailer && elementUnderTrailer.classList.contains("animoi")) {
    elementUnderTrailer.classList.add("animate");
  }

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };
  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

const obserber = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});

document
  .querySelector('.menu-item[data-value="ABOUT"]')
  .addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector("#Tietoa");
    const rect = target.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const offset = window.innerHeight / 2 - rect.height / 2;
    const targetY = elementTop - offset;

    smoothScrollTo(targetY, 1500);
  });

function smoothScrollTo(targetY, duration) {
  const start = window.scrollY;
  const distance = targetY - start;
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

document
  .querySelector('.menu-item[data-value="PROJECTS"]')
  .addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector("#projekti");
    const rect = target.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const offset = window.innerHeight / 2 - rect.height / 2;
    const targetY = elementTop - offset;

    smoothScrollTo(targetY, 1500);
  });

function smoothScrollTo(targetY, duration) {
  const start = window.scrollY;
  const distance = targetY - start;
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

document
  .querySelector('.menu-item[data-value="CONTACT"]')
  .addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector("#Puh");
    const rect = target.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const offset = window.innerHeight / 2 - rect.height / 2;
    const targetY = elementTop - offset;

    smoothScrollTo(targetY, 1500);
  });

function smoothScrollTo(targetY, duration) {
  const start = window.scrollY;
  const distance = targetY - start;
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// sivu takaisin ylös reloadissa.

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

if (window.location.hash) {
  history.replaceState(
    null,
    document.title,
    window.location.pathname + window.location.search,
  );
}

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
});

window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
});
