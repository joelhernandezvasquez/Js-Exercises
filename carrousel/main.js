


function moveNextSlide()
{
    const currentSlide = document.querySelector(".is-selected");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = getComputedStyle(nextSlide).left;

    trackContainer.style.transform = 'translateX(-'+ amountToMove+')';
   

    previousBtn.style.display = "block";
    
    currentSlide.classList.remove("is-selected");
    nextSlide.classList.add("is-selected");

    if(!nextSlide.nextElementSibling)
    {
        nextBtn.style.display = "none";
    }

    // moving to the next dot
    const currentDot = document.querySelector(".selected-dot");
    const nextDot = currentDot.nextElementSibling;
    
    currentDot.classList.remove("selected-dot");
    nextDot.classList.add("selected-dot");

}

function movePreviousSlide()
{
    const currentSlide = document.querySelector(".is-selected");
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    
    trackContainer.style.transform = 'translateX(-'+ amountToMove+')';

    nextBtn.style.display = "block";

    currentSlide.classList.remove("is-selected");
    prevSlide.classList.add("is-selected");

    if(!prevSlide.previousElementSibling)
    {
        previousBtn.style.display = "none";
    }

    const currentDot = document.querySelector(".selected-dot");
    const nextDot = currentDot.previousElementSibling;
    
    currentDot.classList.remove("selected-dot");
    nextDot.classList.add("selected-dot");
}

function changeSlideByDot(e)
{
    const dotSelected = e.target;
    const currentDot = document.querySelector(".selected-dot");
    const currentSlide = document.querySelector(".is-selected");
    

    if(dotSelected.dataset.dot ==="1")
    {
       const slideToMove = document.querySelector("#first-slide");
       
       

       trackContainer.style.left = `-${slideToMove.style.left}`;
      
       currentDot.classList.remove("selected-dot");
       dotSelected.classList.add("selected-dot");
       
    }

    else
      if(dotSelected.dataset.dot ==="2")
    {
        const slideToMove = document.querySelector("#second-slide") ;
      

        trackContainer.style.left = `-${slideToMove.style.left}`;;
       
       
        currentDot.classList.remove("selected-dot");
        dotSelected.classList.add("selected-dot");
    }
    else 
      if(dotSelected.dataset.dot ==="3")
    {
        const slideToMove = document.querySelector("#third-slide") ;
       
       trackContainer.style.left = `-${slideToMove.style.left}`;
      
        
        currentDot.classList.remove("selected-dot");
        dotSelected.classList.add("selected-dot");
    }

   
}
