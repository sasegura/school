import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";

export const requirements= ['Ordenador portátil','Conocimientos básicos de ofimática.','Entrevista personal.'];
export const discounts= ['friend','onePay'];

export const CoursesList = {
    name: "Cursos",
    url: "/service-details",
    courses: [
    {
        name: "Máster en desarrollo de aplicaciones web Full Stack",
        url: "/service-details",
        id:1,
        image:portfolio01,
        format:'Presencial Full/Part Time',
        price:7000,
        requirements:requirements,
        discounts:discounts,
        description:'Este Máster en Desarrollo Web te ofrece una formación completa y adaptada a las necesidades demandadas por el mercado laboral, con un plan de estudio diseñado poniendo el foco en la formación de un perfil de Ingeniero Web Full Stack, un desarrollador completo, capaz de desarrollar aplicaciones web tanto ‘front-end’ como ‘back-end’ y gestionar proyectos web.  Se trata de uno de los perfiles profesionales más demandados por empresas y organizaciones por su versatilidad y proyección. El enfoque práctico de la metodología utilizada durante el curso, te permitirá aplicar los conocimientos aprendidos para desarrollar un proyecto que formará parte de tu carta de presentación ante las empresas. Nuestros profesores son expertos en activo del sector, que se encuentran en constante superación. Esto permite a nuestros estudiantes graduarse con una preparación que cumple con las exigencias del mercado laboral actual.'
    },
    {
        name: "Máster en desarrollo de aplicaciones web Front-end",
        url: "/service-details",
        id:2,
        format:'Presencial Full/Part Time',
        image:portfolio02,
        price:6500,
        requirements:requirements,
        discounts:discounts,
    },
    {
        name: "Máster en desarrollo de aplicaciones web Back-end",
        url: "/service-details",
        id:3,
        format:'Presencial Full/Part Time',
        image:portfolio03,
        price:6500,
        requirements:requirements,
        discounts:discounts,
    },
    {
        name: "Curso de desarrollo de aplicaciones web Front-end",
        url: "/service-details",
        id:4,
        format:'Presencial Full/Part Time',
        image:portfolio04,
        price:5000,
        requirements:requirements,
        discounts:discounts,
    },
    {
        name: "Curso de desarrollo de aplicaciones web Back-end",
        url: "/service-details",
        id:5,
        format:'Presencial Full/Part Time',
        image:portfolio05,
        price:5000,
        requirements:requirements,
        discounts:discounts,
    }
    ],
    tabs:[
        {name:'información'},
        {name:'información'},
        {name:'Matricúlate'}
    ]
};
 