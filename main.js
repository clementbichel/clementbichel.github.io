// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animation d'apparition au scroll via IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // une seule fois
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Photo de profil : affiche les initiales si le fichier est absent
const heroImg = document.querySelector('.hero-photo img');
if (heroImg) {
  const markMissing = () => heroImg.closest('.hero-photo').classList.add('no-photo');
  heroImg.addEventListener('error', markMissing);
  if (heroImg.complete && heroImg.naturalHeight === 0) markMissing();
}
