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
      '메시지 응답 타입을 제네릭(Generic)으로 정의하여, 옵저버 등록 시 타입을 명시적으로 전달하도록 구성하였다.',
    ],
    insights: [
      'pub/sub 패턴을 통해 <b>타입 추가나 메시지 스펙 변경에 대한 비용이 감소</b>하였고, 특정 메시지가 어디서 처리되는지 파악하기 쉬워져 디버깅 효율도 향상되었다.',
      '옵저버를 <b>싱글톤 패턴으로 구현</b>하여 <b>중복 리스너 등록이나 메모리 누수에 대한 위험도 감소</b>할 수 있었다.',
    ],
    references: [],
  },
];

export default webviewDetail;
