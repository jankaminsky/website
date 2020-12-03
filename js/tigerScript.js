const tl = gsap.timeline({defaults: {ease: 'power1.out'} });

tl.to('.slider', {y:'0%', duration: 1});
tl.fromTo('.logo', {opacity:0}, {opacity: 1, duration: 2.5});
