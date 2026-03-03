/* main.js — Page navigation & scroll reveals */

function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
  var page = document.getElementById('page-' + id);
  if (!page) return;
  page.classList.add('active');
  var btn = document.querySelector('[data-page="' + id + '"]');
  if (btn) btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(triggerReveals, 60);
}

function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

function triggerReveals() {
  var els = document.querySelectorAll('.page.active .reveal:not(.in)');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(function(el) { obs.observe(el); });
}

function handleSend() {
  alert('Thanks! Email directly: anuragraut551@gmail.com');
}

document.addEventListener('DOMContentLoaded', function() {
  triggerReveals();
  // Close mobile nav on outside click
  document.addEventListener('click', function(e) {
    var nav = document.getElementById('mobile-nav');
    if (nav.classList.contains('open')) {
      if (!nav.contains(e.target) && !e.target.closest('.nav-hamburger')) {
        nav.classList.remove('open');
      }
    }
  });
});
