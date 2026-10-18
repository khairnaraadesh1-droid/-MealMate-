export const REGIONAL_CATEGORIES = [
  {
    id: 'khandesh',
    isSpecial: true,
    title: {
      en: 'Khandeshi Special',
      mr: 'खान्देशी खास',
      hi: 'खान्देशी खास'
    },
    subtitle: {
      en: 'Spicy Kala Masala curries, Shev Bhaji, authentic Bharit & Jowar Bhakri',
      mr: 'झणझणीत काळा मसाला, अस्सल शेव भाजी, वांग्याचं भरीत आणि गरम भाकरी',
      hi: 'मसालेदार काळा मसाला करी, शेव भाजी, भरता और ज्वार की भाकरी'
    },
    badge: {
      en: 'Regional Specialty ★ Featured',
      mr: 'अस्सल चव ★ मुख्य आकर्षण',
      hi: 'खास पहचान ★ फीचर्ड'
    },
    accentColor: 'from-amber-600 via-orange-600 to-red-700',
    iconName: 'Flame',
    popularDishes: ['Shev Bhaji', 'Vangyache Bharit', 'Patodi Rassa', 'Khandeshi Thecha', 'Pithla Bhakri']
  },
  {
    id: 'everyday_maharashtrian',
    isSpecial: false,
    title: {
      en: 'Everyday Maharashtrian Food',
      mr: 'रोजचे महाराष्ट्रीयन जेवण',
      hi: 'रोज का महाराष्ट्रीयन भोजन'
    },
    subtitle: {
      en: 'Comforting Varan Bhat, Poli Bhaji, healthy Usal, Mattha & Koshimbir',
      mr: 'सात्विक वरण भात, पोळी-भाजी, उसळ, ताक आणि कोशिंबीर',
      hi: 'दाल-चावल, रोटी-सब्जी, पौष्टिक उसल और ताज़ा छाछ'
    },
    badge: {
      en: 'Daily Comfort',
      mr: 'रोजचा डबा व जेवण',
      hi: 'दैनिक भोजन'
    },
    accentColor: 'from-emerald-600 to-teal-700',
    iconName: 'Utensils',
    popularDishes: ['Varan Bhat', 'Poli Bhaji', 'Matki Usal', 'Moong Dal Khichdi', 'Koshimbir']
  },
  {
    id: 'traditional',
    isSpecial: false,
    title: {
      en: 'Traditional Maharashtrian Recipes',
      mr: 'पारंपारिक पाककृती',
      hi: 'पारंपरिक व्यंजन'
    },
    subtitle: {
      en: 'Timeless heirloom recipes like Thalipeeth, Dhirde, Zunka & Ghavan',
      mr: 'आजीच्या हातची पारंपारिक चव - थालीपीठ, धिरडे, झुणका आणि घावन',
      hi: 'पारंपरिक स्वाद - थालीपीठ, धिरडे, झुणका और घावन'
    },
    badge: {
      en: 'Heritage Recipes',
      mr: 'वारसा पाककृती',
      hi: 'विरासत व्यंजन'
    },
    accentColor: 'from-yellow-600 to-amber-700',
    iconName: 'History',
    popularDishes: ['Thalipeeth', 'Zunka Bhakri', 'Dhirde', 'Ghavan', 'Kothimbir Vadi']
  },
  {
    id: 'vidarbha',
    isSpecial: false,
    title: {
      en: 'Vidarbha Cuisine (Saoji & Varadi)',
      mr: 'विदर्भ विशेष (सावजी व वऱ्हाडी)',
      hi: 'विदर्भ विशेष (सावजी और वऱ्हाडी)'
    },
    subtitle: {
      en: 'Fiery Saoji spices, Tarri Poha, Gola Bhat & rich gram flour curries',
      mr: 'झणझणीत सावजी रस्सा, नागपुरी तर्री पोहा, आणि गोला भात',
      hi: 'तीखा सावजी स्वाद, नागपुरी तर्री पोहा और गोला भात'
    },
    badge: {
      en: 'Fiery & Bold',
      mr: 'तर्रीदार व तिखट',
      hi: 'तीखा और मसालेदार'
    },
    accentColor: 'from-red-600 to-rose-800',
    iconName: 'Sparkles',
    popularDishes: ['Tarri Poha', 'Saoji Curry', 'Gola Bhat', 'Patodi Bhaji']
  },
  {
    id: 'marathwada',
    isSpecial: false,
    title: {
      en: 'Marathwada Cuisine',
      mr: 'मराठवाडा विशेष',
      hi: 'मराठवाड़ा व्यंजन'
    },
    subtitle: {
      en: 'Spicy dal curries, Sheng Sola, Bajra Bhakri with garlic Kharda',
      mr: 'शेंग सोला, दाल गंडोरी, बाजरीची भाकरी आणि खमंग लसूण खर्डा',
      hi: 'शेंग सोला, दाल गंडोरी, बाजरा भाकरी और लहसुन खर्डा'
    },
    badge: {
      en: 'Rustic Flavour',
      mr: 'गावरान चव',
      hi: 'देसी स्वाद'
    },
    accentColor: 'from-orange-600 to-amber-800',
    iconName: 'Compass',
    popularDishes: ['Sheng Sola', 'Marathwada Dal Kanda', 'Bajra Bhakri with Thecha']
  },
  {
    id: 'konkan',
    isSpecial: false,
    title: {
      en: 'Konkan Coastal Cuisine',
      mr: 'कोकणी चव व मालवणी',
      hi: 'कोंकणी व मालवणी स्वाद'
    },
    subtitle: {
      en: 'Rich coconut gravies, refreshing Solkadhi, Ghavan & Malvani aromas',
      mr: 'ओल्या नारळाचा स्वाद, थंडगार सोलकढी, घावन आणि मालवणी सुगंध',
      hi: 'ताजे नारियल की ग्रेवी, ताज़ातरीन सोलकढ़ी और मालवणी मसाले'
    },
    badge: {
      en: 'Coastal Fresh',
      mr: 'नारळी व कोकणी',
      hi: 'तटीय ताज़गी'
    },
    accentColor: 'from-cyan-600 to-blue-700',
    iconName: 'Waves',
    popularDishes: ['Solkadhi', 'Malvani Curry', 'Konkani Ghavan', 'Kaju Usal']
  },
  {
    id: 'pune_kolhapur',
    isSpecial: false,
    title: {
      en: 'Pune & Western Maharashtra',
      mr: 'पुणेरी व पश्चिम महाराष्ट्र (कोल्हापुरी)',
      hi: 'पुणे व पश्चिमी महाराष्ट्र (कोल्हापुरी)'
    },
    subtitle: {
      en: 'Subtle Puneri Amti, fiery Kolhapuri Misal, Tambda-Pandhra Rassa',
      mr: 'गोडसर पुणेरी आमटी, तिखट कोल्हापुरी मिसळ आणि तांबडा-पांढरा रस्सा',
      hi: 'पुणेरी आमटी, तीखी कोल्हापुरी मिसल और तांबड़ा-पांढरा रस्सा'
    },
    badge: {
      en: 'Iconic Classics',
      mr: 'लोकप्रिय चव',
      hi: 'प्रसिद्ध क्लासिक्स'
    },
    accentColor: 'from-purple-600 to-indigo-800',
    iconName: 'Award',
    popularDishes: ['Kolhapuri Misal', 'Puneri Amti', 'Tambda Rassa', 'Pandhra Rassa', 'Bakharwadi']
  },
  {
    id: 'festive_seasonal',
    isSpecial: false,
    title: {
      en: 'Festive & Seasonal Recipes',
      mr: 'सण आणि सणासुदीचे गोडधोड',
      hi: 'त्योहारी और मौसमी पकवान'
    },
    subtitle: {
      en: 'Puran Poli with Katachi Amti, Ukadiche Modak, Shrikhand, Basundi & Upvas dishes',
      mr: 'पुरणपोळी-कटाची आमटी, उकडीचे मोदक, श्रीखंड, बासुंदी आणि उपवासाचे पदार्थ',
      hi: 'पूरनपोली, उकडीचे मोदक, श्रीखंड, बासुंदी और उपवास के फलाहार'
    },
    badge: {
      en: 'Celebration Sweets',
      mr: 'सणांचे गोडधोड',
      hi: 'त्योहारी मिठास'
    },
    accentColor: 'from-pink-600 to-rose-700',
    iconName: 'Gift',
    popularDishes: ['Puran Poli', 'Ukadiche Modak', 'Shrikhand Puri', 'Basundi', 'Sabudana Khichdi']
  }
];
