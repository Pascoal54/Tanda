document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('toggle');
    const logoText = document.getElementById('logo-text');
    const wrapper = document.querySelector('.wrapper');
    const links = document.querySelectorAll('.link-text');  
const menuIcon = document.getElementById('menuIcon');

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            wrapper.style.gridTemplateColumns = '60px 200px';
            wrapper.style.transition = '0.4s';
          logoText.style.opacity = '0'
          logoText.style.display = 'none'
          menuIcon.classList.remove('ri-expand-left-line');
    menuIcon.classList.add('ri-expand-right-fill');
            
            links.forEach(link => {
                link.classList.add('hidden');
            });
        } else {
            wrapper.style.gridTemplateColumns = '200px 200px';
            wrapper.style.transition = '0.4s';
           logoText.style.opacity = '1'
            logoText.style.display = 'block'
            menuIcon.classList.remove('ri-expand-right-fill');
            menuIcon.classList.add('ri-expand-left-line');
            
            links.forEach(link => {
                link.classList.remove('hidden');
            });
        }
    });
});


 