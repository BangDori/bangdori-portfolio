const appDetail = [
  {
    title: '토큰 재발급 병목 해소를 통한 인증 안정성 강화',
    images: [
      { src: '/app/token-refresh-before.png', caption: '[Before 토큰 재발급 흐름]' },
      { src: '/app/token-refresh-after.png', caption: '[After 토큰 재발급 흐름]' },
    ],
    problem:
      'ATK(Access Token) 만료 후 여러 API 요청이 동시에 401 오류를 받으며 로그아웃 문제가 발생',
    cause: [
      '오류를 받은 요청들이 동시에 RTK(Refresh Token)으로 토큰 재발급을 시도하지만, 시스템은 <b>RTR(Rotate Refresh Token)</b> 기법을 적용하고 있어 <b>토큰 재발급 시 RTK도 함께 갱신</b>되며 이전 RTK는 즉시 만료',
      '따라서 첫 번째 요청만 재발급에 성공하고, 이후 요청들은 만료된 RTK를 사용해 로그아웃 처리',
    ],
    alternatives: [
      { text: '재발급 중복 방지 + 요청 대기 큐 도입', selected: true },
      { text: 'ATK 유효 시간 연장', selected: false },
      { text: 'ATK 만료 직전에 사전 재발급 시도', selected: false },
      { text: '백그라운드에서 토큰 만료 감지 및 자동 갱신 처리', selected: false },
    ],
    solution: [
      '동시에 401 오류가 발생할 수 있는 상황에 대비해, 토큰 재발급 중에는 <b>이후 요청을 대기열에 저장</b>하고, 재발급이 완료된 후 <b>새 토큰으로 인증 정보를 갱신</b>해 순차적으로 요청을 처리하는 방식으로 문제를 해결하였다.',
    ],
    insights: [
      '요청 대기 큐를 통해 안정적인 사용자 경험을 제공할 수 있었고, 불필요한 서버 부하를 줄일 수 있었다.',
      '다만, 재발급이 완료되기 전까지 요청이 대기하게 되므로 초기 응답 지연이 발생할 수 있고, 특히 네트워크가 불안정한 환경에서는 이 지연이 체감될 수 있다. 이 점을 보완하기 위해, 백그라운드에서 토큰 만료를 감지하고, 자동으로 갱신하는 전략을 병행한다면 사용자 경험을 더욱 매끄럽게 만들 수 있을 것으로 예상된다.',
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
    problem:
      '스플래시 화면에서 인증 관련 API에 네트워크 에러 발생 시, 클라이언트 에러가 아님에도 불구하고 사용자가 자동 로그아웃되는 현상 발생',
    cause: [
      '클라이언트 인증 오류와 일시적인 네트워크 장애에 대한 <b>예외 처리가 분리되어 있지 않아</b>, 모든 에러 발생 시 일괄적으로 인증 토큰을 삭제하고 사용자를 로그아웃 처리',
    ],
    alternatives: [
      { text: '점진적 Retry 이후 네트워크 상태 재확인 흐름 적용', selected: true },
      { text: 'API 요청 전 네트워크 상태 사전 확인', selected: false },
      {
        text: 'Queue에 요청 저장 후, 네트워크 복구 후 자동으로 활용한 요청 재시도',
        selected: false,
      },
    ],
    solution: [
      '네트워크 장애(5xx)의 경우 재시도 없이 즉시 네트워크 장애 안내 페이지로 전환하였다.',
      '서버 오류의 경우에는 <b>블루/그린 배포</b>와 같은 특수 상황을 고려해, <b>Exponential Backoff Retry 전략(1초 → 2초 → 4초, 최대 3회)</b>을 적용하였다.',
    ],
    insights: [
      '프로세스 개선 및 정교한 에러 핸들링을 통해 불필요한 로그아웃 문제를 방지하고, 사용자 세션 유지의 안정성을 높일 수 있었다.',
      'Exponential Backoff Retry 전략을 도입함으로써, 회복 가능성을 고려한 요청 흐름을 구성하고 불필요한 반복 요청을 줄여 서버 부하 감소에도 기여하였다.',
      'Jest + React Native Testing Library를 활용해 API 요청을 모킹하고 예외 시나리오에 대해 테스트를 검증하였지만, <b>MSW(Mock Service Worker)를 활용하여 더 실제에 가까운 HTTP 모킹 도구를 사용했다면 정교한 통합 테스트 환경 구축도 가능</b>했을 것이다.',
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
        src: '/app/deeplink-result.png',
        caption: '[딥링크 개선 적용 후 신규 설치 사용자 수 변화]',
      },
      {
        src: '/app/deeplink-demo.gif',
        caption: '[로그인 후 딥링크 목적지로 이동]',
      },
    ],
    problem: '딥링크 클릭 시 로그인 상태에 따라 목적지로 이동하지 못하는 문제가 발생',
    cause: [
      '딥링크 접근 시 <b>로그인 여부를 판별하는 로직이 없어</b>, 비로그인 상태에서는 인증 후에도 원래 목적지로 이동이 보장되지 않음',
    ],
    alternatives: [
      { text: 'Context를 활용한 딥링크 상태 보존', selected: true },
      { text: '로그인 여부를 검증하지 않고 목적지로 리디렉션', selected: false },
    ],
    solution: [
      '딥링크로 접속 시 경로를 <b>Context에 저장</b>하고, <b>로그인 후 해당 경로로 리디렉션</b>하는 방식을 도입하였다.',
    ],
    insights: [
      '전역 상태를 활용한 경로 저장 및 리디렉션 방식은 로그인 후에도 사용자가 딥링크 목적지로 자연스럽게 이동할 수 있어 진입 흐름의 일관성이 확보되었다.',
      '마케팅 링크, 공유 링크 등 다양한 외부 유입 경로에서 사용자의 기대와 실제 앱 동작 간의 간극을 줄이는 데 기여했으며, 결과적으로 <b>서비스 접근성과 UX 향상에 긍정적인 영향</b>을 주었다.',
      '다만, 로그인하지 않은 사용자는 딥링크 내용을 즉시 확인하기 어려운 한계가 있으며, 이를 보완하기 위해 딥링크 클릭 시 앱이 설치되어 있지 않다면 웹 링크로 유도하여 내용을 즉시 확인할 수 있도록 하는 방식을 적용하는 것이 효과적일 것이다.',
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
    problem: '<b>앱 스토어 심사로 인해 배포 시점이 최대 1~2일 지연</b>되어, 긴급 수정의 어려움',
    cause: ['업데이트를 앱 심사 완료 이후에만 적용할 수 있는 구조로 운영되어, 유연한 대응 불가능'],
    alternatives: [
      {
        text: '앱 내부에서 업데이트할 수 있는 인앱 업데이트 도입',
        selected: true,
      },
      {
        text: '웹뷰를 활용해 앱 배포 없이도 화면 및 콘텐츠를 즉시 수정 가능한 구조 도입',
        selected: false,
      },
    ],
    solution: [
      '인앱 업데이트를 도입하여 앱 스토어 설치를 거치지 않고 <b>앱 내부에서 변경된 코드와 리소스를 평균 3분 이내로 빠르게 배포 가능</b>하도록 개선하였다.',
    ],
    insights: [
      '인앱 업데이트 도입을 통해 앱 심사를 거치지 않고도 빠르게 변경 사항을 반영할 수 있어, 긴급 대응 및 운영 유연성이 크게 향상되었다. 실제로 <b>앱에서 UI가 깨지는 문제와 프로필 재설정 시 이미지가 삭제되는 버그를 빠르게 수정</b>할 수 있었다.',
      '그러나 <b>네이티브 모듈 수정이 포함된 업데이트의 경우, 여전히 앱스토어 배포가 필요하기 때문에 인앱 업데이트 기능이 무용지물</b>이 되는 경우도 존재한다. 특히, 네이티브 변경이 단순한 버전 증가인지, 기능적으로 영향이 있는 변경인지를 정확히 구분하기 어렵다는 점도 운영 상의 리스크로 작용했다.',
      '또한 <b>인앱 업데이트에 대한 점진적 배포(Gradual Rollout)가 제한적</b>이기 때문에, 장애 발생 시 조기 차단이나 롤백이 어렵다. 이에 따라 사전 대응을 위한 테스트 코드 강화 및 배포 전 시나리오 점검 절차 보완이 필요하다고 판단된다.',
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
      'Android와 iOS 앱을 각각 <b>수동으로 빌드하고 업로드하여 반복적인 수작업이 발생 및 작업 효율성 저하</b>',
    cause: [
      '자동화된 CI/CD 파이프라인이 구축되어 있지 않고, 배포가 브랜치 전략이나 워크플로우와 연계되지 않아 매번 수동으로 처리해야 하는 구조로 운영',
    ],
    alternatives: [{ text: 'Github Actions를 활용한 자동화 배포 파이프라인 구축', selected: true }],
    solution: [
      'Github Actions를 활용하여 <b>CI/CD 자동화 배포 파이프라인을 구축하고, 브랜치 전략에 따라 서로 다른 배포 경로를 적용</b>하였다.',
      'production 배포 PR이 머지되는 경우에는 앱 마켓(Play Store / App Store)에 자동 업로드되도록 설정하고, staging 배포에 대해서는 Firebase App Distribution을 통해 팀원들에게 배포가 자동으로 이루어지도록 구성하였다.',
    ],
    insights: [
      'CI/CD 자동화 도입으로 수동 배포 과정에서 발생하던 반복 작업과 인적 오류를 크게 줄일 수 있었고, 배포 속도와 안정성이 향상되었다.',
      '브랜치 전략과 연동된 자동화 배포 흐름을 구성함으로써, 개발 단계와 운영 단계의 배포가 명확히 분리되어 협업 효율도 개선되었다.',
    ],
    references: [],
  },
];

export default appDetail;
