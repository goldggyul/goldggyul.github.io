module.exports = {
  title: `goldggyul.io 👩🏻‍💻`,
  description: `뀰의 개발 농장`,
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
    name: `뀰🍊`,
    bio: {
      role: `백엔드 개발자`,
      description: ['안녕하세요!', 'Good morning\n y\'all~'],
      thumbnail: 'moving_ggyul.gif', // Path to the image in the 'asset' folder
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
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
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
        activity: '컴퓨터공학부 재학중'
      },
      {
        date: '2019.09 ~ 2022.02',
        activity: '게임 회사 인턴 & 게임 클라이언트 프로그래머'
      },
      {
        date: '2022.03 ~',
        activity: 'UMC(MakeUs) 앱/웹 개발 동아리 2기 서버 ',
        // links: {
        //   post: '/gatsby-starter-zoomkoding-introduction',
        //   github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        //   demo: 'https://www.zoomkoding.com',
        // },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
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
        title: 'Todoary 앱 서버 개발 (진행중)',
        description:
          'UMC 동아리에서 시작한 앱 런칭 프로젝트입니다. 디자이너, IOS, Android, 서버 개발자분들과 협업하고 있습니다. 첫 프로젝트임에도 멋진 팀원분들 덕에 UMC 데모데이에서 ✨대상✨을 받고 런칭을 목표로 개발중입니다.',
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
