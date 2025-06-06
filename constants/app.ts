const appDetail = [
  {
    title: '토큰 재발급 병목 해소를 통한 인증 안정성 강화',
    images: [
      { src: '/app/token-refresh-before.png', caption: '[Before 토큰 재발급 흐름]' },
      { src: '/app/token-refresh-after.png', caption: '[After 토큰 재발급 흐름]' },
    ],
    problem:
      '토큰 만료 시, 요청 중인 여러 API 요청이 동시에 실패(401)하면서 로그아웃 문제가 발생함',
    cause:
      '각 요청이 개별적으로 Refresh Token을 사용해 재발급을 시도하고, 첫 번째 재발급 요청만 성공하며 나머지 요청은 RTK 만료로 인해 로그아웃 처리됨',
    alternatives: [
      { text: 'Queue 기반의 요청 재처리 로직 도입', selected: true },
      { text: 'Access Token(ATK) 유효 시간 연장', selected: false },
      { text: 'ATK 만료 직전에 사전 재발급 시도', selected: false },
      { text: '백그라운드 만료 감지 후 갱신', selected: false },
    ],
    solution: [
      '다수의 요청이 동시에 401 오류를 받을 수 있는 환경에서 isRefreshing 플래그와 requestQueue를 이용한 구조를 도입하여, 토큰 재발급 중인 상태에서는 추가적인 재발급 요청을 차단하고 그 시점 이후 발생한 요청은 모두 큐에 저장한다. 재발급이 성공하면 큐에 저장된 요청을 다시 실행시켜 중복 요청을 방지하고, 사용자에게는 실패 없이 매끄러운 경험을 제공',
    ],
    insights: [
      '큐 기반 처리로 불필요한 서버 부하를 줄이고, 안정적인 사용자 경험을 제공할 수 있었다.',
      '하지만 첫 번째 재발급 요청이 완료되기까지 대기 중인 요청은 초기 응답 지연이 발생할 수 있는데, 특히 네트워크가 불안정한 상황에서는 재발급 지연이 더 심해져 응답 지연이 가시화될 수 있다.',
      '향후에는 백그라운드에서 토큰 만료를 감지해 갱신하는 전략을 병행하는 것이 효과적일 것같다.',
    ],
    references: [],
  },
  {
    title: '네트워크 장애 상황에서의 인증 흐름 개선 및 사용자 경험 향상',
    images: [
      {
        src: '/app/splash-error-before.png',
        caption: '[Before 스플래시 화면 흐름]',
      },
      {
        src: '/app/splash-error-after.png',
        caption: '[After 스플래시 화면 흐름]',
      },
    ],
    problem: '스플래시 화면에서 인증 오류 발생 시 사용자가 자동으로 로그아웃되는 현상이 발생함',
    cause:
      '클라이언트의 네트워크 장애나 서버 오류 상황에 대한 정교한 에러 핸들링이 부족하여, 일시적인 문제에도 토큰이 제거되어 로그아웃 처리됨',
    alternatives: [
      { text: '점진적 Retry → 이후 네트워크 상태 재확인 흐름 적용', selected: true },
      { text: 'API 요청 전 네트워크 상태 사전 확인', selected: false },
      { text: 'Queue를 활용한 요청 재시도(Retry) 구조 도입', selected: false },
    ],
    solution: [
      '네트워크 장애나 서버 오류로 인한 실패에 대해서는 인증 토큰을 제거하지 않도록 에러 핸들링 로직을 개선',
      '네트워크 불안정이 감지된 경우에는 재시도 없이 즉시 네트워크 장애 안내 페이지로 전환하여 불필요한 요청 감소',
      '일시적인 서버 오류(예: 블루/그린 배포 중 발생하는 5xx 오류)를 고려해, Exponential Backoff Retry 전략(1초 → 2초 → 4초, 최대 3회) 을 적용하여 사용자 요청의 안정성을 확보함',
    ],
    insights: [
      '프로세스 개선 및 정교한 에러 핸들링을 통해 불필요한 로그아웃 문제를 방지하고, 사용자 세션 유지의 안정성을 높일 수 있었다.',
      '모바일 환경처럼 네트워크가 불안정한 상황에서 앱이 사용자를 강제로 로그아웃시키는 경험은 신뢰도에 큰 영향을 줄 수 있기 때문에, 토큰 제거 조건을 정교하게 설계한 점이 주요한 개선 포인트였다.',
      '또한 Exponential Backoff Retry 적용으로 서버 오류에 대해 과도한 요청을 방지하면서도 회복 가능성을 고려한 요청 흐름을 설계할 수 있었으며, 이는 서버 부하 감소에도 기여했다.',
      '마지막으로 RTK 만료로 로그아웃된 사용자에게는 이전 로그인 수단을 안내하는 UI를 추가하여, 재로그인 과정을 빠르게 유도하고, 이탈을 줄이고자하였다.',
    ],
    references: [
      {
        label: '네트워크 에러에도 끊김 없는 스플래시 화면 설계하기',
        href: 'https://bangdori.kr/posts/handling-network-error-in-splash/',
      },
      {
        label: '네트워크 / 서버 에러 대응을 위한 추가적인 방안 적용',
        href: 'https://bangdori.kr/posts/handling-network-error-in-splash2/',
      },
    ],
  },
  {
    title: '로그인 상태에 따른 딥링크 처리 흐름 개선',
    images: [
      {
        src: '/app/deeplink-flow.png',
        caption: '[로그인 상태별 딥링크 흐름]',
      },
      {
        src: '/app/deeplink-demo.gif',
        caption: '[딥링크 클릭 시 로그인되지 않은 사용자의 화면 이동]',
      },
    ],
    problem: '딥링크 클릭 시 로그인 상태에 따라 올바른 화면으로 이동하지 못하는 문제가 발생함',
    cause:
      '로그인 여부를 고려한 분기 로직 없이 딥링크를 처리해, 로그인 전 상태에서는 의도한 목적지로의 이동이 보장되지 않았음',
    alternatives: [
      { text: 'Context를 활용한 딥링크 상태 보존', selected: true },
      { text: '로그인 여부를 검증하지 않고 목적지로 리디렉션', selected: false },
    ],
    solution: [
      '로그인을 필수로 요구하는 서비스 특성상, 비로그인 상태에서 딥링크로 접근 시 목적지로 바로 이동할 수 없는 문제가 존재하여, 딥링크로 들어온 경로를 전역 상태(Context)에 저장하고 로그인 완료 후 해당 경로로 리디렉션하는 방식을 도입함',
    ],
    insights: [
      '전역 상태를 활용한 경로 저장 및 리디렉션 방식은 로그인 후에도 사용자가 딥링크 목적지로 자연스럽게 이동할 수 있어 진입 흐름의 일관성이 확보되었다.',
      '마케팅 링크, 공유 링크 등 다양한 유입 경로에서도 사용자의 기대와 실제 앱 동작 간의 간극을 줄이는 데 기여하여, 서비스 접근성과 UX 측면에서 긍정적인 효과를 얻을 수 있었다.',
      '다만, 로그인하지 않은 사용자는 딥링크 내용을 즉시 확인하기 어려운 한계가 있으며, 이를 보완하기 위해 딥링크 클릭 시 웹 링크로 유도하여 로그인 절차 없이 내용을 확인할 수 있도록 하는 방식을 향후 적용하는 것이 효과적일 것이다.',
    ],
    references: [],
  },
  {
    title: '스토어 심사 지연 문제를 해결하기 위한 인앱 업데이트 프로세스 도입',
    images: [
      {
        src: '/app/inapp-update-process.png',
        caption: '[인앱 업데이트 프로세스]',
      },
    ],
    problem:
      '앱 스토어 심사로 인해 배포 시점이 최대 1~2일 지연되어, 긴급 수정이 즉시 이루어지지 않음',
    cause:
      '업데이트를 앱 심사 및 배포 완료 이후에만 적용할 수 있는 구조로 운영되어, 유연한 대응이 불가능했음',
    alternatives: [
      {
        text: '앱 마켓 심사를 거치지 않고도 업데이트할 수 있는 인앱 업데이트 도입',
        selected: true,
      },
      {
        text: '웹뷰를 활용해 앱 배포 없이도 화면 및 콘텐츠를 즉시 수정 가능한 구조 도입',
        selected: false,
      },
    ],
    solution: [
      '인엡 업데이트를 도입하여 앱 스토어 설치를 거치지 않고 앱 내부에서 변경된 코드와 리소스를 빠르게 반영할 수 있도록 개선',
      '긴급한 이슈 수정이나 마케팅 배너, 이벤트와 같은 변경 사항은 앱 심사 없이 평균 3분 이내로 배포 가능하도록 구조화함',
    ],
    insights: [
      '인앱 업데이트 도입을 통해 앱 심사를 거치지 않고도 빠르게 변경 사항을 반영할 수 있어, 긴급 대응 및 운영 유연성이 크게 향상되었다.',
      '그러나 실제 운영 과정에서는 네이티브 변경이 포함된 업데이트의 경우, 여전히 앱스토어 배포가 필요하기 때문에 인앱 업데이트 기능이 무용지물이 되는 경우도 존재한다.',
      '특히 네이티브 변경이 단순한 버전 증가인지, 기능적으로 영향이 있는 변경인지를 정확히 구분하기 어렵다는 점도 운영 상의 리스크로 작용했다.',
      '또한 앱스토어에서는 점진적 배포(Gradual Rollout)가 제한적이기 때문에, 장애 발생 시 조기 차단이나 롤백이 어렵다. 이에 따라 사전 대응을 위한 테스트 코드 강화 및 배포 전 시나리오 점검 절차 보완이 필요하다고 판단된다.',
    ],
    references: [
      {
        label: 'React Native In-App Updates (CodePush의 대안을 찾아서)',
        href: 'https://bangdori.kr/posts/inapp-update/',
      },
      {
        label: '체크박스 하나로 인앱 업데이트 제어하기 (with 이전 문제를 해결하며)',
        href: 'https://bangdori.kr/posts/inapp-update-2/',
      },
      {
        label: '사내 발표 자료 (Figma)',
        href: 'https://www.figma.com/slides/NiFlDC5SWfrkDPJtqOQ4kW/React-Native-%EC%9D%B8%EC%95%B1-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C?node-id=0-1&t=V69PJIdRloK7BBgK-1',
      },
    ],
  },
  {
    title: 'CI/CD 자동화 파이프라인 구축을 통한 배포 효율성 개선',
    images: [
      {
        src: '/app/ci-cd-pipeline.png',
        caption: '[CI/CD 자동화 배포 파이프라인]',
      },
    ],
    problem:
      'Android와 iOS 앱을 각각 수동으로 빌드하고 업로드해야 해 배포 과정에 반복적인 수작업이 발생하고, 작업 효율성이 저하됨',
    cause:
      '자동화된 CI/CD 파이프라인이 구축되어 있지 않고, 배포가 브랜치 전략이나 워크플로우와 연계되지 않아 매번 수동으로 처리해야 하는 구조로 운영되었음',
    alternatives: [
      { text: 'Github Actions를 활용한 자동화 배포 파이프라인 구축', selected: true },
      {
        text: '브랜치별로 다른 배포 전략(Fastlane, 환경 분리 등)을 설정해 목적에 맞는 배포 흐름 구성',
        selected: false,
      },
    ],
    solution: [
      'Github Actions를 활용하여 CI/CD 자동화 배포 파이프라인을 구축하고, 브랜치 전략에 따라 서로 다른 배포 경로를 적용함.',
      'main 브랜치로 PR이 머지되는 경우에는 앱 마켓(Play Store / App Store)에 자동 업로드되도록 설정하고, release 브랜치에 대해서는 Firebase App Distribution을 통해 팀원들에게 배포가 자동으로 이루어지도록 구성하여, 반복적인 수작업 없이 안정적인 배포 흐름과 작업 효율성을 확보함.',
    ],
    insights: [
      'CI/CD 자동화 도입으로 수동 배포 과정에서 발생하던 반복 작업과 인적 오류를 크게 줄일 수 있었고, 배포 속도와 안정성이 향상되었다.',
      '브랜치 전략과 연동된 자동화 배포 흐름을 구성함으로써, 개발 단계와 운영 단계의 배포가 명확히 분리되어 협업 효율도 개선되었다.',
      '또한 Slack 알림 연동을 통해 배포 결과를 실시간으로 공유하여 커뮤니케이션 속도와 투명성을 높일 수 있었다.',
    ],
    references: [],
  },
];

export default appDetail;
