// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Photo de profil : affiche les initiales si le fichier est absent
const heroImg = document.querySelector('.hero-photo img');
if (heroImg) {
  const markMissing = () => heroImg.closest('.hero-photo').classList.add('no-photo');
  heroImg.addEventListener('error', markMissing);
  if (heroImg.complete && heroImg.naturalHeight === 0) markMissing();
}
