/* =============================================
   NO PAIN NO GAIN — RÉSEAUX INFORMATIQUES
   script.js
   ============================================= */

/**
 * Affiche une page et masque toutes les autres.
 * Met aussi à jour l'état actif dans la navigation.
 * @param {string} name - identifiant de la page (ex: 'home', 'bases')
 */
function showPage(name) {
  // Masquer toutes les pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Retirer la classe active de tous les liens nav
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Activer la page cible
  const page = document.getElementById('page-' + name);
  const nav  = document.getElementById('nav-' + name);

  if (page) page.classList.add('active');
  if (nav)  nav.classList.add('active');

  // Remonter en haut de la page
  window.scrollTo(0, 0);
}
