document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. NAVEGACIÓN MOBILE
       ========================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    /* ==========================================
       2. FILTROS DEL CATÁLOGO DE JOYERÍA
       ========================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================
       3. MODAL DETALLE DE PRODUCTO
       ========================================== */
    const productModal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const detailButtons = document.querySelectorAll('.btn-detail');

    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalWhatsapp = document.getElementById('modalWhatsapp');

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const desc = button.getAttribute('data-desc');
            const img = button.getAttribute('data-img');

            modalTitle.textContent = name;
            modalPrice.textContent = price;
            modalDesc.textContent = desc;
            modalImg.src = img;

            const message = encodeURIComponent(`Hola, quisiera más detalles de la pieza artesanal: ${name} (${price}).`);
            modalWhatsapp.href = `https://wa.me/573167432494?text=${message}`;

            productModal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    /* ==========================================
       4. AGENDAR CITA & ATENCIÓN PERSONALIZADA
       ========================================== */
    const bookingForm = document.getElementById('bookingForm');
    const bookingModal = document.getElementById('bookingModal');
    const bookingClose = document.getElementById('bookingClose');
    const bookingOkBtn = document.getElementById('bookingOkBtn');
    const bookingSummary = document.getElementById('bookingSummary');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const service = document.getElementById('serviceType').value;

            bookingSummary.innerHTML = `Estimado(a) <strong>${name}</strong>,<br>Su cita para <strong>${service}</strong> ha sido agendada para el <strong>${date}</strong> a las <strong>${time}</strong>.<br>Nos pondremos en contacto vía WhatsApp o al correo <em>${email}</em>.`;

            bookingModal.style.display = 'flex';
            bookingForm.reset();
        });
    }

    const closeBookingModal = () => {
        bookingModal.style.display = 'none';
    };

    if (bookingClose) bookingClose.addEventListener('click', closeBookingModal);
    if (bookingOkBtn) bookingOkBtn.addEventListener('click', closeBookingModal);

    window.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.style.display = 'none';
        if (e.target === bookingModal) bookingModal.style.display = 'none';
    });
});
