const appDetail = [
  {
    title: '인증 토큰 갱신 병목 해결로 서버 부하 감소',
    images: [
      {
        src: '/images/token-refresh-before-after.png',
        caption: '[Before/After 시스템 아키텍처 다이어그램]',
      },
      { src: '/images/token-refresh-flow.png', caption: '[Works Bot 연동 플로우 및 작업 설계]' },
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
    solution:
      '다수의 요청이 동시에 401 오류를 받을 수 있는 환경에서 isRefreshing 플래그와 requestQueue를 이용한 구조를 도입하여, 토큰 재발급 중인 상태에서는 추가적인 재발급 요청을 차단하고 그 시점 이후 발생한 요청은 모두 큐에 저장한다. 재발급이 성공하면 큐에 저장된 요청을 다시 실행시켜 중복 요청을 방지하고, 사용자에게는 실패 없이 매끄러운 경험을 제공한다.',
    insights: [
      '큐 기반 처리로 불필요한 서버 부하를 줄이고, 안정적인 사용자 경험을 제공할 수 있었다.',
      '하지만 첫 번째 재발급 요청이 완료되기까지 대기 중인 요청은 초기 응답 지연이 발생할 수 있는데, 특히 네트워크가 불안정한 상황에서는 재발급 지연이 더 심해져 응답 지연이 가시화될 수 있다.',
      '향후에는 백그라운드에서 토큰 만료를 감지해 갱신하는 전략을 병행하는 것이 효과적일 것같다.',
    ],
  },
];

export default appDetail;
