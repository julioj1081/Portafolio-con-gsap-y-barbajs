barba.init({
    transitions: [{
        leave({ current, next }) {
            const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
            tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 })
            tl.fromTo(".swipe", 0.85, { x: "0%" }, { x: "100%", stagger: 0.25 }, "-=0.5");
        }
    }]
});