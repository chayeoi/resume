module.exports = {
  siteMetadata: {
    title: '기술 이력서',
    description: '김찬연 기술 이력서',
    author: '김찬연',
    about: {
      title: '안녕하세요, 개발자 김찬연이라고 합니다.',
      content: `
        평범한 3년차 개발자입니다.
        <strong>코드 리뷰 등을 통한 기술적 토론</strong>을 즐기며, 평소에 생각을 글로 정리하고 무엇이든 꼼꼼히 기록하는 습관이 있습니다. 이외에도 개발 커뮤니티 활동에 적극적으로 참여하고 <u>새로운 아이디어가 생각나면 팀을 꾸려 토이 프로젝트를 진행</u>하는 등 다양한 방식으로 개발을 즐기고 있습니다.
        개발자로서는 조금 특이하게도 수학교육을 전공하였고, 이때부터 여러 사람들을 가르치며 지식을 공유하는 일에 즐거움을 느껴 개발자가 된 이후에도 <strong>오프라인 강의, 오픈소스 문서 번역 등 다양한 방법으로 지식을 나누려 노력</strong>하고 있습니다.
      `,
      contacts: [
        { name: 'Email', emoji: '📧', href: 'chayeoikeem@gmail.com' },
        { name: 'Blog', emoji: '🏠', href: 'https://blog.chayeoi.site' },
        { name: 'GitHub', emoji: '🐱', href: 'https://github.com/chayeoi' },
        { name: 'Facebook', emoji: '👤', href: 'https://facebook.com/chayeoi' },
        { name: 'Notion', emoji: '👨🏻‍💻', href: 'https://www.notion.so/chayeoi/Personal-Workspace-ec488ad57426478d9f0766fa91a048e9' },
      ],
    },
    experiences: {
      title: '경험',
      content: [
        {
          name: '비바리퍼블리카',
          position: '프론트엔드 개발자',
          period: '(Since Dec 2020)',
          description: '인터넷 전문은행 <strong>토스뱅크에서 카드 서비스 개발을 담당</strong>하고 있습니다.',
        },
        {
          name: '클래스팅',
          position: '프론트엔드 개발자',
          period: '(Apr 2018 - Jul 2020)',
          description: `
            초중고 학교교육 플랫폼 <strong>클래스팅</strong>에서 <strong>선생님들의 업무를 돕기 위한 학교 관련 서비스를 개발</strong>했습니다.
            학교 선생님으로 일하고 있는 대학 동기 및 선후배들이 주변에 많았던 만큼, 교육 현장에 있는 선생님들의 생각을 직접 듣고 반영하면서 좋은 제품을 만들고자 노력했습니다.
            스크럼 방법론에 따라 2주 단위 스프린트로 제품을 개발하며 애자일 개발 프로세스를 경험했고, 사내 프론트엔드 그룹의 테크톡 및 세미나, 인상 깊었던 코드 리뷰 공유 등 건강한 개발 문화 정착을 위해 다양한 시도를 했습니다.
          `,
        },
      ],
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '김찬연 기술 이력서',
        short_name: '기술 이력서',
        start_url: '/',
        background_color: '#2979ff',
        theme_color: '#2979ff',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
  ],
}
