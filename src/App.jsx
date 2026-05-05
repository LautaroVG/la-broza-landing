import { useState, useEffect } from 'react';
import './App.css';

const fotosNosotros = ["EquipoConTorta2.jpeg", "Equipo.png", "PersonaconVino.jpg", "Cocinando.jpeg"]; 


function App() {
  const [indexNosotros, setIndexNosotros] = useState(0); 

  // 1. Efecto del carrusel de imágenes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndexNosotros((prev) => (prev + 1) % fotosNosotros.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 2. NUEVO: Efecto que detecta el scroll para mostrar las secciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 } // Se activa cuando el 15% de la sección es visible
    );

    const elementosReveal = document.querySelectorAll('.reveal');
    elementosReveal.forEach((el) => observer.observe(el));

    return () => {
      elementosReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing">
      
      {/* SECCIÓN 1: HERO (Siempre visible, sin clase reveal) */}
      <section className="section-hero-fijo">
        <div className="hero-content">
          <h1 className="titulo-elegante">La Broza</h1>
          <p className="tagline">Lo simple, bien hecho</p>
        </div>
      </section>

      {/* SECCIÓN 2: NOSOTROS (Con animación reveal) */}
      <section className="section-about reveal">
        <div className="about-carousel">
          {fotosNosotros.map((foto, i) => (
            <img 
              key={i} 
              src={`/images/${foto}`} 
              className={`img-slide ${i === indexNosotros ? 'active' : ''}`} 
              alt="Local" 
            />
          ))}
        </div>
        <div className="about-text">
          <h2>Sobre Nosotros</h2>
          <p>Lo simple, bien hecho. Más que nuestro lema, es nuestra identidad. La Broza es una experiencia gastronómica integral en el corazón de Bahía Blanca que fusiona lo mejor de varios mundos: la excelencia de la cocina de autor, el aroma de un buen café de especialidad y la elegancia de una barra lista para servir el vino o el cocktail perfecto. Te invitamos a descubrir un lugar donde cada producto tiene el protagonismo y el respeto que se merece.</p>
        </div>
      </section>

      {/* SECCIÓN 3: PLATOS (Con animación reveal) */}
      <section className="section-dishes reveal">
        <div className="dishes-header">
    <span className="subtitle">Nuestra Filosofía</span>
    <h2>Lo simple bien hecho</h2>
    <p>
      En La Broza, seleccionamos la mejor materia prima para intervenirla lo justo. 
      Fuego, sal y tiempo: la esencia de nuestra cocina de autor.
    </p>
  </div>

  <div className="dishes-grid">
    {/* Plato 1 - El Comienzo */}
    <div className="dish-card">
      <div className="dish-image-wrapper">
        <img src="/images/EntradaCom.jpg" alt="Entrada de autor" />
      </div>
      <div className="dish-info">
        <h3>El Comienzo</h3>
        <p>Entradas pensadas para despertar el paladar.</p>
      </div>
    </div>

    {/* Plato 2 - El Protagonista (Featured) */}
    <div className="dish-card featured">
      <div className="dish-image-wrapper">
        <img src="/images/Platoprincipal.jpg" alt="Plato principal" />
      </div>
      <div className="dish-info">
        <h3>La Identidad</h3>
        <p>Cortes premium y vegetales de estación al fuego.</p>
      </div>
    </div>

    {/* Plato 3 - El Cierre */}
    <div className="dish-card">
      <div className="dish-image-wrapper">
        <img src="/images/PostreChocolate.jpg" alt="Postre artesanal" />
      </div>
      <div className="dish-info">
        <h3>El Cierre</h3>
        <p>Dulces artesanales con técnicas contemporáneas.</p>
      </div>
    </div>
  </div>
      </section>

      {/* SECCIÓN 4: BOTONES DE PEDIDO (Con animación reveal) */}
     {/* SECCIÓN 4: BOTONES DE PEDIDO (Asegurate de sacarle el footer viejo a esta parte) */}
      <section className="section-links reveal">
        <div className="links-container">
          <h2>Hacé tu reserva</h2>
            <p className="links-description">
               Disfrutá de una experiencia gastronómica única en el corazón de Bahía Blanca. 
               Reservá tu mesa por WhatsApp o visitanos directamente.
            </p>
    
         <div className="link-grid">
            {/* Botón de WhatsApp Único */}
            <a href="https://linktr.ee/labroza?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnTKjG-9ZPWgL9KsJ1K9u2KQBu0_gHBIUi8Jks8Y6hlrzppFfeaD3DrZqhGNs_aem_4-re79Fm75155QiYdMWuYA&brid=YWdncwECyZI8b-qD4rtEEWdRTHXy" className="btn-link whatsapp" target="_blank" rel="noopener noreferrer">
            <span className="icon"></span> Reservar por WhatsApp
            </a>

           {/* Nuevo Botón de Cómo Llegar */}
            <a href="https://www.google.com/maps/place/La+Broza/@-38.704684,-62.2635096,17z/data=!3m1!4b1!4m6!3m5!1s0x95eda5002ccf6d89:0x7fa8bdfe9495b7df!8m2!3d-38.704684!4d-62.2609347!16s%2Fg%2F11ym3nkf3_?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" className="btn-link maps" target="_blank" rel="noopener noreferrer">
            <span className="icon"></span> Cómo llegar
            </a>
         </div>

       {/* Un detalle visual: La dirección destacada */}
         <div className="visit-us">
            <p>Casanova 880, Bahía Blanca</p>
             <span className="divider"></span>
            <p>Lunes a Domingos — 16:00 a 01:00</p>
         </div>
        </div>
      </section>

      {/* NUEVO: FOOTER PROFESIONAL */}
     <footer className="footer-minimalista">
        <div className="footer-container">
    <div className="footer-logo">
      <h3>La Broza</h3>
      <p>Cocina de Autor</p>
    </div>

    <div className="footer-social-simple">
      <a href="https://www.instagram.com/labrozaexperiencia/" target="_blank" rel="noopener noreferrer">Instagram</a>
      <span className="dot">•</span>
      <a href="https://www.facebook.com/profile.php?id=61584241204769" target="_blank" rel="noopener noreferrer">Facebook</a>
    </div>

       <div className="footer-legal">
        <p>&copy; {new Date().getFullYear()} La Broza. Todos los derechos reservados.</p>
       </div>
     </div>
      </footer>
   </div>
  );
}


export default App;