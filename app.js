document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu-link");
  
    // Função para atualizar a classe "active" nos links do menu
    function updateMenuLinks() {
      let fromTop = window.scrollY;
  
      menuLinks.forEach(link => {
        let section = document.querySelector(link.hash);
  
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    // Atualiza os links do menu quando a página é rolada
    window.addEventListener("scroll", updateMenuLinks);
  
    // Atualiza os links do menu quando a página é carregada
    updateMenuLinks();
  });
  
