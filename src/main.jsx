import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, ChevronDown, ExternalLink, FlaskConical, Database, Cpu, ShieldCheck } from 'lucide-react';
import './styles.css';

const research = [
  {
    icon: ShieldCheck,
    kicker: 'CURRENT · DIFFERENTIAL PRIVACY',
    title: 'Correlated noise mechanisms',
    body: 'I am currently working on correlated noise mechanisms for learning problems, with a focus on how privacy can be preserved while retaining useful learning signal.',
    tags: ['Differential Privacy', 'Learning Problems', 'Privacy Mechanisms']
  },
  {
    icon: Cpu,
    kicker: 'CURRENT INTEREST · EFFICIENCY',
    title: 'Quantisation & efficient learning',
    body: 'I am interested in quantisation as a way to make modern ML systems cheaper to train and run, especially where efficiency interacts with privacy and model quality.',
    tags: ['Quantisation', 'Efficient ML', 'LLMs']
  },
  {
    icon: FlaskConical,
    kicker: 'FUTURE INTEREST',
    title: 'Interpretability',
    body: 'Longer term, I want to work on understanding what models are actually doing: their internal representations, reasoning, and failure modes.',
    tags: ['Interpretability', 'Reasoning', 'LLMs']
  }
];

const timeline = [
  { year: '2026 — now', title: 'MS Research · IIT Madras', detail: 'Data Science & Artificial Intelligence. Researching differential privacy and learning problems.' },
  { year: '2024 — 2025', title: 'Software Engineer · Mindgate', detail: 'Built and scaled fintech reconciliation and payout systems using distributed computing and data infrastructure.' },
  { year: '2020 — 2024', title: 'B.E. (Hons.) Computer Science · BITS Pilani', detail: 'Built systems, compiler and game projects; served as Cultural Secretary of UDGAM.' },
  { year: '2020', title: 'Academic milestone', detail: 'Ranked 1st in Uttarakhand across academic streams in Class 12.' }
];

const work = [
  {
    type: 'SYSTEMS',
    title: 'Reconciliation at 100M/day',
    body: 'Scaled a two-way reconciliation system from 1M to 100M transactions/day, reducing memory usage by 60% and improving performance by 50%.',
    stack: 'PySpark · Spring Boot · PostgreSQL · Distributed computing'
  },
  {
    type: 'INFRA',
    title: 'Payout pipeline redesign',
    body: 'Revamped a payout pipeline with Redis Streams and Cassandra, cutting processing time by 50% and increasing transaction volume 5×.',
    stack: 'Redis Streams · Cassandra · Spring Boot'
  },
  {
    type: 'BUILD',
    title: 'PILL · persistent engineering memory',
    body: 'A personal project exploring how engineering systems can retain historical context across repositories, commits, incidents and decisions.',
    stack: 'AI · Software engineering · Institutional memory'
  }
];

function App() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Research');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav">
          <button className="brand" onClick={() => scrollTo('home')}>YJ<span>.</span></button>
          <div className={`nav-links ${open ? 'show' : ''}`}>
            {['Research','Work','About'].map((item) => (
              <button key={item} className={active === item ? 'active' : ''} onClick={() => { setActive(item); scrollTo(item.toLowerCase()); }}>{item}</button>
            ))}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Toggle dark mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>} 
            </button>
            <button className="menu-btn" onClick={() => setOpen(!open)}><ChevronDown size={17}/></button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot"></span> MS RESEARCHER · IIT MADRAS</div>
            <h1>Building a better<br/><em>understanding</em> of AI.</h1>
            <p className="hero-text">I work at the intersection of machine learning, privacy and efficient systems. Right now, I’m focused on differential privacy, correlated noise mechanisms and quantisation.</p>
            <div className="hero-cta">
              <button className="primary" onClick={() => scrollTo('research')}>See my research <ArrowUpRight size={17}/></button>
              <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ExternalLink size={15}/></a>
            </div>
            <div className="socials">
              <a href="https://github.com/yugs-codes" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/in/yugal-joshi/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href="mailto:yugaljoshi812@gmail.com"><Mail size={17}/> Email</a>
            </div>
          </div>
          <div className="hero-graphic" aria-label="Abstract privacy research visualization">
            <div className="grid"></div>
            <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
            {[...Array(12)].map((_,i)=><span key={i} className={`node n${i+1}`}></span>)}
            <div className="core"><span>ε</span><small>privacy</small></div>
            <div className="graphic-label label-a">noise</div>
            <div className="graphic-label label-b">signal</div>
            <div className="graphic-label label-c">trade-off</div>
          </div>
        </section>

        <section className="metrics section-pad">
          <div><strong>100M+</strong><span>transactions/day<br/>scaled</span></div>
          <div><strong>60%</strong><span>memory usage<br/>reduction</span></div>
          <div><strong>5×</strong><span>payout volume<br/>increase</span></div>
          <div><strong>01</strong><span>research focus<br/>privacy</span></div>
        </section>

        <section id="research" className="dark-section section-pad">
          <div className="section-head light">
            <div><span className="section-num">01</span><span className="section-kicker">WHAT I’M WORKING ON</span></div>
            <p>My current work is about making machine learning more private and more efficient — without losing sight of what makes the systems useful.</p>
          </div>
          <div className="research-grid">
            {research.map(({icon: Icon, kicker, title, body, tags}) => (
              <article className="research-card" key={title}>
                <div className="card-icon"><Icon size={19}/></div>
                <div className="card-kicker">{kicker}</div>
                <h2>{title}</h2>
                <p>{body}</p>
                <div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="section-head">
            <div><span className="section-num">02</span><span className="section-kicker">SELECTED WORK</span></div>
            <p>Before research, I spent a year building production fintech systems where correctness, throughput and reliability mattered every day.</p>
          </div>
          <div className="work-list">
            {work.map((item, i) => (
              <article className="work-row" key={item.title}>
                <div className="work-index">0{i+1}</div>
                <div className="work-main"><span className="work-type">{item.type}</span><h3>{item.title}</h3><p>{item.body}</p></div>
                <div className="work-stack">{item.stack}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="section-head">
            <div><span className="section-num">03</span><span className="section-kicker">ABOUT / PATH</span></div>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <h2>I like understanding <em>why</em> systems behave the way they do.</h2>
              <p>I started out building software systems and gradually got pulled deeper into machine learning research. Today, that curiosity is mostly about the things underneath the model: privacy, noise, representations, efficiency and eventually interpretability.</p>
              <p>Outside research, I still enjoy building things. PILL is one of my current side projects around persistent engineering memory.</p>
              <a className="text-link" href="https://github.com/yugs-codes" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15}/></a>
            </div>
            <div className="timeline">
              {timeline.map((item)=>(<div className="timeline-item" key={item.year+item.title}><span className="timeline-dot"></span><div><span className="timeline-year">{item.year}</span><h3>{item.title}</h3><p>{item.detail}</p></div></div>))}
            </div>
          </div>
        </section>

        <section className="highlight section-pad">
          <div className="highlight-card">
            <div className="mini-label">A LITTLE MORE ABOUT ME</div>
            <h2>From Uttarakhand<br/>to IIT Madras.</h2>
            <p>I was ranked 1st in Uttarakhand across academic streams in Class 12, then studied Computer Science at BITS Pilani. Somewhere along the way I also became a cultural secretary and helped organise a 1,200+ student campus event.</p>
            <div className="award"><span>01</span><div><strong>Uttarakhand · Class 12</strong><small>1st rank across academic streams</small></div></div>
            <div className="award"><span>02</span><div><strong>Avery Dennison Innovation Award</strong><small>Top 10 nationwide · 2022</small></div></div>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <div><div className="footer-brand">Yugal Joshi<span>.</span></div><p>Researching private, efficient and understandable AI systems.</p></div>
        <div className="footer-links"><a href="mailto:yugaljoshi812@gmail.com">yugaljoshi812@gmail.com</a><a href="https://github.com/yugs-codes" target="_blank">GitHub</a><a href="https://www.linkedin.com/in/yugal-joshi/" target="_blank">LinkedIn</a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
