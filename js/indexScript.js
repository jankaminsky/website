const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1.7, stagger: 0.4 });
tl.to('.slider', { height: '100%', duration: 3, delay: 0.5 });
tl.to('.slider', { bottom: '100%', duration: 2.9, delay: 0.5 }, '-=2.3');
tl.to('.intro', { y: '-100%', duration: 1.8 }, '-=2.9');
tl.fromTo('.logo', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
tl.fromTo('.main-content', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
tl.fromTo('footer',  { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
