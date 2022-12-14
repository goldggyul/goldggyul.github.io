module.exports = {
  title: `goldggyul.io π©π»βπ»`,
  description: `Hi! I'm a developer`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://goldggyul.github.io`,
  ogImage: `/welcome_image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `goldggyul/goldggyul.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-P8JQXFL045', // Google Analytics Tracking ID
  author: {
    name: `λ°π`,
    bio: {
      role: `λ°±μλ κ°λ°μ`,
      description: ['μλνμΈμ!', 'Good morning\n y\'all~'],
      thumbnail: 'moving_ggyul.gif', // Path to the image in the 'asset' folder
      about: 'hi.png', // about νμ΄μ§μμ bio λμ λμ¬ κ²
    },
    social: {
      github: `https://github.com/goldggyul`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `wakegyul@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== π« Don't erase this sample (μ¬κΈ° μ§μ°μ§ λ§μΈμ!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.03 ~',
        activity: 'μ»΄ν¨ν°κ³΅νλΆ μ¬νμ€'
      },
      {
        date: '2021.09 ~ 2022.02',
        activity: 'κ²μ νμ¬ μΈν΄ & κ²μ ν΄λΌμ΄μΈνΈ νλ‘κ·Έλλ¨Έ'
      },
      {
        date: '2022.03 ~',
        activity: 'UMC(MakeUs) μ±/μΉ κ°λ° λμλ¦¬ 2κΈ° μλ² ',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== π« Don't erase this sample (μ¬κΈ° μ§μ°μ§ λ§μΈμ!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Todoary μ± μλ² κ°λ° (μ§νμ€)',
        description:
          'UMC λμλ¦¬μμ μμν μ± λ°μΉ­ νλ‘μ νΈμλλ€. λμμ΄λ, IOS, Android, μλ² κ°λ°μλΆλ€κ³Ό νμνκ³  μμ΅λλ€. μ²μμΌλ‘ μλ² κ°λ°μλ‘ μ°Έμ¬ν νλ‘μ νΈμμλ λΆκ΅¬νκ³  λ©μ§ νμλΆλ€ λμ UMC λ°λͺ¨λ°μ΄μμ β¨λμβ¨μ λ°κ³  λ°μΉ­μ λͺ©νλ‘ κ°λ°μ€μλλ€.',
        techStack: ['Spring Boot', 'Amazon ec2', 'Amazon RDS', 'Github Actions CI/CD'],
        thumbnailUrl: 'todoary.png',
        links: {
          //post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/Todoary',
          demo: 'https://nonstop-asparagus-df0.notion.site/Todoary-1971eaf8084c471395c46bbd748ad38f',
        },
      },
    ],
  },
};
