type TRService = {
  title: string
  tagline: string
  overview: string
  highlights: string[]
  included: { label: string; desc: string }[]
  process: { step: string; title: string; desc: string }[]
}

const servicesTR: Record<string, TRService> = {
  'ship-agency': {
    title: 'Gemi Acenteliği',
    tagline: 'Her Türk liman çağrısı için tek güvenilir temas noktanız.',
    overview:
      'NEOS Maritime, Türkiye\'nin tüm limanlarında, terminallerinde ve tersanelerinde her tip ve büyüklükteki gemi için kapsamlı gemi acenteliği hizmetleri sunmaktadır. Varış öncesi koordinasyondan son çıkışa kadar deneyimli ekibimiz her resmi işlemi, irtibatı ve operasyonel gereksinimi yönetir; geminin zamanında ve verimli hareket etmesini sağlar.',
    highlights: [
      '80\'den fazla Türk limanı ve terminaline hizmet',
      '7/24 nöbetçi operasyon ekibi',
      'Liman idareleriyle doğrudan ilişkiler',
      'Şeffaf avans hesapları',
    ],
    included: [
      { label: 'Varış Öncesi Koordinasyon', desc: 'Liman idaresi bildirimleri, borda planlaması ve varış gümrük evrakları önceden hazırlanır.' },
      { label: 'Varış ve Kalkış İşlemleri', desc: 'Gümrük, göç, sağlık ve liman makamı varış/kalkış işlemlerinin tam yönetimi.' },
      { label: 'Liman İdaresiyle İrtibat', desc: 'Liman başkanlığı, liman işletmecileri ve ilgili tüm resmi kurumlarla doğrudan iletişim.' },
      { label: 'Yük Operasyonları Desteği', desc: 'Liman boyunca stevedorlar, terminal işletmecileri ve kargo müfettişleriyle koordinasyon.' },
      { label: 'Avans Hesapları', desc: 'Tüm liman masrafları için detaylı ve şeffaf avans hesabı hazırlanması ve mutabakatı.' },
      { label: 'Gerçek Zamanlı Güncellemeler', desc: 'Tüm liman çağrısı boyunca armatör ve operatörlere sürekli durum raporlaması.' },
    ],
    process: [
      { step: '01', title: 'Varış Öncesi', desc: 'Gemi detaylarını alır, borda rezervasyonu yapar, evrakları hazırlar ve ilgili makamlara bildirim yaparız.' },
      { step: '02', title: 'Varış', desc: 'Ekibimiz gemiyi karşılar, tüm işlemleri yönetir ve liman operasyonlarının sorunsuz başlamasını koordine eder.' },
      { step: '03', title: 'Limanda Operasyon', desc: 'Sürekli sahada destek: yük takibi, resmi irtibatlar, husbandry ve anlık gereksinimler.' },
      { step: '04', title: 'Kalkış ve DA', desc: 'Kalkış gümrükleme işlemi hızla tamamlanır, ardından detaylı ve şeffaf avans hesabı sunulur.' },
    ],
  },

  'husbandry': {
    title: 'Husbandry Hizmetleri',
    tagline: 'Limandaki geminin her ihtiyacı — eksiksiz karşılanır.',
    overview:
      'Husbandry birimimiz, liman çağrısı sırasındaki ticari olmayan tüm gemi gereksinimlerini karşılar. Kritik bir yedek parça, teknik onarım, tıbbi acil durum veya rutin bakım koordinasyonu olsun; NEOS Maritime geminin güvenilir kara operatörü olarak hareket eder — hızlı, güvenilir ve her zaman erişilebilir.',
    highlights: [
      'Talep üzerine yedek parça ve teknik lojistik',
      'Tıbbi ve mürettebat refah hizmetleri',
      'Türkiye genelinde güvenilir tersane kontakları',
      '7/24 acil müdahale kapasitesi',
    ],
    included: [
      { label: 'Yedek Parça Lojistiği', desc: 'Gemi yedek parçalarının gümrük takibi, teslim alınması ve bordaya güvenli teslimatı.' },
      { label: 'Onarım Koordinasyonu', desc: 'Onaylı onarım müteahhitleri, ekspertizler ve sınıflandırma kuruluşu müfettişlerinin temini ve yönetimi.' },
      { label: 'Tıbbi Yardım', desc: 'Acil tıbbi koordinasyon, mürettebat hastane transferleri ve liman sağlık makamlarıyla irtibat.' },
      { label: 'Tatlı Su Temini', desc: 'Türkiye\'nin tüm limanlarında bordada veya su teknesiyle tatlı su temini.' },
      { label: 'Nakit ve Posta Teslimatı', desc: 'Kaptana güvenli nakit avansı ve mürettebat posta ve kargolarının güvenilir teslimatı.' },
      { label: 'Atık ve Sintine Bertarafı', desc: 'MARPOL yönetmeliklerine uygun çöp, sintine suyu ve slop bertaraf düzenlemeleri.' },
    ],
    process: [
      { step: '01', title: 'Gereksinim Belirlendi', desc: 'Kaptan veya armatör 7/24 operasyon ekibimizle irtibata geçer — telefon, e-posta veya WhatsApp ile.' },
      { step: '02', title: 'Hızlı Temin', desc: 'Yerleşik yerel ağımızı kullanarak doğru müteahhit, tedarikçi veya kurumu belirler ve harekete geçiririz.' },
      { step: '03', title: 'Gemide Uygulama', desc: 'Hizmet gemiye teslim edilir — bordada, demirde veya kuru havuzda — tam denetim altında.' },
      { step: '04', title: 'Raporlama ve Faturalandırma', desc: 'Her husbandry işleminin ardından armatör veya işletmeciye detaylı rapor ve maliyet dökümü sunulur.' },
    ],
  },

  'crew-services': {
    title: 'Mürettebat Hizmetleri',
    tagline: 'Her Türk limanında sorunsuz mürettebat değişimi ve refah hizmetleri.',
    overview:
      'NEOS Maritime, Türk limanlarındaki mürettebat değişimlerinin ve refah hizmetlerinin tüm sürecini yönetir. Bir denizcinin Türkiye\'ye varışından güvenli ayrılışına kadar her adımı koordine ediyoruz — vize başvuruları, havalimanı transferleri, otel rezervasyonları ve göç işlemleri — gemi gecikmesini en aza indirirken mürettebat refahını koruyoruz.',
    highlights: [
      'Tüm büyük Türk havalimanlarında mürettebat değişimi',
      'Vize ve göç konusunda uzman kadro',
      'Güvenilir otel ve ulaşım partnerleri',
      'Nöbetçi mürettebat refah koordinasyonu',
    ],
    included: [
      { label: 'Mürettebat Değişimi Koordinasyonu', desc: 'Katılan ve ayrılan mürettebat için uçuş onayından gangwaya kadar tam uçtan uca yönetim.' },
      { label: 'Vize ve Göç Yardımı', desc: 'Denizci vize başvuruları, transit vize desteği ve Türk göç makamlarıyla irtibat.' },
      { label: 'Havalimanı Transferleri', desc: 'İstanbul, İzmir, Mersin, Samsun havalimanları ile gemi arasında güvenilir kapıdan kapıya ulaşım.' },
      { label: 'Otel Konaklaması', desc: 'Güvenilir partnerler aracılığıyla rekabetçi fiyatlarla limana yakın mürettebat oteli rezervasyonu ve yönetimi.' },
      { label: 'Mürettebat Geri Dönüşü', desc: 'Hasta, yaralı veya çıkış yapan mürettebat için geri dönüş düzenlemeleri — şefkatle ve hızla yönetilir.' },
      { label: 'Tıbbi Sevk', desc: 'PEME muayeneleri ve gemideki tıbbi acil durumlar için onaylı denizcilik klinikleriyle koordinasyon.' },
    ],
    process: [
      { step: '01', title: 'Mürettebat Listesi Alındı', desc: 'Armatör veya operatör, uçuş detayları ve vize gereksinimleriyle birlikte katılım/ayrılış listelerini gönderir.' },
      { step: '02', title: 'Evrak ve Lojistik', desc: 'Gerekli izinleri başvururuz, otelleri ve transferleri rezerve eder, tüm kıyı geçiş belgelerini hazırlarız.' },
      { step: '03', title: 'Havalimanından Gangwaya', desc: 'Temsilcimiz gelen mürettebatı karşılar, göç işlemlerini halleder ve gemiye eşlik eder.' },
      { step: '04', title: 'Kalkış ve Raporlama', desc: 'Ayrılan mürettebat, tüm çıkış belgeleri tamamlanmış ve onaylanmış şekilde havalimanına transfer edilir.' },
    ],
  },

  'customs-clearance': {
    title: 'Gümrük İşlemleri',
    tagline: 'Hızlı, mevzuata uygun gümrük takibi.',
    overview:
      'Türkiye gümrük mevzuatı detaylı ve zaman açısından kritiktir. NEOS Maritime\'in lisanslı gümrük ekibi, gemi malzemeleri, yedek parçalar, mürettebat eşyaları ve kargonun hızlı ve tam mevzuata uygun şekilde gümrüklenmesini sağlar — gemi operatörlerine önemli zaman ve para kaybettiren gecikmeleri, cezaları ve bürokratik engelleri ortadan kaldırır.',
    highlights: [
      'Kadrodaki lisanslı gümrük müşavirleri',
      'Gemi malzemeleri ve yedek parça gümrükleme uzmanları',
      'Türk gümrük müdürlükleriyle güçlü ilişkiler',
      'Acil gönderiler için hızlı işlem süresi',
    ],
    included: [
      { label: 'Gemi Malzemeleri Gümrükleme', desc: 'Tüm Türk limanlarında yurt içi ve ithal erzak, sarf malzemeleri ve transit malların gümrüklenmesi.' },
      { label: 'Yedek Parça İthalatı', desc: 'Gümrük denetimi altında gemi yedek parçalarının geçici veya kalıcı ithali, tam belgelendirme ile.' },
      { label: 'Mürettebat Kişisel Eşyaları', desc: 'Mürettebat kişisel eşyalarının, gümrüksüz haklarının ve kısıtlı ürün beyanlarının yönetimi.' },
      { label: 'Kargo Belgelendirmesi', desc: 'Gerekli tüm manifesto, konşimento ve kargo beyanlarının hazırlanması ve sunumu.' },
      { label: 'Antrepo Hizmetleri', desc: 'Türk limanları yakınındaki onaylı antrepolarda gümrük teminatı altında geçici depolama.' },
      { label: 'Tehlikeli Madde Takibi', desc: 'IMDG sınıflandırmalı tehlikeli maddeler için gümrük işlemi ve liman idaresi bildirimleri.' },
    ],
    process: [
      { step: '01', title: 'Belgeler Alındı', desc: 'Ambalaj listelerini, faturaları ve hava yolu konşimentolarını alırız — genellikle varıştan 24 saat önce.' },
      { step: '02', title: 'Gümrük Beyannamesi', desc: 'Gümrük müşavirlerimiz Türkiye\'nin BİLGE sistemi aracılığıyla gümrük beyannamesini hazırlar ve sunar.' },
      { step: '03', title: 'Muayene ve Serbest Bırakma', desc: 'Herhangi bir gümrük muayenesinde gemiyi temsil eder ve malların serbest bırakılmasını hızlandırırız.' },
      { step: '04', title: 'Gemiye Teslimat', desc: 'Gümrüklenen ürünler bordaya nakledilir ve gözetimimiz altında gemiye teslim edilir.' },
    ],
  },

  'port-dues': {
    title: 'Liman Harçları ve Tarifeleri',
    tagline: 'Tüm liman masrafları yönetilir, ödenir ve hesaplanır.',
    overview:
      'Türkiye\'deki liman masrafları; kılavuzluk ve romörkaj ücretlerinden deniz feneri harçlarına ve borda tarifelerine kadar geniş bir yelpazede harçları kapsamaktadır. NEOS Maritime, armatörler ve operatörler adına tüm liman harçlarının eksiksiz yönetimini ve ödemesini üstlenir; doğru proforma tahminler, avans fon yönetimi ve tam belgeli nihai hesaplar sunar.',
    highlights: [
      'Talep üzerine doğru proforma avans hesabı',
      'Avans ödeme yönetimi',
      'Türk liman tarifeleri konusunda tam uzmanlık',
      'Şeffaf nihai avans hesapları',
    ],
    included: [
      { label: 'Kılavuzluk Ücretleri', desc: 'Zorunlu kılavuz tutma limanlarda geçerli tüm kılavuzluk ücretlerinin yönetimi ve ödemesi.' },
      { label: 'Romörkaj Ücretleri', desc: 'Tüm Türk limanlarında yanaşma ve ayrılma manevralarında römorkörlerin rezervasyonu ve ödemesi.' },
      { label: 'Borda Kirası ve Liman Harçları', desc: 'Liman idaresince tahsil edilen borda ücreti, liman harçları ve terminal ücretlerinin ödenmesi.' },
      { label: 'Deniz Feneri ve Seyrüsefer Harçları', desc: 'İlgili makamlara deniz feneri, kıyı emniyeti ve seyrüsefer yardımı harçlarının ödenmesi.' },
      { label: 'Liman Sağlık ve Karantina', desc: 'Liman sağlık makamı ücretleri, pratika ve karantina denetim harçlarının ödenmesi.' },
      { label: 'Proforma ve Nihai DA', desc: 'Varış öncesi proforma avans hesabı ve tüm destekleyici faturalarla tam belgeli nihai avans hesabı.' },
    ],
    process: [
      { step: '01', title: 'Proforma Tahmin', desc: 'Varıştan önce tüm beklenen liman masrafları ve ücretleriyle detaylı proforma avans hesabı sunarız.' },
      { step: '02', title: 'Avans Fon', desc: 'Armatör/operatörden avans alır ve tüm liman ödemelerini limanda yönetiriz.' },
      { step: '03', title: 'Ödeme', desc: 'Tüm harçlar ilgili makamlara zamanında ödenir, her makbuz alınır ve dosyalanır.' },
      { step: '04', title: 'Nihai Hesap', desc: 'Ayrılıştan sonra mutabık kalınan süre içinde destekleyici belgelerle eksiksiz nihai avans hesabı düzenlenir.' },
    ],
  },

  'bunkering': {
    title: 'Yakıt ve Kumanya',
    tagline: 'Her Türk limanında kaliteli yakıt ve kumanya tedariki.',
    overview:
      'NEOS Maritime, onaylı tedarikçiler ve bunker alım satımcılarıyla kurulu ilişkileri aracılığıyla Türkiye\'nin tüm limanlarında yakıt temini ve gemi kumanyasını koordine eder. Miktar, kalite ve zamanlamayı yönetir — minimum gecikme ve maksimum güvenilirlikle geminin yakıt, erzak ve denize hazır olmasını sağlarız.',
    highlights: [
      'Tüm Türk bunker tedarikçilerine erişim',
      'MARPOL uyumlu yakıt alma prosedürleri',
      'Tam kumanya ve gemi erzak ağı',
      'Talep üzerine yerinde yakıt alma denetimi',
    ],
    included: [
      { label: 'Deniz Yakıtı Temini (HFO/VLSFO/MGO)', desc: 'Onaylı Türk tedarikçilerinden rekabetçi fiyatlarla tüm deniz yakıtı türlerinin temini ve koordinasyonu.' },
      { label: 'Yağ Temini', desc: 'Ana makine, yardımcı makineler ve güverte ekipmanları için deniz yağı temini ve teslimatı.' },
      { label: 'Miktar ve Kalite Denetimi', desc: 'Yakıt alma operasyonlarına tanıklık etmek ve teslim edilen miktarları doğrulamak için bağımsız ekspertiz atanması.' },
      { label: 'Gemi Erzak ve Malzemeleri', desc: 'Tüm yiyecek erzakı, güverte malzemeleri, kabin malzemeleri ve transit malların temini ve teslimatı.' },
      { label: 'Tatlı Su Temini', desc: 'Tüm Türk limanlarında bordada veya su teknesiyle içme ve teknik tatlı su temini.' },
      { label: 'Emniyet ve Güverte Ekipmanları', desc: 'Emniyet ekipmanı, halatlar, mooring halatları, boya ve genel güverte sarf malzemelerinin temini.' },
    ],
    process: [
      { step: '01', title: 'Gereksinim ve Teklif', desc: 'Armatör veya kaptan yakıt miktarını, cinsini ve teslimat zamanını bildirir — rekabetçi teklifler alırız.' },
      { step: '02', title: 'Tedarikçi Tespiti', desc: 'En iyi değerli, MARPOL uyumlu tedarikçi tüm gerekli belgelerle belirlenir ve onaylanır.' },
      { step: '03', title: 'Yakıt Alma Operasyonu', desc: 'Yakıt alma, istek üzerine bağımsız miktar/kalite ekspertizi ile gözetimimiz altında gerçekleşir.' },
      { step: '04', title: 'BDN ve Belgelendirme', desc: 'Bunker teslimat makbuzu, MARPOL Ek VI bildirimleri ve tüm belgeler armatöre iletilir.' },
    ],
  },
}

export default servicesTR
