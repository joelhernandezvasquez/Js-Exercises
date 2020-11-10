const containerHero = document.querySelector(".container-hero-cards");
const filterComponent = document.querySelector(".search-filter-component");
let arrayHero = [];

function fillHeroes()
{
	fetch("https://api.opendota.com/api/heroStats")
	.then((response)=> response.json())
	.then((data) =>{
		data.forEach(element=>{
			arrayHero.push(element);
		})
	})
}

const loadHeroes = () => {
	
	fillHeroes();
	
	fetch("https://api.opendota.com/api/heroStats")
		.then((response) => response.json())
		.then((data) => {
			addHeroToDom(data);
		})
		
	}

function filterHeroes() {

	containerHero.innerHTML = " ";
	const selectedAttackedType = [...document.querySelectorAll(".search-filter-component input:checked")]
	                             .map( checkbox => checkbox.id);

	const filtered = arrayHero.filter(hero =>{
		 if(selectedAttackedType.length===0) return true
		 return selectedAttackedType.includes(hero.primary_attr);
	})

	addHeroToDom(filtered);

}

function addHeroToDom(heroes)
{
	heroes.forEach(hero => {
		const heroCard = document.createElement("div");
		heroCard.classList.add("hero-card");
		heroCard.innerHTML = ` <img src="https://api.opendota.com${hero.img}">
								 <h2>${hero.name} </h2>
							   <p> ID:${hero.id} </p>
							   <p> ${hero.primary_attr}</p>
							  `
		containerHero.appendChild(heroCard); 
})
}

window.addEventListener("load", loadHeroes);
filterComponent.addEventListener("change",filterHeroes);
