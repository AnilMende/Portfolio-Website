export const projects = [
  {

    title: "Job Processing System",
    points: [
      "Engineered a distributed job processing system using Node.js, BullMQ, and Redis with worker-based concurrency, retry handling, and backpressure management, reducing job failure rate from 60% to 18%",
      "Achieved 38 req/sec throughput under 100+ concurrent users (82% success rate) by optimizing worker concurrency, queue throughput, and processing delays via k6 load testing",
      "Built a rate-limited API layer (18% throttling) ensuring stable, fault-tolerant execution under high-traffic conditions",
      "Integrated Redis Pub/Sub and developed a real-time monitoring dashboard using Socket.io, enabling scalable event-driven updates and live system visibility"
    ],
    tech: ["Node.js", "BullMQ", "Redis", "MongoDB", "React.js", "Socket.io"],
    github: "https://github.com/AnilMende/Scalable-Job-Processing-and-Notification-System",
    live: "https://jobs-processing-system.vercel.app/",
    coverImage: "/images/job-processing-coverimage.png"
  },
  {
    title: "Clinic-Appointment Booking System",
    points: [
      "Implemented role-based access control for Admin and Patients",
      "Designed a time-slot based booking system to prevent appointment conflicts",
      "Built admin dashboard to manage doctors, schedules, and appointments",
      "Developed REST APIs for booking, cancellation, and schedule management",
      "Handled form validation and ensured consistency of appointment data",
      "Optimized booking flow for better user experience and reduced manual effort"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/AnilMende/Clinic-Appointment-Booking-System-MERN-",
    live: "https://alhijama-clinic.vercel.app/",
    coverImage: "/images/clinic-appointment.png"
  },
  {
    title: "Scalable Backend API System",
    points: [
      "Architected a production-grade backend using MVC architecture with independently testable, modular service structure",
      "Established JWT-based authentication with token rotation and hashed storage, improving session security",
      "Improved API performance by 30% using Redis caching with optimized invalidation strategies",
      "Engineered secure workflows including email verification, password reset, and enforced API security best practices (validation, sanitization, rate limiting, Helmet, CORS)"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Cloudinary"],
    github: "https://github.com/AnilMende/Production-Backend-System",
    live: "https://production-backend-system-3.onrender.com/",
    coverImage: "/images/scalable-api-system.png"
  },
  {
    title: "Study Planner - Learning Productivity App",
    points: [
      "Built a secure full-stack Study Planner with JWT authentication, refresh token rotation, persistent login sessions, and role-based account management.",
      "Developed a comprehensive study management system featuring CRUD operations for subjects and topics, progress tracking, revision scheduling, and soft-delete functionality.",
      "Designed an interactive analytics dashboard with productivity insights, study performance metrics, weekly activity trends, and subject-wise progress visualization.",
      "Implemented a smart revision and streak tracking system including revision history, revision insights, current & longest study streaks, and a GitHub-style yearly study heatmap.",
      "Created a responsive, modern user interface using React and Tailwind CSS with advanced search, filtering, and organization features for an intuitive user experience."
    ],
    tech: ["React.js", "Context API", "Axios", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/AnilMende/Study-Plan-FullStack",
    live: "https://my-study-planner-mu.vercel.app/",
    coverImage: "/images/study-planner.png"
  },
  {
    title: "Full-Stack Food Delivery Application",
    points: [
      "Implemented secure authentication and session management for user accounts",
      "Designed and developed a complete cart and order lifecycle (add, update, checkout)",
      "Built 20+ RESTful APIs to handle users, orders, and payment workflows",
      "Integrated Stripe for secure and reliable online payment processing",
      "Structured MongoDB schemas to efficiently manage orders, users, and transactions",
      "Ensured data validation and error handling across frontend and backend"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    github: "https://github.com/AnilMende/Building-a-Food-Delivery-Website-In-React-JS-MongoDB-Express-Node-JS-Stripe",
    live: "https://frontend-food-del-y3y9.onrender.com",
    coverImage: "/images/food-delivery.png"
  },
  {
    title: "Universal Bio-Meds – Responsive Biomedical Services Website",
    points: [
      "Developed reusable React components for Hero, About, Services, Equipment, FAQ, Contact, and Footer sections.",
      "Implemented responsive navigation with active section tracking and smooth scrolling.",
      "Built custom reusable hooks for viewport animations and scroll-based interactions.",
      "Designed interactive cards with hover animations, glassmorphism effects, gradients, and micro-interactions.",
      "Optimized the website for desktop, tablet, and mobile devices using Tailwind CSS.",
      "Improved accessibility, visual hierarchy, and performance through reusable UI patterns and clean component architecture."
    ],
    tech: ["React.js", "Vite", "JavaScript (ES6+)", "Tailwind CSS"],
    github: "https://github.com/AnilMende/BioMedical-Equipment-Solutions",
    live: "https://universal-bio-meds-rouge.vercel.app/",
    coverImage: "/images/universal-bio-meds.png"
  },
  {
    title: "Real-Time Messaging Platform",
    points: [
      "Developed real-time messaging using Socket.io for instant user communication",
      "Implemented JWT-based authentication for secure access and session handling",
      "Designed backend APIs for managing users, conversations, and message history",
      "Handled real-time events and message broadcasting across multiple users",
      "Stored and retrieved chat data efficiently using MongoDB",
      "Ensured scalability for concurrent users and persistent messaging"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/AnilMende/MERN-Stack-Chat-App-With-Socket.io",
    live: "https://chat-app-mu-azure.vercel.app",
    coverImage: "/images/quick-chat.png"
  }
];