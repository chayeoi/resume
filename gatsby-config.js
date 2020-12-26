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
