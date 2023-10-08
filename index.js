function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const elementCenterX = rect.left + rect.width / 5.5;
  const elementCenterY = rect.top + rect.height / 5.5;

  return (
    elementCenterX >= 0 &&
    elementCenterX <= windowWidth &&
    elementCenterY >= 0 &&
    elementCenterY <= windowHeight
  );
}

// Funzione per attivare l'animazione quando l'elemento è visibile
function handleScroll() {
  const esperienzaSection = document.querySelector(".esperienza");
  const leggeSection = document.querySelector(".content-legge");

  if (isElementInViewport(esperienzaSection)) {
    esperienzaSection.classList.add("appear");
  }

  if (isElementInViewport(leggeSection)) {
    leggeSection.classList.add("appear");
  }

  // Verifica se tutti gli elementi sono stati animati
  const allSectionsAnimated =
    esperienzaSection.classList.contains("appear") &&
    leggeSection.classList.contains("appear");

  // Se tutti gli elementi sono stati animati, rimuovi il gestore degli eventi
  if (allSectionsAnimated) {
    window.removeEventListener("scroll", handleScroll);
  }
}

// Aggiungi un gestore degli eventi per la scrollata della finestra
window.addEventListener("scroll", handleScroll);
