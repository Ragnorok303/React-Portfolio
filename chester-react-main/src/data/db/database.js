import Mock from "../mock";

const database = {
  information: {
    name: 'Jason Tompkins',
    aboutContent: "“If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.”― Bruce Lee",
    age: 32,
    phone: '',
    nationality: 'American',
    language: 'English, learning-Spanish',
    email: 'jasontompkins22@gmail.com',
    address: 'Aurora, Colorado',
    freelanceStatus: '',
    socialLinks: {
      facebook: 'https://www.facebook.com/jason.tompkins.5667',
      twitter: 'https://twitter.com/ragnorok303',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/jason-tompkins-648ba919a/',
      dribbble: '',
      github: 'https://github.com/Ragnorok303'
    },
    brandImage: '/images/about-image.jpg',
    aboutImage: '/images/brand-image.jpg',
    aboutImageLg: '/images/brand-image-lg.jpg',
    cvfile: '/files/resume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: " I will make a website functional and easy to use, but at the same time make it aesthetically appealing to the user."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "I have the instinct to track down bugs in order to make an appropriate fix. I have the empathy to see problems from our customers’ shoes and keep their needs in mind while building solutions."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "I will design mobile and web applications. I'm in the forefront of worldwide internet technology. Ecommerce, web apps and mobile apps are currently in high demand and will be the dominant market in 2015, as studies show. I successfully build quality products with integrity behind every project."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "You did a great job, the game worked very smoothly and the code was clean and well thought out. I like all the recent changes to your portfolio too - nice Bruce Lee quote.",
      author: {
        name: ' RJ Militante',
        designation: 'Web Developer/TA, DU Bootcamp'
      }
    },
    {
      id: 2,
      content: "I look forward to seeing what will come out of the rest of the projects over the next few months. Good job!",
      author: {
        name: 'Dan Mueller',
        designation: 'Web Developer/Teacher, DU Bootcamp'
      }
    },
    {
      id: 3,
      content: "Good job with all the sounds and getting all the reset happening. Great use of the objects and there's jQuery for days all over this. Commits and Readme look good.",
      author: {
        name: 'Joseaph Mankin',
        designation: 'Web Developer/TA, DU Bootcamp'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 80
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 90
    },
    {
      title: "Bootstrap",
      value: 85
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Coming Soon",
      subtitle: "New project in the works",
      imageUrl: "https://media.wireflare.com/img/2013/10/website-development-htaccess.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
      url:'',
      link:"Link to code",
      codeurl:"https://github.com/Raej1428/project3"
    },
    {
      id: 2,
      title: "Google-Books-React",
      subtitle: "A google books search.",
      imageUrl: "/images/portfolio-image-1.gif",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://googlebooks22.herokuapp.com/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/GoogleBooksReact"
    },
    {
      id: 3,
      title: "Clicky-Game",
      subtitle: "See how good your memory is.",
      imageUrl: "/images/portfolio-image-4.gif",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://hidden-waters-64141.herokuapp.com/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Clicky_Game"
    },
    {
      id: 4,
      title: "Mongo-Scrapper",
      subtitle: "News article scrapper.",
      imageUrl: "/images/portfolio-image-2.gif",
      url: 'https://fierce-thicket-66289.herokuapp.com/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/MongoScrapper"
    },
    {
      id: 5,
      title: "Hoot'n'Holla",
      subtitle: "The next big social-media platform.",
      imageUrl: "/images/portfolio-image-3.gif",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://pure-peak-54891.herokuapp.com/login',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Project2DBC"
    },
    {
      id: 6,
      title: "sequelizedBurgers",
      subtitle: "Order Up!!",
      imageUrl: "/images/portfolio-image-5.png",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url:'https://secure-ravine-32092.herokuapp.com/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/sequelizedBurgers"
    },
    {
      id: 7,
      title: "ormBurgers",
      subtitle: "Who's hungry?",
      imageUrl: "/images/portfolio-image-5.png",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url:'https://secure-ravine-32092.herokuapp.com/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Burger"
    },
    {
      id: 8,
      title: "Friend-Finder",
      subtitle: "Which Superhero are you?",
      imageUrl: "/images/portfolio-image-7.png",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://peaceful-crag-31429.herokuapp.com/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/FriendFinder"
    },
    {
      id: 9,
      title: "Constructor-Word-Guess",
      subtitle: "Guess the MCU Hero",
      imageUrl: "/images/portfolio-image-8.gif",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
      url:'https://github.com/Ragnorok303/Constructor-Word-Guess',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Constructor-Word-Guess"
    },
    {
      id: 10,
      title: "Bamazon",
      subtitle: "Come shop with ease",
      imageUrl: "/images/portfolio-image-9.gif",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
      url:'https://github.com/Ragnorok303/Bamazon',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Bamazon"
    },
    {
      id: 11,
      title: "Liri-app",
      subtitle: "Search your favorite media.",
      imageUrl: "/images/portfolio-image-10.gif",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://github.com/Ragnorok303/liri-app',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/liri-app"
    },
    {
      id: 12,
      title: "Find-It Stream-It",
      subtitle: "Find where to stream media",
      imageUrl: "/images/portfolio-image-11.png",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg"
      ],
      url: 'https://ragnorok303.github.io/Find-It-Stream-It/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Find-It-Stream-It"
    },
    {
      id: 13,
      title: "GifTastic",
      subtitle: "GIF finder",
      imageUrl: "/images/portfolio-image-12.png",
      url: 'https://ragnorok303.github.io/GifTastic/',
      link:"Link to code",
      codeurl:""
    },
    {
      id: 14,
      title: "Train-Time",
      subtitle: "Train scheduler",
      imageUrl: "/images/portfolio-image-13.png",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://ragnorok303.github.io/Train-Time/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Train-Time"
    },
    {
      id: 15,
      title: "Trivia-Game",
      subtitle: "How much do you know about Batman",
      imageUrl: "/images/portfolio-image-14.png",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url:'https://ragnorok303.github.io/Trivia-Game/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Trivia-Game"
    },
    {
      id: 16,
      title: "RPG-Game",
      subtitle: "Battle of the Monsters",
      imageUrl: "/images/portfolio-image-15.png",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url:'https://ragnorok303.github.io/RPG-Game/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/RPG-Game"
    },
    {
      id: 17,
      title: "Word-Guess-Game",
      subtitle: "TMNT guessing game",
      imageUrl: "/images/portfolio-image-16.png",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://ragnorok303.github.io/Word-Guess-Game/',
      link:"Link to code",
      codeurl:"https://github.com/Ragnorok303/Word-Guess-Game"
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2015 - PRESENT",
        position: "Contractor",
        company: "Colorado Home Remodeling LLC",
        details: "Computer skills in Word, Excel, and  QuickBooks. Scheduled crews to perform tasks. Ordering supplies for jobs "
      },
      {
        id: 2,
        year: "2014 - 2015",
        position: "Equipment Manager",
        company: "Saddle Rock Golf Course",
        details: "Performed annual and preventative maintenance. Set up systems for ordering, storage, and equipment repairs. Supervised and trained seasonal crews. Computer skills in Word, Excel, and Myturf by Toro."
      },
      {
        id: 3,
        year: "2009 - 2014",
        position: "Equipment Manager",
        company: "Heather Gardens",
        details: "Performed annual and preventative maintenance. Set up systems for ordering, storage, and equipment repairs. Supervised and trained seasonal crews. Computer skills in Word, Excel, and Myturf by Toro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2020",
        graduation: "Web Development Certification",
        university: "University of Denver",
        details: "Web Development Bootcamp."
      },
    ]
  },
  // blogs: [
  //   {
  //     id: 1,
  //     title: 'Markdown & Html supported blog.',
  //     featuredImage: '/images/blog-image-1.jpg',
  //     filesource: '../../blog/markdown-html-supported-blog.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 2,
  //     title: 'Installing NodeJS on your device.',
  //     featuredImage: '/images/blog-image-2.jpg',
  //     filesource: '../../blog/installing-nodejs-on-your-device.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 3,
  //     title: 'UI/UX design starter with Adobe XD.',
  //     featuredImage: '/images/blog-image-3.jpg',
  //     filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 4,
  //     title: 'Boost your post for increasing sales.',
  //     featuredImage: '/images/blog-image-4.jpg',
  //     filesource: '../../blog/boost-your-post-for-increasing-sales.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 5,
  //     title: 'Difference between GatsbyJS & NextJS.',
  //     featuredImage: '/images/blog-image-5.jpg',
  //     filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 6,
  //     title: 'How to choose javascript framework for project.',
  //     featuredImage: '/images/blog-image-6.jpg',
  //     filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 7,
  //     title: 'Web automation with python language.',
  //     featuredImage: '/images/blog-image-7.jpg',
  //     filesource: '../../blog/web-automation-with-python-language.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 8,
  //     title: 'Time to use latest technology for creating a website.',
  //     featuredImage: '/images/blog-image-8.jpg',
  //     filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 9,
  //     title: 'Think out of the box.',
  //     featuredImage: '/images/blog-image-9.jpg',
  //     filesource: '../../blog/think-out-of-the-box.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 10,
  //     title: 'Trending designs in 2020.',
  //     featuredImage: '/images/blog-image-1.jpg',
  //     filesource: '../../blog/trending-designs-in-2020.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 11,
  //     title: 'How to get 10k instagram followers?',
  //     featuredImage: '/images/blog-image-2.jpg',
  //     filesource: '../../blog/how-to-get-10k-instagram-followers.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 12,
  //     title: 'What NodeJS can do?',
  //     featuredImage: '/images/blog-image-3.jpg',
  //     filesource: '../../blog/what-nodejs-can-do.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 13,
  //     title: 'Futures of javascript.',
  //     featuredImage: '/images/blog-image-4.jpg',
  //     filesource: '../../blog/future-of-javascript.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 14,
  //     title: 'Popular javascript library in 2020.',
  //     featuredImage: '/images/blog-image-5.jpg',
  //     filesource: '../../blog/popular-javascript-library-in-2020.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   },
  //   {
  //     id: 15,
  //     title: 'Promrammers must read books.',
  //     featuredImage: '/images/blog-image-6.jpg',
  //     filesource: '../../blog/programmers-must-read-books.md',
  //     createDay: "20",
  //     createMonth: 'February',
  //     createYear: "2020"
  //   }
  // ],
  contactInfo: {
    phoneNumbers: ['720-771-9096'],
    emailAddress: ['jasontompkins22@gmail.com'],
    address: "14341 E Arizona Ave. Aurora,CO 80012"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});