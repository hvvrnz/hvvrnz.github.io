// ============================================================
// Portfolio Content (English Version)
// Written so that even first-time visitors can understand it —
// technical jargon is explained in plain language.
// ============================================================

export const profile = {
  name: "Yoonjeong Hwang (hvvrnz)",
  greeting: "Hi, I'm Yoonjeong Hwang.",
  role: "Data Engineering · Backend / Infrastructure Design",
  tagline: "I like studying deeply, documenting what I learn, \n and growing through that process.",
  current: "Developed a project as part of a 2-person finalist team in the Yogiyo × Oracle Hackathon.",
  links: {
    github: "https://github.com/hvvrnz",
    velog: "https://velog.io/@0lalsoo",
    service: "https://www.zolver.co.kr",
  },
  hashtags: ["#Positive", "#Resource_Optimization", "#Data_Integrity", "#ProblemSolving"],
  certifications: ["Engineer Information Processing (정보처리기사)", "SQLD"],
};

// Core operating metrics
export const stats = [
  { value: "309+", label: "Registered Users", sub: "Since official launch on 2026.6.8 (login_sessions)" },
  { value: "5,558+", label: "Courses Processed to Date", sub: "Total rows in lecture_evidence (including duplicates)" },
  { value: "63 Departments", label: "Department Data Secured", sub: "Number collected without pre-building a database per department" },
  { value: "54%", label: "Core Feature Conversion Rate", sub: "Share of visitors who uploaded a transcript or manually registered courses" },
  { value: "86%", label: "Pipeline Parsing Success Rate", sub: "Success rate for automatically reading uploaded transcripts (based on log analysis)" },
  { value: "47.9%", label: "Signup → Transcript Upload Conversion", sub: "148 of 309 pure signups uploaded a transcript (login_sessions, users)" },
  { value: "11 users", label: "Active via manual entry only, no transcript", sub: "transcript_upload_count = 0 but has real course data on file" },
  { value: "1,637", label: "Unique course records accumulated", sub: "Deduplicated by lecture_code · name · category" },
];

// Origin story — the survey result that changed the service direction
export const originSurvey = [
  { label: "Biggest difficulty when registering for classes → \n \u201Cchoosing courses that satisfy graduation requirements\u201D", value: "79.4%" },
  { label: "Everytime (timetable app) usage rate", value: "92.6%" },
  { label: "Manually tracking graduation requirements \n (Word · Excel · Notion · notes app)", value: "64.8%" },
];

export const originStory = `Zolver started as a capstone project. At first, I set "timetable recommendation" as the core feature and surveyed 68 college students. \n In November 2025, my team and I finished development in a local environment and completed the project.\n 
But after the project wrapped up, I kept thinking it over. \n
Even if you recommend a great timetable, doesn't it mean nothing if course registration itself fails? \n Looking back at the survey results, I realized what students actually needed most wasn't a timetable recommendation, but a clear, at-a-glance view of "what I still need to graduate." \n 
So I re-centered the service around "letting users customize and cleanly visualize their graduation requirements," and I handled everything myself — planning, development, and operations. \n Since launch, I've continued running the service as its sole operator, personally handling user inquiries and bug reports. \n Below are the results of the survey conducted during the capstone project.`;

// Actual user support records during operation (evidence photos)
// export const originEvidence = {
//   caption: "Records of directly responding to real user inquiries through an open chat.",
//   images: ["userSupportChat1", "userSupportChat2"],
// };

export const serviceIntro = {
  description:
    "Upload the official transcript (Excel file) downloaded from your school portal, and the service automatically classifies which courses you've taken and shows what's left for graduation. It goes beyond simply summing credits — offering detailed completion tracking by category, course-taking simulation, GPA analysis, and AI course recommendations.",
  features: [
    { title: "Course Registration", desc: "Upload your transcript, or simply enter your basic info without a transcript — either way, once you're registered you can use all features.", image: null },
    { title: "Graduation Requirement Analysis", desc: "Instantly check how many major, general education, and other credits you've completed.", image: null },
    { title: "Tag Management", desc: "Create custom sub-categories within your major/general education requirements and customize the minimum credits for each.", image: null },
    { title: "Course Simulation", desc: "Pre-enter courses you plan to take and check whether your graduation requirements would be satisfied.", image: null },
    { title: "GPA Analysis", desc: "View your GPA trend by semester as a graph, and simulate what's needed to hit a target GPA.", image: null },
    { title: "Course Explorer", desc: "Search courses registered by admins and verified via a trust score, and see completion patterns by student cohort for that course.", image: null },
    { title: "AI Course Recommendation", desc: "Get course recommendations (via the Gemini API) based on your graduation requirements, cohort, and department data.", image: null },
    { title: "Kakao Login", desc: "Log in easily with a single tap using your Kakao account.", image: null },
  ],
};

// Architecture diagrams — actual system structure
export const architecture = {
  intro:
    "Infrastructure architecture, pipeline structure, and ERD.",
  infra: {
    title: "Server Structure",
    caption:
      "The service runs on a single server (AWS EC2, Ubuntu, 1GB RAM). \n Instead of running the frontend in a Docker container, I build the React app into static files and let Nginx serve them directly. Running it in a container would mean an extra resident process consuming memory, which is a heavy cost in a 1GB environment. \n Since Nginx is already running as the API proxy, adding static file serving on top of it adds almost no extra memory overhead. \n That said, if user numbers grow significantly, international users start coming in, or the build needs to serve a large volume of images/videos, I think it would make sense to move build files to an S3/CloudFront-based CDN so the EC2 instance can focus purely on API processing. \n Stage 1 and Stage 2 validation happen immediately on the same server right after upload, with results saved to PostgreSQL. Stage 3 trust-score calculation runs on my own computer on a schedule (via Airflow) instead of the low-memory production server, connecting securely to the production database over SSH — this way, the server itself never has to handle the heavy lifting.",
  },
  pipeline: {
    title: "Full Validation Pipeline",
    caption:
      "The pipeline is split into three validation stages. Data that fails Stage 1 is deleted immediately without any record kept. Stage 1 only logs which step failed and the filename — the content of the file itself is never known. This is by design, to prevent malicious uploads. \n Stage 2 failures are logged for later pattern analysis. File contents are masked before being logged, and if a file unrelated to transcripts (with none of the whitelist keywords) is uploaded, no content log is stored at all — even masked — so the content stays unknown. \n Course data that passes Stage 2 is stored as a snapshot, and Stage 3 runs separately as a scheduled local batch job, where only data whose trust score clears a threshold gets promoted to official data.",
  },
  erd: {
    title: "ERD",
    caption:
      "Raw uploaded data (lecture_evidence) flows into per-rule validation results (lecture_validation), which are aggregated into a trust score (lecture_frequency). Only data whose trust score clears the threshold is registered as official course data (lecture_master), and all other features in the app rely solely on this official data.",
    designNote:
      "Some data is intentionally duplicated. On a 1GB-RAM server, I judged that JOIN operations under traffic spikes are riskier than duplicating some data. So, weighing table count against data volume, I denormalized the schema in favor of simple, read-optimized lookups.",
  },
};

// Troubleshooting (problem-solving experience)
export const troubleshooting = [
  {
    title: "Duplicate data piling up on re-upload",
    tag: "PostgreSQL · Triggers (auto-execution logic)",
    problem:
      "When a user who had withdrawn and rejoined uploaded their transcript again, the database created new rows instead of updating existing ones, which inflated the trust score and cumulative count beyond their real values.",
    solution:
      "I added a unique value (snap_unique_hash) combining course + semester + user info, and made the system check for an existing match against this value before saving: update if it exists, insert if it doesn't. To also prevent NULL values from being falsely matched as duplicates, I added a conditional unique index (a constraint that only prevents duplication under specific conditions).",
  },
  {
    title: "Diagnosing a recurring failure in a specific form",
    tag: "Log Analysis (Elastic Stack · Kibana)",
    problem:
      "In the log analysis dashboard (Kibana), I noticed the same form pattern (form_hash) repeatedly failing across multiple users — a sign that the program couldn't yet parse a particular department's transcript, or a particular version of the form.",
    solution:
      "I built a tool called schema_drift_viewer.html to visually compare the cell structure of failed transcripts. It pulls logs of failed parsing attempts from ELK, pastes them in, and converts them into an Excel-like visual layout. I'm currently working through cases specifically caused by format changes during download, so the program can learn to read the new format as well.",
    images: ["schemaViewerInput", "schemaViewerGrid"],
  },
  {
    title: "Missing values weren't being handled",
    tag: "Data Processing · pandas",
    problem:
      "I tried using df.mask(df.isna(), None) to convert empty (NaN) values in the transcript Excel file to None, but this had no effect at all on numeric columns.",
    solution:
      "I tried a similar approach, replace({np.nan: None}), which did change the column type, but other kinds of empty values (NaT, pd.NA) were still ignored. In the end, df.where(pd.notnull(df), None) solved it. This taught me that 'replacing a value' and 'changing a type' are actually two different problems.",
  },
  {
    title: "A config file loading-order issue",
    tag: "Docker Compose",
    problem:
      "I had set the database name to zolver_db_local in my local dev config file (.env.local), but the container kept running with zolver_db from the default config file (.env) instead.",
    solution:
      "The cause was that while env_file in compose.yml is applied when the container starts, the variables inside it (${DB_NAME}) are resolved earlier — so the default config file was being read first. I fixed this by explicitly specifying --env-file .env.local, so the correct file gets read at the point variables are resolved.",
  },
  {
    title: "Searching courses by Korean initial consonants",
    tag: "Feature Addition · Unicode",
    problem:
      "On the course simulation screen, users had to type the full course name, which was inconvenient. Analyzing actual API call logs (246 calls) showed a common pattern of users typing only the initial consonants.",
    solution:
      "I built a feature that extracts initial consonants using the underlying character code values for Korean text — leveraging the rule that the initial consonant changes every 588 (21×28) code points starting from '가'. For example, typing '자료구조' matches against 'ㅈㄹㄱㅈ'.",
  },
  {
    title: "Stage 3 trust-score calculation/promotion and dump-step errors (in progress)",
    tag: "Airflow · PostgreSQL",
    problem:
      "TODO: Errors are occurring at the trust-score calculation/lecture_master promotion stage, and at the db_dump step at the end of the batch. I plan to document the exact symptoms and root cause.",
    solution:
      "TODO: Root-cause analysis and resolution write-up to come.",
  },
   {
    title: "Stage 2 static-parsing related errors (in progress)",
    tag: "Python · ETL Pipeline",
    problem:
      "TODO: Errors are occurring related to static parsing (reading data based on fixed positions) during Stage 2 validation. I've identified the exact symptoms and cause, and I'm currently working on a fix.",
    solution:
      "TODO: Resolution write-up to come.",
  },
  
];

// Design decisions and lessons learned
export const designInsights = [
  {
    title: "Shared behavior via inheritance, tools via composition",
    body:
      "I designed a parent class, BaseValidator, that holds only the behavior common to every validator — running steps in order, handling failures, and log formatting — creating one log object per file and passing it down for consistent logging. \n Since the actual work (extracting, transforming, and loading transcript data) is a tool rather than shared behavior, I kept it out of the inheritance chain — each validator instead creates and uses its own TranscriptPipeline object (composition). The steps list pairs each RuleCode with the function that executes it, so which rule failed and which function ran it always travel together. When a new type of validation is needed, BaseValidator stays untouched — you just plug in a new steps list and pipeline.",
    code: `class L2TranscriptValidator(BaseValidator):
    def __init__(self, log_helper):
        super().__init__(log_helper)
        self.pipeline = TranscriptPipeline(log_helper)  # composition (built and used separately)
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
    title: "Optimizing database queries per use case",
    body:
      "To maximize response speed and memory efficiency, I split query methods based on the nature of the data being fetched. \n scalar() is used when fetching a single value, eliminating unnecessary object-creation overhead. \n mappings() is used when building API responses that need direct column-name access, improving readability. \n For lookups, first() closes the connection as soon as a result is confirmed, while fetchone() keeps the connection open for sequential processing. \n This combination prevents connection leaks even under many concurrent connections, keeping the server stable.",
    code: null,
  },
  {
    title: "Hash design balancing security and data integrity",
    body:
      "I split the hashing strategy into two types depending on the data's purpose. \n\n" +
      "1. Deterministic hash for consistent identification (provider_id_hash): \n" +
      "The same Kakao account always produces the same hash value (SHA256+SALT). This lets the service recognize the same person even after they withdraw and rejoin, preserving data continuity for things like cumulative trust scores and usage-pattern analysis. \n\n" +
      "2. Non-deterministic hash for security (refresh_token): \n" +
      "Since security is the top priority for auth tokens, I used the bcrypt algorithm. Because bcrypt applies a different salt internally each time, the same token produces a different hash value every time it's hashed — which makes it fundamentally impossible to trace back to the original token even if the database is compromised. \n\n" +
      "This balances two separate goals: consistency for data analysis, and maximum security for authentication data.",
    code: null,
    diagram: "kakaoLoginSequence",
  },
  {
    title: "Duplicate detection and data integrity management",
    body:
      "Course data duplication is determined by a combination of specific columns (lecture_code, name, credit, category), which accurately tracks the contribution of each independent upload. \n I designed it so that scores in lecture_validation persist even after a user withdraws, preserving data permanence. \n The Airflow batch is designed to selectively score only rows where validation_score is still empty. \n This prevents already-processed 'orphan' rows from being recalculated, and keeps processing efficient by only handling newly registered data.",
    code: null,
  },
  {
    title: "JWT-based authorization and state synchronization",
    body:
      "I embed the permission level (Guest/Member) determined at login directly into the JWT payload, allowing instant permission checks from the token itself instead of querying the database on every request. \n To solve the 'stale token that hasn't been refreshed yet' problem, I placed logic at each relevant endpoint to immediately reissue a new token with updated permissions the moment a state change occurs (e.g., a transcript upload). \n This minimizes round trips to the database and reduces server load, while still guaranteeing the user's permission state is always up to date in real time.",
    code: null,
  },
];

// The story behind building AI course recommendations
export const aiStory = {
  title: "AI Course Recommendation — Getting There After Two Failed Attempts",
  lead:
    "\u201CI came to believe that a good recommendation depends less on the AI model itself, and more on how trustworthy the input data is, and how stable the process that produces that data is.\u201D \n This is the conclusion I reached after first failing by trying to automate everything with AI, and then failing again by trying to handle everything manually without AI.",
  failures: [
    {
      title: "Attempt 1 — Automate everything with AI",
      desc: "I tried to have AI read PDFs containing each department's year-by-year curriculum and automatically organize them into a database, but the AI kept generating content that wasn't factually accurate (hallucination), which prompting alone couldn't fix — and the verification workload doubled instead of shrinking.",
      notebookUrl: "https://nbviewer.org/url/hvvrnz.github.io/notebooks/02_llm_json_structure_test.ipynb",
    },
    {
      title: "Attempt 2 — Rule-based parsing, no AI at all",
      desc: "So I wrote rule-based parsing code by hand instead, but the token-handling logic meant to distinguish college names from department names hit unexpected cases and crashed with a ValueError. On top of that, the table structure changed every year (e.g., a new medical school added in 2024), so fixed rules alone couldn't cover every case.",
      notebookUrl: "https://nbviewer.org/url/hvvrnz.github.io/notebooks/03_before_llm_data_restruct.ipynb",
    },
  ],
  resolution:
    "The real problem was a lack of trustworthy data. So I built a self-contained data validation pipeline: as users upload official transcripts, that data accumulates, and once it crosses a trust-score threshold, it's automatically promoted to verified course data. This let me collect data for over 50 departments without ever pre-building a database for each one.",
  implementation:
    "The backend ranks candidate courses using its own criteria before passing them to the AI (LLM): \n\n 1) Required major courses \n 2) Major courses taken heavily by students in the same cohort \n 3) Recently opened courses — in that order. \n\n Since calling the AI on every request would be inefficient, recommendation results are cached in the database for 30 minutes and reused.",
};

export const techStack = [
  { 
    name: "FastAPI", 
    desc: "Chosen to overcome the synchronous-processing limits of Flask and to efficiently handle high traffic asynchronously within a 1GB-RAM environment. Strict schema validation via Pydantic added extra reliability." 
  },
  { 
    name: "PostgreSQL", 
    desc: "Chosen to take advantage of JSONB's flexibility for handling semi-structured data effectively. I considered NoSQL, but ultimately chose PostgreSQL given how essential ACID transaction reliability and data integrity are to this service. Layering JSONB flexibility on top of relational stability gave me the scalability needed for data engineering work." 
  },
  { 
    name: "Apache Airflow", 
    desc: "Adopted to automate and schedule ongoing data-validation jobs. I set up SSH tunneling between my local environment and the production DB, allowing a stable data pipeline to run even with limited resources." 
  },
  { 
    name: "Elastic Stack (ELK)", 
    desc: "Chosen to quickly spot failure patterns and data-format errors within growing log volumes. Drawing on the tech stacks used by large-scale services like KakaoBank, I use structured log analysis to manage data quality in real time." 
  },
  { 
    name: "React", 
    desc: "Chosen to smoothly handle a fairly complex auth flow and to present users with an intuitive data-visualization dashboard, improving overall UX satisfaction." 
  },
  { 
    name: "Docker Compose · Nginx · AWS EC2", 
    desc: "Pushed optimization to the limit to work within a constrained 1GB-RAM infrastructure. I used Docker resource limits and swap memory configuration to keep the container-based service stable, and used Nginx to distribute traffic and maximize availability." 
  },
];

// Logging / monitoring
export const observability = {
  intro:
    "Since the production server (1GB RAM) can't run Elasticsearch directly (it needs at least 2GB), I scp log files to my own computer and analyze them locally through Filebeat → Elasticsearch → Kibana.",
  logTypesTitle: "Log Types",
  indexNoteTitle: "Why the Logs Are Split Into Two Indices",
  driftLogicTitle: "Format-Drift Detection Logic",
  dashboardsTitle: "Dashboards",
  logTypes: [
    { name: "transcript_val", desc: "A rule-by-rule record of exactly how Stage 1 and Stage 2 validation went for each upload" },
    { name: "failed_schema", desc: "Cases where the header (the table's first row) didn't match in Stage 2 validation — comparing the expected header order/content against the actual one" },
    { name: "schema_mismatch_masked", desc: "A privacy-masked 50×50 cell snapshot, plus a unique value (form_hash) identifying the form type" },
  ],
  indexNote:
    "The 'history' field is a plain string in failed_schema logs but a JSON object in transcript_val logs, so putting both into the same Elasticsearch index caused a type conflict. I resolved this by storing the two log types in separate indices (zolver-schema-*, zolver-val-*).",
  driftLogic:
    "If different users keep failing repeatedly with the exact same form identifier (form_hash), that's not just user error — it's a sign the program doesn't yet recognize a newly introduced transcript format, meaning the school likely changed its form.",
  dashboards: [
    "Upload success/failure ratio (is_all_success)",
    "Format-change detection — failure counts aggregated by form identifier (form_hash)",
    "Failure counts by log type — failed_schema vs. schema_mismatch_masked",
    "Failure counts by user (provider_id_hash) — identifying users who keep hitting errors",
  ],
};


// Real-usage data insights, found by querying the production DB directly
export const dataInsights = {
  intro:
    "There's no separate dashboard, so whenever I'm curious about a number, I've gotten into the habit of writing SQL directly against the production DB. Along the way, questions I hadn't originally thought to ask kept showing up — and those questions ended up pointing to what to fix next.",
  metricsTitle: "Metrics Confirmed by Query",
  opsNoteTitle: "Ops Note",
  reflectionTitle: "Takeaway",
  metrics: [
    {
      label: "Signup → transcript upload conversion",
      value: "47.9%",
      sub: "148 of 309 pure signups uploaded a transcript",
      query:
        "SELECT COUNT(*) FROM login_sessions; -- 309\nSELECT COUNT(*) FROM users WHERE transcript_upload_count >= 1; -- 148",
      note:
        "More than half of signups leave without uploading anything, which made me want to dig further into event logs to see whether there's drop-off during onboarding.",
    },
    {
      label: "Users active with manual entry only, no transcript",
      value: "11 users",
      sub: "transcript_upload_count = 0 but has rows in lecture_evidence",
      query:
        "SELECT COUNT(DISTINCT u.user_id)\nFROM users u\nJOIN lecture_evidence le ON le.user_id = u.user_id\nWHERE u.transcript_upload_count = 0;",
      note:
        "This was the first time I confirmed, in numbers, that people from schools where transcript upload isn't well supported yet were still actively using the service through manual entry alone. It's the moment I decided manual entry deserves to be treated as a real entry path, not just a fallback.",
    },
    {
      label: "Unique course records accumulated",
      value: "1,637",
      sub: "Deduplicated by lecture_code · lecture_name · lecture_category",
      query:
        "SELECT COUNT(*) FROM (\n  SELECT lecture_name, lecture_code, lecture_category, COUNT(*) AS cnt\n  FROM lecture_evidence\n  GROUP BY lecture_code, lecture_name, lecture_category\n) sub;",
      note:
        "This number came purely from user uploads, with no department database pre-built ahead of time — running this query myself was the moment the validation pipeline stopped being theoretical and started feeling real.",
    },
  ],
  opsNote:
    "I also manage the notices table directly, with hands-on UPDATE/DELETE statements. There's still a record of me shipping a UI fix after a user reported that the mobile menu didn't close on background tap, then writing up the notice myself. It's a small but direct trace from a single user report to a shipped fix.",
  reflection:
    "The 47.9% conversion number on its own reads like meaningful drop-off, but it says nothing about the 11 users who keep using the service without ever uploading a transcript. That's the gap: aggregate metrics show what isn't working, but not why something is still working despite it. Since then, I prioritize pulling out small, exceptional segments and inspecting them separately, even when the sample size is tiny, rather than reading only the top-line rate.",
};

// Yogiyo × Oracle Hackathon retrospective
export const hackathonRetro = {
  title: "Yogiyo × Oracle Hackathon Retrospective",
  summary:
    "We beat a 23:1 selection ratio to make it to the finals as one of 8 teams, but didn't place. I owned backend, infrastructure, dispatch algorithm, real-time stream processing, and cook-time prediction correction. What stuck with me longer than the result were the questions I kept asking myself while preparing the presentation.",
  overview: {
    title: "Project Overview",
    body:
      "A system that predicts cook time across multiple concurrent orders and uses that prediction to optimize rider delivery sequencing. The goal was to keep food from going cold by factoring in cook-completion timing, while keeping rider routes efficient.",
  },
  architecture: {
    title: "Architecture Flow",
    diagram: "hackathonArchitecture",
    steps: [
      "Order placed → streamed through Kafka (clustering)",
      "Nearby riders searched via Redis Geo",
      "Sequencing Engine — brute-force optimization (90 pickup+dropoff candidates)",
      "Cook-time prediction corrected via Oracle AI Vector Search (23ai)",
      "Result saved to Oracle Autonomous Database",
      "Dispatch explanation generated by LLM (OCI Generative AI)",
      "FastAPI returns the final delivery order + explanation → rendered per role (customer/store owner/rider)",
    ],
    note:
      "Store-owner actions (start/finish cooking) and rider actions (accept/pick up/complete) are handled separately from this automated pipeline — FastAPI updates Oracle ADB/Redis state the moment each request comes in.",
    designChoices: [
      {
        title: "Why only Kafka and Redis were containerized",
        body:
          "Stateful middleware (Kafka, Redis) deserved a reproducible, isolated environment. Application code that changes constantly (FastAPI, the stream processor), on the other hand, went straight onto the VM so I could edit and see changes immediately, without a container build/restart cycle slowing down hackathon-pace iteration.",
      },
      {
        title: "Why brute-force search was the right call here",
        body:
          "What's being brute-forced isn't actual road-network routing — it's a sequencing problem: deciding the visit order for a fixed set of already-known pickup/dropoff points. Real shortest-path calculation was skipped in favor of haversine distance, and since each cluster is capped at 3 orders (MAX_CLUSTER_SIZE=3), that's at most 6 stops and at most 90 possible orderings. At that size, guaranteeing the global optimum via brute force cost less in implementation complexity than a heuristic approximation would have. That assumption breaks down as cluster size grows, which is exactly why scaling the search to larger order volumes was explicitly scoped out.",
      },
    ],
  },
  coldStart: {
    title: "Handling Cold Start — Vector Search Fallback Design",
    body:
      "We addressed the cold-start problem (new stores without their own cook-time history) using Oracle AI Vector Search. Store context (day of week, time slot, concurrent order count, menu composition) is embedded into a 1024-dimension vector via Cohere Embed, then we widen the search in stages to find similar cases.",
    steps: [
      "The store's own history",
      "Same region + same brand",
      "Different region + same brand",
      "Same region + same category (different brand)",
      "Entire category (region-agnostic)",
    ],
    note:
      "We prioritized brand over region in the fallback order: same region but a different brand still means a different recipe, menu composition, and kitchen workflow — weak reference value. A different region but the same brand means an identical recipe and manual, making it a far more reliable reference for cook time specifically. Every actual cook-completion time gets appended to vector_cases as a new case, feeding the next prediction.",
  },
  techStackTitle: "Tech Stack",
  techStack: [
    { name: "Kafka (KRaft mode)", desc: "Streams incoming orders in real time for clustering. Ran in KRaft mode without Zookeeper to cut down infra components." },
    { name: "Redis (Geo index)", desc: "Geo-based search for nearby riders. Owns fast-changing state — rider location and assignability (BUSY/AVAILABLE) — in real time." },
    { name: "Python brute-force scoring", desc: "The Sequencing Engine evaluates all 90 pickup+dropoff order candidates within a cluster to find the optimal route." },
    { name: "Oracle AI Vector Search (23ai) + Cohere Embed", desc: "Looks up similar past cook cases via embeddings to correct cook-time predictions — the core of cold-start handling." },
    { name: "Oracle Autonomous Database (ADB, Developer Free)", desc: "Stores order and dispatch data. Vector Search support at the DB level meant no separate vector database was needed." },
    { name: "LLM (OCI Generative AI)", desc: "Applied selectively, only where multiple cases genuinely need to be synthesized into an explanation (store-owner screen copy). Rider traffic notices and customer delay notices, which need no judgment call, are handled by templates instead, keeping LLM calls to a minimum." },
    { name: "FastAPI", desc: "Role-based API server. Separated handler (decision/computation) from repository (DB access) so routers never write raw SQL directly." },
    { name: "Vite + React", desc: "Frontend built as a thin loader that renders the right screen per role." },
    { name: "OCI Compute VM + Docker", desc: "Kafka and Redis containerized on a VM.Standard.E4.Flex instance (4 OCPU/32GB, Oracle Linux 8); Python services installed directly on the VM." },
  ],
  scope: {
    title: "What Was Built vs. Scoped Out",
    doneLabel: "Done",
    scopedOutLabel: "Scoped out",
    done: [
      "Kafka-based real-time order ingestion, clustering, brute-force dispatch route optimization",
      "5-tier Vector Search fallback (actually run and verified)",
      "Filtering out dispatches that fall below a minimum profit threshold",
      "Cook-time prediction ↔ actual feedback loop (stored and reused via vector_cases.actual_cook_time)",
    ],
    scopedOut: [
      "Handling rider rejection or response timeouts",
      "Comparing multiple rider candidates (currently a greedy pick of the nearest one)",
      "Scheduled batch recomputation of vector_cases (not running)",
      "Clustering compute optimization for large order volumes (hundreds+ concurrent)",
      "Live GPS integration (currently simulated)",
    ],
  },
  pointsTitle: "Retrospective",
  points: [
    {
      title: "Never quantified the cost of adopting Vector Search up front",
      body:
        "We generated real embeddings with Cohere Embed and applied them to cook-time prediction, but never benchmarked token cost per query, added latency, or the accuracy drop in cold-start cases (new stores hitting fallback tier 4) against the rule-based approach before building. In practice, the rule-based fallback chain (store → brand → category → global average) ended up carrying most of the accuracy, with Vector Search functioning as a supporting input at best. Next time I'd benchmark whether embedding-based similarity search actually beats a rule-based approach at this scale (~1,000 stores) before building the prototype, not after.",
    },
    {
      title: "Spread effort evenly across screens instead of concentrating it on the bottleneck",
      body:
        "We split dev time roughly evenly across building customer, store-owner, and rider demo screens, but the actual bottleneck was a single question: does the rider trust the dispatch enough to accept it immediately? With only two people, spreading across three screens diluted the time that should have gone toward the metric that actually mattered — dispatch acceptance rate. Next time I'd define the bottleneck metric first and cut any screen from prototype scope that doesn't directly move it.",
    },
    {
      title: "Unnormalized input data was a hard limit",
      body:
        "Menu-level cook-time data doesn't exist — store owners enter one cook-time value per order, not per item. I proposed a regression-based approach to back out each menu item's contribution from order-level totals as a way forward, but didn't implement or validate it. I left it as an open hypothesis and said so plainly in the presentation: it can't be validated without real production data.",
    },
  ],
  images: ["hackathonDemo1", "hackathonDemo2"],
};

export const footer = {
  note: "I'll keep doing my best to trace data all the way through and ensure reliability.",
};

// Section titles/labels — kept separate so titles switch along with the language toggle

export const sectionTitles = {
  origin: { eyebrow: "// origin", title: "From Timetable Recommendations to Graduation Requirement Visualization" },
  project: { eyebrow: "// zolver in production", title: "From a Local Project to a Live Production Service" },
  architecture: { eyebrow: "// system design", title: "Architecture" },
  troubleshooting: { eyebrow: "// troubleshooting", title: "Troubleshooting", lead: "Real problems I ran into while running the service, and how I solved them. Click to expand." },
  observability: { eyebrow: "// observability", title: "Pipeline Monitoring After Launch" },
  designInsights: { eyebrow: "// design insight", title: "Design Decisions" },
  aiStory: { eyebrow: "// AI usage" },
  techStack: { eyebrow: "// stack", title: "Tech Stack" },
  studyNotes: { eyebrow: "// study notes", title: "A Habit of Structuring Notes, Built by Hand After Switching Majors" },
  dataInsights: { eyebrow: "// data insights", title: "Numbers I Confirmed Directly From the Production DB" },
  hackathonRetro: { eyebrow: "// hackathon retro", title: "Yogiyo × Oracle Hackathon Retrospective", lead: "Grouped by category and collapsed by default. Click to expand." },
};