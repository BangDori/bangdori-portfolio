const webviewDetail = [
  {
    title: '웹뷰 메시지 통신의 구조적 개선을 위한 옵저버 패턴 적용',
    images: [
      {
        src: '/webview/observer-pattern-before.png',
        caption: '[옵저버 패턴 적용 전]',
      },
      {
        src: '/webview/observer-pattern-after.png',
        caption: '[옵저버 패턴 적용 후]',
      },
    ],
    problem:
      '웹뷰 메시지를 처리하는 로직이 중복되고 분산되어 있어, 메시지 흐름을 예측하기 어렵고 유지보수 및 확장 시 에러 발생 가능성이 높음',
    cause: [
      '메시지를 수신할 때 관심사에 따라 분리된 구조가 아닌 <b>브로드캐스트 방식으로 전달</b>되어 <b>관심 없는 메시지까지 수신</b>',
    ],
    alternatives: [
      {
        text: '옵저버(Observer) 패턴을 적용해, 각 컴포넌트가 자신이 필요한 메시지 타입만 구독하도록 구성',
        selected: true,
      },
    ],
    solution: [
      '<b>pub/sub 패턴을 도입</b>하여 메시지를 중앙에서 수신하고, <b>관심사에 대해서만 구독</b>하도록 리팩터링하여 메시지 수신/처리의 관심사를 분리하였다.',
      '제네릭 타입을 활용해 메시지 구조를 명확하게 정의하고, 각 구독자가 처리하는 메시지 타입에 대한 타입 안정성을 보장하였다.',
      '또한, 싱글톤 패턴을 적용해 메시지 Publisher 인스턴스의 유일성을 보장함으로써 중복 리스너 등록을 방지하였다.',
    ],
    insights: [
      '기존의 분산된 이벤트 리스너 구조를 중앙화함으로써, <b>메시지 흐름을 예측 가능하게 만들고</b> 디버깅이 훨씬 용이해졌다.',
      '제네릭 타입과 pub/sub 패턴 덕분에 메시지 스펙 변경 시 각 컴포넌트에서의 수정 범위가 명확해지고, <b>확장성과 유지보수성이 크게 향상</b>되었다.',
    ],
    references: [
      {
        label: '웹뷰 메시지 수신 구조를 옵저버 패턴으로 리팩토링하기',
        href: 'https://www.bangdori.kr/blog/webview-message-observer-refactor',
      },
    ],
  },
];

export default webviewDetail;
