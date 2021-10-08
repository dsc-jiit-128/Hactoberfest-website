const modalBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const btn = document.getElementById('btn');
const sidebar = document.getElementById('sidebar');
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');

// Open modal
const openModal = () => {
    modal.style.display = 'inline-block';
}

// Open navbar
const openNavbar = () => {
    sidebar.style.visibility = 'visible';
}

// Close navbar
const closeNavbar = () => {
    sidebar.style.visibility = 'hidden';
}


// Event listeners
btn.addEventListener('click', openModal);
openNav.addEventListener('click', openNavbar);
closeNav.addEventListener('click', closeNavbar);
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});