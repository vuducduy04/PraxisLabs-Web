// ===== PraxisLabs SPA Router =====
(function() {
  const faqData = [
    { q: "How long does a pilot program last?", a: "Most pilot programs run for 8–12 weeks. We design the scope together upfront so timelines align with your team's availability and operational cycles. Extensions are always possible." },
    { q: "What hardware do I need to provide?", a: "You need to have your own robot/robot parts for the pilot. You'll also need to provide floor space, network access, and an onsite coordinator. Your IT team will receive a detailed checklist ahead of time." },
    { q: "How is my data kept secure?", a: "All operational data is encrypted in transit and at rest. We comply with Vietnamese data protection regulations and sign a Data Processing Agreement (DPA) before any pilot begins. Your data is never shared with third parties." },
    { q: "What happens if the robot encounters an error?", a: "Robots are programmed to fail safely — they stop and alert your coordinator in real time. Our team is notified simultaneously and can often diagnose and resolve issues remotely within minutes." },
    { q: "Can I purchase after the pilot?", a: "Absolutely. After a successful pilot, we'll present a detailed ROI report and a commercial proposal. You can choose to license, lease, or purchase outright — whichever model fits your financial planning." }
  ];

  const teamData = [
    { name: "Mr. Dinh The Minh", role: "CEO", photo: "praxislabs_robotics_data_website/photos/pMinh.png", id: "01" },
    { name: "Mr. Chau Hoang Phuc", role: "CTO", photo: "praxislabs_robotics_data_website/photos/pPhuc.png", id: "02" },
    { name: "Ms. Nguyen Thi Hong Hanh", role: "Software engineer", photo: "praxislabs_robotics_data_website/photos/pHanh.jpg", id: "03" },
    { name: "Mr. Vu Duc Duy", role: "Hardware engineer", photo: "praxislabs_robotics_data_website/photos/pDuy.jpg", id: "04" }
  ];

  // Render FAQ
  function renderFAQ() {
    const list = document.getElementById('faq-list');
    if (!list) return;
    list.innerHTML = faqData.map((item, i) => `
      <div class="faq-item" id="faq-${i}">
        <button class="faq-question" onclick="toggleFaq(${i})">
          <span>${item.q}</span>
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div class="faq-answer">${item.a}</div>
      </div>
    `).join('');
  }

  // Render Team
  function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;
    grid.innerHTML = teamData.map(m => `
      <div class="team-card">
        <div class="photo">
          <img alt="${m.name}" src="${m.photo}" loading="lazy"/>
          <div class="id-badge label-sm">ID:${m.id}</div>
        </div>
        <h3 class="headline-md" style="font-size:20px;color:var(--primary)">${m.name}</h3>
        <p class="label-sm role">${m.role}</p>
      </div>
    `).join('');
  }

  // Toggle FAQ
  window.toggleFaq = function(i) {
    const item = document.getElementById('faq-' + i);
    item.classList.toggle('open');
  };

  // SPA Navigation
  function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    document.querySelectorAll('.navbar-links a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu
    document.getElementById('nav-links').classList.remove('mobile-open');
  }

  // Bind nav clicks
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      navigateTo(this.dataset.page);
    });
  });

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('mobile-open');
  });

  // Contact form
  window.handleSubmit = function(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.workEmail.value,
      company: form.company.value,
      topic: form.topic.value,
      message: form.message.value
    };
    console.log('Form submitted:', data);
    alert('Thank you! Your message has been sent. We will get back to you within 1 business day.');
    form.reset();
    return false;
  };

  // Init
  renderFAQ();
  renderTeam();
})();
