export const ADDITIONAL_RECIPES = [
  {
    id: 'upma-rava',
    name: { en: 'Maharashtrian Rava Upma (Sanjya)', mr: 'खमंग रवा उपमा / सांज्या', hi: 'सूजी उपमा' },
    transliteration: 'Rava Upma',
    description: {
      en: 'Roasted semolina cooked with mustard seeds, green chillies, ginger, crunchy cashews, and fresh curry leaves, finished with lemon juice and coriander.',
      mr: 'तुपात खमंग भाजलेला रवा, मोहरी, मिरची, आले, कढीपत्ता आणि लिंबू पिळून केलेला मऊसुत उपमा.',
      hi: 'भुनी सूजी, राई, हरी मिर्च, अदरक और काजू के तड़के से बना स्वादिष्ट और पौष्टिक उपमा।'
    },
    category: 'breakfast', mealTypes: ['breakfast', 'snack'], cuisine: 'everyday_maharashtrian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 5, cookTime: 12, difficulty: 'easy', servings: 3, cost: 45,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'suji', name: { en: 'Semolina (Rava)', mr: 'रवा', hi: 'सूजी' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onion chopped', mr: 'कांदा', hi: 'प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 2, unit: 'pieces', category: 'vegetables' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds', mr: 'मोहरी', hi: 'राई' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'ghee', name: { en: 'Ghee or oil', mr: 'तूप किंवा तेल', hi: 'घी या तेल' }, amount: 2, unit: 'tbsp', category: 'dairy' },
      { id: 'coriander', name: { en: 'Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Roast rava in 1 tbsp ghee on low flame until aromatic and sandy (do not brown). Set aside.', mr: 'रवा मंद आचेवर तुपात खमंग भाजून घ्या.', hi: 'सूजी को घी में खुशबू आने तक भून लें।' } },
      { step: 2, text: { en: 'Heat oil in a pan, add mustard seeds, cumin, green chillies, ginger, and curry leaves. Add onions and fry soft.', mr: 'तेलात मोहरी, जिरे, मिरची, आले, कढीपत्ता आणि कांदा परता.', hi: 'तेल में राई, जीरा, मिर्च, अदरक और प्याज भूनें।' } },
      { step: 3, text: { en: 'Pour 3.5 cups boiling water with salt and sugar. Slowly stream in the roasted rava while stirring constantly to avoid lumps.', mr: 'साडेतीन कप उकळते पाणी, मीठ व साखर घाला. भाजलेला रवा हळूहळू ओतून ढवळा.', hi: 'साढ़े तीन कप उबलता पानी, नमक डालकर सूजी चलाते हुए डालें ताकि गांठ न पड़े।' } },
      { step: 4, text: { en: 'Cover and steam for 3 minutes. Garnish with lemon juice, fresh coconut, and coriander.', mr: 'झाकण ठेवून ३ मिनिटे वाफ काढा. लिंबू, खोबरे आणि कोथिंबीर घाला.', hi: 'ढककर ३ मिनट भाप दें। नींबू और धनिया डालकर परोसें।' } }
    ],
    accompaniments: [{ en: 'Coconut Chutney', mr: 'ओल्या खोबऱ्याची चटणी', hi: 'नारियल चटनी' }],
    substitutions: [{ en: 'Add carrots and peas for Vegetable Upma.', mr: 'गाजर-मटार घालून व्हेज उपमा करू शकता.', hi: 'सब्जियां मिलाकर वेज उपमा बनाएं।' }],
    allergens: ['Gluten (Wheat/Rava)'],
    searchAliases: ['upma', 'उपमा', 'rava upma', 'sanjya', 'sooji upma']
  },
  {
    id: 'konkan-ghavan',
    name: { en: 'Konkani Rice Ghavan (Neer Dosa style)', mr: 'कोकणी जाळीदार घावन', hi: 'कोंकणी घावन (चावल डोसा)' },
    transliteration: 'Konkani Ghavan',
    description: {
      en: 'Lacy, feather-light Konkani crepes made simply from raw rice batter, salt, and water, instantly poured on a smoking hot iron tawa without fermentation.',
      mr: 'आंबवण्याची गरज नसलेले, फक्त तांदळाचे पीठ आणि पाण्याचे पातळ मिश्रण गरम तव्यावर टाकून केलेले जाळीदार पांढरे घावन.',
      hi: 'बिना खमीर उठाए, केवल चावल के आटे के पतले घोल से गरम तवे पर बना जालीदार मुलायम घावन।'
    },
    category: 'breakfast', mealTypes: ['breakfast', 'dinner'], cuisine: 'konkan', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 5, cookTime: 10, difficulty: 'easy', servings: 3, cost: 35,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Fine Rice Flour (Tandul Peeth)', mr: 'तांदळाचे बारीक पीठ', hi: 'चावल का आटा' }, amount: 2, unit: 'cups', category: 'grains' }
    ],
    instructions: [
      { step: 1, text: { en: 'Whisk rice flour with 3.5 cups water and salt into a watery, milk-like thin batter.', mr: 'तांदळाचे पीठ, मीठ आणि साडेतीन कप पाणी एकत्र करून दुधासारखे पातळ पीठ बनवा.', hi: 'चावल का आटा, नमक और पानी मिलाकर दूध जैसा पतला घोल बनाएं।' } },
      { step: 2, text: { en: 'Heat a cast-iron tawa (bhid) until smoking hot, wipe with an onion dipped in oil.', mr: 'लोखंडी तवा कडकडीत तापवून कांद्याने तेल लावा.', hi: 'तवा खूब गरम कर प्याज से तेल लगाएं।' } },
      { step: 3, text: { en: 'Pour a ladleful of thin batter from the edges towards center. Lacy holes will form instantly.', mr: 'पळीने कडेपासून मध्यभागापर्यंत पातळ पीठ पसरा. जाळी तयार होईल.', hi: 'कलछी से किनारों से शुरू करते हुए पतला घोल डालें। जाली बन जाएगी।' } },
      { step: 4, text: { en: 'Cover with a lid for 2 minutes. Fold into a triangle and serve soft with coconut chutney or jaggery milk.', mr: '२ मिनिटे झाकून वाफ काढा आणि घडी घालून चटणीसोबत वाढा.', hi: '२ मिनट ढककर भाप दें और मोड़कर चटनी के साथ परोसें।' } }
    ],
    accompaniments: [{ en: 'Fresh Coconut Chutney or Chana Usal', mr: 'खोबऱ्याची चटणी किंवा उसळ', hi: 'नारियल चटनी या चना उसल' }],
    substitutions: [{ en: 'Jowar flour can be added for Jowar Ghavan.', mr: 'ज्वारीचे पीठ मिसळून ज्वारीचे घावन करू शकता.', hi: 'ज्वार का आटा भी मिला सकते हैं।' }],
    allergens: [],
    searchAliases: ['ghavan', 'घावन', 'konkani ghavan', 'rice crepe', 'neer dosa']
  },
  {
    id: 'kanda-bhaji-pakoda',
    name: { en: 'Crispy Maharashtrian Kanda Bhaji (Khekda Bhaji)', mr: 'कुरकुरीत कांदा भजी (खे Ros भजी)', hi: 'कुरकुरी कांदा भजिया' },
    transliteration: 'Kanda Bhaji',
    description: {
      en: 'Crispy Maharashtrian street-style onion fritters made with thinly sliced onions, minimal besan, ajwain, green chillies, and fried to golden perfection without water.',
      mr: 'पाणी न घालता कांद्याच्या ओलसरपणावर मळलेले, ओवा आणि हिरवी मिरची घातलेली कुरकुरीत खेकडा भजी.',
      hi: 'बिना पानी मिलाए प्याज की नमी में बेसन लपेटकर तली हुई बेहद कुरकुरी कांदा भजिया।'
    },
    category: 'snack', mealTypes: ['snack', 'breakfast'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 10, cookTime: 10, difficulty: 'easy', servings: 4, cost: 50,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'onion', name: { en: 'Onions (thinly sliced length-wise)', mr: 'कांदे पातळ उभे चिरलेले', hi: 'लम्बा बारीक कटा प्याज' }, amount: 4, unit: 'medium', category: 'vegetables' },
      { id: 'besan', name: { en: 'Gram flour (Besan)', mr: 'बेसन', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'rice', name: { en: 'Rice flour (for crispiness)', mr: 'तांदळाचे पीठ', hi: 'चावल आटा' }, amount: 2, unit: 'tbsp', category: 'grains' },
      { id: 'green_chillies', name: { en: 'Green chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 3, unit: 'pieces', category: 'vegetables' },
      { id: 'turmeric', name: { en: 'Turmeric and Ajwain', mr: 'हळद आणि ओवा', hi: 'हल्दी और अजवाइन' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Mix sliced onions with salt, ajwain, turmeric, chillies, and coriander. Squeeze with hands and rest for 10 minutes so onions release natural juices.', mr: 'कांद्यात मीठ, ओवा, हळद, मिरची आणि कोथिंबीर चोळून १० मिनिटे ठेवा, जेणेकरून पाणी सुटेल.', hi: 'प्याज में नमक, अजवाइन, हल्दी, मिर्च और धनिया मिलाकर हाथ से मसलकर १० मिनट रखें।' } },
      { step: 2, text: { en: 'Sprinkle besan and rice flour over onions, tossing gently without adding any extra water so onions are just lightly coated.', mr: 'वरून बेसन व तांदळाचे पीठ भुरभुरवून एकत्र करा, अजिबात पाणी घालू नका.', hi: 'ऊपर से बेसन और चावल का आटा छिड़कें, पानी बिल्कुल न डालें।' } },
      { step: 3, text: { en: 'Drop jagged clusters into hot oil and deep fry on medium flame until crisp and golden brown on all sides.', mr: 'गरम तेलात सुटे सुटे तुकडे सोडून मध्यम आचेवर कुरकुरीत तळून घ्या.', hi: 'गरम तेल में डालकर मध्यम आंच पर सुनहरा और कुरकुरा होने तक तलें।' } }
    ],
    accompaniments: [{ en: 'Fried Green Chillies & Masala Chai', mr: 'तळलेली मिरची आणि गरम चहा', hi: 'तली मिर्च और चाय' }],
    substitutions: [{ en: 'Add crushed coriander seeds for dhaba flavour.', mr: 'अख्खे धने थोडे ठेचून घातल्यास छान चव येते.', hi: 'साबुत धनिया कूटकर मिला सकते हैं।' }],
    allergens: ['Besan (Gram flour)'],
    searchAliases: ['kanda bhaji', 'कांदा भजी', 'onion pakoda', 'khekda bhaji', 'bhajia']
  },
  {
    id: 'methi-thepla',
    name: { en: 'Gujarati Methi Thepla', mr: 'खमंग मेथी थेपला', hi: 'गुजराती मेथी थेपला' },
    transliteration: 'Methi Thepla',
    description: {
      en: 'Soft, spiced Indian flatbread made from fresh fenugreek leaves, whole wheat flour, besan, yogurt, sesame seeds, and mild spices. Travels well for days.',
      mr: 'ताजी मेथी, गव्हाचे पीठ, थोडे बेसन, दही, तीळ आणि हळद-तिखट घालून केलेले मऊसुत थेपले.',
      hi: 'ताजी मेथी, गेहूं का आटा, बेसन, दही और तिल से बने मुलायम और स्वादिष्ट थेपले।'
    },
    category: 'breakfast', mealTypes: ['breakfast', 'lunch', 'dinner'], cuisine: 'gujarati', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'mild', prepTime: 15, cookTime: 12, difficulty: 'easy', servings: 4, cost: 60,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Wheat flour', mr: 'गव्हाचे पीठ', hi: 'गेहूं का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'fenugreek', name: { en: 'Fresh Fenugreek (Methi) finely chopped', mr: 'बारीक चिरलेली मेथी', hi: 'बारीक कटी मेथी' }, amount: 1.5, unit: 'cups', category: 'vegetables' },
      { id: 'curd', name: { en: 'Yogurt / Curd', mr: 'दही', hi: 'दही' }, amount: 3, unit: 'tbsp', category: 'dairy' },
      { id: 'sesame_seeds', name: { en: 'Sesame seeds (Til)', mr: 'तीळ', hi: 'सफेद तिल' }, amount: 1, unit: 'tbsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric and Chilli powder', mr: 'हळद आणि तिखट', hi: 'हल्दी और लाल मिर्च' }, amount: 1, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Knead flour, chopped methi, curd, sesame seeds, turmeric, chilli powder, salt, and oil into a soft dough.', mr: 'पीठ, मेथी, दही, तीळ, हळद, तिखट, मीठ आणि तेल एकत्र करून मऊ कणीक मळा.', hi: 'आटा, मेथी, दही, तिल, मसाले और तेल मिलाकर नरम आटा गूंधें।' } },
      { step: 2, text: { en: 'Roll into thin flat round theplas and cook on medium flame applying oil on both sides until soft and speckled brown.', mr: 'पातळ थेपले लाटा आणि तव्यावर दोन्ही बाजूंनी तेल लावून मऊ भाजा.', hi: 'पतले थेपले बेलें और तवे पर तेल लगाकर दोनों तरफ से सेकें।' } }
    ],
    accompaniments: [{ en: 'Mango Pickle & Chilled Curd', mr: 'आंब्याचे लोणचे आणि दही', hi: 'आम का अचार और दही' }],
    substitutions: [{ en: 'Spinach or grated bottle gourd can be used instead of methi.', mr: 'मेथीऐवजी दुधी भोपळा किसून वापरू शकता.', hi: 'लौकी या पालक से भी बना सकते हैं।' }],
    allergens: ['Gluten', 'Dairy (Curd)'],
    searchAliases: ['methi thepla', 'थेपला', 'thepla', 'gujarati thepla', 'methi paratha']
  },
  {
    id: 'bhindi-masala',
    name: { en: 'Homestyle Bhindi Masala (Bhendi Bhaji)', mr: 'चमचमीत भेंडीची भाजी', hi: 'मसालेदार भिंडी' },
    transliteration: 'Bhindi Masala',
    description: {
      en: 'Tender okra sautéed crisp with onions, tomatoes, dry spices, amchur (dry mango powder), and crushed roasted peanuts. Completely non-slimy.',
      mr: 'चिकटपणा न राहता खमंग परतलेली भेंडी, कांदा, टोमॅटो, आमचूर आणि भाजलेले शेंगदाणे कूट.',
      hi: 'बिना चिपचिपाहट के कुरकुरी भुनी भिंडी, प्याज, टमाटर, अमचूर और भुनी मूंगफली के साथ।'
    },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 10, cookTime: 15, difficulty: 'easy', servings: 3, cost: 65,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'ladyfinger', name: { en: 'Okra / Bhindi (washed, dried, chopped)', mr: 'भेंडी (धुवून कोरडी करून चिरलेली)', hi: 'भिंडी (धोकर सुखाकर कटी हुई)' }, amount: 400, unit: 'g', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onion (sliced)', mr: 'कांदा उभा चिरलेला', hi: 'प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Roasted peanut powder', mr: 'शेंगदाणे कूट', hi: 'मूंगफली कूट' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'red_chilli_powder', name: { en: 'Red chilli and coriander powder', mr: 'तिखट आणि धने पूड', hi: 'लाल मिर्च और धनिया पाउडर' }, amount: 1.5, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat 2 tbsp oil. Sauté bhindi on medium-high heat for 7 minutes without covering until crisp and slime-free.', mr: 'तेलात भेंडी झाकण न ठेवता चिकटपणा जाईपर्यंत ७ मिनिटे परता.', hi: 'तेल में बिना ढके भिंडी को ७ मिनट भूनें ताकि चिपचिपाहट खत्म हो जाए।' } },
      { step: 2, text: { en: 'Push bhindi to side, add sliced onions and sauté till soft. Mix in spices, peanut powder, and salt. Cook for 3 minutes.', mr: 'कांदा, मसाले, शेंगदाणे कूट आणि मीठ घालून ३ मिनिटे छान परता.', hi: 'प्याज, मसाले, मूंगफली और नमक डालकर ३ मिनट भूनें।' } }
    ],
    accompaniments: [{ en: 'Hot Phulkas & Varan Bhat', mr: 'गरम पोळी आणि वरण-भात', hi: 'गरम रोटी और दाल-चावल' }],
    substitutions: [{ en: 'Add besan for Kurkuri Besan Bhindi.', mr: 'बेसन घालून कुरकुरी भेंडी करू शकता.', hi: 'बेसन मिलाकर कुरकुरी भिंडी बनाएं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['bhindi masala', 'भेंडी भाजी', 'okra fry', 'bhendi', 'sukhi bhindi']
  },
  {
    id: 'shrikhand-puri',
    name: { en: 'Authentic Kesar Pista Shrikhand with Puri', mr: 'केशर-पिस्ता श्रीखंड आणि टम्म पुऱ्या', hi: 'केसर पिस्ता श्रीखंड और पूरी' },
    transliteration: 'Shrikhand Puri',
    description: {
      en: 'Velvety strained hung curd dessert whipped with saffron, cardamom, and pistachios, served with golden puffed wheat puris.',
      mr: 'चक्का, साखर, केशर, वेलची आणि पिस्त्याचे तुकडे घालून तयार केलेले दाट श्रीखंड आणि गरमागरम टम्म पुऱ्या.',
      hi: 'केसर, इलायची और पिस्ता से तैयार गाढ़ा मखमली श्रीखंड, गरमागरम फूली हुई पूरियों के साथ।'
    },
    category: 'sweet', mealTypes: ['lunch', 'dinner'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 20, cookTime: 15, difficulty: 'medium', servings: 4, cost: 130,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'curd', name: { en: 'Hung Curd / Chakka', mr: 'मस्कट बांधून निथळलेले दही (चक्का)', hi: 'हंग कर्ड (चक्का)' }, amount: 2, unit: 'cups', category: 'dairy' },
      { id: 'wheat_flour', name: { en: 'Wheat flour for Puris', mr: 'गव्हाचे पीठ (पुऱ्यांसाठी)', hi: 'गेहूं का आटा (पूरी के लिए)' }, amount: 2, unit: 'cups', category: 'grains' }
    ],
    instructions: [
      { step: 1, text: { en: 'Whisk hung curd and powdered sugar through a fine sieve with saffron milk and cardamom until silky smooth. Chill.', mr: 'चक्का, साखर, केशर दूध आणि वेलची पूड गाळणीतून फेटून गुळगुळीत करा आणि थंड करा.', hi: 'चक्का, चीनी, केसर और इलायची को फेंटकर चिकना करें और ठंडा करें।' } },
      { step: 2, text: { en: 'Knead stiff dough with wheat flour and water. Roll into small discs and deep fry in hot oil until puffed golden brown.', mr: 'घट्ट कणीक मळून पुऱ्या लाटा आणि कडकडीत तेलात तळून टम्म फुगवा.', hi: 'सख्त आटा गूंधकर पूरियां बेलें और गरम तेल में फुला लें।' } }
    ],
    accompaniments: [{ en: 'Batata Bhaji & Chilled Shrikhand', mr: 'बटाटा भाजी आणि थंडगार श्रीखंड', hi: 'आलू सब्जी और ठंडा श्रीखंड' }],
    substitutions: [{ en: 'Add mango pulp to make heavenly Amrakhand.', mr: 'आंब्याचा रस घालून आम्रखंड बनवू शकता.', hi: 'आम का रस मिलाकर आम्रखंड बनाएं।' }],
    allergens: ['Dairy (Yogurt/Milk)', 'Nuts (Pistachios)'],
    searchAliases: ['shrikhand puri', 'श्रीखंड पुरी', 'kesar shrikhand', 'amrakhand', 'maharashtrian dessert']
  },
  {
    id: 'shevga-amti',
    name: { en: 'Khandeshi Shevga Bhaji (Drumstick Curry)', mr: 'खान्देशी शेवग्याच्या शेंगांची भाजी', hi: 'सहजन (ड्रमस्टिक) की सब्जी' },
    transliteration: 'Shevga Bhaji',
    description: {
      en: 'Tender drumsticks simmered in a rich, dark roasted onion-coconut kala masala gravy. A Khandeshi family favorite.',
      mr: 'कोवळ्या शेवग्याच्या शेंगा, काळ्या मसाल्याचे वाटण आणि खोबऱ्याच्या रश्श्यात शिजवलेली चवदार भाजी.',
      hi: 'मुलायम सहजन की फलियां, काले मसाले और नारियल की ग्रेवी में पकी हुई।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 10, cookTime: 20, difficulty: 'easy', servings: 4, cost: 80,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'drumstick', name: { en: 'Drumsticks cut in 2-inch pieces', mr: 'शेवग्याच्या शेंगा तुकडे', hi: 'सहजन के टुकड़े' }, amount: 3, unit: 'pieces', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'काळा मसाला', hi: 'काळा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'onion', name: { en: 'Roasted onion paste', mr: 'भाजलेला कांदा वाटण', hi: 'भुना प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'dry_coconut', name: { en: 'Roasted dry coconut', mr: 'सुके खोबरे', hi: 'सूखा नारियल' }, amount: 3, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil drumsticks in salted water for 7 minutes until tender.', mr: 'शेवग्याच्या शेंगा मीठ घातलेल्या पाण्यात ७ मिनिटे उकळून घ्या.', hi: 'सहजन को नमक वाले पानी में ७ मिनट उबालें।' } },
      { step: 2, text: { en: 'Sauté onion-coconut paste in oil till oil releases. Add kala masala and boiled drumsticks with water. Simmer 10 minutes.', mr: 'कांदा-खोबरे वाटण परतून काळा मसाला आणि शेंगा घालून १० मिनिटे रस्सा उकळा.', hi: 'पेस्ट भूनकर काळा मसाला और सहजन डालकर १० मिनट उबालें।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri and Rice', mr: 'ज्वारीची भाकरी व भात', hi: 'ज्वार भाकरी और चावल' }],
    substitutions: [{ en: 'Potatoes can be added with drumsticks.', mr: 'बटाट्याचे तुकडेही शेंगांसोबत घालू शकता.', hi: 'आलू भी साथ में डाल सकते हैं।' }],
    allergens: [],
    searchAliases: ['shevga bhaji', 'शेवगा भाजी', 'drumstick curry', 'sahjan ki sabzi', 'shevgyachya shenga']
  },
  {
    id: 'kakdi-koshimbir',
    name: { en: 'Khamang Kakdi (Maharashtrian Cucumber Salad)', mr: 'खमंग काकडी कोशिंबीर', hi: 'खमंग ककड़ी (खीरे का सलाद)' },
    transliteration: 'Khamang Kakdi',
    description: {
      en: 'Refreshing crunchy cucumber salad with roasted crushed peanuts, fresh grated coconut, green chillies, lemon, and a sizzling mustard-hing tempering.',
      mr: 'बारीक चिरलेली काकडी, खमंग शेंगदाणे कूट, ओले खोबरे, कोथिंबीर, लिंबू आणि मोहरी-हिंगाची खमंग चरचरीत फोडणी.',
      hi: 'बारीक कटा खीरा, भुनी मूंगफली का कूट, कसा नारियल, नींबू और हींग-राई के तड़के वाला पारंपरिक सलाद।'
    },
    category: 'accompaniment', mealTypes: ['lunch', 'dinner'], cuisine: 'everyday_maharashtrian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 2, difficulty: 'easy', servings: 4, cost: 40,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'peanuts', name: { en: 'Roasted peanuts coarse powder', mr: 'भाजलेले शेंगदाणे कूट', hi: 'भुनी मूंगफली' }, amount: 4, unit: 'tbsp', category: 'spices' },
      { id: 'fresh_coconut', name: { en: 'Fresh grated coconut', mr: 'ओले खोबरे', hi: 'कसा नारियल' }, amount: 3, unit: 'tbsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds & Hing for tadka', mr: 'मोहरी व हिंग फोडणीसाठी', hi: 'राई और हींग' }, amount: 1, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Finely chop cucumber, mix with roasted peanut powder, fresh coconut, coriander, green chillies, salt, and lemon juice.', mr: 'काकडीत शेंगदाणे कूट, खोबरे, कोथिंबीर, मिरची, मीठ आणि लिंबू रस घाला.', hi: 'खीरे में मूंगफली, नारियल, धनिया, मिर्च, नमक और नींबू मिलाएं।' } },
      { step: 2, text: { en: 'Heat 1 tsp oil with mustard seeds and hing; pour the hot tadka over the salad. Mix gently just before serving.', mr: 'मोहरी-हिंगाची खमंग फोडणी करून काकडीवर ओता आणि जेवताना मिसळा.', hi: 'राई-हींग का तड़का लगाएं और परोसते समय मिलाएं।' } }
    ],
    accompaniments: [{ en: 'Varan Bhat or Puran Poli', mr: 'वरण भात किंवा पुरणपोळी', hi: 'दाल चावल या पूरनपोली' }],
    substitutions: [{ en: 'Grated carrots or soaked moong dal can be mixed in.', mr: 'किसलेले गाजर किंवा भिजवलेली मूग डाळही घालू शकता.', hi: 'गाजर या भीगी मूंग दाल मिला सकते हैं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['koshimbir', 'कोशिंबीर', 'khamang kakdi', 'cucumber salad', 'maharashtrian salad']
  }
];
