// ============================================================
// 포트폴리오 콘텐츠 데이터
// 글자/숫자만 바꾸고 싶으면 이 파일만 수정하면 됩니다.
// 컴포넌트(JSX)는 손댈 필요 없음 — 여기 값을 그대로 가져가서 화면에 그려줍니다.
// ============================================================

export const profile = {
  name: "황윤정",
  role: "Data Engineering 지망 · 백엔드 / 데이터 파이프라인",
  tagline: "성적표 한 장을 믿을 수 있는 데이터로 만드는 일을 혼자 끝까지 해봤습니다.",
  links: {
    github: "https://github.com/hvvrnz",
    velog: "https://velog.io/@0lalsoo",
    service: "https://www.zolver.co.kr",
  },
  hashtags: ["#제한된_자원의_최적화_마스터", "#데이터_신뢰성_집착"],
};

// 졸업요건 서비스 핵심 성과 — 숫자 카드용
export const stats = [
  { value: "172+", label: "가입자 수", sub: "2026.6.8 정식 런칭 이후" },
  { value: "2,538+", label: "누적 처리 과목 데이터", sub: "" },
  { value: "56개", label: "확보된 학과 데이터", sub: "사전 DB 구축 없이, 실사용 데이터만으로" },
  { value: "54%", label: "핵심 기능 전환율", sub: "성적표 업로드 또는 수기 등록까지" },
  { value: "86%", label: "파이프라인 파싱 성공률", sub: "ELK 로그 분석 기준" },
];

// 시작 배경 — 설문조사 지표
export const originSurvey = [
  { label: "수강신청 시 가장 어려운 점 → \u201C졸업요건 고려한 강의 선택\u201D", value: "79.4%" },
  { label: "에브리타임 사용률", value: "92.6%" },
  { label: "여전히 수기로 졸업요건 체크 (워드 · 엑셀 · 노션 · 메모장)", value: "64.8%" },
];

export const originStory = `Zolver는 졸업작품에서 출발했습니다. 초기 기획의 핵심 기능은 '시간표 추천'이었고, 이를 검증하기 위해 대학생 68명을 대상으로 설문조사를 진행했습니다.

설문을 분석하며 학생들이 정말 필요로 했던 건 시간표 추천이 아니라 '내가 졸업하려면 무엇이 더 필요한지'를 한눈에 확인하는 것이라는 걸 발견했습니다. 이 발견을 바탕으로 문제 정의를 다시 했고, 졸업요건 시각화 중심으로 서비스 방향을 전환했습니다. 이후 기획부터 개발, 운영까지 1인으로 끝까지 만들었습니다.`;

export const serviceIntro = {
  description:
    "학교 포털에서 다운로드한 공식 성적표(엑셀 파일)를 업로드하면, 자동으로 이수 과목을 분류하고 졸업까지 남은 요건을 한눈에 보여줍니다. 단순히 학점을 더하는 데서 그치지 않고, 태그 기반 세부 이수 현황 추적, 수강 시뮬레이션, GPA 분석, AI 수강 추천까지 제공합니다.",
  features: [
    { title: "이수 과목 등록", desc: "성적표 업로드 또는 직접 입력으로 수강 이력 등록" },
    { title: "졸업요건 분석", desc: "전공 · 교양 · 기타 학점 달성률 실시간 확인" },
    { title: "태그 관리", desc: "전공 · 교양 세부 영역을 직접 구성하고 최소 이수학점 설정" },
    { title: "수강 시뮬레이션", desc: "들을 과목을 미리 등록해 졸업요건 충족 여부 확인" },
    { title: "GPA 분석", desc: "학기별 추이 시각화, 목표 GPA 달성 시뮬레이션" },
    { title: "과목 모아보기", desc: "신뢰도 알고리즘으로 검증된 과목 검색" },
    { title: "AI 수강 추천", desc: "졸업요건 · GPA · 학번 · 학과 데이터 기반 추천 (Gemini API)" },
    { title: "카카오 로그인", desc: "카카오 OAuth 기반 간편 로그인" },
  ],
};

// 데이터 검증 파이프라인 3단계 — 다이어그램 + 설명 텍스트로 같이 사용
export const pipeline = [
  {
    stage: "L1",
    name: "물리 검증",
    detail: "파일 형식 · 용량 · 메타데이터 위변조 확인. 실패 시 로그 없이 즉시 파일 삭제(보안).",
    items: ["파일 존재 여부", "확장자(.xlsx)", "파일 크기 제한", "작성자/타임스탬프 정합성", "임시 경로 이동"],
  },
  {
    stage: "L2",
    name: "내용 검증 + ETL",
    detail: "고정 좌표 · 헤더 텍스트 매칭으로 양식 무결성 확인 후 추출 → 정규화 → DB 적재.",
    items: ["화이트리스트 스캔", "스키마 추출", "좌표 매핑", "데이터 변환", "lecture_evidence 적재"],
  },
  {
    stage: "L3",
    name: "신뢰도 엔진",
    detail: "Airflow 배치(로컬 · SSH 터널). 여러 사용자 데이터의 일치도를 점수화해 임계값을 넘으면 공식 데이터로 승격.",
    items: ["엑셀 출처 가중치 ↑", "수기 출처 가중치 ↓", "교육과정 매칭 보너스", "match_count ≥ 2 & score ≥ 1.5 → lecture_master 승격"],
  },
];

export const pipelineNote =
  "한 명의 성적표만 믿고 바로 데이터를 등록하면 오류나 조작에 취약합니다. 여러 사용자의 데이터가 쌓여 서로 일치할 때만 신뢰할 수 있는 데이터로 인정하는 방식을 택했습니다.";

// 트러블슈팅 — 카드형으로 펼쳐보기
export const troubleshooting = [
  {
    title: "재등록 사용자 데이터 중복",
    tag: "PostgreSQL · Trigger",
    problem:
      "재등록 사용자가 성적표를 다시 업로드하면 DB 트리거가 기존 row를 갱신하지 않고 새로 생성해, total_val_score와 match_count가 실제보다 부풀려졌습니다.",
    solution:
      "과목 · 학기 · 사용자를 조합한 고유 해시 snap_unique_hash로 기존 row 존재 여부를 먼저 검사하도록 변경. 동일 해시가 있으면 UPDATE, 없으면 INSERT로 분기하고, nullable 컬럼 중복까지 막기 위해 Partial Unique Index를 추가했습니다.",
  },
  {
    title: "유저마다 다른 성적표 양식",
    tag: "Parsing · anchor_resolver",
    problem:
      "인적사항 블록 반복, 행 전체가 밀리는 등 학교 성적표 양식이 사용자마다 조금씩 달라 고정 좌표 기준 파싱이 다수 실패했습니다.",
    solution:
      "'개인별 전체 성적조회'라는 고정 문구를 앵커로 위치를 동적으로 탐색하는 anchor_resolver를 설계. 앵커 기준 상대 좌표로 헤더 · 데이터 시작 행을 계산하고, 검증 실패 시 즉시 삭제 대신 동적 탐색을 한 번 더 시도하도록 순서를 변경했습니다.",
  },
  {
    title: "반복 실패 양식 탐지 (Schema Drift)",
    tag: "Elastic Stack · Kibana",
    problem:
      "Kibana에서 동일한 form_hash가 반복 실패하는 패턴을 발견. 학교 성적표 양식이 특정 학과 · 버전에서만 기존 파서와 맞지 않는 경우였습니다.",
    solution:
      "직접 만든 schema_drift_viewer.html로 실패 케이스의 셀 구조를 시각화해 비교. 단순 사용자 실수와 학교 시스템 양식 차이를 구분해, 후자만 L2 파서의 동적 앵커 탐색으로 수정했습니다.",
  },
  {
    title: "pandas mask()가 결측값을 None으로 안 바꾼 문제",
    tag: "ETL · pandas",
    problem:
      "df.mask(df.isna(), None)으로 NaN을 None으로 바꾸려 했지만, 숫자형 컬럼이 dtype을 유지하려 해서 치환이 무시됐습니다.",
    solution:
      "replace({np.nan: None})은 dtype 자체를 object로 바꿔주지만, NaT · pd.NA 등 다른 결측 형태까지 포괄하기 위해 최종적으로 df.where(pd.notnull(df), None)을 사용. '값을 바꾸는 것'과 '타입을 바꾸는 것'이 다른 문제라는 걸 배웠습니다.",
  },
  {
    title: "Docker Compose 변수 치환 타이밍",
    tag: "Docker Compose",
    problem:
      "로컬용 .env.local로 DB 이름을 zolver_db_local로 지정했는데, 실행하면 기본 .env의 zolver_db로 생성됐습니다.",
    solution:
      "compose.yml의 env_file은 컨테이너 실행 시점에 적용되지만, 변수 치환(\u0024{DB_NAME})은 파싱 시점에 일어나 기본 .env가 먼저 읽힌 것이 원인. --env-file .env.local을 명시해 파싱 시점에 올바른 파일을 읽도록 해결했습니다.",
  },
  {
    title: "한글 초성 검색 도입",
    tag: "Feature · Unicode",
    problem:
      "수강 시뮬레이션에서 과목명을 전체 입력해야 해서 불편했고, /courses/verified 246회 호출 로그 분석 결과 초성 입력 패턴이 다수 확인됐습니다.",
    solution:
      "완성형 한글 코드에서 '가'를 기준으로 588(21×28)씩 초성이 바뀌는 유니코드 규칙을 이용해 초성 추출 함수를 구현. '자료구조' → 'ㅈㄹㄱㅈ' 식으로 매칭되도록 했습니다.",
  },
];

// 설계 인사이트 (상속/조합, SQLAlchemy)
export const designInsights = [
  {
    title: "상속(공통 엔진) × 조합(독립 도구) 분리",
    body:
      "검증 단계가 늘수록 상속만으로는 깊이가 깊어져 코드가 경직됐습니다. BaseValidator는 상속으로 모든 검증기가 공유하는 공통 인터페이스(실행 엔진 · 실패 처리 · 로그 포맷)를 제공하고, 실제 추출 로직(Extractor)은 검증기 내부에 인스턴스로 보유하는 조합 방식으로 분리했습니다. 새로운 검증이 추가돼도 steps 리스트와 전용 Extractor만 교체하면 되는 구조입니다.",
    code: `class L2TranscriptValidator(BaseValidator):
    def __init__(self, file_path, user_id, email_hash):
        super().__init__(file_path, user_id, email_hash)
        self.steps = [
            self.verify_is_in_whitelist,
            self.verify_schema_coords,
        ]
        self.extractor = TranscriptExtractor(self.file_path)  # composition`,
  },
  {
    title: "SQLAlchemy 결과 처리 메커니즘 비교",
    body:
      "API 응답 속도와 메모리 효율을 위해 결과 추출 메서드를 상황별로 구분해서 썼습니다. scalar()는 단일 값만 추출해 불필요한 로우 인스턴스화를 막고, mappings()는 컬럼명 접근이 필요한 응답에 적합합니다. fetchone()은 커서를 열어둔 채 유지하지만 first()는 확인 즉시 커서를 닫아, 단건 조회엔 first(), 배치의 반복 순회엔 fetchone()을 사용하도록 정리했습니다.",
    code: null,
  },
];

// AI 활용 경험 (지원서 경험기술서 1 기반)
export const aiStory = {
  title: "AI 수강 추천 — 두 번의 실패 끝에 찾은 구조",
  lead:
    "“추천의 품질은 AI 모델보다 입력 데이터의 신뢰성과 파이프라인 안정성에 좌우된다.” 모든 걸 AI로 자동화하려다 실패하고, AI 없이 직접 해결하려다 또 실패한 끝에 도달한 결론입니다.",
  failures: [
    {
      title: "1차 시도 — 완전 자동화",
      desc: "학과 · 연도별 요람 PDF를 AI로 파싱해 DB를 정규화하려 했지만 환각이 심해 프롬프트 수정만으로 통제되지 않았고, 검증 수동 작업이 오히려 두 배로 늘어 포기했습니다.",
    },
    {
      title: "2차 시도 — AI 없이 직접 파싱",
      desc: "테이블 PDF에서 텍스트가 중간에 잘리는 문제(\u201C디자인대학\u201D → \u201C디자인대\u201D)가 반복되고, 매년 바뀌는 양식(2024년 의대 신설 등)에 기존 로직이 범용적으로 통하지 않았습니다.",
    },
  ],
  resolution:
    "결국 핵심은 신뢰할 만한 데이터 확보였습니다. 사용자가 업로드한 성적표가 누적되며 신뢰도 점수 기준으로 검증된 과목 데이터로 승격되는 자체 데이터 거버넌스 시스템을 설계했고, 사전 DB 구축 없이 50개 넘는 학과 데이터를 확보했습니다.",
  implementation:
    "백엔드에서 커스텀 Sort Key로 후보를 추린 뒤 LLM에 전달하는 구조입니다. 기준은 1) 전공필수 과목, 2) 학수번호 앞 네 자리(학과 코드) 기준 동일 학번대 학생의 실제 이수 빈도(admission_stats), 3) 최근 개설 연도순. 매번 API를 호출하는 비효율을 줄이기 위해 추천 결과를 DB에 저장하고 30분 캐시를 적용했습니다.",
};

export const techStack = [
  { name: "FastAPI", desc: "비동기 처리와 Pydantic 기반 데이터 검증" },
  { name: "PostgreSQL · SQLAlchemy", desc: "관계형 데이터 정합성 관리, ::jsonb 캐스팅 충돌은 CAST(:param AS jsonb)로 해결" },
  { name: "Apache Airflow", desc: "로컬에서 SSH 터널로 서버 DB에 연결해 검증 파이프라인 자동화" },
  { name: "Elastic Stack", desc: "검증 실패 로그 인덱싱, 재업로드 패턴과 양식 오류 모니터링" },
  { name: "React", desc: "Kakao OAuth 인증 및 사용자 대시보드 UI" },
  { name: "Docker Compose · Nginx · AWS EC2", desc: "1GB RAM 환경에서도 안정적으로 동작하도록 인프라 구성" },
];

// 끈질긴 실행 — 자소서 3 기반, 짧게
export const perseverance = {
  quote: "하기로 했으니까, 그리고 실제 작동하는 URL이 나오지 않으면 그동안의 시간이 아무 의미가 없어지니까.",
  body:
    "RAM이 뭔지, API가 뭔지도 모르는 수준에서 졸업을 유예하고 졸업요건 관리 서비스를 기획부터 구현, 운영까지 5개월간 혼자 끌고 갔습니다. 같은 길을 가는 친구도, 물어볼 현직자도 없어 방향이 맞는지조차 확신할 수 없었지만, 매일 조금씩 쌓아가며 결국 서비스를 배포했습니다.",
};

// 손필기 노트 — 실제 스캔 이미지가 준비되면 src/assets/notes/ 에 넣고 image 경로만 교체하면 됩니다.
export const studyNotes = {
  intro:
    "전과 후에도 회로 관련 과목에서 반복적으로 어려움을 겪다, 4학년 운영체제 수업이 전환점이 됐습니다. 하드웨어의 논리적 · 물리적 동작을 직접 손으로 그려가며 정리하는 습관이 그때부터 지금까지 이어지고 있습니다.",
  items: [
    { topic: "Race Condition · 동기화", caption: "공유 자원에 여러 장비가 동시 접근할 때 충돌을 막는 원리 — Zolver의 동시 업로드 처리에도 그대로 적용됨", image: null },
    { topic: "Semaphore", caption: "세마포어 구현 중 막혔던 부분을 직접 그려가며 정리한 노트", image: null },
    { topic: "가상 메모리", caption: "페이지 테이블과 주소 변환 과정을 단계별로 그려본 노트", image: null },
    { topic: "컴퓨터 구조", caption: "가장 어려웠던 과목 — 처음으로 전공 서적을 직접 구매하게 만든 과목", image: null },
  ],
};

export const footer = {
  note: "Frontend는 빠르게, Backend · Data Pipeline은 꼼꼼하게 — 데이터 엔지니어링 지망에 맞춘 전략적 분업입니다.",
};
