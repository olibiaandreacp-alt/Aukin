/* ============================================================
   AUKIN — script.js
   Features: i18n (ES/EN/ZH/JA), localStorage counter,
             FAQ accordion, scroll reveal, mobile menu
   ============================================================ */

// ── TRANSLATIONS ────────────────────────────────────────────
const translations = {
  es: {
    nav: { home: "Inicio", features: "Funciones", faq: "FAQ" },
    hero: {
      title: "Monitorea internet en tiempo real con palabras clave",
      description: "Aukin analiza automáticamente las páginas web que tú elijas y detecta información importante antes que los demás.",
      supportProject: "Apoyar Proyecto",
      howItWorks: "Cómo Funciona",
      summaryTitle: "Resumen Informativo",
      newItems: "nuevos",
      ago: "Hace",
      min: "min",
      article1Title: "Preventa disponible para concierto de Bad Bunny en Ciudad de México",
      article2Title: "Abren convocatoria de becas universitarias 2026 para estudiantes internacionales",
      readArticle: "Leer artículo",
    },
    howItWorks: {
      title: "¿Cómo funciona?",
      description: "Configura sitios web y recibe alertas automáticas.",
      step1Title: "Agrega Sitios", step1Desc: "Introduce páginas web que quieras monitorear.",
      step2Title: "Configura Palabras", step2Desc: "Elige palabras clave importantes.",
      step3Title: "Monitoreo Inteligente", step3Desc: "Aukin revisa los cambios automáticamente.",
      step4Title: "Recibe Alertas", step4Desc: "Obtén notificaciones en tiempo real.",
    },
    features: {
      title: "Características", description: "Diseñado para monitoreo e investigación inteligente.",
      feature1Title: "Economía", feature1Desc: "Monitorea mercados y noticias financieras.",
      feature2Title: "Alertas", feature2Desc: "Detecta información importante automáticamente.",
      feature3Title: "Tiempo Real", feature3Desc: "Seguimiento rápido de múltiples páginas.",
      feature4Title: "Automatización", feature4Desc: "Preparado para futuras funciones automáticas.",
    },
    future: {
      title: "Futuro del Proyecto", badge: "Próximamente",
      description: "Se está pensando en desarrollar un bot de compra automática. Tú configurarías qué quieres, cuándo y cómo, y el sistema se encargaría del resto.",
      step1Title: "Configura tu compra", step1Desc: "Indica qué producto o servicio deseas, el precio máximo, y las condiciones.",
      step2Title: "El bot espera", step2Desc: "Monitorea constantemente hasta que se cumplan tus condiciones.",
      step3Title: "Compra automática", step3Desc: "Realiza la compra por ti en el momento exacto.",
      exampleTitle: "Ejemplo: Boletos de concierto",
      exampleDesc: '"Quiero 2 boletos para el concierto de Bad Bunny, zona VIP, máximo $5,000 cada uno. Comprar apenas estén disponibles."',
      exampleNote: "El bot esperaría la preventa y compraría automáticamente cuando se cumplan las condiciones.",
    },
    validation: {
      title: "Ayuda a validar Aukin",
      description: "Queremos saber cuántas personas realmente usarían esta herramienta.",
      interestedPeople: "Personas interesadas",
      waitlistText: "Únete a la lista de espera y recibe acceso anticipado.",
      emailPlaceholder: "Tu correo electrónico",
      submitButton: "Quiero acceso anticipado",
    },
    testimonials: {
      title: "Testimonios", description: "Opiniones de usuarios beta.",
      testimonial1: '"Ahora puedo monitorear varias páginas desde un solo lugar."',
      testimonial1Author: "Usuario Beta",
      testimonial2: '"Las palabras clave me ahorran muchísimo tiempo."',
      testimonial2Author: "Early Tester",
      testimonial3: '"La idea tiene muchísimo potencial para monitoreo."',
      testimonial3Author: "Usuario Financiero",
    },
    faq: {
      title: "Preguntas Frecuentes",
      q1: "¿Puedo monitorear múltiples páginas web?",
      a1: "Sí, puedes agregar tantas páginas web como necesites y monitorearlas todas simultáneamente.",
      q2: "¿Se pueden configurar varias palabras clave?",
      a2: "Absolutamente. Puedes configurar múltiples palabras clave para cada sitio web que monitorees.",
      q3: "¿Habrá aplicación móvil?",
      a3: "Está en nuestros planes futuros desarrollar una aplicación móvil para iOS y Android.",
      q4: "¿Funcionará para economía y tickets?",
      a4: "Sí, Aukin es versátil y puede usarse para monitorear noticias económicas, disponibilidad de tickets, y mucho más.",
      q5: "¿Tendrá automatización futura?",
      a5: "Sí, estamos planeando agregar funciones de automatización como el bot de compra automática.",
    },
    finalCta: {
      title: "Convierte internet en alertas inteligentes",
      description: "Monitorea información importante automáticamente con Aukin.",
      button: "Unirme a la Lista",
    },
    footer: { rights: "Todos los derechos reservados" },
  },

  en: {
    nav: { home: "Home", features: "Features", faq: "FAQ" },
    hero: {
      title: "Monitor the internet in real time with keywords",
      description: "Aukin automatically analyzes the web pages you choose and detects important information before others.",
      supportProject: "Support Project",
      howItWorks: "How It Works",
      summaryTitle: "Information Summary",
      newItems: "new",
      ago: "",
      min: "min ago",
      article1Title: "Presale available for Bad Bunny concert in Mexico City",
      article2Title: "2026 university scholarship applications now open for international students",
      readArticle: "Read article",
    },
    howItWorks: {
      title: "How does it work?", description: "Set up websites and receive automatic alerts.",
      step1Title: "Add Sites", step1Desc: "Enter web pages you want to monitor.",
      step2Title: "Set Keywords", step2Desc: "Choose important keywords.",
      step3Title: "Smart Monitoring", step3Desc: "Aukin checks for changes automatically.",
      step4Title: "Get Alerts", step4Desc: "Receive real-time notifications.",
    },
    features: {
      title: "Features", description: "Designed for intelligent monitoring and research.",
      feature1Title: "Economy", feature1Desc: "Monitor markets and financial news.",
      feature2Title: "Alerts", feature2Desc: "Automatically detect important information.",
      feature3Title: "Real Time", feature3Desc: "Fast tracking of multiple pages.",
      feature4Title: "Automation", feature4Desc: "Ready for future automatic features.",
    },
    future: {
      title: "Future of the Project", badge: "Coming Soon",
      description: "We are thinking about developing an automatic purchase bot. You would configure what you want, when and how, and the system would take care of the rest.",
      step1Title: "Set up your purchase", step1Desc: "Indicate what product or service you want, the maximum price, and the conditions.",
      step2Title: "The bot waits", step2Desc: "Constantly monitors until your conditions are met.",
      step3Title: "Automatic purchase", step3Desc: "Makes the purchase for you at the exact moment.",
      exampleTitle: "Example: Concert tickets",
      exampleDesc: '"I want 2 tickets for the Bad Bunny concert, VIP area, maximum $5,000 each. Buy as soon as they are available."',
      exampleNote: "The bot would wait for the presale and automatically buy when the conditions are met.",
    },
    validation: {
      title: "Help validate Aukin",
      description: "We want to know how many people would actually use this tool.",
      interestedPeople: "Interested people",
      waitlistText: "Join the waitlist and get early access.",
      emailPlaceholder: "Your email address",
      submitButton: "I want early access",
    },
    testimonials: {
      title: "Testimonials", description: "Opinions from beta users.",
      testimonial1: '"Now I can monitor multiple pages from one place."',
      testimonial1Author: "Beta User",
      testimonial2: '"Keywords save me so much time."',
      testimonial2Author: "Early Tester",
      testimonial3: '"The idea has a lot of potential for monitoring."',
      testimonial3Author: "Financial User",
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Can I monitor multiple web pages?",
      a1: "Yes, you can add as many web pages as you need and monitor them all simultaneously.",
      q2: "Can multiple keywords be configured?",
      a2: "Absolutely. You can configure multiple keywords for each website you monitor.",
      q3: "Will there be a mobile app?",
      a3: "It's in our future plans to develop a mobile app for iOS and Android.",
      q4: "Will it work for economy and tickets?",
      a4: "Yes, Aukin is versatile and can be used to monitor economic news, ticket availability, and much more.",
      q5: "Will it have future automation?",
      a5: "Yes, we are planning to add automation features like the automatic purchase bot.",
    },
    finalCta: {
      title: "Turn the internet into smart alerts",
      description: "Automatically monitor important information with Aukin.",
      button: "Join the List",
    },
    footer: { rights: "All rights reserved" },
  },

  zh: {
    nav: { home: "首页", features: "功能", faq: "常见问题" },
    hero: {
      title: "使用关键词实时监控互联网",
      description: "Aukin自动分析您选择的网页，比其他人更早发现重要信息。",
      supportProject: "支持项目", howItWorks: "工作原理",
      summaryTitle: "信息摘要", newItems: "个新", ago: "", min: "分钟前",
      article1Title: "Bad Bunny墨西哥城演唱会预售开始",
      article2Title: "2026年国际学生大学奖学金申请现已开放",
      readArticle: "阅读文章",
    },
    howItWorks: {
      title: "如何运作？", description: "设置网站并接收自动警报。",
      step1Title: "添加网站", step1Desc: "输入您想监控的网页。",
      step2Title: "设置关键词", step2Desc: "选择重要的关键词。",
      step3Title: "智能监控", step3Desc: "Aukin自动检查变化。",
      step4Title: "接收警报", step4Desc: "获取实时通知。",
    },
    features: {
      title: "功能特点", description: "专为智能监控和研究设计。",
      feature1Title: "经济", feature1Desc: "监控市场和财经新闻。",
      feature2Title: "警报", feature2Desc: "自动检测重要信息。",
      feature3Title: "实时", feature3Desc: "快速跟踪多个页面。",
      feature4Title: "自动化", feature4Desc: "为未来的自动功能做好准备。",
    },
    future: {
      title: "项目未来", badge: "即将推出",
      description: "我们正在考虑开发一个自动购买机器人。您可以配置想要什么、何时以及如何购买，系统会处理其余的事情。",
      step1Title: "设置您的购买", step1Desc: "指明您想要的产品或服务、最高价格和条件。",
      step2Title: "机器人等待", step2Desc: "持续监控直到满足您的条件。",
      step3Title: "自动购买", step3Desc: "在准确的时刻为您完成购买。",
      exampleTitle: "示例：演唱会门票",
      exampleDesc: '"我想要2张Bad Bunny演唱会门票，VIP区，每张最高5000美元。一有货就购买。"',
      exampleNote: "机器人会等待预售，并在满足条件时自动购买。",
    },
    validation: {
      title: "帮助验证Aukin", description: "我们想知道有多少人会真正使用这个工具。",
      interestedPeople: "感兴趣的人", waitlistText: "加入等待名单，获得早期访问权限。",
      emailPlaceholder: "您的电子邮件", submitButton: "我想要早期访问",
    },
    testimonials: {
      title: "用户评价", description: "测试用户的意见。",
      testimonial1: '"现在我可以从一个地方监控多个页面。"',
      testimonial1Author: "测试用户",
      testimonial2: '"关键词为我节省了很多时间。"',
      testimonial2Author: "早期测试者",
      testimonial3: '"这个想法在监控方面有很大的潜力。"',
      testimonial3Author: "金融用户",
    },
    faq: {
      title: "常见问题",
      q1: "我可以监控多个网页吗？", a1: "是的，您可以添加任意数量的网页并同时监控它们。",
      q2: "可以配置多个关键词吗？", a2: "当然可以。您可以为监控的每个网站配置多个关键词。",
      q3: "会有移动应用吗？", a3: "我们计划在未来开发iOS和Android移动应用。",
      q4: "它能用于经济和门票吗？", a4: "是的，Aukin功能多样，可用于监控经济新闻、门票可用性等。",
      q5: "未来会有自动化功能吗？", a5: "是的，我们计划添加自动化功能，如自动购买机器人。",
    },
    finalCta: {
      title: "将互联网转化为智能警报",
      description: "使用Aukin自动监控重要信息。",
      button: "加入名单",
    },
    footer: { rights: "版权所有" },
  },

  ja: {
    nav: { home: "ホーム", features: "機能", faq: "よくある質問" },
    hero: {
      title: "キーワードでインターネットをリアルタイム監視",
      description: "Aukinは選択したWebページを自動的に分析し、他の人より先に重要な情報を検出します。",
      supportProject: "プロジェクトを支援", howItWorks: "仕組み",
      summaryTitle: "情報サマリー", newItems: "件の新着", ago: "", min: "分前",
      article1Title: "Bad Bunnyメキシコシティコンサートの先行販売開始",
      article2Title: "2026年留学生向け大学奨学金の申請受付開始",
      readArticle: "記事を読む",
    },
    howItWorks: {
      title: "どのように機能しますか？", description: "ウェブサイトを設定し、自動アラートを受け取ります。",
      step1Title: "サイトを追加", step1Desc: "監視したいWebページを入力。",
      step2Title: "キーワードを設定", step2Desc: "重要なキーワードを選択。",
      step3Title: "スマート監視", step3Desc: "Aukinが自動的に変更をチェック。",
      step4Title: "アラートを受信", step4Desc: "リアルタイム通知を取得。",
    },
    features: {
      title: "機能", description: "インテリジェントな監視と調査のために設計。",
      feature1Title: "経済", feature1Desc: "市場と金融ニュースを監視。",
      feature2Title: "アラート", feature2Desc: "重要な情報を自動検出。",
      feature3Title: "リアルタイム", feature3Desc: "複数ページの高速追跡。",
      feature4Title: "自動化", feature4Desc: "将来の自動機能に対応。",
    },
    future: {
      title: "プロジェクトの未来", badge: "近日公開",
      description: "自動購入ボットの開発を検討しています。何を、いつ、どのように購入するかを設定すれば、システムが残りを処理します。",
      step1Title: "購入を設定", step1Desc: "欲しい商品やサービス、上限価格、条件を指定。",
      step2Title: "ボットが待機", step2Desc: "条件が満たされるまで常時監視。",
      step3Title: "自動購入", step3Desc: "最適なタイミングで購入を実行。",
      exampleTitle: "例：コンサートチケット",
      exampleDesc: '「Bad BunnyコンサートのVIPチケット2枚、各5,000ドル以下。販売開始次第購入。」',
      exampleNote: "ボットは先行販売を待ち、条件が満たされたら自動的に購入します。",
    },
    validation: {
      title: "Aukinの検証にご協力ください",
      description: "このツールを実際に使う人がどれくらいいるか知りたいです。",
      interestedPeople: "興味のある人", waitlistText: "ウェイトリストに参加して早期アクセスを取得。",
      emailPlaceholder: "メールアドレス", submitButton: "早期アクセスを希望",
    },
    testimonials: {
      title: "お客様の声", description: "ベータユーザーの意見。",
      testimonial1: '「一箇所から複数のページを監視できるようになりました。」',
      testimonial1Author: "ベータユーザー",
      testimonial2: '「キーワード機能で時間を大幅に節約できます。」',
      testimonial2Author: "アーリーテスター",
      testimonial3: '「監視機能として大きな可能性を感じます。」',
      testimonial3Author: "金融ユーザー",
    },
    faq: {
      title: "よくある質問",
      q1: "複数のWebページを監視できますか？", a1: "はい、必要な数のWebページを追加して同時に監視できます。",
      q2: "複数のキーワードを設定できますか？", a2: "もちろんです。監視する各ウェブサイトに複数のキーワードを設定できます。",
      q3: "モバイルアプリはありますか？", a3: "iOSとAndroid向けモバイルアプリの開発を計画しています。",
      q4: "経済やチケットに使えますか？", a4: "はい、Aukinは多用途で、経済ニュース、チケット在庫などの監視に使用できます。",
      q5: "将来的に自動化機能はありますか？", a5: "はい、自動購入ボットなどの自動化機能を追加する予定です。",
    },
    finalCta: {
      title: "インターネットをスマートアラートに変える",
      description: "Aukinで重要な情報を自動監視。",
      button: "リストに参加",
    },
    footer: { rights: "全著作権所有" },
  },
};

// ── STATE ────────────────────────────────────────────────────
const BASE_COUNT = 1284;
let currentLang = localStorage.getItem('aukin_lang') || 'es';

// ── COUNTER ──────────────────────────────────────────────────
function getCount() {
  return parseInt(localStorage.getItem('aukin_count') || String(BASE_COUNT), 10);
}

function setCount(n) {
  localStorage.setItem('aukin_count', String(n));
  animateCounter(n);
}

function increment() {
  setCount(getCount() + 1);
}

function animateCounter(target) {
  const el = document.getElementById('counterDisplay');
  if (!el) return;
  const start = parseInt(el.textContent.replace(/,/g, ''), 10) || target;
  const duration = 600;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(start + (target - start) * eased);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── I18N ─────────────────────────────────────────────────────
function get(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function applyTranslations(lang) {
  const t = translations[lang] || translations.es;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = get(t, el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = get(t, el.dataset.i18nPlaceholder);
    if (val !== null) el.placeholder = val;
  });
  document.documentElement.lang = lang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('aukin_lang', lang);
  applyTranslations(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── FAQ ACCORDION ─────────────────────────────────────────────
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.faq-item').querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── MOBILE MENU ───────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ── NAVBAR SCROLL ─────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.4)' : '';
  }, { passive: true });
}

// ── FORM FEEDBACK ─────────────────────────────────────────────
function showFeedback(msg, type) {
  const el = document.getElementById('formFeedback');
  el.textContent = msg;
  el.className = `form-feedback ${type}`;
  setTimeout(() => { el.className = 'form-feedback hidden'; }, 4000);
}

// ── WAITLIST FORM ─────────────────────────────────────────────
function initWaitlistForm() {
  const submitBtn = document.getElementById('submitBtn');
  const emailInput = document.getElementById('emailInput');
  const supportOnlyBtn = document.getElementById('supportOnlyBtn');

  // Submit with email
  submitBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
      emailInput.focus();
      emailInput.style.borderColor = '#f87171';
      setTimeout(() => { emailInput.style.borderColor = ''; }, 2000);
      return;
    }

    // Check if email already registered (localStorage)
    const registered = JSON.parse(localStorage.getItem('aukin_emails') || '[]');
    if (registered.includes(email)) {
      showFeedback(
        currentLang === 'es' ? 'Este email ya está registrado.' :
        currentLang === 'en' ? 'This email is already registered.' :
        currentLang === 'zh' ? '此电子邮件已注册。' : 'このメールは既に登録されています。',
        'info'
      );
      return;
    }

    // Register email & increment
    registered.push(email);
    localStorage.setItem('aukin_emails', JSON.stringify(registered));
    emailInput.value = '';
    increment();
    showFeedback(
      currentLang === 'es' ? '✓ ¡Registrado! Te avisaremos pronto.' :
      currentLang === 'en' ? '✓ Registered! We will notify you soon.' :
      currentLang === 'zh' ? '✓ 已注册！我们会尽快通知您。' : '✓ 登録しました！近日中にご連絡します。',
      'success'
    );
  });

  // Support-only button (no email required)
  supportOnlyBtn.addEventListener('click', () => {
    increment();
    showFeedback(
      currentLang === 'es' ? '✦ ¡Gracias por apoyar el proyecto!' :
      currentLang === 'en' ? '✦ Thanks for supporting the project!' :
      currentLang === 'zh' ? '✦ 感谢您支持该项目！' : '✦ プロジェクトを支援してくれてありがとう！',
      'success'
    );
  });

  // Hero support button
  const heroBtn = document.getElementById('heroSupportBtn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      increment();
      document.getElementById('validacion').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ── LANG BUTTONS ──────────────────────────────────────────────
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

// ── SMOOTH SCROLL FOR HASH LINKS ──────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Initialize counter display from localStorage
  animateCounter(getCount());

  setLang(currentLang);
  initFaq();
  initReveal();
  initMobileMenu();
  initNavbar();
  initWaitlistForm();
  initLangSwitcher();
  initSmoothScroll();
});
