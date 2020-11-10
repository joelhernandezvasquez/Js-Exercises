const heroListContainer = document.querySelector(".hero-list");
const filters = document.querySelector(".filter-container");
let heroes = [];


const loadHeroes = () =>{
   fetch("https://api.opendota.com/api/heroStats")
   .then((response)=> response.json())
   .then((data) => {
       data.forEach(hero => {
           heroes.push(hero);
        const li = document.createElement("li");

        li.innerHTML = `<li class="hero"> 
                             <a href="#">
                             <img src="https://api.opendota.com${hero.img}"/>
                             </a>
                            </li>`
            heroListContainer.appendChild(li);
       });
   });
}

const filterHeroes = () =>
{
   
    heroListContainer.innerHTML =" "; // to clear out the list
   
    const selectedAttackTypes = [...document.querySelectorAll(".attack-type-filter input:checked")]
                               .map(checkbox=> checkbox.id); // select all checkboxes checked of the group attack type and return an array with the property id of each checkbox where ID is the attack type of the Hero. 
  
    const selectedPrimaryAttributes = [... document.querySelectorAll(".primary-filter input:checked")]
                                    .map(checkbox => checkbox.id);

    const selectedRoles = [...document.querySelectorAll(".role-filter input:checked")]
                          .map(checkbox=> checkbox.id);
                          
    
    
        const filtered = heroes.filter(hero=>{  // filtering by attack type
            if(selectedAttackTypes.length===0) return true
          return selectedAttackTypes.includes(hero.attack_type);
        
        }).filter(hero =>{  // filtering by primary attributes
           if(selectedPrimaryAttributes.length===0) return true
           return selectedPrimaryAttributes.includes(hero.primary_attr) ;

        }).filter(hero =>{
            if(selectedRoles.length===0) return true

            for(const role of selectedRoles)
            {
                if(hero.roles.includes(role)) return true
            }
            return false;
        })

    filtered.forEach(hero=>{   // updating the DOM
        const li = document.createElement("li");
        li.innerHTML = `<li class="hero"> 
        <a href="#">
        <img src="https://api.opendota.com${hero.img}"/>
        </a>
       </li>`
       heroListContainer.appendChild(li);

    })
    
}



window.addEventListener("load",loadHeroes);
filters.addEventListener("change",filterHeroes);