import logoLight from '@/images/logo.png';
import logoDark from '@/images/logo2.png';

export const LogoImage = {
  light: logoLight,
  dark: logoDark,
};

export const CoursesData = [
  {
    title: 'Bootcamp en desarrollo de aplicaciones web \n Front-end',
    iconName: 'mei-app-development',
    url: '/course-details',
    id: 1,
  },
  {
    title: 'Bootcamp en desarrollo de aplicaciones web \n Back-end',
    iconName: 'mei-development',
    url: '/course-details',
    id: 2,
  },
  {
    title: 'Máster en desarrollo de aplicaciones web \n Full Stack',
    iconName: 'mei-development-1',
    url: '/course-details',
    id: 3,
  },
  {
    title: 'Formación profesional en desarrollo web \n Front-end',
    iconName: 'mei-computer-graphic',
    url: '/course-details',
    id: 4,
  },
  {
    title: 'Formación profesional en desarrollo web \n Back-end',
    iconName: 'mei-web-design',
    url: '/course-details',
    id: 5,
  },

];

export const NavLinks = [
  {
    name: 'Inicio',
    url: '/',
  },
  {
    name: 'Conócenos',
    url: '/about',
  },
  {
    name: 'Cursos',
    url: '/courses',
    subItems: CoursesData,
  },
  // {
  //   name: "Próximas Ediciones",
  //   url: "/portfolio",

  // },
  // {
  //   name: "Blog",
  //   url: "/blog-2",
  // },
  {
    name: 'Contáctanos',
    url: '/contact',
  },
];

import sliderOne01 from '@/images/slider/1.svg';
import sliderOne02 from '@/images/slider/2.svg';

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: 'CON NOSOTROS CAMBIA TU FUTURO',
    title: 'ESCUELA EUROPEA \n DE PROGRAMACIÓN WEB',
    button: {
      label: 'MÁS INFORMACIÓN',
      url: '/contact',
    },
    subTitle2: 'Abierta la convocatoria de septiembre 2023',
    subTitle3: '¡Date prisa y no te quedes sin tu plaza!',
  },
  {
    image: sliderOne02,
    // subTitle: "BIENVENIDOS A LA ESCUELA DE PROGRAMACIÓN EUROPEA",
    // title: "CODERCRACK",
    // button: {
    //   label: "SABER MÁS",
    //   url: "/about",
    // },
  },
];

import sliderTwo01 from '@/images/slider/2_1.jpg';
import sliderTwo02 from '@/images/slider/2_2.jpg';
import sliderTwo03 from '@/images/slider/2_3.jpg';

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: 'WELCOME TO MEIPALY AGENCY',
    title: 'DIGITAL\nMARKETING\nAGENCY.',
    button: {
      label: 'DISCOVER MORE',
      url: '/about',
    },
  },
  {
    image: sliderTwo02,
    subTitle: 'WELCOME TO MEIPALY AGENCY',
    title: 'DIGITAL\nMARKETING\nAGENCY.',
    button: {
      label: 'DISCOVER MORE',
      url: '/about',
    },
  },
  {
    image: sliderTwo03,
    subTitle: 'WELCOME TO MEIPALY AGENCY',
    title: 'DIGITAL\nMARKETING\nAGENCY.',
    button: {
      label: 'DISCOVER MORE',
      url: '/about',
    },
  },
];

import sliderThree01 from '@/images/slider/3_1.jpg';
import sliderThree02 from '@/images/slider/3_2.jpg';

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: 'WELCOME TO MEIPALY AGENCY',
    title: 'SMART WEB\n DESIGN AGENCY.',
    button: {
      label: 'DISCOVER MORE',
      url: '/about',
    },
  },
  {
    image: sliderThree02,
    subTitle: 'WELCOME TO MEIPALY AGENCY',
    title: 'SMART WEB\n DESIGN AGENCY.',
    button: {
      label: 'DISCOVER MORE',
      url: '/about',
    },
  },
];

export const ContactInfosBlock = {
  subTitle: 'our offices',
  title: 'offices near you',
  description:
    'We are committed to providing our customers with exceptional service while \n offering our employees the best training.',
};

export const ContactInfosList = [
  {
    title: 'austin',
    infos: [
      {
        name: '22 Texas West Hills',
      },
      {
        name: 'needhelp@meipaly.com',
      },
      {
        name: '666 888 000',
      },
    ],
  },
  {
    title: 'boston',
    infos: [
      {
        name: '5 Federal Street Boston',
      },
      {
        name: 'needhelp@meipaly.com',
      },
      {
        name: '666 888 000',
      },
    ],
  },
  {
    title: 'new york',
    infos: [
      {
        name: '8th Broklyn New York',
      },
      {
        name: 'needhelp@meipaly.com',
      },
      {
        name: '666 888 000',
      },
    ],
  },
  {
    title: 'baltimore',
    infos: [
      {
        name: '3 Lombabr 50 baltimore',
      },
      {
        name: 'needhelp@meipaly.com',
      },
      {
        name: '666 888 000',
      },
    ],
  },
];

export const ContactFormTitle = {
  subTitle: 'Contacta con nosotros',
  title: 'Escríbenos un mensaje',
  description:
    'Recibiremos tu mensaje y pondremos a un asesor \n      a tu disposición ',
};

export const ApplyFormTitle = {
  subTitle: 'Para matricularte en el curso',
  title: 'Haznos llegar tus datos',
  description:
    'Recibiremos tu información y pondremos a un asesor \n      a tu disposición ',
};

export const BlogHomeSection = {
  subTitle: 'our news & articles',
  title: 'latest blog posts',
  text: 'We are committed to providing our customers with exceptional service while\n offering our employees the best training.',
};

import portfolio01 from '@/images/portfolio/1.svg';
import portfolio02 from '@/images/portfolio/2.svg';
import portfolio03 from '@/images/portfolio/3.svg';
import portfolio04 from '@/images/portfolio/4.svg';
import portfolio05 from '@/images/portfolio/5.svg';
import portfolio06 from '@/images/portfolio/6.svg';

const apply_url = '/apply';
export const PortfolioData = [
  {
    title: 'Máster en desarrollo de aplicaciones web \n Full Stack',
    categories: ['Septiembre 2023'],
    image: portfolio01,
    url: apply_url,
    id: 1,
    edition: 1,
  },
  {
    title: 'Máster en desarrollo de aplicaciones web \n Front-end',
    categories: ['Septiembre 2023'],
    image: portfolio02,
    url: apply_url,
    id: 2,
    edition: 1,
  },
  {
    title: 'Máster en desarrollo de aplicaciones web \n Back-end',
    categories: ['Septiembre 2023'],
    image: portfolio03,
    url: apply_url,
    id: 3,
    edition: 1,
  },
  {
    title: 'Curso de desarrollo de aplicaciones web \n Front-end',
    categories: ['Marzo 2024'],
    image: portfolio04,
    url: apply_url,
    id: 4,
    edition: 2,
  },
  {
    title: 'Curso de desarrollo de aplicaciones web \n Back-end',
    categories: ['Marzo 2024'],
    image: portfolio05,
    url: apply_url,
    id: 5,
    edition: 2,
  },
  {
    title: 'Máster en desarrollo de aplicaciones web \n Full Stack',
    categories: ['Marzo 2024'],
    image: portfolio06,
    url: apply_url,
    id: 6,
    edition: 2,
  },
  // {
  //   title: "Design Styles",
  //   categories: ["all", "graphic"],
  //   image: portfolio06,
  //   url: "/portfolio-details"
  // }
];

export const PortfolioFilters = [
  { name: 'all' },
  { name: 'graphic' },
  { name: 'branding' },
  { name: 'marketing' },
  { name: 'logos' },
];

import portfolioD01 from '@/images/portfolio/7.jpg';
import portfolioD02 from '@/images/portfolio/8.jpg';

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: 'Design Styles',
  text: ' Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci dolors sit amet elit amet. ',
  client: 'Jessica Brown',
  categories: [
    {
      name: 'Graphic,',
      url: '#',
    },
    {
      name: 'Illustrations,',
      url: '#',
    },
  ],
  date: '8 Nov, 2018',
  socials: [
    {
      name: 'Facebook',
      url: '#',
    },
    {
      name: 'Twitter',
      url: '#',
    },
    {
      name: 'Linkedin',
      url: '#',
    },
  ],
};

export const ServicePostData = [
  {
    title: 'Desarrollador Front-end',
    text: 'Un desarrollador front-end trabaja la interfaz de usuario desde el punto de vista del código, se encarga de la parte visual de la web haciendo que su diseño sea intuitivo y atractivo.',
    iconName: 'mei-settings',
    url1: 'https://www.linkedin.com/jobs/search?keywords=React&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
    url2: 'https://www.tecnoempleo.com/busqueda-empleo.php?cp=&busc_paises=1&te=react&pr=',
    url3: 'https://es.indeed.com/jobs?q=react&l=Espa%C3%B1a&vjk=5bb6a7ec7e6ac123',
  },
  {
    title: 'Desarrollador Back-end',
    text: 'El desarrollador Back End procesa toda la información y relaciona los datos en el interior del sitio web o aplicación web, con las capas visuales que se han creado en el front-end.',
    iconName: 'mei-transfer',
    url1: 'https://www.linkedin.com/jobs/search?keywords=node.js&location=Espa%C3%B1a&geoId=&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
    url2: 'https://www.tecnoempleo.com/busqueda-empleo.php?te=node.js&pr=#buscador-ofertas',
    url3: 'https://es.indeed.com/jobs?q=node.js&l=Espa%C3%B1a&vjk=5eabebf716fb883c',
  },
  {
    title: 'Desarrollador Full Stack',
    text: 'Un desarrollador Full Stack maneja tanto el trabajo de Front-end como de Back-end. Debe tener muchas habilidades y la capacidad de adaptarse a cualquier cosa',
    iconName: 'mei-pie-chart',
    url1: 'https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
    url2: 'https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas',
    url3: 'https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc',
  },
];

export const ServiceHomeTwoData = {
  //subTitle: "Conoce tu futuro empleo",
  title: 'OFERTAS DE EMPLEO PARA DESARROLLADORES',
  text: 'Descubre las ofertas de empleo que existen en el mercado a las cuales \n podrás optar al culminar tus estudios en Codercrack',
};

export const ServiceHomeThreeData = {
  subTitle: 'Services we are offering',
  title: 'Our Services',
  text: 'We are committed to providing our customers with exceptional service while\n offering our employees the best training.',
};

export const ServicePostTwoData = {
  sectionContent: {
    subTitle: 'Conviértete en un Crack de la programación web',
    title: 'Cursos 2023-2024',
    text: 'Te ofrecemos la oportunidad de aprender una de las profesiones más demandadas del mercado laboral',
  },
  posts: CoursesData,
};

import serviceOne01 from '@/images/home_1/6.jpg';
import serviceOne02 from '@/images/home_1/7.jpg';
import serviceOne03 from '@/images/home_1/8.jpg';

export const ServicePostThreeData = {
  sectionContent: {
    title: 'Let’s create something',
    subTitle: 'what we do',
    text: 'We are committed to providing our customers with exceptional service \n while offering our employees the best training.',
  },
  posts: [
    {
      title: 'web development',
      image: serviceOne01,
      url: '/course-details',
    },
    {
      title: 'digital marketing',
      image: serviceOne02,
      url: '/course-details',
    },
    {
      title: 'product branding',
      image: serviceOne03,
      url: '/course-details',
    },
  ],
};

export const FunfactData = [
  {
    title: 'Projects Completed',
    countNumber: 705,
  },
  {
    title: 'Active Clients',
    countNumber: 480,
  },
  {
    title: 'Cups of Coffee',
    countNumber: 626,
  },
  {
    title: 'Happy Clients',
    countNumber: 774,
  },
];

import trustClient01 from '@/images/home_1/4.jpg';

export const TrustClientData = {
  image: trustClient01,
  title: 'We are trusted by more than 8900 clients',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita-tion ullamco laboris nisi ut aliquip ex ea commodo.',
  url: '/about',
};

import ClientCarousel01 from '@/images/client/1.png';
import ClientCarousel02 from '@/images/client/2.png';
import ClientCarousel03 from '@/images/client/3.png';
import ClientCarousel04 from '@/images/client/4.png';
import ClientCarousel05 from '@/images/client/5.png';

export const ClientCarouselData = {
  sectionContent: {
    title: 'they trust us',
    subTitle: 'our clients',
    text: 'We are committed to providing our customers with exceptional service \n while offering our employees the best training.',
  },
  items: [
    {
      url: '#',
      image: ClientCarousel01,
    },
    {
      url: '#',
      image: ClientCarousel02,
    },
    {
      url: '#',
      image: ClientCarousel03,
    },
    {
      url: '#',
      image: ClientCarousel04,
    },
    {
      url: '#',
      image: ClientCarousel05,
    },
  ],
};

import aboutOne01 from '@/images/about/1.webp';
import aboutOne02 from '@/images/about/2.webp';
import aboutOne04 from '@/images/about/5.webp';
import aboutOne05 from '@/images/about/6.webp';
import aboutOne06 from '@/images/about/7.webp';
import aboutOne07 from '@/images/about/8.webp';
import aboutOne08 from '@/images/about/9.webp';
import aboutOne09 from '@/images/about/10.webp';
import aboutOne10 from '@/images/about/11.webp';
import aboutOne11 from '@/images/about/12.webp';
import aboutOne12 from '@/images/about/13.webp';
import aboutOne13 from '@/images/about/14.webp';
import aboutOne14 from '@/images/about/15.webp';
import aboutOne15 from '@/images/about/16.webp';
import aboutOne16 from '@/images/about/17.webp';
import aboutOne17 from '@/images/about/18.webp';
import aboutOne18 from '@/images/about/19.webp';
import aboutOne19 from '@/images/about/20.webp';
import aboutOne20 from '@/images/about/21.webp';
import aboutOne21 from '@/images/about/22.webp';
import aboutOne22 from '@/images/about/23.webp';
import aboutOne23 from '@/images/about/24.webp';
import aboutOne24 from '@/images/about/25.webp';

export const AboutOneData = {
  sectionContent: {
    subTitle:
      'Nuestra escuela se encuentra situada en el segundo nivel de un edificio de negocios, cuenta con áreas comunes de office, zona de vending y coworking. Está comunicado con la línea 1 del metro y el cercanías a solo 15min del centro de Madrid',
    title: 'Conócenos',
    subTitleGallery: 'Nuestras instalaciones',
  },
  gallery: [aboutOne01, aboutOne02],
  carrousel: [
    aboutOne04,
    aboutOne05,
    aboutOne06,
    aboutOne07,
    aboutOne08,
    aboutOne09,
    // aboutOne10,
    aboutOne11,
    // aboutOne12,
    aboutOne13,
    aboutOne14,
    aboutOne15,
    // aboutOne16,
    aboutOne17,
    aboutOne18,
    aboutOne19,
    aboutOne20,
  ],
  counter: {
    title: 'Company Started',
    number: 1990,
  },
};

import team01 from '@/images/team/isabel.svg';
import team02 from '@/images/team/sergio.svg';
import team03 from '@/images/team/andres.svg';
import team04 from '@/images/team/liset.svg';
import team05 from '@/images/team/goyo.svg';

export const TeamOneData = {
  sectionContent: {
    title: 'EQUIPO DE CODERCRACK',
    //subTitle: "Conoce nuestros profesores",
    text: 'No buscamos que tengas un título, te ayudamos a encontrar un trabajo',
  },
  posts: [
    {
      image: team01,
      name: 'Isabel García Hilarión',
      designation: '',
      url: '#',
      socials: [
        {
          name: 'Facebook',
          url: 'https://www.linkedin.com/jobs/search?keywords=React&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
        },
        {
          name: 'Twitter',
          url: 'https://www.tecnoempleo.com/busqueda-empleo.php?cp=&busc_paises=1&te=react&pr=',
        },
        {
          name: 'Linkedin',
          url: 'https://es.indeed.com/jobs?q=react&l=Espa%C3%B1a&vjk=5bb6a7ec7e6ac123',
        },
      ],
    },
    {
      image: team02,
      name: 'Sergio Segura Fernández',
      designation: '',
      url: '#',
      socials: [
        {
          name: 'Facebook',
          url: 'https://www.linkedin.com/jobs/search?keywords=node.js&location=Espa%C3%B1a&geoId=&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
        },
        {
          name: 'Twitter',
          url: 'https://www.tecnoempleo.com/busqueda-empleo.php?te=node.js&pr=#buscador-ofertas',
        },
        {
          name: 'Linkedin',
          url: 'https://es.indeed.com/jobs?q=node.js&l=Espa%C3%B1a&vjk=5eabebf716fb883c',
        },
      ],
    },
    {
      image: team03,
      name: 'Andrés González Carmenates',
      designation: '',
      url: '',
      socials: [
        {
          name: 'Facebook',
          url: 'https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
        },
        {
          name: 'Twitter',
          url: 'https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas',
        },
        {
          name: 'Linkedin',
          url: 'https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc',
        },
      ],
    },
    {
      image: team04,
      name: 'Liset Bichili Hernández',
      designation: '',
      url: '',
      socials: [
        {
          name: 'Facebook',
          url: 'https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
        },
        {
          name: 'Twitter',
          url: 'https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas',
        },
        {
          name: 'Linkedin',
          url: 'https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc',
        },
      ],
    },
    {
      image: team05,
      name: 'Juan Gregorio Lombardo Fernández',
      designation: '',
      url: '',
      socials: [
        {
          name: 'Facebook',
          url: 'https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0',
        },
        {
          name: 'Twitter',
          url: 'https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas',
        },
        {
          name: 'Linkedin',
          url: 'https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc',
        },
      ],
    },
  ],
};

export const VideoOneData = {
  sectionContent: {
    title: 'Comunidad y objetivos de CODERCRACK',
    text: 'En la comunidad de CodeCrackers encontrarás personas con edades y orígenes diferentes. ¡Despierta tu pasión por la programación! Nuestros cursos te brindan un entorno estimulante, mentores expertos y un currículo actualizado para que te conviertas en un profesional sobresaliente',
  },
  video: {
    image: team01,
    ID: 'y2Eqx6ys1hQ',
    title: 'Watch Video',
  },
  carrousel: [
    aboutOne10,
    aboutOne12,
    aboutOne16,
    aboutOne21,
    aboutOne22,
    aboutOne23,
    aboutOne24,
  ],
};

export const SubscribeFormData = {
  sectionContent: {
    title: 'Suscríbete',
    subTitle: 'no te pierdas nuestras últimas actualizaciones',
    titleSub: 'Gracias por suscribirte',
    subTitleSUb: 'Te enviaremos todas las actualizaciones a tu email',
  },
};

import testimonial01 from '@/images/home_1/t1.jpg';
import testimonial02 from '@/images/home_1/t2.jpg';
import testimonial03 from '@/images/home_1/t3.jpg';

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: 'our testimonials',
    title: 'happy customers',
  },
  posts: [
    {
      name: 'Cecilia Colon',
      designation: 'Director',
      image: testimonial01,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Chase Hanson',
      designation: 'CO Founder',
      image: testimonial02,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Mittie Flores',
      designation: 'Manager',
      image: testimonial03,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Carrie Sims',
      designation: 'Director',
      image: testimonial01,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Anne Stone',
      designation: 'CO Founder',
      image: testimonial02,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Hunter Brewer',
      designation: 'Manager',
      image: testimonial03,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Carrie Sims',
      designation: 'Director',
      image: testimonial01,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Anne Stone',
      designation: 'CO Founder',
      image: testimonial02,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
    {
      name: 'Hunter Brewer',
      designation: 'Manager',
      image: testimonial03,
      content:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum',
      date: '25 nov, 2018',
    },
  ],
};

import featureTab01 from '@/images/home_1/c1.jpg';
import featureTab02 from '@/images/home_1/c2.jpg';
import featureTab03 from '@/images/home_1/c3.jpg';

export const FeatureTabData = {
  sectionContent: {
    title: 'Por qué elegir a CODERCRACK',
    //subTitle: "our benefits",
    text: 'Solo tú puedes cambiar tu futuro. Nosotros, te ayudamos',
  },
  posts: [
    {
      title: 'SECTOR CON ALTA DEMANDA en el mercado laboral europeo',
      content: `Se trata de un sector en el que la demanda es muy alta y la oferta es más bien baja. Aproximadamente el 60% de las empresas se quedan sin cubrir todos los puestos tecnológicos que necesitaban y esto no hace más que crecer con el desarrollo de nuevas aplicaciones enlazadas en todos los procesos empresariales.
        \n Al culminar tus estudios podrás encontrar empleo como:`,
      image: featureTab01,
      lists: [
        {
          item: 'Desarrollador web front-end',
        },
        {
          item: 'Desarrollador web back-end',
        },
        {
          item: 'Desarrollador web fullstack',
        },
        // {
        //   item: "Employee self-enrollment",
        // },
        // {
        //   item: "Payroll integration",
        // },
        // {
        //   item: "Built-in backup camera to verify failed punches",
        // },
      ],
    },
    {
      title: 'NO NECESITAS CONOCIMIENTOS PREVIOS EN PROGRAMACIÓN WEB',
      content:
        'La escuela está diseñada para brindar acceso a alumnos que provengan de otras especialidades, ya que cuenta con un curso preparatorio.',
      image: featureTab02,
      lists: [
        // {
        //   item: "Self-contained, state-of-the-art time clock",
        // },
        // {
        //   item: "Scalability of up to 500 employees per time clock",
        // },
        // {
        //   item: "The ability to connect up to 32 time clocks",
        // },
        // {
        //   item: "Employee self-enrollment",
        // },
        // {
        //   item: "Payroll integration",
        // },
        // {
        //   item: "Built-in backup camera to verify failed punches",
        // },
      ],
    },
    {
      title:
        'TE asesoramos CON TUS TRÁMITES PARA VENIR A MADRID Y DURANTE tu estancia ',
      content:
        'Asesoramiento basado en experiencias personales para los trámites, tanto en la solicitud de visado como los trámites de residencia por prácticas una vez te encuentres en España.',
      image: featureTab03,
      lists: [
        {
          item: 'Visado de entrada a España (si necesitas en tu país de origen)',
        },
        {
          item: 'Tarjeta de Identificación de extranjero TIE',
        },
        {
          item: 'Padrón Municipal',
        },
        {
          item: 'Contratación en Prácticas Profesionales',
        },
        {
          item: 'Certificado Digital',
        },
        {
          item: 'Tarjeta y Abono Individual del Transporte Público',
        },
      ],
    },
  ],
};

export const ParallaxOneData = {
  iconName: 'mei-team',
  title: 'Las personas y el trabajo en equipo:',
  specialText: ' son las fuerzas impulsoras detrás de cada negocio exitoso.',
  text: 'En Codercrack creemos que la programación web puede ser accesible para todos. Nuestros cursos te guiará paso a paso, sin importar tu nivel de experiencia. ¡Únete y descubre tu talento oculto!',
};

export const PortfolioHomeData = {
  sectionContent: {
    title: 'Próximas ediciones',
    //subTitle: "¿Cuándo comienzan los cursos en Codercrack?",
    text: 'Inscríbete en la edición que más te guste, si no encuentras una fecha contáctanos y te ayudamos',
  },
};

import video02 from '@/images/home_1/3.svg';

export const VideoTwoData = {
  sectionContent: {
    subTitle: `En CODERCRACK buscamos que nuestros cursos sean una experiencia única y completa. \n 
      Somos conscientes de que cada persona tiene un talento y unas metas diferentes, por eso, nos adaptamos a ti para ayudarte a conseguir tus objetivos`,
    //title: "¿Cómo es nuestra escuela?",
    //text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
  },
  video: {
    title: 'Watch Video',
    ID: 'y2Eqx6ys1hQ',
    image: video02,
  },
};

import aboutTwo01 from '@/images/home_1/2.jpg';
import aboutTwo02 from '@/images/home_1/1.jpg';

export const AboutTwoData = {
  sectionContent: {
    title: 'We are the Best Website agency in The World',
    subTitle: 'welcom to smart meipaly web agency',
    text: "We are committed to providing our customers with exceptional service while offering our employees the best training. Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s.",
  },
  button: {
    label: 'Learn More',
    url: '#',
  },
  gallery: [aboutTwo01, aboutTwo02],
};

import featureTwo01 from '@/images/home_1/5.svg';

export const FeatureTwoData = {
  sectionContent: {
    //subTitle: "our core features",
    title: '¿Por qué estudiar en CoderCrack?',
    //text: "fddfg",
  },
  posts: [
    {
      title: 'Sector con alta demanda en el mercado laboral europeo',
      text: 'Se trata de un sector en el que la demanda es muy alta y la oferta es más bien baja. Aproximadamente el 60% de las empresas se quedan sin cubrir todos los puestos tecnológicos que necesitaban y esto no hace más que crecer con el desarrollo de nuevas aplicaciones enlazadas en todos los procesos empresariales.',
    },
    {
      title:
        'Puedes estudiar primero y pagar cuando encuentres trabajo',
      text: 'Descubre las becas ISA y asegura tu futuro sin preocupaciones financieras. Estudia primero y paga después, una vez que hayas alcanzado tus metas profesionales.',
    },
    {
      title: "Un Desarrollador Web en Madrid gana desde 24.000€ al año"
    },
    {
      title: 'No necesitas conocimientos previos en programación web',
      text: 'La escuela está diseñada para brindar acceso a alumnos que provengan de otras especialidades, ya que cuenta con un curso preparatorio.',
    },


  ],
  image: {
    text: 'Conviértete en un Codecracker',
    path: featureTwo01,
  },
};

export const CallToActionTwoData = [
  {
    label: 'View our Recent Work',
    url: '/portfolio',
  },
  {
    label: 'Reqeust a free quote',
    url: '/contact',
  },
];
