// ===== SEARCH JOBS =====
function searchJobs() {
  const query = document.getElementById('searchInput')?.value.toLowerCase();
  const location = document.getElementById('locationFilter')?.value.toLowerCase();
  const cards = document.querySelectorAll('.job-card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const cardLocation = card.dataset.location || '';
    const matchQuery = !query || text.includes(query);
    const matchLocation = !location || cardLocation === location;
    card.style.display = matchQuery && matchLocation ? 'block' : 'none';
  });
}

// ===== FILTER BY CATEGORY =====
function filterCategory(category) {
  window.location.href = `jobs.html?category=${category}`;
}

// ===== FILTER JOBS PAGE =====
function filterJobs() {
  // Placeholder for filter functionality
  console.log('Filtering jobs...');
}

// ===== SEARCH COMPANIES =====
function searchCompanies(query) {
  const cards = document.querySelectorAll('.company-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query.toLowerCase()) ? 'block' : 'none';
  });
}

// ===== SUBMIT APPLICATION =====
function submitApplication(e) {
  e.preventDefault();
  document.getElementById('applyForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== ANIMATE ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.job-card, .cat-card, .company-card, .job-card-full').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});
