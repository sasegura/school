import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo2.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark,
};

export const NavLinks = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Conócenos",
    url: "/about",
  },
  {
    name: "Cursos",
    url: "/service",
    subItems: [
      {
        name: "Máster en desarrollo de aplicaciones web Full Stack",
        url: "/service-details",
        id: 1,
      },
      {
        name: "Máster en desarrollo de aplicaciones web Front-end",
        url: "/service-details",
        id: 2,
      },
      {
        name: "Máster en desarrollo de aplicaciones web Back-end",
        url: "/service-details",
        id: 3,
      },
      {
        name: "Curso de desarrollo de aplicaciones web Front-end",
        url: "/service-details",
        id: 4,
      },
      {
        name: "Curso de desarrollo de aplicaciones web Back-end",
        url: "/service-details",
        id: 5,
      },
    ],
  },
  // {
  //   name: "Próximas Ediciones",
  //   url: "/portfolio",

  // },
  {
    name: "Blog",
    url: "/blog-2",
    // subItems: [
    //   {
    //     name: "Blog 01",
    //     url: "/blog"
    //   },
    //   {
    //     name: "Blog 02",
    //     url: "/blog-2"
    //   },
    //   {
    //     name: "Blog 03",
    //     url: "/blog-3"
    //   },
    //   {
    //     name: "Blog Details",
    //     url: "/blog-single"
    //   }
    // ]
  },
  {
    name: "Contáctanos",
    url: "/contact",
  },
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "CON NOSOTROS CAMBIA TU FUTURO",
    title: "ESCUELA EUROPEA \n DE PROGRAMACIÓN WEB",
    button: {
      label: "SABER MÁS",
      url: "/about",
    },
  },
  {
    image: sliderOne02,
    subTitle: "CON NOSOTROS CAMBIA TU FUTURO",
    title: "ESCUELA EUROPEA \n DE PROGRAMACIÓN WEB",
    button: {
      label: "SABER MÁS",
      url: "/about",
    },
  },
];

import sliderTwo01 from "@/images/slider/2_1.jpg";
import sliderTwo02 from "@/images/slider/2_2.jpg";
import sliderTwo03 from "@/images/slider/2_3.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderTwo02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderTwo03,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
];

export const ContactInfosBlock = {
  subTitle: "our offices",
  title: "offices near you",
  description:
    "We are committed to providing our customers with exceptional service while \n offering our employees the best training.",
};

export const ContactInfosList = [
  {
    title: "austin",
    infos: [
      {
        name: "22 Texas West Hills",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "boston",
    infos: [
      {
        name: "5 Federal Street Boston",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "new york",
    infos: [
      {
        name: "8th Broklyn New York",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "baltimore",
    infos: [
      {
        name: "3 Lombabr 50 baltimore",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
];

export const ContactFormTitle = {
  subTitle: "Contacta con nosotros",
  title: "Escríbenos un mensaje",
  description:
    "Recibiremos tu mensaje y pondremos a un asesor \n      a tu disposición ",
};

export const ApplyFormTitle = {
  subTitle: "Para matricularte en el curso",
  title: "Haznos llegar tus datos",
  description:
    "Recibiremos tu información y pondremos a un asesor \n      a tu disposición ",
};

import blogImage1 from "@/images/blog/1.jpg";
import blogImage2 from "@/images/blog/2.jpg";
import blogImage3 from "@/images/blog/3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "basic rules of running web agency business",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];

export const BlogHomeSection = {
  subTitle: "our news & articles",
  title: "latest blog posts",
  text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
};

import blogS1 from "@/images/blog/11.jpg";
import blogS2 from "@/images/blog/12.jpg";
import blogS3 from "@/images/blog/13.jpg";

export const BlogSidebarPost = [
  {
    title: "basic rules of running web agency",
    image: blogS1,
    url: "/blog-single",
  },
  {
    title: "basic rules of running web agency",
    image: blogS2,
    url: "/blog-single",
  },
  {
    title: "basic rules of running web agency",
    image: blogS3,
    url: "/blog-single",
  },
];

import commentImage1 from "@/images/blog/9.jpg";
import commentImage2 from "@/images/blog/10.jpg";

export const BlogComments = [
  {
    image: commentImage1,
    name: "David Martin",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
  {
    image: commentImage2,
    name: "Jessica Brown",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
];

import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";
import portfolio06 from "@/images/portfolio/6.jpg";

export const PortfolioData = [
  {
    title: "Máster en desarrollo de aplicaciones web \n Full Stack",
    categories: ["Octubre 2022"],
    image: portfolio01,
    url: "/portfolio-details",
  },
  {
    title: "Máster en desarrollo de aplicaciones web \n Front-end",
    categories: ["Octubre 2022"],
    image: portfolio02,
    url: "/portfolio-details",
  },
  {
    title: "Máster en desarrollo de aplicaciones web \n Back-end",
    categories: ["Octubre 2022"],
    image: portfolio03,
    url: "/portfolio-details",
  },
  {
    title: "Curso de desarrollo de aplicaciones web \n Front-end",
    categories: ["Enero 2023"],
    image: portfolio04,
    url: "/portfolio-details",
  },
  {
    title: "Curso de desarrollo de aplicaciones web \n Back-end",
    categories: ["Marzo 2023"],
    image: portfolio05,
    url: "/portfolio-details",
  },
  {
    title: "Máster en desarrollo de aplicaciones web \n Full Stack",
    categories: ["Marzo 2023"],
    image: portfolio06,
    url: "/portfolio-details",
  },
  // {
  //   title: "Design Styles",
  //   categories: ["all", "graphic"],
  //   image: portfolio06,
  //   url: "/portfolio-details"
  // }
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" },
];

import portfolioD01 from "@/images/portfolio/7.jpg";
import portfolioD02 from "@/images/portfolio/8.jpg";

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: "Design Styles",
  text: " Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci dolors sit amet elit amet. ",
  client: "Jessica Brown",
  categories: [
    {
      name: "Graphic,",
      url: "#",
    },
    {
      name: "Illustrations,",
      url: "#",
    },
  ],
  date: "8 Nov, 2018",
  socials: [
    {
      name: "Facebook",
      url: "#",
    },
    {
      name: "Twitter",
      url: "#",
    },
    {
      name: "Linkedin",
      url: "#",
    },
  ],
};

export const ServicePostData = [
  {
    title: "Desarrollador front-end",
    text: "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-settings",
    url1: "https://www.linkedin.com/jobs/search?keywords=React&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
    url2: "https://www.tecnoempleo.com/busqueda-empleo.php?cp=&busc_paises=1&te=react&pr=",
    url3: "https://es.indeed.com/jobs?q=react&l=Espa%C3%B1a&vjk=5bb6a7ec7e6ac123",
  },
  {
    title: "Desarrollador back-end",
    text: "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-transfer",
    url1: "https://www.linkedin.com/jobs/search?keywords=node.js&location=Espa%C3%B1a&geoId=&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
    url2: "https://www.tecnoempleo.com/busqueda-empleo.php?te=node.js&pr=#buscador-ofertas",
    url3: "https://es.indeed.com/jobs?q=node.js&l=Espa%C3%B1a&vjk=5eabebf716fb883c",
  },
  {
    title: "Desarrollador Full Stack",
    text: "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-pie-chart",
    url1: "https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
    url2: "https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas",
    url3: "https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc",
  },
];

export const ServiceHomeTwoData = {
  //subTitle: "Conoce tu futuro empleo",
  title: "OFERTAS DE EMPLEO PARA DESARROLLADORES",
  text: "Descubre las ofertas de empleo que existen en el mercado a las cuales \n podrás optar al culminar tus estudios en Coder Crack",
};

export const ServiceHomeThreeData = {
  subTitle: "Services we are offering",
  title: "Our Services",
  text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
};

export const ServicePostTwoData = {
  sectionContent: {
    subTitle: "Conviértete en un Crack de la programación web",
    title: "Cursos 2022-2023",
    text: "Te ofrecemos la oportunidad de aprender una de las profesiones más demandadas del mercado laboral",
  },
  posts: [
    {
      title: "Máster en desarrollo de aplicaciones web \n Full Stack",
      iconName: "mei-development-1",
      url: "/service-details",
      id: 1,
    },
    {
      title: "Máster en desarrollo de aplicaciones web \n Front-end",
      iconName: "mei-computer-graphic",
      url: "/service-details",
      id: 2,
    },
    {
      title: "Máster en desarrollo de aplicaciones web \n Back-end",
      iconName: "mei-web-design",
      url: "/service-details",
      id: 3,
    },
    {
      title: "Curso de desarrollo de aplicaciones web \n Front-end",
      iconName: "mei-app-development",
      url: "/service-details",
      id: 4,
    },
    {
      title: "Curso de desarrollo de aplicaciones web \n Back-end",
      iconName: "mei-development",
      url: "/service-details",
      id: 5,
    },
  ],
};

import serviceOne01 from "@/images/home_1/6.jpg";
import serviceOne02 from "@/images/home_1/7.jpg";
import serviceOne03 from "@/images/home_1/8.jpg";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Let’s create something",
    subTitle: "what we do",
    text: "We are committed to providing our customers with exceptional service \n while offering our employees the best training.",
  },
  posts: [
    {
      title: "web development",
      image: serviceOne01,
      url: "/service-details",
    },
    {
      title: "digital marketing",
      image: serviceOne02,
      url: "/service-details",
    },
    {
      title: "product branding",
      image: serviceOne03,
      url: "/service-details",
    },
  ],
};

export const FunfactData = [
  {
    title: "Projects Completed",
    countNumber: 705,
  },
  {
    title: "Active Clients",
    countNumber: 480,
  },
  {
    title: "Cups of Coffee",
    countNumber: 626,
  },
  {
    title: "Happy Clients",
    countNumber: 774,
  },
];

import trustClient01 from "@/images/home_1/4.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "We are trusted by more than 8900 clients",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita-tion ullamco laboris nisi ut aliquip ex ea commodo.",
  url: "/about",
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel05 from "@/images/client/5.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "they trust us",
    subTitle: "our clients",
    text: "We are committed to providing our customers with exceptional service \n while offering our employees the best training.",
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01,
    },
    {
      url: "#",
      image: ClientCarousel02,
    },
    {
      url: "#",
      image: ClientCarousel03,
    },
    {
      url: "#",
      image: ClientCarousel04,
    },
    {
      url: "#",
      image: ClientCarousel05,
    },
  ],
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "build better website alot quicker with meipaly agency",
    subTitle: "get to know us",
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Company Started",
    number: 1990,
  },
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "EQUIPO DE CODERCRACK",
    //subTitle: "Conoce nuestros profesores",
    text: "No buscamos que tengas un título, te ayudamos a encontrar un trabajo",
  },
  posts: [
    {
      image: team01,
      name: "Isabel García Hilarión",
      designation: "Profesora",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.linkedin.com/jobs/search?keywords=React&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
        },
        {
          name: "Twitter",
          url: "https://www.tecnoempleo.com/busqueda-empleo.php?cp=&busc_paises=1&te=react&pr=",
        },
        {
          name: "Linkedin",
          url: "https://es.indeed.com/jobs?q=react&l=Espa%C3%B1a&vjk=5bb6a7ec7e6ac123",
        },
      ],
    },
    {
      image: team05,
      name: "Sergio Segura Fernández",
      designation: "Profesor",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.linkedin.com/jobs/search?keywords=node.js&location=Espa%C3%B1a&geoId=&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
        },
        {
          name: "Twitter",
          url: "https://www.tecnoempleo.com/busqueda-empleo.php?te=node.js&pr=#buscador-ofertas",
        },
        {
          name: "Linkedin",
          url: "https://es.indeed.com/jobs?q=node.js&l=Espa%C3%B1a&vjk=5eabebf716fb883c",
        },
      ],
    },
    {
      image: team02,
      name: "Andrés",
      designation: "Profesor",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
        },
        {
          name: "Twitter",
          url: "https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas",
        },
        {
          name: "Linkedin",
          url: "https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc",
        },
      ],
    },
    {
      image: team03,
      name: "Liset",
      designation: "Profesor",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
        },
        {
          name: "Twitter",
          url: "https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas",
        },
        {
          name: "Linkedin",
          url: "https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc",
        },
      ],
    },
    {
      image: team04,
      name: "Gregorio",
      designation: "Profesor",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "https://www.linkedin.com/jobs/search?keywords=full%20stack&location=Espa%C3%B1a&geoId=105646813&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0",
        },
        {
          name: "Twitter",
          url: "https://www.tecnoempleo.com/busqueda-empleo.php?te=full+stack&pr=#buscador-ofertas",
        },
        {
          name: "Linkedin",
          url: "https://es.indeed.com/jobs?q=full%20stack&l=Espa%C3%B1a&vjk=78127819f3d04cbc",
        },
      ],
    },
  ],
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "Make amazing websites without touching cod",
    subTitle: "the only design you need",
    text: "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purus aliquet.",
  },
  video: {
    image: video01,
    ID: "y2Eqx6ys1hQ",
    title: "Watch Video",
  },
};

export const SubscribeFormData = {
  sectionContent: {
    title: "Suscríbete",
    subTitle: "no te pierdas nuestras últimas actualizaciones",
    titleSub: "Gracias por suscribirte",
    subTitleSUb: "Te enviaremos todas las actualizaciones a tu email",
  },
};

import testimonial01 from "@/images/home_1/t1.jpg";
import testimonial02 from "@/images/home_1/t2.jpg";
import testimonial03 from "@/images/home_1/t3.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "our testimonials",
    title: "happy customers",
  },
  posts: [
    {
      name: "Cecilia Colon",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Chase Hanson",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Mittie Flores",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
  ],
};

import featureTab01 from "@/images/home_1/c1.jpg";
import featureTab02 from "@/images/home_1/c2.jpg";
import featureTab03 from "@/images/home_1/c3.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "why choose us",
    subTitle: "our benefits",
    text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
  },
  posts: [
    {
      title: "Latest technology",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab01,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "Awesome Support",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab02,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "1 Click demo install",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab03,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
  ],
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "Las personas y el trabajo en equipo:",
  specialText: " son las fuerzas impulsoras detrás de cada negocio exitoso.",
  text: "Te acompañamos en todas las faceta, académica, alojamiento, inmigración. Con nuestra ayuda te será más fácil tu estancia en España y conseguir tus objetivos.",
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "Próximas ediciones",
    //subTitle: "¿Cuándo comienzan los cursos en Coder Crack?",
    text: "Inscríbete en la edición que más te guste, si no encuentras una fecha contáctanos y te ayudamos",
  },
};

import video02 from "@/images/home_1/3.gif";

export const VideoTwoData = {
  sectionContent: {
    //title: "Experiencia digital",
    //subTitle: "¿Cómo es nuestra escuela?",
    //text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
  },
  video: {
    title: "Watch Video",
    ID: "y2Eqx6ys1hQ",
    image: video02,
  },
};

import aboutTwo01 from "@/images/home_1/2.jpg";
import aboutTwo02 from "@/images/home_1/1.jpg";

export const AboutTwoData = {
  sectionContent: {
    title: "We are the Best Website agency in The World",
    subTitle: "welcom to smart meipaly web agency",
    text: "We are committed to providing our customers with exceptional service while offering our employees the best training. Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s.",
  },
  button: {
    label: "Learn More",
    url: "#",
  },
  gallery: [aboutTwo01, aboutTwo02],
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    //subTitle: "our core features",
    title: "¿Por qué estudiar en Coder Crack?",
    //text: "fddfg",
  },
  posts: [
    {
      title: "No necesitas conocimientos previos en programación web",
      text: "La escuela está diseñada para brindar acceso a alumnos que provengan de otras especialidades, ya que cuenta con un curso preparatorio.",
    },
    {
      title:
        "TE AYUDAMOS CON TUS TRÁMITES PARA VENIR A MADRID Y DURANTE TUS ESTUDIOS",
      text: "Asesoramiento basado en experiencias personales para los trámites, tanto en la solicitud de visado como los trámites de residencia por prácticas una vez en España. (Tarjeta de Identificación de extranjero TIE, Padrón Municipal, Contratación en Prácticas Profesionales, Certificado Digital, Tarjeta y Abono Individual del Transporte Público, etc).",
    },
    {
      title: "Sector con alta demanda",
      text: "Se trata de un sector en el que la demanda es muy alta y la oferta es más bien baja. Aproximadamente el 60% de las empresas se quedan sin cubrir todos los puestos tecnológicos que necesitaban y esto no hace más que crecer con el desarrollo de nuevas aplicaciones enlazadas en todos los procesos empresariales.",
    },
  ],
  image: {
    text: "Oportunidades \n al alcance de todos",
    path: featureTwo01,
  },
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
    url: "/portfolio",
  },
  {
    label: "Reqeust a free quote",
    url: "/contact",
  },
];
