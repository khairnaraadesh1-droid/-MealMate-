export const MAHARASHTRIAN_EVERYDAY_RECIPES = [
  {
    id: 'kanda-poha',
    name: {
      en: 'Kanda Poha',
      mr: 'कांदा पोहे',
      hi: 'कांदा पोहा'
    },
    transliteration: 'Kanda Poha',
    description: {
      en: 'Maharashtra’s quintessential everyday breakfast: soft flattened rice tossed with browned onions, crunchy peanuts, mustard seeds, green chillies, and fresh coconut.',
      mr: 'महाराष्ट्राचा लाडका रोजचा नाश्ता: कांदा, शेंगदाणे, हिरवी मिरची, मोहरीची खमंग फोडणी, कोथिंबीर आणि खोबऱ्याने सजवलेले मऊसुत पोहे.',
      hi: 'महाराष्ट्र का प्रसिद्ध नाश्ता: भुना प्याज, कुरकुरी मूंगफली, हरी मिर्च और राई के तड़के वाले नरम-मुलायम पोहे।'
    },
    category: 'breakfast',
    mealTypes: ['breakfast', 'snack'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 10,
    difficulty: 'easy',
    servings: 4,
    cost: 50,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'poha', name: { en: 'Thick Poha', mr: 'जाड पोहे', hi: 'मोटा पोहा' }, amount: 3, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onions (finely chopped)', mr: 'कांदे बारीक चिरलेले', hi: 'बारीक कटा प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 3, unit: 'pieces', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Peanuts', mr: 'शेंगदाणे', hi: 'मूंगफली' }, amount: 3, unit: 'tbsp', category: 'spices' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds', mr: 'मोहरी', hi: 'राई' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'curry_leaves', name: { en: 'Curry leaves', mr: 'कढीपत्ता', hi: 'कढ़ी पत्ता' }, amount: 8, unit: 'leaves', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Wash poha in a strainer, drain completely, sprinkle a little salt and sugar, and rest for 5 minutes.', mr: 'पोहे चाळणीत धुवून पाणी निथळून ठेवा. थोडे मीठ आणि साखर लावून ५ मिनिटे ठेवा.', hi: 'पोहा धोकर पानी निकाल दें। थोड़ा नमक और चीनी मिलाकर ५ मिनट रखें।' } },
      { step: 2, text: { en: 'Heat 2 tbsp oil in a kadai. Fry peanuts till golden-brown, then add mustard seeds, cumin, hing, green chillies, and curry leaves.', mr: 'तेलात शेंगदाणे तळून घ्या. नंतर मोहरी, जिरे, हिंग, मिरची आणि कढीपत्ता घालून फोडणी करा.', hi: 'तेल में मूंगफली भूनें। फिर राई, जीरा, हींग, मिर्च और कढ़ी पत्ता डालें।' } },
      { step: 3, text: { en: 'Add chopped onions and sauté until soft and pink. Add turmeric powder.', mr: 'कांदा घालून मऊ व गुलाबी होईपर्यंत परता. हळद घाला.', hi: 'प्याज डालकर हल्का भूनें। हल्दी मिलाएं।' } },
      { step: 4, text: { en: 'Gently mix in the soaked poha. Cover and steam on low flame for 3 minutes.', mr: 'भिजवलेले पोहे घालून हलक्या हाताने मिसळा आणि झाकण ठेवून ३ मिनिटे वाफ काढा.', hi: 'पोहा डालकर हल्के हाथ से मिलाएं और ३ मिनट ढककर भाप दें।' } },
      { step: 5, text: { en: 'Garnish with fresh grated coconut, coriander, and serve hot with lemon wedges.', mr: 'खोबरे, कोथिंबीर आणि लिंबाच्या फोडीसोबत गरमागरम सर्व्ह करा.', hi: 'कसा नारियल, धनिया और नींबू के साथ गरमागरम परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot cutting chai', mr: 'गरमागरम कटींग चहा', hi: 'गरम चाय' },
      { en: 'Lemon slice', mr: 'लिंबू', hi: 'नींबू' }
    ],
    substitutions: [
      { en: 'Add boiled potato cubes to make Batata Poha.', mr: 'उकडलेला बटाटा घालून बटाटा पोहे करू शकता.', hi: 'उबला आलू डालकर आलू पोहा बना सकते हैं।' }
    ],
    allergens: ['Peanuts'],
    searchAliases: ['kanda poha', 'कांदा पोहे', 'poha', 'batata poha', 'pohe', 'maharashtrian breakfast']
  },
  {
    id: 'thalipeeth',
    name: {
      en: 'Authentic Maharashtrian Thalipeeth',
      mr: 'खमंग भाजणीचे थालीपीठ',
      hi: 'पारंपरिक थालीपीठ'
    },
    transliteration: 'Thalipeeth',
    description: {
      en: 'Nutritious multigrain flatbread made from roasted grain and lentil flour (Bhajani), studded with onions, coriander, green chillies, and cooked on tawa with white butter.',
      mr: 'खमंग भाजणीचे पीठ, बारीक चिरलेला कांदा, कोथिंबीर, तीळ आणि हिरवी मिरची घालून तव्यावर भाजलेले चवदार थालीपीठ आणि पांढरे लोणी.',
      hi: 'भुने अनाजों और दालों के आटे (भाजणी), प्याज, हरी मिर्च और तिल से बना पौष्टिक थालीपीठ, सफेद मक्खन के साथ।'
    },
    category: 'breakfast',
    mealTypes: ['breakfast', 'dinner', 'snack'],
    cuisine: 'traditional',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 15,
    difficulty: 'medium',
    servings: 3,
    cost: 70,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Multigrain Thalipeeth Bhajani (or mix of Jowar, Besan, Rice, Wheat)', mr: 'थालीपीठाची भाजणी (किंवा ज्वारी, बेसन, तांदूळ, गव्हाचे मिश्रण)', hi: 'भाजणी आटा (या ज्वार, बेसन, चावल, गेहूं का मिश्रण)' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा बारीक चिरलेला', hi: 'बारीक कटा प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chilli paste', mr: 'हिरवी मिरची पेस्ट', hi: 'हरी मिर्च पेस्ट' }, amount: 1, unit: 'tbsp', category: 'vegetables' },
      { id: 'sesame_seeds', name: { en: 'Sesame seeds (Til)', mr: 'पांढरे तीळ', hi: 'सफेद तिल' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander (chopped)', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 0.5, unit: 'cup', category: 'vegetables' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'In a bowl, mix bhajani flour with chopped onion, green chillies, coriander, sesame seeds, turmeric, and salt. Knead with water into a soft dough.', mr: 'भाजणीच्या पिठात कांदा, मिरची, कोथिंबीर, तीळ, हळद, मीठ घालून मऊ पीठ मळून घ्या.', hi: 'भाजणी के आटे में प्याज, मिर्च, धनिया, तिल, हल्दी और नमक मिलाकर नरम आटा गूंध लें।' } },
      { step: 2, text: { en: 'Place a damp plastic sheet or butter paper. Pat a ball of dough evenly into a round disc, making 3-4 holes in the centre.', mr: 'ओल्या रुमालावर किंवा प्लास्टिकवर गोळा हाताने गोलाकार थापा आणि मधोमध ३-४ छोटी छिद्रे करा.', hi: 'गीले कपड़े पर लोई रखकर हाथ से गोल फैलाएं और बीच में ३-४ छोटे छेद बनाएं।' } },
      { step: 3, text: { en: 'Transfer to a hot greased iron tawa. Drizzle oil or ghee around edges and in the holes. Cover and cook on medium flame.', mr: 'गरम तव्यावर अलगद उलटा. कडेने आणि छिद्रात तेल/तूप सोडून झाकण ठेवून खरपूस भाजा.', hi: 'गरम तवे पर डालें, किनारों और छेदों में तेल या घी डालें। ढककर कुरकुरा सेकें।' } },
      { step: 4, text: { en: 'Flip and roast the other side until crispy and golden. Serve smoking hot with fresh white butter (loni) and thecha.', mr: 'उलटा करून दुसरी बाजूही खमंग भाजून घ्या. ताज्या पांढऱ्या लोण्यासोबत आणि ठेच्यासोबत खा.', hi: 'पलटकर दूसरी तरफ भी सुनहरा सेकें। ताजे सफेद मक्खन और ठेचे के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Fresh homemade white butter (Loni)', mr: 'घरचे पांढरे लोणी', hi: 'घर का सफेद मक्खन' },
      { en: 'Khandeshi Thecha', mr: 'खान्देशी ठेचा', hi: 'खान्देशी ठेचा' },
      { en: 'Fresh Curd (Dahi)', mr: 'ताजे दही', hi: 'ताजा दही' }
    ],
    substitutions: [
      { en: 'If Bhajani is not available, mix 1 cup Jowar, 1/2 cup Besan, 1/4 cup Rice flour, and 1/4 cup Wheat flour.', mr: 'भाजणी नसेल तर १ वाटी ज्वारी, १/२ वाटी बेसन, १/४ वाटी तांदूळ आणि गव्हाचे पीठ एकत्र करा.', hi: 'भाजणी न हो तो ज्वार, बेसन, चावल और गेहूं का आटा मिलाकर बना सकते हैं।' }
    ],
    allergens: ['Sesame'],
    searchAliases: ['thalipeeth', 'थालीपीठ', 'bhajani thalipeeth', 'healthy breakfast', 'multigrain roti']
  },
  {
    id: 'varan-bhat',
    name: {
      en: 'Maharashtrian Varan Bhat with Toop & Limbu',
      mr: 'साजूक तूप-लिंबू वरण भात',
      hi: 'वरण भात (दाल चावल)'
    },
    transliteration: 'Varan Bhat',
    description: {
      en: 'The ultimate Maharashtrian comfort meal: soft cooked toor dal tempered with hing and turmeric, served over piping hot steamed Indrayani rice with a generous dollop of pure homemade ghee and fresh lemon.',
      mr: 'प्रत्येक महाराष्ट्रीयन घराची ओळख: मऊ शिजवलेले साधे वरण, गरम वाफाळलेला इंद्रायणी भात, वरून साजूक तुपाची धार आणि लिंबाचा रस.',
      hi: 'महाराष्ट्र का परम तृप्तिकारी भोजन: हल्दी-हींग वाली सादी अरहर दाल, गरमागरम खुशबूदार चावल, ऊपर से शुद्ध देसी घी और नींबू का रस।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 5,
    cookTime: 20,
    difficulty: 'easy',
    servings: 4,
    cost: 70,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'toor_dal', name: { en: 'Toor dal (split pigeon peas)', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'rice', name: { en: 'Indrayani / Kolam Rice', mr: 'इंद्रायणी किंवा कोलम तांदूळ', hi: 'इंद्रायणी या कोलम चावल' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'hing', name: { en: 'Asafoetida (Hing)', mr: 'हिंग', hi: 'हींग' }, amount: 0.25, unit: 'tsp', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Cow Ghee (Sajuk Toop)', mr: 'साजूक तूप', hi: 'शुद्ध देसी घी' }, amount: 3, unit: 'tbsp', category: 'dairy' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Wash toor dal and cook in pressure cooker with turmeric, pinch of hing, and 2.5 cups water for 4 whistles until very soft.', mr: 'तूर डाळीत हळद, हिंग आणि २.५ कप पाणी घालून कुकरमध्ये ४ शिट्ट्या काढून मऊ शिजवा.', hi: 'अरहर दाल में हल्दी, हींग और पानी डालकर कुकर में ४ सीटी लगाकर अच्छे से उबालें।' } },
      { step: 2, text: { en: 'Cook rice in a separate container until soft and fragrant.', mr: 'दुसऱ्या डब्यात तांदूळ धुवून मऊ भात शिजवून घ्या.', hi: 'अलग बर्तन में चावल धोकर खुशबूदार और नरम पकाएं।' } },
      { step: 3, text: { en: 'Whisk the cooked dal with a traditional wooden churner (ravi), add salt, jaggery (optional), and simmer for 5 minutes with chopped coriander.', mr: 'शिजलेली डाळ रवीने घोटा, मीठ व चिमूटभर गूळ घालून ५ मिनिटे उकळा.', hi: 'दाल को मथनी से घोंटें, नमक और थोड़ा गुड़ डालकर ५ मिनट उबालें।' } },
      { step: 4, text: { en: 'Serve hot rice on a plate, pour yellow varan in the center, drizzle fragrant pure cow ghee on top, and squeeze fresh lemon.', mr: 'ताटात गरम भात घेऊन त्यावर वरण ओता, मध्यभागी साजूक तुपाची धार सोडा आणि लिंबू पिळा.', hi: 'थाली में गरम चावल पर दाल परोसें, ऊपर से देसी घी डालें और नींबू निचोड़ें।' } }
    ],
    accompaniments: [
      { en: 'Batata Sukhi Bhaji', mr: 'बटाट्याची पिवळी सुकी भाजी', hi: 'आलू की सूखी सब्जी' },
      { en: 'Kakdi Koshimbir', mr: 'काकडीची खमंग कोशिंबीर', hi: 'खीरे का रायता/कचुम्बर' },
      { en: 'Kurdaya / Papad', mr: 'तळलेली कुरडई / पापड', hi: 'पापड़' }
    ],
    substitutions: [
      { en: 'Moong dal can be used instead of toor dal for easy digestion.', mr: 'पचनासाठी हलके हवे असल्यास मूग डाळ वापरा.', hi: 'पाचन के लिए मूंग दाल का इस्तेमाल कर सकते हैं।' }
    ],
    allergens: ['Ghee / Dairy'],
    searchAliases: ['varan bhat', 'वरण भात', 'dal chawal', 'varan bhat toop limbu', 'maharashtrian comfort food']
  },
  {
    id: 'maharashtrian-amti-bhat',
    name: {
      en: 'Maharashtrian Goda Masala Amti',
      mr: 'पारंपारिक गोडा मसाल्याची आमटी',
      hi: 'महाराष्ट्रीयन गोडा मसाला आमटी'
    },
    transliteration: 'Amti Bhat',
    description: {
      en: 'A tangy, sweet, and spicy Maharashtrian lentil curry infused with aromatic goda masala, kokum / tamarind, jaggery, curry leaves, and mustard tempering.',
      mr: 'गोड, आंबट आणि तिखट चवीची अस्सल महाराष्ट्रीयन आमटी; गोडा मसाला, चिंच-गूळ आणि खोबऱ्याच्या खमंग फोडणीत उकळलेली.',
      hi: 'खट्टी-मीठी और तीखी पारंपरिक आमटी; गोडा मसाला, इमली, गुड़ और नारियल के तड़के में पकाई गई।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 20,
    difficulty: 'easy',
    servings: 4,
    cost: 80,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'toor_dal', name: { en: 'Cooked Toor Dal', mr: 'शिजलेली तूर डाळ', hi: 'उबली अरहर दाल' }, amount: 1.5, unit: 'cups', category: 'pulses' },
      { id: 'kala_masala', name: { en: 'Maharashtrian Goda Masala', mr: 'गोडा मसाला / काळा मसाला', hi: 'गोडा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'tamarind', name: { en: 'Tamarind pulp or Kokum', mr: 'चिंचेचा कोळ किंवा कोकम', hi: 'इमली का पल्प या कोकम' }, amount: 1, unit: 'tbsp', category: 'spices' },
      { id: 'jaggery', name: { en: 'Jaggery (Gul)', mr: 'गूळ', hi: 'गुड़' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'fresh_coconut', name: { en: 'Fresh grated coconut', mr: 'ओले खोबरे', hi: 'ताजा कसा नारियल' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'curry_leaves', name: { en: 'Curry leaves', mr: 'कढीपत्ता', hi: 'कढ़ी पत्ता' }, amount: 8, unit: 'leaves', category: 'vegetables' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds', mr: 'मोहरी', hi: 'राई' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'hing', name: { en: 'Hing', mr: 'हिंग', hi: 'हींग' }, amount: 0.25, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'In a pot, heat 2 tbsp oil or ghee. Add mustard seeds, cumin, hing, green chillies, and curry leaves.', mr: 'टोपात तेल किंवा तूप तापवा. मोहरी, जिरे, हिंग, मिरची आणि कढीपत्ता घालून खमंग फोडणी करा.', hi: 'पतीले में घी/तेल गरम करें। राई, जीरा, हींग, मिर्च और कढ़ी पत्ता डालें।' } },
      { step: 2, text: { en: 'Add cooked dal, 1.5 cups water, turmeric, red chilli powder, and goda masala.', mr: 'यात शिजवलेली डाळ, दीड कप पाणी, हळद, तिखट आणि गोडा मसाला घाला.', hi: 'उबली दाल, डेढ़ कप पानी, हल्दी, मिर्च और गोडा मसाला मिलाएं।' } },
      { step: 3, text: { en: 'Add tamarind pulp, jaggery, and salt to balance the sweet and sour flavors.', mr: 'चिंचेचा कोळ, गूळ आणि मीठ घालून आंबट-गोड चव समतोल करा.', hi: 'इमली का पल्प, गुड़ और नमक डालकर खट्टा-मीठा स्वाद संतुलित करें।' } },
      { step: 4, text: { en: 'Simmer on low-medium heat for 8-10 minutes. Finish with fresh grated coconut and chopped coriander. Serve over steaming hot rice.', mr: '८-१० मिनिटे उकळू द्या. ओले खोबरे व कोथिंबीर घालून गरमागरम भातावर वाढा.', hi: '८-१० मिनट धीमी आंच पर उबालें। ताजा कसा नारियल और धनिया डालकर चावल के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Steamed Rice with Ghee', mr: 'वाफाळलेला भात आणि साजूक तूप', hi: 'गरम चावल और घी' },
      { en: 'Crispy Aluvadi / Kothimbir Vadi', mr: 'कुरकुरीत अळूवडी / कोथिंबीर वडी', hi: 'कुरकुरी कोथिंबीर वड़ी' }
    ],
    substitutions: [
      { en: 'Kokum can replace tamarind for a Konkan style tang.', mr: 'चिंचेऐवजी कोकम वापरून कोकणी चव आणू शकता.', hi: 'इमली की जगह कोकम का उपयोग कर सकते हैं।' }
    ],
    allergens: ['Pulses'],
    searchAliases: ['amti bhat', 'आमटी भात', 'goda masala amti', 'maharashtrian amti', 'dal bhat']
  },
  {
    id: 'batata-bhaji-puri',
    name: {
      en: 'Maharashtrian Batata Bhaji (Pivli Batata Bhaji)',
      mr: 'महाराष्ट्रीयन पिवळी बटाटा भाजी',
      hi: 'महाराष्ट्रीयन सूखी आलू सब्जी'
    },
    transliteration: 'Batata Bhaji',
    description: {
      en: 'Tender boiled potatoes tempered with mustard seeds, green chillies, ginger, turmeric, and fresh curry leaves. Perfect with hot Puris, Chapati, or Varan Bhat.',
      mr: 'उकडलेले मऊ बटाटे, हिरवी मिरची, आले, कढीपत्ता आणि मोहरीची खमंग फोडणी देऊन केलेली पिवळीधमक बटाटा भाजी.',
      hi: 'उबले आलू, हरी मिर्च, अदरक, कढ़ी पत्ता और राई के तड़के से बनी सुनहरी सूखी आलू की सब्जी।'
    },
    category: 'lunch',
    mealTypes: ['breakfast', 'lunch', 'dinner'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 10,
    cookTime: 12,
    difficulty: 'easy',
    servings: 4,
    cost: 50,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'potato', name: { en: 'Boiled potatoes (peeled and cubed)', mr: 'उकडलेले बटाटे (तुकडे केलेले)', hi: 'उबले आलू (कटे हुए)' }, amount: 4, unit: 'medium', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onion (sliced)', mr: 'कांदा उभा चिरलेला', hi: 'लम्बा कटा प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies (slit)', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 3, unit: 'pieces', category: 'vegetables' },
      { id: 'ginger', name: { en: 'Grated ginger', mr: 'किसलेले आले', hi: 'कद्दूकस अदरक' }, amount: 1, unit: 'tsp', category: 'vegetables' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds', mr: 'मोहरी', hi: 'राई' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat 2 tbsp oil in a pan. Add mustard seeds, cumin, hing, green chillies, ginger, and curry leaves.', mr: 'कढईत तेल तापवून मोहरी, जिरे, हिंग, मिरची, आले आणि कढीपत्ता घालून फोडणी करा.', hi: 'तेल गरम करें। राई, जीरा, हींग, मिर्च, अदरक और कढ़ी पत्ता डालकर तड़काएं।' } },
      { step: 2, text: { en: 'Add sliced onions and sauté until translucent. Add turmeric and salt.', mr: 'कांदा घालून मऊ होईपर्यंत परता. हळद आणि मीठ घाला.', hi: 'प्याज डालकर हल्का भूनें। हल्दी और नमक मिलाएं।' } },
      { step: 3, text: { en: 'Add cubed boiled potatoes and gently toss so the yellow masala coats every potato cube.', mr: 'उकडलेले बटाट्याचे तुकडे घाला आणि मसाला बटाट्याला व्यवस्थित लागेपर्यंत हलक्या हाताने परता.', hi: 'उबले आलू के टुकड़े डालें और हल्के हाथ से मिलाएं ताकि मसाला अच्छे से लिपट जाए।' } },
      { step: 4, text: { en: 'Cover and steam for 3-4 minutes on low flame. Garnish with lemon juice and plenty of chopped coriander.', mr: 'झाकण ठेवून मंद आचेवर ३-४ मिनिटे वाफ काढा. लिंबाचा रस आणि भरपूर कोथिंबीर घालून पुरी किंवा पोळीसोबत वाढा.', hi: 'ढककर ३-४ मिनट धीमी आंच पर पकाएं। ऊपर से नींबू का रस और हरा धनिया छिड़कें।' } }
    ],
    accompaniments: [
      { en: 'Hot fluffy Puris or Poli', mr: 'गरमागरम टम्म पुऱ्या किंवा चपाती', hi: 'फूली हुई पूरी या रोटी' },
      { en: 'Varan Bhat', mr: 'वरण भात', hi: 'दाल चावल' }
    ],
    substitutions: [
      { en: 'Omit onion for a Jain/Satvik preparation.', mr: 'कांदा वगळून सात्विक भाजी बनवू शकता.', hi: 'प्याज हटाकर सात्विक आलू बना सकते हैं।' }
    ],
    allergens: [],
    searchAliases: ['batata bhaji', 'बटाटा भाजी', 'aloo sabzi', 'sukhi aloo', 'puri bhaji']
  },
  {
    id: 'misal-pav',
    name: {
      en: 'Authentic Maharashtrian Misal Pav',
      mr: 'झणझणीत अस्सल मिसळ पाव',
      hi: 'तीखी मिसल पाव'
    },
    transliteration: 'Misal Pav',
    description: {
      en: 'Maharashtra’s world-famous fiery street delicacy: spicy sprouted moth bean usal drowned in red-hot kat (rassa), topped with crunchy farsan, raw onions, and soft buttery pav.',
      mr: 'महाराष्ट्राची जगप्रसिद्ध झणझणीत मिसळ: मोड आलेल्या मटकीची उसळ, वरून लालभडक तर्रीदार कट/रस्सा, कुरकुरीत फरसाण, कांदा, लिंबू आणि लादी पाव.',
      hi: 'महाराष्ट्र का विश्वप्रसिद्ध तीखा व्यंजन: अंकुरित मटकी की उसल, ऊपर से लाल तीखा कट (रस्सा), कुरकुरा फरसाण, कच्चा प्याज और नरम पाव।'
    },
    category: 'breakfast',
    mealTypes: ['breakfast', 'snack', 'lunch'],
    cuisine: 'pune_kolhapur',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 20,
    cookTime: 25,
    difficulty: 'medium',
    servings: 4,
    cost: 120,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'matki', name: { en: 'Sprouted Matki (moth beans)', mr: 'मोड आलेली मटकी', hi: 'अंकुरित मटकी' }, amount: 2, unit: 'cups', category: 'pulses' },
      { id: 'onion', name: { en: 'Onions (roasted and finely chopped)', mr: 'कांदे (भाजलेले व बारीक चिरलेले)', hi: 'प्याज' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomatoes', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन' }, amount: 10, unit: 'cloves', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Kolhapuri / Goda Masala', mr: 'कोल्हापुरी / काळा मसाला', hi: 'काळा / कोल्हापुरी मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'bread', name: { en: 'Fresh Ladi Pav', mr: 'लादी पाव', hi: 'लादी पाव' }, amount: 8, unit: 'pieces', category: 'grains' },
      { id: 'shev', name: { en: 'Misal Farsan / mixed crispy snack', mr: 'मिसळ फरसाण', hi: 'फरसाण' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 4, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil sprouted matki with turmeric, salt, and 1 cup water until just tender (do not overcook). Keep water as stock.', mr: 'मोड आलेली मटकी हळद, मीठ आणि १ कप पाण्यात मऊ होईपर्यंत शिजवून घ्या.', hi: 'अंकुरित मटकी को हल्दी, नमक और पानी में हल्का उबाल लें।' } },
      { step: 2, text: { en: 'Roast onion, dry coconut, ginger, and garlic; grind into a smooth paste. Sauté in 4 tbsp oil until oil separates (tarri).', mr: 'कांदा, सुके खोबरे, आले आणि लसूण भाजून वाटून घ्या. कढईत भरपूर तेलात तेल सुटेपर्यंत परता.', hi: 'प्याज, नारियल, अदरक और लहसुन को भूनकर पेस्ट बनाएं। तेल में तरी आने तक भूनें।' } },
      { step: 3, text: { en: 'Add kala masala, red chilli powder, tomato puree, and cook till fragrant.', mr: 'काळा मसाला, तिखट आणि टोमॅटो घालून छान परता.', hi: 'काळा मसाला, लाल मिर्च और टमाटर डालकर भूनें।' } },
      { step: 4, text: { en: 'Add 3 cups hot water and salt. Simmer on low heat for 12 minutes until a fiery red oily layer (kat) floats on top.', mr: '३ कप गरम पाणी घालून मंद आचेवर १२ मिनिटे उकळा जेणेकरून वरती छान कट/तर्री येईल.', hi: '३ कप गर्म पानी डालकर १२ मिनट धीमी आंच पर उबालें ताकि ऊपर लाल कट (तरी) आ जाए।' } },
      { step: 5, text: { en: 'To assemble: In a bowl, add 2 spoons boiled matki usal, top with crispy farsan, pour ladlefuls of piping hot fiery kat, add chopped onions, coriander, and serve with pav and lemon slice.', mr: 'बाउलमध्ये मटकी उसळ घाला, त्यावर फरसाण पसरा, वरून झणझणीत कट ओता, कांदा, कोथिंबीर घालून लादी पावासोबत वाढा.', hi: 'कटोरे में उबली मटकी रखें, ऊपर से फरसाण डालें, गरम तीखा कट डालें, प्याज और धनिए से सजाकर पाव के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Fresh Ladi Pav with butter', mr: 'मऊ लादी पाव', hi: 'नरम लादी पाव' },
      { en: 'Extra spicy Kat (Rassa) in a bowl', mr: 'वाटीत जास्तीचा झणझणीत कट', hi: 'एक्स्ट्रा तीखा कट' },
      { en: 'Chopped onions and lemon wedges', mr: 'बारीक कांदा व लिंबू', hi: 'कटा प्याज और नींबू' }
    ],
    substitutions: [
      { en: 'Mix sprouts (peas, moong, chana) can be combined with matki.', mr: 'मटकीसोबत मूग, वाटाणेही एकत्र वापरता येतात.', hi: 'मटकी के साथ चना या मूंग भी मिला सकते हैं।' }
    ],
    allergens: ['Gluten (Pav)', 'Gram flour (Farsan)'],
    searchAliases: ['misal pav', 'मिसळ पाव', 'kolhapuri misal', 'puneri misal', 'spicy misal', 'kat']
  },
  {
    id: 'sabudana-khichdi',
    name: {
      en: 'Authentic Sabudana Khichdi (Upvas Special)',
      mr: 'उपवासाची मोकळी साबुदाणा खिचडी',
      hi: 'साबूदाना खिचड़ी (फलाहारी)'
    },
    transliteration: 'Sabudana Khichdi',
    description: {
      en: 'Non-sticky pearl sago tossed with roasted crushed peanuts, green chillies, cumin seeds, boiled potatoes, and finished with fresh lemon and coriander.',
      mr: 'टपोरा आणि मोकळा भिजलेला साबुदाणा, भाजलेले शेंगदाणे कूट, जिरे, मिरची आणि बटाट्याची खमंग फोडणी देऊन केलेली उपवासाची खिचडी.',
      hi: 'मोतियों जैसे खिले-खिले साबूदाना, भुनी मूंगफली का दरदरा कूट, जीरा, हरी मिर्च और आलू के साथ बनी फलाहारी खिचड़ी।'
    },
    category: 'breakfast',
    mealTypes: ['breakfast', 'dinner', 'snack'],
    cuisine: 'festive_seasonal',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 10,
    cookTime: 10,
    difficulty: 'easy',
    servings: 3,
    cost: 65,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'sabudana', name: { en: 'Sago / Tapioca pearls (soaked 6 hrs)', mr: 'भिजवलेला साबुदाणा', hi: 'भीगा हुआ साबूदाना' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'peanuts', name: { en: 'Roasted peanuts (coarsely powdered)', mr: 'भाजलेले शेंगदाणे कूट', hi: 'भुनी मूंगफली का कूट' }, amount: 0.75, unit: 'cup', category: 'spices' },
      { id: 'potato', name: { en: 'Boiled potato cubes', mr: 'उकडलेला बटाटा तुकडे', hi: 'उबले आलू के टुकड़े' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies (chopped)', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 3, unit: 'pieces', category: 'vegetables' },
      { id: 'cumin_seeds', name: { en: 'Cumin seeds (Jeera)', mr: 'जिरे', hi: 'जीरा' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Ghee or Groundnut oil', mr: 'साजूक तूप किंवा शेंगदाणा तेल', hi: 'शुद्ध घी या मूंगफली का तेल' }, amount: 2, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Rinse sabudana, soak in just enough water level for 5-6 hours until each pearl turns soft when pressed between fingers.', mr: 'साबुदाणा धुवून पाण्याच्या पातळीत ५-६ तास भिजवा, दाणा बोटाने दाबल्यावर मऊ झाला पाहिजे.', hi: 'साबूदाना धोकर बराबर पानी में ५-६ घंटे भिगोएं जब तक कि दाना दबने न लगे।' } },
      { step: 2, text: { en: 'Gently mix soaked sabudana with roasted peanut powder, salt, and 1 tsp sugar in a mixing bowl.', mr: 'भिजवलेल्या साबुदाण्यात शेंगदाणे कूट, मीठ आणि थोडी साखर मिसळून घ्या.', hi: 'भीगे साबूदाने में मूंगफली का कूट, नमक और थोड़ी चीनी मिला लें।' } },
      { step: 3, text: { en: 'Heat ghee/oil in a pan. Add cumin seeds, chopped green chillies, and boiled potato cubes; sauté for 2 minutes.', mr: 'कढईत तूप किंवा तेल गरम करून जिरे, हिरवी मिरची आणि बटाट्याचे तुकडे २ मिनिटे परता.', hi: 'कड़ाही में घी गरम कर जीरा, हरी मिर्च और आलू के टुकड़े भूनें।' } },
      { step: 4, text: { en: 'Add the sabudana-peanut mixture. Toss continuously on medium-low flame until pearls turn translucent and soft. Cover and steam for 2 minutes.', mr: 'साबुदाणा घालून मंद आचेवर दाणे पारदर्शक होईपर्यंत सतत हलवा. २ मिनिटे झाकून वाफ काढा.', hi: 'साबूदाना मिश्रण डालें और मध्यम आंच पर दाने पारदर्शी होने तक चलाएं। २ मिनट ढकें।' } },
      { step: 5, text: { en: 'Squeeze fresh lemon juice, garnish with coriander (if consuming during upvas), and serve hot with chilled sweet curd.', mr: 'लिंबू पिळून गरमागरम खिचडी थंड दह्यासोबत सर्व्ह करा.', hi: 'नींबू का रस निचोड़कर ठंडे दही के साथ गरमागरम परोसें।' } }
    ],
    accompaniments: [
      { en: 'Chilled Sweet Curd (Dahi)', mr: 'थंडगार गोड दही', hi: 'ठंडा मीठा दही' },
      { en: 'Upvas Shengdana Chutney', mr: 'उपवासाची शेंगदाणा आमटी/चटणी', hi: 'मूंगफली की चटनी' }
    ],
    substitutions: [
      { en: 'Add grated raw cucumber for a refreshing twist.', mr: 'किसलेली काकडी घालून काकडी-साबुदाणा खिचडीही करू शकता.', hi: 'कद्दूकस किया खीरा भी मिला सकते हैं।' }
    ],
    allergens: ['Peanuts'],
    searchAliases: ['sabudana khichdi', 'साबुदाणा खिचडी', 'upvas khichdi', 'sago khichdi', 'fasting recipe', 'falahari']
  },
  {
    id: 'kothimbir-vadi',
    name: {
      en: 'Crispy Maharashtrian Kothimbir Vadi',
      mr: 'कुरकुरीत कोथिंबीर वडी',
      hi: 'कुरकुरी कोथिंबीर वड़ी'
    },
    transliteration: 'Kothimbir Vadi',
    description: {
      en: 'Crispy steamed and shallow-fried coriander cakes made from fresh coriander leaves, gram flour, sesame seeds, and aromatic spices.',
      mr: 'ताजी कोथिंबीर, बेसन, तीळ आणि मसाल्यांचे मिश्रण वाफवून तव्यावर कुरकुरीत शॅलो फ्राय केलेल्या खमंग वड्या.',
      hi: 'ताजे हरे धनिए, बेसन, तिल और मसालों से भाप में पकाकर कुरकुरी तली हुई वड़ी।'
    },
    category: 'snack',
    mealTypes: ['snack', 'breakfast', 'lunch'],
    cuisine: 'traditional',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 20,
    difficulty: 'medium',
    servings: 4,
    cost: 60,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'coriander', name: { en: 'Fresh Coriander (washed and finely chopped)', mr: 'धुवून बारीक चिरलेली कोथिंबीर', hi: 'बारीक कटा ताजा हरा धनिया' }, amount: 3, unit: 'cups', category: 'vegetables' },
      { id: 'besan', name: { en: 'Gram flour (Besan)', mr: 'बेसन', hi: 'बेसन' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'rice', name: { en: 'Rice flour (for crispiness)', mr: 'तांदळाचे पीठ (कुरकुरीतपणासाठी)', hi: 'चावल का आटा' }, amount: 2, unit: 'tbsp', category: 'grains' },
      { id: 'sesame_seeds', name: { en: 'White sesame seeds (Til)', mr: 'पांढरे तीळ', hi: 'सफेद तिल' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'green_chillies', name: { en: 'Green chilli-ginger-garlic paste', mr: 'हिरवी मिरची-आले-लसूण वाटण', hi: 'हरी मिर्च-अदरक-लहसुन पेस्ट' }, amount: 1.5, unit: 'tbsp', category: 'vegetables' },
      { id: 'turmeric', name: { en: 'Turmeric & red chilli powder', mr: 'हळद व लाल तिखट', hi: 'हल्दी और लाल मिर्च' }, amount: 1, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'In a bowl, combine chopped coriander, besan, rice flour, sesame seeds, ginger-garlic-chilli paste, turmeric, chilli powder, salt, and 1 tbsp hot oil.', mr: 'एका भांड्यात कोथिंबीर, बेसन, तांदळाचे पीठ, तीळ, आले-लसूण-मिरची वाटण, हळद, तिखट, मीठ आणि १ चमचा गरम तेल मिसळा.', hi: 'एक बर्तन में धनिया, बेसन, चावल का आटा, तिल, अदरक-लहसुन-मिर्च पेस्ट, हल्दी, मिर्च, नमक और गरम तेल मिलाएं।' } },
      { step: 2, text: { en: 'Knead gently into a soft dough without adding excess water (coriander releases moisture). Shape into cylindrical rolls.', mr: 'जास्त पाणी न घालता मऊ गोळा मळा आणि लांबट आकाराचे रोल बनवा.', hi: 'बिना ज्यादा पानी मिलाए रोल तैयार करें।' } },
      { step: 3, text: { en: 'Steam the rolls in a greased steamer for 15-18 minutes until a toothpick inserted comes out clean. Cool completely.', mr: 'चाळणीला तेल लावून १५-१८ मिनिटे वाफवून घ्या. पूर्ण थंड होऊ द्या.', hi: 'स्टीमर में १५-१८ मिनट भाप में पकाएं और पूरी तरह ठंडा करें।' } },
      { step: 4, text: { en: 'Cut into 1/2-inch slices. Shallow fry in oil on medium flame until golden brown and super crispy on both sides.', mr: 'वड्यांच्या चकत्या कापा आणि तव्यावर मध्यम आचेवर दोन्ही बाजूंनी कुरकुरीत तळून घ्या.', hi: 'आधा इंच के टुकड़े काटें और तवे पर दोनों तरफ से कुरकुरा होने तक सेक लें।' } }
    ],
    accompaniments: [
      { en: 'Hot Masala Chai', mr: 'गरमागरम मसाला चहा', hi: 'गरमागरम मसाला चाय' },
      { en: 'Green Mint Chutney or Ketchup', mr: 'हिरवी चटणी किंवा सॉस', hi: 'हरी चटनी' }
    ],
    substitutions: [
      { en: 'Can be air-fried or baked for a low-oil version.', mr: 'कमी तेलासाठी एअर फ्राय किंवा बेक करू शकता.', hi: 'एयर फ्रायर में भी बना सकते हैं।' }
    ],
    allergens: ['Besan', 'Sesame'],
    searchAliases: ['kothimbir vadi', 'कोथिंबीर वडी', 'coriander cutlet', 'maharashtrian snacks', 'crispy vadi']
  },
  {
    id: 'moong-dal-khichdi',
    name: {
      en: 'Comforting Moong Dal Khichdi with Ghee',
      mr: 'सात्विक मूग डाळ खिचडी आणि साजूक तूप',
      hi: 'मूंग दाल खिचड़ी और देसी घी'
    },
    transliteration: 'Moong Dal Khichdi',
    description: {
      en: 'Light, wholesome one-pot meal of rice and yellow moong dal cooked with cumin, hing, turmeric, and black pepper, drizzled with pure cow ghee. Easy to digest and comforting.',
      mr: 'पचनास हलकी, सात्विक मूग डाळ आणि मऊ तांदळाची खिचडी; जिरे, हिंग, मिरपूड आणि साजूक तुपाची खमंग फोडणी.',
      hi: 'पाचन के लिए हल्की और पौष्टिक मूंग दाल-चावल की खिचड़ी; जीरा, हींग, काली मिर्च और शुद्ध घी के तड़के वाली।'
    },
    category: 'dinner',
    mealTypes: ['dinner', 'lunch'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 5,
    cookTime: 18,
    difficulty: 'easy',
    servings: 3,
    cost: 60,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Indrayani / Small grain rice', mr: 'इंद्रायणी किंवा तुकडा तांदूळ', hi: 'इंद्रायणी या टुकड़ा चावल' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'moong_dal', name: { en: 'Yellow Moong Dal', mr: 'पिवळी मूग डाळ', hi: 'पीली मूंग दाल' }, amount: 0.75, unit: 'cup', category: 'pulses' },
      { id: 'cumin_seeds', name: { en: 'Cumin seeds', mr: 'जिरे', hi: 'जीरा' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'hing', name: { en: 'Asafoetida', mr: 'हिंग', hi: 'हींग' }, amount: 0.25, unit: 'tsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Cow Ghee', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 2, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Wash rice and moong dal together; soak for 15 minutes and drain.', mr: 'तांदूळ आणि मूग डाळ एकत्र धुवून १५ मिनिटे भिजवा.', hi: 'चावल और मूंग दाल को धोकर १५ मिनट भिगोएं।' } },
      { step: 2, text: { en: 'In a pressure cooker, heat 2 tbsp ghee. Add cumin seeds, hing, whole black peppercorns, and turmeric.', mr: 'कुकरमध्ये तूप गरम करून जिरे, हिंग, काळे मिरे आणि हळद परता.', hi: 'कुकर में घी गरम कर जीरा, हींग, साबुत काली मिर्च और हल्दी भूनें।' } },
      { step: 3, text: { en: 'Add drained rice and dal, sauté for 1 minute in ghee.', mr: 'डाळ-तांदूळ घालून तुपात १ मिनिट परता.', hi: 'दाल-चावल डालकर १ मिनट भूनें।' } },
      { step: 4, text: { en: 'Add 4.5 cups water and salt. Pressure cook for 4 whistles on medium flame for a soft, comforting texture.', mr: 'साडेचार कप पाणी आणि मीठ घालून मध्यम आचेवर ४ शिट्ट्या काढा.', hi: 'साढ़े चार कप पानी और नमक मिलाकर ४ सीटी लगाएं ताकि नरम खिचड़ी बने।' } },
      { step: 5, text: { en: 'Serve piping hot with a spoonful of pure ghee, papad, curd, and lime pickle.', mr: 'गरमागरम खिचडीवर साजूक तूप सोडून पापड, दही आणि लोणच्यासोबत वाढा.', hi: 'गरमागरम खिचड़ी पर घी डालकर पापड़, दही और अचार के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Fresh Curd or Tak (Buttermilk)', mr: 'ताक किंवा दही', hi: 'छाछ या दही' },
      { en: 'Roasted Papad & Mango Pickle', mr: 'भाजलेला पापड व लोणचे', hi: 'पापड़ और अचार' }
    ],
    substitutions: [
      { en: 'Add chopped carrots, beans, and peas for Vegetable Khichdi.', mr: 'गाजर, फरसबी आणि मटार घालून भाजी खिचडी करू शकता.', hi: 'गाजर, मटर मिलाकर वेज खिचड़ी बना सकते हैं।' }
    ],
    allergens: ['Dairy (Ghee)'],
    searchAliases: ['moong dal khichdi', 'मूग डाळ खिचडी', 'khichdi', 'light dinner', 'dal khichdi']
  },
  {
    id: 'masale-bhat',
    name: {
      en: 'Traditional Maharashtrian Masale Bhat',
      mr: 'लग्नकार्यातील पारंपारिक मसाले भात',
      hi: 'पारंपरिक मसाले भात'
    },
    transliteration: 'Masale Bhat',
    description: {
      en: 'Fragrant spicy Maharashtrian spiced rice cooked with seasonal vegetables (ivy gourd/tindora or brinjal), goda masala, whole spices, cashews, and fresh coconut.',
      mr: 'तोंडली किंवा वांगी, खमंग गोडा मसाला, काजू, लवंग-दालचिनी आणि ओल्या खोबऱ्याने सजवलेला सुगंधी मसाले भात.',
      hi: 'कुंदरू या बैंगन, गोडा मसाला, काजू और खड़े मसालों से बना खुशबूदार पारंपरिक मसाले भात।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'traditional',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 25,
    difficulty: 'medium',
    servings: 4,
    cost: 110,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Basmati or Ambemohar Rice', mr: 'आंबेमोहर किंवा बासमती तांदूळ', hi: 'आंबेमोहर या बासमती चावल' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'kala_masala', name: { en: 'Goda Masala / Kala Masala', mr: 'गोडा मसाला', hi: 'गोडा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'brinjal', name: { en: 'Small brinjals or Ivy gourd (Tondli) slit', mr: 'वांगी किंवा तोंडली (लांब चिरलेली)', hi: 'छोटे बैंगन या कुंदरू' }, amount: 1, unit: 'cup', category: 'vegetables' },
      { id: 'green_peas', name: { en: 'Green peas', mr: 'हिरवे मटार', hi: 'मटर' }, amount: 0.5, unit: 'cup', category: 'vegetables' },
      { id: 'ghee', name: { en: 'Pure Ghee', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 2, unit: 'tbsp', category: 'dairy' },
      { id: 'fresh_coconut', name: { en: 'Fresh grated coconut', mr: 'ओले खोबरे', hi: 'ताजा कसा नारियल' }, amount: 3, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Wash Ambemohar rice and soak for 20 minutes.', mr: 'आंबेमोहर तांदूळ धुवून २० मिनिटे भिजत ठेवा.', hi: 'चावल धोकर २० मिनट भिगोएं।' } },
      { step: 2, text: { en: 'Heat ghee in a pot. Add mustard seeds, cumin, bay leaf, cinnamon, cloves, cashews, and green chillies.', mr: 'टोपात तूप तापवून मोहरी, जिरे, तमालपत्र, लवंग, दालचिनी, काजू आणि हिरवी मिरची परता.', hi: 'घी गरम कर खड़े मसाले, काजू और हरी मिर्च भूनें।' } },
      { step: 3, text: { en: 'Add vegetables (brinjal/tondli, peas), goda masala, turmeric, red chilli powder, and salt. Sauté for 2 minutes.', mr: 'भाजी (वांगी/तोंडली, मटार), गोडा मसाला, हळद, तिखट आणि मीठ घालून २ मिनिटे परता.', hi: 'सब्जियां, गोडा मसाला, हल्दी, मिर्च और नमक डालकर २ मिनट भूनें।' } },
      { step: 4, text: { en: 'Add drained rice, 3 cups hot boiling water, cover tightly, and cook on low flame for 15 minutes until rice is fluffy and aromatic.', mr: 'तांदूळ आणि ३ कप उकळते पाणी घालून झाकण ठेवा. मंद आचेवर १५ मिनिटे वाफ काढा.', hi: 'चावल और ३ कप उबलता पानी डालकर धीमी आंच पर १५ मिनट पकाएं।' } },
      { step: 5, text: { en: 'Garnish with fresh grated coconut and coriander. Serve with Matha or Mattha and fried papad.', mr: 'ओले खोबरे आणि कोथिंबीर घालून मठ्ठ्यासोबत किंवा ताकासोबत वाढा.', hi: 'ताजा नारियल और धनिया डालकर मट्ठे के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Spiced Mattha (Buttermilk)', mr: 'मसाला मठ्ठा', hi: 'मसाला छाछ' },
      { en: 'Koshimbir and Kurdai', mr: 'काकडी कोशिंबीर व कुरडई', hi: 'खीरा कचुम्बर और पापड़' }
    ],
    substitutions: [
      { en: 'Cauliflower and potatoes can be added along with peas.', mr: 'फ्लॉवर आणि बटाटेही यात घालू शकता.', hi: 'फूलगोभी और आलू भी मिला सकते हैं।' }
    ],
    allergens: ['Cashews (Nuts)', 'Dairy (Ghee)'],
    searchAliases: ['masale bhat', 'मसाले भात', 'tondli bhat', 'vangi bhat', 'spiced rice']
  },
  {
    id: 'mattha-spiced-buttermilk',
    name: {
      en: 'Refreshing Maharashtrian Mattha (Spiced Buttermilk)',
      mr: 'थंडगार महाराष्ट्रीयन मसाला मठ्ठा',
      hi: 'मसाला छाछ (मठ्ठा)'
    },
    transliteration: 'Mattha',
    description: {
      en: 'Chilled spiced digestive yogurt drink blended with crushed green chillies, ginger, roasted cumin, black salt, and freshly chopped coriander.',
      mr: 'दही घुसळून तयार केलेले पातळ ताक; आले, मिरची, भाजलेले जिरे, काळं मीठ आणि कोथिंबीर घातलेला पाचक व थंडगार मठ्ठा.',
      hi: 'दही को मथकर बनी ठंडी छाछ; अदरक, हरी मिर्च, भुना जीरा, काला नमक और ताजे धनिए से भरपूर पाचक पेय।'
    },
    category: 'accompaniment',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    servings: 4,
    cost: 35,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'curd', name: { en: 'Fresh homemade Curd (Dahi)', mr: 'ताजे घरचे दही', hi: 'ताजा गाढ़ा दही' }, amount: 2, unit: 'cups', category: 'dairy' },
      { id: 'ginger', name: { en: 'Ginger (finely grated)', mr: 'किसलेले आले', hi: 'कद्दूकस अदरक' }, amount: 1, unit: 'tsp', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chilli (slit or crushed)', mr: 'हिरवी मिरची', hi: 'हरी मिर्च' }, amount: 1, unit: 'piece', category: 'vegetables' },
      { id: 'cumin_seeds', name: { en: 'Roasted cumin powder', mr: 'भाजलेले जिरे पावडर', hi: 'भुना जीरा पाउडर' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander (finely chopped)', mr: 'बारीक चिरलेली कोथिंबीर', hi: 'बारीक कटा हरा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Whisk fresh curd with a traditional churner until smooth.', mr: 'दही रवीने छान घुसळून एकजीव करा.', hi: 'दही को मथनी से अच्छी तरह फेंट लें।' } },
      { step: 2, text: { en: 'Add 2.5 cups chilled water, grated ginger, crushed green chilli, roasted cumin powder, black salt, and regular salt.', mr: 'यात अडीच कप थंड पाणी, किसलेले आले, मिरची, भाजलेले जिरे, काळे मीठ आणि साधे मीठ घाला.', hi: 'ढाई कप ठंडा पानी, अदरक, मिर्च, भुना जीरा और काला नमक मिलाएं।' } },
      { step: 3, text: { en: 'Churn well, stir in chopped coriander, and serve chilled with any meal.', mr: 'छान घुसळा, कोथिंबीर घाला आणि थंडगार मठ्ठा जेवणासोबत सर्व्ह करा.', hi: 'अच्छे से मथें, हरा धनिया डालें और ठंडा-ठंडा भोजन के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Masale Bhat or Puran Poli meal', mr: 'मसाले भात किंवा पुरणपोळीचे जेवण', hi: 'मसाले भात या पूरनपोली' }
    ],
    substitutions: [
      { en: 'Add mint leaves (pudina) for extra summer freshness.', mr: 'पुदिना पाने घालून पुदिना ताक करू शकता.', hi: 'पुदीना मिलाकर पुदीना छाछ बना सकते हैं।' }
    ],
    allergens: ['Dairy (Curd/Milk)'],
    searchAliases: ['mattha', 'मठ्ठा', 'tak', 'taak', 'chaas', 'buttermilk', 'spiced buttermilk']
  }
];
