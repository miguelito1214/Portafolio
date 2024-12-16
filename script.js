// Asegurarse de que GSAP está cargado
if (typeof gsap !== 'undefined') {
    // Animación de la sección del encabezado
    gsap.to(".glassmorphism-header", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  
    // Animación para el nombre y el título
    gsap.from(".glassmorphism-header h1", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    });
  
    gsap.from(".glassmorphism-header p", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });
  
    // Animación para el botón
    gsap.from(".cv-button", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6,
      ease: "power2.out"
    });
  }
  