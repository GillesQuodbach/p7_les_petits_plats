const dropdownButtons = document.querySelectorAll('.dropdown-toggle');

const dropdownChevrons = document.querySelectorAll('.chevron')


dropdownButtons.forEach(button => {
    if (button.hasAttribute('show')) {
        dropdownChevrons.classList.add('reverse')
};
})
