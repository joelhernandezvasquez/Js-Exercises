
const btnOpenModal = document.querySelector("button");
const closeModalBtn = document.querySelector("#close-icon");
const modal = document.querySelector(".modal-backdrop");
const modalContent = modal.querySelector(".modal");
const waveHand = document.querySelector("#wave-hand");



/* 
TweenMax.from(pointerHand,0.6,{
    y:100,
    ease:"bounce"
});
 */


function openModal()
{
    modal.classList.add("openModal");
    modalContent.classList.add("visible");
    wave();
}

function closeModal()
{
    modal.classList.remove("openModal"); 
   modalContent.classList.remove("visible");
}

const closeBackdrop = (e) =>
{
    modal.classList.remove("openModal");
    modalContent.classList.remove("visible");
    
}

const wave = () =>
{
   const t1 = new TimelineMax({});

   t1.set(waveHand,{transformOrigin:'bottom center'})
   
   t1.from(waveHand,0.5,{
        opacity:0,
        scale:0.25,
        ease:Back.easeOut.config(1.5)
   })

   t1.to(waveHand,0.2,{rotation:15});
   t1.to(waveHand,0.2,{rotation:-15});
   t1.to(waveHand,0.2,{rotation:15});
   t1.to(waveHand,0.2,{rotation:-15});
   t1.to(waveHand,0.2,{rotation:0});

}

btnOpenModal.addEventListener("click",openModal);
closeModalBtn.addEventListener("click",closeModal);
modal.addEventListener("click",closeBackdrop);