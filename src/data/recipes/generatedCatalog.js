// Additional structured authentic recipes to bring the catalog to 100+ items
export const GENERATED_CATALOG_RECIPES = [
  // BREAKFAST
  {
    id: 'batata-poha',
    name: { en: 'Maharashtrian Batata Poha', mr: 'खमंग बटाटा पोहे', hi: 'आलू पोहा' },
    transliteration: 'Batata Poha',
    description: { en: 'Soft flattened rice with tender golden fried potatoes, crunchy peanuts, mustard seeds, and fresh coriander.', mr: 'तळलेले बटाट्याचे तुकडे, शेंगदाणे, मोहरीची खमंग फोडणी आणि कोथिंबीर घातलेले बटाटा पोहे.', hi: 'सुनहरे आलू के टुकड़े, मूंगफली और राई के तड़के वाला पोहा।' },
    category: 'breakfast', mealTypes: ['breakfast', 'snack'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 10, difficulty: 'easy', servings: 3, cost: 45,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'poha', name: { en: 'Poha', mr: 'पोहे', hi: 'पोहा' }, amount: 2.5, unit: 'cups', category: 'grains' },
      { id: 'potato', name: { en: 'Potato diced', mr: 'बारीक बटाटा तुकडे', hi: 'आलू टुकड़े' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Peanuts', mr: 'शेंगदाणे', hi: 'मूंगफली' }, amount: 3, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Fry diced potatoes till tender in oil with mustard seeds, mix in rinsed poha, turmeric, salt, and steam for 3 mins.', mr: 'बटाटा तेलात परतून मऊ करा, पोहे, हळद व मीठ घालून वाफ काढा.', hi: 'आलू भूनें, पोहा, हल्दी व नमक डालकर भाप दें।' } }],
    accompaniments: [{ en: 'Chai and Lemon', mr: 'चहा आणि लिंबू', hi: 'चाय और नींबू' }], substitutions: [], allergens: ['Peanuts'],
    searchAliases: ['batata poha', 'बटाटा पोहे', 'aloo poha', 'pohe']
  },
  {
    id: 'moong-dal-chilla',
    name: { en: 'High-Protein Moong Dal Chilla', mr: 'पौष्टिक मूग डाळ धिरडे', hi: 'मूंग दाल चीला' },
    transliteration: 'Moong Dal Chilla',
    description: { en: 'Golden savory pancakes made from soaked ground yellow moong dal, ginger, cumin, and fresh coriander.', mr: 'भिजवलेली मूग डाळ, आले, जिरे आणि कोथिंबीर बारीक वाटून केलेले पौष्टिक धिरडे.', hi: 'पिसी मूंग दाल, अदरक और जीरे से बना पौष्टिक और कुरकुरा चीला।' },
    category: 'breakfast', mealTypes: ['breakfast', 'dinner'], cuisine: 'pan_indian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 10, difficulty: 'easy', servings: 3, cost: 50,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'moong_dal', name: { en: 'Yellow Moong Dal (soaked)', mr: 'भिजवलेली मूग डाळ', hi: 'भीगी मूंग दाल' }, amount: 1.5, unit: 'cups', category: 'pulses' },
      { id: 'ginger', name: { en: 'Ginger and green chillies', mr: 'आले व मिरची', hi: 'अदरक व मिर्च' }, amount: 1, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [{ step: 1, text: { en: 'Grind soaked moong dal with ginger, chillies, salt into batter. Spread thin on tawa, drizzle oil, cook crisp on both sides.', mr: 'डाळ आले-मिरचीसह वाटून तव्यावर पातळ पसरवून कुरकुरीत भाजा.', hi: 'दाल पीसकर तवे पर फैलाएं और तेल लगाकर कुरकुरा सेकें।' } }],
    accompaniments: [{ en: 'Mint Chutney', mr: 'पुदिना चटणी', hi: 'पुदीना चटनी' }], substitutions: [], allergens: [],
    searchAliases: ['moong dal chilla', 'मूग डाळ धिरडे', 'moong chilla', 'healthy crepe']
  },
  {
    id: 'oats-porridge-indian',
    name: { en: 'Masala Oats Porridge', mr: 'मसाला ओट्स लापशी', hi: 'मसाला ओट्स' },
    transliteration: 'Masala Oats',
    description: { en: 'Quick rolled oats cooked with chopped onions, tomatoes, green peas, carrots, and mild Indian spices.', mr: 'कांदा, टोमॅटो, मटार, गाजर आणि हळदीची खमंग फोडणी दिलेले झटपट पौष्टिक मसाला ओट्स.', hi: 'सब्जियों और मसालों के साथ पकाए गए पौष्टिक मसाला ओट्स।' },
    category: 'breakfast', mealTypes: ['breakfast', 'dinner'], cuisine: 'pan_indian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'mild', prepTime: 5, cookTime: 8, difficulty: 'easy', servings: 2, cost: 40,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'oats', name: { en: 'Rolled Oats', mr: 'ओट्स', hi: 'ओट्स' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'onion', name: { en: 'Onion chopped', mr: 'कांदा', hi: 'प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 1, unit: 'medium', category: 'vegetables' }
    ],
    instructions: [{ step: 1, text: { en: 'Sauté onion and tomato in 1 tsp oil, add oats, turmeric, salt, 2.5 cups water, and simmer for 5 minutes until creamy.', mr: 'कांदा-टोमॅटो परतून ओट्स, हळद, मीठ व पाणी घालून ५ मिनिटे शिजवा.', hi: 'सब्जियां भूनकर ओट्स और पानी डालकर ५ मिनट पकाएं।' } }],
    accompaniments: [], substitutions: [], allergens: [],
    searchAliases: ['masala oats', 'मसाला ओट्स', 'oats porridge', 'healthy breakfast']
  },
  {
    id: 'masala-dosa',
    name: { en: 'Crispy Masala Dosa', mr: 'कुरकुरीत मसाला डोसा', hi: 'मसाला डोसा' },
    transliteration: 'Masala Dosa',
    description: { en: 'Golden crispy fermented rice and lentil crepe stuffed with aromatic spiced mashed potato masala, served with coconut chutney and sambar.',
      mr: 'तव्यावर कडक भाजलेला जाळीदार डोसा आणि आत भरलेली पिवळीधमक बटाट्याची भाजी.', hi: 'कुरकुरा डोसा जिसके अंदर मसालेदार आलू का भरावन होता है।' },
    category: 'breakfast', mealTypes: ['breakfast', 'dinner'], cuisine: 'south_indian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'medium', prepTime: 10, cookTime: 15, difficulty: 'medium', servings: 3, cost: 70,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Dosa batter', mr: 'डोसा पीठ', hi: 'डोसा बैटर' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'potato', name: { en: 'Potato masala', mr: 'बटाटा भाजी', hi: 'आलू मसाला' }, amount: 1.5, unit: 'cups', category: 'vegetables' }
    ],
    instructions: [{ step: 1, text: { en: 'Spread batter on hot tawa into a large thin circle. Drizzle oil/butter, cook till golden-brown, place potato masala in center, fold and serve.', mr: 'तव्यावर डोसा पातळ पसरा, तेल सोडून कुरकुरीत भाजा, बटाटा भाजी भरून घडी घाला.', hi: 'तवे पर डोसा फैलाएं, बटर लगाकर कुरकुरा सेकें, आलू भरकर मोड़ें।' } }],
    accompaniments: [{ en: 'Coconut Chutney & Sambar', mr: 'खोबरे चटणी व सांबार', hi: 'नारियल चटनी और सांभर' }], substitutions: [], allergens: [],
    searchAliases: ['masala dosa', 'मसाला डोसा', 'dosa', 'crispy dosa']
  },
  {
    id: 'methi-paratha',
    name: { en: 'Punjabi Methi Paratha with Butter', mr: 'खमंग मेथी पराठा आणि लोणी', hi: 'मेथी पराठा' },
    transliteration: 'Methi Paratha',
    description: { en: 'Whole wheat flatbread stuffed or kneaded with fresh fenugreek leaves, ajwain, green chillies, cooked with pure ghee.', mr: 'ताजी मेथी, ओवा, तिखट घालून साजूक तुपात खमंग भाजलेला पौष्टिक मेथी पराठा.', hi: 'ताजी मेथी और अजवाइन से बना पौष्टिक और खस्ता मेथी पराठा।' },
    category: 'breakfast', mealTypes: ['breakfast', 'lunch', 'dinner'], cuisine: 'pan_indian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 12, difficulty: 'easy', servings: 3, cost: 55,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Wheat flour', mr: 'गव्हाचे पीठ', hi: 'गेहूं का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'fenugreek', name: { en: 'Fresh Methi leaves', mr: 'ताजी मेथी', hi: 'ताजी मेथी' }, amount: 1.5, unit: 'cups', category: 'vegetables' }
    ],
    instructions: [{ step: 1, text: { en: 'Knead flour with chopped methi, ajwain, salt, and water. Roll into triangles and roast on tawa applying ghee until golden.', mr: 'कणकेत मेथी व ओवा मळून त्रिकोणी पराठे तुपात खरपूस भाजा.', hi: 'आटे में मेथी गूंधकर पराठे बनाएं और घी में सेकें।' } }],
    accompaniments: [{ en: 'Curd and Pickle', mr: 'दही आणि लोणचे', hi: 'दही और अचार' }], substitutions: [], allergens: ['Gluten'],
    searchAliases: ['methi paratha', 'मेथी पराठा', 'fenugreek roti']
  },
  {
    id: 'batata-bhaji-pav',
    name: { en: 'Mumbai Batata Vada Pav', mr: 'अस्सल मुंबई वडापाव', hi: 'मुंबई वड़ा पाव' },
    transliteration: 'Vada Pav',
    description: { en: 'Golden fried spiced mashed potato dumpling (vada) inside fresh pav slathered with sweet tamarind chutney, green chilli thecha, and dry garlic chutney.', mr: 'गरमागरम बटाटा वडा, लादी पाव, तिखट हिरवी मिरची आणि सुक्या लसणाची चटणी.', hi: 'मसालेदार आलू का वड़ा, नरम पाव, तीखी सूखी लहसुन की चटनी और तली मिर्च।' },
    category: 'snack', mealTypes: ['snack', 'breakfast'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 15, cookTime: 15, difficulty: 'medium', servings: 4, cost: 60,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'potato', name: { en: 'Boiled mashed potatoes', mr: 'उकडलेले बटाटे', hi: 'उबले आलू' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'besan', name: { en: 'Besan for batter', mr: 'बेसन', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'bread', name: { en: 'Ladi Pav', mr: 'लादी पाव', hi: 'पाव' }, amount: 4, unit: 'pieces', category: 'grains' }
    ],
    instructions: [{ step: 1, text: { en: 'Tempered potato balls dipped in turmeric-besan batter, deep fried golden, and served in pav with garlic chutney.', mr: 'बटाट्याचे गोळे बेसनात बुडवून तेलात तळून पावात लसूण चटणीसह वाढा.', hi: 'आलू के गोले बेसन में डुबोकर तलें और पाव में लहसुन चटनी लगाकर खाएं।' } }],
    accompaniments: [{ en: 'Dry Garlic Chutney & Fried Chillies', mr: 'लसूण चटणी व तळलेली मिरची', hi: 'लहसुन चटनी और तली मिर्च' }], substitutions: [], allergens: ['Besan', 'Gluten'],
    searchAliases: ['vada pav', 'वडापाव', 'batata vada', 'bombay burger']
  },

  // LUNCH
  {
    id: 'khandeshi-vange-shev-bhaji',
    name: { en: 'Khandeshi Vange-Shev Bhaji Combination', mr: 'खान्देशी वांगे-शेव रस्सा भाजी', hi: 'खान्देशी बैंगन-शेव भाजी' },
    transliteration: 'Vange Shev Bhaji',
    description: { en: 'A beloved regional fusion of tender Khandeshi green brinjals cooked in kala masala gravy, topped with spicy thick shev before serving.', mr: 'काळ्या मसाल्याच्या रश्श्यात शिजलेली कोवळी वांगी आणि जेवताना वरून घातलेली कुरकुरीत तिखट शेव.', hi: 'काले मसाले में पके बैंगन के ऊपर परोसते समय तीखी मोटी शेव।' },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 10, cookTime: 20, difficulty: 'easy', servings: 4, cost: 95,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'brinjal', name: { en: 'Brinjal pieces', mr: 'वांगी फोडी', hi: 'बैंगन' }, amount: 300, unit: 'g', category: 'vegetables' },
      { id: 'shev', name: { en: 'Spicy thick Besan Shev', mr: 'तिखट जाड शेव', hi: 'तीखी शेव' }, amount: 100, unit: 'g', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'काळा मसाला', hi: 'काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Cook brinjals in roasted onion-coconut kala masala gravy till tender. Ladle into bowls and top with crispy shev.', mr: 'कांदा-खोबरे वाटणात वांगी शिजवून वरून शेव घालून गरमागरम वाढा.', hi: 'मसाले में बैंगन पकाएं और ऊपर से शेव डालकर परोसें।' } }],
    accompaniments: [{ en: 'Jowar Bhakri', mr: 'ज्वारीची भाकरी', hi: 'ज्वार भाकरी' }], substitutions: [], allergens: ['Besan'],
    searchAliases: ['vange shev bhaji', 'वांगे शेव भाजी', 'khandeshi shev']
  },
  {
    id: 'vangi-bhat',
    name: { en: 'Maharashtrian Vangi Bhat', mr: 'खमंग वांगी भात', hi: 'वांगी भात (बैंगन चावल)' },
    transliteration: 'Vangi Bhat',
    description: { en: 'Spiced rice cooked with tender baby brinjals, freshly roasted goda masala, peanuts, and grated coconut.', mr: 'लहान वांग्यांचे तुकडे, सुवासिक आंबेमोहर तांदूळ, गोडा मसाला आणि शेंगदाणे घालून केलेला चवदार वांगी भात.', hi: 'बैंगन, खड़े मसालों, गोडा मसाला और चावल से बना पारंपरिक व्यंजन।' },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'traditional', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 15, cookTime: 20, difficulty: 'medium', servings: 4, cost: 85,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Ambemohar or Basmati rice', mr: 'तांदूळ', hi: 'चावल' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'brinjal', name: { en: 'Small brinjals sliced', mr: 'वांग्याचे काप', hi: 'बैंगन के टुकड़े' }, amount: 250, unit: 'g', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Goda Masala', mr: 'गोडा मसाला', hi: 'गोडा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Sauté brinjals with goda masala in ghee, add soaked rice, hot water, and steam covered for 15 minutes till fragrant.', mr: 'तुपात वांगी व मसाला परतून तांदूळ व पाणी घालून १५ मिनिटे वाफ काढा.', hi: 'घी में बैंगन और मसाला भूनकर चावल और पानी डालकर १५ मिनट दम दें।' } }],
    accompaniments: [{ en: 'Cucumber Raita', mr: 'काकडी रायता', hi: 'खीरा रायता' }], substitutions: [], allergens: ['Dairy (Ghee)'],
    searchAliases: ['vangi bhat', 'वांगी भात', 'brinjal rice', 'vange bhat']
  },
  {
    id: 'kadhi-khichdi',
    name: { en: 'Gujarati Kadhi Khichdi', mr: 'खमंग कढी आणि मूग डाळ खिचडी', hi: 'कढ़ी-खिचड़ी' },
    transliteration: 'Kadhi Khichdi',
    description: { en: 'Sweet and tangy spiced yogurt-besan soup tempered with curry leaves and mustard, paired with steaming moong dal khichdi.', mr: 'दही, बेसन, आले-मिरची आणि गुळाची आंबट-गोड कढी; सोबत गरमागरम मूग डाळ खिचडी.', hi: 'खट्टी-मीठी कढ़ी और गरमागरम मूंग दाल खिचड़ी का आरामदायक संयोजन।' },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'gujarati', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'mild', prepTime: 10, cookTime: 18, difficulty: 'easy', servings: 4, cost: 75,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'curd', name: { en: 'Yogurt / Curd', mr: 'दही', hi: 'दही' }, amount: 1.5, unit: 'cups', category: 'dairy' },
      { id: 'besan', name: { en: 'Besan (Gram flour)', mr: 'बेसन', hi: 'बेसन' }, amount: 2, unit: 'tbsp', category: 'grains' },
      { id: 'rice', name: { en: 'Rice for Khichdi', mr: 'तांदूळ', hi: 'चावल' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'moong_dal', name: { en: 'Moong dal', mr: 'मूग डाळ', hi: 'मूंग दाल' }, amount: 0.5, unit: 'cup', category: 'pulses' }
    ],
    instructions: [{ step: 1, text: { en: 'Simmer whisked curd, besan, water, ginger, green chillies, jaggery for 10 mins. Serve over piping hot moong dal khichdi.', mr: 'दही व बेसन एकत्र उकळून फोडणी द्या आणि गरमागरम खिचडीवर वाढा.', hi: 'दही और बेसन को मसालों के साथ उबालकर खिचड़ी के साथ परोसें।' } }],
    accompaniments: [{ en: 'Roasted Papad', mr: 'भाजलेला पापड', hi: 'पापड़' }], substitutions: [], allergens: ['Dairy (Curd)', 'Besan'],
    searchAliases: ['kadhi khichdi', 'कढी खिचडी', 'gujarati kadhi', 'comfort meal']
  },
  {
    id: 'aloo-gobi-matar',
    name: { en: 'Dhaba Aloo Gobi Matar', mr: 'सुकी आलू गोबी मटार', hi: 'आलू गोभी मटर' },
    transliteration: 'Aloo Gobi Matar',
    description: { en: 'Crispy pan-roasted cauliflower florets, golden potatoes, and sweet green peas tossed with ginger, cumin, and dry mango powder.', mr: 'फ्लॉवर, बटाटे आणि मटार एकत्र करून खमंग मसाल्यांमध्ये परतलेली सुकी भाजी.', hi: 'फूलगोभी, आलू और हरी मटर को मसालों में भूनकर बनाई गई सूखी सब्जी।' },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'north_indian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'medium', prepTime: 10, cookTime: 15, difficulty: 'easy', servings: 4, cost: 70,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'cauliflower', name: { en: 'Cauliflower', mr: 'फ्लॉवर', hi: 'फूलगोभी' }, amount: 350, unit: 'g', category: 'vegetables' },
      { id: 'potato', name: { en: 'Potatoes cubed', mr: 'बटाटा', hi: 'आलू' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'green_peas', name: { en: 'Green peas', mr: 'मटार', hi: 'मटर' }, amount: 0.5, unit: 'cup', category: 'vegetables' }
    ],
    instructions: [{ step: 1, text: { en: 'Sauté ginger, cumin, add cauliflower and potatoes, cover and roast on low flame for 12 minutes till tender and crisp.', mr: 'आले-जिऱ्यात भाजी झाकून मंद आचेवर १२ मिनिटे कुरकुरीत होईपर्यंत शिजवा.', hi: 'अदरक-जीरे में सब्जियां डालकर धीमी आंच पर १२ मिनट भूनें।' } }],
    accompaniments: [{ en: 'Hot Phulkas & Dal', mr: 'गरम पोळी आणि डाळ', hi: 'रोटी और दाल' }], substitutions: [], allergens: [],
    searchAliases: ['aloo gobi', 'आलू गोबी', 'cauliflower potato', 'dry veg']
  },
  {
    id: 'dal-palak',
    name: { en: 'Nutritious Dal Palak', mr: 'पौष्टिक डाळ पालक', hi: 'दाल पालक' },
    transliteration: 'Dal Palak',
    description: { en: 'Yellow toor and moong lentils simmered with chopped fresh spinach, garlic, tomatoes, and cumin ghee tadka.', mr: 'तूर व मूग डाळ, बारीक चिरलेला पालक, लसूण आणि तुपाच्या खमंग फोडणीत केलेली पौष्टिक डाळ.', hi: 'अरहर-मूंग दाल और ताजे पालक को लहसुन व हींग के तड़के में पकाया गया।' },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'pan_indian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 15, difficulty: 'easy', servings: 4, cost: 65,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'toor_dal', name: { en: 'Toor dal', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'spinach', name: { en: 'Spinach chopped', mr: 'चिरलेला पालक', hi: 'कटा पालक' }, amount: 2, unit: 'cups', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण', hi: 'लहसुन' }, amount: 8, unit: 'cloves', category: 'vegetables' }
    ],
    instructions: [{ step: 1, text: { en: 'Pressure cook dal and spinach together, whisk smooth. Temper garlic and cumin in ghee and pour over.', mr: 'डाळ व पालक शिजवून लसूण-जिऱ्याची खमंग तुपाची फोडणी द्या.', hi: 'दाल और पालक उबालकर लहसुन-जीरे का घी में तड़का लगाएं।' } }],
    accompaniments: [{ en: 'Steamed Rice with Ghee', mr: 'भात आणि तूप', hi: 'चावल और घी' }], substitutions: [], allergens: ['Dairy (Ghee)'],
    searchAliases: ['dal palak', 'डाळ पालक', 'spinach dal', 'healthy dal']
  },
  {
    id: 'sev-tamatar',
    name: { en: 'Dhaba Sev Tamatar Ki Sabzi', mr: 'ढाबा स्टाईल शेव टोमॅटो भाजी', hi: 'सेव टमाटर की सब्जी' },
    transliteration: 'Sev Tamatar',
    description: { en: 'Tangy and spicy sweet tomato gravy simmered with ginger, chillies, and topped with crispy thick besan ratlami shev.', mr: 'आंबट-गोड टोमॅटोची खमंग ग्रेव्ही आणि वरून घातलेली तिखट जाड शेव; १० मिनिटांत तयार होणारी भाजी.', hi: 'टमाटर की तीखी-मीठी ग्रेवी और ऊपर से डाली गई कुरकुरी बेसन सेव।' },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'pan_indian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'medium', prepTime: 5, cookTime: 10, difficulty: 'easy', servings: 3, cost: 60,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'tomato', name: { en: 'Tomatoes chopped', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 4, unit: 'medium', category: 'vegetables' },
      { id: 'shev', name: { en: 'Thick spicy Sev', mr: 'तिखट शेव', hi: 'तीखी सेव' }, amount: 1, unit: 'cup', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Sauté cumin, ginger, chopped tomatoes in oil till soft. Add spices, 1 cup water, simmer 5 mins, add sev right before serving.', mr: 'टोमॅटो तेलात परतून मसाले व पाणी उकळा, जेवताना शेव घालून वाढा.', hi: 'टमाटर को मसालों में भूनकर पानी उबालें और परोसते समय सेव डालें।' } }],
    accompaniments: [{ en: 'Hot Phulkas or Paratha', mr: 'गरम पोळी किंवा पराठा', hi: 'रोटी या पराठा' }], substitutions: [], allergens: ['Besan'],
    searchAliases: ['sev tamatar', 'शेव टोमॅटो', 'shev tomato', 'quick sabzi']
  },
  {
    id: 'malvani-fish-curry',
    name: { en: 'Authentic Malvani Fish Curry', mr: 'अस्सल मालवणी सुरमई रस्सा', hi: 'मालवणी मछली करी' },
    transliteration: 'Malvani Fish Curry',
    description: { en: 'Fresh fish steaks simmered in freshly ground coconut, spicy Malvani masala, triphala, and tangy kokum gravy.', mr: 'सुरमई मासा, ओले खोबरे, तिरफळ आणि अस्सल मालवणी मसाल्याच्या तांबूस रश्श्यात शिजवलेला चवदार माशांचा रस्सा.', hi: 'ताजी मछली, नारियल, मालवणी मसाला और खट्टे कोकम में बनी तीखी करी।' },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'konkan', dietary: 'non-veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 15, cookTime: 15, difficulty: 'medium', servings: 4, cost: 360,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'fish', name: { en: 'Surmai or Pomfret steaks', mr: 'सुरमई किंवा पापलेटचे तुकडे', hi: 'सुरमई या पॉम्फ्रेट' }, amount: 500, unit: 'g', category: 'protein' },
      { id: 'fresh_coconut', name: { en: 'Fresh coconut grated', mr: 'ओले खोबरे', hi: 'ताजा नारियल' }, amount: 1, unit: 'cup', category: 'spices' },
      { id: 'tamarind', name: { en: 'Kokum petals', mr: 'कोकम पाकळ्या', hi: 'कोकम' }, amount: 5, unit: 'pieces', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Grind coconut, chillies, garlic to paste. Boil with Malvani masala and kokum. Drop fish steaks and gently simmer for 6 minutes.', mr: 'खोबऱ्याचे वाटण, मालवणी मसाला व कोकम उकळून मासे सोडा आणि ६ मिनिटे मंद आचेवर शिजवा.', hi: 'नारियल पेस्ट, मसाला और कोकम उबालकर मछली डालें और ६ मिनट पकाएं।' } }],
    accompaniments: [{ en: 'Steamed Rice & Solkadhi', mr: 'भात आणि सोलकढी', hi: 'चावल और सोलकढ़ी' }], substitutions: [], allergens: ['Fish / Seafood'],
    searchAliases: ['malvani fish curry', 'मालवणी रस्सा', 'surmai rassa', 'konkan fish']
  },

  // DINNER
  {
    id: 'dudhi-chana-dal-bhaji',
    name: { en: 'Dudhi Chana Dal Bhaji (Lauki Chana Dal)', mr: 'दुधी भोपळा आणि चणा डाळ भाजी', hi: 'लौकी चना दाल की सब्जी' },
    transliteration: 'Dudhi Chana Dal',
    description: { en: 'Bottle gourd cubes cooked with soaked Bengal gram (chana dal), tomatoes, turmeric, and cumin tempering. Healthy everyday family food.', mr: 'दुधी भोपळा, भिजवलेली चणा डाळ, टोमॅटो आणि जिऱ्याची फोडणी देऊन केलेली सात्विक भाजी.', hi: 'लौकी और चना दाल को हल्के मसालों में पकाकर बनाई गई पौष्टिक सब्जी।' },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 15, difficulty: 'easy', servings: 4, cost: 55,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'bottle_gourd', name: { en: 'Bottle gourd (peeled and diced)', mr: 'दुधी भोपळा तुकडे', hi: 'लौकी के टुकड़े' }, amount: 400, unit: 'g', category: 'vegetables' },
      { id: 'chana_dal', name: { en: 'Chana dal (soaked 2 hrs)', mr: 'भिजवलेली चणा डाळ', hi: 'भीगी चना दाल' }, amount: 0.5, unit: 'cup', category: 'pulses' }
    ],
    instructions: [{ step: 1, text: { en: 'Cook soaked chana dal and diced bottle gourd in cooker with turmeric, tomato, and water for 2 whistles. Temper with mustard and cumin.', mr: 'कुकरमध्ये डाळ व दुधी शिजवून मोहरी-जिऱ्याची खमंग फोडणी द्या.', hi: 'कुकर में दाल और लौकी को २ सीटी तक पकाकर राई-जीरे का तड़का लगाएं।' } }],
    accompaniments: [{ en: 'Hot Phulkas & Salad', mr: 'गरम पोळी आणि कोशिंबीर', hi: 'रोटी और सलाद' }], substitutions: [], allergens: ['Pulses'],
    searchAliases: ['dudhi bhaji', 'दुधी भाजी', 'lauki chana dal', 'bottle gourd']
  },
  {
    id: 'vegetable-dum-biryani',
    name: { en: 'Hyderabadi Style Vegetable Dum Biryani', mr: 'शाही व्हेज दम बिर्याणी', hi: 'शाही वेज दम बिरयानी' },
    transliteration: 'Veg Dum Biryani',
    description: { en: 'Fragrant aged basmati rice layered with spiced marinated vegetables, saffron milk, fried golden onions (birista), and mint, slow cooked on dum.', mr: 'केशरी दूध, तळलेला कांदा, पुदिना आणि खमंग मसाल्यांमध्ये वाफवलेला सुगंधी व्हेज दम बिर्याणी.', hi: 'केसर, तली प्याज, पुदीने और मसालों में दम पर पकी स्वादिष्ट वेज बिरयानी।' },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'pan_indian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'medium', prepTime: 20, cookTime: 30, difficulty: 'hard', servings: 4, cost: 160,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Basmati Rice', mr: 'बासमती तांदूळ', hi: 'बासमती चावल' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'green_peas', name: { en: 'Mixed vegetables (peas, carrots, potatoes)', mr: 'मिश्र भाज्या', hi: 'मिक्स सब्जियां' }, amount: 2, unit: 'cups', category: 'vegetables' },
      { id: 'curd', name: { en: 'Yogurt for marinade', mr: 'दही', hi: 'दही' }, amount: 0.5, unit: 'cup', category: 'dairy' }
    ],
    instructions: [{ step: 1, text: { en: 'Layer 70% cooked basmati rice over cooked spiced vegetables, sprinkle fried onions, mint, saffron, seal tight and cook on low flame (dum) for 20 mins.', mr: 'भात आणि भाजीचे थर देऊन कांदा व पुदिना घालून मंद आचेवर २० मिनिटे दम द्या.', hi: 'चावल और सब्जी की परत लगाकर धीमी आंच पर २० मिनट दम दें।' } }],
    accompaniments: [{ en: 'Burani or Cucumber Raita', mr: 'रायता', hi: 'रायता' }], substitutions: [], allergens: ['Dairy'],
    searchAliases: ['veg biryani', 'व्हेज बिर्याणी', 'dum biryani', 'vegetable rice']
  },
  {
    id: 'khandeshi-gavran-kombadi-sukka',
    name: { en: 'Khandeshi Gavran Chicken Sukka', mr: 'खान्देशी गावठी चिकन सुक्का', hi: 'खान्देशी देसी चिकन सुक्का' },
    transliteration: 'Gavran Chicken Sukka',
    description: { en: 'Dry, spicy country chicken roasted in toasted coconut, kala masala, caramelized onions, and garlic, served with hot Jowar Bhakri.', mr: 'कोरडा, खमंग भाजलेला गावठी कोंबडीचा सुक्का; भरपूर लसूण, कांदा आणि अस्सल काळ्या मसाल्यात परतलेला.', hi: 'सूखे भुने नारियल, काले मसाले और भरपूर लहसुन में भुना हुआ तीखा देसी चिकन।' },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'non-veg',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 15, cookTime: 30, difficulty: 'medium', servings: 4, cost: 310,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', name: { en: 'Country Chicken pieces', mr: 'गावठी चिकन', hi: 'देसी चिकन' }, amount: 500, unit: 'g', category: 'protein' },
      { id: 'dry_coconut', name: { en: 'Dry coconut roasted', mr: 'भाजलेले सुके खोबरे', hi: 'भुना सूखा नारियल' }, amount: 50, unit: 'g', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'काळा मसाला', hi: 'काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Boil chicken tender. In a pan, roast sliced onions, dry coconut, and kala masala. Toss boiled chicken till dry and coated with dark masala.', mr: 'चिकन शिजवून तेलात कांदा-खोबरे व काळा मसाल्यात कोरडे होईपर्यंत परता.', hi: 'चिकन उबालकर भुने मसाले में सूखा होने तक अच्छी तरह भूनें।' } }],
    accompaniments: [{ en: 'Jowar Bhakri & Chicken Rassa', mr: 'ज्वारीची भाकरी व रस्सा', hi: 'ज्वार भाकरी और रस्सा' }], substitutions: [], allergens: ['Poultry'],
    searchAliases: ['chicken sukka', 'चिकन सुक्का', 'khandeshi sukka', 'gavran sukka']
  },
  {
    id: 'dal-makhani',
    name: { en: 'Slow-Cooked Punjabi Dal Makhani', mr: 'रेस्टॉरंट स्टाईल दाल मखनी', hi: 'दाल मखनी' },
    transliteration: 'Dal Makhani',
    description: { en: 'Black urad lentils and kidney beans slow-simmered overnight with butter, cream, ginger, and Kashmiri red chillies for an unctuous velvety texture.', mr: 'काळे उडीद आणि राजमा बटर, साय आणि टोमॅटो प्युरीसह मंद आचेवर घट्ट शिजवलेली मखमली दाल मखनी.', hi: 'काली उड़द और राजमा को मक्खन, मलाई और टमाटर की प्यूरी में धीमी आंच पर पकाया गया।' },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'north_indian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'mild', prepTime: 15, cookTime: 40, difficulty: 'medium', servings: 4, cost: 130,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'urad_dal', name: { en: 'Whole black urad dal', mr: 'अख्खे काळे उडीद', hi: 'साबुत काली उड़द' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'rajma', name: { en: 'Rajma', mr: 'राजमा', hi: 'राजमा' }, amount: 0.25, unit: 'cup', category: 'pulses' },
      { id: 'ghee', name: { en: 'Butter and Cream', mr: 'बटर व साय', hi: 'मक्खन और मलाई' }, amount: 4, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [{ step: 1, text: { en: 'Cook urad dal and rajma until soft. Simmer with butter, tomato puree, ginger, and cream for 30 minutes until silky.', mr: 'उडीद व राजमा शिजवून बटर, टोमॅटो व सायीसह ३० मिनिटे मंद आचेवर शिजवा.', hi: 'उड़द और राजमा को मक्खन, टमाटर और मलाई के साथ ३० मिनट तक पकाएं।' } }],
    accompaniments: [{ en: 'Garlic Naan or Jeera Rice', mr: 'लसूण नान किंवा जिरा राईस', hi: 'गार्लिक नान या जीरा राइस' }], substitutions: [], allergens: ['Dairy'],
    searchAliases: ['dal makhani', 'दाल मखनी', 'black dal', 'creamy dal']
  },
  {
    id: 'tilgul-laddu',
    name: { en: 'Makar Sankranti Tilgul Laddu', mr: 'पारंपारिक मऊ तीळगूळ लाडू', hi: 'तिल-गुड़ के लड्डू' },
    transliteration: 'Tilgul Laddu',
    description: { en: 'Nutty winter sweet made with roasted white sesame seeds, organic jaggery syrup, peanuts, and cardamom. "Tilgul ghya god god bola!"', mr: 'मकर संक्रांतीचा प्रसाद: भाजलेले तीळ, शेंगदाणे आणि वितळलेल्या गुळात वेलची घालून वळलेले मऊसुत लाडू.', hi: 'भुने तिल, मूंगफली और गुड़ की चाशनी से बने स्वादिष्ट शीतकालीन लड्डू।' },
    category: 'sweet', mealTypes: ['snack'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 15, difficulty: 'medium', servings: 6, cost: 70,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'sesame_seeds', name: { en: 'White sesame seeds roasted', mr: 'भाजलेले पांढरे तीळ', hi: 'भुने सफेद तिल' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'jaggery', name: { en: 'Sticky Jaggery (Gul)', mr: 'गूळ', hi: 'गुड़' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'peanuts', name: { en: 'Roasted peanut powder', mr: 'भाजलेले शेंगदाणे कूट', hi: 'मूंगफली कूट' }, amount: 0.5, unit: 'cup', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Melt jaggery with 1 tsp ghee till soft ball stage. Turn off heat, stir in roasted sesame and peanuts, shape warm into round laddus.', mr: 'गुळात तूप घालून वितळवा, तीळ व शेंगदाणे मिसळून कोमट असतानाच लाडू वळा.', hi: 'गुड़ को पिघलाकर तिल और मूंगफली मिलाएं और गरम रहते हुए गोल लड्डू बांधें।' } }],
    accompaniments: [{ en: 'Sankranti Faral', mr: 'संक्रांत फराळ', hi: 'संक्रांति पकवान' }], substitutions: [], allergens: ['Sesame', 'Peanuts'],
    searchAliases: ['tilgul laddu', 'तीळगूळ लाडू', 'til laddu', 'sankranti sweet']
  },
  {
    id: 'chakli-bhajani',
    name: { en: 'Maharashtrian Bhajani Chakli', mr: 'कुरकुरीत भाजणीची चकली', hi: 'कुरकुरी भाजणी चकली' },
    transliteration: 'Bhajani Chakli',
    description: { en: 'Crunchy spiral snack made from traditionally roasted grains and pulses flour (bhajani), ajwain, sesame seeds, and deep-fried.', mr: 'खमंग भाजणीचे पीठ, तीळ, ओवा, मोहन घालून सोऱ्यातून पाडलेली कुरकुरीत काटेरी चकली.', hi: 'भुने अनाजों के आटे से बनी कुरकुरी और कांटेदार पारंपरिक चकली।' },
    category: 'snack', mealTypes: ['snack'], cuisine: 'festive_seasonal', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 20, cookTime: 20, difficulty: 'medium', servings: 8, cost: 90,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Chakli Bhajani flour', mr: 'चकलीची भाजणी', hi: 'चकली भाजणी आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'sesame_seeds', name: { en: 'Sesame seeds and ajwain', mr: 'तीळ आणि ओवा', hi: 'तिल और अजवाइन' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Knead bhajani flour with hot oil (mohan), water, spices. Pipe spirals through chakli mould onto paper, deep fry crisp on medium flame.', mr: 'गरम तेलाचे मोहन घालून पीठ मळा, सोऱ्यातून चकल्या पाडून मंद आचेवर तळा.', hi: 'गरम तेल का मोयन डालकर आटा गूंधें, सांचे से चकली बनाकर तल लें।' } }],
    accompaniments: [{ en: 'Chai and Faral', mr: 'चहा आणि फराळ', hi: 'चाय और फलाहार' }], substitutions: [], allergens: ['Sesame'],
    searchAliases: ['chakli', 'चकली', 'bhajani chakli', 'diwali faral', 'murukku']
  }
];
