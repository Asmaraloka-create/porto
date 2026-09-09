// Seluruh teks website dalam 2 bahasa penuh: Indonesia (id) & English (en).
// Ganti bahasa dari tombol ID|EN di navbar — pilihan tersimpan otomatis.

// Base path ("/" lokal, "/porto/" di GitHub Pages) agar foto public selalu ketemu
const B = import.meta.env.BASE_URL;

const shared = {
  name: 'Candrayasa',
  since: '2014',
  location: 'Nusantara',
  email: 'candrayasa.as@gmail.com',
  github: 'https://github.com/Asmaraloka-create',
  instagram: 'https://www.instagram.com/c_shinesun/?hl=en',
  // Foto portrait utuh (depan & belakang)
  photo: `${B}foto-depan.jpg`,
  photoBack: `${B}foto-belakang.jpg`,
};

export const content = {
  id: {
    profile: {
      ...shared,
      role: 'PELAJAR',
      bioTitle: 'Hey!',
      bioText:
        'Saya Candrayasa, pelajar asal Nusantara yang mempelajari Teknologi Komputer dan Jaringan serta Logika Pemrograman. Saya suka bagaimana teknologi bisa meringankan pekerjaan manusia — jadi saya belajar sambil membangun.',
      bioSub:
        'Fokus saya: jaringan dasar, logika pemrograman, dan game web sederhana dengan HTML, CSS & JavaScript.',
    },
    ui: {
      navBio: 'Bio',
      navServices: 'Layanan',
      navWork: 'Karya',
      navBlog: 'Blog',
      navTalk: 'Ayo diskusi',
      navContact: 'Kontak',
      heroSince: 'Belajar sejak',
      heroStack: 'TKJ • Logika • Game Web',
      heroHint: 'Scroll ke bawah — foto saya nempel & flip depan ↔ belakang.',
      bioKicker: 'Bio',
      factsTitle: 'Fakta singkat',
      facts: [
        '📍 Berbasis di Nusantara',
        '📚 Fokus: TKJ, Jaringan, Logika, Game Web',
        '🛠️ Stack: HTML, CSS, JavaScript, C# + MonoGame (belajar)',
        '✉️ candrayasa.as@gmail.com',
        '🚀 Live: Kurumi Academy & Gaming Website',
      ],
      journeyTitle: 'Perjalanan',
      journey: [
        { year: '2014', text: 'Mulai kenal komputer — /belajar sejak.' },
        { year: 'TKJ', text: 'Belajar Teknologi Komputer & Jaringan, instalasi dan troubleshooting.' },
        { year: 'Web', text: 'Kurumi Academy + Gaming Website live — HTML, CSS, JavaScript.' },
        { year: 'Now', text: 'Merancang game pixel dengan C# + MonoGame. Next: kolaborasi!' },
      ],
      getStarted: 'Mulai →',
      frontNote: 'Depan — ganti foto: public/foto-depan.jpg',
      backNote: 'Belakang — ganti: public/foto-belakang.jpg',
      stickyNote: 'Scroll — fotonya nempel & flip depan ↔ belakang',
      marquee: 'Dari ide ke aksi • Belajar • Membangun game web • Gamifikasi belajar • ',
      servicesTitle: 'Layanan',
      servicesSub: 'Apa yang bisa saya bantu / kerjakan.',
      workKicker: 'Karya — 02',
      workTitle: 'Projek Unggulan',
      workSub: 'Projek pilihan — web & game.',
      workHint: 'Hover untuk zoom • Klik Visit untuk buka live demo',
      viewAllWork: 'Lihat Semua Karya',
      visit: 'Live Demo →',
      contactMe: 'Hubungi →',
      details: 'Detail →',
      soon: 'Segera…',
      testiTitle: 'Testimoni',
      testiSub: 'Kata mereka (dummy dulu — nanti ganti asli).',
      thoughtsTitle: 'Catatan',
      thoughtsSub: 'Catatan belajar — lihat cara saya belajar dengan jelas.',
      read: 'Baca →',
      viewAllPosts: 'Lihat Semua Tulisan',
      contactTitle: 'Ayo diskusi.',
      contactSub:
        'Punya projek, ide game, atau butuh bantuan? Isi form, nanti saya kabari secepatnya.',
      phName: 'Nama kamu',
      phEmail: 'Email kamu',
      phMsg: 'Ceritakan kebutuhanmu…',
      send: 'Kirim via Email →',
      sentMsg: 'Membuka aplikasi email… sampai jumpa!',
      fastResponse: 'Respon cepat via email. Form ini front-end only (mailto).',
      listKicker: 'Portfolio / Karya',
      listTitle: 'Semua Karya',
      listSub: 'Semua projek Candrayasa — web, game, dan eksperimen.',
      backHome: '← Kembali',
      notFound: 'Tidak ditemukan',
      openDemo: 'Buka Demo Live →',
      progressNote: (n) => `Progres: ${n}% — tahap perancangan`,
      status: 'Status:',
      allWork: '← Semua karya',
      home: 'Beranda',
      blogKicker: 'Blog',
      blogTitle: 'Catatan',
      blogSub: 'Tulisan dan catatan belajar.',
      allPosts: '← Semua tulisan',
    },
    services: [
      {
        title: 'Komputer & Jaringan',
        items: ['Instalasi & Troubleshooting', 'Dasar TKJ', 'Perawatan Perangkat'],
      },
      {
        title: 'Logika Pemrograman',
        items: ['Algoritma Dasar', 'Logika JavaScript', 'Problem Solving'],
      },
      {
        title: 'Game & Web Sederhana',
        items: ['HTML + CSS + JS', 'Game Web 2D', 'UI Responsif'],
      },
      {
        title: 'Belajar & Kolaborasi',
        items: ['Gamifikasi Belajar', 'Kurumi Academy', 'Kolaborasi Terbuka'],
      },
    ],
    projects: [
      {
        slug: 'kurumi-academy',
        title: 'Kurumi Academy',
        category: 'Website Pembelajaran',
        desc: 'Website yang meng-gamifikasikan kegiatan belajar agar lebih menyenangkan. Learning by playing.',
        longDesc:
          'Kurumi Academy adalah website pembelajaran yang meng-gamifikasikan kegiatan belajar agar lebih menyenangkan — poin, level, dan misi agar belajar tidak membosankan. Dibangun dengan HTML, CSS & JavaScript.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Gamifikasi'],
        status: 'Live',
        demo: 'https://kurumi-v5.vercel.app',
        github: 'https://github.com/Asmaraloka-create',
        image: `${B}projects/kurumi.jpg`,
        art: 'from-amber-300 via-orange-400 to-rose-500',
        emoji: '🎓',
      },
      {
        slug: 'gaming-website',
        title: 'Gaming Website Project',
        category: 'Game Berbasis Website',
        desc: 'Kumpulan game web yang dibuat dengan JS + HTML + CSS. Main langsung di browser.',
        longDesc:
          'Game berbasis website yang dibuat dengan JavaScript + HTML + CSS. Tinggal buka link, langsung main — tanpa install. Cocok untuk belajar logika game: skor, collision, dan game loop.',
        tech: ['JavaScript', 'HTML', 'CSS', 'Logika Game'],
        status: 'Live — Bisa dimainkan',
        demo: 'https://asmaraloka-create.github.io/gaming-website-project/',
        github: 'https://github.com/Asmaraloka-create',
        image:
          `${B}projects/game.jpg`,
        art: 'from-lime-300 via-emerald-400 to-teal-500',
        emoji: '🎮',
      },
      {
        slug: 'game-pixel-monogame',
        title: 'Game Pixel (C# + MonoGame)',
        category: 'Game Pixel • C# + MonoGame',
        desc: 'Game pixel yang dibuat dengan C# dan MonoGame, masih tahap perancangan. Stay tuned.',
        longDesc:
          'Proyek game pixel dengan C# dan framework MonoGame — saat ini masih tahap perancangan: konsep karakter, tilemap, dan mekanisme game. Progres diupdate berkala di GitHub.',
        tech: ['C#', 'MonoGame', 'Pixel Art', 'Desain Game'],
        status: 'Dalam progres — 20%',
        progress: 20,
        demo: null,
        github: 'https://github.com/Asmaraloka-create',
        image: null,
        art: 'from-sky-400 via-indigo-500 to-violet-600',
        emoji: '👾',
      },
      {
        slug: 'iot-rfid-pintu',
        title: 'Pintu Otomatis RFID + Sensor Api',
        category: 'IoT • Arduino',
        desc: 'Sistem IoT Arduino: pintu terbuka otomatis dengan kartu RFID, plus sensor api sebagai pengaman.',
        longDesc:
          'Proyek IoT berbasis Arduino — pintu terbuka otomatis saat kartu RFID terdaftar ditempelkan, dan sensor api memicu alarm sebagai sistem pengaman ruangan. Dibangun dan diuji sebagai prototype hardware.',
        tech: ['Arduino', 'RFID', 'Sensor Api', 'IoT'],
        status: 'Prototype',
        demo: null,
        github: 'https://github.com/Asmaraloka-create',
        image: null,
        art: 'from-orange-400 via-red-500 to-rose-600',
        emoji: '🚪',
      },
      {
        slug: 'kolaborasi',
        title: 'Projek Berikutnya?',
        category: 'Terbuka untuk Kolaborasi',
        desc: 'Punya ide game atau web belajar? Ayo diskusi dan bangun bareng.',
        longDesc:
          'Slot terbuka untuk kolaborasi: game web sederhana, web sekolah, atau eksperimen gamifikasi. Hubungi saya via email.',
        tech: ['Ide Dipersilakan'],
        status: 'Ayo diskusi',
        demo: '#contact',
        github: 'https://github.com/Asmaraloka-create',
        image: null,
        art: 'from-stone-500 via-neutral-600 to-amber-600',
        emoji: '✨',
      },
    ],
    testimonials: [
      {
        quote:
          'Candrayasa cepat belajar dan berani coba hal baru. Website belajarnya bikin suasana kelas jadi lebih seru.',
        name: 'Pak Guru (Dummy)',
        role: 'Guru TKJ',
      },
      {
        quote:
          'Game web-nya sederhana tapi nagih! Kebayang kalau dikembangkan lagi bisa jadi media belajar yang asik.',
        name: 'Teman Kelas (Dummy)',
        role: 'Pelajar',
      },
      {
        quote:
          'Konsep gamifikasi Kurumi Academy menarik — belajar berasa main game. Good start, lanjutkan!',
        name: 'Kakak Tingkat (Dummy)',
        role: 'Mahasiswa IT',
      },
      {
        quote:
          'Rajin, sopan, dan mau berbagi ilmu jaringan ke teman-temannya. Recommended untuk proyek kecil.',
        name: 'Tetangga (Dummy)',
        role: 'Warga Nusantara',
      },
    ],
    posts: [
      {
        slug: 'belajar-jaringan-itu-seru',
        date: 'Sep 2026',
        title: 'Kenapa Pelajar Perlu Belajar Jaringan?',
        excerpt:
          'Bagaimana pengetahuan jaringan dasar membantu kita memahami internet dan merawat perangkat sehari-hari.',
      },
      {
        slug: 'logika-dari-game',
        date: 'Agu 2026',
        title: 'Belajar Logika Pemrograman dari Game Sederhana',
        excerpt:
          'Skor, nyawa, dan collision — ternyata konsep game adalah cara paling seru belajar if-else & loop.',
      },
    ],
    postBodies: {
      'belajar-jaringan-itu-seru': [
        'Belajar jaringan itu seperti belajar peta jalan internet. Kita jadi paham kenapa WiFi lemot, apa itu IP, dan bagaimana data berpindah.',
        'Untuk pelajar TKJ, ini fondasi penting: troubleshooting, instalasi, dan keamanan dasar. Mulai dari hal kecil — crimping kabel, setting router, lalu naik ke subnetting.',
        'Tips saya: belajar sambil praktik. Satu router bekas + satu laptop sudah cukup untuk lab mini di rumah.',
      ],
      'logika-dari-game': [
        'Game sederhana mengajarkan logika paling jujur: kalau salah kondisi, karaktermu mati. If-else, loop, dan variabel langsung terasa gunanya.',
        'Contoh: skor bertambah saat collision, nyawa berkurang saat kena rintangan, level naik saat target tercapai. Semua itu cuma logika + sedikit matematika.',
        'Mulai dari HTML, CSS, dan JavaScript — seperti Gaming Website Project saya — lalu naik ke C# + MonoGame untuk game pixel yang lebih serius.',
      ],
    },
  },

  en: {
    profile: {
      ...shared,
      role: 'STUDENT',
      bioTitle: 'Hey!',
      bioText:
        "I'm Candrayasa, a student from Nusantara studying Computer & Network Technology and Programming Logic. I love how technology can ease human work — so I learn by building.",
      bioSub:
        'My focus: basic networking, programming logic, and simple web games with HTML, CSS & JavaScript.',
    },
    ui: {
      navBio: 'Bio',
      navServices: 'Services',
      navWork: 'Work',
      navBlog: 'Blog',
      navTalk: "Let's talk",
      navContact: 'Contact',
      heroSince: 'Learning since',
      heroStack: 'ICT • Logic • Web Games',
      heroHint: 'Scroll down — my photo sticks & flips front ↔ back.',
      bioKicker: 'Bio',
      factsTitle: 'Quick facts',
      facts: [
        '📍 Based in Nusantara',
        '📚 Focus: ICT, Networking, Logic, Web Games',
        '🛠️ Stack: HTML, CSS, JavaScript, C# + MonoGame (learning)',
        '✉️ candrayasa.as@gmail.com',
        '🚀 Live: Kurumi Academy & Gaming Website',
      ],
      journeyTitle: 'Journey',
      journey: [
        { year: '2014', text: 'Started getting to know computers — /creating since.' },
        { year: 'ICT', text: 'Learning Computer & Network Technology, installation and troubleshooting.' },
        { year: 'Web', text: 'Kurumi Academy + Gaming Website live — HTML, CSS, JavaScript.' },
        { year: 'Now', text: 'Designing a pixel game in C# + MonoGame. Next: collaboration!' },
      ],
      getStarted: 'Get Started →',
      frontNote: 'Front — replace photo: public/foto-depan.jpg',
      backNote: 'Back — replace: public/foto-belakang.jpg',
      stickyNote: 'Scroll — the photo sticks & flips front ↔ back',
      marquee: 'From idea to action • Learning • Building web games • Gamified learning • ',
      servicesTitle: 'Services',
      servicesSub: 'What I can help with / work on.',
      workKicker: 'Work — 02',
      workTitle: 'Featured Projects',
      workSub: 'Selected projects — web & games.',
      workHint: 'Hover to zoom • Click Visit to open the live demo',
      viewAllWork: 'View All Work',
      visit: 'Live Demo →',
      contactMe: 'Contact →',
      details: 'Details →',
      soon: 'Coming soon…',
      testiTitle: 'Testimonials',
      testiSub: 'What they say (dummy for now — will replace with real ones).',
      thoughtsTitle: 'Thoughts',
      thoughtsSub: 'Learning notes — see how I learn with clarity.',
      read: 'Read →',
      viewAllPosts: 'View All Posts',
      contactTitle: "Let's talk.",
      contactSub:
        "Have a project, game idea, or need help? Fill out the form, and I'll get back to you soon.",
      phName: 'Your name',
      phEmail: 'Your email',
      phMsg: 'Tell me what you need…',
      send: 'Send via Email →',
      sentMsg: 'Opening your email app… see you!',
      fastResponse: 'Fast response via email. This form is front-end only (mailto).',
      listKicker: 'Portfolio / Work',
      listTitle: 'All Work',
      listSub: "All of Candrayasa's projects — web, games, and experiments.",
      backHome: '← Back home',
      notFound: 'Not found',
      openDemo: 'Open Live Demo →',
      progressNote: (n) => `Progress: ${n}% — design stage`,
      status: 'Status:',
      allWork: '← All work',
      home: 'Home',
      blogKicker: 'Blog',
      blogTitle: 'Thoughts',
      blogSub: 'Writings and learning notes.',
      allPosts: '← All posts',
    },
    services: [
      {
        title: 'Computers & Networking',
        items: ['Installation & Troubleshooting', 'ICT Basics', 'Device Maintenance'],
      },
      {
        title: 'Programming Logic',
        items: ['Basic Algorithms', 'JavaScript Logic', 'Problem Solving'],
      },
      {
        title: 'Simple Games & Web',
        items: ['HTML + CSS + JS', '2D Web Games', 'Responsive UI'],
      },
      {
        title: 'Learning & Collaboration',
        items: ['Learning Gamification', 'Kurumi Academy', 'Open Collaboration'],
      },
    ],
    projects: [
      {
        slug: 'kurumi-academy',
        title: 'Kurumi Academy',
        category: 'Learning Website',
        desc: 'A website that gamifies learning to make it more fun. Learning by playing.',
        longDesc:
          'Kurumi Academy is a learning website that gamifies studying to make it more fun — points, levels, and missions so learning never gets boring. Built with HTML, CSS & JavaScript.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Gamification'],
        status: 'Live',
        demo: 'https://kurumi-v5.vercel.app',
        github: 'https://github.com/Asmaraloka-create',
        image: `${B}projects/kurumi.jpg`,
        art: 'from-amber-300 via-orange-400 to-rose-500',
        emoji: '🎓',
      },
      {
        slug: 'gaming-website',
        title: 'Gaming Website Project',
        category: 'Browser-Based Game',
        desc: 'A collection of web games built with JS + HTML + CSS. Play right in the browser.',
        longDesc:
          'Browser-based games built with JavaScript + HTML + CSS. Just open the link and play — no install needed. Great for learning game logic: scores, collision, and game loops.',
        tech: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
        status: 'Live — Playable',
        demo: 'https://asmaraloka-create.github.io/gaming-website-project/',
        github: 'https://github.com/Asmaraloka-create',
        image:
          `${B}projects/game.jpg`,
        art: 'from-lime-300 via-emerald-400 to-teal-500',
        emoji: '🎮',
      },
      {
        slug: 'game-pixel-monogame',
        title: 'Pixel Game (C# + MonoGame)',
        category: 'Pixel Game • C# + MonoGame',
        desc: 'A pixel game built with C# and MonoGame, still in the design stage. Stay tuned.',
        longDesc:
          'A pixel game project in C# with the MonoGame framework — currently in the design stage: character concepts, tilemaps, and game mechanics. Progress is updated regularly on GitHub.',
        tech: ['C#', 'MonoGame', 'Pixel Art', 'Game Design'],
        status: 'In progress — 20%',
        progress: 20,
        demo: null,
        github: 'https://github.com/Asmaraloka-create',
        image: null,
        art: 'from-sky-400 via-indigo-500 to-violet-600',
        emoji: '👾',
      },
      {
        slug: 'iot-rfid-pintu',
        title: 'Automatic RFID Door + Fire Sensor',
        category: 'IoT • Arduino',
        desc: 'Arduino-based IoT system: doors unlock automatically with an RFID card, plus a fire sensor for safety.',
        longDesc:
          'An Arduino-based IoT project — doors unlock automatically when a registered RFID card is tapped, and a fire sensor triggers an alarm as room safety. Built and tested as a hardware prototype.',
        tech: ['Arduino', 'RFID', 'Fire Sensor', 'IoT'],
        status: 'Prototype',
        demo: null,
        github: 'https://github.com/Asmaraloka-create',
        image: null,
        art: 'from-orange-400 via-red-500 to-rose-600',
        emoji: '🚪',
      },
      {
        slug: 'kolaborasi',
        title: 'Next Project?',
        category: 'Open for Collaboration',
        desc: 'Have a game or learning-web idea? Let’s discuss and build it together.',
        longDesc:
          'Open slot for collaboration: simple web games, school websites, or gamification experiments. Reach me via email.',
        tech: ['Ideas Welcome'],
        status: "Let's talk",
        demo: '#contact',
        github: 'https://github.com/Asmaraloka-create',
        image: null,
        art: 'from-stone-500 via-neutral-600 to-amber-600',
        emoji: '✨',
      },
    ],
    testimonials: [
      {
        quote:
          'Candrayasa learns fast and dares to try new things. His learning website makes the classroom atmosphere more exciting.',
        name: 'My Teacher (Dummy)',
        role: 'ICT Teacher',
      },
      {
        quote:
          'His web games are simple but addictive! I can imagine them becoming fun learning media if developed further.',
        name: 'Classmate (Dummy)',
        role: 'Student',
      },
      {
        quote:
          'The Kurumi Academy gamification concept is exciting — learning feels like playing a game. Good start, keep going!',
        name: 'Senior (Dummy)',
        role: 'IT Student',
      },
      {
        quote:
          'Diligent, polite, and willing to share networking knowledge with friends. Recommended for small projects.',
        name: 'Neighbour (Dummy)',
        role: 'Nusantara Resident',
      },
    ],
    posts: [
      {
        slug: 'belajar-jaringan-itu-seru',
        date: 'Sep 2026',
        title: 'Why Should Students Learn Networking?',
        excerpt:
          'How basic networking knowledge helps us understand the internet and maintain everyday devices.',
      },
      {
        slug: 'logika-dari-game',
        date: 'Aug 2026',
        title: 'Learning Programming Logic from Simple Games',
        excerpt:
          'Scores, lives, and collision — game concepts turn out to be the most fun way to learn if-else & loops.',
      },
    ],
    postBodies: {
      'belajar-jaringan-itu-seru': [
        'Learning networking is like learning the road map of the internet. We start to understand why WiFi is slow, what an IP is, and how data travels.',
        'For ICT students, this is an important foundation: troubleshooting, installation, and basic security. Start small — crimping cables, setting up a router, then move up to subnetting.',
        'My tip: learn by practicing. One second-hand router + one laptop is enough for a mini lab at home.',
      ],
      'logika-dari-game': [
        'Simple games teach the most honest logic: if your condition is wrong, your character dies. If-else, loops, and variables immediately feel useful.',
        'Example: score increases on collision, lives decrease on hitting obstacles, levels rise when targets are reached. All of it is just logic + a little math.',
        'Start with HTML, CSS, and JavaScript — like my Gaming Website Project — then level up to C# + MonoGame for a more serious pixel game.',
      ],
    },
  },
};
