// Modal management for Kiddy website
document.addEventListener('DOMContentLoaded', function() {
    // Get all modal buttons (using data-modal-target attribute)
    const modalButtons = document.querySelectorAll('[data-modal-target]');
    const modals = document.querySelectorAll('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close-button');
    
    // Open modal function
    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('active');
        document.body.classList.add('overflow-hidden');
    }
    
    // Close modal function
    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    }
    
    // Close all modals
    function closeAllModals() {
        modals.forEach(modal => {
            closeModal(modal);
        });
    }
    
    // Add click handlers to modal buttons
    modalButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                openModal(modal);
            }
        });
    });
    
    // Add click handlers to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = this.closest('.modal-overlay');
            if (modal) {
                closeModal(modal);
            }
        });
    });
    
    // Close modal when clicking on backdrop
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    // FAQ accordion functionality - using existing structure
    // Find all FAQ items by looking for sections with bg-alabaster rounded-2xl that contain buttons
    const faqItems = document.querySelectorAll('section .bg-alabaster.rounded-2xl');
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('.overflow-hidden');
        const iconContainer = button?.querySelector('span:last-child');
        
        if (button && content) {
            // Initialize closed state
            if (!content.style.maxHeight || content.style.maxHeight === '0px') {
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
            }
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px' && content.style.opacity === '1';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherContent = otherItem.querySelector('.overflow-hidden');
                        const otherButton = otherItem.querySelector('button');
                        const otherIconContainer = otherButton?.querySelector('span:last-child');
                        if (otherContent) {
                            otherContent.style.maxHeight = '0px';
                            otherContent.style.opacity = '0';
                        }
                        if (otherIconContainer) {
                            otherIconContainer.style.transform = 'rotate(0deg)';
                            otherIconContainer.style.backgroundColor = '';
                            otherIconContainer.style.color = '';
                        }
                        otherItem.classList.remove('ring-2', 'ring-icy');
                    }
                });
                
                // Toggle current FAQ item
                if (isOpen) {
                    content.style.maxHeight = '0px';
                    content.style.opacity = '0';
                    item.classList.remove('ring-2', 'ring-icy');
                    if (iconContainer) {
                        iconContainer.style.transform = 'rotate(0deg)';
                        iconContainer.style.backgroundColor = '';
                        iconContainer.style.color = '';
                    }
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.opacity = '1';
                    item.classList.add('ring-2', 'ring-icy');
                    if (iconContainer) {
                        iconContainer.style.transform = 'rotate(45deg)';
                        iconContainer.style.backgroundColor = '#9B1B30';
                        iconContainer.style.color = 'white';
                    }
                }
            });
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Newsletter form handler
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Here you can add your form submission logic
            alert('Спасибо за подписку! Мы отправим вам новости на ' + email);
            this.reset();
        });
    }
});
