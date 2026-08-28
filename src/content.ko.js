// ============================================================
// 포트폴리오 콘텐츠 (한국어 - 쉬운 버전)
// 처음 보는 사람도 이해할 수 있도록 전문 용어를 풀어서 설명했습니다.
// ============================================================

export const profile = {
  name: "황윤정 (hvvrnz)",
  greeting: "안녕하세요, 황윤정입니다.",
  role: "데이터 엔지니어링 · 백엔드 / 인프라 설계",
  tagline: "깊이 있게 공부하고, 배운 걸 기록하며, \n 그 과정을 통해 성장하는 걸 좋아합니다.",
  current: "요기요 × Oracle 해커톤에서 팀으로 본선에 진출해 프로젝트를 진행했습니다.",
  links: {
    github: "https://github.com/hvvrnz",
    velog: "https://velog.io/@0lalsoo",
    service: "https://www.zolver.co.kr",
  },
  hashtags: ["#긍정적", "#자원_최적화", "#데이터_정합성", "#문제해결"],
  certifications: ["정보처리기사", "SQLD"],
};

// 핵심 운영 지표
export const stats = [
  { value: "309+", label: "가입자 수", sub: "2026.6.8 정식 런칭 이후 (login_sessions 기준)" },
  { value: "5,558+", label: "누적 처리 과목 데이터", sub: "lecture_evidence 전체 row 수 (중복 포함)" },
  { value: "63개", label: "확보된 학과 데이터", sub: "사전에 학과별 데이터베이스를 따로 만들지 않고 모은 수" },
  { value: "54%", label: "핵심 기능 전환율", sub: "방문자 중 성적표를 업로드하거나 직접 과목을 등록한 비율" },
  { value: "86%", label: "파이프라인 파싱 성공률", sub: "업로드된 성적표를 자동으로 읽어내는 데 성공한 비율 (로그 분석 기준)" },
  { value: "47.9%", label: "가입 → 성적표 업로드 전환율", sub: "순수 가입자 309명 중 148명이 성적표 업로드 (login_sessions, users 기준)" },
  { value: "11명", label: "성적표 없이 수기 입력만으로 이용 중인 사용자", sub: "transcript_upload_count = 0 이지만 실제 과목 데이터를 보유한 유저 수" },
  { value: "1,637건", label: "누적 확보된 고유 과목 데이터", sub: "lecture_code · name · category 조합 기준 중복 제거" },
];

// 시작 배경 — 서비스 방향을 바꾼 설문 결과
export const originSurvey = [
  { label: "수강신청 시 가장 어려운 점 → \n \u201C졸업요건 고려한 강의 선택\u201D", value: "79.4%" },
  { label: "에브리타임(시간표 앱) 사용률", value: "92.6%" },
  { label: "수기로 졸업요건 체크 \n (워드 · 엑셀 · 노션 · 메모장)", value: "64.8%" },
];

export const originStory = `Zolver는 졸업작품으로 시작했습니다. 처음에는 '시간표 추천' 기능을 핵심으로 잡고, 대학생 68명을 대상으로 설문조사를 했습니다. \n 2025년 11월, 팀원들과 함께 로컬환경에서 개발을 완료하여 작품을 마무리하였습니다.\n 
그러나 프로젝트가 마무리 된 후 저는 곰곰이 생각해보았습니다. \n
시간표를 잘 추천해도, 수강신청 자체에 실패하면 아무 의미가 없는 기능이 아닐까? \n 설문 결과를 살펴보며, 학생들이 진짜 필요로 할 건 시간표 추천 보다도'내가 졸업하려면 뭐가 더 필요한지'를 한눈에 보는 것이라는 걸 알게 됐습니다. \n 
그래서 서비스의 중심을 '졸업요건을 커스텀 하여 정리하면 깔끔하게 보여주는 것'으로 다시 정했고, 기획부터 개발, 운영까지 전부 직접 했습니다. \n 런칭 이후에는 운영자로서 사용자 문의와 버그 리포트에 직접 대응하며 서비스를 이어가고 있습니다. \n 아래는 졸업작품 당시 진행했던 설문조사 결과입니다.`;

// 운영 중 실제 사용자 응대 기록 (증거 사진)
// export const originEvidence = {
//   caption: "오픈채팅으로 들어온 실제 사용자 문의에 직접 대응한 기록입니다.",
//   images: ["userSupportChat1", "userSupportChat2"],
// };

export const serviceIntro = {
  description:
    "학교 포털에서 다운로드한 공식 성적표(엑셀 파일)를 올리면, 자동으로 어떤 과목을 들었는지 분류하고 졸업까지 뭐가 더 필요한지 보여줍니다. 단순히 학점만 더하는 게 아니라, 세부 항목별 이수 현황 추적, 수강 시뮬레이션, 평점(GPA) 분석, AI 수강 추천까지 제공합니다.",
  features: [
    { title: "이수 과목 등록", desc: "성적표를 올리거나, 성적표 없이 기본정보만 입력하는 간단한 등록으로 유저가 되면, 모든 기능을 이용할 수 있습니다.", image: null },
    { title: "졸업요건 분석", desc: "전공 · 교양 · 기타 학점을 얼마나 채웠는지 바로 확인 가능합니다.", image: null },
    { title: "태그 관리", desc: "전공 · 교양의 세부 영역을 직접 만들고 최소 이수학점을 커스텀 할 수 있습니다.", image: null },
    { title: "수강 시뮬레이션", desc: "앞으로 들을 과목을 미리 넣어보고 졸업요건이 채워지는지 확인 가능합니다.", image: null },
    { title: "GPA 분석", desc: "학기별 평점 변화를 그래프로 보고, 목표 평점을 달성하는 시뮬레이션입니다.", image: null },
    { title: "과목 모아보기", desc: "관리자가 등록하고 신뢰도 점수로 검증된 과목 정보를 검색하여 해당 과목을 이수한 학번 별 이수 현황을 확인 가능합니다.", image: null },
    { title: "AI 수강 추천", desc: "졸업요건 학번 · 학과 데이터를 바탕으로 추천 (Gemini API 사용) 받아볼 수 있습니다.", image: null },
    { title: "카카오 로그인", desc: "카카오 계정으로 한 번으로 간편하게 로그인 할 수 있습니다.", image: null },
  ],
};

// 아키텍처 다이어그램 — 실제 시스템 구조
export const architecture = {
  intro:
    "인프라 아키텍처, 파이프라인 구조, ERD입니다.",
  infra: {
    title: "서버 구조",
    caption:
      "서버 한 대(AWS EC2, Ubuntu, 메모리 1GB)로 운영합니다. \n 프론트엔드는 도커 컨테이너로 띄우는 대신 React 빌드 결과물을 정적 파일로 변환해 Nginx가 직접 서빙하도록 했습니다. 컨테이너로 띄울 경우 추가 프로세스가 상주하면서 메모리를 점유하게 되는데, 1GB 메모리 환경에서는 이 오버헤드가 부담이 크다고 판단했습니다. \n Nginx는 API 프록시 역할로 이미 떠있는 프로세스이기 때문에, 현재로선 정적 파일 서빙을 추가해도 별도의 메모리 점유가 거의 발생하지 않습니다. \n 다만 사용자 수가 크게 늘어나거나 해외 사용자가 유입되는 시점, 혹은 빌드 파일 중 다량의 이미지 혹은 비디오 파일을 서빙해야하는 경우 빌드 파일을 S3·CloudFront 기반 CDN으로 분리해 EC2가 API 처리에만 집중하도록 전환하는 방법도 좋을 것같다고 생각합니다. \n 1단계·2단계 검증은 업로드 즉시 같은 서버 안에서 처리되고 결과를 PostgreSQL에 저장합니다. 3단계 신뢰도 계산은 메모리가 적은 운영 서버 대신 제 컴퓨터에서 정해진 시간마다(Airflow) 실행하고, SSH로 안전하게 연결해서 운영 데이터베이스에 접근합니다 — 서버가 무거운 작업까지 직접 하지 않도록 나눴습니다.",
  },
  pipeline: {
    title: "전체 검증 과정 파이프라인",
    caption:
      "총 3단계 검증으로 나눠집니다. 1단계 검증에서 실패한 데이터는 기록을 남기지 않고 바로 삭제합니다. 1차 검증은 어느 단계에서 실패했는지에 대한 로그 여부만 알 뿐, 무슨 파일인지 그 내용은 알 수 없습니다. 파일명만 기록됩니다. 악의적인 업로드를 방지를 위한 설계입니다. \n 2단계 실패는 나중에 패턴을 분석하기 위해 로그로 남깁니다. 파일 내용을 마스킹하여 로그로 확인 가능하고, 2단계 검증에서도 whitelist 내의 단어가 존재하지 않는, 성적표와 무관한 파일이 올라올 시에도, 마스킹 하지 않고 파일 내용 로그를 적재하지 않아, 내용을 알 수 없습니다. \n 2단계 검증을 마친 과목 데이터들은 스냅샷 형태로 저장되며, 3단계는 따로 정해진 시간에 로컬 배치로 실행되고, 신뢰도 점수가 일정 기준을 넘은 데이터만 정식 데이터로 승격되는 구조입니다.",
  },
  erd: {
    title: "ERD",
    caption:
      "업로드된 원본 데이터(lecture_evidence)가 규칙별 검증 결과(lecture_validation)로 이어지고, 이 결과들이 모여서 신뢰도 점수(lecture_frequency)가 계산됩니다. 신뢰도 점수가 기준을 넘은 데이터만 정식 과목 정보(lecture_master)로 등록되고, 앱의 다른 기능들은 이 정식 데이터만 사용합니다.",
    designNote:
      "일부러 데이터를 중복 저장한 부분도 있습니다. 메모리 1GB짜리 서버에서는 트래픽이 몰릴 때 JOIN 연산이 데이터를 중복 저장하는 것보다 더 위험하다고 판단했습니다. 그래서 테이블 개수와 데이터 양을 고려해, 역정규화를 시행하여 단순 조회 위주로 설계했습니다.",
  },
};

// 트러블슈팅 (문제 해결 경험)
export const troubleshooting = [
  {
    title: "재업로드 시 데이터가 중복으로 쌓이던 문제",
    tag: "PostgreSQL · 트리거(자동 실행 로직)",
    problem:
      "탈퇴 후 다시 가입한 사용자가 성적표를 또 올리면, 데이터베이스가 기존 데이터를 업데이트하지 않고 새로 만들어서, 신뢰도 점수와 누적 횟수가 실제보다 더 크게 잘못 계산됐습니다.",
    solution:
      "과목 + 학기 + 사용자 정보를 합쳐서 만든 고유 값(snap_unique_hash)을 추가하고, 데이터를 저장하기 전에 이 값으로 이미 있는 데이터인지 먼저 확인하도록 만들었습니다: 있으면 업데이트, 없으면 새로 추가. 빈 값(NULL)끼리도 중복으로 잡힐 수 있는 경우까지 막기 위해, 조건이 붙은 유니크 인덱스(특정 조건에서만 중복을 막는 제약)도 추가했습니다.",
  },
  {
    title: "같은 양식이 반복적으로 실패하는 문제 원인 파악",
    tag: "로그 분석 (Elastic Stack · Kibana)",
    problem:
      "로그 분석 화면(Kibana)에서 같은 양식 패턴(form_hash)이 여러 사람한테서 반복적으로 실패하는 게 보였습니다 — 특정 학과나 특정 버전의 성적표를 프로그램이 아직 읽지 못하는 경우였습니다.",
    solution:
      "schema_drift_viewer.html이라는 화면을 직접 만들어서, 실패한 성적표의 칸 구조를 시각적으로 비교할 수 있게 했습니다. Elk로 분석에 실패한 성적표 파일의 로그를 긁어서 해당 도구에 붙여넣으면 엑셀파일 형식으로 변환하여 보여줍니다. 다운로드 과정에서 발생한 양식 변경인 경우만 골라서 프로그램이 새 양식도 읽을 수 있게 해결 중입니다.",
    images: ["schemaViewerInput", "schemaViewerGrid"],
  },
  {
    title: "결측값이 처리 되지 않았던 문제",
    tag: "데이터 처리 · pandas",
    problem:
      "df.mask(df.isna(), None)이라는 코드로 성적표 엑셀 파일의 빈 값(NaN)을 None으로 바꾸려 했는데, 숫자로 된 칸에서는 이 코드가 아무 효과 없이 무시됐습니다.",
    solution:
      "비슷한 코드인 replace({np.nan: None})을 써봤지만, 이건 칸의 타입은 바꿔주는데 다른 종류의 빈 값(NaT, pd.NA)은 바뀌지 않고 무시되었습니다. 결국 df.where(pd.notnull(df), None)이라는 코드로 해결했습니다. '값만 바꾸는 것'과 '타입까지 바꾸는 것'이 서로 다른 문제라는 걸 알게 된 경험이었습니다.",
  },
  {
    title: "설정 파일을 읽는 순서 때문에 생긴 문제",
    tag: "Docker Compose",
    problem:
      "로컬 개발용 설정 파일(.env.local)에 데이터베이스 이름을 zolver_db_local로 정해뒀는데, 컨테이너(프로그램을 실행하는 환경)는 계속 기본 설정 파일(.env)에 있는 zolver_db로 실행됐습니다.",
    solution:
      "compose.yml에 적힌 env_file은 컨테이너를 켤 때 적용되지만, 그 안의 변수(${DB_NAME})는 그보다 먼저 해석되기 때문에 기본 설정 파일이 먼저 읽혔던 게 원인이었습니다. --env-file .env.local이라고 직접 지정해서, 변수가 해석되는 시점에 올바른 파일을 읽게 만들어 해결했습니다.",
  },
  {
    title: "한글 초성으로 과목 검색하기",
    tag: "기능 추가 · 유니코드",
    problem:
      "수강 시뮬레이션 화면에서 과목 이름을 전부 입력해야 해서 불편했습니다. 실제 api 호출 로그(246번의 호출 기록)를 분석해보니 초성만 입력하는 패턴이 많이 보였습니다.",
    solution:
      "한글 한 글자가 어떤 코드 번호로 저장되는지 활용해서, '가'를 기준으로 588(21×28)씩 늘어날 때마다 초성이 바뀌는 규칙을 이용해 초성만 뽑아내는 기능을 만들었습니다. 예를 들어 '자료구조'를 입력하면 'ㅈㄹㄱㅈ'와 매칭됩니다.",
  },
  {
    title: "3차 검증 신뢰도 점수 계산·승격, dump 단계 오류 (해결 중)",
    tag: "Airflow · PostgreSQL",
    problem:
      "TODO: 신뢰도 점수 계산 및 lecture_master 승격 단계, 그리고 배치 마지막의 db_dump 단계에서 오류가 발생하고 있습니다. 정확한 증상과 원인을 정리할 예정입니다.",
    solution:
      "TODO: 원인 분석 및 해결 과정 작성 예정.",
  },
   {
    title: "2차 검증 정적 파싱 관련 오류 (해결 중)",
    tag: "Python · ETL Pipeline",
    problem:
      "TODO: 2차 검증에서 정적 파싱(고정된 위치를 기준으로 데이터를 읽는 방식) 관련 오류가 발생하고 있습니다. 정확한 증상과 원인을 파악하였으며, 해결 중입니다.",
    solution:
      "TODO: 해결 과정 작성 예정.",
  },
  
];

// 설계할 때 고민하고 배운 것들
export const designInsights = [
  {
    title: "공통 기능은 상속으로, 도구는 따로 가져와서 조합",
    body:
      "BaseValidator라는 부모 클래스에는 모든 검증기가 공통으로 쓰는 기능(단계를 순서대로 실행, 실패 처리, 로그 형식)만 두고 파일 하나당, 로그 객체를 만들어 넘겨주며 로그를 찍는 방식으로 설계하였습니다. \n 실제 작업(성적표를 추출·변환·적재하는 것)은 도구이기 때문에 상속 받지 않고, 각 검증기가 TranscriptPipeline 객체를 직접 만들어 쓰는 방식(조합)으로 분리했습니다. steps 목록은 RuleCode와 실행할 함수를 한 쌍으로 묶어둬서, 어떤 규칙이 실패했는지와 그걸 실행한 함수가 항상 같이 따라다닙니다. 새로운 검증 종류가 추가돼도 BaseValidator는 그대로 두고 steps 목록과 pipeline만 새로 끼우면 됩니다.",
    code: `class L2TranscriptValidator(BaseValidator):
    def __init__(self, log_helper):
        super().__init__(log_helper)
        self.pipeline = TranscriptPipeline(log_helper)  # 조합(따로 만들어서 사용)
        self.steps = [
            (RuleCode.CONTENT_SCAN, lambda: ExcelUtil.check_word_in_excel(self.file_path, WHITELIST)),
            (RuleCode.SCHEMA_EXTRACT, self.prepare_schema_check),
            (RuleCode.SCHEMA_COORDS, self.verify_schema_coords),
            (RuleCode.DATA_EXTRACT, lambda: self.pipeline.extract(self.transcript_df)),
            (RuleCode.DATA_TRANSFORM, lambda: self.pipeline.transform()),
            (RuleCode.DATA_LOAD, lambda: self.pipeline.load())
        ]`,
  },
  {
    title: "상황에 맞게 데이터베이스 조회 최적화",
    body:
      "응답 속도와 메모리 효율을 극대화하기 위해, 데이터 특성에 따라 조회 방식을 분리하여 적용했습니다. \n scalar()는 단일 값을 조회할 때 사용하여 불필요한 객체 생성 비용을 제거했습니다. \n mappings()는 컬럼명으로 직접 접근이 필요한 API 응답 데이터 구성 시 활용하여 가독성을 높였습니다. \n 데이터 조회 시 first()는 확인 즉시 연결을 종료하고, fetchone()은 순차적 처리를 위해 연결을 제어합니다. \n 이를 통해 다수의 접속 환경에서도 커넥션 누수를 방지하여 서버의 안정성을 확보했습니다.",
    code: null,
  },
  {
    title: "보안과 데이터 정합성을 고려한 해시 설계",
    body:
      "데이터의 목적에 따라 해싱 전략을 두 가지로 분리하여 설계했습니다. \n\n" +
      "1. 일관된 식별을 위한 결정론적 해시 (provider_id_hash): \n" +
      "동일한 카카오 계정은 항상 같은 해시값이 나오도록(SHA256+SALT) 설계했습니다. 이를 통해 사용자가 탈퇴 후 재가입하더라도 서비스 내에서 동일 인물임을 식별할 수 있어, 신뢰도 점수 누적이나 서비스 이용 패턴 분석 시 데이터 연속성을 유지할 수 있습니다. \n\n" +
      "2. 보안을 위한 비결정론적 해시 (refresh_token): \n" +
      "인증 토큰은 보안이 최우선이므로 'bcrypt' 알고리즘을 사용했습니다. bcrypt는 내부적으로 매번 다른 Salt를 적용하여 동일한 토큰이라도 서로 다른 해시값을 생성해주기 때문에 DB가 탈취되더라도 원본 토큰을 추적하는 것을 원천적으로 차단하였습니다. \n\n" +
      "데이터 분석을 위해서는 '일관성'을 보장하고, 인증 정보에 대해서는 '보안성'을 극대화하여 두 목표를 균형 있게 달성했습니다.",
    code: null,
    diagram: "kakaoLoginSequence",
  },
  {
    title: "데이터 중복 판정 및 무결성 관리",
    body:
      "과목 데이터의 중복 여부는 특정 컬럼(lecture_code, name, credit, category) 조합으로 판단하여, 독립적인 업로드들의 기여도를 정확히 추적합니다. \n 사용자가 탈퇴해도 lecture_validation의 점수는 유지되도록 설계하여 데이터의 영속성을 보장했습니다. \n Airflow 배치는 validation_score가 비어있는 데이터만 선별적으로 채점하도록 로직을 분리했습니다. \n 이로써 이미 처리된 고아 row가 중복으로 계산되는 것을 방지하고, 새로 등록된 데이터만 효율적으로 처리하도록 최적화했습니다.",
    code: null,
  },
  {
    title: "JWT 기반 권한 관리 및 상태 동기화",
    body:
      "로그인 시 결정된 권한(Guest/Member)을 JWT 페이로드에 포함하여, 매 요청마다 DB를 조회하는 대신 토큰으로 즉각적인 권한 확인이 가능하게 구현했습니다. \n '혹여 갱신되지 않은 오래된 토큰' 문제를 해결하기 위해, 상태 변경(성적표 업로드 등)이 발생하는 즉시 새 권한이 반영된 토큰을 즉시 재발급하는 로직을 각 엔드포인트에 배치했습니다. \n 이를 통해 DB 왕복을 최소화하고 서버 부하를 줄이면서도, 사용자 상태의 최신성을 실시간으로 보장할 수 있게 되었습니다.",
    code: null,
  },
];

// AI 수강 추천 만들면서 겪은 일
export const aiStory = {
  title: "AI 수강 추천 — 두 번의 시도 끝에",
  lead:
    "\u201C추천이 잘 되려면, AI 모델 자체보다 입력되는 데이터가 얼마나 믿을 수 있는지, 그리고 그 데이터를 만드는 과정이 얼마나 안정적인지가 더 중요하다고 생각합니다.\u201D \n AI로 모든 걸 자동화하려다 실패하고, 그다음엔 AI 없이 직접 다 처리하려다 또 실패한 끝에 얻은 결론입니다.",
  failures: [
    {
      title: "1차 시도 — 전부 AI로 자동화",
      desc: "학과·연도별 커리큘럼이 적힌 PDF를 AI로 읽어서 데이터베이스를 자동으로 정리하려 했지만, AI가 사실과 다른 내용을 만들어내는 문제(환각)가 프롬프트(지시문)만으로는 잡히지 않았고, 결과를 검증하는 작업이 줄어들기는커녕 오히려 두 배로 늘었습니다.",
      notebookUrl: "https://nbviewer.org/url/hvvrnz.github.io/notebooks/02_llm_json_structure_test.ipynb",
    },
    {
      title: "2차 시도 — AI 없이 직접 코드로 파싱",
      desc: "그래서 규칙 기반으로 직접 파싱하는 코드를 짰지만, 단과대학명과 학과명을 구분하는 토큰 처리 로직이 예상 못 한 케이스를 만나 ValueError로 그대로 죽었습니다. 게다가 매년 표의 구조가 바뀌어서(예: 2024년 의대 신설 등) 정해진 규칙으로는 모든 경우를 감당할 수 없었습니다.",
      notebookUrl: "https://nbviewer.org/url/hvvrnz.github.io/notebooks/03_before_llm_data_restruct.ipynb",
    },
  ],
  resolution:
    "진짜 문제는 믿을 수 있는 데이터가 부족하다는 것이었습니다. 그래서 사용자들이 올린 공식 성적표 데이터가 쌓이면서 일정 신뢰도 점수를 넘으면 자동으로 검증된 과목 데이터로 승격되는, 자체 데이터 검증 파이프라인을 만들었고, 학과별 데이터베이스를 미리 만들어두지 않고도 50개가 넘는 학과 데이터를 모을 수 있었습니다.",
  implementation:
    "백엔드에서 직접 만든 정렬 기준으로 후보 과목들을 추려서 AI(LLM)에 넘기는 방식입니다. \n\n 1) 전공필수 과목 \n 2) 같은 학번대 학생들이 많이 들은 전공 과목 \n 3) 최근에 개설된 과목 순서로. \n\n 매번 AI를 호출하면 비효율적이라, 추천 결과를 데이터베이스에 30분 동안 저장해두고 재사용합니다.",
};

export const techStack = [
  { 
    name: "FastAPI", 
    desc: "기존 Flask의 동기 처리 한계를 극복하고, 1GB 메모리 환경에서 대량의 트래픽을 효율적으로 비동기 처리하기 위해 선택했습니다. Pydantic을 활용한 엄격한 스키마 정의로 안정성을 더했습니다." 
  },
  { 
    name: "PostgreSQL", 
    desc: "JSONB의 강력한 유연성을 활용하여 반정형 데이터를 효과적으로 다루기 위해 선택했습니다. NoSQL도 고려했으나, ACID 트랜잭션의 신뢰성과 데이터 정합성이 필수적인 서비스 성격을 고려해 PostgreSQL을 택했습니다. 관계형 DB의 안정성 위에 JSONB의 유연함을 얹어 데이터 엔지니어링의 확장성을 확보했습니다." 
  },
  { 
    name: "Apache Airflow", 
    desc: "지속적인 데이터 검증 작업을 자동화하고 스케줄링하기 위해 도입했습니다. 로컬 환경과 운영 DB 간 SSH 터널링을 구축하여 제한된 자원 안에서도 안정적인 데이터 파이프라인을 운영 중입니다." 
  },
  { 
    name: "Elastic Stack (ELK)", 
    desc: "증가하는 로그 속에서 실패 패턴과 데이터 양식 오류를 빠르게 파악하기 위해 선택했습니다. 카카오뱅크 등 대규모 서비스의 기술 스택을 참고하여, 구조화된 로그 분석을 통해 데이터 품질을 실시간으로 관리하고 있습니다." 
  },
  { 
    name: "React", 
    desc: "복잡한 인증 흐름을 매끄럽게 처리하고, 사용자에게 데이터 시각화 대시보드를 직관적으로 제공하여 UX 만족도를 높이고자 선택했습니다." 
  },
  { 
    name: "Docker Compose · Nginx · AWS EC2", 
    desc: "1GB RAM이라는 제한된 인프라 환경을 극복하기 위해 극한의 최적화를 수행했습니다. Docker 리소스 제한(Limit)과 Swap 메모리 설정을 통해 컨테이너 기반의 안정적인 서비스를 구축했으며, Nginx로 트래픽을 분산해 가용성을 극대화했습니다." 
  },
];

// 로그 / 모니터링
export const observability = {
  intro:
    "운영 서버(메모리 1GB)는 Elasticsearch를 직접 돌릴 수 없어서(최소 2GB 필요), scp로 로그 파일을 제 컴퓨터로 받아와 Filebeat → Elasticsearch → Kibana 순서로 로컬에서 분석합니다.",
  logTypesTitle: "로그 종류",
  indexNoteTitle: "색인을 두 개로 나눈 이유",
  driftLogicTitle: "양식 변경 감지 로직",
  dashboardsTitle: "대시보드",
  logTypes: [
    { name: "transcript_val", desc: "업로드 한 건당 1단계+2단계 검증이 전부 어떻게 진행됐는지, 규칙 하나하나 단위로 남긴 기록" },
    { name: "failed_schema", desc: "2단계 검증에서 헤더(표의 첫 줄)가 안 맞은 경우 — 원래 예상했던 헤더와 실제 헤더의 순서·내용을 비교" },
    { name: "schema_mismatch_masked", desc: "개인정보를 가린 50×50 칸 스냅샷 + 어떤 양식인지 구분하는 고유 값(form_hash)" },
  ],
  indexNote:
    "history라는 항목이 failed_schema 로그에서는 글자(문자열)인데 transcript_val 로그에서는 JSON 형태의 객체라서, 같은 색인(index)에 같이 넣으면 Elasticsearch가 타입 충돌을 일으켰습니다. 그래서 두 종류의 로그를 서로 다른 색인(zolver-schema-*, zolver-val-*)으로 나눠서 저장했습니다.",
  driftLogic:
    "서로 다른 사용자들이 똑같은 양식 고유 값(form_hash)으로 반복해서 실패한다면, 이건 단순한 사용자 실수가 아니라 프로그램이 아직 인식하지 못하는 성적표 양식이 새로 생겼다는 신호입니다 — 즉 학교에서 양식을 바꿨다는 뜻입니다.",
  dashboards: [
    "업로드 성공/실패 비율 (is_all_success)",
    "양식 변경 감지 — 양식 고유 값(form_hash)별 실패 건수 집계",
    "로그 종류별 실패 건수 — failed_schema vs. schema_mismatch_masked",
    "사용자별(provider_id_hash) 실패 집계 — 계속 오류를 겪는 사용자 찾기",
  ],
};


// 운영 DB를 직접 쿼리하며 확인한 실사용 데이터 인사이트
export const dataInsights = {
  intro:
    "대시보드가 따로 없다 보니, 숫자가 궁금할 때마다 운영 DB에 직접 SQL을 짜서 확인하는 게 습관이 됐습니다. 그 과정에서 처음엔 궁금하지도 않았던 질문들이 따라붙었고, 그 질문들이 오히려 다음에 뭘 고쳐야 할지를 알려줬습니다.",
  metricsTitle: "쿼리로 확인한 지표",
  opsNoteTitle: "운영 노트",
  reflectionTitle: "정리",
  metrics: [
    {
      label: "가입 → 성적표 업로드 전환율",
      value: "47.9%",
      sub: "순수 가입자 309명 중 148명이 성적표를 업로드",
      query:
        "SELECT COUNT(*) FROM login_sessions; -- 309\nSELECT COUNT(*) FROM users WHERE transcript_upload_count >= 1; -- 148",
      note:
        "가입만 하고 아무것도 안 남긴 사람이 절반 넘게 있다는 뜻이라, 온보딩 단계에서 이탈이 있는 건지 다음에 이벤트 로그로 더 들여다볼 필요가 있다고 판단했습니다.",
    },
    {
      label: "성적표 없이 수기 입력만으로 이용 중인 사용자",
      value: "11명",
      sub: "transcript_upload_count = 0 이지만 lecture_evidence에 데이터가 있는 사용자",
      query:
        "SELECT COUNT(DISTINCT u.user_id)\nFROM users u\nJOIN lecture_evidence le ON le.user_id = u.user_id\nWHERE u.transcript_upload_count = 0;",
      note:
        "성적표 업로드가 진입장벽이 될 수 있는 학교(포맷이 아직 지원되지 않는 경우 등)에서도, 수기 입력 경로만으로 실제 이용까지 이어진 사람이 있다는 걸 숫자로 처음 확인했습니다. 수기 입력을 '차선책'이 아니라 정식 진입 경로로 더 신경 써서 다듬어야겠다고 생각한 계기였습니다.",
    },
    {
      label: "누적 확보된 고유 과목 데이터",
      value: "1,637건",
      sub: "lecture_code · lecture_name · lecture_category 조합 기준 중복 제거",
      query:
        "SELECT COUNT(*) FROM (\n  SELECT lecture_name, lecture_code, lecture_category, COUNT(*) AS cnt\n  FROM lecture_evidence\n  GROUP BY lecture_code, lecture_name, lecture_category\n) sub;",
      note:
        "학과별 DB를 미리 만들어두지 않고 사용자 업로드만으로 쌓인 숫자라서, '검증 파이프라인이 실제로 돌아가고 있다'는 걸 스스로도 이 쿼리를 돌려보고 나서야 체감했습니다.",
    },
  ],
  opsNote:
    "공지사항(notices) 테이블도 운영하면서 직접 UPDATE·DELETE로 관리하고 있습니다. 예를 들어 모바일 메뉴가 배경 터치로 닫히지 않는다는 사용자 의견을 받은 뒤 UI를 수정하고, 그 내용을 공지로 직접 작성해 반영한 이력이 그대로 남아 있습니다. 사용자 문의 하나가 배포까지 이어지는 걸 스스로 확인할 수 있었던 부분입니다.",
  reflection:
    "전환율(47.9%)만 보면 이탈이 큰 것처럼 보이지만, 11명이라는 소수 집단이 성적표 업로드 없이도 서비스를 지속 이용하고 있다는 사실은 전환율 수치 하나로는 드러나지 않습니다. 평균/비율 지표는 '무엇이 잘 안 되는가'는 보여줘도 '그럼에도 왜 되고 있는가'는 설명하지 못한다는 걸 이 케이스로 확인했고, 이후로는 집계 지표를 확인할 때 표본이 작더라도 예외적으로 남아있는 세그먼트를 별도로 필터링해서 보는 걸 우선순위로 두고 있습니다.",
};

// 요기요 × Oracle 해커톤 회고
export const hackathonRetro = {
  title: "요기요 × Oracle 해커톤 회고",
  summary:
    "23:1 경쟁률을 뚫고 본선에 진출한 8팀 중 하나였지만, 수상하지는 못했습니다. 백엔드·인프라·배차 알고리즘·실시간 스트림 처리·조리시간 예측 보정을 맡았고, 결과보다 오래 남은 건 발표를 준비하며 스스로에게 던졌던 질문들이었습니다.",
  overview: {
    title: "프로젝트 개요",
    body:
      "동시에 접수된 여러 주문의 조리시간을 예측하고, 이를 반영해 라이더의 배달 순서를 최적화하는 시스템입니다. 조리 완료 시점까지 고려한 순서 최적화로 음식이 식지 않게, 라이더 동선은 효율적으로 만드는 것이 목표였습니다.",
  },
  architecture: {
    title: "아키텍처 흐름",
    diagram: "hackathonArchitecture",
    steps: [
      "주문 발생 → Kafka 스트림 처리 (클러스터링)",
      "Redis Geo로 근처 라이더 검색",
      "Sequencing Engine — 완전탐색 기반 순서 최적화 (pickup+dropoff 90가지 후보)",
      "Oracle AI Vector Search(23ai)로 조리시간 예측 보정",
      "Oracle Autonomous Database에 결과 저장",
      "LLM(OCI Generative AI)으로 배차 결과 설명 생성",
      "FastAPI로 최종 배달 순서 + 설명 반환 → 역할별(고객/사장님/라이더) 화면 표시",
    ],
    note:
      "사장님의 조리시작·조리완료, 라이더의 배차수락·픽업·완료는 이 자동 파이프라인과 별도로, FastAPI가 요청을 받는 즉시 Oracle ADB/Redis 상태를 갱신하도록 분리했습니다.",
    designChoices: [
      {
        title: "Kafka·Redis만 Docker로 띄운 이유",
        body:
          "상태를 가진 미들웨어(Kafka, Redis)는 격리된 환경에서 재현 가능하게 띄우는 게 맞다고 판단했습니다. 반대로 자주 고치는 애플리케이션 코드(FastAPI, 스트림 프로세서)는 컨테이너 빌드·재시작 오버헤드 없이 VM에 직접 올려서 바로 반영되는 쪽이 해커톤처럼 반복이 잦은 개발 주기에 맞다고 봤습니다.",
      },
      {
        title: "완전탐색(brute-force)을 선택한 이유",
        body:
          "여기서 완전탐색 대상은 도로망 위 실제 경로(길찾기)가 아니라, 이미 정해진 픽업·드롭오프 지점들을 어떤 순서로 방문할지 정하는 시퀀싱 문제입니다. 실제 최단 경로 계산 대신 haversine 거리로 근사했고, 클러스터 하나에 담기는 주문을 최대 3건(MAX_CLUSTER_SIZE=3)으로 제한해뒀기 때문에 방문 지점이 최대 6개, 순서 조합은 최대 90가지 수준으로 작습니다. 이 정도 크기에서는 휴리스틱으로 근사해를 구하는 것보다 완전탐색으로 전역 최적해를 보장하는 게 구현 복잡도 대비 이득이 크다고 판단했습니다. 다만 이 전제는 클러스터 크기가 커지면 깨지는 설계라, 대규모 주문 대비 계산량 최적화는 스코프아웃으로 명시해뒀습니다.",
      },
    ],
  },
  coldStart: {
    title: "콜드스타트 대응 — Vector Search Fallback 설계",
    body:
      "자체 조리 이력이 부족한 신규 매장 문제를 Oracle AI Vector Search로 풀었습니다. 매장 상황(요일·시간대·동시주문 수·메뉴 구성)을 Cohere Embed로 1024차원 벡터화하고, 아래 순서로 검색 범위를 넓혀가며 유사 사례를 찾습니다.",
    steps: [
      "자체 매장 이력",
      "같은 지역 + 같은 브랜드",
      "타 지역 + 같은 브랜드",
      "같은 지역 + 같은 카테고리 (다른 브랜드)",
      "카테고리 전체 (지역 무관)",
    ],
    note:
      "지역보다 브랜드를 fallback 우선순위로 둔 이유: 같은 지역이라도 브랜드가 다르면 조리법·메뉴 구성·주방 동선이 달라 참고가 약한 반면, 타 지역이라도 같은 브랜드면 조리법과 매뉴얼이 동일해 더 유효한 참고값이 됩니다. 실제 조리완료 시각은 매 주문마다 vector_cases에 새 사례로 쌓여 다음 예측의 근거가 됩니다.",
  },
  techStackTitle: "기술 스택",
  techStack: [
    { name: "Kafka (KRaft 모드)", desc: "실시간으로 들어오는 주문을 스트림 처리하며 클러스터링. Zookeeper 없이 KRaft 모드로 구성해 인프라 구성 요소를 줄였습니다." },
    { name: "Redis (Geo 인덱스)", desc: "클러스터 근처 라이더를 지리 정보 기반으로 검색. 자주 바뀌는 라이더 위치·배정 가능 여부(BUSY/AVAILABLE)를 실시간으로 전담." },
    { name: "Python 완전탐색 스코어링", desc: "클러스터 내 배달 순서(픽업+드롭오프 90가지 후보)를 전부 계산해 최적 순서를 도출하는 Sequencing Engine." },
    { name: "Oracle AI Vector Search (23ai) + Cohere Embed", desc: "과거 유사 조리 사례를 임베딩으로 조회해 조리시간 예측을 보정. 콜드스타트 매장 대응의 핵심." },
    { name: "Oracle Autonomous Database (ADB, Developer Free)", desc: "주문·배차 데이터 저장. Vector Search를 DB 레벨에서 바로 지원해 별도 벡터 DB 없이 구성." },
    { name: "LLM (OCI Generative AI)", desc: "여러 경우의 수를 종합해 설명해야 하는 지점(사장님 화면 안내 문구)에만 선택적으로 적용. 라이더 교통 안내·소비자 지연 안내처럼 판단이 필요 없는 곳은 템플릿으로 처리해 LLM 호출을 최소화." },
    { name: "FastAPI", desc: "역할별(고객/사장님/라이더) API 서버. handler(판단·계산)와 repository(DB 접근)를 분리해 라우터가 직접 SQL을 짜지 않도록 설계." },
    { name: "Vite + React", desc: "역할별 화면을 렌더링하는 얇은 로더 구조의 프론트엔드." },
    { name: "OCI Compute VM + Docker", desc: "VM.Standard.E4.Flex(4 OCPU/32GB, Oracle Linux 8) 위에 Kafka·Redis만 컨테이너화하고, Python 서비스는 VM에 직접 설치해 실행." },
  ],
  scope: {
    title: "구현 범위 / 스코프아웃",
    doneLabel: "구현 완료",
    scopedOutLabel: "스코프 아웃",
    done: [
      "Kafka 기반 실시간 주문 처리, 클러스터링, 완전탐색 배차 경로 최적화",
      "Vector Search 5단계 fallback (실제 실행 및 검증 완료)",
      "최소 수익 기준 미달 배차 필터링",
      "조리시간 예측-실측 피드백 루프 (vector_cases.actual_cook_time 저장 및 재활용)",
    ],
    scopedOut: [
      "라이더 거절/응답 시간 초과에 대한 후속 처리",
      "여러 라이더 후보를 비교하는 로직 (현재는 최근접 1명 그리디 선택)",
      "vector_cases 정기 재계산 배치 (스케줄 미가동)",
      "대규모 주문(수백 건 이상 동시 처리) 대비 클러스터링 계산량 최적화",
      "실시간 GPS 연동 (현재는 시뮬레이션)",
    ],
  },
  pointsTitle: "회고",
  points: [
    {
      title: "Vector Search 도입 비용을 사전에 정량화하지 않은 것",
      body:
        "Cohere Embed로 실제 임베딩을 생성해 조리시간 예측에 적용까지 마쳤지만, 쿼리당 토큰 비용·응답 지연·콜드 스타트(신규 매장 fallback 4단계) 상황에서의 정확도 저하를 설계 단계에서 수치로 비교하지 않고 진행했습니다. 결과적으로 규칙 기반 fallback(store→brand→category→global)이 사실상 정확도를 떠받치는 구조가 됐고, Vector Search는 이를 보조하는 입력값 정도의 역할에 그쳤습니다. 다음엔 '이 정도 규모(매장 1,000곳)에서 임베딩 기반 유사도 검색이 규칙 기반 대비 실제로 얼마나 이득인가'를 프로토타입 이전에 벤치마크로 먼저 확인할 계획입니다.",
    },
    {
      title: "복잡도 대비 임팩트 배분이 균등하지 않았던 것",
      body:
        "고객·사장님·라이더 세 화면을 모두 데모 수준으로 완성하는 데 개발 리소스를 균등 분배했지만, 실제 병목은 라이더가 배차를 신뢰하고 즉시 수락하는지 여부 하나였습니다. 2인 팀 리소스로 세 화면을 넓게 가져간 결정이 결과적으로 핵심 지표(배차 수락률) 개선에 쓰였어야 할 시간을 분산시켰다고 판단합니다. 다음엔 문제의 병목 지점을 먼저 지표로 정의하고, 그 지표에 직접 기여하지 않는 화면은 프로토타입 범위에서 제외하는 방식으로 접근할 것 같습니다.",
    },
    {
      title: "정규화되지 않은 입력 데이터의 한계",
      body:
        "메뉴 단위 조리시간 데이터가 존재하지 않아, 주문 전체 조리시간(사장님이 입력한 단일 값)에서 메뉴별 기여도를 역산하는 회귀 기반 접근을 대안으로 제시했지만 실제 구현·검증까지는 하지 못했습니다. 이 부분은 가설로만 남겨뒀고, 프로덕션 데이터 없이는 검증이 불가능하다는 한계를 발표에서 그대로 인정했습니다.",
    },
  ],
  images: ["hackathonDemo1", "hackathonDemo2"],
};

export const footer = {
  note: "데이터의 흐름을 끝까지 추적하고, 안정성을 확보하는 데 최선을 다하겠습니다.",
};

// 섹션 제목/라벨 — 언어 토글에 맞춰 제목도 같이 바뀌도록 분리해놓은 데이터

export const sectionTitles = {
  origin: { eyebrow: "// origin", title: "시간표 추천에서 졸업요건 시각화로" },
  project: { eyebrow: "// zolver in production", title: "로컬 프로젝트에서 실제 운영 서비스로" },
  architecture: { eyebrow: "// system design", title: "아키텍처" },
  troubleshooting: { eyebrow: "// troubleshooting", title: "트러블슈팅", lead: "운영하면서 실제로 부딪힌 문제와 해결 과정입니다. 클릭하면 펼쳐집니다." },
  observability: { eyebrow: "// observability", title: "런칭 후 파이프라인 모니터링" },
  designInsights: { eyebrow: "// design insight", title: "설계 결정" },
  aiStory: { eyebrow: "// AI usage" },
  techStack: { eyebrow: "// stack", title: "사용 기술" },
  studyNotes: { eyebrow: "// study notes", title: "전과생의 손으로 구조화하여 정리하는 습관" },
  dataInsights: { eyebrow: "// data insights", title: "운영 DB로 직접 확인한 숫자들" },
  hackathonRetro: { eyebrow: "// hackathon retro", title: "요기요 × Oracle 해커톤 회고", lead: "카테고리별로 접혀 있습니다. 클릭하면 펼쳐집니다." },
};