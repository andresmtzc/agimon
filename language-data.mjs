// Landing-page copy. These locales are independent of the chat app's language packs.
// Add every new Agimon content block to all ten locales before publishing it.
// Each headline marks its own semantic accents; word order follows the language.
export const languages = [
  {
    id: 'en', code: 'EN', flag: 'us', name: 'English', locale: 'en-US', dir: 'ltr',
    headline: "The chat app that runs your business.",
    lines: [
      [{"text":"The"},{"text":"chat","accent":"chat"},{"text":"app"}],
      [{"text":"that"},{"text":"runs","accent":"works"},{"text":"your"},{"text":"business.","accent":"you","mobileBreakBefore":true}],
    ],
    captionLead: 'Your customers keep using the apps they know.',
    captionEnd: 'Your team works in Agimon.',
    introParagraph: 'Agimon is a chat app for your business, with an AI teammate and everyday tools built in. Answer customers, book appointments, and manage stock together, right where the work starts: in conversation.',
    nav: { Product: 'Product', Customers: 'Customers', Templates: 'Templates', Pricing: 'Pricing', 'Log in': 'Log in', 'Get a demo': 'Get a demo' },
    chooseLanguage: 'Choose language', menuOpen: 'Open menu', menuClose: 'Close menu',
  },
  {
    id: 'es', code: 'ES', flag: 'mx', name: 'Español', locale: 'es-MX', dir: 'ltr',
    headline: "La app de chat que maneja tu negocio.",
    lines: [
      [{"text":"La"},{"text":"app"},{"text":"de"},{"text":"chat","accent":"chat"}],
      [{"text":"que"},{"text":"maneja","accent":"works"},{"text":"tu"},{"text":"negocio.","accent":"you","mobileBreakBefore":true}],
    ],
    captionLead: 'Tus clientes siguen usando las apps que conocen.',
    captionEnd: 'Tu equipo trabaja en Agimon.',
    introParagraph: 'Agimon es una app de chat para tu negocio, con un compañero de equipo de IA y herramientas integradas para el día a día. Responde a clientes, agenda citas y gestiona el inventario en equipo, justo donde ocurre la conversación.',
    nav: { Product: 'Producto', Customers: 'Clientes', Templates: 'Plantillas', Pricing: 'Precios', 'Log in': 'Iniciar sesión', 'Get a demo': 'Solicitar demo' },
    chooseLanguage: 'Elegir idioma', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
  },
  {
    id: 'pt', code: 'PT', flag: 'br', name: 'Português', locale: 'pt-BR', dir: 'ltr',
    headline: "O app de chat que gerencia seu negócio.",
    lines: [
      [{"text":"O"},{"text":"app"},{"text":"de"},{"text":"chat","accent":"chat"}],
      [{"text":"que"},{"text":"gerencia","accent":"works"},{"text":"seu","mobileBreakBefore":true},{"text":"negócio.","accent":"you"}],
    ],
    captionLead: 'Seus clientes continuam usando os apps que já conhecem.',
    captionEnd: 'Sua equipe trabalha no Agimon.',
    introParagraph: 'O Agimon é um app de chat para o seu negócio, com um colega de equipe de IA e ferramentas integradas para o dia a dia. Responda aos clientes, agende compromissos e gerencie o estoque em equipe, no mesmo lugar onde a conversa acontece.',
    nav: { Product: 'Produto', Customers: 'Clientes', Templates: 'Modelos', Pricing: 'Preços', 'Log in': 'Entrar', 'Get a demo': 'Solicitar demo' },
    chooseLanguage: 'Escolher idioma', menuOpen: 'Abrir menu', menuClose: 'Fechar menu',
  },
  {
    id: 'id', code: 'ID', flag: 'id', name: 'Bahasa Indonesia', locale: 'id-ID', dir: 'ltr',
    headline: "Aplikasi chat yang mengelola bisnis Anda.",
    lines: [
      [{"text":"Aplikasi"},{"text":"chat","accent":"chat"}],
      [{"text":"yang"},{"text":"mengelola","accent":"works"},{"text":"bisnis","accent":"you","mobileBreakBefore":true},{"text":"Anda."}],
    ],
    captionLead: 'Pelanggan Anda tetap menggunakan aplikasi yang mereka kenal.',
    captionEnd: 'Tim Anda bekerja di Agimon.',
    introParagraph: 'Agimon adalah aplikasi chat untuk bisnis Anda, dengan rekan tim AI dan alat kerja sehari-hari yang sudah terintegrasi. Balas pesan pelanggan, jadwalkan janji temu, dan kelola stok barang bersama, langsung di tempat percakapan berlangsung.',
    nav: { Product: 'Produk', Customers: 'Pelanggan', Templates: 'Template', Pricing: 'Harga', 'Log in': 'Masuk', 'Get a demo': 'Minta demo' },
    chooseLanguage: 'Pilih bahasa', menuOpen: 'Buka menu', menuClose: 'Tutup menu',
  },
  {
    id: 'hi', code: 'HI', flag: 'in', name: 'हिन्दी', locale: 'hi-IN', dir: 'ltr',
    headline: "चैट ऐप जो आपका कारोबार चलाता है।",
    lines: [
      [{"text":"चैट","accent":"chat"},{"text":"ऐप"}],
      [{"text":"जो"},{"text":"आपका"},{"text":"कारोबार","accent":"you","mobileBreakBefore":true},{"text":"चलाता","accent":"works"},{"text":"है।"}],
    ],
    captionLead: 'आपके ग्राहक अपने परिचित ऐप्स का इस्तेमाल जारी रखते हैं।',
    captionEnd: 'आपकी टीम Agimon में काम करती है।',
    introParagraph: 'Agimon आपके कारोबार के लिए एक चैट ऐप है, जिसमें एक एआई सहकर्मी और रोज़मर्रा के काम के टूल पहले से शामिल हैं। ग्राहकों को जवाब दें, अपॉइंटमेंट बुक करें और मिलकर सामान का स्टॉक संभालें, ठीक वहीं जहाँ बातचीत होती है।',
    nav: { Product: 'प्रोडक्ट', Customers: 'ग्राहक', Templates: 'टेम्पलेट', Pricing: 'कीमतें', 'Log in': 'लॉग इन', 'Get a demo': 'डेमो लें' },
    chooseLanguage: 'भाषा चुनें', menuOpen: 'मेन्यू खोलें', menuClose: 'मेन्यू बंद करें',
  },
  {
    id: 'ar', code: 'AR', flag: 'sa', name: 'العربية', locale: 'ar-SA', dir: 'rtl',
    headline: "تطبيق الدردشة الذي يدير أعمالك.",
    lines: [
      [{"text":"تطبيق"},{"text":"الدردشة","accent":"chat"}],
      [{"text":"الذي"},{"text":"يدير","accent":"works"},{"text":"أعمالك.","accent":"you","mobileBreakBefore":true}],
    ],
    captionLead: 'يواصل عملاؤك استخدام التطبيقات التي يعرفونها.',
    captionEnd: 'يعمل فريقك داخل Agimon.',
    introParagraph: 'Agimon هو تطبيق دردشة لأعمالك، يضم زميلًا في الفريق يعمل بالذكاء الاصطناعي وأدوات مدمجة للمهام اليومية. تعاون مع فريقك في الرد على العملاء وحجز المواعيد وإدارة المخزون، في المكان نفسه الذي تجري فيه المحادثة.',
    nav: { Product: 'المنتج', Customers: 'العملاء', Templates: 'القوالب', Pricing: 'الأسعار', 'Log in': 'تسجيل الدخول', 'Get a demo': 'طلب عرض توضيحي' },
    chooseLanguage: 'اختر اللغة', menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة',
  },
  {
    id: 'ms', code: 'MS', flag: 'my', name: 'Bahasa Melayu', locale: 'ms-MY', dir: 'ltr',
    headline: "Aplikasi sembang yang mengurus bisnes anda.",
    lines: [
      [{"text":"Aplikasi"},{"text":"sembang","accent":"chat"}],
      [{"text":"yang"},{"text":"mengurus","accent":"works"},{"text":"bisnes","accent":"you","mobileBreakBefore":true},{"text":"anda."}],
    ],
    captionLead: 'Pelanggan anda terus menggunakan aplikasi yang mereka kenali.',
    captionEnd: 'Pasukan anda bekerja dalam Agimon.',
    introParagraph: 'Agimon ialah aplikasi sembang untuk perniagaan anda, dengan rakan sepasukan AI dan alat kerja harian terbina dalam. Balas mesej pelanggan, atur janji temu dan urus stok barangan bersama, terus di tempat perbualan berlangsung.',
    nav: { Product: 'Produk', Customers: 'Pelanggan', Templates: 'Templat', Pricing: 'Harga', 'Log in': 'Log masuk', 'Get a demo': 'Minta demo' },
    chooseLanguage: 'Pilih bahasa', menuOpen: 'Buka menu', menuClose: 'Tutup menu',
  },
  {
    id: 'ur', code: 'UR', flag: 'pk', name: 'اردو', locale: 'ur-PK', dir: 'rtl',
    headline: "چیٹ ایپ جو آپ کا کاروبار چلاتی ہے۔",
    lines: [
      [{"text":"چیٹ","accent":"chat"},{"text":"ایپ"}],
      [{"text":"جو"},{"text":"آپ کا"},{"text":"کاروبار","accent":"you","mobileBreakBefore":true},{"text":"چلاتی","accent":"works"},{"text":"ہے۔"}],
    ],
    captionLead: 'آپ کے گاہک وہی ایپس استعمال کرتے رہتے ہیں جن سے وہ واقف ہیں۔',
    captionEnd: 'آپ کی ٹیم Agimon میں کام کرتی ہے۔',
    introParagraph: 'Agimon آپ کے کاروبار کے لیے ایک چیٹ ایپ ہے، جس میں ایک اے آئی ساتھی اور روزمرہ کے کاموں کے ٹولز پہلے سے شامل ہیں۔ گاہکوں کو جواب دیں، اپائنٹمنٹس بک کریں اور مل کر سامان کا اسٹاک سنبھالیں، وہیں جہاں بات چیت ہوتی ہے۔',
    nav: { Product: 'پروڈکٹ', Customers: 'گاہک', Templates: 'ٹیمپلیٹس', Pricing: 'قیمتیں', 'Log in': 'لاگ اِن', 'Get a demo': 'ڈیمو طلب کریں' },
    chooseLanguage: 'زبان منتخب کریں', menuOpen: 'مینو کھولیں', menuClose: 'مینو بند کریں',
  },
  {
    id: 'fr', code: 'FR', flag: 'fr', name: 'Français', locale: 'fr-FR', dir: 'ltr',
    headline: "L’app de chat qui gère votre entreprise.",
    lines: [
      [{"text":"L’app"},{"text":"de"},{"text":"chat","accent":"chat"}],
      [{"text":"qui"},{"text":"gère","accent":"works"},{"text":"votre"},{"text":"entreprise.","accent":"you","mobileBreakBefore":true}],
    ],
    captionLead: 'Vos clients continuent d’utiliser les applications qu’ils connaissent.',
    captionEnd: 'Votre équipe travaille dans Agimon.',
    introParagraph: 'Agimon est une application de chat pour votre entreprise, avec un coéquipier IA et des outils du quotidien intégrés. Répondez aux clients, planifiez des rendez-vous et gérez les stocks ensemble, là même où la conversation se déroule.',
    nav: { Product: 'Produit', Customers: 'Clients', Templates: 'Modèles', Pricing: 'Tarifs', 'Log in': 'Se connecter', 'Get a demo': 'Demander une démo' },
    chooseLanguage: 'Choisir la langue', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu',
  },
  {
    id: 'de', code: 'DE', flag: 'de', name: 'Deutsch', locale: 'de-DE', dir: 'ltr',
    headline: "Die Chat-App, die dein Geschäft führt.",
    lines: [
      [{"text":"Die"},{"text":"Chat-App,","accent":"chat"}],
      [{"text":"die"},{"text":"dein"},{"text":"Geschäft","accent":"you","mobileBreakBefore":true},{"text":"führt.","accent":"works"}],
    ],
    captionLead: 'Deine Kunden nutzen weiter die Apps, die sie kennen.',
    captionEnd: 'Dein Team arbeitet in Agimon.',
    introParagraph: 'Agimon ist eine Chat-App für dein Unternehmen, mit einem KI-Teammitglied und integrierten Tools für den Arbeitsalltag. Beantworte Kundenanfragen, buche Termine und verwalte gemeinsam mit deinem Team den Warenbestand, direkt dort, wo das Gespräch stattfindet.',
    nav: { Product: 'Produkt', Customers: 'Kunden', Templates: 'Vorlagen', Pricing: 'Preise', 'Log in': 'Anmelden', 'Get a demo': 'Demo anfragen' },
    chooseLanguage: 'Sprache wählen', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen',
  },
];

/* agimon-navigation-cleanup-v1 */
const agimonNavigationTranslations = {"en":["Work","Meet your Agimon","Get the actual work done","Your team, together","Getting started","Explore Agimon","Customer stories","FAQ","Learn more"],"es":["Trabajo","Conoce a tu Agimon","Haz que el trabajo avance","Tu equipo, unido","Cómo empezar","Explora Agimon","Historias de clientes","Preguntas frecuentes","Saber más"],"pt":["Trabalho","Conheça seu Agimon","Faça o trabalho acontecer","Sua equipe, unida","Como começar","Explore o Agimon","Histórias de clientes","Perguntas frequentes","Saiba mais"],"id":["Pekerjaan","Kenali Agimon Anda","Selesaikan pekerjaan nyata","Tim Anda, bersama","Mulai menggunakan","Jelajahi Agimon","Cerita pelanggan","Tanya jawab","Pelajari lebih lanjut"],"hi":["काम","अपने Agimon से मिलें","काम पूरा करें","आपकी टीम, एक साथ","शुरुआत करें","Agimon को जानें","ग्राहकों की कहानियाँ","अक्सर पूछे जाने वाले सवाल","और जानें"],"ar":["العمل","تعرّف على Agimon الخاص بك","أنجز العمل فعلاً","فريقك، معًا","كيفية البدء","اكتشف Agimon","قصص العملاء","الأسئلة الشائعة","اعرف المزيد"],"ms":["Kerja","Kenali Agimon anda","Selesaikan kerja sebenar","Pasukan anda, bersama","Cara bermula","Terokai Agimon","Kisah pelanggan","Soalan lazim","Ketahui lebih lanjut"],"ur":["کام","اپنے Agimon سے ملیں","کام مکمل کریں","آپ کی ٹیم، ایک ساتھ","شروع کیسے کریں","Agimon کو جانیں","صارفین کی کہانیاں","عام سوالات","مزید جانیں"],"fr":["Travail","Rencontrez votre Agimon","Faites avancer le travail","Votre équipe, réunie","Pour commencer","Découvrez Agimon","Témoignages clients","Questions fréquentes","En savoir plus"],"de":["Aufgaben","Lerne deinen Agimon kennen","Erledigt die eigentliche Arbeit","Dein Team, gemeinsam","Erste Schritte","Agimon entdecken","Kundengeschichten","Häufige Fragen","Mehr erfahren"]};
const agimonNavigationKeys = ["Work","Meet your Agimon","Get the actual work done","Your team, together","Getting started","Explore Agimon","Customer stories","FAQ","Learn more"];
for (const language of languages) {
  const copy = agimonNavigationTranslations[language.id] || agimonNavigationTranslations.en;
  agimonNavigationKeys.forEach((key, index) => { language.nav[key] = copy[index]; });
}

/* agimon-section-navigation-v2 */
const agimonTeamLabels = {"en":"Team","es":"Equipo","pt":"Equipe","id":"Tim","hi":"टीम","ar":"الفريق","ms":"Pasukan","ur":"ٹیم","fr":"Équipe","de":"Team"};
for (const language of languages) language.nav.Team = agimonTeamLabels[language.id] || 'Team';
