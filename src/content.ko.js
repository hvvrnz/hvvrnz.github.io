// ============================================================
// 포트폴리오 콘텐츠 (한국어)
// 한국어 텍스트/숫자는 여기서만 수정하면 됩니다.
// 언어 토글이 KO로 설정되면 이 값들이 렌더링됩니다.
// ============================================================

export const profile = {
  name: "황윤정 (hvvrnz)",
  greeting: "안녕하세요, 황윤정입니다.",
  role: "데이터 엔지니어링 지망 · 백엔드 / 데이터 파이프라인",
  tagline: "깊이 있게 공부하고, 배운 걸 기록하고, 같이 만드는 사람들과 그 과정을 통해 성장하는 걸 좋아합니다.",
  current: "현재 공공데이터 활용 아이디어 공모전에 팀으로 참여 중입니다 \n (한국문화예술교육진흥원, ARTE)",
  links: {
    github: "https://github.com/hvvrnz",
    velog: "https://velog.io/@0lalsoo",
    service: "https://www.zolver.co.kr",
  },
  hashtags: ["#positive", "#optimizing_under_constraints", "#obsessed_with_data_trust"],
};

// 핵심 운영 지표
export const stats = [
  { value: "172+", label: "가입자 수", sub: "2026.6.8 정식 런칭 이후" },
  { value: "2,538+", label: "누적 처리 과목 데이터", sub: "" },
  { value: "56개", label: "확보된 학과 데이터", sub: "사전 학과 DB 구축 없이" },
  { value: "54%", label: "핵심 기능 전환율", sub: "성적표 업로드 또는 수기 등록까지" },
  { value: "86%", label: "파이프라인 파싱 성공률", sub: "ELK 로그 분석 기준" },
];

// 시작 배경 — 피벗을 만든 설문 지표
export const originSurvey = [
  { label: "수강신청 시 가장 어려운 점 → \u201C졸업요건 고려한 강의 선택\u201D", value: "79.4%" },
  { label: "에브리타임(시간표 앱) 사용률", value: "92.6%" },
  { label: "여전히 수기로 졸업요건 체크 (워드 · 엑셀 · 노션 · 메모장)", value: "64.8%" },
];

export const originStory = `Zolver는 졸업작품에서 출발했습니다. 초기 핵심 기능은 '시간표 추천'이었고, 이를 검증하기 위해 대학생 68명을 대상으로 설문조사를 진행했습니다.

설문을 분석하며 학생들이 정말 필요로 했던 건 시간표 추천이 아니라 '내가 졸업하려면 무엇이 더 필요한지'를 한눈에 확인하는 것이라는 걸 발견했습니다. 이 발견을 바탕으로 문제 정의를 졸업요건 시각화 중심으로 다시 했고, 이후 기획부터 개발, 운영까지 1인으로 끝까지 만들었습니다.`;

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

// 3단계 검증 파이프라인
export const pipeline = [
  {
    stage: "L1",
    name: "물리 검증",
    detail: "파일 형식 · 용량 · 메타데이터 위변조를 확인합니다. 실패 시 로그 없이 즉시 파일을 파기합니다 (보안).",
    items: ["파일 존재 여부", "확장자(.xlsx)", "파일 크기 제한", "작성자 / 타임스탬프 정합성", "임시 경로 이동"],
  },
  {
    stage: "L2",
    name: "내용 검증 + ETL",
    detail: "고정 좌표와 헤더 매칭으로 양식 무결성을 확인한 뒤 추출 → 변환 → 적재합니다.",
    items: ["화이트리스트 스캔", "스키마 추출", "좌표 매핑", "데이터 변환", "lecture_evidence 적재"],
  },
  {
    stage: "L3",
    name: "신뢰도 엔진",
    detail: "Airflow 배치(로컬, SSH 터널). 여러 사용자 데이터의 일치도를 점수화해 임계값을 넘으면 승격시킵니다.",
    items: ["엑셀 출처 가중치 ↑", "수기 출처 가중치 ↓", "교육과정 매칭 보너스", "match_count ≥ 2 & score ≥ 1.5 → lecture_master 승격"],
  },
];

export const pipelineNote =
  "한 명의 성적표만 그대로 믿으면 오류나 조작에 취약합니다. 여러 독립적인 업로드가 서로 일치할 때만 데이터는 \u201C신뢰할 수 있는\u201D 상태가 됩니다.";

// 아키텍처 다이어그램 — 실제 시스템에서 추출한 도면
export const architecture = {
  intro:
    "실제 시스템에서 가져온 3가지 다이어그램입니다: 인프라 구조, 전체 검증 파이프라인, 그리고 그 뒤의 데이터 모델.",
  infra: {
    title: "인프라",
    caption:
      "단일 EC2 인스턴스(Ubuntu, RAM 1GB). Nginx가 React 빌드를 정적으로 서빙하고 /api를 FastAPI로 리버스 프록시합니다. L1/L2 검증 파이프라인은 동기 import 방식으로 같은 컨테이너 안에서 동작하며 PostgreSQL에 씁니다. L3 신뢰도 엔진은 로컬 머신에서 Airflow 배치로 동작하며 SSH 터널로 운영 DB에 연결합니다 — 1GB 서버가 직접 스케줄러를 돌리지 않도록 한 구조입니다.",
  },
  pipeline: {
    title: "검증 파이프라인 (전체 상세)",
    caption:
      "R100부터 R205까지 모든 규칙을 끝에서 끝까지 매핑했습니다. L1 실패는 설계상 로그 없이 즉시 파기됩니다 — 악의적 업로드 실패를 로깅하면 탐지 로직이 노출될 수 있기 때문입니다. L2 실패는 드리프트 분석을 위해 로그로 남습니다. L3는 별도 배치로 동작하며 신뢰도 임계값을 넘은 데이터만 승격시킵니다.",
  },
  erd: {
    title: "데이터 모델",
    caption:
      "lecture_evidence(업로드별 원본 데이터)가 lecture_validation(규칙별 스냅샷)으로 이어지고, 이는 L3 신뢰도 점수의 입력값인 lecture_frequency로 집계됩니다. 임계값을 넘은 레코드만 lecture_master로 승격되며, 앱의 나머지 기능은 실제로 이 테이블을 읽습니다.",
    designNote:
      "의도한 비정규화: RAM 1GB 환경에서는 트래픽이 몰릴 때 조인 비용이 중복 읽기보다 더 위험하다고 판단했습니다. 테이블 개수와 데이터 규모를 고려해, 조인에 의존하는 대신 일부러 select 위주의 접근 패턴을 선택했습니다.",
  },
};

// 백엔드 API 구조
export const apiOverview = {
  intro:
    "13개 라우터가 전체 제품 영역을 다룹니다 — 인증, 성적표 수집, 졸업요건 추적, 시뮬레이션, AI 추천까지 모두 FastAPI와 비동기 SQLAlchemy로 구현했습니다.",
  stack: [
    { name: "FastAPI", desc: "비동기 요청 처리, Pydantic 기반 검증" },
    { name: "PostgreSQL + SQLAlchemy (async)", desc: "users / lectures / evidence / master 전반의 관계형 정합성" },
    { name: "Kakao OAuth 2.0 + JWT", desc: "유일한 로그인 경로 — 자체 회원가입 없음, 전역 미들웨어가 JWT 검증" },
    { name: "Google Gemini API (gemini-2.5-flash)", desc: "수강 추천 생성, 캐시 적용" },
  ],
  routers: [
    { name: "auth", prefix: "/api/v1/auth", desc: "카카오 로그인, 토큰 갱신, 로그아웃" },
    { name: "upload", prefix: "/api/v1/upload", desc: "성적표 .xlsx 업로드, L1/L2 워커 트리거" },
    { name: "lecture", prefix: "/api/v1/courses", desc: "이수 과목 CRUD, 초성 검색 지원" },
    { name: "tag", prefix: "/api/v1/tags", desc: "커스텀 졸업요건 태그, 최소 이수학점 규칙" },
    { name: "simulation", prefix: "/api/v1/simulation", desc: "예정 과목 등록, 시뮬레이션 결과 조회" },
    { name: "user_gpa", prefix: "/api/v1/users/me/gpa-targets", desc: "GPA 목표 설정 및 시뮬레이션" },
    { name: "ai", prefix: "/api/v1/ai", desc: "AI 수강 추천, 캐시/쿨다운 상태 조회" },
    { name: "curriculum / user_majors", prefix: "/api/v1/curriculum, /majors", desc: "학과별 커리큘럼 버전 조회" },
  ],
};

// 트러블슈팅 카드
export const troubleshooting = [
  {
    title: "재업로드 시 데이터 중복",
    tag: "PostgreSQL · Trigger",
    problem:
      "재등록한 사용자가 성적표를 다시 업로드하면 DB 트리거가 기존 lecture_validation row를 갱신하지 않고 새로 생성해, total_val_score와 match_count가 실제보다 부풀려졌습니다.",
    solution:
      "과목 + 학기 + 사용자를 조합한 해시인 snap_unique_hash를 추가하고, 쓰기 전에 이 해시로 기존 row가 있는지 먼저 검사하도록 트리거를 변경했습니다: 있으면 UPDATE, 없으면 INSERT. nullable 컬럼 간 중복까지 막기 위해 Partial Unique Index도 추가했습니다.",
  },
  {
    title: "유저마다 다른 성적표 양식",
    tag: "Parsing · anchor_resolver",
    problem:
      "인적사항 블록이 반복되거나 행 전체가 밀리는 경우가 있어, 고정 좌표 기준 파싱이 상당수 실패했습니다.",
    solution:
      "anchor_resolver를 만들었습니다: '개인별 전체 성적조회'라는 고정 문구를 앵커로 찾고, 그 기준 상대 좌표로 헤더와 데이터 시작 행을 계산합니다. 검증 실패 시 즉시 삭제하지 않고, 동적 탐색을 한 번 더 시도한 뒤에만 삭제하도록 순서를 바꿨습니다.",
  },
  {
    title: "반복 실패 양식 탐지 (Schema Drift)",
    tag: "Elastic Stack · Kibana",
    problem:
      "Kibana에서 동일한 form_hash가 여러 사용자에게 걸쳐 반복적으로 실패했습니다 — 특정 학과나 버전의 성적표를 파서가 지원하지 못하는 경우였습니다.",
    solution:
      "schema_drift_viewer.html을 직접 만들어 실패 케이스의 셀 구조를 시각화해 케이스별로 비교했습니다. 이를 통해 단순 사용자 실수와 학교 측 양식 변경을 구분했고, 후자만 동적 앵커 탐색으로 L2 파서를 업데이트하도록 했습니다.",
  },
  {
    title: "pandas mask()가 None 치환에 조용히 실패",
    tag: "ETL · pandas",
    problem:
      "df.mask(df.isna(), None)으로 NaN을 None으로 바꾸려 했지만, 숫자형 컬럼이 dtype을 유지하면서 치환이 무시됐습니다.",
    solution:
      "replace({np.nan: None})은 dtype을 object로 바꿔주지만, NaT나 pd.NA 같은 다른 결측 형태는 여전히 빠져나갔습니다. 최종적으로 df.where(pd.notnull(df), None)을 사용했습니다 — '값을 바꾸는 것'과 '타입을 바꾸는 것'이 다른 문제라는 걸 깨달은 계기였습니다.",
  },
  {
    title: "Docker Compose 변수 치환 타이밍",
    tag: "Docker Compose",
    problem:
      "로컬 전용 .env.local에서 DB 이름을 zolver_db_local로 지정했는데, 컨테이너는 계속 기본 .env의 zolver_db로 올라왔습니다.",
    solution:
      "compose.yml의 env_file은 컨테이너 실행 시점에 적용되지만, \u0024{DB_NAME} 치환은 파싱 시점에 일어나 기본 .env가 먼저 읽힌 게 원인이었습니다. --env-file .env.local을 명시적으로 지정해 파싱 시점에 올바른 파일을 읽도록 해결했습니다.",
  },
  {
    title: "한글 초성 검색",
    tag: "Feature · Unicode",
    problem:
      "수강 시뮬레이션 페이지에서 과목명을 전체 입력해야 해서 번거로웠습니다. /courses/verified 로그(246회 호출) 분석 결과 초성 입력 패턴이 다수 확인됐습니다.",
    solution:
      "완성형 한글 코드에서 '가'를 기준으로 588(21×28)씩 초성이 바뀌는 유니코드 구조를 이용해 초성을 추출했습니다. '자료구조' → 'ㅈㄹㄱㅈ'로 매칭됩니다.",
  },
];

// 설계 인사이트
export const designInsights = [
  {
    title: "공통 엔진은 상속, 도구는 조합",
    body:
      "검증 단계가 늘어날수록 순수 상속만으로는 클래스 구조가 점점 경직됐습니다. BaseValidator는 상속으로 공통 엔진(실행 루프, 실패 처리, 로그 포맷)을 제공하고, 실제 추출 로직(Extractor)은 각 검증기 내부에 조합(인스턴스)으로 보유합니다. 새로운 검증 타입이 추가돼도 steps 리스트와 전용 Extractor만 교체하면 됩니다.",
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
    title: "상황에 맞는 SQLAlchemy 결과 처리 메서드 선택",
    body:
      "응답 속도와 메모리를 위해 추출 메서드를 의도적으로 구분해서 썼습니다. scalar()는 단일 값만 추출해 불필요한 row 인스턴스화를 막고, mappings()는 컬럼명 접근을 추가하는 대신 인덱싱 오버헤드가 더 들어 API가 필드를 dict로 다뤄야 할 때 유리합니다. fetchone()은 다음 순회를 위해 커서를 열어두지만 first()는 확인 즉시 커서를 닫아, 단건 조회엔 first(), 배치 순회엔 fetchone()을 써서 동시 접속 환경에서 커넥션 누수를 막았습니다.",
    code: null,
  },
  {
    title: "두 개의 해시값, 두 개의 다른 역할 — 계정 삭제 시",
    body:
      "provider_id_hash와 저장된 refresh token은 둘 다 해시되지만, 의도적으로 서로 다른 속성을 갖습니다. provider_id_hash는 결정론적 해시라 동일한 카카오 계정은 항상 같은 값으로 매핑됩니다 — 이는 업로드별 lecture_evidence의 멱등성을 유지시켜주고, 계정 삭제·재가입에도 안정적인 식별자를 L3 신뢰도 엔진에 제공해 match_count가 계정 리셋으로 부풀려지지 않게 합니다. refresh token은 한 번만 검증하면 되고 다시 매칭할 필요가 없으므로 비결정론적(솔트 추가) 해시를 사용합니다. 계정 삭제 시 users 행은 제거되고 나머지 모든 user_id 참조는 NULL로 설정되지만 — user_actions_log의 provider_id_hash는 의도적으로 그대로 남겨둡니다.",
    code: null,
    diagram: "kakaoLoginSequence",
  },
  {
    title: "복사-붙여넣기 필드가 만든 해시 충돌",
    body:
      "lecture_evidence의 각 row에 붙는 unique_hash는 멱등성을 위해 존재합니다: 동일한 사용자가 동일한 학년/학기에 동일한 과목을 업로드하면 항상 같은 row로 매핑돼야 합니다. 최초 버전의 입력 문자열은 lecture_name 대신 lecture_category를 두 번 포함하고 있었습니다 — 그래서 같은 카테고리·학년·학기에 속한 서로 다른 두 과목이 조용히 같은 해시로 충돌했고, 하나가 다른 하나를 덮어썼습니다. 원본 문자열에 lecture_name을 포함시켜 해결했습니다.",
    code: `# 수정 전 — lecture_category가 두 번, lecture_name이 빠짐
uhashraw = f"{lecture_category}:{lecture_code}:{completion_year}:{completion_semester}"

# 수정 후 — lecture_name을 포함해 같은 카테고리/학년/학기의
# 과목끼리 더 이상 충돌하지 않음
uhashraw = f"{lecture_name}:{lecture_code}:{completion_year}:{completion_semester}"
unique_hash = generate_unique_hash(pihash=provider_id_hash, uhashraw=uhashraw)

def generate_unique_hash(pihash, uhashraw):
    salt = settings.SALT
    raw_text = f"{pihash}:{uhashraw}:{salt}"
    return hashlib.sha256(raw_text.encode()).hexdigest()`,
  },
];

// AI 추천 스토리
export const aiStory = {
  title: "AI 수강 추천 — 두 번의 실패가 가르쳐준 것",
  lead:
    "\u201C추천의 품질은 AI 모델보다 입력 데이터의 신뢰성과 파이프라인의 안정성에 더 좌우된다.\u201D AI로 모든 것을 자동화하려다 실패하고, AI 없이 직접 해결하려다 또 실패한 끝에 도달한 결론입니다.",
  failures: [
    {
      title: "1차 시도 — 완전 자동화",
      desc: "학과·연도별 커리큘럼 PDF를 AI로 파싱해 DB를 정규화하려 했지만, 환각이 프롬프트만으로는 통제되지 않았고 결과 검증 작업이 줄어들기는커녕 두 배로 늘었습니다.",
    },
    {
      title: "2차 시도 — AI 없이 직접 파싱",
      desc: "테이블 형식 PDF의 텍스트가 중간에 잘리고(\u201C디자인대학\u201D → \u201C디자인대\u201D), 매년 스키마가 바뀌어(예: 2024년 의대 신설) 고정 로직이 범용적으로 통하지 않았습니다.",
    },
  ],
  resolution:
    "진짜 병목은 신뢰할 수 있는 데이터였습니다. 업로드된 성적표가 누적되며 신뢰도 점수를 넘으면 검증된 과목 데이터로 승격되는 자체 데이터 거버넌스 파이프라인을 만들었고, 사전 학과 DB 구축 없이 50개 넘는 학과 데이터를 확보했습니다.",
  implementation:
    "백엔드가 커스텀 정렬 기준으로 후보를 추려 LLM에 전달하는 구조입니다: 1) 전공필수 과목, 2) 동일 학번대에서 이수 빈도가 높은 과목(학과 코드 기준, admission_stats), 3) 최근 개설 연도순. 매번 API를 호출하는 비효율을 줄이기 위해 결과를 DB에 30분간 캐시합니다.",
};

export const techStack = [
  { name: "FastAPI", desc: "비동기 요청 처리, Pydantic 기반 검증" },
  { name: "PostgreSQL · SQLAlchemy", desc: "관계형 데이터 정합성; ::jsonb 캐스팅 충돌은 CAST(:param AS jsonb)로 해결" },
  { name: "Apache Airflow", desc: "검증 파이프라인 배치, 로컬 SSH 터널로 운영 DB에 연결" },
  { name: "Elastic Stack", desc: "검증 실패 로그를 인덱싱해 재업로드 패턴과 양식 오류를 모니터링" },
  { name: "React", desc: "카카오 OAuth 기반 인증 흐름과 사용자 대시보드 UI" },
  { name: "Docker Compose · Nginx · AWS EC2", desc: "1GB RAM에서도 안정적으로 동작하도록 튜닝한 인프라" },
];

// 로그/모니터링
export const observability = {
  intro:
    "운영 서버(1GB)는 Elasticsearch를 돌릴 수 없어서(최소 2GB 필요), scp로 로그를 받아와 Filebeat → Elasticsearch → Kibana로 로컬에서 분석합니다.",
  logTypes: [
    { name: "transcript_val", desc: "업로드별 L1+L2 전체 실행 이력, 규칙 단위로" },
    { name: "failed_schema", desc: "L2 헤더 불일치 — 예상 헤더와 실제 헤더 순서/내용 비교" },
    { name: "schema_mismatch_masked", desc: "마스킹된 50×50 셀 스냅샷 + form_hash 지문" },
  ],
  indexNote:
    "history 필드가 failed_schema 로그에선 문자열이지만 transcript_val에서는 JSON 객체라, 같은 인덱스에 섞으면 Elasticsearch 매핑 충돌이 발생해 두 로그 계열을 별도 인덱스(zolver-schema-*, zolver-val-*)로 분리했습니다.",
  driftLogic:
    "서로 다른 사용자가 동일한 form_hash로 반복 실패한다면, 그 해시는 파서가 아직 인식하지 못하는 성적표 양식을 가리킵니다 — 단순 사용자 실수가 아니라 학교 측 양식 변경의 신호입니다.",
  dashboards: [
    "업로드 성공/실패 비율 (is_all_success)",
    "Schema Drift 탐지 — form_hash별 실패 건수 집계",
    "로거 타입별 실패 건수 — failed_schema vs. schema_mismatch_masked",
    "provider_id_hash별 실패 집계 — 반복 오류를 겪는 사용자 식별",
  ],
};

// 손필기 노트
export const studyNotes = {
  intro:
    "전과 후에도 회로 관련 과목에서 계속 어려움을 겪었는데, 4학년 운영체제 수업이 전환점이 됐습니다. 하드웨어의 논리적·물리적 동작을 손으로 그려가며 정리하는 습관이 그때부터 지금까지 이어지고 있습니다.",
  items: [
    { topic: "Race Condition & 동기화", caption: "공유 자원에 여러 주체가 동시 접근할 때 충돌을 막는 원리 — Zolver의 동시 업로드 처리에도 그대로 적용됨", image: null },
    { topic: "세마포어", caption: "세마포어 구현 중 막혔던 부분을 직접 그려가며 정리한 노트", image: null },
    { topic: "가상 메모리", caption: "페이지 테이블과 주소 변환 과정을 단계별로 정리한 노트", image: null },
    { topic: "컴퓨터 구조", caption: "가장 어려웠던 과목 — 처음으로 전공 서적을 직접 구매하게 만든 과목", image: null },
  ],
};

export const footer = {
  note: "데이터의 흐름을 끝까지 추적합니다 — 보이는 화면보다, 그 아래 흐르는 데이터에 더 오래 머뭅니다.",
};
