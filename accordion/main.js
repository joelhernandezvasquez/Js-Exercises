
const accordionContainer = document.querySelector(".accordion-container");

    
    const openAccordion = (e) =>
    {
      if(e.target.matches("div") && e.target.classList.contains("container-header"))
      {
          const headerContainer = e.target;
          const contentHeader = headerContainer.nextElementSibling;
          const iconPlus = headerContainer.querySelector(".plus");
          const minusIcon = headerContainer.querySelector(".minus");

          if(!contentHeader.classList.contains("open"))
            {

                contentHeader.classList.add("open");
                iconPlus.classList.add("is-visible");
                minusIcon.style.display = "block";

            }
            else
            {
                contentHeader.classList.remove("open");
                iconPlus.classList.remove("is-visible");
                minusIcon.style.display = "none";

            }
      }
        

    }
    
   
    accordionContainer.addEventListener("click",openAccordion);

