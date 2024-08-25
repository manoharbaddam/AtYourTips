document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var sticky = navbar.offsetTop;

    function handleScroll() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('fixed-navbar');
        } else {
            navbar.classList.remove('fixed-navbar');
        }
    }

    window.addEventListener('scroll', handleScroll);
});
