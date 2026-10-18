export const FESTIVE_AND_REGIONAL_RECIPES = [
  {
    id: 'puran-poli-katachi-amti',
    name: {
      en: 'Puran Poli with Katachi Amti',
      mr: 'पारंपारिक पुरणपोळी आणि कटाची आमटी',
      hi: 'पूरनपोली और कटाची आमटी'
    },
    transliteration: 'Puran Poli',
    description: {
      en: 'The golden jewel of Maharashtrian festivities: melt-in-mouth flatbread stuffed with fragrant jaggery-chana dal filling (puran), paired with spicy, tangy chana dal stock curry (katachi amti) and pure milk/ghee.',
      mr: 'सणासुदीचा राजा: गूळ आणि चणा डाळीचे खमंग पुरण भरलेली मऊसुत पुरणपोळी, सोबत कटाची झणझणीत आमटी, साय आणि साजूक तूप.',
      hi: 'महाराष्ट्र का प्रमुख त्योहारी पकवान: गुड़ और चने की दाल से भरी मीठी पूरनपोली, साथ में तीखी कटाची आमटी और शुद्ध घी।'
    },
    category: 'sweet',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'festive_seasonal',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 30,
    cookTime: 40,
    difficulty: 'hard',
    servings: 4,
    cost: 160,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chana_dal', name: { en: 'Chana dal (Bengal gram)', mr: 'हरभरा डाळ (चणा डाळ)', hi: 'चना दाल' }, amount: 1.5, unit: 'cups', category: 'pulses' },
      { id: 'jaggery', name: { en: 'Organic Jaggery (Gul)', mr: 'सेंद्रिय गूळ', hi: 'गुड़' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'wheat_flour', name: { en: 'Wheat flour + Maida for dough', mr: 'गव्हाचे पीठ व थोडे मैदा', hi: 'गेहूं का आटा व मैदा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'ghee', name: { en: 'Pure Cow Ghee', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 4, unit: 'tbsp', category: 'dairy' },
      { id: 'kala_masala', name: { en: 'Goda Masala (for Katachi Amti)', mr: 'गोडा मसाला (कटाच्या आमटीसाठी)', hi: 'गोडा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil chana dal with water in a pressure cooker. Strain dal completely, reserving the aromatic dal water (Kat) for Katachi Amti.', mr: 'चणा डाळ कुकरमध्ये मऊ शिजवून चाळणीत निथळा. डाळीचे पाणी (कट) आमटीसाठी बाजूला ठेवा.', hi: 'चना दाल को कुकर में उबालकर पानी (कट) अलग छान लें, दाल अलग रखें।' } },
      { step: 2, text: { en: 'Mash boiled dal with jaggery in a pan on medium heat until thick. Grind in a Puran yantra with cardamom and nutmeg powder until silky smooth.', mr: 'डाळ आणि गूळ कढईत एकत्र करून पुरण घट्ट होईपर्यंत शिजवा. वेलची-जायफळ पूड घालून पुरण यंत्रातून मऊ वाटून घ्या.', hi: 'दाल और गुड़ को कड़ाही में गाढ़ा होने तक पकाएं। इलायची-जायफल डालकर पूरन यंत्र से पीसें।' } },
      { step: 3, text: { en: 'Knead soft pliable dough with flour, water, and oil (Kanjee). Stuff a ball of puran into dough and roll thinly dusting with flour.', mr: 'पीठ, पाणी आणि तेल घालून मऊ कणीक मळा. कणकेत पुरणाचा गोळा भरून पातळ पोळी लाटा.', hi: 'आटे की लोई में पूरन भरकर पतली रोटी बेलें।' } },
      { step: 4, text: { en: 'Roast on hot tawa applying pure ghee on both sides until golden spots appear and poli puffs like a balloon.', mr: 'गरम तव्यावर दोन्ही बाजूंनी साजूक तूप लावून टम्म फुगेपर्यंत खमंग भाजा.', hi: 'तवे पर दोनों तरफ घी लगाकर सुनहरा फूलने तक सेकें।' } },
      { step: 5, text: { en: 'For Katachi Amti: Temper mustard seeds, curry leaves, hing, add the reserved dal stock, goda masala, tamarind-jaggery, and simmer for 10 minutes.', mr: 'कटाची आमटीसाठी: तेलात मोहरी, कढीपत्ता, हिंग परतून डाळीचे पाणी, गोडा मसाला, चिंच-गूळ घालून १० मिनिटे उकळा.', hi: 'कटाची आमटी: तड़के में दाल का पानी, गोडा मसाला और इमली-गुड़ डालकर उबालें।' } }
    ],
    accompaniments: [
      { en: 'Katachi Amti (Spicy Chana Dal Soup)', mr: 'कटाची झणझणीत आमटी', hi: 'कटाची आमटी' },
      { en: 'Warm Milk and Pure Cow Ghee', mr: 'गरम दूध आणि साजूक तूप', hi: 'गरम दूध और घी' }
    ],
    substitutions: [
      { en: 'Can use 100% whole wheat flour for a healthier dough.', mr: 'मैदा न वापरता संपूर्ण गव्हाचे पीठ वापरू शकता.', hi: 'केवल गेहूं के आटे से भी बना सकते हैं।' }
    ],
    allergens: ['Dairy (Ghee/Milk)', 'Gluten'],
    searchAliases: ['puran poli', 'पुरणपोळी', 'katachi amti', 'festive maharashtrian', 'sweet roti', 'puranpuri']
  },
  {
    id: 'ukadiche-modak',
    name: {
      en: 'Steamed Ukadiche Modak',
      mr: 'उकडीचे मोदक (गणपती बाप्पाचा प्रसाद)',
      hi: 'उकडीचे मोदक (पारंपरिक)'
    },
    transliteration: 'Ukadiche Modak',
    description: {
      en: 'Lord Ganesha’s beloved delicacy: delicate steamed rice flour dumplings filled with juicy fresh grated coconut, fragrant jaggery, cardamom, and nutmeg, served with a stream of pure ghee.',
      mr: 'बाप्पाचा आवडता प्रसाद: सुवासिक तांदळाच्या पिठाची उकड काढून त्यात ओले खोबरे, गूळ, वेलची-जायफळाचे सारण भरून वाफवलेले सुबक मोदक.',
      hi: 'भगवान गणेश का प्रिय भोग: चावल के आटे में ताजा कसा नारियल, गुड़ और इलायची भरकर भाप में पकाए गए पारंपरिक मोदक।'
    },
    category: 'sweet',
    mealTypes: ['snack', 'breakfast'],
    cuisine: 'festive_seasonal',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 25,
    cookTime: 15,
    difficulty: 'hard',
    servings: 4,
    cost: 140,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Fine Basmati/Ambemohar Rice Flour', mr: 'बारीक आंबेमोहर तांदळाचे पीठ', hi: 'बारीक चावल का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'fresh_coconut', name: { en: 'Freshly grated coconut', mr: 'खोवलेले ओले खोबरे', hi: 'ताजा कसा नारियल' }, amount: 2, unit: 'cups', category: 'spices' },
      { id: 'jaggery', name: { en: 'Grated Jaggery', mr: 'बारीक किसलेला गूळ', hi: 'कद्दूकस गुड़' }, amount: 1, unit: 'cup', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Cow Ghee', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 2, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'For stuffing (Saran): Cook fresh coconut and jaggery in a pan on low flame with 1 tsp ghee until jaggery melts and mixture thickens. Add cardamom and nutmeg powder; cool.', mr: 'सारणासाठी: कढईत ओले खोबरे, गूळ आणि १ चमचा तूप घालून मंद आचेवर शिजवा. वेलची-जायफळ पूड घालून थंड करा.', hi: 'सारण के लिए: नारियल और गुड़ को धीमी आंच पर पकाएं। इलायची मिलाकर ठंडा करें।' } },
      { step: 2, text: { en: 'For dough (Ukad): Boil 2 cups water with pinch of salt and 1 tsp ghee. Add rice flour, stir vigorously, cover, and steam on lowest flame for 5 minutes. Knead warm dough into silky smooth texture.', mr: 'उकडीसाठी: २ कप पाण्यात मीठ व तूप घालून उकळी आणा. तांदळाचे पीठ घालून ढवळा आणि ५ मिनिटे वाफ काढा. गरम असतानाच मऊ मळून घ्या.', hi: 'उकड़ के लिए: उबलते पानी में चावल का आटा डालकर चलाएं और ढककर भाप दें। फिर अच्छी तरह गूंध लें।' } },
      { step: 3, text: { en: 'Take a lemon-sized dough ball, grease fingers with oil, shape into a thin cup with your thumbs, fill coconut stuffing, create delicate pleats (kalya), and seal the top apex.', mr: 'पिठाची पारी करून त्यात खोबऱ्याचे सारण भरा, बोटांनी सुंदर पाकळ्या पाडून वरून टोक बंद करा.', hi: 'लोई की कटोरी बनाकर नारियल का भरावन भरें, कली बनाएं और ऊपर से बंद करें।' } },
      { step: 4, text: { en: 'Dip modaks in water and place in a steamer lined with turmeric or banana leaf. Steam for 10-12 minutes until glossy.', mr: 'मोदक हळदीच्या किंवा केळीच्या पानावर ठेवून स्टीमरमध्ये १०-१२ मिनिटे वाफवून घ्या.', hi: 'केले या हल्दी के पत्ते पर रखकर १०-१२ मिनट भाप में पकाएं।' } },
      { step: 5, text: { en: 'Serve warm topped with a generous spoonful of melted pure cow ghee.', mr: 'गरमागरम मोदकावर साजूक तुपाची धार सोडून आस्वाद घ्या.', hi: 'गरम मोदक पर शुद्ध देसी घी डालकर भोग लगाएं और परोसें।' } }
    ],
    accompaniments: [
      { en: 'Melted pure cow ghee drizzle', mr: 'साजूक तुपाची धार', hi: 'शुद्ध देसी घी' }
    ],
    substitutions: [
      { en: 'Modak molds can be used if hand-shaping is challenging.', mr: 'पाकळ्या जमत नसतील तर मोदक साचा वापरू शकता.', hi: 'हाथ से न बने तो मोदक के सांचे का प्रयोग करें।' }
    ],
    allergens: ['Dairy (Ghee)'],
    searchAliases: ['ukadiche modak', 'उकडीचे मोदक', 'modak', 'ganesh chaturthi sweet', 'steamed modak']
  },
  {
    id: 'konkan-solkadhi',
    name: {
      en: 'Konkani Solkadhi',
      mr: 'कोकणी गुलाबी सोलकढी',
      hi: 'कोंकणी सोलकढ़ी'
    },
    transliteration: 'Solkadhi',
    description: {
      en: 'The cooling pink elixir of coastal Maharashtra: fresh thick coconut milk infused with tangy red kokum extract, garlic, green chillies, and fresh coriander.',
      mr: 'कोकण किनारपट्टीचे प्रसिद्ध पाचक पेय: ताज्या नारळाचे घट्ट दूध, तांबूस रंगाचा कोकम आगूळ, लसूण, मिरची आणि कोथिंबीर.',
      hi: 'कोंकण तट का पाचक और स्वादिष्ट पेय: ताजे नारियल का गाढ़ा दूध, कोकम का खट्टा अर्क, लहसुन, हरी मिर्च और हरा धनिया।'
    },
    category: 'accompaniment',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'konkan',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 15,
    cookTime: 0,
    difficulty: 'easy',
    servings: 4,
    cost: 75,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'fresh_coconut', name: { en: 'Fresh grated coconut for milk', mr: 'किसलेले ओले खोबरे (दुधासाठी)', hi: 'कसा ताजा नारियल' }, amount: 2, unit: 'cups', category: 'spices' },
      { id: 'tamarind', name: { en: 'Dried Kokum petals or Kokum Aagul', mr: 'कोकम पाकळ्या किंवा कोकम आगूळ', hi: 'कोकम' }, amount: 8, unit: 'pieces', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन' }, amount: 3, unit: 'cloves', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chilli', mr: 'हिरवी मिरची', hi: 'हरी मिर्च' }, amount: 1, unit: 'piece', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Soak dried kokum petals in 1/2 cup warm water for 20 minutes to extract the deep ruby red juice (Aagul).', mr: 'कोकम पाकळ्या अर्धा कप कोमट पाण्यात २० मिनिटे भिजवून गडद गुलाबी अर्क (आगूळ) काढून घ्या.', hi: 'कोकम को आधा कप गुनगुने पानी में २० मिनट भिगोकर लाल अर्क निकालें।' } },
      { step: 2, text: { en: 'Grind grated fresh coconut with garlic, green chilli, and 1.5 cups warm water. Strain through a muslin cloth or fine sieve to extract thick coconut milk.', mr: 'ओले खोबरे, लसूण, हिरवी मिरची आणि पाणी एकत्र वाटून गाळणीतून घट्ट नारळाचे दूध पिळून काढा.', hi: 'नारियल, लहसुन, मिर्च और पानी को पीसकर कपड़े से गाढ़ा नारियल का दूध छान लें।' } },
      { step: 3, text: { en: 'Mix the ruby kokum extract into the white coconut milk until it turns pastel pink. Add rock salt and cumin powder.', mr: 'नारळाच्या दुधात कोकम आगूळ मिसळा, छान गुलाबी रंग येईल. मीठ आणि जिरे पूड घाला.', hi: 'नारियल के दूध में कोकम अर्क मिलाएं, सुंदर गुलाबी रंग आएगा। नमक और जीरा पाउडर डालें।' } },
      { step: 4, text: { en: 'Chill in refrigerator for 30 minutes. Garnish with chopped coriander and serve with steamed rice or fish curry.', mr: '३० मिनिटे फ्रिजमध्ये थंड करा. कोथिंबीर घालून भातासोबत किंवा माशांच्या जेवणासोबत प्या.', hi: '३० मिनट फ्रिज में ठंडा करें और भोजन के साथ पाचक पेय के रूप में परोसें।' } }
    ],
    accompaniments: [
      { en: 'Steamed Rice with Malvani Curry', mr: 'मालवणी रस्सा आणि भात', hi: 'मालवणी करी और चावल' }
    ],
    substitutions: [
      { en: 'Store-bought coconut milk can be used if fresh coconut is unavailable.', mr: 'ताजे खोबरे नसेल तर रेडीमेड नारळाचे दूध वापरू शकता.', hi: 'डिब्बाबंद नारियल का दूध भी ले सकते हैं।' }
    ],
    allergens: ['Coconut'],
    searchAliases: ['solkadhi', 'सोलकढी', 'kokum drink', 'konkani solkadhi', 'coconut milk drink']
  },
  {
    id: 'vidarbha-tarri-poha',
    name: {
      en: 'Nagpuri Tarri Poha (Vidarbha Special)',
      mr: 'नागपुरी झणझणीत तर्री पोहा',
      hi: 'नागपुरी तर्री पोहा'
    },
    transliteration: 'Nagpuri Tarri Poha',
    description: {
      en: 'Nagpur’s legendary street breakfast: fluffy kanda poha served submerged in a fiery, thin black chana rassa (tarri), crowned with raw onions, coriander, and thick shev.',
      mr: 'विदर्भाची जगप्रसिद्ध ओळख: मऊ पोहे, त्यावर काळ्या चण्याचा खमंग व तिखट तर्रीदार रस्सा, बारीक कांदा, लिंबू आणि जाड शेव.',
      hi: 'नागपुर का मशहूर नाश्ता: पोहे के ऊपर काले चने का तीखा तर्रीदार रस्सा, ऊपर से कच्चा प्याज, नींबू और बेसन शेव।'
    },
    category: 'breakfast',
    mealTypes: ['breakfast', 'snack'],
    cuisine: 'vidarbha',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 15,
    cookTime: 20,
    difficulty: 'medium',
    servings: 4,
    cost: 75,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'poha', name: { en: 'Thick Poha (flattened rice)', mr: 'जाड पोहे', hi: 'मोटा पोहा' }, amount: 3, unit: 'cups', category: 'grains' },
      { id: 'chana_dal', name: { en: 'Boiled Black Bengal Gram (Kala Chana)', mr: 'उकडलेले काळे चणे', hi: 'उबले काले चने' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'onion', name: { en: 'Onions (finely chopped)', mr: 'कांदे', hi: 'प्याज' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomatoes', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Saoji / Kala Masala', mr: 'सावजी / काळा मसाला', hi: 'सावजी / काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'shev', name: { en: 'Spicy thick Shev', mr: 'तिखट जाड शेव', hi: 'तीखी शेव' }, amount: 1, unit: 'cup', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Make classic Kanda Poha with mustard seeds, turmeric, peanuts, and green chillies.', mr: 'कांदा, हिरवी मिरची, शेंगदाणे आणि हळद घालून नेहमीसारखे कांदा पोहे तयार करा.', hi: 'सामान्य विधि से कांदा पोहा तैयार करें।' } },
      { step: 2, text: { en: 'For Tarri: Heat 3 tbsp oil. Sauté ginger-garlic paste, chopped onion, and tomato till mushy.', mr: 'तर्रीसाठी: तेलात आले-लसूण पेस्ट, कांदा आणि टोमॅटो मऊ होईपर्यंत परता.', hi: 'तर्री के लिए: तेल में अदरक-लहसुन, प्याज और टमाटर भूनें।' } },
      { step: 3, text: { en: 'Add Saoji/Kala masala, red chilli powder, boiled kala chana with its cooking water, and 2 extra cups boiling water.', mr: 'सावजी किंवा काळा मसाला, तिखट, उकडलेले काळे चणे आणि २ कप उकळते पाणी घाला.', hi: 'सावजी मसाला, मिर्च, उबले काले चने और २ कप गर्म पानी डालें।' } },
      { step: 4, text: { en: 'Simmer on low heat for 12 minutes until a fiery red oil layer (tarri) forms on top.', mr: 'मंद आचेवर १२ मिनिटे उकळू द्या, जेणेकरून वरती छान लाल तर्री येईल.', hi: 'धीमी आंच पर १२ मिनट उबालें ताकि ऊपर तीखी लाल तरी आ जाए।' } },
      { step: 5, text: { en: 'To serve: Spoon poha into a deep plate, ladle boiling spicy chana tarri generously all over, top with raw onions, coriander, and crispy shev.', mr: 'प्लेटमध्ये पोहे काढून त्यावर उकळती चण्याची तर्री ओता. बारीक कांदा, कोथिंबीर, शेव आणि लिंबू पिळून गरमागरम खा.', hi: 'प्लेट में पोहा निकालें, ऊपर से उबलती चने की तर्री डालें। प्याज, शेव और नींबू डालकर खाएं।' } }
    ],
    accompaniments: [
      { en: 'Extra spicy Tarri in a bowl', mr: 'वाटीत अतिरिक्त झणझणीत तर्री', hi: 'अलग से तीखी तर्री' },
      { en: 'Hot cutting chai', mr: 'गरमागरम कटींग चहा', hi: 'गरम चाय' }
    ],
    substitutions: [
      { en: 'White chickpeas or dried green peas can replace black chana.', mr: 'काळ्या चण्याऐवजी पांढरे चणे किंवा वाटाणे वापरू शकता.', hi: 'काले चने की जगह सफेद चने भी ले सकते हैं।' }
    ],
    allergens: ['Pulses', 'Besan (Shev)'],
    searchAliases: ['tarri poha', 'तर्री पोहा', 'nagpuri poha', 'vidarbha breakfast', 'spicy poha']
  },
  {
    id: 'kolhapuri-tambda-rassa',
    name: {
      en: 'Kolhapuri Tambda Rassa (Spicy Red Mutton/Chicken Broth)',
      mr: 'कोल्हापुरी तांबडा रस्सा',
      hi: 'कोल्हापुरी तांबड़ा रस्सा'
    },
    transliteration: 'Tambda Rassa',
    description: {
      en: 'Kolhapur’s legendary fiery red meat broth simmered with Kolhapuri kanda-lasun masala, whole spices, and rich mutton stock. Eaten with Sukka Mutton and Bhakri.',
      mr: 'कोल्हापूरची शान: कांदा-लसूण मसाला आणि खमंग मटण स्टॉकपासून बनवलेला लालभडक, तिखट व चवदार तांबडा रस्सा.',
      hi: 'कोल्हापुर की मशहूर तीखी लाल मटन तरी (सूप), कांदा-लहसुन मसाले और ताजे खड़े मसालों से बनी।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pune_kolhapur',
    dietary: 'non-veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 20,
    cookTime: 40,
    difficulty: 'medium',
    servings: 4,
    cost: 380,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mutton', name: { en: 'Mutton pieces on bone (for rich broth)', mr: 'हाडासह मटण (स्टॉकसाठी)', hi: 'हड्डी वाला मटन' }, amount: 500, unit: 'g', category: 'protein' },
      { id: 'onion', name: { en: 'Onions roasted', mr: 'भाजलेला कांदा', hi: 'भुना प्याज' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Kolhapuri Kanda-Lasun Masala', mr: 'कोल्हापुरी कांदा-लसूण मसाला', hi: 'कोल्हापुरी मसाला' }, amount: 2.5, unit: 'tbsp', category: 'spices' },
      { id: 'dry_coconut', name: { en: 'Dry coconut roasted', mr: 'सुके खोबरे', hi: 'सूखा नारियल' }, amount: 40, unit: 'g', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण', hi: 'लहसुन' }, amount: 12, unit: 'cloves', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil mutton in cooker with turmeric, salt, chopped onion, and 4 cups water for 5 whistles to get flavorful meat stock.', mr: 'मटण हळद, मीठ, कांदा आणि ४ कप पाण्यात ५ शिट्ट्या काढून शिजवा आणि सूप वेगळे करा.', hi: 'मटन को हल्दी, नमक और पानी में उबालकर मटन का सूप अलग निकालें।' } },
      { step: 2, text: { en: 'Roast onion and dry coconut; grind with ginger, garlic, and fresh coriander into fine red vatan.', mr: 'कांदा, खोबरे, आले, लसूण आणि कोथिंबीर बारीक वाटून वाटण तयार करा.', hi: 'प्याज, नारियल, अदरक और लहसुन को पीसकर बारीक पेस्ट बनाएं।' } },
      { step: 3, text: { en: 'Heat 3 tbsp oil. Sauté the ground paste and Kolhapuri kanda-lasun masala until bright red oil floats.', mr: 'तेलात वाटण आणि कोल्हापुरी कांदा-लसूण मसाला लाल तेल सुटेपर्यंत परता.', hi: 'तेल में पेस्ट और कोल्हापुरी मसाला लाल तरी आने तक भूनें।' } },
      { step: 4, text: { en: 'Pour the hot mutton stock, adjust salt, and simmer for 15 minutes. Serve piping hot in bowls with Bhakri.', mr: 'गरम मटण स्टॉक घाला आणि १५ मिनिटे उकळा. गरमागरम तांबडा रस्सा वाटीत भाकरीसोबत प्या.', hi: 'मटन सूप मिलाकर १५ मिनट उबालें। गरमागरम तांबड़ा रस्सा भाकरी के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Jowar or Bajra Bhakri', mr: 'ज्वारी/बाजरीची भाकरी', hi: 'ज्वार भाकरी' },
      { en: 'Kolhapuri Pandhra Rassa', mr: 'पांढरा रस्सा', hi: 'सफेद रस्सा' }
    ],
    substitutions: [
      { en: 'Chicken can be used instead of mutton.', mr: 'मटणाऐवजी चिकनचा तांबडा रस्सा बनवू शकता.', hi: 'मटन की जगह चिकन भी ले सकते हैं।' }
    ],
    allergens: ['Meat / Mutton'],
    searchAliases: ['tambda rassa', 'तांबडा रस्सा', 'kolhapuri rassa', 'spicy mutton broth', 'kolhapuri mutton']
  }
];
