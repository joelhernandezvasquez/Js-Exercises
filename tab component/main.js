function openTab(e)
{
   const tab = e.target; // tab button clicked
   const buttonTabSelected = document.querySelector(".selected");
   const tabSelected = document.querySelector(".is-selected");


   if(tab.dataset.anime==="digimon")
   {
       const tabSelect = document.querySelector("[data-theme=digimon]");

       buttonTabSelected.classList.remove("selected");
       tab.classList.add("selected");
       tabSelected.classList.remove("is-selected");
       tabSelect.classList.add("is-selected");
    
    console.log("hello");
   }
   else 
     if(tab.dataset.anime==="pokemon")
   {
       const tabSelect = document.querySelector("[data-theme=pokemon]");

       buttonTabSelected.classList.remove("selected");
       tab.classList.add("selected");
       tabSelected.classList.remove("is-selected");
       tabSelect.classList.add("is-selected");
    
    console.log("hello");
   }

   else 
     if(tab.dataset.anime==="tamagotchi")
   {
       const tabSelect = document.querySelector("[data-theme=tamagotchi]");

       buttonTabSelected.classList.remove("selected");
       tab.classList.add("selected");
       tabSelected.classList.remove("is-selected");
       tabSelect.classList.add("is-selected");
   }
  
}