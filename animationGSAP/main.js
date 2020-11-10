
const box = document.querySelector(".box");

/* //TweenMax.to(box,2,{x:400});

TweenMax.from(box,1,{
    y:200,
    opacity:0,
    ease:Power3.easeIn
}) */

const moveToRight = {
    x:200,
    ease:Power2.easeOut
};
//TweenMax.to(box,1,moveToRight);

TweenMax.from(box,1,{y:200});

