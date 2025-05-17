export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" }, // Changed to link to homepage projects section
  { name: "Certificates", link: "#career" }, 
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Tru Hair Care ",
    images: ["/Tru-Hair-1.png", "/Tru-Hair-2.png", "/Tru-Hair-3.png", "/Tru-Hair-4.png"], 
    iconLists: ["/react.svg", "/tailwindcss-logo.svg", "/next.svg", "/ts.svg"],
    githubLink: "https://github.com/0zkan95/Tru-Hair-Care", 
    visitLink: "https://tru-hair-care.vercel.app/", 
    des: `Tru Hair Care - Enhancing Client Engagement for Hair Stylists

Tru Hair Care is a dynamic and user-centric website I built to empower hair stylists with a robust online platform. The primary goal was to create a professional showcase for their talents and services, while also streamlining client interactions and appointment scheduling.

Key Features & Functionality:
Comprehensive Stylist Profile: Detailed information about the hairdresser, their services, pricing, and salon ambiance.

Effortless Contact: An easy-to-use contact form for direct inquiries and communication.

Seamless Online Booking: An intuitive booking system allows clients to view availability and book appointments at their convenience, reducing administrative overhead for the stylist. The stylist also has a backend view to manage their schedule.

Technical Stack: This project leverages a modern JavaScript ecosystem:

Next.js: Chosen for its powerful server-side rendering capabilities, ensuring fast load times and optimal SEO performance.

React: Utilized for building a highly interactive and component-based user interface.

TypeScript: Implemented to enhance code quality, maintainability, and reduce runtime errors through static typing.

Tailwind CSS: Employed for creating a custom, responsive design with speed and efficiency using a utility-first approach.

This project demonstrates my ability to deliver a full-featured web application focused on user experience and business efficiency.`
  },
  {
    id: 2,
    title: "Store All In One",
    images: ["/store-1.png", "/store-2.png", "/store-3.png", "/store-4.png", "/store-5.png"],
    iconLists: ["/react.svg", "/redux.svg", "/ts.svg", "/tailwindcss-logo.svg", "/css_icon.svg"],
    githubLink: "https://github.com/0zkan95/E-commerce_React-Redux",
    visitLink: "https://store-all-in-one.vercel.app/",
    des: ` STORE-ALL-IN-ONE - A Dynamic E-commerce Shopping Experience

STORE-ALL-IN-ONE is a comprehensive e-commerce web application I developed to provide a seamless and intuitive online shopping experience. The platform is designed to efficiently showcase products, highlight special offers, and enable users to easily find, select, and purchase items.

Key Features & Functionality:
Dynamic Product Display: Effectively renders a catalog of products, complete with detailed information and clear visuals. Discount information and special offers are prominently displayed to attract customers.

Intuitive Product Search: Features a robust search input, allowing users to quickly locate specific products within the store's inventory.
Advanced Filtering & Sorting: Users can refine their browsing experience by filtering items by category (e.g., viewing only "t-shirts") or sorting them based on various criteria, enhancing product discovery.

Interactive Shopping Cart: A fully functional shopping cart allows users to easily add or remove products. The system manages the state of the cart effectively, leading to a smooth checkout process (including payment integration).

State Management with Redux: Complex application state, such as cart contents, product data, and user interactions, is efficiently managed using Redux, ensuring data consistency and a predictable user experience.

Technical Stack: This project leverages a modern JavaScript ecosystem for a feature-rich e-commerce platform:

Next.js: Chosen for its powerful server-side rendering (SSR) and static site generation (SSG) capabilities, ensuring fast page loads, optimal SEO, and a great user experience critical for e-commerce.

React: Utilized to build a highly interactive and component-based user interface, allowing for dynamic updates to product listings, search results, and the shopping cart.

TypeScript: Implemented to bring strong typing to the JavaScript codebase, enhancing code quality, maintainability, and reducing runtime errors in a complex application.

Tailwind CSS: Employed for its utility-first approach to styling, enabling rapid development of a custom, responsive, and modern user interface.

Redux: Integrated for robust and centralized state management, crucial for handling the complexities of an e-commerce application like managing the shopping cart, product selections, and potentially user authentication.

This project demonstrates my proficiency in building full-stack e-commerce solutions with a focus on user experience, performance, and scalable state management. `,
  },
  {
    id: 3,
    title: "Hope Law Firm",
    images: ["/Hope-1.png", "/Hope-2.png", "/Hope-3.png", "/Hope-4.png",],
    iconLists: ["/next.svg", "/ts.svg", "/react.svg", "/tailwindcss-logo.svg",],
    githubLink: "https://github.com/0zkan95/Hope-Law-Firm",
    visitLink: "https://hope-law-firm.vercel.app/",
    des: `HOPE Law Firm - A Digital Platform for Legal Engagement and Outreach

HOPE is a sophisticated and comprehensive website I developed for a visionary law firm. The platform is designed to serve as a central digital hub, enhancing their online presence, fostering community engagement, and showcasing their legal expertise through a modern and accessible interface.

Key Features & Functionality:
Insightful Blog Platform: A dedicated space for the firm to share articles, legal analyses, firm news, and objectives, establishing thought leadership and engaging with their audience on current legal topics.

E-commerce for Legal Resources: An integrated shopping page allowing the firm to offer publications, books, guides, or other branded items directly to clients and the wider public, providing valuable resources and an additional revenue stream.

Comprehensive Contact & Information Hub: Provides clear and easy access to the firm's contact details, location, practice areas, attorney profiles, and other essential information, ensuring seamless communication for potential and existing clients.

Case Studies & Experience Showcase: A section dedicated to sharing selected (anonymized where necessary) case summaries or precedents. This feature effectively demonstrates the firm's experience, successful track record, and can serve an educational purpose for the public.

Engaging User Experience with CSS Animations: Subtle and professional CSS animations are thoughtfully integrated throughout the site to enhance visual appeal, guide user interaction, and create a more polished and memorable browsing experience.

Technical Stack:

This project was built using a cutting-edge JavaScript framework and styling solutions:

Next.js: Chosen for its powerful server-side rendering (SSR) and static site generation (SSG) capabilities, ensuring fast load times, excellent SEO for discoverability (critical for a law firm), and a smooth user experience.

React: Utilized to build a dynamic, component-based user interface, enabling interactive elements for the blog, shop, and case study presentations, and ensuring maintainability.

TypeScript: Implemented to bring strong typing to the JavaScript codebase, significantly improving code quality, developer productivity, and reducing the likelihood of runtime errors, crucial for a professional-grade website.

Tailwind CSS: Employed for its utility-first approach, facilitating the rapid development of a custom, responsive, and sophisticated design that reflects the firm's professional image and brand identity.

CSS Animations: Leveraged to introduce refined visual effects and transitions that improve user engagement and contribute to a modern, polished aesthetic without compromising performance or accessibility.

This project showcases my ability to create professional, feature-rich websites tailored to specific industry needs, combining modern design principles with robust functionality and an engaging user experience.`,
  },
  {
    id: 4,
    title: "EVOGYM",
    images: ["/Evo1.png", "/Evo2.png", "/Evo3.png", "/Evo4.png"],
    iconLists: ["/next.svg", "/ts.svg", "/react.svg", "/tailwindcss-logo.svg",],
    githubLink: "https://github.com/0zkan95/gym",
    visitLink: "https://evogym-one-sigma.vercel.app/",
    des: `EVOGYM - A Dynamic Web Experience for Fitness Enthusiasts

EVOGYM is a vibrant and modern website I developed for a contemporary fitness center. This platform is designed to be an engaging online destination, attracting potential members, providing essential information, and showcasing the gym's offerings through a sleek and intuitive interface, as highlighted by its various visual sections (Evo1.png - Evo4.png).

Key Features & Functionality (Inferred from a typical gym website and multiple images):

Visually Engaging Homepage & Sections: The site likely features a compelling landing page and distinct sections (as suggested by Evo1.png to Evo4.png) to showcase facilities, atmosphere, and unique selling propositions, immediately capturing visitor interest.

Detailed Program & Class Information: Provides comprehensive details about available fitness classes, training programs, and potentially trainer profiles, helping users find services that match their fitness goals.

Membership Options & Benefits Showcase: Clearly presents various membership tiers, pricing, and the benefits associated with joining EVOGYM, streamlining the decision-making process for prospective members.
User-Centric Navigation & Information Access: Designed for ease of use, allowing visitors to effortlessly find information about schedules, location, contact details, and what the gym offers.

Modern & Responsive Design: Ensures a seamless and visually appealing experience across all devices (desktops, tablets, and mobiles), reflecting the energetic and contemporary brand of EVOGYM.

Technical Stack:

This project was built using a powerful and modern JavaScript-centric stack:

Next.js: Chosen for its exceptional server-side rendering (SSR) and static site generation (SSG) capabilities. This delivers blazing-fast load times, significantly improves SEO (making it easier for potential members to find EVOGYM online), and offers a smooth, app-like user experience.

React: Leveraged to create a dynamic and component-based user interface. This allows for interactive elements, such as potential class schedules, image galleries, or testimonial sections, and ensures a modular and maintainable codebase.

TypeScript: Implemented to add static typing to the JavaScript code. This enhances code quality, improves developer productivity by catching errors early, and makes the application more robust and scalable – essential for a professional online presence.

Tailwind CSS: Employed for its utility-first approach to styling. This facilitated the rapid development of a custom, responsive, and visually polished design that embodies the energetic and modern aesthetic of a fitness brand like EVOGYM.

This EVOGYM project showcases my ability to develop engaging, high-performance web applications tailored to businesses aiming for a strong online presence. It combines modern design principles with robust front-end technologies to create an effective digital storefront that drives user engagement and supports business objectives.
`
  },
  {
    id: 5,
    title: "Movie App",
    images: ["/Movie-1.png", "/Movie-2.png", "/Movie-3.png", "/Movie-4.png", "/Movie-5.png",],
    iconLists: ["/next.svg", "/tailwindcss-logo.svg", "/ts.svg", "/react.svg",],
    githubLink: "https://github.com/0zkan95/movieApp",
    visitLink: "",
    des: `Movieo - An Immersive Movie & TV Show Discovery Platform

Movieo is an engaging web application I developed to provide users with a rich and interactive experience for exploring movies and TV shows. Leveraging the extensive The Movie Database (TMDB) API, Movieo offers a comprehensive catalog of entertainment content presented in a user-friendly and visually appealing interface.

Key Features & Functionality:

Curated Content Sections: Clearly organized pages for "Home," "TV Shows," and "Movies," allowing users to easily browse their preferred content categories and discover new titles.

Seamless Navigation: An intuitive header navigation bar enables effortless switching between the main sections of the application, ensuring a smooth browsing experience.

Powerful Universal Search: A prominent search input allows users to quickly find specific movies or TV series across the entire TMDB database. Search results dynamically update and allow direct navigation to the detailed page of the selected item.

In-Depth Information Pages: When a user clicks on any movie or TV show, a dedicated page opens, providing comprehensive details. This includes synopses, ratings, release dates, genres, and a detailed list of the cast members involved in the production.

Real-time Data from TMDB API: All movie and TV show information, including posters, summaries, cast details, and more, is fetched dynamically and in real-time from The Movie Database (TMDB) API, ensuring the content is always up-to-date.

Technical Stack:

This project was built with a focus on performance, dynamic content rendering, and a modern user experience:

Next.js: Utilized for its server-side rendering (SSR) capabilities and efficient client-side routing, leading to fast initial page loads, smooth transitions between views, and improved SEO for content discoverability.

React: Employed to create a highly interactive and component-based user interface. This allows for efficient rendering and updating of movie/TV show listings, search results, and detailed information views.

Tailwind CSS: Chosen for its utility-first approach to styling, enabling the rapid development of a custom, responsive, and visually appealing design that effectively showcases media content and enhances the user experience.

TMDB API Integration: Successfully integrated The Movie Database API as the primary data source, demonstrating proficiency in consuming and managing data from external RESTful APIs to populate the application with rich content.

This project demonstrates my ability to build dynamic, API-driven web applications that offer extensive content discovery and a seamless user experience, utilizing modern front-end technologies to create an engaging platform for entertainment enthusiasts.`,
  },
  {
    id: 6,
    title: "Brainwave",
    images: ["/Brain.png", "/Brain-1.png", "/Brain-2.png", "/Brain-3.png",],
    iconLists: ["/next.svg", "/react.svg", "/tailwindcss-logo.svg", "/c.svg", "/ts.svg", "/gsap.svg"],
    githubLink: "https://github.com/0zkan95/Brainwave",
    visitLink: "https://app-brainwave.vercel.app/",
    des: `Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles.

    This project demonstrates my ability to create a modern, responsive, and user-friendly website using React.js and Tailwind CSS, showcasing my skills in front-end development and design.`,
  },
  {
    id: 7,
    title: "Quiz App",
    images: ["/quizApp.png"],
    iconLists: ["/react.svg", "/ts.svg", "/tailwindcss-logo.svg",],
    githubLink: "https://github.com/0zkan95/quizapp-with-typescript",
    visitLink: "",
    des: `Quiz App - A Fun and Educational Platform for Learning and Testing

Quiz App is an engaging web application I developed to provide users with a fun and educational experience for learning and testing their knowledge. The platform is designed to be a versatile tool for various topics, from general knowledge to specific subjects, and offers a user-friendly and visually appealing interface.

Key Features & Functionality:

Multiple Quiz Categories: Offers a variety of quiz categories, including general knowledge, science, history, and more, allowing users to choose their preferred topic and challenge their knowledge.

Interactive Quiz Interface: A user-friendly interface with a timer and progress bar, making the quiz experience more engaging and time-sensitive.`
  },
  {
    id: 8,
    title: "The Little Lemon Restauran",
    images: ["/Home.png"], 
    iconLists: ["/react.svg", "/css_icon.svg", "/html_icon.svg", "javascript_icon.svg"],
    visitLink: "https://little-lemon-restaurant-sand.vercel.app/", 
    githubLink: "https://github.com/0zkan95/LittleLemonRestaurant",
    des: `The Little Lemon Restaurant - A Modern and Responsive Web Experience

   The Little Lemon Restaurant is a modern and responsive web application I developed to provide users with a seamless and engaging dining experience.
   The platform is designed to showcase the restaurant's menu, offerings, and ambiance, while also allowing customers to make reservations and view their orders. `
  },
];

export const certificates = [
  {
    id: 1,
    name: "HTML and CSS in Depth",
    img: "/HtmlCssDepth.png",
  },
  {
    id: 2,
    name: "Programming with JavaScript",
    img: "/JavaScript.png",
  },

  {
    id: 3,
    name: "Version Control",
    img: "/VersionControl.png",
  },
  {
    id: 4,
    name: "Advanced React",
    img: "/AdvancedReact.png",
  },
  {
    id: 5,
    name: "Principles of UX/UI Design",
    img: "/UX-UI.png",
  },
  {
    id: 6,
    name: "Coding Interview Preparation",
    img: "/CodingInterview.png",
  },
  {
    id: 7,
    name: "Next.JS",
    img: "/Nextjs.png",
  },
  {
    id: 8,
    name: "Meta Front End Development Course",
    img: "/MetaFrontEndFull.png",
  },
  {
    id: 9,
    name: "Data Structures and Algorithms",
    img: "/Amazon.png",
  },
  {
    id: 10,
    name: "Redux in JS and React",
    img: "/Redux.png",
  },
];

export const tools = [
  {
    id: 1,
    name: "HTML",
    img: "/html_icon.svg",
    nameImg: "",
  },
  {
    id: 2,
    name: "CSS",
    img: "/css_icon.svg",
    nameImg: "",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    img: "/Javascript_icon.svg",
    nameImg: "",
  },
  {
    id: 5,
    name: "Git",
    img: "/git1.svg",
    nameImg: "",
  },
  {
    id: 6,
    name: "React",
    img: "/react.svg",
    nameImg: "",
  },
  {
    id: 7,
    name: "Figma",
    img: "/figma1.svg",
    nameImg: "",
  },
  {
    id: 8,
    name: "Next.JS",
    img: "/next.svg",
    nameImg: "",
  },
  {
    id: 9,
    name: "Tailwindcss",
    img: "/tailwindcss-logo.svg",
    nameImg: "",
  },
  {
    id: 10,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/0zkan95/"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: ""
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/aytekin-özkan-947364326"
  },
];
