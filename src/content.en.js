// ============================================================
// Portfolio Content (English)
// Translated and simplified for readers with no prior context.
// ============================================================

export const profile = {
  name: "Yoonjeong Hwang (hvvrnz)",
  greeting: "Hi, I'm Yoonjeong Hwang.",
  role: "Data Engineering · Backend / Infrastructure Design",
  tagline: "I enjoy studying things deeply, documenting what I learn, \n and growing through that process.",
  // current: "Currently,
  links: {
    github: "https://github.com/hvvrnz",
    velog: "https://velog.io/@0lalsoo",
    service: "https://www.zolver.co.kr",
  },
  hashtags: ["#Positive", "#ResourceOptimization", "#DataIntegrity", "#ProblemSolving"],
};

// Key operating metrics
export const stats = [
  { value: "172+", label: "Registered users", sub: "Since official launch on 2026.6.8" },
  { value: "2,538+", label: "Total courses processed", sub: "" },
  { value: "56", label: "Departments covered", sub: "Without building a pre-made department database" },
  { value: "54%", label: "Core feature conversion rate", sub: "Visitors who uploaded a transcript or manually registered courses" },
  { value: "86%", label: "Pipeline parsing success rate", sub: "Based on ELK log analysis" },
];

// Origin story — the survey that changed the project's direction
export const originSurvey = [
  { label: "Hardest part of course registration → \n \u201CChoosing classes that meet graduation requirements\u201D", value: "79.4%" },
  { label: "Usage rate of Everytime (timetable app)", value: "92.6%" },
  { label: "Manually tracking graduation requirements \n (Word · Excel · Notion · notes app)", value: "64.8%" },
];

export const originStory = `Zolver started as a graduation project. The original core feature was "timetable recommendation," and I ran a survey of 68 university students to validate it.

But a great timetable recommendation is useless if the student fails to register for the class in the first place. While analyzing the survey, I realized students didn't actually need a timetable recommender — what they needed was a clear, at-a-glance view of what they still needed to graduate. Based on that finding, I redefined the problem around visualizing graduation requirements, and handled everything from planning to development to operations myself from there. Since launch, I've also been handling user inquiries and bug reports directly as the service's sole operator.`;

// Real user support interactions during operation (evidence)
export const originEvidence = {
  caption: "Records of directly responding to real user inquiries through an open chat channel.",
  images: ["userSupportChat1", "userSupportChat2"],
};

export const serviceIntro = {
  description:
    "Upload the official transcript (an Excel file) downloaded from your school portal, and the service automatically classifies your completed courses and shows what's left to graduate. Beyond simple credit totals, it also offers tag-based detailed progress tracking, course simulation, GPA analysis, and AI course recommendations.",
  features: [
    { title: "Register completed courses", desc: "Become a verified member by uploading a transcript, or by filling out a short manual registration form — then add or edit individual courses by hand", image: null },
    { title: "Graduation requirement analysis", desc: "See major / general education / other credit completion in real time", image: null },
    { title: "Tag management", desc: "Create your own sub-categories for major/general education and set minimum required credits", image: null },
    { title: "Course simulation", desc: "Pre-register future courses to check whether graduation requirements would be met", image: null },
    { title: "GPA analysis", desc: "Visualize semester-by-semester GPA trends and simulate reaching a target GPA", image: null },
    { title: "Course catalog", desc: "Search admin-registered, trust-score-verified course data", image: null },
    { title: "AI course recommendation", desc: "Recommendations based on graduation requirements, GPA, admission year, and department data (via Gemini API)", image: null },
    { title: "Kakao login", desc: "Simple sign-in via Kakao OAuth", image: null },
  ],
};

export const pipelineNote =
  "Trusting a single person's transcript at face value is vulnerable to mistakes or manipulation. Data is only treated as \u201Ctrustworthy\u201D once multiple independent uploads agree with each other.";

// Architecture diagrams — pulled from the actual system
export const architecture = {
  intro:
    "Infrastructure diagram, validation pipeline, and ERD",
  infra: {
    title: "Infrastructure Diagram",
    caption:
      "Runs on a single EC2 instance (Ubuntu, 1GB RAM). Nginx serves the static React build and reverse-proxies /api to FastAPI. The L1/L2 validation pipeline runs synchronously inside the same container during import and writes to PostgreSQL. The L3 trust-scoring engine runs as a separate Airflow batch job on my local machine, connecting to the production database over an SSH tunnel — this keeps the 1GB server from having to run the scheduler itself.",
  },
  pipeline: {
    title: "Validation Pipeline (full detail)",
    caption:
      "Every rule from R100 through R205 is mapped end-to-end. By design, L1 failures are discarded immediately with no logging — logging why a malicious upload failed could expose the detection logic itself. L2 failures are logged for drift analysis. L3 runs as a separate batch job and only promotes data that clears the trust-score threshold.",
  },
  erd: {
    title: "Data Model",
    caption:
      "lecture_evidence (raw data per upload) feeds into lecture_validation (a per-rule snapshot), which is aggregated into lecture_frequency — the input to the L3 trust score. Only records that clear the threshold get promoted to lecture_master, and that's the only table the rest of the app actually reads from.",
    designNote:
      "Intentional denormalization: on a 1GB RAM environment, I judged that join costs under traffic spikes were riskier than some duplicate reads. Given the table count and data volume, I deliberately favored simple selects over join-dependent queries.",
  },
};

// Troubleshooting cards
export const troubleshooting = [
  {
    title: "Duplicate data on re-upload",
    tag: "PostgreSQL · Trigger",
    problem:
      "When a re-registered user re-uploaded their transcript, the database trigger created a new lecture_validation row instead of updating the existing one, inflating total_val_score and match_count beyond their real values.",
    solution:
      "Added snap_unique_hash, a hash combining the course, semester, and user, and changed the trigger to check for an existing row by this hash before writing: UPDATE if it exists, INSERT if it doesn't. Also added a partial unique index to prevent duplicates across nullable columns.",
  },
  {
    title: "Inconsistent transcript formats across users",
    tag: "Parsing · anchor_resolver",
    problem:
      "Some transcripts repeated the personal-info block multiple times or had entire rows shifted, so parsing based on fixed coordinates failed for a significant share of uploads.",
    solution:
      "Built anchor_resolver: it locates the fixed phrase \u201C개인별 전체 성적조회\u201D (full personal grade report) as an anchor, then calculates the header and data start rows relative to that anchor. Also changed the order so that, on a validation failure, the record isn't deleted immediately — dynamic anchor detection is retried first, and deletion only happens if that also fails.",
    images: ["duplicateHeaderUserReport"],
  },
  {
    title: "Detecting recurring format failures (schema drift)",
    tag: "Elastic Stack · Kibana",
    problem:
      "In Kibana, the same form_hash kept failing across multiple different users — indicating the parser didn't support a particular department's or version's transcript format.",
    solution:
      "Built schema_drift_viewer.html to visualize the cell structure of failed cases and compare them side by side. This let me distinguish simple user mistakes from actual school-side format changes, and only the latter triggered an L2 parser update via dynamic anchor detection.",
    images: ["schemaViewerInput", "schemaViewerGrid"],
  },
  {
    title: "pandas mask() silently failing to replace None",
    tag: "ETL · pandas",
    problem:
      "Tried to replace NaN with None using df.mask(df.isna(), None), but numeric columns kept their dtype and the replacement was silently ignored.",
    solution:
      "replace({np.nan: None}) did convert the dtype to object, but other forms of missing values (NaT, pd.NA) still slipped through. Ultimately solved it with df.where(pd.notnull(df), None) — a good lesson that \u201Cchanging a value\u201D and \u201Cchanging a type\u201D are two different problems.",
  },
  {
    title: "Docker Compose variable substitution timing",
    tag: "Docker Compose",
    problem:
      "Set the DB name to zolver_db_local in a local-only .env.local file, but the container kept coming up with zolver_db from the default .env instead.",
    solution:
      "The env_file directive in compose.yml is applied at container runtime, but \u0024{DB_NAME} substitution happens at parse time — so the default .env was being read first. Fixed it by explicitly specifying --env-file .env.local, ensuring the correct file is read at parse time.",
  },
  {
    title: "Searching Korean text by initial consonants",
    tag: "Feature · Unicode",
    problem:
      "On the course simulation page, users had to type the full course name, which was cumbersome. Analysis of /courses/verified logs (246 calls) showed a clear pattern of users typing just the initial consonants.",
    solution:
      "Extracted initial consonants by exploiting the Unicode structure of Korean syllable blocks, where the initial consonant shifts every 588 (21×28) code points starting from \u201C가.\u201D For example, \u201C자료구조\u201D (data structures) matches against \u201Cㅈㄹㄱㅈ.\u201D",
  },
  {
    title: "L3 trust score calculation, promotion & dump step failure (in progress)",
    tag: "Airflow · PostgreSQL",
    problem:
      "TODO: Currently debugging failures in the trust score calculation / lecture_master promotion step, and in the db_dump step at the end of the batch. Symptoms and root cause to be documented.",
    solution:
      "TODO: Root-cause analysis and fix to be written up.",
  },
];

// Design insights
export const designInsights = [
  {
    title: "Inheritance for the shared engine, composition for tools",
    body:
      "As more validation stages were added, a purely inheritance-based structure became increasingly rigid. BaseValidator provides the shared engine via inheritance — running each step in order, handling failures, formatting logs — while the actual work (extracting, transforming, loading the transcript) is held by composition: each validator instantiates a TranscriptPipeline object instead of inheriting that logic. The steps list pairs a RuleCode with a callable, so the rule that failed and the function that ran it stay attached to each other. Adding a new validation type just means swapping in a new steps list and pipeline, without touching BaseValidator.",
    code: `class L2TranscriptValidator(BaseValidator):
    def __init__(self, log_helper):
        super().__init__(log_helper)
        self.pipeline = TranscriptPipeline(log_helper)  # composition
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
    title: "Picking the right SQLAlchemy result method for the situation",
    body:
      "Deliberately used different extraction methods for speed and memory. scalar() pulls a single value without instantiating an unnecessary row object. mappings() adds column-name access at the cost of more indexing overhead, which is worth it when the API needs to treat the result as a dict. fetchone() keeps the cursor open for further iteration, while first() closes the cursor immediately after the check — so I used first() for single-row lookups and fetchone() for batch iteration, to avoid connection leaks under concurrent traffic.",
    code: null,
  },
  {
    title: "Two hashes, two different jobs — on account deletion",
    body:
      "provider_id_hash and the stored refresh token are both hashed, but deliberately behave differently. provider_id_hash is deterministic, so the same Kakao account always maps to the same value — this keeps lecture_evidence idempotent per upload, and gives the L3 trust-scoring engine a stable identifier even across account deletion and re-signup, so match_count isn't inflated by account resets. The refresh token only ever needs to be verified once and never needs to be matched again, so it uses a non-deterministic (salted) hash instead. On account deletion, the users row is removed and every other user_id reference is set to NULL — but the provider_id_hash left in user_actions_log is intentionally kept as-is.",
    code: null,
    diagram: "kakaoLoginSequence",
  },
  {
    title: "What counts as \"the same course,\" for dedup purposes",
    body:
      "lecture_frequency treats a course as the same unit based on four columns — lecture_code, lecture_name, lecture_credit, lecture_category — not on user_id or validation_id. That's deliberate: the table is meant to track how many independent uploads agree a course exists, not how many database rows point to it. On account deletion, lecture_evidence rows are deleted outright (freeing the unique_hash for reuse), while lecture_validation rows are kept with evidence_lec_id set to NULL, preserving the score they already contributed. If the same person re-signs up and re-uploads the same course, the trigger notices the orphaned row by snap_unique_hash but doesn't need to block anything: the Airflow batch only ever scores a lecture_validation row once (fetch_unvalidated() filters on validation_score IS NULL), so the already-scored orphan is never picked up a second time — only the freshly inserted row gets processed, exactly like any other new upload.",
    code: null,
  },
  {
    title: "Baking guest/member status into the token itself",
    body:
      "Guest vs. member is decided once, in a single branch right after login, and from there it's written straight into the JWT payload (status: \"guest\" | \"member\") instead of being re-queried from the DB on every request. Auth0 and Firebase's custom claims work the same way — the payoff is no DB round-trip just to check tier on each call. The usual risk with this pattern is staleness: if status changes mid-session, a cached token won't reflect it until the next refresh. There are two places where that transition actually happens — uploading a transcript (transcript.py), or filling out the short manual registration form with no transcript at all (register_router.py) — and every member-only endpoint in lecture_router.py checks status straight off the current token, with guests blocked outright. Both transition points close the gap themselves: each one issues a fresh access_token (and, for manual registration, a fresh refresh_token plus a re-hashed refresh_token_hash in the DB) with status=\"member\" directly in its own response, instead of waiting for the next refresh cycle.",
    code: null,
  },
];

// The AI recommendation story
export const aiStory = {
  title: "AI Course Recommendation — After Two Failed Attempts",
  lead:
    "\u201CThe quality of a recommendation depends less on the AI model itself and more on how trustworthy the input data is and how stable the pipeline producing it is.\u201D \n This is the conclusion I reached after trying to automate everything with AI and failing, then trying to handle everything manually without AI and failing again.",
  failures: [
    {
      title: "Attempt 1 — Full automation",
      desc: "Tried to use AI to parse department/year-specific curriculum PDFs and normalize them straight into the database, but hallucinations couldn't be controlled through prompting alone, and the verification work it created doubled instead of shrinking.",
      notebookUrl: "https://nbviewer.org/url/hvvrnz.github.io/notebooks/02_llm_json_structure_test.ipynb",
    },
    {
      title: "Attempt 2 — Manual parsing without AI",
      desc: "So I switched to rule-based parsing instead, but the token-handling logic that distinguished college names from department names hit a case it didn't expect (a department-like token with no numbers following it) and crashed with a ValueError. On top of that, the table schema changed every year (e.g. a new College of Medicine added in 2024), so a fixed parsing approach couldn't cover every case.",
      notebookUrl: "https://nbviewer.org/url/hvvrnz.github.io/notebooks/03_before_llm_data_restruct.ipynb",
    },
  ],
  resolution:
    "The real bottleneck was trustworthy data. I built a self-contained data governance pipeline where uploaded official transcript data accumulates and gets promoted to verified course data once it clears a trust-score threshold — and through that, gathered data for over 50 departments without ever building a pre-made department database.",
  implementation:
    "The backend narrows candidates down using custom sort criteria before passing them to the LLM. \n\n 1) Required major courses \n 2) Major courses with high completion frequency among students in the same admission cohort \n 3) Most recently offered courses. \n\n To avoid calling the API on every request, results are cached in the database for 30 minutes.",
};

export const techStack = [
  { name: "FastAPI", desc: "Asynchronous request handling with Pydantic-based validation" },
  { name: "PostgreSQL · SQLAlchemy", desc: "Relational data integrity; resolved ::jsonb cast conflicts using CAST(:param AS jsonb)" },
  { name: "Apache Airflow", desc: "Batch validation pipeline, connecting to the production database via a local SSH tunnel" },
  { name: "Elastic Stack", desc: "Indexes validation failure logs to monitor re-upload patterns and format errors" },
  { name: "React", desc: "Kakao OAuth authentication flow and the user dashboard UI" },
  { name: "Docker Compose · Nginx · AWS EC2", desc: "Infrastructure tuned to run reliably on just 1GB of RAM" },
];

// Logging / monitoring
export const observability = {
  intro:
    "The production server (1GB RAM) can't run Elasticsearch directly (it needs at least 2GB), so logs are pulled via scp and analyzed locally through Filebeat → Elasticsearch → Kibana.",
  logTypes: [
    { name: "transcript_val", desc: "Full L1+L2 execution history per upload, broken down rule by rule" },
    { name: "failed_schema", desc: "L2 header mismatches — comparing the expected header order/content against the actual one" },
    { name: "schema_mismatch_masked", desc: "A masked 50×50 cell snapshot plus a form_hash fingerprint" },
  ],
  indexNote:
    "The history field is a string in failed_schema logs but a JSON object in transcript_val logs, which caused an Elasticsearch mapping conflict when mixed into the same index — so I split the two log types into separate indices (zolver-schema-*, zolver-val-*).",
  driftLogic:
    "If different users keep failing with the same form_hash, that hash points to a transcript format the parser doesn't recognize yet — a signal of a school-side format change rather than a simple user mistake.",
  dashboards: [
    "Upload success/failure rate (is_all_success)",
    "Schema drift detection — failure counts aggregated by form_hash",
    "Failure counts by logger type — failed_schema vs. schema_mismatch_masked",
    "Failure counts by provider_id_hash — identifying users hitting repeated errors",
  ],
};

// Handwritten study notes
export const studyNotes = {
  intro:
    "I struggled with circuit-related courses early on, but after transferring majors, an operating systems course in my senior year became a turning point. Since then I've kept the habit of hand-drawing how hardware works, both logically and physically.",
  items: [
    { topic: "Race conditions & synchronization", caption: "Principles for preventing conflicts when multiple actors access the same resource — applied directly to preventing conflicts when multiple users upload transcripts to Zolver at the same time", image: "raceConditionNote" },
    { topic: "Virtual memory", caption: "Step-by-step notes on page tables and the address translation process", image: "virtualMemoryNote" },
  ],
};

export const footer = {
  note: "I'll keep tracing data all the way through and doing my best to ensure stability.",
};


// Section eyebrow/title pairs — used so headings actually switch language
// with the EN/KO toggle, instead of being hardcoded inside each component.
export const sectionTitles = {
  origin: { eyebrow: "// origin", title: "From timetable recommendation to graduation-requirement visualization" },
  project: { eyebrow: "// zolver in production", title: "From idea to a running service" },
  architecture: { eyebrow: "// system design", title: "Architecture" },
  troubleshooting: { eyebrow: "// troubleshooting", title: "Where I got stuck", lead: "Real problems I ran into while operating the service. Click to expand." },
  observability: { eyebrow: "// observability", title: "Watching the pipeline after launch" },
  designInsights: { eyebrow: "// design insight", title: "Design decisions" },
  aiStory: { eyebrow: "// AI usage" },
  techStack: { eyebrow: "// stack", title: "Tech stack" },
  studyNotes: { eyebrow: "// study notes", title: "A habit of sketching things out by hand" },
};