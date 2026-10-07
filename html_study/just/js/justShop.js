const liEls = document.querySelectorAll('.menuItem');
/* document전체를의미 menuItem(4개) 모두선택 */

liEls.forEach(function(liEl) {

    const subMenu = liEl.querySelector('.subMenu');

    liEl.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block';
    });

    liEl.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none';
    });

});

