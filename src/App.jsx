import React, { useState } from 'react';
import MatrixBackground from './components/MatrixBackground';
import { PROFILE_IMAGE } from './profile';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Code2, 
  Terminal, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  Calendar,
  Database,
  BarChart3,
  Layers
} from 'lucide-react';

const translations = {
  es: {
    role: "Desarrollador de Aplicaciones & Full Stack",
    statusText: "En línea",
    aboutTitle: "Perfil Profesional",
    aboutText: "Desarrollador autónomo con sólida formación en desarrollo web y Mobile, especializado en tecnologías como React, React Native, Node.js y gestión de bases de datos relacionales y no relacionales. Experiencia en proyectos independientes y colaborativos bajo metodologías ágiles (Scrum/Trello), aportando soluciones eficientes y escalables. Disponible para relocalización nacional e internacional.",
    experienceTitle: "Experiencia Laboral",
    skillsTitle: "Habilidades Técnicas",
    educationTitle: "Educación & Formación",
    languagesTitle: "Idiomas",
    contactData: {
      email: "gustavo.saman@gmail.com",
      phone: "+54 381 6210174",
      location: "San Miguel de Tucumán, Argentina",
      github: "https://github.com/GusSaman",
      githubLabel: "github.com/GusSaman"
    },
    experiences: [
      {
        company: "TCI-gecomp Chile",
        role: "Programador / Desarrollador — Soporte IT (remoto)",
        period: "Marzo - Julio 2025",
        items: [
          "Desarrollo de aplicaciones empresariales con Power Apps para la gestión de inventario de herramientas, notebooks, cargadores y pasajes aéreos/terrestres del personal.",
          "Uso de tablas de Excel integradas con Power BI para la generación de métricas, reportes y análisis.",
          "Gestión de permisos y control de accesos en SharePoint.",
          "Carga y normalización de datos con herramientas de IA (Microsoft Copilot, ChatGPT).",
          "Mantenimiento de la página web corporativa en WordPress (tci-gecomp.com)."
        ]
      },
      {
        company: "Desarrollador Autónomo (Self-employed Developer)",
        role: "Desarrollador Full Stack & Mobile",
        period: "2023 - Actualidad",
        items: [
          "Desarrollo de aplicaciones web y Mobile con React y React Native.",
          "Consumo e integración de APIs REST utilizando Postman para pruebas y validaciones.",
          "Implementación y modelado de bases de datos relacionales (MySQL) y NoSQL (MongoDB).",
          "Control de versiones y trabajo colaborativo en GitHub.",
          "Trabajos de desarrollo con el uso de Agentes de IA (Microsoft Copilot, ChatGPT, Opencode) para optimización de código y generación de contenido.",
        ]
      }
    ],
    skills: {
      frontend: ["React", "React Native", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap"],
      backend: ["Node.js", "Java (Nivel Básico)", "APIs REST", "Postman"],
      databases: ["MySQL (Relacional)", "MongoDB (NoSQL)"],
      toolsAndBI: ["Power Apps", "Power BI", "Git / GitHub", "SharePoint", "Trello (Scrum)", "Excel Avanzado"],
      ia: ["Microsoft Copilot", "ChatGPT"]
    },
    education: [
      {
        degree: "Ingeniería en Sistemas de Información (4° año en curso)",
        institution: "Universidad Tecnológica Nacional — Facultad Regional Tucumán"
      }
    ],
    formacion: [
      "Capacitación Programación Web Fullstack (MERN) — Rolling Code School",
      "Capacitación React Avanzado — Rolling Code School",
      "Capacitación Programación Mobile — Global Learning",
      "Capacitación Big Data — Programa Codo a Codo (CABA)",
      "Capacitación Inglés — Codo a Codo (CABA)",
      "Capacitación Inglés Trabajo IT — Agencia de Aprendizaje (CABA)",
      "Actualmente utilizo Opencode",
      "Participación en más de 20 jornadas y foros tecnológicos"
    ],
    langList: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Nivel Intermedio" }
    ]
  },
  en: {
    role: "Application & Full Stack Developer",
    statusText: "Online",
    aboutTitle: "Professional Profile",
    aboutText: "Self-employed developer with a solid background in web and mobile development, specialized in technologies such as React, React Native, Node.js, and relational and non-relational database management. Experience in independent and collaborative projects under agile methodologies (Scrum/Trello), delivering efficient and scalable solutions. Available for national and international relocation.",
    experienceTitle: "Work Experience",
    skillsTitle: "Technical Skills",
    educationTitle: "Education & Training",
    languagesTitle: "Languages",
    contactData: {
      email: "gustavo.saman@gmail.com",
      phone: "+54 381 6210174",
      location: "San Miguel de Tucuman, Argentina",
      github: "https://github.com/GusSaman",
      githubLabel: "github.com/GusSaman"
    },
    experiences: [
      {
        company: "TCI Chile SpA",
        role: "Programmer / Developer — Innovation & New Business Department",
        period: "March - July 2025",
        items: [
          "Development of enterprise applications with Power Apps for managing inventory of tools, laptops, chargers, and staff travel tickets.",
          "Integration of Excel tables with Power BI for generating metrics, reports, and data analysis.",
          "Permission management and access control in SharePoint.",
          "Data loading and normalization using AI tools (Microsoft Copilot, ChatGPT).",
          "Maintenance of corporate WordPress website (tci-gecomp.com)."
        ]
      },
      {
        company: "Self-employed Developer",
        role: "Full Stack & Mobile Developer",
        period: "2023 - Present",
        items: [
          "Web and Mobile application development using React and React Native.",
          "REST API consumption and testing using Postman for validations.",
          "Implementation and modeling of MySQL (Relational) and MongoDB (NoSQL) databases.",
          "Version control and collaborative work on GitHub."
        ]
      }
    ],
    skills: {
      frontend: ["React", "React Native", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap"],
      backend: ["Node.js", "Java (Basic)", "REST APIs", "Postman"],
      databases: ["MySQL (Relational)", "MongoDB (NoSQL)"],
      toolsAndBI: ["Power Apps", "Power BI", "Git / GitHub", "SharePoint", "Trello (Scrum)", "Advanced Excel"],
      ia: ["Microsoft Copilot", "ChatGPT"]
    },
    education: [
      {
        degree: "Information Systems Engineering (4th Year in Progress)",
        institution: "National Technological University — Tucumán Regional Faculty"
      }
    ],
    formacion: [
      "Fullstack Web Programming (MERN) — Rolling Code School",
      "Advanced React Training — Rolling Code School",
      "Mobile Programming Training — Global Learning",
      "Big Data Training — Codo a Codo Program (CABA)",
      "English Training — Codo a Codo (CABA)",
      "IT Work English Training — Agencia de Aprendizaje (CABA)",
      "Currently using Opencode",
      "Participation in over 20 technology forums and events",
    
    ],
    langList: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Intermediate Level" }
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100 font-sans">
      {/* Background Matrix */}
      <MatrixBackground />

      {/* Glow Effects */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header */}
      <header className="relative z-20 max-w-5xl mx-auto px-6 pt-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm tracking-wider">
          <Terminal className="w-4 h-4 animate-pulse" />
          <span>gustavo_saman.dev</span>
        </div>

        {/* Switcher ES / EN */}
        <button
          onClick={toggleLanguage}
          className="relative group overflow-hidden px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/60 hover:border-cyan-400/60 transition-all duration-300 shadow-lg backdrop-blur-md cursor-pointer"
        >
          <div className="flex items-center space-x-2 font-mono text-xs font-semibold">
            <Globe className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
            <span className={lang === 'es' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>ES</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'en' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>EN</span>
          </div>
        </button>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* HERO / DATOS DEL PDF */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md shadow-2xl hover:border-cyan-500/30 transition-all duration-500">
          
          {/* Foto de Perfil adjuntada */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <img
              src={PROFILE_IMAGE}
              alt="Gustavo Nicolás Samán"
              className="relative w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-2 border-cyan-400/60 shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-2 right-2 p-2 rounded-full bg-slate-950 border border-cyan-500/50 text-cyan-400 shadow-lg">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Información Personal */}
          <div className="flex-1 text-center md:text-left space-y-4">
            {/* Span cambiado a "En línea" */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold uppercase tracking-wider">{t.statusText}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Gustavo Nicolás Samán
            </h1>

            <p className="text-lg font-medium text-cyan-400/90 font-mono">
              {t.role}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              {t.aboutText}
            </p>

            {/* Contacto exacto del CV */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300 border-t border-slate-800/80">
              <a href={`mailto:${t.contactData.email}`} className="flex items-center justify-center md:justify-start space-x-2.5 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.contactData.email}</span>
              </a>

              <a href={`tel:${t.contactData.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center md:justify-start space-x-2.5 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.contactData.phone}</span>
              </a>

              <div className="flex items-center justify-center md:justify-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.contactData.location}</span>
              </div>

              <a href={t.contactData.github} target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start space-x-2.5 hover:text-cyan-400 transition-colors">
                <Github className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.contactData.githubLabel}</span>
              </a>
            </div>
          </div>

        </section>

        {/* EXPERIENCIA LABORAL (TCI Chile SpA + Autónomo) */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">{t.experienceTitle}</h2>
          </div>

          <div className="space-y-6">
            {t.experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                    <p className="text-sm font-mono text-cyan-400">{exp.role}</p>
                  </div>
                  <span className="inline-flex items-center text-xs font-mono text-slate-300 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/60 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                    <span>{exp.period}</span>
                  </span>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* HABILIDADES TÉCNICAS (Con Bootstrap, Java, Postman, MySQL, Power Apps, Power BI) */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">{t.skillsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md space-y-4">
              <div className="flex items-center space-x-3 text-cyan-400 font-semibold">
                <Cpu className="w-5 h-5" />
                <span>Frontend & Mobile</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.skills.frontend.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs font-mono text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & DB */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md space-y-4">
              <div className="flex items-center space-x-3 text-cyan-400 font-semibold">
                <Database className="w-5 h-5" />
                <span>Backend & Bases de Datos</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...t.skills.backend, ...t.skills.databases].map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs font-mono text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Power Apps, Power BI, IA & Herramientas */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md space-y-4">
              <div className="flex items-center space-x-3 text-cyan-400 font-semibold">
                <BarChart3 className="w-5 h-5" />
                <span>Power Platform, BI & IA</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...t.skills.toolsAndBI, ...t.skills.ia].map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs font-mono text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCACIÓN & FORMACIÓN (Del PDF) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Educación Universitaria & Cursos */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">{t.educationTitle}</h2>
            </div>
            
            <div className="space-y-4">
              {t.education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md space-y-2">
                  <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm text-cyan-400 font-mono">{edu.institution}</p>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Cursos & Formación Continua</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {t.formacion.map((f, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Idiomas */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">{t.languagesTitle}</h2>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md space-y-4">
              {t.langList.map((l, idx) => (
                <div key={idx} className="flex justify-between items-center pb-3 border-b border-slate-800/60 last:border-0 last:pb-0">
                  <span className="text-slate-200 font-medium text-sm">{l.name}</span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-500/20">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 py-8 text-center text-xs font-mono text-slate-500">
        <p>© {new Date().getFullYear()} Gustavo Nicolás Samán — {t.statusText}</p>
      </footer>
    </div>
  );
}