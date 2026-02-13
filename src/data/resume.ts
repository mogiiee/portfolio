import type { FontPreset } from "@/lib/fonts";

export const resume = {
  name: "Amogh Arya Munipalle",
  title: "FDE Backend Developer | DevOps Engineer | Cloud Developer",
  summary:
    "Forward deployed engineer focused on building intelligent, cloud-native systems with customers in mind. I bridge client needs and technical teams to ship reliable solutions — from automated CI/CD pipelines and serverless platforms to AI-powered bots and customer retention tools. 2.5 years of experience delivering high-impact systems across cloud infrastructure, pipeline automation, and applied AI.",
  location: "West Lafayette, Indiana",
  contact: {
    email: "amogh.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/amogh-arya-b548b1203/",
    github: "https://github.com/mogiiee"
  },
  theme: {
    fontPreset: "spaceGrotesk" as FontPreset,
    accent: "#0B6CFF",
    accentSoft: "#CDE5FF",
    background: "#F6F4FF",
    surface: "#FFFFFF",
    text: "#0B0B0D",
    muted: "#4B5563",
    border: "#E3E6EE"
  },
  navigation: [
    { label: "Education", href: "#education" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    tagline: "Forward deployed engineering for secure, customer-first systems.",
    ctaPrimary: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/amogh-arya-b548b1203/"
    },
    ctaSecondary: {
      label: "View GitHub",
      href: "https://github.com/mogiiee"
    },
    stats: [
      { label: "Years Experience", value: "2.5+", icon: "⚡" },
      { label: "Requests/Day Capacity", value: "100K+", icon: "🚀" },
      { label: "Projects Shipped", value: "50+", icon: "📦" },
      { label: "AI Precision", value: "90%+", icon: "🎯" },
      { label: "GPA at Purdue", value: "3.89", icon: "🎓" },
      { label: "AI Bots Built", value: "30+", icon: "🤖" }
    ]
  },
  about: [
    "I operate at the intersection of client needs and technical delivery, translating business goals into intelligent, cloud-native systems. I build end-to-end automated pipelines — from CI/CD and infrastructure-as-code to AI-powered workflows — that let teams ship faster and retain customers at scale.",
    "As a forward deployed engineer, I embed with stakeholders and engineering teams to deliver outcomes fast. My work spans serverless architecture, DevOps automation, and applied AI — including building AI bots for real-time audio classification, voice-driven interfaces, and intelligent alerting systems that turn raw signals into actionable insights."
  ],
  skills: [
    {
      title: "Languages",
      items: [
        "Python",
        "Go",
        "JavaScript",
        "HTML/CSS"
      ]
    },
    {
      title: "Systems & Virtualization",
      items: [
        "Linux",
        "VirtualBox",
        "Virtual Machines",
        "Vagrant"
      ]
    },
    {
      title: "Frameworks",
      items: ["FastAPI", "Flask", "Django", "GoGin"]
    },
    {
      title: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "Terraform", "Heroku", "Git", "GitHub Actions"]
    },
    {
      title: "AWS & GCP",
      items: ["VPC", "Lambda", "S3", "EC2", "SNS", "ECS", "IAM", "ELB", "RDS", "Route53"]
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "Redis", "Firebase", "AWS S3", "LangChain (vector)"]
    },
    {
      title: "Client Management",
      items: ["Stakeholder Communication", "Requirements Gathering", "MVP Scoping & Delivery", "Cross-functional Collaboration", "Client Retention Strategy"]
    }
  ],
  experience: [
    {
      company: "Freight Pins",
      role: "Founding Software Engineer",
      location: "Remote, Virginia",
      dates: "Dec 2023 - Dec 2025",
      highlights: [
        "Collaborated directly with clients to understand requirements and develop MVPs, architecting serverless cloud infrastructure processing 100K+ daily requests using AWS Lambda, DynamoDB, S3, SNS/SQS, SES, CloudWatch, and JWT encryption with 2FA.",
        "Automated the end-to-end client onboarding process with a Node.js web automation framework for contract generation and integration, reducing manual effort by 60%.",
        "Used Terraform to create staging environments and automate VPC provisioning, paired with CI/CD pipelines via Docker and GitHub Actions for zero-downtime deployments — cutting release cycles by 40%.",
        "Led cross-functional initiatives and onboarded three developers; introduced performance monitoring with CloudWatch and DataDog to improve system reliability by 25%."
      ]
    },
    {
      company: "Purdue Civil Engineering",
      role: "Research Assistant · AI Developer (Part-time)",
      location: "Purdue University, West Lafayette",
      dates: "Mar 2025 - Jun 2025",
      highlights: [
        "Built a real-time shooter detection system on Raspberry Pi using YOLOv8 with thermal-RGB fusion, achieving ~90% precision and 86% recall.",
        "Engineered an audio classification model using Mel-spectrograms, PANN embeddings, and CNNs to detect gunshots and screams with 93% accuracy.",
        "Integrated visual, auditory, and thermal AI models into a Unity-based digital twin to classify threat levels and trigger automated alerts.",
        "Collaborated with external stakeholders to understand project requirements, align deliverables with research timelines, and ensure on-time delivery of all milestones."
      ]
    },
    {
      company: "Purdue Nuclear Engineering",
      role: "Research Assistant · Cyber Security Developer (Part-time)",
      location: "Purdue University, West Lafayette",
      dates: "Aug 2024 - Jan 2025",
      highlights: [
        "Developed secure and encrypted communication protocols for two drones in flight, enabling real-time encrypted data exchange over long-range links using ESP32 microcontrollers with secure RNG and linear-algebra key generation.",
        "Designed covert data-embedding protocols in microcontroller metadata and request timing for stealthy drone-to-drone communications.",
        "Implemented encryption algorithms on ESP32/ESP8266 systems for IIoT data pipelines, adopted across Purdue labs to improve long-range secure communication.",
        "Authored research documentation on lightweight cryptographic models for resource-constrained edge devices, contributing to ongoing nuclear security research."
      ]
    },
    {
      company: "MysticLabs",
      role: "DevOps Intern · Deployments Engineer (Part-time)",
      location: "Remote",
      dates: "Jun 2023 - Aug 2023",
      highlights: [
        "Worked with Dell as a client, training custom LLMs on proprietary enterprise data using LangChain and vector databases (Pinecone, ChromaDB) with chunking strategies for accurate retrieval-augmented generation.",
        "Built and deployed web crawlers using Apify to scrape and ingest large-scale datasets, feeding them into vector stores for LLM fine-tuning and semantic search pipelines.",
        "Containerized microservices with Docker and implemented Celery with RabbitMQ to handle parallel AI inference workloads at scale.",
        "Shipped product integrations to WhatsApp using the Twilio API and added four real-time webhooks for automated customer interactions."
      ]
    },
    {
      company: "SwiftSKU (Y Combinator)",
      role: "Backend Developer Intern (Part-time)",
      location: "Remote",
      dates: "Jul 2022 - Aug 2025",
      highlights: [
        "Selected as a backend developer intern at a Y Combinator-backed startup, working extensively with AWS Step Functions to build 10+ state machines using Lambda for scalable serverless automation.",
        "Designed and provisioned production VPCs with public/private subnets, NAT gateways, and security groups to isolate microservice workloads across AWS environments.",
        "Implemented end-to-end CI/CD pipelines with GitHub Actions and Docker, automating build, test, and deployment workflows for rapid feature delivery.",
        "Built AWS SNS/SQS pipelines for high-priority system alerts and event-driven architectures, ensuring reliable message processing across distributed services."
      ]
    }
  ],
  projects: [
    {
      name: "Distributed Kubernetes Microservice Pipeline",
      period: "Feb 2025",
      location: "Purdue University, West Lafayette",
      stack: "YAML, Virtual Machines, Kubernetes, Docker, System Networking",
      image: "/images/project-1.png",
      highlights: [
        "Deployed a distributed system on a remote VM using Vagrant + VirtualBox with two Kubernetes pods running containerized services.",
        "Enabled secure external access with NGrok tunnels and a Streamlit UI, forwarding results across pods via webhooks.",
        "Automated container builds and rollouts with GitHub Actions and YAML workflows."
      ]
    },
    {
      name: "Iris-Based Multi-Disease Classification System",
      period: "Dec 2023",
      location: "Vellore Institute of Technology",
      stack: "MLOps, Docker, Computer Vision, APIs, MongoDB",
      image: "/images/project-2.png",
      highlights: [
        "Built a deep-learning pipeline to classify seven ophthalmic diseases using 50,000+ iris images, improving accuracy by ~18%.",
        "Containerized the ML lifecycle to enable reproducible experiments and reduce environment issues by 95%.",
        "Designed microservices for asynchronous ingestion, preprocessing, and inference with a FastAPI backend.",
        "Performed large-scale statistical analysis and tuned hyperparameters to exceed 92% diagnostic precision."
      ]
    },
    {
      name: "AI-Powered Stress & Productivity Analytics (I2safe)",
      period: "Sep 2024 - Nov 2024",
      location: "Purdue University",
      stack: "Python, FastAPI, Docker, scikit-learn, pandas, NumPy, cvxEDA, Matplotlib",
      image: "/images/project-3.png",
      highlights: [
        "Engineered an end-to-end ML pipeline ingesting 500K+ physiological sensor readings — EDA, heart rate, and skin temperature — with automated regex-based cleaning and pandas transformations.",
        "Applied cvxEDA decomposition and ensemble ML models (Random Forest, XGBoost) to classify stress and emotional states in real time with over 90% reliability.",
        "Fused ambient environmental signals (temperature, humidity, CO₂) with biometric data, boosting productivity prediction accuracy by 15%.",
        "Built a FastAPI inference service containerized with Docker, enabling researchers to query stress predictions via REST API with sub-200ms latency.",
        "Delivered interactive Matplotlib and Plotly dashboards for Purdue researchers to visualize trends across 30+ participant sessions."
      ]
    },
    {
      name: "Multi-Cloud DLP & Security Automation Platform",
      period: "Oct 2024 - Dec 2024",
      location: "Purdue University",
      stack: "FastAPI, MongoDB, AWS S3, GCP Storage, Firebase, Streamlit, Mailjet API, Regex DLP Engine",
      image: "/images/project-4.png",
      highlights: [
        "Architected a multi-cloud security platform that continuously scans AWS S3 buckets and GCP Storage objects for misconfigurations, open permissions, and sensitive data exposure.",
        "Built a custom regex-based DLP engine detecting PII, API keys, and secrets across 100+ cloud resources with 97% pattern-match accuracy.",
        "Designed an automated alerting pipeline using Mailjet API — security violations trigger instant email reports to stakeholders, reducing incident response time by 20%.",
        "Developed a real-time Streamlit monitoring dashboard with live resource health, scan history, and severity-ranked findings for at-a-glance security posture.",
        "Backed by a MongoDB data layer storing scan metadata, audit trails, and historical compliance snapshots for enterprise-grade traceability."
      ]
    },
    {
      name: "Real-Time Payment & CRM Sync Engine",
      period: "Feb 2024",
      location: "Vellore Institute of Technology",
      stack: "FastAPI, Stripe API, Salesforce API, Celery, RabbitMQ, Ngrok, Docker, SQLite, MySQL",
      image: "/images/project-5.png",
      highlights: [
        "Built a real-time event-driven microservice that syncs payment transactions from Stripe and customer records from Salesforce into a unified local database via webhook listeners.",
        "Implemented asynchronous task processing with Celery + RabbitMQ, handling bursty webhook payloads without data loss or duplicate processing.",
        "Exposed secure tunnel endpoints via Ngrok for local development, enabling end-to-end testing of Stripe checkout flows and Salesforce contact updates in real time.",
        "Designed a dual-database architecture (SQLite for dev, MySQL for production) with SQLAlchemy ORM, enabling seamless environment parity and zero-config local runs.",
        "Containerized the full stack with Docker Compose for one-command deployment, supporting horizontal scaling of worker nodes."
      ]
    },
    {
      name: "Secure Blogger — Role-Based Publishing Platform",
      period: "Apr 2023",
      location: "Vellore Institute of Technology",
      stack: "Python, FastAPI, JWT, OAuth 2.0, Docker, GitHub Actions, PostgreSQL",
      image: "/images/project-6.png",
      highlights: [
        "Designed and built a full-stack blogging API with granular role-based access control — admin, editor, and reader tiers — enforced via JWT tokens and OAuth 2.0 flows.",
        "Implemented secure CRUD endpoints with input validation, rate limiting, and request signing to defend against injection and replay attacks.",
        "Set up a CI/CD pipeline with GitHub Actions that runs linting, unit tests, and Docker image builds on every push, achieving zero-downtime deployments.",
        "Containerized the application with multi-stage Docker builds, reducing image size by 60% and cold-start time by 3×.",
        "Added structured JSON logging and health-check endpoints for production observability and uptime monitoring."
      ]
    }
  ],
  education: [
    {
      school: "Purdue University",
      degree: "Master's in Computer and Information Technology",
      location: "West Lafayette, Indiana, USA",
      dates: "Aug 2024 - Present",
      details: "GPA: 3.89/4"
    },
    {
      school: "Vellore Institute of Technology",
      degree: "Bachelor's in Electrical and Electronics Engineering",
      location: "Vellore, India",
      dates: "May 2020 - May 2024",
      details: "GPA: 8.51/10"
    }
  ],
  certifications: [
    {
      name: "Docker and Kubernetes: The Complete Guide",
      issuer: "Udemy",
      date: "May 2023",
      url: ""
    }
  ],
  achievements: [
    {
      icon: "🏗️",
      metric: "100K+",
      label: "Requests/Day",
      description: "Architected serverless cloud infrastructure on AWS Lambda, DynamoDB, and SQS processing 100K+ daily requests with zero downtime."
    },
    {
      icon: "🚀",
      metric: "40%",
      label: "Faster Releases",
      description: "Cut release cycles by 40% through automated CI/CD pipelines with Docker, GitHub Actions, and Terraform-managed staging environments."
    },
    {
      icon: "🎯",
      metric: "90%+",
      label: "AI Precision",
      description: "Built real-time shooter detection on Raspberry Pi using YOLOv8 with thermal-RGB fusion, achieving ~90% precision and 86% recall on edge devices."
    },
    {
      icon: "🔐",
      metric: "3",
      label: "Research Assistantships",
      description: "Held research assistantships at Purdue — encrypted drone comms for Nuclear Engineering, AI threat detection for Civil Engineering, and ML-based cone and construction safety detection models for the Indiana Department of Transportation."
    },
    {
      icon: "📜",
      metric: "Certified",
      label: "Docker & Kubernetes",
      description: "Completed Docker and Kubernetes: The Complete Guide (Udemy, May 2023) — applied containerization and orchestration across all production systems."
    },
    {
      icon: "🤝",
      metric: "5+",
      label: "Client Engagements",
      description: "Embedded with clients as a forward deployed engineer — scoping MVPs, gathering requirements, and shipping production systems aligned to business outcomes."
    }
  ],
  images: {
    headshot: "/images/headshot.png",
    projectImages: [
      "/images/project-1.png",
      "/images/project-2.png",
      "/images/project-3.png",
      "/images/project-4.png",
      "/images/project-5.png",
      "/images/project-6.png"
    ],
    gallery: [
      "/images/gallery-1.png",
      "/images/gallery-2.png",
      "/images/gallery-3.png"
    ]
  }
};
