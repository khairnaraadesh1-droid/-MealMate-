export const BONUS_RECIPES = [
  {
    id: 'khandeshi_khapar_roti',
    name: {
      en: 'Khandeshi Khaparachi Poli (Mande)',
      mr: 'खांदेशी खापराची पोळी (मांडे)',
      hi: 'खानदेशी खापरा की रोटी (मांडे)'
    },
    transliteration: 'Khandeshi Khaparachi Poli (Mande)',
    description: {
      en: 'The crowning glory of Khandeshi culinary heritage — paper-thin silky wheat flatbread expertly hand-stretched and baked over a hot inverted earthen pot (Khapar).',
      mr: 'खानदेशची खास ओळख — मातीच्या खापरावर हाताने फिरवून भाजलेली अत्यंत मऊ आणि रेशमी पोळी (मांडे). आमरस किंवा गुळवणीसोबत खाल्ली जाते.',
      hi: 'खानदेश की पारंपरिक धरोहर — मिट्टी के खापर पर हाथों से फैलाकर सेकी गई रेशमी और मुलायम रोटी।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'veg',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 30,
    cookTime: 25,
    difficulty: 'hard',
    servings: 4,
    cost: 80,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'atta', name: { en: 'Whole Wheat Flour', mr: 'गहू पीठ', hi: 'गेहूं का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'maida', name: { en: 'Refined Flour (Fine Maida)', mr: 'मैदा', hi: 'मैदा' }, amount: 0.5, unit: 'cup', category: 'grains' },
      { id: 'oil', name: { en: 'Groundnut Oil', mr: 'शेंगदाणा तेल', hi: 'मूंगफली का तेल' }, amount: 4, unit: 'tbsp', category: 'spices' },
      { id: 'salt', name: { en: 'Salt', mr: 'मीठ', hi: 'नमक' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Desi Ghee', mr: 'साजूक तूप', hi: 'देसी घी' }, amount: 3, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Knead the wheat flour, maida, a pinch of salt and water into a very soft, elastic, and pliable dough for 15 minutes with oil.', mr: 'पीठ, थोडे मीठ व तेल लावून १५ मिनिटे चांगले मळून लवचिक गोळा तयार करा.', hi: 'आटे में थोड़ा नमक और तेल डालकर लचीला गूंध लें।' } },
      { step: 2, text: { en: 'Rest the dough covered with a damp cloth for at least 1 hour so the gluten develops.', mr: 'पिठाला ओलसर कापडाने झाकून १ तास मुरू द्या.', hi: 'पिठाला ओलसर कापडाने झाकून १ तास मुरू द्या।' } },
      { step: 3, text: { en: 'Heat the inverted earthen pot (Khapar) slowly on medium flame.', mr: 'खापर मंद आचेवर व्यवस्थित तापवून घ्या.', hi: 'खापर (उलटे मटके) को आंच पर अच्छी तरह गर्म करें।' } },
      { step: 4, text: { en: 'Take a portion of dough, stretch it delicately across both forearms in a circular motion until paper-thin.', mr: 'पिठाचा गोळा हाताच्या कोपऱ्यांवर फिरवून रुमालासारखा पातळ पसरवा.', hi: 'लोई को हाथों पर घुमाते हुए रुमाल की तरह पतला फैलाएं।' } },
      { step: 5, text: { en: 'Place the thin sheet onto the smoking hot Khapar. Cook for 15-20 seconds, flip gently, and fold into four quarters (Ghadichi Poli).', mr: 'गरम खापरावर अलगद टाका. एका बाजूने शेकल्यावर उलटून लगेच चार पदरी घडी घाला.', hi: 'खापर पर डालें, दोनों तरफ सेकें और चार परतों में मोड़ लें।' } },
      { step: 6, text: { en: 'Smear with hot melted desi ghee and serve with Aamras or Gulavni.', mr: 'वरून भरपूर साजूक तूप सोडून गरम आमरस किंवा गुळवणीसोबत सर्व्ह करा.', hi: 'देसी घी लगाकर आमरस के साथ परोसें।' } }
    ],
    accompaniments: ['Aamras', 'Gulavni', 'Khandeshi Shev Bhaji'],
    allergens: ['Gluten', 'Dairy'],
    tips: 'Allowing the dough to rest develops elasticity, making stretching easy without tearing.',
    tags: ['khandesh', 'heritage', 'festive', 'vegetarian', 'bread']
  },
  {
    id: 'khandeshi_dal_pani',
    name: {
      en: 'Khandeshi Dal Pani (Spiced Broth)',
      mr: 'खांदेशी डाळ पाणी (तडका डाळ सूप)',
      hi: 'खानदेशी दाल पानी'
    },
    transliteration: 'Khandeshi Dal Pani',
    description: {
      en: 'Light, comforting, and intensely flavored thin Toor dal broth spiked with garlic, curry leaves, and Khandeshi Kala Masala.',
      mr: 'खानदेशात भाकरी किंवा भातासोबत पिण्यासाठी बनवली जाणारी पात्तळ, लसूण आणि काळ्या मसाल्याची झणझणीत डाळ.',
      hi: 'लहसुन, जीरा और काला मसाला से तड़का लगाई गई पतली और स्वादिष्ट तुअर दाल।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'veg',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 20,
    difficulty: 'easy',
    servings: 4,
    cost: 50,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'toor_dal', name: { en: 'Toor Dal', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 0.75, unit: 'cup', category: 'pulses' },
      { id: 'garlic', name: { en: 'Garlic Cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन' }, amount: 8, unit: 'cloves', category: 'vegetables' },
      { id: 'mustard_seeds', name: { en: 'Mustard Seeds', mr: 'मोहरी', hi: 'राई' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'cumin_seeds', name: { en: 'Cumin Seeds', mr: 'जिरे', hi: 'जीरा' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'खांदेशी काळा मसाला', hi: 'काला मसाला' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' },
      { id: 'oil', name: { en: 'Oil', mr: 'तेल', hi: 'तेल' }, amount: 1.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Pressure cook toor dal with turmeric and extra water until completely soft.', mr: 'तूर डाळ हळद आणि जास्तीचे पाणी घालून कुकरमध्ये मऊ शिजवून घ्या.', hi: 'दाल को पानी और हल्दी डालकर कुकर में अच्छे से उबाल लें।' } },
      { step: 2, text: { en: 'Whisk the dal into a thin liquid consistency.', mr: 'डाळ रवीने घोटून पातळ करा.', hi: 'दाल को मथकर पतला करें।' } },
      { step: 3, text: { en: 'Heat oil in a Kadai, splutter mustard, cumin seeds, crushed garlic, and curry leaves.', mr: 'कढईत तेल तापवून मोहरी, जिरे, ठेचलेला भरपूर लसूण आणि कढीपत्ता परता.', hi: 'कड़ाही में तेल गरम करके राई, जीरा, लहसुन और कड़ी पत्ता भूनें।' } },
      { step: 4, text: { en: 'Add Khandeshi Kala Masala, pour in the dal water, salt, and boil vigorously for 5 minutes.', mr: 'काळा मसाला घाला, डाळीचे पाणी ओता, मीठ घालून ५ मिनिटे खळखळून उकळा.', hi: 'काला मसाला और दाल का पानी डालें, ५ मिनट उबालें।' } },
      { step: 5, text: { en: 'Garnish with finely chopped fresh coriander and serve hot with Jowar Bhakri or rice.', mr: 'बारीक चिरलेली कोथिंबीर घालून गरमागरम बाजरी-ज्वारीच्या भाकरीसोबत वाढा.', hi: 'धनिया डालकर ज्वार भाकरी के साथ परोसें।' } }
    ],
    accompaniments: ['Jowar Bhakri', 'Garlic Thecha', 'Steamed Rice'],
    allergens: [],
    tips: 'Do not keep it thick; the beauty is in its light, aromatic, soup-like consistency.',
    tags: ['khandesh', 'healthy', 'quick', 'dal', 'gluten-free']
  },
  {
    id: 'shengdana_ladoo',
    name: {
      en: 'Khandeshi Shengdana Ladoo',
      mr: 'खांदेशी शेंगदाणा गूळ लाडू',
      hi: 'मूंगफली गुड़ के लड्डू'
    },
    transliteration: 'Khandeshi Shengdana Ladoo',
    description: {
      en: 'A 2-ingredient nutrition powerhouse of roasted crunchy peanuts pounded with organic Kolhapuri jaggery and a hint of cardamom.',
      mr: 'फक्त भाजलेले शेंगदाणे आणि सेंद्रिय गूळ एकत्र कुटून केलेले पौष्टिक आणि तोंडात विरघळणारे पारंपारिक लाडू.',
      hi: 'भुनी हुई मूंगफली और गुड़ से बने पारंपरिक पौष्टिक और स्वादिष्ट लड्डू।'
    },
    category: 'sweet',
    mealTypes: ['breakfast', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'veg',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 10,
    cookTime: 10,
    difficulty: 'easy',
    servings: 6,
    cost: 60,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'peanuts', name: { en: 'Raw Peanuts', mr: 'शेंगदाणे', hi: 'मूंगफली' }, amount: 2, unit: 'cups', category: 'pulses' },
      { id: 'jaggery', name: { en: 'Grated Jaggery', mr: 'किसलेला गूळ', hi: 'गुड़' }, amount: 1, unit: 'cup', category: 'spices' },
      { id: 'cardamom', name: { en: 'Cardamom Powder', mr: 'वेलची पूड', hi: 'इलायची' }, amount: 0.5, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Roast raw peanuts on low flame in a heavy-bottom pan until fragrant and lightly browned.', mr: 'कढईत मंद आचेवर शेंगदाणे खमंग भाजून घ्या व थंड झाल्यावर टरफले काढून टाका.', hi: 'मूंगफली को धीमी आंच पर भूनें और छिलके उतार लें।' } },
      { step: 2, text: { en: 'Pulse peanuts coarsely in a mixer grinder (do not make fine powder).', mr: 'मिक्सरमध्ये शेंगदाणे जाडसर फिरवून घ्या.', hi: 'मिक्सर में दरदरा पीसें।' } },
      { step: 3, text: { en: 'Add grated jaggery and cardamom powder, pulse again in bursts until jaggery blends and oil binds the mix.', mr: 'त्यात किसलेला गूळ आणि वेलची पूड घालून थोडे फिरवा.', hi: 'गुड़ और इलायची डालकर एक बार और चलाएं।' } },
      { step: 4, text: { en: 'Shape into firm spherical ladoos and store in an airtight jar.', mr: 'हाताने दाबून गोल लाडू वळा. हवाबंद डब्यात ३ आठवडे चांगले टिकतात.', hi: 'हाथों से गोल लड्डू बनाएं।' } }
    ],
    accompaniments: ['Warm Milk', 'Tea'],
    allergens: ['Peanuts'],
    tips: 'Do not run mixer continuously or peanuts will turn into peanut butter paste.',
    tags: ['healthy', 'snack', 'sweet', 'iron-rich', 'gluten-free']
  },
  {
    id: 'poha_chivda',
    name: {
      en: 'Maharashtrian Poha Chivda',
      mr: 'कुरकुरीत पातळ पोहा चिवडा',
      hi: 'पोहा चिवड़ा'
    },
    transliteration: 'Maharashtrian Poha Chivda',
    description: {
      en: 'Crispy roasted thin flattened rice tossed with golden peanuts, roasted chana dal, crispy curry leaves, and aromatic spice blend.',
      mr: 'पातळ पोहे भाजून त्यावर शेंगदाणे, डाळवं, हिरवी मिरची, कढीपत्ता आणि हळद-पिठीसाखरेची फोडणी दिलेला चवदार चिवडा.',
      hi: 'भुने हुए पतले पोहे, मूंगफली और मसालों से बना कुरकुरा नमकीन चिवड़ा।'
    },
    category: 'snack',
    mealTypes: ['breakfast', 'dinner'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 15,
    difficulty: 'easy',
    servings: 8,
    cost: 70,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'poha', name: { en: 'Thin Poha', mr: 'पातळ पोहे', hi: 'पतला पोहा' }, amount: 3, unit: 'cups', category: 'grains' },
      { id: 'peanuts', name: { en: 'Peanuts', mr: 'शेंगदाणे', hi: 'मूंगफली' }, amount: 0.5, unit: 'cup', category: 'pulses' },
      { id: 'green_chilli', name: { en: 'Green Chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 3, unit: 'pieces', category: 'vegetables' },
      { id: 'curry_leaves', name: { en: 'Curry Leaves', mr: 'कढीपत्ता', hi: 'कड़ी पत्ता' }, amount: 15, unit: 'leaves', category: 'vegetables' },
      { id: 'turmeric', name: { en: 'Turmeric Powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'oil', name: { en: 'Oil', mr: 'तेल', hi: 'तेल' }, amount: 3, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Dry roast thin poha in a wide heavy pan on low flame until crisp.', mr: 'पातळ पोहे मंद आचेवर कढईत हलके हलवून कुरकुरीत होईपर्यंत भाजून घ्या.', hi: 'पोहा को धीमी आंच पर कुरकुरा होने तक भूनें।' } },
      { step: 2, text: { en: 'In a small pan, heat oil. Fry peanuts until golden and crunchy, remove and add to poha.', mr: 'कढईत तेल गरम करून शेंगदाणे लालसर तळून पोह्यांवर टाका.', hi: 'तेल में मूंगफली तलें।' } },
      { step: 3, text: { en: 'Fry green chillies and curry leaves until crispy, then stir in turmeric and salt.', mr: 'मिरच्या आणि कढीपत्ता कुरकुरीत तळा, हळद आणि मीठ घाला.', hi: 'मिर्च और कड़ी पत्ता तलकर हल्दी और नमक मिलाएं।' } },
      { step: 4, text: { en: 'Pour tempering over roasted poha, add a pinch of powdered sugar, and toss gently.', mr: 'ही फोडणी पोह्यांवर ओता, पिठीसाखर घालून अलगद हाताने एकत्र करा.', hi: 'तड़का पोहे पर डालें और मिला लें।' } }
    ],
    accompaniments: ['Cutting Chai', 'Coffee'],
    allergens: ['Peanuts'],
    tips: 'Sun dry thin poha for 30 minutes before roasting for extra crunch.',
    tags: ['snack', 'tea-time', 'diwali', 'crispy', 'gluten-free']
  },
  {
    id: 'pav_bhaji',
    name: {
      en: 'Mumbai Butter Pav Bhaji',
      mr: 'मुंबई स्पेशल बटर पाव भाजी',
      hi: 'मुंबई पाव भाजी'
    },
    transliteration: 'Mumbai Butter Pav Bhaji',
    description: {
      en: 'Iconic street specialty of mashed spiced vegetables simmered in butter and red pav bhaji masala, served with pillowy toasted butter pav.',
      mr: 'उकडलेल्या भाज्या, भरपूर अमूल बटर आणि खास पावभाजी मसाला घालून तव्यावर घोटलेली चवदार भाजी व बटर लावलेले मऊ पाव.',
      hi: 'मसालेदार उबली सब्जियों का मक्खन में बना गाढ़ा मिश्रण, मक्खन लगे पाव के साथ परोसा जाता है।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 20,
    cookTime: 25,
    difficulty: 'medium',
    servings: 4,
    cost: 120,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'potato', name: { en: 'Potatoes (Boiled)', mr: 'उकडलेले बटाटे', hi: 'उबले आलू' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'capsicum', name: { en: 'Green Bell Pepper', mr: 'शिमला मिरची', hi: 'शिमला मिर्च' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomatoes', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onions (Finely Chopped)', mr: 'कांदा', hi: 'बारीक प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'butter', name: { en: 'Butter', mr: 'बटर / लोणी', hi: 'मक्खन' }, amount: 50, unit: 'g', category: 'dairy' },
      { id: 'pav', name: { en: 'Ladi Pav', mr: 'लादी पाव', hi: 'पाव' }, amount: 8, unit: 'pieces', category: 'grains' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil potatoes and other vegetables until tender; mash them coarsely.', mr: 'बटाटे व भाज्या उकडून चांगले मॅश करा.', hi: 'सब्जियों को उबालकर मैश कर लें।' } },
      { step: 2, text: { en: 'Melt butter in a pan, sauté finely chopped onions and capsicum until soft.', mr: 'कढईत बटर टाकून कांदा आणि बारीक शिमला मिरची परतून घ्या.', hi: 'कड़ाही में मक्खन डालकर प्याज और शिमला मिर्च भूनें।' } },
      { step: 3, text: { en: 'Add pureed tomatoes, ginger-garlic paste, chili powder, and pav bhaji masala. Cook until butter separates.', mr: 'टोमॅटो प्युरी, आले-लसूण पेस्ट आणि पावभाजी मसाला घालून तेल सुटेपर्यंत परता.', hi: 'टमाटर और पावभाजी मसाला डालकर भूनें।' } },
      { step: 4, text: { en: 'Add mashed boiled veggies, water, and salt. Use potato masher to blend everything vigorously.', mr: 'मॅश केलेल्या भाज्या घाला, पाणी आणि मीठ घालून मॅशरने चांगले घोटून घ्या.', hi: 'सब्जियां डालकर अच्छी तरह मैश करें।' } },
      { step: 5, text: { en: 'Toast pav on a tawa with butter and serve hot with chopped onion and lemon.', mr: 'तव्यावर भरपूर बटर टाकून पाव शेकून घ्या व कांदा-लिंबासह सर्व्ह करा.', hi: 'पाव को मक्खन में सेकें और प्याज-नींबू के साथ परोसें।' } }
    ],
    accompaniments: ['Buttered Pav', 'Lemon Wedges', 'Chopped Onions'],
    allergens: ['Dairy', 'Gluten'],
    tips: 'Mash continuously on the pan for that velvety restaurant street-style consistency.',
    tags: ['mumbai-street', 'popular', 'party', 'dinner', 'kids-favorite']
  },
  {
    id: 'paneer_tikka_masala',
    name: {
      en: 'Dhaba Style Paneer Tikka Masala',
      mr: 'ढाबा स्टाईल पनीर टिक्का मसाला',
      hi: 'ढाबा स्टाइल पनीर टिक्का मसाला'
    },
    transliteration: 'Dhaba Style Paneer Tikka Masala',
    description: {
      en: 'Char-grilled succulent paneer cubes swimming in a rich, velvety onion-tomato gravy perfumed with roasted kasuri methi and cream.',
      mr: 'तव्यावर भाजलेले पनीरचे तुकडे आणि कांदा-टोमॅटोच्या मसालेदार घट्ट ग्रेव्हीत बनवलेली स्वादिष्ट भाजी.',
      hi: 'ग्रिल्ड पनीर के टुकड़े गाढ़ी प्याज-टमाटर और मलाईदार ग्रेवी में पकाए गए।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 20,
    cookTime: 25,
    difficulty: 'medium',
    servings: 4,
    cost: 150,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', name: { en: 'Fresh Paneer', mr: 'पनीर', hi: 'पनीर' }, amount: 250, unit: 'g', category: 'dairy' },
      { id: 'curd', name: { en: 'Thick Curd / Yogurt', mr: 'घट्ट दही', hi: 'दही' }, amount: 0.5, unit: 'cup', category: 'dairy' },
      { id: 'capsicum', name: { en: 'Bell Pepper (Diced)', mr: 'शिमला मिरची', hi: 'शिमला मिर्च' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onions', mr: 'कांदा', hi: 'प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomatoes', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 3, unit: 'medium', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Marinate paneer and bell pepper cubes in curd and spices for 15 minutes, then pan-sear.', mr: 'पनीर आणि शिमला मिरची दही व मसाल्यात १५ मिनिटे मॅरीनेट करून तव्यावर खरपूस भाजा.', hi: 'पनीर को दही और मसालों में मैरीनेट करके तवे पर सेक लें।' } },
      { step: 2, text: { en: 'In a kadai, fry onions until golden brown, add ginger-garlic paste and tomato puree.', mr: 'कढईत कांदा लालसर परता, आले-लसूण व टोमॅटो प्युरी घालून तेल सुटेपर्यंत शिजवा.', hi: 'प्याज-टमाटर की गाढ़ी ग्रेवी तैयार करें।' } },
      { step: 3, text: { en: 'Add spices, water, fold in seared paneer, fresh cream, and simmer for 3 minutes.', mr: 'मसाले व थोडे पाणी घालून ग्रेव्ही उकळा. भाजलेले पनीर, साय घालून २ मिनिटे शिजवा.', hi: 'ग्रेवी में पनीर डालकर मलाई और कस्तूरी मेथी मिलाएं।' } }
    ],
    accompaniments: ['Butter Naan', 'Jeera Rice', 'Tandoori Roti'],
    allergens: ['Dairy'],
    tips: 'Do not overcook paneer in the pan; it will become chewy instead of melt-in-mouth.',
    tags: ['paneer', 'punjabi', 'dinner', 'rich', 'restaurant-style']
  },
  {
    id: 'kadai_paneer',
    name: {
      en: 'Kadai Paneer Gravy',
      mr: 'कढाई पनीर',
      hi: 'कढ़ाई पनीर'
    },
    transliteration: 'Kadai Paneer Gravy',
    description: {
      en: 'Cottage cheese and crunchy bell peppers stir-fried with freshly pounded Kadai masala of whole coriander, fennel, and dried red chilies.',
      mr: 'धणे, बडीशेप आणि सुक्या लाल मिरच्यांचा ताजा कढाई मसाला वापरून बनवलेली शिमला मिरची आणि पनीरची भाजी.',
      hi: 'ताजा भुने मसालों के साथ शिमला मिर्च और पनीर की चटपटी सूखी या गाढ़ी सब्जी।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'spicy',
    prepTime: 15,
    cookTime: 20,
    difficulty: 'medium',
    servings: 4,
    cost: 140,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', name: { en: 'Paneer Cubes', mr: 'पनीरचे तुकडे', hi: 'पनीर' }, amount: 200, unit: 'g', category: 'dairy' },
      { id: 'capsicum', name: { en: 'Capsicum (Diced)', mr: 'शिमला मिरची', hi: 'शिमला मिर्च' }, amount: 1.5, unit: 'medium', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onion Cubes', mr: 'कांद्याचे तुकडे', hi: 'प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomatoes', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 3, unit: 'medium', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Dry roast coriander seeds, cumin, and dry red chillies; crush coarsely into kadai masala.', mr: 'धणे, जिरे आणि सुक्या मिरच्या भाजून जाडसर कुटून कढाई मसाला तयार करा.', hi: 'धनिया और सूखी मिर्च को भूनकर दरदरा पीसें।' } },
      { step: 2, text: { en: 'Sauté diced capsicum and onion petals on high heat for 2 minutes to keep them crunchy.', mr: 'शिमला मिरची आणि कांद्याचे तुकडे तेलात २ मिनिटे कुरकुरीत परता.', hi: 'प्याज और शिमला मिर्च को तेज आंच पर हल्का भूनें।' } },
      { step: 3, text: { en: 'Cook onion-tomato gravy with ginger-garlic, add kadai masala, paneer, and toss.', mr: 'कढईत कांदा-टोमॅटोची ग्रेव्ही तयार करून त्यात कढाई मसाला, पनीर आणि परतलेल्या भाज्या घालून सर्व्ह करा.', hi: 'ग्रेवी में पनीर और भुनी सब्जियां मिलाकर तेज आंच पर पकाएं।' } }
    ],
    accompaniments: ['Roti', 'Paratha', 'Jeera Rice'],
    allergens: ['Dairy'],
    tips: 'Freshly ground coriander seeds give Kadai dishes their signature aroma.',
    tags: ['kadai', 'paneer', 'spicy', 'north-indian']
  },
  {
    id: 'matar_paneer',
    name: {
      en: 'Home-style Matar Paneer',
      mr: 'घरगुती मटार पनीर',
      hi: 'मटर पनीर'
    },
    transliteration: 'Home-style Matar Paneer',
    description: {
      en: 'Tender green peas and soft paneer cubes in a lightly spiced home-style tomato onion gravy that pairs effortlessly with phulkas.',
      mr: 'ताजे हिरवे मटार आणि मऊ पनीरचे तुकडे कांदा-टोमॅटोच्या चवदार रश्श्यात बनवलेले घरगुती मटार पनीर.',
      hi: 'ताजे हरे मटर और मुलायम पनीर से बनी घरेलू और पौष्टिक करी।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 20,
    difficulty: 'easy',
    servings: 4,
    cost: 130,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', name: { en: 'Paneer', mr: 'पनीर', hi: 'पनीर' }, amount: 200, unit: 'g', category: 'dairy' },
      { id: 'green_peas', name: { en: 'Green Peas', mr: 'हिरवे मटार', hi: 'हरी मटर' }, amount: 1, unit: 'cup', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onions', mr: 'कांदा', hi: 'प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomatoes', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 2, unit: 'medium', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Sauté chopped onions, ginger, garlic, and tomato puree until oil separates.', mr: 'कढईत कांदा, आले-लसूण आणि टोमॅटोची पेस्ट तेल सुटेपर्यंत परता.', hi: 'मसाले भूनकर तैयार करें।' } },
      { step: 2, text: { en: 'Add spices, green peas, and 1 cup water. Simmer for 7-8 minutes until peas are soft.', mr: 'तिखट, हळद, धणेपूड आणि मटार घालून पाणी घाला व ५ मिनिटे शिजू द्या.', hi: 'मटर और पानी डालकर पकाएं।' } },
      { step: 3, text: { en: 'Add paneer cubes and garam masala; simmer for 3 minutes and finish with fresh coriander.', mr: 'पनीर व गरम मसाला घालून २ मिनिटे उकळवा व कोथिंबीर घालून सर्व्ह करा.', hi: 'पनीर और गरम मसाला मिलाकर सर्व करें।' } }
    ],
    accompaniments: ['Phulka', 'Steamed Basmati Rice', 'Kachumber'],
    allergens: ['Dairy'],
    tips: 'Soaking paneer in lukewarm water keeps it soft throughout cooking.',
    tags: ['everyday', 'homestyle', 'comfort-food', 'vegetarian']
  },
  {
    id: 'sambar_rice',
    name: {
      en: 'South Indian Bisibele Sambar Rice',
      mr: 'सांभार राईस (वन पॉट मील)',
      hi: 'सांभर चावल'
    },
    transliteration: 'South Indian Bisibele Sambar Rice',
    description: {
      en: 'Soul-warming one-pot meal made by pressure-cooking rice and toor dal with mixed vegetables, tamarind pulp, and fragrant sambar powder.',
      mr: 'तांदूळ, तूर डाळ, भाज्या आणि चिंचेच्या कोळात सांबार मसाला घालून कुकरमध्ये झटपट तयार होणारा रुचकर भात.',
      hi: 'चावल, दाल और सब्जियों को इमली और सांभर मसाले के साथ पकाकर बनाया गया संपूर्ण भोजन।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 25,
    difficulty: 'easy',
    servings: 4,
    cost: 75,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Raw Rice', mr: 'तांदूळ', hi: 'चावल' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'toor_dal', name: { en: 'Toor Dal', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 0.5, unit: 'cup', category: 'pulses' },
      { id: 'mixed_veggies', name: { en: 'Mixed Vegetables', mr: 'मिश्र भाज्या', hi: 'मिश्रित सब्जियां' }, amount: 1, unit: 'cup', category: 'vegetables' },
      { id: 'sambar_powder', name: { en: 'Sambar Powder', mr: 'सांभार मसाला', hi: 'सांभर पाउडर' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'tamarind', name: { en: 'Tamarind Pulp', mr: 'चिंचेचा कोळ', hi: 'इमली का पल्प' }, amount: 1.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Pressure cook rice and dal together until soft and mushy.', mr: 'तांदूळ व डाळ एकत्र कुकरमध्ये मऊ शिजवून घ्या.', hi: 'दाल और चावल को एक साथ नरम पका लें।' } },
      { step: 2, text: { en: 'Boil vegetables with tamarind water, sambar powder, and salt.', mr: 'भांड्यात भाज्या, चिंचेचा कोळ आणि सांभार मसाला घालून शिजवा.', hi: 'सब्जियों को इमली और सांभर मसाले के साथ उबालें।' } },
      { step: 3, text: { en: 'Combine dal-rice with vegetables and finish with a sizzling mustard-curry leaf ghee tadka.', mr: 'यात शिजलेला डाळ-भात मिसळून तुपातील मोहरी-कढीपत्त्याची खमंग फोडणी द्या.', hi: 'दाल-चावल मिलाकर घी का तड़का लगाएं।' } }
    ],
    accompaniments: ['Fried Papad', 'Potato Chips', 'Curd'],
    allergens: ['Dairy'],
    tips: 'Use small grain rice like Sona Masoori or Kolam for comforting mushy texture.',
    tags: ['one-pot', 'south-indian', 'comfort-food', 'wholesome']
  },
  {
    id: 'masala_taak',
    name: {
      en: 'Maharashtrian Masala Taak (Chaas)',
      mr: 'मसाला ताक (खमंग पाचक ताक)',
      hi: 'मसाला छाछ'
    },
    transliteration: 'Maharashtrian Masala Taak',
    description: {
      en: 'Refreshing, digestion-boosting traditional churned yogurt drink blended with green chili, ginger, roasted cumin, rock salt, and coriander.',
      mr: 'दुपारच्या जेवणानंतर प्यायले जाणारे पाचक, थंडगार आणि आले-मिरची-जिऱ्याची चव असलेले ताक.',
      hi: 'दही, भुना जीरा, अदरक, मिर्च और काले नमक से बनी ताज़ा और पाचक मसाला छाछ।'
    },
    category: 'accompaniment',
    mealTypes: ['lunch'],
    cuisine: 'everyday_maharashtrian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    servings: 4,
    cost: 30,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'curd', name: { en: 'Fresh Curd', mr: 'ताजे दही', hi: 'ताजा दही' }, amount: 2, unit: 'cups', category: 'dairy' },
      { id: 'water', name: { en: 'Chilled Water', mr: 'थंड पाणी', hi: 'ठंडा पानी' }, amount: 2, unit: 'cups', category: 'spices' },
      { id: 'cumin_powder', name: { en: 'Roasted Cumin Powder', mr: 'भाजलेली जिरेपूड', hi: 'भुना जीरा पाउडर' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'black_salt', name: { en: 'Black Salt', mr: 'काळं मीठ', hi: 'काला नमक' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Whisk fresh curd with chilled water until smooth and frothy.', mr: 'भांड्यात दही आणि थंड पाणी रवीने चांगले घुसळून घ्या.', hi: 'दही और पानी को मथ लें।' } },
      { step: 2, text: { en: 'Add crushed green chili, ginger extract, roasted cumin powder, and black salt.', mr: 'त्यात मिरची, आल्याचा रस, भाजलेले जिरे आणि काळे मीठ घाला.', hi: 'मसाले और नमक मिलाकर फेंटें।' } },
      { step: 3, text: { en: 'Garnish with fresh coriander leaves and serve cold with meals.', mr: 'बारीक चिरलेली कोथिंबीर घालून थंडगार सर्व्ह करा.', hi: 'धनिया डालकर ठंडा परोसें।' } }
    ],
    accompaniments: ['Everyday Maharashtrian Lunch', 'Pithla Bhakri'],
    allergens: ['Dairy'],
    tips: 'Use homemade set curd that is mildly tangy for that authentic taste.',
    tags: ['beverage', 'cooling', 'digestive', 'quick', 'summer']
  },
  {
    id: 'veg_fried_rice',
    name: {
      en: 'Desi Indo-Chinese Veg Fried Rice',
      mr: 'व्हेज फ्राईड राईस',
      hi: 'वेज फ्राइड राइस'
    },
    transliteration: 'Desi Indo-Chinese Veg Fried Rice',
    description: {
      en: 'Wok-tossed chilled rice with crunchy carrots, cabbage, french beans, spring onions, garlic, and soy-pepper sauce.',
      mr: 'बारीक चिरलेल्या कोबी, गाजर, फरसबी आणि लसूण-मिरचीच्या फोडणीत टॉस केलेला चवदार फ्राईड राईस.',
      hi: 'बारीक कटी सब्जियों और लहसुन-सोया सॉस के साथ तेज आंच पर पकाया गया फ्राइड राइस।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 12,
    difficulty: 'easy',
    servings: 4,
    cost: 70,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'cooked_rice', name: { en: 'Cooked Chilled Rice', mr: 'शिजवून थंड केलेला भात', hi: 'पका ठंडा चावल' }, amount: 3, unit: 'cups', category: 'grains' },
      { id: 'garlic', name: { en: 'Garlic (Finely Chopped)', mr: 'बारीक लसूण', hi: 'कटा लहसुन' }, amount: 2, unit: 'tbsp', category: 'vegetables' },
      { id: 'mixed_veggies', name: { en: 'Carrots, Beans, Cabbage', mr: 'गाजर, फरसबी, कोबी', hi: 'गाजर, बीन्स, पत्तागोभी' }, amount: 1.5, unit: 'cups', category: 'vegetables' },
      { id: 'spring_onion', name: { en: 'Spring Onions', mr: 'पात कांदा', hi: 'हरा प्याज' }, amount: 0.5, unit: 'cup', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat oil in a wok on high flame until smoking hot. Sauté minced garlic and spring onions.', mr: 'कढईत तेल चांगले गरम करून लसूण आणि पातीचा कांदा परता.', hi: 'कड़ाही में तेज आंच पर लहसुन और प्याज भूनें।' } },
      { step: 2, text: { en: 'Toss in mixed veggies on high heat for 2 minutes to keep them crisp.', mr: 'सर्व भाज्या घालून मोठ्या आचेवर २ मिनिटे कुरकुरीत परतून घ्या.', hi: 'सब्जियां डालकर तेज आंच पर हल्का भूनें।' } },
      { step: 3, text: { en: 'Add chilled rice, soy sauce, black pepper, and toss vigorously for 2 minutes.', mr: 'थंड भात, सोया सॉस, मिरी पूड घालून मोठ्या आचेवर २ मिनिटे टॉस करा.', hi: 'चावल और सोया सॉस डालकर तेज आंच पर टॉस करें।' } }
    ],
    accompaniments: ['Veg Manchurian', 'Chilli Paneer', 'Schezwan Chutney'],
    allergens: ['Soy'],
    tips: 'Always use day-old refrigerated rice; freshly cooked warm rice will turn sticky and mushy.',
    tags: ['quick', 'dinner', 'indo-chinese', 'kids-favorite']
  },
  {
    id: 'aloo_tikki_chaat',
    name: {
      en: 'Crispy Street Style Aloo Tikki Chaat',
      mr: 'कुरकुरीत आलू टिक्की चाट',
      hi: 'आलू टिक्की चाट'
    },
    transliteration: 'Crispy Street Style Aloo Tikki Chaat',
    description: {
      en: 'Golden shallow-fried spiced potato patties loaded with sweet curd, tangy tamarind chutney, spicy green mint sauce, and crisp sev.',
      mr: 'उकडलेल्या बटाट्याची कुरकुरीत टिक्की, त्यावर गोडसर दही, चिंच-खजुराची चटणी आणि शेव घालून बनवलेली चटपटीत चाट.',
      hi: 'कुरकुरी आलू टिक्की पर दही, मीठी इमली की चटनी, तीखी हरी चटनी और बारीक सेव।'
    },
    category: 'snack',
    mealTypes: ['breakfast', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 15,
    difficulty: 'medium',
    servings: 4,
    cost: 65,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'potato', name: { en: 'Potatoes (Boiled & Mashed)', mr: 'उकडलेले बटाटे', hi: 'उबले आलू' }, amount: 4, unit: 'medium', category: 'vegetables' },
      { id: 'curd', name: { en: 'Sweetened Beaten Curd', mr: 'गोडसर दही', hi: 'मीठा दही' }, amount: 1, unit: 'cup', category: 'dairy' },
      { id: 'sev', name: { en: 'Fine Nylon Sev', mr: 'नायलॉन शेव', hi: 'नायलॉन सेव' }, amount: 0.5, unit: 'cup', category: 'grains' }
    ],
    instructions: [
      { step: 1, text: { en: 'Mix mashed potatoes with spices and shape into circular patties.', mr: 'उकडलेले बटाटे मसाल्यासह मळा व गोल टिक्की बनवा.', hi: 'आलू की टिक्की बनाएं।' } },
      { step: 2, text: { en: 'Shallow fry on a flat tawa until golden brown and super crunchy on both sides.', mr: 'तव्यावर तेल टाकून दोन्ही बाजूंनी सोनेरी आणि कुरकुरीत होईपर्यंत तळा.', hi: 'तवे पर कुरकुरी सेकें।' } },
      { step: 3, text: { en: 'Plate hot tikkis and top generously with sweet curd, chutneys, chaat masala, and sev.', mr: 'प्लेटमध्ये टिक्क्या ठेवून गोडसर दही, चटण्या आणि शेव टाकून सर्व्ह करा.', hi: 'दही, चटनी और सेव डालकर चटपटी चाट परोसें।' } }
    ],
    accompaniments: ['Evening Chai', 'Cold Drink'],
    allergens: ['Dairy'],
    tips: 'Ensure potatoes are cooled before mashing so the tikkis absorb less oil and stay crisp.',
    tags: ['chaat', 'street-food', 'evening-snack', 'kids-favorite']
  },
  {
    id: 'kombdi_vade',
    name: {
      en: 'Malvani Kombdi Vade (Chicken Curry)',
      mr: 'मालवणी कोंबडी वडे (पारंपारिक कोकणी थाळी)',
      hi: 'मालवणी कोंबड़ी वडे'
    },
    transliteration: 'Malvani Kombdi Vade',
    description: {
      en: 'Iconic Konkan Sunday feast — spicy slow-cooked chicken in roasted coconut-onion gravy served with fluffy, deep-fried multigrain puris (Vade).',
      mr: 'कोकणातील सर्वात प्रसिद्ध मेजवानी — भाजलेल्या खोबऱ्याच्या वाटणातील झणझणीत कोंबडीचा रस्सा आणि तांदूळ-उडदाच्या पिठाचे टम्म फुगलेले वडे.',
      hi: 'कोंकण की प्रसिद्ध चिकन करी और चावल-उड़द के आटे से बने फूले हुए कुरकुरे वड़े।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'konkan',
    dietary: 'nonveg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 30,
    cookTime: 40,
    difficulty: 'hard',
    servings: 4,
    cost: 280,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', name: { en: 'Fresh Chicken Pieces', mr: 'चिकनचे तुकडे', hi: 'चिकन' }, amount: 500, unit: 'g', category: 'meat' },
      { id: 'fresh_coconut', name: { en: 'Grated Fresh Coconut', mr: 'ओले खोबरे', hi: 'नारियल' }, amount: 1, unit: 'cup', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onions', mr: 'कांदा', hi: 'प्याज' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'rice_flour', name: { en: 'Rice Flour (for Vade)', mr: 'तांदळाचे पीठ', hi: 'चावल का आटा' }, amount: 1.5, unit: 'cups', category: 'grains' }
    ],
    instructions: [
      { step: 1, text: { en: 'Roast onions and coconut dark brown; grind into smooth Malvani paste (Vatan).', mr: 'कांदा आणि खोबरे काळेभोर भाजून बारीक वाटून घ्या.', hi: 'भुने नारियल-प्याज का पेस्ट बनाएं।' } },
      { step: 2, text: { en: 'Sear chicken with Malvani masala and roasted paste; simmer in hot water until fork tender.', mr: 'तेलात चिकन परतून वाटण घाला व मऊ शिजेपर्यंत उकळा.', hi: 'चिकन को मसाले और पेस्ट में पकाएं।' } },
      { step: 3, text: { en: 'Flatten multi-grain dough rounds and deep fry into puffed golden Vade.', mr: 'तांदूळ-उडदाचे वडे थापून तेलात टम्म तळा.', hi: 'चावल के आटे से वड़े बनाकर तलें।' } }
    ],
    accompaniments: ['Malvani Vade', 'Sliced Onions', 'Solkadhi'],
    allergens: [],
    tips: 'Roasting the coconut until dark amber-brown creates the authentic Malvani deep flavor.',
    tags: ['malvani', 'konkan', 'chicken', 'feast', 'traditional']
  },
  {
    id: 'pithla_bhat_tadka',
    name: {
      en: 'Puneri Lasun Pithla with Jeera Bhat',
      mr: 'पुणेरी लसूण पिठलं जिरा भात',
      hi: 'पुणेरी लहसुन पिठला जीरा राइस'
    },
    transliteration: 'Puneri Lasun Pithla with Jeera Bhat',
    description: {
      en: 'Silky, comforting gram flour stew bursting with crushed garlic and green chili tadka, poured over piping hot cumin-tempered rice.',
      mr: 'भरपूर ठेचलेला लसूण आणि हिरव्या मिरच्यांची फोडणी दिलेले गरमागरम मऊ पिठलं आणि तुपातील जिरा भात — अस्सल पुणेरी तृप्ती.',
      hi: 'लहसुन और हरी मिर्च के तड़के वाला बेसन का पिठला, जीरा चावल के साथ।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pune_kolhapur',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 15,
    difficulty: 'easy',
    servings: 3,
    cost: 55,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', name: { en: 'Gram Flour (Besan)', mr: 'बेसन / हरभरा डाळ पीठ', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'garlic', name: { en: 'Garlic Cloves (Crushed)', mr: 'ठेचलेला लसूण', hi: 'कुटा लहसुन' }, amount: 10, unit: 'cloves', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green Chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 4, unit: 'pieces', category: 'vegetables' },
      { id: 'cooked_rice', name: { en: 'Steamed Rice', mr: 'शिजवलेला भात', hi: 'पका चावल' }, amount: 2, unit: 'cups', category: 'grains' }
    ],
    instructions: [
      { step: 1, text: { en: 'Whisk besan with water and salt ensuring zero lumps.', mr: 'बेसन पाण्यात गुठळ्या न राहता चांगले मिसळून घ्या.', hi: 'बेसन का घोल बनाएं।' } },
      { step: 2, text: { en: 'Heat oil, splutter mustard, cumin, plenty of crushed garlic, curry leaves, and green chillies.', mr: 'कढईत मोहरी, जिरे, ठेचलेला भरपूर लसूण आणि हिरवी मिरची परता.', hi: 'लहसुन और मिर्च का तड़का दें।' } },
      { step: 3, text: { en: 'Pour in besan slurry, stir continuously, cover and cook for 5 minutes until glossy.', mr: 'बेसनाचे पाणी ओतून सतत हलवा व ५ मिनिटे वाफ काढा.', hi: 'घोल डालकर पकाएं और जीरा राइस के साथ परोसें।' } }
    ],
    accompaniments: ['Jeera Bhat', 'Raw Onion', 'Mango Pickle', 'Thecha'],
    allergens: ['Dairy'],
    tips: 'Whisk besan in cold water first to prevent lumps when adding to the pan.',
    tags: ['quick', 'comfort-food', 'maharashtrian', 'everyday']
  },
  {
    id: 'gajar_halwa',
    name: {
      en: 'Shahi Gajar ka Halwa',
      mr: 'शाही गाजराचा हलवा',
      hi: 'गाजर का हलवा'
    },
    transliteration: 'Shahi Gajar ka Halwa',
    description: {
      en: 'Traditional slow-cooked dessert made with tender grated red carrots simmered in full-cream milk, pure ghee, and cardamom.',
      mr: 'किसलेले ताजे लाल गाजर दुधात आणि साजूक तुपात मंद आचेवर आटवून काजू-बदामाने सजवलेला गोड हलवा.',
      hi: 'लाल गाजर, दूध, शुद्ध घी, खोया और मेवों से बना पारंपरिक स्वादिष्ट हलवा।'
    },
    category: 'sweet',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'mild',
    prepTime: 20,
    cookTime: 35,
    difficulty: 'medium',
    servings: 6,
    cost: 110,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'carrots', name: { en: 'Red Carrots (Grated)', mr: 'किसलेले लाल गाजर', hi: 'कद्दूकस गाजर' }, amount: 500, unit: 'g', category: 'vegetables' },
      { id: 'milk', name: { en: 'Full Cream Milk', mr: 'म्हैशीचे दूध', hi: 'फुल क्रीम दूध' }, amount: 500, unit: 'ml', category: 'dairy' },
      { id: 'ghee', name: { en: 'Pure Desi Ghee', mr: 'साजूक तूप', hi: 'देसी घी' }, amount: 3, unit: 'tbsp', category: 'dairy' },
      { id: 'sugar', name: { en: 'Sugar', mr: 'साखर', hi: 'चीनी' }, amount: 0.75, unit: 'cup', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Sauté grated carrots in ghee for 5 minutes, then add full-cream milk.', mr: 'कढईत तूप गरम करून किसलेले गाजर परता व दूध घाला.', hi: 'गाजर को घी में भूनें और दूध डालें।' } },
      { step: 2, text: { en: 'Simmer on medium-low flame until milk completely evaporates (20 mins).', mr: 'मंद आचेवर दूध पूर्ण आटून जाईपर्यंत शिजवा.', hi: 'दूध सूखने तक पकाएं।' } },
      { step: 3, text: { en: 'Add sugar, remaining ghee, cardamom powder, and nuts; sauté until glossy deep red.', mr: 'साखर, साजूक तूप आणि सुकामेवा घालून हलवा चमकदार होईपर्यंत परता.', hi: 'चीनी और मेवे डालकर भूनें।' } }
    ],
    accompaniments: ['Warm Milk', 'Vanilla Ice Cream'],
    allergens: ['Dairy'],
    tips: 'Using full-cream milk gives naturally rich mawa-like texture without needing store-bought khoya.',
    tags: ['dessert', 'festive', 'winter-special', 'popular']
  }
];
