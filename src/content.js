// ============================================================
// Portfolio content (English)
// Edit text/numbers here only — components just render these values.
// To revert to Korean: copy content.ko.js over this file.
// ============================================================

export const profile = {
  name: "Yoonjeong Hwang",
  greeting: "Hi, I'm Yoonjeong Hwang.",
  role: "Aspiring Data Engineer · Backend / Data Pipeline",
  tagline: "I like studying things in depth, writing down what I learn, and growing through the process with the people I build with.",
  current: "Currently teaming up on a public-data ideas competition (Korea Arts & Culture Education Service).",
  links: {
    github: "https://github.com/hvvrnz",
    velog: "https://velog.io/@0lalsoo",
    service: "https://www.zolver.co.kr",
  },
  hashtags: ["#optimizing_under_constraints", "#obsessed_with_data_trust"],
};

// Core metrics for the stat cards
export const stats = [
  { value: "172+", label: "registered users", sub: "since launch on 2026.6.8" },
  { value: "2,538+", label: "course records processed", sub: "" },
  { value: "56", label: "departments covered", sub: "with zero pre-built department DB" },
  { value: "54%", label: "activation rate", sub: "users who uploaded a transcript or entered manually" },
  { value: "86%", label: "pipeline parse success rate", sub: "measured via ELK log analysis" },
];

// Origin — survey numbers that triggered the pivot
export const originSurvey = [
  { label: "Hardest part of course registration → \u201Cchoosing courses against graduation requirements\u201D", value: "79.4%" },
  { label: "Everytime (timetable app) usage rate among respondents", value: "92.6%" },
  { label: "Still tracking graduation requirements by hand (Word/Excel/Notion/notes)", value: "64.8%" },
];

export const originStory = `Zolver started as a capstone project. The original core feature was "timetable recommendation," and I surveyed 68 students to validate it.

Analyzing the responses, I found students didn't actually need timetable recommendations — they needed a single view of what was still missing to graduate. I redefined the problem around graduation-requirement visualization and rebuilt the product around it, then carried it through design, development, and operations entirely by myself.`;

export const serviceIntro = {
  description:
    "Upload the official transcript (Excel) downloaded from the university portal, and the system automatically classifies completed courses and shows exactly what's left to graduate. Beyond simple credit totals, it tracks tag-based requirement progress, runs course simulations, analyzes GPA, and recommends courses with AI.",
  features: [
    { title: "Course registration", desc: "Register course history via transcript upload or manual entry" },
    { title: "Requirement analysis", desc: "Real-time major / elective / general credit completion rates" },
    { title: "Tag management", desc: "Define custom major / elective sub-categories with minimum credit rules" },
    { title: "Course simulation", desc: "Pre-register planned courses to check requirement coverage" },
    { title: "GPA analysis", desc: "Semester-by-semester trend, target-GPA simulation" },
    { title: "Course directory", desc: "Search courses verified by the confidence algorithm" },
    { title: "AI course recommendation", desc: "Based on requirements, GPA, cohort, and major data (Gemini API)" },
    { title: "Kakao login", desc: "One-tap sign-in via Kakao OAuth" },
  ],
};

// 3-stage validation pipeline — used by Pipeline.jsx alongside the real diagram image
export const pipeline = [
  {
    stage: "L1",
    name: "Physical Check",
    detail: "Verifies file format, size, and metadata tampering. On failure, the file is destroyed immediately — no log (security).",
    items: ["File existence", "Extension (.xlsx)", "File size limit", "Author / timestamp integrity", "Temp dir movement"],
  },
  {
    stage: "L2",
    name: "Content Check + ETL",
    detail: "Confirms form integrity via fixed coordinates and header matching, then extracts → transforms → loads.",
    items: ["Whitelist scan", "Schema extraction", "Coordinate mapping", "Data transform", "Load into lecture_evidence"],
  },
  {
    stage: "L3",
    name: "Confidence Engine",
    detail: "Airflow batch (local, via SSH tunnel). Scores agreement across multiple users' data and promotes records past a threshold.",
    items: ["Excel source weighted higher", "Manual entry weighted lower", "Curriculum-match bonus", "match_count ≥ 2 & score ≥ 1.5 → promoted to lecture_master"],
  },
];

export const pipelineNote =
  "Trusting a single transcript outright is fragile against error or manipulation. Data only becomes \u201Ctrusted\u201D once enough independent uploads agree with each other.";

// Architecture diagrams — real exported images
export const architecture = {
  intro:
    "Three diagrams from the actual system: the infrastructure topology, the full validation pipeline, and the data model behind it.",
  infra: {
    title: "Infrastructure",
    caption:
      "Single EC2 instance (Ubuntu, 1GB RAM). Nginx serves the React build statically and reverse-proxies /api to FastAPI. The L1/L2 validation pipeline runs inside the same container via a synchronous import, writing to PostgreSQL. The L3 confidence engine runs as an Airflow batch on a local machine, connecting back to the production DB through an SSH tunnel — keeping the 1GB server from running a scheduler itself.",
  },
  pipeline: {
    title: "Validation pipeline (full detail)",
    caption:
      "Every rule from R100 to R205 mapped end to end. L1 failures are destroyed with no log, by design — logging a failed malicious upload would leak detection logic. L2 failures are logged for drift analysis. L3 runs as a separate batch and promotes data only past a confidence threshold.",
  },
  erd: {
    title: "Data model",
    caption:
      "lecture_evidence (raw, per-upload) feeds lecture_validation (per-rule snapshot) which aggregates into lecture_frequency, the input to the L3 confidence score. Only records that clear the threshold get promoted into lecture_master — the table the rest of the app actually reads from.",
    designNote:
      "Intentional denormalization: under 1GB of RAM, join cost under traffic spikes looked riskier than redundant reads. Given the table count and data volume here, I chose select-only access patterns on purpose instead of relying on joins.",
  },
};

// Backend API surface — from the zolver-backend README
export const apiOverview = {
  intro:
    "13 routers cover the full product surface — auth, transcript ingestion, requirement tracking, simulation, and AI recommendation — all under FastAPI with async SQLAlchemy.",
  stack: [
    { name: "FastAPI", desc: "async request handling, Pydantic validation" },
    { name: "PostgreSQL + SQLAlchemy (async)", desc: "relational integrity across users / lectures / evidence / master" },
    { name: "Kakao OAuth 2.0 + JWT", desc: "the only login path — no native sign-up, JWT verified by a global middleware" },
    { name: "Google Gemini API (gemini-2.5-flash)", desc: "course recommendation generation, cached" },
  ],
  routers: [
    { name: "auth", prefix: "/api/v1/auth", desc: "Kakao login, token refresh, logout" },
    { name: "upload", prefix: "/api/v1/upload", desc: "transcript .xlsx upload, triggers L1/L2 worker" },
    { name: "lecture", prefix: "/api/v1/courses", desc: "CRUD on completed courses, chosung-aware search" },
    { name: "tag", prefix: "/api/v1/tags", desc: "custom requirement tags, minimum-credit rules" },
    { name: "simulation", prefix: "/api/v1/simulation", desc: "register planned courses, view simulated outcome" },
    { name: "user_gpa", prefix: "/api/v1/users/me/gpa-targets", desc: "GPA targets and simulation" },
    { name: "ai", prefix: "/api/v1/ai", desc: "AI course recommendation, cache/cooldown status" },
    { name: "curriculum / user_majors", prefix: "/api/v1/curriculum, /majors", desc: "department curriculum versions" },
  ],
};

// Troubleshooting cards
export const troubleshooting = [
  {
    title: "Duplicate rows on re-upload",
    tag: "PostgreSQL · Trigger",
    problem:
      "When a returning user re-uploaded a transcript, the DB trigger inserted a new lecture_validation row instead of updating the existing one, inflating total_val_score and match_count beyond their real values.",
    solution:
      "Added snap_unique_hash — a hash of course + semester + user — and made the trigger check for an existing row by that hash before writing: UPDATE if found, INSERT if not. Added a partial unique index to also cover duplicates across nullable columns.",
  },
  {
    title: "Transcript formats differ across users",
    tag: "Parsing · anchor_resolver",
    problem:
      "Repeated personal-info blocks or shifted row offsets meant fixed-coordinate parsing failed for a meaningful share of uploads.",
    solution:
      "Built anchor_resolver: it locates the fixed phrase \u201Cfull personal transcript\u201D as an anchor, then computes header and data-start rows relative to it. Changed the failure path so a second dynamic-search attempt runs before a file is discarded, instead of deleting on first failure.",
  },
  {
    title: "Detecting repeated-failure formats (schema drift)",
    tag: "Elastic Stack · Kibana",
    problem:
      "In Kibana, the same form_hash kept failing across different users — a specific department or transcript version the parser didn't support.",
    solution:
      "Built schema_drift_viewer.html to visualize the failing cell structure case by case. This separated plain user error from genuine school-side format changes, and only the latter triggered an L2 parser update via dynamic anchor search.",
  },
  {
    title: "pandas mask() silently failing to write None",
    tag: "ETL · pandas",
    problem:
      "df.mask(df.isna(), None) was supposed to convert NaN to None, but numeric columns kept their dtype and ignored the substitution.",
    solution:
      "replace({np.nan: None}) changes the dtype to object, but other missing-value types (NaT, pd.NA) still slipped through. Settled on df.where(pd.notnull(df), None) as the final fix — a reminder that changing a value and changing a dtype are two different problems.",
  },
  {
    title: "Docker Compose env-var substitution timing",
    tag: "Docker Compose",
    problem:
      "A local-only .env.local set the DB name to zolver_db_local, but the container kept coming up with zolver_db from the default .env instead.",
    solution:
      "env_file: in compose.yml is applied at container runtime, but ${DB_NAME} substitution happens at parse time — when the default .env is read first. Fixed by passing --env-file .env.local explicitly so the correct file is read at parse time.",
  },
  {
    title: "Korean initial-consonant (chosung) search",
    tag: "Feature · Unicode",
    problem:
      "Typing full Korean course names was tedious in the simulation page. Log analysis on /courses/verified (246 calls) showed many of those calls were chosung-style partial input.",
    solution:
      "Used the Hangul syllable block structure — consonant index shifts every 588 (21×28) code points from '가' — to extract initial consonants, so '자료구조' matches 'ㅈㄹㄱㅈ'.",
  },
];

// Design insights
export const designInsights = [
  {
    title: "Inheritance for the shared engine, composition for the tools",
    body:
      "As validation layers grew, pure inheritance made the class hierarchy increasingly rigid. BaseValidator provides the shared engine (run loop, failure handling, log format) via inheritance; the actual extraction logic (Extractor) is held as a composed instance inside each validator instead. Adding a new validation type only means swapping the steps list and a dedicated Extractor.",
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
    title: "Choosing the right SQLAlchemy result method",
    body:
      "For response speed and memory, I picked extraction methods deliberately. scalar() drops everything but a single value, avoiding unnecessary row instantiation. mappings() adds column-name access at the cost of extra indexing overhead — useful when an API needs a dict of fields. fetchone() keeps the cursor open for further iteration; first() closes it immediately — so first() for single lookups, fetchone() for batch iteration, to avoid connection leaks under concurrent load.",
    code: null,
  },
  {
    title: "Two hashes, two different jobs, on account deletion",
    body:
      "provider_id_hash and the stored refresh token are both hashed, but deliberately with different properties. provider_id_hash uses a deterministic hash, so the same Kakao account always maps to the same value. That's load-bearing in two places: it's the input to a per-record unique_hash that keeps lecture_evidence idempotent (the same user uploading the same course for the same year/semester always resolves to the same row, never a duplicate), and it gives the L3 confidence engine a stable identity across deletion and re-signup — without it, the same person could resurface as a \u201Cnew\u201D account and inflate match_count artificially, corrupting the trust score for everyone, not just resetting one bad actor's history. The refresh token, by contrast, is hashed non-deterministically (salted), since it's a bearer secret rather than an identifier: it only ever needs to be verified, never matched against a second time. That distinction forced a security-vs-auditability trade-off that's visible directly in the schema: login_sessions keys off provider_id_hash, users keys off user_id, and user_actions_log carries both. On deletion, the users row is removed and every other user_id reference is set to NULL — except provider_id_hash inside user_actions_log, which is deliberately left in place.",
    code: `-- on account deletion
DELETE FROM users WHERE user_id = :id;
UPDATE user_actions_log SET user_id = NULL WHERE user_id = :id;
-- provider_id_hash in user_actions_log is left untouched,
-- so abuse history survives deletion without staying linkable
-- to an active account.`,
  },
  {
    title: "A hash collision from a copy-pasted field",
    body:
      "unique_hash on each lecture_evidence row exists for idempotency: the same user uploading the same course for the same year/semester should always resolve to the same row. The first version of the input string included lecture_category twice instead of including lecture_name — so two different courses in the same category, year, and semester silently collided into the same hash, and one of them quietly overwrote the other. Adding lecture_name to the raw string fixed it.",
    code: `# before — lecture_category appears twice, lecture_name is missing
uhashraw = f"{lecture_category}:{lecture_code}:{completion_year}:{completion_semester}"

# after — lecture_name included, so courses in the same
# category/year/semester no longer collide
uhashraw = f"{lecture_name}:{lecture_code}:{completion_year}:{completion_semester}"
unique_hash = generate_unique_hash(pihash=provider_id_hash, uhashraw=uhashraw)

def generate_unique_hash(pihash, uhashraw):
    salt = settings.SALT
    raw_text = f"{pihash}:{uhashraw}:{salt}"
    return hashlib.sha256(raw_text.encode()).hexdigest()`,
  },
];

// AI recommendation story
export const aiStory = {
  title: "AI course recommendation — what two failed attempts taught me",
  lead:
    "\u201CRecommendation quality depends less on the model and more on the reliability of the input data and the stability of the pipeline.\u201D I reached that conclusion after trying to automate everything with AI, failing, trying to solve it without AI at all, and failing again.",
  failures: [
    {
      title: "Attempt 1 — full automation",
      desc: "Tried parsing yearly per-department curriculum PDFs with AI to normalize a database, but hallucination wasn't controllable through prompting alone — manual verification work doubled instead of disappearing.",
    },
    {
      title: "Attempt 2 — manual parsing, no AI",
      desc: "Text in table-formatted PDFs kept truncating mid-word (\u201CCollege of Desi\u201D instead of \u201CCollege of Design\u201D), and the schema changed yearly (e.g. a new Medical College added in 2024), so no fixed logic generalized.",
    },
  ],
  resolution:
    "The real bottleneck was trustworthy data. I built a self-governing pipeline where uploaded transcripts accumulate and get promoted to verified course data once they clear a confidence score — and reached 50+ departments covered with zero pre-built department database.",
  implementation:
    "The backend filters candidates with a custom sort key before handing them to the LLM: 1) required-major courses, 2) courses with high completion frequency among the same admission cohort (by department code, from admission_stats), 3) most recently offered. To avoid calling the API on every request, results are cached in the DB for 30 minutes.",
};

export const techStack = [
  { name: "FastAPI", desc: "async request handling, Pydantic-based validation" },
  { name: "PostgreSQL · SQLAlchemy", desc: "relational data integrity; resolved ::jsonb cast conflicts with CAST(:param AS jsonb)" },
  { name: "Apache Airflow", desc: "validation pipeline batch, connecting to the prod DB via a local SSH tunnel" },
  { name: "Elastic Stack", desc: "indexes validation-failure logs to monitor re-upload patterns and form errors" },
  { name: "React", desc: "Kakao OAuth-based auth flow and the user dashboard UI" },
  { name: "Docker Compose · Nginx · AWS EC2", desc: "infrastructure tuned to run reliably on 1GB of RAM" },
];

// Observability — from the zolver-elastic README
export const observability = {
  intro:
    "Elasticsearch can't run on the 1GB production server (needs 2GB+), so logs are pulled down via scp and analyzed locally through Filebeat → Elasticsearch → Kibana.",
  logTypes: [
    { name: "transcript_val", desc: "full L1+L2 execution history per upload, rule by rule" },
    { name: "failed_schema", desc: "L2 header mismatches — expected vs. actual header order/content" },
    { name: "schema_mismatch_masked", desc: "a masked 50×50 cell snapshot plus a form_hash fingerprint" },
  ],
  indexNote:
    "history is a string field in failed_schema logs but a JSON object in transcript_val — mixing them in one index caused Elasticsearch mapping conflicts, so the two log families are split into separate indices (zolver-schema-*, zolver-val-*).",
  driftLogic:
    "If different users repeatedly fail with the same form_hash, that hash identifies a transcript format the parser doesn't recognize yet — a signal the school changed its export format, not a one-off user mistake.",
  dashboards: [
    "Upload success/failure ratio (is_all_success)",
    "Schema-drift detection — failure count grouped by form_hash",
    "Failures by logger type — failed_schema vs. schema_mismatch_masked",
    "Failures by provider_id_hash — surfaces users hitting repeated errors",
  ],
};

// Handwritten study notes — drop real scans into src/assets/notes/ and set `image` below
export const studyNotes = {
  intro:
    "Circuit-heavy courses kept giving me trouble even after switching majors, until a senior-year Operating Systems class changed that. Sketching out the logical and physical behavior of hardware by hand is a habit that's carried through from that class to now.",
  items: [
    { topic: "Race conditions & sync", caption: "How concurrent access to shared resources is kept from colliding — the same principle behind Zolver's concurrent-upload handling", image: null },
    { topic: "Semaphores", caption: "Worked through a sticking point on semaphore implementation by sketching it out", image: null },
    { topic: "Virtual memory", caption: "Page tables and address translation, broken into steps", image: null },
    { topic: "Computer architecture", caption: "The hardest course — the first one that made me buy the textbook on my own", image: null },
  ],
};

export const footer = {
  note: "Frontend moves fast; backend and the data pipeline get the careful treatment — a deliberate division of effort for someone aiming at data engineering.",
};
