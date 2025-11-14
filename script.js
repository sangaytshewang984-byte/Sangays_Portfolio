// Smooth Navigation
document.querySelectorAll('nav a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Nav Link Highlight on Scroll
const navLinks = document.querySelectorAll('nav a.nav-link');
const sections = Array.from(document.querySelectorAll('main section, #hero'));
function activateNavLink() {
  let fromTop = window.scrollY + 110;
  let current = sections.find(s => s.offsetTop <= fromTop && s.offsetTop + s.offsetHeight > fromTop);
  navLinks.forEach(link => link.classList.remove('active'));
  if (current && current.id) {
    const id = current.getAttribute('id');
    const link = document.querySelector(`nav a[href="#${id}"]`);
    if (link) link.classList.add('active');
  }
}
window.addEventListener('scroll', activateNavLink);
window.addEventListener('load', activateNavLink);

// Dark Mode Toggle - Works Robustly!
const darkBtn = document.getElementById('darkModeToggle');
const storageKey = 'portfolioDarkMode';

function setDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
  darkBtn.textContent = isDark ? '☀️' : '🌙';
}

darkBtn.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  setDarkMode(isDark);
  localStorage.setItem(storageKey, isDark);
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(storageKey);
  setDarkMode(saved === 'true');
});

// Typing Animation Subtitle
const subtitles = ["Web Developer", "Digital Marketer", "Teacher", "Fab Lab Manager", "Freelancer"];
let typedIdx = 0, charIdx = 0, typingForward = true;
function typeSubtitle() {
  const el = document.getElementById("typed");
  if (!el) return;
  let subtitle = subtitles[typedIdx];
  if (typingForward) {
    charIdx++;
    if (charIdx > subtitle.length) {
      typingForward = false;
      setTimeout(typeSubtitle, 950);
      return;
    }
  } else {
    charIdx--;
    if (charIdx === 0) {
      typingForward = true;
      typedIdx = (typedIdx + 1) % subtitles.length;
      setTimeout(typeSubtitle, 470);
      return;
    }
  }
  el.textContent = subtitle.substring(0, charIdx);
  setTimeout(typeSubtitle, typingForward ? 55 : 32);
}
window.addEventListener("DOMContentLoaded", typeSubtitle);

// Skill Bars Animate
function animateSkills() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight - 80) {
      bar.setAttribute('data-animate', 'true');
      bar.querySelector('.bar').style.width = bar.dataset.percent + '%';
    } else {
      bar.setAttribute('data-animate', 'false');
      bar.querySelector('.bar').style.width = '0%';
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Project Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    let filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.tech === filter) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});

// Scroll Reveal Animation
function revealSections() {
  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 32) {
      sec.classList.add('revealed');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Contact Form Demo
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  msg.textContent = `Thanks for reaching out, ${form.name.value}! (Demo: no email sent)`;
  form.reset();
});

// Back to Top Button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 320) {
    backBtn.classList.add('show');
  } else {
    backBtn.classList.remove('show');
  }
});
backBtn.onclick = () => window.scrollTo({top:0,behavior:"smooth"});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('hover'));
  card.addEventListener('mouseleave', () => card.classList.remove('hover'));

});

