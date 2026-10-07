const liEls = document.querySelectorAll('.main>li');
/* document전체를의미 menuItem(4개) 모두선택 */
console.log(liEls);

liEls.forEach(function(liEl) {

    const subMenu = liEl.querySelector('.sub');

    liEl.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block';
    });

    liEl.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none';
    });

});