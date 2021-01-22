// gsap.fromTo('.barba', 1, { opacity: 0 }, { opacity: 1 });

// Barba Page Transitions
barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave({ current, next }) {
      let done = this.async();
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(".cover", 0.75, { x: "-100%", }, { x: "0%", stagger: 0.3, onComplete: done },);
    },
    enter({ current, next }) {
      let done = this.async();
      window.scrollTo(0, 0);
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(".cover", 1, { x: "0%" }, { x: "100%", onComplete: done });
    }
  }]
});