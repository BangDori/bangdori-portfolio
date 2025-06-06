const adminDetail = [
  {
    title: '실시간 모바일 레이아웃 프리뷰 도입을 통한 공지사항 작성 UX 개선',
    images: [],
    problem:
      '웹에서 앱 공지사항을 작성할 때, 레이아웃 차이로 인해 실제 앱에서의 표시 상태를 반복적으로 확인하고 수정해야 하는 번거로움이 발생함',
    cause:
      '공지사항 작성 화면에서 앱 화면과 동일한 미리보기 또는 실시간 반영 기능이 없어, 작성자 입장에서 웹과 앱 간의 시각적 차이를 직접 비교하고 수정해야 하는 구조였음',
    alternatives: [
      { text: '앱 화면과 유사한 모바일 레이아웃 미리보기 UI 제공', selected: true },
      {
        text: '작성 중인 내용을 실시간으로 반영하는 프리뷰 영역을 도입하여 수정-검토 사이클 최소화',
        selected: false,
      },
    ],
    solution: [
      '공지사항 작성 화면에 모바일 레이아웃 기반의 실시간 미리보기 기능을 도입함으로써, 웹에서 작성하는 내용이 앱에서 어떻게 표시될지를 즉시 확인할 수 있도록 개선함',
    ],
    insights: [
      '모바일 레이아웃 미리보기 UI를 제공함으로써 공지사항 작성 시 불필요한 수정 반복을 줄이고, 작성 소요 시간을 30% 이상 단축할 수 있었다. 특히 작성자가 실시간으로 결과를 확인할 수 있어, 검토-수정 사이클을 줄이고 작성 편의성을 높이는 데 기여했다.',
    ],
    references: [],
  },
  {
    title: '매장 가입 승인 단계에 결제 모듈을 연동하여 안정성 개선',
    images: [],
    problem:
      '매장 가입 승인 과정에서 관리자가 최종 결제 정보를 수기로 입력함으로써, 입력 실수나 승인 오류 등 휴먼 에러의 리스크 존재',
    cause:
      '승인 처리와 결제 시스템 간의 연동이 없고, 별도 시스템에서 수동으로 확인 후 입력하는 구조로 운영',
    alternatives: [
      { text: '매장 가입 승인 단계에 결제 모듈을 직접 연동', selected: true },
      {
        text: '결제 유효성 검증 결과를 기반으로 승인 가능 여부를 자동 판단하도록 구조 조정',
        selected: false,
      },
    ],
    solution: [
      '승인 최종 단계에 결제 모듈을 연동하여, 결제 성공 여부가 확인된 경우에만 승인 처리가 가능하도록 구조를 개선함',
    ],
    insights: [
      '결제 모듈 연동을 통해 수기 입력 과정에서 발생하던 승인 오류와 휴먼 에러를 방지할 수 있었고, 승인 조건을 시스템적으로 명확히 정의함으로써 전체 프로세스의 안정성과 신뢰도를 높일 수 있었다.',
      '다만, 승인 판단을 위해서는 매장별 결제 정보가 정확히 연동되어야 하며, 현재는 실제 결제가 이뤄져야만 그 유효성을 검증할 수 있는 구조이기 때문에, 여전히 사람이 직접 확인하는 절차가 필요하다는 점이 과제로 남았다.',
    ],
    references: [],
  },
];

export default adminDetail;
