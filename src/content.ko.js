// ============================================================
// 포트폴리오 콘텐츠 (한국어 - 쉬운 버전)
// 처음 보는 사람도 이해할 수 있도록 전문 용어를 풀어서 설명했습니다.
// ============================================================

export const profile = {
  name: "황윤정 (hvvrnz)",
  greeting: "안녕하세요, 황윤정입니다.",
  role: "데이터 엔지니어링 · 백엔드 / 인프라 설계",
  tagline: "깊이 있게 공부하고, 배운 걸 기록하며, \n 그 과정을 통해 성장하는 걸 좋아합니다.",
  // current: "현재 공공데이터 활용 아이디어 공모전 \n ",
  links: {
    github: "https://github.com/hvvrnz",
    velog: "https://velog.io/@0lalsoo",
    service: "https://www.zolver.co.kr",
  },
  hashtags: ["#긍정적", "#자원_최적화", "#데이터_정합성", "#문제해결"],
};

// 핵심 운영 지표
export const stats = [
  { value: "173+", label: "가입자 수", sub: "2026.6.8 정식 런칭 이후" },
  { value: "2,538+", label: "누적 처리 과목 데이터", sub: "" },
  { value: "56개", label: "확보된 학과 데이터", sub: "사전에 학과별 데이터베이스를 따로 만들지 않고 모은 수" },
  { value: "54%", label: "핵심 기능 전환율", sub: "방문자 중 성적표를 업로드하거나 직접 과목을 등록한 비율" },
  { value: "86%", label: "파이프라인 파싱 성공률", sub: "업로드된 성적표를 자동으로 읽어내는 데 성공한 비율 (로그 분석 기준)" },
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

// 손필기 노트
export const studyNotes = {
  intro:
    "학부 시절 회로 및 하드웨어 관련 과목 학습에 지속적으로 어려움이 있었습니다. 그러나, 컴퓨터공학과로 전공을 옮긴 후 4학년 때 들은 운영체제 수업이 전환점이 되었습니다. 하드웨어가 논리적·물리적으로 어떻게 동작하는지 손으로 직접 그려가며 정리하는 습관이 그때부터 지금까지 이어지고 있습니다.",
  items: [
    { topic: "경쟁 상태(Race Condition)와 동기화", caption: "여러 주체가 같은 자원에 동시에 접근할 때 생기는 충돌을 막는 원리 \n Zolver에서 여러 사람이 동시에 업로드할 때 생기는 충돌을 막는 데도 똑같이 적용됩니다.", image: "raceConditionNote" },
    { topic: "가상 메모리", caption: "페이지 테이블과 주소 변환 과정을 단계별로 정리한 노트", image: "virtualMemoryNote" },
  ],
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
};