module.exports = {
  siteMetadata: {
    title: '기술 이력서',
    description: '안녕하세요, 개발자 김찬연이라고 합니다.',
    author: '김찬연',
    siteUrl: 'https://resume.chayeoi.site',
    image: 'https://www.dropbox.com/s/whcrxqtrizjjtfm/resume.jpg?raw=1',
    about: {
      title: '안녕하세요, 개발자 김찬연이라고 합니다.',
      content: `
        ${new Date().getFullYear() - 2017}년차 프론트엔드 개발자입니다.
        <strong>코드 리뷰 등을 통한 기술적 토론</strong>을 즐기며, 평소에 개발하면서 고민되는 지점이 생길 때마다 글로 정리하고 이것저것 <a href="https://www.notion.so/chayeoi/b20086d9e4b1469097ff51b26d822c59?v=d70b436ba26b4dd0abe0f02a72d6f8b6" target="_blank">꼼꼼히 기록</a>하는 일을 좋아합니다. 이외에도 개발 커뮤니티 활동에 적극적으로 참여하고 <a href="https://www.notion.so/chayeoi/7450220672254e9398185811949bdfa0?v=7c381efa784840368e31f45e5658cd66" target="_blank">새로운 아이디어가 생각나면 팀을 꾸려 토이 프로젝트를 진행</a>하는 등 다양한 방식으로 개발을 즐기고 있습니다.
        대학에서 수학교육을 전공하였고, 학부 때부터 전공을 살려 여러 사람들을 가르치며 지식을 공유하는 일에 즐거움을 느껴 개발자가 된 이후에도 <strong>오프라인 강의, 오픈소스 문서 번역 등 다양한 방법으로 지식을 나누려 노력</strong>하고 있습니다.
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
          name: '토스뱅크',
          position: '프론트엔드 개발자',
          period: '(Since Dec 2020)',
          value: 'toss',
          description: '인터넷 전문은행 <strong>토스뱅크에서 카드 서비스 프론트엔드 개발을 담당</strong>하고 있습니다.',
        },
        {
          name: '클래스팅',
          position: '프론트엔드 개발자',
          period: '(Apr 2018 - Jul 2020)',
          value: 'classting',
          description: `
            초중고 학교교육 플랫폼 <strong>클래스팅에서 선생님들의 업무를 돕기 위한 학교 관련 서비스를 개발</strong>했습니다.
            학교 선생님으로 일하고 있는 대학 동기 및 선후배들이 주변에 많았던 만큼, 교육 현장에 있는 선생님들의 생각을 직접 듣고 반영하면서 좋은 제품을 만들고자 노력했습니다.
            스크럼 방법론에 따라 2주 단위 스프린트로 제품을 개발하며 애자일 개발 프로세스를 경험했고, 사내 프론트엔드 그룹의 테크톡 및 세미나, 인상 깊었던 코드 리뷰 공유 등 건강한 개발 문화 정착을 위해 다양한 시도를 했습니다.
          `,
        },
      ],
    },
    projects: {
      title: '프로젝트',
      content: [
        {
          name: '토스뱅크 카드 서비스',
          period: '(Since Dec 2020)',
          description: `
            토스뱅크의 카드 서비스를 개발하고 있습니다. (아직 오픈 전이라 서비스에 대한 자세한 소개는 어렵습니다)
            에러 바운더리와 React의 실험적 기능인 Suspense를 조합해 프론트엔드의 비동기 처리를 효율적으로 핸들링했고, SWR을 활용해 비동기 통신을 구현했습니다.
          `,
        },
        {
          name: '클래스팅 스쿨',
          period: '(Apr 2018 - Jul 2020)',
          value: 'classting-school',
          description: `
            클릭 몇 번으로 회신용 가정통신문을 제작, 배포하고 통계 자료를 자동 취합하는 등 <strong>선생님들의 업무 생산성 향상을 위한 학교 종합 관리 서비스</strong>입니다.
            제품의 초기 프로토타입을 백엔드 없이 React와 Firebase를 사용하여 구축하였고, 이후에 서비스가 점차 고도화됨에 따라 <strong>프론트엔드 전 영역을 맡아서 개발</strong>했습니다.
            제품의 초기 버전은 React와 JavaScript, Redux, Redux Saga, Styled Components, Firebase 등을 사용해 개발했으며, Jest와 Enzyme, Storybook을 사용하여 테스트를 관리했습니다. 이후에 기술 스택을 점진적으로 TypeScript, GraphQL 기반의 앱으로 마이그레이션하기 위한 준비 작업을 진행했습니다.
            학교에서 사용하는 서비스의 특성 상 IE 사용자가 전체의 50%에 달했기 때문에, 미지원 스펙 및 API 호환성, 성능 등과 관련한 다양한 크로스 브라우징 이슈에 대응하며 지속적으로 사용자 경험을 개선하기 위해 노력했습니다.
          `,
        },
        {
          name: '클래스팅 AI',
          period: '(May 2020 - Jul 2020)',
          value: 'classting-ai',
          description: `
            학생들에게 인공지능 기반의 개별화된 맞춤 학습을 제공하고 쌓여진 학습 정보를 바탕으로 학습 리포트를 관리 지도할 수 있는 <strong>학습 관리 시스템</strong>입니다.
            클래스팅 AI에서 <strong>학생들의 일별, 연간 학습 현황 등을 시각화한 그래프로 확인할 수 있는 관리자 페이지 개발과 데일리 퀴즈 리워드 페이지를 웹뷰로 이전하는 작업을 진행</strong>했으며, React, Redux, Redux Saga, Styled Components를 사용해 개발했습니다.
          `,
        },
        {
          name: '개인 블로그',
          period: '(Feb 2020)',
          value: 'personal-blog',
          description: `
            오랫동안 사용해왔던 Jekyll 블로그를 <a href="https://blog.chayeoi.site/" target="_blank">Gatsby 블로그</a>로 전환하는 작업을 진행했습니다.
            <strong>디자인을 포함해 <a href="https://github.com/chayeoi/blog/pull/59" target="_blank">스크롤스파이</a>, <a href="https://github.com/chayeoi/blog/pull/32" target="_blank">다크 모드</a> 등 거의 모든 기능을 라이브러리를 사용하지 않고 직접 구현</strong>했으며, 검색 엔진 최적화를 위해 웹 표준 준수와 웹 접근성에도 많은 신경을 썼습니다.
            비교적 규모가 작은 프로젝트이긴 해도, 추후에 변경 이력 추적을 원활히 하기 위해 <strong><a href="https://github.com/chayeoi/blog/issues?page=2&q=is%3Aissue+is%3Aclosed" target="_blank">이슈</a>와 <a href="https://github.com/chayeoi/blog/releases" target="_blank">릴리즈 노트</a>, 커밋 히스토리를 체계적으로 관리</strong>하고자 노력했습니다.
            사용한 주요 기술 스택은 React, Gatsby, TypeScript, Emotion 등이며, 소스 코드는 <a href="https://github.com/chayeoi/blog" target="_blank">GitHub 저장소</a>에 공개되어 있습니다.
          `,
        },
        {
          name: '기술 문서 번역',
          period: '(Since Jan 2019)',
          value: 'translation',
          description: `
            <strong>React 공식 문서 한국어 번역 프로젝트인 <a href="https://github.com/reactjs/ko.reactjs.org" target="_blank">reactjs/ko.reactjs.org</a>의 Collaborator로써 참여</strong>하는 등, <a href="https://ko.reactjs.org/" target="_blank">React 공식 문서</a>, <a href="https://ko.javascript.info/" target="_blank">JAVASCRIPT.INFO</a>, <a href="https://developer.mozilla.org/ko/" target="_blank">MDN</a> 등 다양한 오픈소스 기술 문서의 한국어 번역에 지속적으로 참여하고 있습니다.
            <ul><li><a href="https://ko.reactjs.org/docs/lifting-state-up.html" target="_blank">State 끌어올리기 | ko.reactjs.org</a></li><li><a href="https://ko.reactjs.org/docs/hello-world.html" target="_blank">Hello World | ko.reactjs.org</a></li><li><a href="https://github.com/javascript-tutorial/ko.javascript.info/pull/873" target="_blank">Fetch: 중단 | ko.javascript.info</a></li></ul>
          `,
        },
      ],
    },
    skills: {
      title: '기술',
      content: [
        {
          name: '프론트엔드',
          items: [
            '주로 React를 사용하여 앱을 만듭니다. 재사용 로직을 분리하기 위해 커스텀 Hooks을 자유롭게 활용하고, 다양한 최적화 기법과 컴포넌트 디자인 패턴을 사용하는 데 익숙합니다. Suspense, SWR, React Query 등 React 생태계의 최신 기술을 사용하는 데 능숙합니다.',
            'TypeScript의 강력한 타입시스템을 활용하여 앱을 만드는 일을 좋아합니다.',
            'ES2015를 포함한 JavaScript 문법에 능숙하며, ECMAScript의 최신 명세와 동향을 꾸준히 살피고 학습합니다.',
            '합성, 커링, 재귀 등 함수형 프로그래밍 기법을 적극적으로 활용합니다.',
            'Storybook을 사용해 시각적 테스팅과 API 문서를 관리하는 등 컴포넌트 주도 개발을 실천할 수 있습니다.',
            'Jest와 React Testing Libary를 사용하여 프론트엔드 테스트 코드를 작성할 수 있습니다.',
            '항상 크로스 브라우징 이슈가 발생할 수 있는 지점을 민감하게 체크하고, 우아한 낮춤(Graceful Degradation)을 통해 구형 기술에 기반한 환경에서도 좋은 사용자 경험을 제공할 방법을 고민하는 일이 습관화되어 있습니다.',
            '웹 서비스를 설계할 때 겉으로 드러나는 시각적인 영역에만 집중하지 않고, 의미에 맞는 시맨틱 요소를 사용하고 웹 표준과 웹 접근성을 고려한 단단한 구조를 설계하는 데 많은 신경을 씁니다.',
          ],
        },
        {
          name: '백엔드',
          items: [
            'Firestore, Realtime Database, Cloud Storage, Cloud Function 등 Firebase의 다양한 기능을 사용하는 데 능숙합니다.',
            'Express 또는 Flask를 활용하여 간단한 웹 서버를 구축할 수 있습니다.',
          ],
        },
        {
          name: '그 외',
          items: [
            'Git을 사용한 워크플로우에 익숙하며, 변경 사항을 추적하기 쉽도록 이력을 자세하게 기록하고, 커밋 히스토리를 깔끔하게 유지하기 위해 Interactive Rebase를 적극적으로 활용합니다.',
            'Slack, Gmail 등 업무용 메신저를 사용한 비동기 커뮤니케이션에 익숙합니다.',
            '효율적인 협업과 커뮤니케이션에 늘 관심을 갖고, 회고를 통해 팀의 프로세스 또는 문화를 개선하기 위한 다양한 시도를 적극적으로 합니다.',
            '모르는 기술이 있더라도 필요하다면 능동적으로 찾아보고 학습하여 업무에 적극적으로 활용합니다.',
            'Notion, Jira, Confluence, ZenHub 등 다양한 협업 툴 사용에 익숙합니다.',
          ],
        },
      ],
    },
    activities: {
      title: '활동',
      content: [
        {
          name: '스파르타 코딩클럽',
          role: '프로그래밍 튜터',
          period: '(Jul 2020 - Sep 2020)',
          description: `
            비전공자 직장인들을 대상으로 한 웹 프로그래밍 교육을 진행했습니다.
            HTML, CSS, JavaScript와 Python 기반의 Flask 프레임워크 기본기를 학습하고 수강생들이 자신의 서비스를 직접 만들어보는 교육 과정이었고, 짧은 기간동안 코딩을 처음 접하는 분들에게 많은 내용을 압축해서 전달해야 했기 때문에 추상적인 개념을 이해하기 쉽게 설명할 방법을 지속적으로 고민했습니다.
          `,
        },
        {
          name: '매쉬업',
          role: 'IT 연합동아리',
          period: '(Mar 2018 - Dec 2019)',
          description: `
            IT 연합 동아리 MASH-UP에서 활동하며 여러 차례의 세미나와 테크톡 및 코드랩을 진행했습니다.
            또한 "웹 표준과 접근성을 고려한 웹 사이트 만들기", "웹 포트폴리오 만들기" 등 여럿 스터디의 리딩을 맡았습니다.
            <ul><li><a href="https://www.dropbox.com/s/b3jaigyrkm2m76p/scrum-guide.pdf?raw=1" target="_blank">스크럼 실전 가이드</a></li><li><a href="https://www.dropbox.com/s/i5h8z6g3uavdivd/thinking-in-hooks.pdf?raw=1" target="_blank">"클래스 컴포넌트"에서 "함수 컴포넌트 with Hooks"으로 생각 전환하기</a></li><li><a href="https://github.com/chayeoi/toys/tree/main/rgb-challenge" target="_blank">코드랩: RGB Challenge</a></li></ul>
          `,
        },
      ],
    },
    educations: {
      title: '교육',
      content: [
        {
          name: '동국대학교 수학교육과 졸',
          period: '(Mar 2010 - Feb 2018)',
          description: '교육에 대한 관심이 많아 대학에서 수학교육을 공부하던 중, 창업 아이디어가 생겨 무작정 휴학을 하고 관련 강의를 듣기도 하며 직접 서비스를 만들기 위한 역량을 기르고자 개발 공부를 시작했습니다.',
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
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GTAG_TRACKING_ID,
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
  ],
}
