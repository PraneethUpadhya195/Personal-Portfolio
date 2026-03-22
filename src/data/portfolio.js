export const meta = {
  name: "Praneeth R Upadhya",
  email: "praneethupadhya195@gmail.com",
  phone: "6363757715",
  github: "https://github.com/PraneethUpadhya195",
  linkedin: "https://www.linkedin.com/in/praneeth-r-upadhya-6957562a5/",
  resumeUrl: "https://drive.google.com/file/d/1k9hxyaRV06vzKsB3UvBw9pEZ2vEURTV8/view?usp=sharing",
  tagline: "ISE undergraduate at BMS College of Engineering — building at the intersection of ML, full-stack development, and competitive programming. Published researcher.",
  bio: [
    "I'm a final-year Information Science & Engineering student at BMS College of Engineering, Bengaluru, with a CGPA of 9.12. I have a strong foundation in full-stack development and machine learning, and I enjoy building scalable, data-driven solutions for real-world problems.",
    "I'm an active competitive programmer, and recently published research in Scientific Reports (Springer Nature) on physics-informed neural networks for battery health prediction.",
  ],
  stats: [
    { num: "9.12", label: "CGPA / 10" },
    { num: "3", label: "Projects shipped" },
    { num: "1", label: "Publication" },
    { num: "∞", label: "Curiosity" },
  ],
};

export const skills = [
  {
    group: "Languages",
    items: [
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
    ],
  },
  {
    group: "ML / Data",
    items: [
      { name: "PyTorch", icon: "devicon-pytorch-plain colored" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
    ],
  },
  {
    group: "Web / Backend",
    items: [
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Dash / Plotly", icon: "devicon-plotly-plain colored" },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
];

export const projects = [
  {
    num: "01",
    category: "ML / Research",
    title: "Physics-Informed LSTM for Battery Health Forecasting",
    desc: "Developed a physics-informed LSTM in PyTorch for battery State-of-Health forecasting, integrating monotonic degradation constraints via a custom multi-component loss function. Achieved 1.01% RMSE and 0.62% MAE on the NASA Battery Dataset using Bayesian hyperparameter tuning with Optuna.",
    stack: [
      { name: "PyTorch", icon: "devicon-pytorch-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Optuna", icon: null },
      { name: "NASA Dataset", icon: null },
    ],
    github: "https://github.com/praju120056/PINN-based-Hybrid-LSTM-Architecture-for-Battery-Degradation",
    demo: "https://doi.org/10.1038/s41598-026-37850-y",
    demoLabel: "Paper ↗",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "Real-Time Air Quality Monitoring System",
    desc: "Built a full-stack AQI monitoring system using Python, Flask, and MongoDB, processing live OpenWeatherMap API data to compute AQI per CPCB standards. Features an interactive Dash/Plotly dashboard with persistent storage and automated CSV export via Pandas.",
    stack: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "Plotly", icon: "devicon-plotly-plain" },
    ],
    github: "https://github.com/PraneethUpadhya195/AQI-Detector",
    demo: null,
  },
  {
    num: "03",
    category: "Full-Stack",
    title: "Skill Exchange Program",
    desc: "Full-stack skill-matching platform using Flask, MySQL, and JavaScript with a normalised relational schema and REST APIs for peer-to-peer matching. Secure auth via JWT and Werkzeug hashing, with a dynamic async frontend.",
    stack: [
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "JWT", icon: null },
    ],
    github: "https://github.com/PraneethUpadhya195/skill_exchange",
    demo: null,
  },
];

export const publication = {
  journal: "Scientific Reports · Springer Nature · 2026",
  title: "Temperature- and Impedance-Aware LSTM–PINN Framework for Physically Consistent Battery SOH Prediction",
  meta: "Preprint available · Peer-reviewed",
  doi: "https://doi.org/10.1038/s41598-026-37850-y",
  doiLabel: "DOI: 10.1038/s41598-026-37850-y ↗",
};

export const education = [
  {
    degree: "B.E. — Information Science & Engineering",
    school: "BMS College of Engineering, Bengaluru",
    score: "9.12 / 10",
    year: "2023 – 2027",
  },
  {
    degree: "Class XII — Karnataka State Board",
    school: "BASE PU College",
    score: "92.33%",
    year: "2021 – 2023",
  },
  {
    degree: "Class X — ICSE",
    school: "S Cadambi Vidya Kendra",
    score: "95%",
    year: "2011 – 2021",
  },
];
