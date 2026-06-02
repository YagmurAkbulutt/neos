import type { Lang } from '@/i18n/translations'

export type CompanyPageSlug = 'about-us' | 'vision' | 'mission' | 'values'

export type CompanyValue = {
  title: string
  desc: string
}

export type CompanyPage = {
  slug: CompanyPageSlug
  navLabel: string
  overline: string
  title: string
  lead: string
  heroLead?: string
  paragraphs: string[]
  values?: CompanyValue[]
}

export const companyPageSlugs: CompanyPageSlug[] = ['about-us', 'vision', 'mission', 'values']

export const companyPages: Record<Lang, Record<CompanyPageSlug, CompanyPage>> = {
  en: {
    'about-us': {
      slug: 'about-us',
      navLabel: 'About us',
      overline: 'Who We Are',
      title: 'About Us',
      lead:
        'NEOS Maritime & Shipping Agency S.A. was established to set a new standard in maritime services.',
      paragraphs: [
        'Building on over two decades of expertise in the shipping agency business, we established NEOS Maritime & Shipping Agency S.A. in 2018 to set a new standard in maritime services. As an independent agency, we cater to vessels of all sizes at Turkish ports, shipyards, and key transit points, including the Dardanelles and Bosphorus straits.',
        'With 23 years of industry experience, we’ve developed trusted relationships with ports, harbor masters, customs authorities, immigration offices, and other essential stakeholders. These connections empower us to deliver seamless, high-quality agency services tailored to meet the unique needs of our clients.',
        'At NEOS, we recognize that time is a valuable asset for shipowners. That’s why we provide dedicated, round-the-clock support, ensuring smooth and efficient operations, 24/7.',
        'Your trusted partner in maritime excellence, NEOS Maritime & Shipping Agency S.A., is committed to supporting your voyage every step of the way.',
      ],
    },
    vision: {
      slug: 'vision',
      navLabel: 'Vision',
      overline: 'Our Direction',
      title: 'Vision',
      lead:
        'Our vision is to grow from a trusted Turkish agency into a global maritime service brand.',
      paragraphs: [
        'To provide direct, high-quality service to our customers through offices with professional teams in the Marmara, Aegean, Mediterranean, and Black Sea regions.',
        'To carry this service quality beyond Turkey, expand internationally, provide agency services in different countries, and become a global brand.',
      ],
    },
    mission: {
      slug: 'mission',
      navLabel: 'Mission',
      overline: 'Our Commitment',
      title: 'Mission',
      lead:
        'Our mission is to deliver reliable, high-quality agency service with consistent operational standards.',
      paragraphs: [
        'To provide reliable and high-quality agency services.',
        'To complete every operation within defined quality standards.',
        'To ensure maximum satisfaction, become the preferred agency partner, and be recommended by the clients we serve.',
      ],
    },
    values: {
      slug: 'values',
      navLabel: 'Values',
      overline: 'Culture',
      title: 'Our Cultural Values',
      lead:
        'At NEOS, we have an honest, kind, reliable, and hardworking team. We work in line with our 12 cultural values, and everyone who works with us feels and adopts these values.',
      heroLead:
        'Our core principles that define who we are and guide our operations daily.',
      paragraphs: [],
      values: [
        {
          title: 'Kindness',
          desc:
            'Our kind character ensures that we act kindly toward everyone we communicate with while doing our work. As a team, we communicate within a framework of mutual understanding and respect. Kindness is the cornerstone of our business relationships, and we preserve this value in every interaction.',
        },
        {
          title: 'Honesty and Transparency',
          desc:
            'Honesty and transparency are among our company’s core principles. We are always open and honest in the way we work and communicate. Everyone is encouraged to express themselves clearly and share information. We do not lie or engage in misleading behavior.',
        },
        {
          title: 'Reliability',
          desc:
            'Reliability enables us to perform our work meticulously. We always keep our word and fulfill our commitments. We take care not to make mistakes, and deceiving anyone is never acceptable.',
        },
        {
          title: 'Respect',
          desc:
            'We always act respectfully toward everyone we communicate with and toward our teammates. We respect different opinions and encourage everyone to make their voice heard. Respect is the key to our collaboration and success.',
        },
        {
          title: 'Hard Work',
          desc:
            'Hard work expresses our commitment and determination toward our responsibilities. We make the effort required to do our work in the best possible way and fulfill our responsibilities on time and completely. We do not avoid work and face challenges with courage.',
        },
        {
          title: 'Quality',
          desc:
            'We perform every task meticulously in line with our quality standards. We aim to provide the highest quality service to our customers and business partners. Quality is accepted as an indispensable element in protecting our company’s reputation.',
        },
        {
          title: 'Customer Focus',
          desc:
            'The satisfaction and happiness of our customers are at the center of the way we work. We respond positively and quickly to customer requests and provide solutions suitable for their needs. Customer satisfaction is the key to our long-term success.',
        },
        {
          title: 'Peace',
          desc:
            'Peace and harmony within the team are priorities. We avoid arguments and resolve differences of opinion with maturity. By creating a positive working environment, we reflect this peace into our business relationships.',
        },
        {
          title: 'Communication',
          desc:
            'Communication forms the foundation of our success and effectiveness. We maintain continuous and open communication both within the team and with the people we work with. We solve problems through communication and value everyone’s opinions.',
        },
        {
          title: 'Patience',
          desc:
            'Patience enables us to overcome every kind of challenge. We do not get angry, react suddenly, or enter into arguments. We know how to wait and take the necessary steps to solve problems calmly.',
        },
        {
          title: 'Cooperation',
          desc:
            'Team cooperation and mutual support form the strength of our company. We support one another, share our strengths, and reinforce our weaker areas. We also adopt the principle of cooperation and solidarity in our business relationships and support our partners.',
        },
        {
          title: 'Goal Orientation',
          desc:
            'As a team, we work together toward the same goal. We believe in the goals we set and act with the awareness that we will achieve them. We define our goals clearly, develop strategies, and apply them with determination. Each of us focuses on contributing individually to reach our shared goals. We move forward with determination on the path to success and work together to overcome obstacles.',
        },
      ],
    },
  },
  tr: {
    'about-us': {
      slug: 'about-us',
      navLabel: 'Hakkımızda',
      overline: 'Biz Kimiz',
      title: 'Hakkımızda',
      lead:
        'NEOS Maritime & Shipping Agency S.A., denizcilik hizmetlerinde yeni bir standart oluşturmak amacıyla kurulmuştur.',
      paragraphs: [
        'Gemi acenteliği alanında yirmi yılı aşkın uzmanlığımızın üzerine NEOS Maritime & Shipping Agency S.A.’yı 2018 yılında, denizcilik hizmetlerinde yeni bir standart oluşturmak amacıyla kurduk. Bağımsız bir acente olarak Türk limanları, tersaneleri ve Çanakkale ile İstanbul Boğazları dahil kritik geçiş noktalarında her büyüklükteki gemiye hizmet veriyoruz.',
        '23 yıllık sektör deneyimimizle limanlar, liman başkanlıkları, gümrük makamları, göç idareleri ve diğer temel paydaşlarla güvenilir ilişkiler geliştirdik. Bu bağlantılar, müşterilerimizin benzersiz ihtiyaçlarına göre şekillenen, kesintisiz ve yüksek kaliteli acentelik hizmetleri sunmamızı sağlar.',
        'NEOS olarak zamanın armatörler için değerli bir varlık olduğunun farkındayız. Bu nedenle 7/24 kesintisiz destek sunarak operasyonların sorunsuz ve verimli ilerlemesini sağlıyoruz.',
        'Denizcilikte güvenilir çözüm ortağınız NEOS Maritime & Shipping Agency S.A., yolculuğunuzun her adımında sizi desteklemeye kararlıdır.',
      ],
    },
    vision: {
      slug: 'vision',
      navLabel: 'Vizyon',
      overline: 'Yönümüz',
      title: 'Vizyon',
      lead:
        'Vizyonumuz, Türkiye’de güvenilir bir acente olarak sunduğumuz kaliteyi global ölçekte taşımaktır.',
      paragraphs: [
        'Marmara, Ege, Akdeniz ve Karadeniz bölgelerinde profesyonel ekibe sahip ofislerle müşterilerine direkt kaliteli servis sunmak.',
        'Servis kalitesini Türkiye dışındaki farklı ülkelere de taşıyarak yurtdışına açılmak ve farklı ülkelerde de acentelik servisi sunarak global bir marka olmak.',
      ],
    },
    mission: {
      slug: 'mission',
      navLabel: 'Misyon',
      overline: 'Taahhüdümüz',
      title: 'Misyon',
      lead:
        'Misyonumuz, güvenilir ve yüksek kaliteli acentelik hizmetini tutarlı kalite standartlarıyla sunmaktır.',
      paragraphs: [
        'Güvenilir ve yüksek kaliteli acentelik hizmeti sunmak.',
        'Her işlemi belirlenen kalite standartları çerçevesinde tamamlamak.',
        'Maksimum memnuniyet sağlamak, tercih edilen ve tavsiye edilen olmak.',
      ],
    },
    values: {
      slug: 'values',
      navLabel: 'Değerlerimiz',
      overline: 'Kültür',
      title: 'Kültür Değerlerimiz',
      lead:
        'Neos olarak dürüst, nazik, güvenilir ve çalışkan bir ekibe sahibiz. Ekip olarak 12 kültür değerimize bağlı olarak çalışırız ve bizimle çalışan herkes bu değerleri hisseder ve benimser.',
      heroLead:
        'Bizi tanımlayan ve günlük operasyonlarımıza yön veren temel ilkelerimiz.',
      paragraphs: [],
      values: [
        {
          title: 'Nezaket',
          desc:
            'Nazik kişiliğimiz, işimizi yaparken iletişimde olduğumuz herkesle nazik davranmamızı sağlar. Ekip olarak, karşılıklı anlayış ve saygı çerçevesinde iletişim kurarız. Nezaket, iş ilişkilerimizin temel taşıdır ve her türlü etkileşimimizde bu değeri koruruz.',
        },
        {
          title: 'Dürüstlük ve Şeffaflık',
          desc:
            'Dürüstlük ve şeffaflık şirketimizin temel prensiplerindendir. İş yapış şeklimizde ve iletişimimizde her zaman açık ve dürüst oluruz. Herkesin açıkça ifade etmesi ve bilgi paylaşması teşvik edilir. Yalan söylemez, yanıltıcı davranışlarda bulunmayız.',
        },
        {
          title: 'Güvenilirlik',
          desc:
            'Güvenilirlik, işimizi titizlikle yapmamızı sağlar. Her zaman sözümüzün eri oluruz ve verdiğimiz taahhütleri yerine getiririz. Hata yapmamaya özen gösterir, kimseyi aldatmamız söz konusu olmaz.',
        },
        {
          title: 'Saygı',
          desc:
            'İletişimde olduğumuz herkesle ve ekip arkadaşlarımıza karşı her zaman saygılı davranırız. Farklı görüşlere saygı gösterir ve herkesin sesini duyurmasını teşvik ederiz. Saygı, iş birliğimizin ve başarımızın anahtarıdır.',
        },
        {
          title: 'Çalışkanlık',
          desc:
            'Çalışkanlık, işimize olan bağlılığımızı ve kararlılığımızı ifade eder. İşimizi en iyi şekilde yapmak için gereken çabayı gösterir, sorumluluklarımızı zamanında ve eksiksiz yerine getiririz. İşten kaçınmaz, zorluklarla cesurca yüzleşiriz.',
        },
        {
          title: 'Kalite',
          desc:
            'Kalite standartlarımıza uygun olarak her işi titizlikle yaparız. Müşterilerimize ve iş ortaklarımıza en yüksek kalitede hizmet sunmayı hedefleriz. Kalite, şirketimizin itibarını korumak için vazgeçilmez bir unsur olarak kabul edilir.',
        },
        {
          title: 'Müşteri Odaklılık',
          desc:
            'Müşterilerimizin memnuniyeti ve mutluluğu, iş yapış şeklimizin merkezindedir. Müşteri taleplerine olumlu ve hızlı bir şekilde yanıt veririz, onların ihtiyaçlarına uygun çözümler sunarız. Müşteri memnuniyeti, uzun vadeli başarımızın anahtarıdır.',
        },
        {
          title: 'Huzur',
          desc:
            'Ekip içinde huzur ve uyum ön plandadır. Tartışmalardan kaçınır, fikir ayrılıklarını olgunlukla çözeriz. Pozitif bir çalışma ortamı oluşturarak, bu huzuru iş ilişkilerimize yansıtırız.',
        },
        {
          title: 'İletişim',
          desc:
            'İletişim, başarımızın ve etkinliğimizin temelini oluşturur. Hem ekip içinde hem de iş yaptığımız kişilerle sürekli ve açık iletişim içinde oluruz. Sorunları iletişim yoluyla çözer, herkesin görüşlerine değer veririz.',
        },
        {
          title: 'Sabır',
          desc:
            'Sabır, her türlü zorluğun üstesinden gelmemizi sağlar. Öfkelenmez, ani tepkiler vermez ve tartışmalara girmeyiz. Beklemeyi bilir, sorunları sakin bir şekilde çözmek için gerekli adımları atarız.',
        },
        {
          title: 'Yardımlaşma',
          desc:
            'Ekip içi yardımlaşma ve iş birliği, şirketimizin gücünü oluşturur. Birbirimize destek olur, güçlü yanlarımızı paylaşır ve zayıf yönlerimizi destekleriz. Aynı zamanda, iş ilişkilerimizde de yardımlaşma ve dayanışma prensibini benimseriz, iş ortaklarımıza destek oluruz.',
        },
        {
          title: 'Hedef Odaklılık',
          desc:
            'Ekip olarak aynı hedef doğrultusunda birlikte çalışırız. Belirlediğimiz hedeflere inanır ve bu hedeflere ulaşacağımız bilinciyle hareket ederiz. Hedeflerimizi net bir şekilde belirler, stratejiler geliştirir ve kararlılıkla uygularız. Her birimiz, bireysel olarak katkı sağlayarak, ortak hedeflerimize ulaşmaya odaklanırız. Başarıya giden yolda kararlılıkla ilerler ve engelleri aşmak için birlikte çalışırız.',
        },
      ],
    },
  },
}
