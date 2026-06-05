export type Lang = 'en' | 'tr'

const t = {
  en: {
    nav: {
      services: 'Our service',
      whoWeAre: 'Who we are',
      ourService: 'Our service',
      ports: 'Ports',
      about: 'About us',
      vision: 'Vision',
      mission: 'Mission',
      values: 'Values',
      contact: 'Contact Us',
      requestService: 'agency@neosmaritime.com',
      phone: '+90 216 356 06 64',
      language: 'Language',
    },
    hero: {
      title1: 'Your Trusted',
      titleAccent: 'Ship Agency',
      title2: 'in Turkey',
      subtitle:
        'Professional ship agency services across all Turkish ports, shipyards, and the Turkish Straits — available 24/7, every day of the year.',
      cta1: 'Contact Us',
      cta2: 'Our Services',
      scroll: 'Scroll',
    },
    stats: [
      { value: '500+', label: 'Ships Served', sub: 'vessels handled annually' },
      { value: '23+', label: 'Years Experience', sub: 'in shipping agency' },
      { value: '30+', label: 'Turkish Ports', sub: 'covered across Turkey' },
      { value: '24/7', label: 'Operations', sub: 'always available' },
    ],
    services: {
      overline: 'What We Do',
      title: 'Our Services',
      subtitle:
        "From first contact to final departure, we handle every aspect of your vessel's port call in Turkey.",
      bannerOverline: 'Full-Service Maritime Agency',
      bannerText: 'Every need covered, from port entry to departure',
      learnMore: 'Learn more',
      items: [
        {
          slug: 'port-agency',
          title: 'Port Agency Service',
          desc: 'Full port-call agency attendance across Turkish ports, from pre-arrival planning to sailing clearance.',
        },
        {
          slug: 'straits-agency',
          title: 'Straits Agency Service',
          desc: 'Round-the-clock Turkish Straits transit coordination for Bosphorus and Dardanelles passages.',
        },
        {
          slug: 'shipyard-agency',
          title: 'Shipyard Agency Service',
          desc: 'Dedicated support for vessels calling Turkish shipyards for repair, maintenance, docking, or conversion.',
        },
        {
          slug: 'husbandry-agency',
          title: 'Husbandry Agency Service',
          desc: 'Crew, spares, stores, medical, cash-to-master, technical attendance, and daily vessel needs handled ashore.',
        },
        {
          slug: 'protecting-agency',
          title: 'Protecting Agency Service',
          desc: 'Local representation that protects shipowners and operators through monitoring, cost control, stakeholder coordination, and proactive updates.',
        },
        {
          slug: 'lsd-work-materials-supply',
          title: 'L/S/D Work and Materials Supply',
          desc: 'Lashing, securing, dunnaging, welding support, lashing equipment supply, and authorized certifications across Turkish ports.',
        },
      ],
    },
    whyNeos: {
      overline: 'Who We Are',
      title: 'A reliable maritime partner in Turkey',
      subtitle:
        'NEOS Maritime & Shipping Agency S.A. is an independent maritime agency serving Turkish ports, shipyards, and key transit points with round-the-clock operational support.',
      homeIntro:
        'Established in 2018 on more than two decades of agency expertise, NEOS supports vessels of all sizes with direct local knowledge, trusted stakeholder relationships, and continuous 24/7 attendance.',
      discoverMore: 'Discover more',
      cta: 'Work With Us →',
      pillars: [
        {
          num: '01',
          title: 'About us',
          desc: 'Building on over two decades of expertise in the shipping agency business, we established NEOS Maritime & Shipping Agency S.A. in 2018 to set a new standard in maritime services. As an independent agency, we cater to vessels of all sizes at Turkish ports, shipyards, and key transit points, including the Dardanelles and Bosphorus straits.',
        },
        {
          num: '02',
          title: 'Vision',
          desc: 'To provide direct, high-quality service to our customers through offices with professional teams in the Marmara, Aegean, Mediterranean, and Black Sea regions; then carry this service quality beyond Turkey and become a global agency brand.',
        },
        {
          num: '03',
          title: 'Mission',
          desc: 'To provide reliable and high-quality agency services, complete every operation within defined quality standards, ensure maximum satisfaction, and become a preferred and recommended agency partner.',
        },
        {
          num: '04',
          title: 'Values',
          desc: 'At NEOS, we have an honest, kind, reliable, and hardworking team. We work in line with our 12 cultural values, and everyone who works with us feels and adopts these values.',
        },
      ],
      cultureTitle: 'Our Cultural Values',
      cultureIntro:
        'With 23 years of industry experience, trusted stakeholder relationships, and dedicated 24/7 support, NEOS Maritime & Shipping Agency S.A. is committed to supporting every voyage with maritime excellence.',
      cultureValues: [
        { title: 'Kindness', desc: 'We communicate with kindness and mutual respect. Kindness is a cornerstone of our business relationships.' },
        { title: 'Honesty & Transparency', desc: 'We are open and honest in the way we work and communicate. We encourage clear expression and information sharing.' },
        { title: 'Reliability', desc: 'We keep our promises, fulfill our commitments, and carry out our work carefully and consistently.' },
        { title: 'Respect', desc: 'We respect everyone we communicate with, listen to different views, and support collaboration.' },
        { title: 'Hard Work', desc: 'We do our work with commitment, complete responsibilities on time, and face challenges directly.' },
        { title: 'Quality', desc: 'We perform every task carefully within quality standards and aim to deliver the highest quality service.' },
        { title: 'Customer Focus', desc: 'Customer satisfaction is at the center of how we work. We respond quickly and provide suitable solutions.' },
        { title: 'Harmony', desc: 'We value peace and harmony within the team and reflect a positive working environment into our business relationships.' },
        { title: 'Communication', desc: 'We maintain clear, continuous communication within the team and with everyone we work with.' },
        { title: 'Patience', desc: 'We stay calm under pressure, avoid impulsive reactions, and solve problems with a mature approach.' },
        { title: 'Cooperation', desc: 'We support one another, share our strengths, and apply the same spirit of cooperation to our partners.' },
        { title: 'Goal Orientation', desc: 'We work together toward clear goals, develop strategies, and move forward with determination.' },
      ],
      stat1: { value: '500+', label: 'Ships handled' },
      stat2: { value: '24/7', label: 'Available' },
    },
    ports: {
      overline: 'Coverage',
      title: 'Serving All Turkish Ports',
      subtitle:
        'From the Bosphorus Strait to the Eastern Mediterranean, our network covers every major Turkish port and shipyard.',
      imageCaption: 'across all Turkish coastlines',
      note: 'Ready to discuss your port call?',
      noteLink: 'Get in touch',
      regions: [
        {
          region: 'Marmara & Straits',
          ports: ['Istanbul', 'Derince', 'Izmit', 'Gemlik', 'Bandirma', 'Mudanya', 'Bosphorus Strait', 'Dardanelles Strait'],
        },
        {
          region: 'Aegean',
          ports: ['Izmir', 'Aliaga', 'Dikili', 'Cesme', 'Kusadasi', 'Bodrum', 'Marmaris'],
        },
        {
          region: 'Mediterranean',
          ports: ['Antalya', 'Mersin', 'Iskenderun', 'Tasucu', 'Fethiye'],
        },
        {
          region: 'Black Sea',
          ports: ['Samsun', 'Trabzon', 'Zonguldak', 'Giresun', 'Hopa'],
        },
      ],
    },
    testimonials: {
      overline: 'Testimonials',
      title: 'What our clients say',
      subtitle:
        'Direct, practical feedback from the companies that rely on NEOS Maritime for port calls, strait transits, and vessel support in Turkey.',
      items: [
        {
          quote:
            'NEOS Maritime gives us clear updates, fast answers, and reliable local coordination whenever our vessels call Turkish ports.',
          name: 'Operations Manager',
          company: 'Ship Management Company',
        },
        {
          quote:
            'Their team understands the urgency of vessel operations and keeps the process transparent from appointment to final account.',
          name: 'Chartering Desk',
          company: 'Dry Bulk Operator',
        },
        {
          quote:
            'We value NEOS for their practical approach, availability, and ability to resolve local issues without unnecessary delay.',
          name: 'Fleet Superintendent',
          company: 'International Owner',
        },
      ],
    },
    contact: {
      overline: 'Get In Touch',
      title: 'Ready to work with us?',
      subtitle:
        'Send us your port call details and our operations team will respond within the hour — 24 hours a day, 7 days a week.',
      labels: {
        phone: 'Phone',
        email: 'Email',
        office: 'Office',
        officeValue: 'Caddebostan Mah. Ömerpaşa Sok. No 4 Daire 7, Kadıköy / İstanbul',
        offices: [
          {
            label: 'Istanbul Head Quarter',
            address: 'Caddebostan Mah. Ömerpaşa Sok. No 4 Daire 7, Kadıköy / İstanbul',
            email: 'agency@neosmaritime.com',
            phone: '+90 216 356 06 64',
          },
          {
            label: 'Branch Office / DERINCE',
            address: 'CG İş Merkezi Mimar Sinan Mah. Eşref Bitlis Caddesi No 273 Daire 10, Yarımca / Kocaeli',
            email: 'agency@neosmaritime.com',
            phone: '+90 538 382 97 68',
          },
        ],
        fullName: 'Full Name',
        company: 'Company',
        emailField: 'Email',
        phoneField: 'Phone',
        portOfCall: 'Port of Call',
        serviceType: 'Service Type',
        vessel: 'Vessel Name / IMO',
        eta: 'Est. Arrival (ETA)',
        message: 'Message',
        selectPort: 'Select port…',
        selectService: 'Select service…',
        messagePlaceholder: 'Describe your requirements…',
        namePlaceholder: 'Name',
        companyPlaceholder: 'Shipping Co.',
        emailPlaceholder: 'you@company.com',
        phonePlaceholder: '+1 234 567 8900',
        vesselPlaceholder: 'MV Example / 1234567',
        submit: 'Send Request →',
        sending: 'Sending…',
        successTitle: 'Message Received',
        successSub: 'Our team will contact you within the hour.',
      },
    },
    footer: {
      copyright: 'All rights reserved.',
      tagline:
        'Professional ship agency services across Turkish ports, shipyards, and the Turkish Straits since 2018, built on 23 years of expertise.',
      status: '24/7 Operations Active',
      servicesTitle: 'Services',
      portsTitle: 'Key Ports',
      contactTitle: 'Contact',
      services: ['Port Agency', 'Straits Agency', 'Shipyard Agency', 'Husbandry Agency', 'Protecting Agency', 'L/S/D Work and Materials Supply'],
      ports: ['Istanbul', 'Izmir', 'Mersin', 'Aliaga', 'Samsun', 'Iskenderun', 'Bosphorus Strait'],
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    servicePage: {
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Services',
      overlineTag: 'Our Services',
      overlineOverview: 'Overview',
      overviewTitle: 'What we do',
      overviewCta: 'Request This Service →',
      highlightsTitle: 'Key Highlights',
      contactLabel: 'Contact our team',
      includedOverline: 'Scope of Service',
      includedTitle: "What's Included",
      processOverline: 'Our Process',
      processTitle: 'How We Work',
      relatedOverline: 'Also Available',
      relatedTitle: 'Related Services',
      relatedViewAll: 'All Services',
      ctaOverline: 'Get In Touch',
      ctaReadyPrefix: 'Ready to request',
      ctaSub: "Our operations team is available 24/7. Send us your vessel details and we'll respond within the hour.",
      ctaBtn: 'Contact Us',
      relatedLinkLabel: 'Learn more',
    },
    tankerQuote: {
      overline: '24 / 7 Operations',
      text: '"Our operations team is always on standby,\nready to assist at any Turkish port."',
    },
  },

  tr: {
    nav: {
      services: 'Hizmetlerimiz',
      whoWeAre: 'Biz Kimiz',
      ourService: 'Hizmetlerimiz',
      ports: 'Limanlar',
      about: 'Hakkımızda',
      vision: 'Vizyon',
      mission: 'Misyon',
      values: 'Değerlerimiz',
      contact: 'İletişim',
      requestService: 'agency@neosmaritime.com',
      phone: '+90 216 356 06 64',
      language: 'Dil',
    },
    hero: {
      title1: "Türkiye'nin Güvenilir",
      titleAccent: 'Gemi Acentesi',
      title2: '',
      subtitle:
        "Tüm Türk limanlarında, tersanelerinde ve Türk Boğazlarında profesyonel gemi acenteliği — yılın 365 günü, 7/24.",
      cta1: 'Bize Ulaşın',
      cta2: 'Hizmetlerimiz',
      scroll: 'Kaydır',
    },
    stats: [
      { value: '500+', label: 'Hizmet Verilen Gemi', sub: 'yıllık operasyon hacmi' },
      { value: '23+', label: 'Yıllık Deneyim', sub: 'gemi acenteliğinde' },
      { value: '30+', label: 'Türk Limanı', sub: 'Türkiye genelinde kapsam' },
      { value: '7/24', label: 'Kesintisiz Hizmet', sub: 'yılın her günü, her saati' },
    ],
    services: {
      overline: 'Hizmetlerimiz',
      title: 'Sunduğumuz Hizmetler',
      subtitle:
        'İlk temastan son çıkışa kadar, geminin Türkiye liman çağrısının her aşamasını biz yönetiriz.',
      bannerOverline: 'Tam Kapsamlı Denizcilik Acentesi',
      bannerText: 'Limana girişten çıkışa kadar her ihtiyaç, tek elden',
      learnMore: 'İncele',
      items: [
        {
          slug: 'port-agency',
          title: 'Liman Acenteliği Hizmeti',
          desc: 'Türkiye limanlarındaki tüm liman çağrıları için varış öncesinden kalkış iznine kadar tam acentelik desteği.',
        },
        {
          slug: 'straits-agency',
          title: 'Boğaz Acenteliği Hizmeti',
          desc: 'İstanbul ve Çanakkale Boğazı geçişlerinde 7/24 koordinasyon, bildirim ve operasyon takibi.',
        },
        {
          slug: 'shipyard-agency',
          title: 'Tersane Acenteliği Hizmeti',
          desc: 'Tamir, bakım, havuzlama veya dönüşüm için Türk tersanelerine gelen gemilere özel acentelik desteği.',
        },
        {
          slug: 'husbandry-agency',
          title: 'Husbandry Acenteliği Hizmeti',
          desc: 'Mürettebat, yedek parça, kumanya, sağlık, kaptana nakit ve günlük gemi ihtiyaçlarının kıyıdan yönetimi.',
        },
        {
          slug: 'protecting-agency',
          title: 'Koruyucu Acentelik Hizmeti',
          desc: 'Armatör ve operatör menfaatlerini koruyan yerel temsil, operasyon takibi, masraf kontrolü, paydaş koordinasyonu ve düzenli bilgilendirme.',
        },
        {
          slug: 'lsd-work-materials-supply',
          title: 'L/S/D İşleri ve Malzeme Tedariki',
          desc: 'Türkiye limanlarında lashing, securing, dunnaging, kaynak desteği, lashing ekipmanı tedariki ve yetkili sertifikasyon.',
        },
      ],
    },
    whyNeos: {
      overline: 'Biz Kimiz',
      title: "Türkiye'de güvenilir denizcilik partneriniz",
      subtitle:
        'NEOS Maritime & Shipping Agency S.A., Türkiye limanları, tersaneleri ve kritik geçiş noktalarında 7/24 operasyon desteği sunan bağımsız bir denizcilik acentesidir.',
      homeIntro:
        'Yirmi yılı aşkın acentelik deneyimi üzerine 2018 yılında kurulan NEOS, her büyüklükteki gemiye yerel bilgi, güçlü paydaş ilişkileri ve 7/24 operasyon takibiyle destek verir.',
      discoverMore: 'Detaylı İncele',
      cta: 'Birlikte Çalışalım →',
      pillars: [
        {
          num: '01',
          title: 'Hakkımızda',
          desc: 'Gemi acenteliği alanında yirmi yılı aşkın uzmanlığımızın üzerine NEOS Maritime & Shipping Agency S.A.’yı 2018 yılında, denizcilik hizmetlerinde yeni bir standart oluşturmak amacıyla kurduk. Bağımsız bir acente olarak Türk limanları, tersaneleri ve Çanakkale ile İstanbul Boğazları dahil kritik geçiş noktalarında her büyüklükteki gemiye hizmet veriyoruz.',
        },
        {
          num: '02',
          title: 'Vizyon',
          desc: 'Marmara, Ege, Akdeniz ve Karadeniz bölgelerinde profesyonel ekibe sahip ofislerle müşterilerine direkt kaliteli servis sunmak. Servis kalitesini Türkiye dışındaki farklı ülkelere de taşıyarak yurtdışına açılmak ve farklı ülkelerde de acentelik servisi sunarak global bir marka olmak.',
        },
        {
          num: '03',
          title: 'Misyon',
          desc: 'Güvenilir ve yüksek kaliteli acentelik hizmeti sunmak. Her işlemi belirlenen kalite standartları çerçevesinde tamamlamak. Maksimum memnuniyet sağlamak, tercih edilen ve tavsiye edilen olmak.',
        },
        {
          num: '04',
          title: 'Değerlerimiz',
          desc: 'Neos olarak dürüst, nazik, güvenilir ve çalışkan bir ekibe sahibiz. Ekip olarak 12 kültür değerimize bağlı olarak çalışırız ve bizimle çalışan herkes bu değerleri hisseder ve benimser.',
        },
      ],
      cultureTitle: 'Kültür Değerlerimiz',
      cultureIntro:
        '23 yıllık sektör deneyimimiz, limanlar, liman başkanlıkları, gümrük, göç ve diğer paydaşlarla geliştirdiğimiz güvenilir ilişkiler ve 7/24 desteğimizle NEOS Maritime & Shipping Agency S.A. yolculuğunuzun her aşamasında yanınızdadır.',
      cultureValues: [
        { title: 'Nezaket', desc: 'Nazik kişiliğimiz, işimizi yaparken iletişimde olduğumuz herkesle nazik davranmamızı sağlar. Ekip olarak karşılıklı anlayış ve saygı çerçevesinde iletişim kurarız.' },
        { title: 'Dürüstlük ve Şeffaflık', desc: 'Dürüstlük ve şeffaflık temel prensiplerimizdendir. İş yapış şeklimizde ve iletişimimizde her zaman açık ve dürüst oluruz.' },
        { title: 'Güvenilirlik', desc: 'İşimizi titizlikle yapar, sözümüzün eri olur ve verdiğimiz taahhütleri yerine getiririz.' },
        { title: 'Saygı', desc: 'İletişimde olduğumuz herkese ve ekip arkadaşlarımıza saygılı davranır, farklı görüşlere değer veririz.' },
        { title: 'Çalışkanlık', desc: 'İşimize bağlılık ve kararlılıkla yaklaşır, sorumluluklarımızı zamanında ve eksiksiz yerine getiririz.' },
        { title: 'Kalite', desc: 'Kalite standartlarımıza uygun olarak her işi titizlikle yapar, en yüksek kalitede hizmet sunmayı hedefleriz.' },
        { title: 'Müşteri Odaklılık', desc: 'Müşteri memnuniyeti iş yapış şeklimizin merkezindedir. Taleplere hızlı yanıt verir ve uygun çözümler sunarız.' },
        { title: 'Huzur', desc: 'Ekip içinde huzur ve uyumu önemser, fikir ayrılıklarını olgunlukla çözer ve pozitif çalışma ortamı oluştururuz.' },
        { title: 'İletişim', desc: 'Hem ekip içinde hem de iş yaptığımız kişilerle sürekli ve açık iletişim kurar, sorunları iletişim yoluyla çözeriz.' },
        { title: 'Sabır', desc: 'Zorluklar karşısında sakin kalır, ani tepkiler vermeden sorunları çözmek için gerekli adımları atarız.' },
        { title: 'Yardımlaşma', desc: 'Birbirimize destek olur, güçlü yanlarımızı paylaşır ve iş ortaklarımızla dayanışma prensibini benimseriz.' },
        { title: 'Hedef Odaklılık', desc: 'Aynı hedef doğrultusunda birlikte çalışır, stratejiler geliştirir ve başarıya kararlılıkla ilerleriz.' },
      ],
      stat1: { value: '500+', label: 'Hizmet verilen gemi' },
      stat2: { value: '7/24', label: 'Kesintisiz hizmet' },
    },
    ports: {
      overline: 'Kapsama Alanımız',
      title: 'Tüm Türk Limanlarında Hizmet',
      subtitle:
        "İstanbul Boğazı'ndan Doğu Akdeniz'e uzanan ağımız, Türkiye'nin tüm büyük liman ve tersanelerini kapsamaktadır.",
      imageCaption: "Türkiye'nin tüm kıyılarında",
      note: 'Liman çağrınız için detaylı bilgi almak ister misiniz?',
      noteLink: 'Bize ulaşın',
      regions: [
        {
          region: 'Marmara & Boğazlar',
          ports: ['İstanbul', 'Derince', 'İzmit', 'Gemlik', 'Bandırma', 'Mudanya', 'İstanbul Boğazı', 'Çanakkale Boğazı'],
        },
        {
          region: 'Ege',
          ports: ['İzmir', 'Aliağa', 'Dikili', 'Çeşme', 'Kuşadası', 'Bodrum', 'Marmaris'],
        },
        {
          region: 'Akdeniz',
          ports: ['Antalya', 'Mersin', 'İskenderun', 'Taşucu', 'Fethiye'],
        },
        {
          region: 'Karadeniz',
          ports: ['Samsun', 'Trabzon', 'Zonguldak', 'Giresun', 'Hopa'],
        },
      ],
    },
    testimonials: {
      overline: 'Müşteri Yorumları',
      title: 'Müşterilerimiz ne söylüyor?',
      subtitle:
        'Türkiye’de liman çağrısı, boğaz geçişi ve gemi destek hizmetleri için NEOS Maritime’a güvenen şirketlerden pratik geri bildirimler.',
      items: [
        {
          quote:
            'NEOS Maritime, gemilerimiz Türkiye limanlarına geldiğinde net güncellemeler, hızlı cevaplar ve güvenilir yerel koordinasyon sağlıyor.',
          name: 'Operasyon Müdürü',
          company: 'Gemi Yönetim Şirketi',
        },
        {
          quote:
            'Ekipleri gemi operasyonlarının aciliyetini biliyor ve atamadan nihai hesaba kadar süreci şeffaf yönetiyor.',
          name: 'Kiracı Operasyon Masası',
          company: 'Kuru Yük Operatörü',
        },
        {
          quote:
            'NEOS’u pratik yaklaşımı, ulaşılabilirliği ve yerel konuları gereksiz gecikme yaratmadan çözebilmesi nedeniyle tercih ediyoruz.',
          name: 'Filo Enspektörü',
          company: 'Uluslararası Armatör',
        },
      ],
    },
    contact: {
      overline: 'Bize Ulaşın',
      title: 'Birlikte Çalışmaya Hazır mısınız?',
      subtitle:
        'Talep detaylarınızı gönderin, operasyon ekibimiz en kısa sürede size geri dönecektir — günün 24 saati, haftanın 7 günü.',
      labels: {
        phone: 'Telefon',
        email: 'E-posta',
        office: 'Ofis',
        officeValue: 'Caddebostan Mah. Ömerpaşa Sok. No 4 Daire 7, Kadıköy / İstanbul',
        offices: [
          {
            label: 'İstanbul Merkez Ofis',
            address: 'Caddebostan Mah. Ömerpaşa Sok. No 4 Daire 7, Kadıköy / İstanbul',
            email: 'agency@neosmaritime.com',
            phone: '+90 216 356 06 64',
          },
          {
            label: 'Derince Şube Ofisi',
            address: 'CG İş Merkezi Mimar Sinan Mah. Eşref Bitlis Caddesi No 273 Daire 10, Yarımca / Kocaeli',
            email: 'agency@neosmaritime.com',
            phone: '+90 538 382 97 68',
          },
        ],
        fullName: 'Ad Soyad',
        company: 'Şirket',
        emailField: 'E-posta',
        phoneField: 'Telefon',
        portOfCall: 'Liman',
        serviceType: 'Hizmet Türü',
        vessel: 'Gemi Adı / IMO',
        eta: 'Tahmini Varış (ETA)',
        message: 'Mesajınız',
        selectPort: 'Liman seçin…',
        selectService: 'Hizmet seçin…',
        messagePlaceholder: 'Talebinizi kısaca açıklayın…',
        namePlaceholder: 'Ad Soyad',
        companyPlaceholder: 'Şirket Adı',
        emailPlaceholder: 'ornek@sirket.com',
        phonePlaceholder: '+90 5XX XXX XX XX',
        vesselPlaceholder: 'MV Örnek / 1234567',
        submit: 'Talep Gönder →',
        sending: 'Gönderiliyor…',
        successTitle: 'Mesajınız Alındı',
        successSub: 'Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
      },
    },
    footer: {
      copyright: 'Tüm hakları saklıdır.',
      tagline:
        "2018'den bu yana, 23 yıllık uzmanlık üzerine kurulu profesyonel gemi acenteliği hizmetleri.",
      status: '7/24 Operasyon Aktif',
      servicesTitle: 'Hizmetler',
      portsTitle: 'Önemli Limanlar',
      contactTitle: 'İletişim',
      services: ['Liman Acenteliği', 'Boğaz Acenteliği', 'Tersane Acenteliği', 'Husbandry Acenteliği', 'Koruyucu Acentelik', 'L/S/D İşleri ve Malzeme Tedariki'],
      ports: ['İstanbul', 'İzmir', 'Mersin', 'Aliağa', 'Samsun', 'İskenderun', 'İstanbul Boğazı'],
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları',
    },
    servicePage: {
      breadcrumbHome: 'Ana Sayfa',
      breadcrumbServices: 'Hizmetler',
      overlineTag: 'Hizmetlerimiz',
      overlineOverview: 'Genel Bakış',
      overviewTitle: 'Ne Yapıyoruz',
      overviewCta: 'Bu Hizmeti Talep Et →',
      highlightsTitle: 'Öne Çıkanlar',
      contactLabel: 'Ekibimizle İletişime Geçin',
      includedOverline: 'Hizmet Kapsamı',
      includedTitle: 'Neler Dahil?',
      processOverline: 'Sürecimiz',
      processTitle: 'Nasıl Çalışırız?',
      relatedOverline: 'Diğer Hizmetlerimiz',
      relatedTitle: 'İlgili Hizmetler',
      relatedViewAll: 'Tüm Hizmetler',
      ctaOverline: 'İletişim',
      ctaReadyPrefix: 'hizmetini talep etmeye hazır mısınız?',
      ctaSub: 'Operasyon ekibimiz 7/24 hizmetinizdedir. Talebinizi iletin, en kısa sürede size dönelim.',
      ctaBtn: 'Bize Ulaşın',
      relatedLinkLabel: 'İncele',
    },
    tankerQuote: {
      overline: '7 / 24 Operasyon',
      text: '"Operasyon ekibimiz her an hazırdadır;\nTürkiye\'nin her limanında yanınızdayız."',
    },
  },
}

export type Translations = typeof t.en
export default t
