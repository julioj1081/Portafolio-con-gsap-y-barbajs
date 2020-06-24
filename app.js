//*bottons
const navButton = document.querySelector(".nav-button");
const navButton2 = document.querySelector(".nav-button2");
const navButton3 = document.querySelector(".nav-button3");
//*menuNavegation
const navOpen = document.querySelector(".nav-open");
const navOpen2 = document.querySelector(".nav-open2");
const navOpen3 = document.querySelector(".nav-open3");

//? COMO FUNCTIONA TWEENLITE
//? const tween = TweenLite.to(object, time, {animate});

const tl = new TimelineLite({ paused: true, reversed: true });
const tl2 = new TimelineLite({ paused: true, reversed: true });
const tl3 = new TimelineLite({ paused: true, reversed: true });
/**PARA EL PRIMER BOTON */
tl.to(".cover", 1, {
        width: "60%",
        ease: Power2.easeOut
    })
    //?EXTENDEMOS LA ALTURA DE LA NAVEGACION AL 100%
    .to("nav", 1, {
        height: "100%",
        ease: Power2.easeOut
    }, "-=0.1")
    .fromTo(".nav-open", 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: function() {
            navOpen.style.pointerEventes = "auto";
            console.log("done");
        }
    });
/**PARA EL SEGUNDO */
tl2.to(".cover", 1, {
        width: "60%",
        ease: Power2.easeOut
    })
    //?EXTENDEMOS LA ALTURA DE LA NAVEGACION AL 100%
    .to("nav", 1, {
        height: "100%",
        ease: Power2.easeOut
    }, "-=0.1")
    .fromTo(".nav-open2", 0.5, {
        opacity: 0,
        x: -50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: function() {
            navOpen.style.pointerEventes = "auto";
            console.log("done2");
        }
    });
/*PARA EL TERCERO FORMULARIO */
tl3.to(".cover", 1, {
        width: "60%",
        ease: Power2.easeOut
    })
    //?EXTENDEMOS LA ALTURA DE LA NAVEGACION AL 100%
    .to("nav", 1, {
        height: "100%",
        ease: Power2.easeOut
    }, "-=0.1")
    .fromTo(".nav-open3", 0.5, {
        opacity: 0,
        y: 0,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        y: 10,
        onComplete: function() {
            navOpen.style.pointerEventes = "auto";
            console.log("done3");
        }
    });
/**ACCIONES PARA LOS BOTONES  */
/*PARA EL BOTON 1 */
/**HACEMOS EL TOGGLE EN TWEEN */
navButton.addEventListener("click", function(tween) {
    if (!tl.isActive()) {
        toggleTween(tl);
    }
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}

/* PARA EL BOTON 2*/
navButton2.addEventListener("click", function(tween) {
    if (!tl2.isActive()) {
        toggleTween2(tl2);
    }
});

function toggleTween2(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}
/* PARA EL BOTTON 3 */
navButton3.addEventListener("click", function(tween) {
    if (!tl3.isActive()) {
        toggleTween3(tl3);
    }
});

function toggleTween3(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}