import React, {Fragment} from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Service from '../components/Service';
import PricingPlan from '../components/PricingPlan';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Portfolio from '../components/Portfolio';
import Scrollbar from '../components/scroolbar'
import Navbar from '../components/Navbar';
import Head from 'next/head';



const HomePage =() => {
    return(
        <Fragment>

        <Head>
            <title>Cianware - Diseño y Programación</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
            <link rel="icon" href="/cianware.svg" />
            <meta name="description" content="Soy un profesional híbrido que realiza diseños de todo tipo 
                                                y desarrollos digitales, haciendo uso de los medios que sean 
                                                necesarios para concretar los proyectos, y de las últimas 
                                                tecnologías disponibles para programadores estándar.
                                                Este es mi portafolio, donde comunico detalles sobre mi 
                                                trayectoria, y la variedad de trabajos que realizo, dentro de 
                                                los límites de mis intereses.
                                                Mi máxima aspiración profesional es cultivar una genuina 
                                                versatilidad digna de maestros como Leonardo Da Vinci y 
                                                Goethe, me considero un estudiante de sus escuelas, y un 
                                                real heredero de las claves que encriptaron con magnífica 
                                                sabiduría.
                                                " />
            {/* Tu meta descripción debe contener entre 70 y 160 caracteres incluyendo espacios (400 - 940 pixels).

Las meta descripciones te permiten decidir cómo se describen y se muestran tus páginas web en los resultados de búsqueda.

Asegúrate de que cada página de u web tiene una meta descripción única, y que ésta sea explícita y contiene tus palabras clave más relevantes (aparecen en negrita cuando coinciden con la consulta del usuario).

Una buena descripción actúa como un anuncio orgánico potencial y anima al que lo ve a hacer clic para visitar tu sitio web.

Consulta tu cuenta Google™ Search Console por si hubiera mensajes de advertencia sobre meta descripciones, si por ejemplo son duplicadas o son demasiado cortas/ largas. */}
        </Head>

            <Navbar />
            <Banner/>
            {/* <About/> */}
            <Service/>
            <Portfolio/>
            {/* <Testimonial/> */}
            {/* <PricingPlan/> */}
            {/* <Blog/> */}
            <Contact/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;


