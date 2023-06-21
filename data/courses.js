import portfolio01 from '@/images/portfolio/1.svg';
import portfolio02 from '@/images/portfolio/2.svg';
import portfolio03 from '@/images/portfolio/3.svg';
import portfolio04 from '@/images/portfolio/4.svg';
import portfolio05 from '@/images/portfolio/5.svg';
import portfolio06 from '@/images/portfolio/6.svg';
import bannerImg1 from '@/images/bg/course1.svg';
import bannerImg2 from '@/images/bg/course2.svg';
import bannerImg3 from '@/images/bg/course3.svg';
import bannerImg4 from '@/images/bg/course4.svg';
import bannerImg5 from '@/images/bg/course5.svg';

export const requirements = [
  'Ordenador portátil',
  'Conocimientos básicos de ofimática.',
  'Entrevista personal',
];
export const discounts = ['friend', 'onePay', 'priorKnowledge'];

export const CoursesList = {
  name: 'Cursos',
  url: '/course-details',
  courses: [
    {
      name: 'Máster en desarrollo de aplicaciones web Full Stack',
      title: 'Máster en desarrollo de aplicaciones web \n Full Stack',
      url: '/course-details',
      id: 1,
      iconName: 'mei-development-1',
      image: portfolio01,
      format: 'Presencial Full/Part Time',
      price: 5500,
      requirements: requirements,
      discounts: discounts,
      bannerImg: bannerImg1,
      description:
        'Este Máster en Desarrollo Web te ofrece una formación completa y adaptada a las necesidades demandadas por el mercado laboral, con un plan de estudio diseñado poniendo el foco en la formación de un perfil de Web Full Stack, capaz de desarrollar aplicaciones web tanto ‘front-end’ como ‘back-end’ y gestionar proyectos web. Se trata de uno de los perfiles profesionales más demandados por empresas y organizaciones por su versatilidad y proyección.',
      secondDescription: [
        <p>
          El enfoque práctico de la metodología utilizada durante el curso, te
          permitirá aplicar los conocimientos aprendidos para desarrollar un
          proyecto que formará parte de tu carta de presentación ante las
          empresas.
        </p>,
        <p>
          Nuestros profesores son expertos en activo del sector, que se
          encuentran en constante superación. Esto permite a nuestros
          estudiantes graduarse con una preparación que cumple con las
          exigencias del mercado laboral actual.
        </p>,
        'Tras cursar nuestro Másterr saldrás con la preparación adecuada para desempeñarte una de las profesiones más demandadas en la actualidad ocupando perfiles como:',
        <li className="">Programador Full-Stack</li>,
        <li>Programador Front-End</li>,
        <li>Programador Back-End</li>,
        <br />,

        <p>
          Al finalizar tendrás un perfil diferencial que potenciará tu inserción
          en el mercado laboral de forma cualificada y competente.
        </p>,
        <h5>Bloques principales que conforman esta formación</h5>,
        <li>Fundamentos de la programación</li>,
        <li>Desarrollo Front - End</li>,
        <li>Desarrollo Back - End</li>,
        <li>Proyectos en ambiente laboral</li>,
        <li>Mentoring profesional</li>,
      ],
    },
    {
      name: 'Formación profesional en desarrollo web Front-end',
      title: 'Formación profesional en desarrollo web \n Front-end',
      url: '/course-details',
      id: 2,
      iconName: 'mei-computer-graphic',
      format: 'Presencial Full/Part Time',
      image: portfolio02,
      price: 3500,
      requirements: requirements,
      discounts: discounts,
      bannerImg: bannerImg2,
      description:
        'Con la Formación profesional en desarrollo web Front-End, el estudiante podrá dominar las nuevas técnicas, para diferentes plataformas, y desarrollar webs que marquen tendencia en el mercado. Con este Máster, el alumno podrá desarrollar toda clase de software para dispositivos web.',
      secondDescription: [
        <p>
          Un desarrollador web siempre será necesario en esta época, en la que
          lo digital es la regla. Con este Máster, el profesional desarrollará
          y/ó reforzará sus conocimientos en el desarrollo web.
        </p>,
        <p>
          Nuestro curso de desarrollador web front-end se basa principalmente en
          la práctica. Aprenderás a desarrollar sitios web interactivos con CSS,
          HTML, JavaScript y otras tecnologías y frameworks modernos como React
          o NodeJS. Tratamos todos los conocimientos fundamentales y habilidades
          necesarias para que te conviertas en un experto del desarrollo web
          front-end. Al final del curso, podrás diseñar fantásticas aplicaciones
          web y fáciles de usar. Nuestros programas incluyen ejercicios reales.
          Adquirirás rápidamente los conceptos básicos del desarrollo web
          front-end para que puedas comenzar en tu primer trabajo y destacar.
          Nuestros horarios también son flexibles, hay opciones de formación
          disponibles entre semana y los fines de semana.
        </p>,
        <h5>Bloques principales que conforman esta formación</h5>,
        <li>Fundamentos de la programación</li>,
        <li>Desarrollo Front - End</li>,
        <li>Proyectos en ambiente laboral</li>,
        <li>Mentoring profesional</li>,
      ],
    },
    {
      name: 'Formación profesional en desarrollo web Back-end',
      title: 'Formación profesional en desarrollo web \n Back-end',
      url: '/course-details',
      id: 3,
      iconName: 'mei-web-design',
      format: 'Presencial Full/Part Time',
      image: portfolio03,
      price: 3500,
      requirements: requirements,
      discounts: discounts,
      bannerImg: bannerImg3,
      description:
        'Un desarrollador Backend se encarga de diseñar la lógica y las soluciones para que todas las acciones solicitadas en una página web sean ejecutadas de manera correcta. Por lo tanto, un desarrollador Backend es responsable de la programación del sitio en todos sus componentes.',
      secondDescription: [
        <p>
          Curso que permite introducirse en el mundo del desarrollo web en el
          lado servidor o backend. Se trata de un curso muy práctico dirigido a
          profesionales que quieran aprender a desarrollar aplicaciones web
          sofisticadas de forma ágil y eficaz.
        </p>,
        <p>
          El objetivo de este curso es que aprendas a desarrollar aplicaciones
          web sofisticadas de forma ágil y eficaz.
        </p>,
        <p>
          Pero nuestro principal objetivo es la empleabilidad, haciéndote
          alcanzar tus metas profesionales y tu incorporación de lleno a un
          mercado laboral con múltiples posibilidades para este perfil.
        </p>,
        <h2>¿POR QUÉ ELEGIR ESTA PROFESIÓN?</h2>,
        <p>
          Los desarrolladores Backend deben conocer los lenguajes de
          programación, las librerías y frameworks más utilizados en este tipo
          de desarrollos.
        </p>,
        <p>
          Los programadores web continúan siendo uno de los profesionales
          tecnológicos más demandados en el mercado laboral español. Una demanda
          que las empresas no logran cubrir por falta de trabajadores
          especializados y que, además, se incrementa cada año. Todo ello, ha
          llevado a que los salarios de los profesionales tecnológicos se
          encuentren entre los que más rápidamente crecen pues para captar
          talento muchas compañías recurren a aumentos salariales.
        </p>,
        <h5>Bloques principales que conforman esta formación</h5>,
        <li>Fundamentos de la programación</li>,
        <li>Desarrollo Back - End</li>,
        <li>Proyectos en ambiente laboral</li>,
        <li>Mentoring profesional</li>,
      ],
    },
    {
      name: 'Bootcamp en desarrollo de aplicaciones web Front-end',
      title: 'Bootcamp en desarrollo de aplicaciones web \n Front-end',
      url: '/course-details',
      id: 4,
      iconName: 'mei-app-development',
      format: 'Presencial Full/Part Time',
      image: portfolio04,
      price: 2500,
      requirements: requirements,
      discounts: discounts,
      bannerImg: bannerImg4,
      description:
        'Ser el responsable del aspecto de las aplicaciones y las funcionalidades con las cuales interactúa el usuario es un gran reto, nosotros te ayudamos a que lo tengas bajo control.',
      secondDescription: [
        <p>
          Codercrack ofrece un curso de desarrollo web front-end actual
          y diseñado para enseñarte rápidamente a programar o a cambiar de
          carrera. Obtendrás todas las habilidades necesarias para conseguir tu
          primer trabajo como web developer front-end. No se requiere
          experiencia en absoluto, puedes empezar hoy.
        </p>,
        <p>
          Al adquirir nuevas habilidades, sabemos que la idoneidad y el coste de
          la formación son importantes para ti. Por lo que hemos hecho que la
          programación de este curso sea muy flexible junto con precios
          competitivos y múltiples opciones de pago.
        </p>,

        // <p>
        //   Obtén más información sobre nuestro curso de desarrollo web front-end.
        //   ¡Si te inscribes hoy, te convertirás inmediatamente en parte de
        //   nuestra familia Codercrack y te ayudaremos a alcanzar todas tus metas
        //   profesionales! Elija entre realizar el curso en un campus de manera
        //   presencial o de forma remota, según tus necesidades.
        // </p>,
        <p>
          Nuestro curso de desarrollador web front-end se basa principalmente en
          la práctica. Aprenderás a desarrollar sitios web interactivos con CSS,
          HTML, JavaScript y otras tecnologías y frameworks modernos como React
          o NodeJS. Tratamos todos los conocimientos fundamentales y habilidades
          necesarias para que te conviertas en un experto del desarrollo web
          front-end. Al final del curso, podrás diseñar fantásticas aplicaciones
          web y fáciles de usar. Nuestros programas incluyen ejercicios reales.
          Adquirirás rápidamente los conceptos básicos del desarrollo web
          front-end para que puedas comenzar en tu primer trabajo y destacar.
          Nuestros horarios también son flexibles, hay opciones de formación
          disponibles entre semana y los fines de semana.
        </p>,
      ],
    },
    {
      name: 'Bootcamp en desarrollo de aplicaciones web Back-end',
      title: 'Bootcamp en desarrollo de aplicaciones web \n Back-end',
      url: '/course-details',
      id: 5,
      iconName: 'mei-development',
      format: 'Presencial Full/Part Time',
      image: portfolio05,
      price: 2500,
      requirements: requirements,
      discounts: discounts,
      bannerImg: bannerImg5,
      description:
        'Procesar datos recopilados en una interfaz, gestionar bases de datos, etc. son funciones propias del Back-End, es decir, del cerebro dentro de un proyecto web. ¿Quieres ser la pieza clave dentro del desarrollo web?',
      secondDescription: [
        <p>
          En el Curso en desarrollo de aplicaciones web Back-End, el alumno
          aprenderá a crear aplicaciones en tiempo real, desde cero y paso a
          paso, desarrollando varios proyectos reales que nos permitirán aplicar
          los conocimientos obtenidos durante las clases. Además, el programa
          del Curso de Desarrollo Back-end está diseñado para que los alumnos
          descubran la bases y fundamentos del desarrollo en el lado del
          servidor y adquieran las capacidades necesarias para automatizar
          tareas del día a día como la minificación y el testing. Los alumnos
          aprenderán, también, todos los conceptos fundamentales del desarrollo
          con APIs modernas para compartir datos con otros de una manera
          eficiente (AJAX server-side), el uso de la terminal y la asincronía
        </p>,
        <h4>A quién va dirigido</h4>,
        <p>
          El curso está dirigido a cualquier persona interesada en el mundo de
          la programación del lado del servidor, Back-end.
        </p>,
      ],
    },
  ],
  editions: [
    { id: 1, name: 'Septiembre 2023' },
    { id: 2, name: 'Marzo 2024' },
  ],
  tabs: [
    { name: 'información' },
    { name: 'información' },
    { name: 'Matricúlate' },
  ],
};

const apply_url = '/apply';

export const PortfolioData = [
  {
    title: CoursesList.courses[3].title,
    categories: ['Septiembre 2023'],
    image: portfolio04,
    url: apply_url,
    id: 4,
    edition: 1,
  },
  {
    title: CoursesList.courses[4].title,
    categories: ['Octubre 2023'],
    image: portfolio05,
    url: apply_url,
    id: 5,
    edition: 1,
  },
  {
    title: CoursesList.courses[0].title,
    categories: ['Marzo 2024'],
    image: portfolio01,
    url: apply_url,
    id: 1,
    edition: 1,
  },
  {
    title: CoursesList.courses[1].title,
    categories: ['Marzo 2024'],
    image: portfolio02,
    url: apply_url,
    id: 2,
    edition: 1,
  },
  {
    title: CoursesList.courses[2].title,
    categories: ['Abril 2024'],
    image: portfolio03,
    url: apply_url,
    id: 3,
    edition: 1,
  },

  {
    title: CoursesList.courses[0].title,
    categories: ['Abril 2024'],
    image: portfolio06,
    url: apply_url,
    id: 6,
    edition: 2,
  }
];
