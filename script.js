const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const filterButtons = document.querySelectorAll('.filter-button');
const questionCards = document.querySelectorAll('.question-card');

const planTabs = document.querySelectorAll('.plan-tab');
const planPanels = document.querySelectorAll('.plan-panel');

const overviewPlanImage = document.querySelector('#plan-overview img');
const biotopePlanImage = document.querySelector('#plan-biotopes img');
if (overviewPlanImage) {
  overviewPlanImage.src = 'img/OutlinedPlanZoomedOut.png';
  overviewPlanImage.alt = 'Übersicht der geplanten Flächen für Umspannwerk, Hyperscale-Rechenzentrum und Batteriespeicher';
}
if (biotopePlanImage) {
  biotopePlanImage.src = 'img/OutlinedPlanWithBiotops.png';
  biotopePlanImage.alt = 'Detailansicht der Planung mit eingezeichneten Biotopen und Landschaftsschutzgebiet';
}

planTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selected = tab.dataset.plan;
    planTabs.forEach((item) => item.classList.toggle('is-active', item === tab));
    planTabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    planPanels.forEach((panel) => {
      const active = panel.id === `plan-${selected}`;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    questionCards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !visible);
    });
  });
});
