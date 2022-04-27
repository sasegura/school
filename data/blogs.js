import blog1 from "@/images/blog/blog1.jpg";
import blog1Banner from "@/images/blog/blog1-banner.jpg";
import blog2 from "@/images/blog/blog2.jpg";
import blog2Banner from "@/images/blog/blog2-banner.jpg";

export const BlogHomeSection = {
  //subTitle: "últimas noticias y blogs",
  title: "Últimos posts",
  text: "Mantente informado con nuestros blogs.",
};

export const BlogsList = {
  name: "Blogs",
  url: "/blog",
  blogs: [
    {
      url: "/blog-single",
      id: 1,
      date: "18 marzo",
      imageBanner: blog1Banner,
      image: blog1,
      title: "¿Cómo conseguir trabajo de desarrollador web?",
      tags: ["Desarrollador web", "Fornt-End", "Back-End", "Full-Stack"],

      content: [
        <p>
          Desde sus inicios, Internet ha crecido exponencialmente. Con el
          aumento de páginas web y usuarios, los desarrolladores web son muy
          demandados. Además, este trabajo está bien pagado. Pero, ¿qué es un
          desarrollador web y qué hace exactamente? Te lo explico en este
          artículo.
        </p>,
        <p>
          Ahora te preguntas ¿Qué hago para trabajar como desarrollador web?
          Trabajar como desarrollador web es sencillo, si sigues los consejos de
          esta guía. Pero antes, te explico qué es un desarrollador web y que
          hace.
        </p>,
        <h4>Elije una especialización como desarrollador web</h4>,
        <p>
          Primero te aconsejo que te especialices en un punto en particular como
          desarrollador web. Ya sea en Front-End, Back-End o si prefieres, ambos
          siendo un desarrollador Full-Stack. Esto con el fin de que tú trabajes
          en el área que más te guste.
        </p>,
        <h4>Practica tus habilidades de codificación</h4>,
        <p>
          Los desarrolladores web aprenden haciendo. Configura una cuenta de
          Github y envía tus códigos a la página web. Un perfil de Github activo
          puede llamar la atención de los empleadores y demostrar tu capacidad
          para resolver problemas de programación.
        </p>,
        <h4>Únete a comunidades de desarrolladores web</h4>,
        <p>
          Únete a comunidades de desarrolladores web en páginas web como
          StackOverflow, WebDeveloper.com, GitHub, CodeProject y Bytes entre los
          lugares de reunión más populares para desarrolladores. Participa en
          debates, comparte tu trabajo y mantente al día con las últimas
          noticias de la industria mientras hace valiosos contactos en el
          camino.{" "}
        </p>,
        <h4>Aprende habilidades nuevas y relevantes con regularidad</h4>,
        <p>
          Además de mantenerte al día con las noticias, también debes mantenerte
          al día con las nuevas habilidades y herramientas para desarrolladores
          web. Algunas habilidades más solicitadas son React.js, Angular.js y
          Node.js, etc. Estar al día con estas herramientas te garantiza alta
          posibilidad de encontrar empleo como desarrollador web.
        </p>,
        <h4>Prepara un portfolio</h4>,
        <p>
          Tener un portfolio que muestre tus habilidades te brinda la
          oportunidad que los potenciales clientes puedan ver de lo que eres
          capaz de hacer como desarrollador web. Te aconsejo que crees tu propia
          página web para ofrecer tus servicios y mostrar tu portfolio.
        </p>,
        <h4>Prepárate para la entrevista</h4>,
        <p>
          Antes de ir a una entrevista, vuelve a leer la descripción del
          trabajo. Piensa en la tecnología que usan y en las posibles preguntas
          que te pueden hacer.
        </p>,
      ],
    },
    {
      url: "/blog-single",
      id: 2,
      date: "22 marzo",
      imageBanner: blog2Banner,
      image: blog2,
      title: "¿Qué es un desarrollador de páginas web?",
      tags: ["Desarrollador web", "Fornt-End", "Back-End", "Full-Stack"],
      content: [
        <p>
          Un desarrollador web es el profesional del desarrollo que recibe un
          diseño gráfico de la página web, que ha sido creado por un cliente o
          por un equipo de diseño, la maqueta y la programa para convertirla en
          una página web. Lo hace escribiendo líneas y líneas de código de
          programación, utilizando una variedad de lenguajes de programación,
          maquetación y estilo visuales.
        </p>,

        <p>
          Los desarrolladores web tienen un trabajo complejo porque,
          esencialmente, tienen que tomar un idioma que comprendamos, como el
          español, y traducirlo a un idioma que el navegador web como HTML, CSS
          o JavaScript.
        </p>,
        <p>
          Un desarrollador web es un programador especializado en crear y
          aplicaciones y sistemas sobre páginas web para Internet.
        </p>,

        <p>
          Además, deben tener altos niveles de paciencia, pensamiento lógico,
          buenas habilidades lingüísticas y la voluntad de trabajar con los
          clientes para hacer que la página web sea personal, original y
          funcional. También es importante que sepan diseño gráfico, comprendan
          el SEO, las herramientas de publicación multimedia y las técnicas de
          marketing, que en conjunto pueden hacer que su perfil profesional sea
          más atractivo para posibles clientes o agencias web.
        </p>,

        <h3>Tipos de desarrolladores de páginas web</h3>,
        <p>
          Existen diferentes tipos de desarrolladores web, cada uno de los
          cuales se centra en un aspecto diferente en la creación de una página
          web. A continuación te explico las funciones de los diferentes tipos
          de desarrolladores web.
        </p>,
        <h4>Desarrollador Front-End</h4>,
        <p>
          Un desarrollador Front-End se encarga de tomar el diseño de la página
          web de un cliente o equipo de diseño y escribe el código necesario
          para implementarlo en Internet. También, es responsable de asegurarse
          de que todo el contenido que se necesita para la página web sea claro,
          visible y se encuentre en el lugar correcto
        </p>,

        <p>
          Un desarrollador web Front-End dominará al menos tres lenguajes de
          programación: HTML, CSS y JavaScript.
        </p>,

        <h4>Desarrollador Back-End</h4>,
        <p>
          El desarrollador Back-End se encarga de crear el código y los
          programas que alimentan el servidor de la página web, las bases de
          datos y las aplicaciones que contiene.
        </p>,
        <p>
          Lo más importante como desarrollador Back-End es la capacidad de poder
          crear un código limpio y eficiente que haga lo que quiere de la manera
          más rápida posible.
        </p>,
        <p>
          Algunos de los lenguajes más populares utilizados incluyen PHP,
          Python, Java, SQL, JavaScript y Ruby.
        </p>,

        <h4>Desarrollador Full-Stack</h4>,
        <p>
          Los desarrolladores Full-Stack comprenden las estrategias y los
          procesos tanto de Front-End como de Back-End.
        </p>,
      ],
    },
    {
      title: "basic rules of running web agency business",
      date: "20 abril",
      url: "/blog-single",
      image: blog2,
      id: 3,
      imageBanner: blog2Banner,
      tags: ["Desarrollador web", "Fornt-End", "Back-End", "Full-Stack"],
    },
    {
      title: "basic rules of running web agency business",
      date: "20 junio",
      url: "/blog-single",
      image: blog2,
      id: 4,
      imageBanner: blog2Banner,
      tags: ["Desarrollador web", "Fornt-End", "Back-End", "Full-Stack"],
    },
    {
      title: "basic rules of running web agency business",
      date: "20 anero",
      url: "/blog-single",
      image: blog2,
      id: 5,
      imageBanner: blog2Banner,
      tags: ["Desarrollador web", "Fornt-End", "Back-End", "Full-Stack"],
    },
  ],
};
