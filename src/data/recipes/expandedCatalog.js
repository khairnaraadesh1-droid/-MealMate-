export const EXPANDED_CATALOG_RECIPES = [
  {
    id: 'khandeshi-vangyachi-bhaji',
    name: { en: 'Khandeshi Vangyachi Rassa Bhaji', mr: 'खान्देशी वांग्याची रस्सा भाजी', hi: 'खान्देशी बैंगन की रसेदार सब्जी' },
    transliteration: 'Vangyachi Bhaji',
    description: {
      en: 'Tender baby brinjals simmered in a dark, fiery Khandeshi kala masala and roasted peanut gravy, served with thick jowar bhakri.',
      mr: 'काळ्या मसाल्याच्या झणझणीत रश्श्यात आणि भाजलेल्या दाण्याच्या कुटात शिजवलेली वांग्याची चवदार रस्सा भाजी.',
      hi: 'काले मसाले की तीखी तरी और भुनी मूंगफली में पकी हुई छोटे बैंगन की स्वादिष्ट रसेदार सब्जी।'
    },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 10, cookTime: 20, difficulty: 'easy', servings: 4, cost: 70,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'brinjal', name: { en: 'Small brinjals cut in quarters', mr: 'वांगी फोडी केलेली', hi: 'बैंगन के टुकड़े' }, amount: 400, unit: 'g', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'काळा मसाला', hi: 'काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'peanuts', name: { en: 'Roasted peanut powder', mr: 'शेंगदाणे कूट', hi: 'मूंगफली कूट' }, amount: 3, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat oil, add garlic, kala masala, sliced brinjal, roasted peanut powder, 2 cups water, and simmer covered for 15 minutes.', mr: 'तेलात लसूण, काळा मसाला, वांगी, दाण्याचे कूट आणि पाणी घालून मंद आचेवर १५ मिनिटे शिजवा.', hi: 'तेल में लहसुन, मसाला, बैंगन और मूंगफली कूट डालकर १५ मिनट पकाएं।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri', mr: 'ज्वारीची भाकरी', hi: 'ज्वार भाकरी' }],
    substitutions: [{ en: 'Add potatoes for Aloo-Vangi Bhaji.', mr: 'बटाटा घालू शकता.', hi: 'आलू भी मिला सकते हैं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['vangyachi bhaji', 'वांग्याची भाजी', 'baingan rassa', 'khandeshi baingan']
  },
  {
    id: 'khandeshi-chilli-thecha-dry',
    name: { en: 'Khandeshi Lal Mirchi Thecha', mr: 'खान्देशी लाल मिरचीचा खर्डा', hi: 'खान्देशी लाल मिर्च का ठेचा' },
    transliteration: 'Lal Mirchi Thecha',
    description: {
      en: 'Smoky tawa-roasted red chillies pounded with garlic, peanuts, and cumin. Fiery and pungent.',
      mr: 'तव्यावर खमंग भाजलेली लाल मिरची, भरपूर लसूण आणि शेंगदाणे कुटून केलेला झणझणीत लाल ठेचा.',
      hi: 'तवे पर भुनी लाल मिर्च, लहसुन और मूंगफली से बना तीखा लाल ठेचा।'
    },
    category: 'accompaniment', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 5, cookTime: 5, difficulty: 'easy', servings: 6, cost: 30,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'red_chilli_powder', name: { en: 'Whole dry red chillies or green chillies', mr: 'लाल सुक्या मिरच्या', hi: 'साबुत लाल मिर्च' }, amount: 12, unit: 'pieces', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण', hi: 'लहसुन' }, amount: 15, unit: 'cloves', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Roasted peanuts', mr: 'भाजलेले शेंगदाणे', hi: 'मूंगफली' }, amount: 3, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Roast chillies and garlic on iron tawa in groundnut oil. Pound coarsely in mortar with rock salt.', mr: 'तव्यावर तेलात मिरची आणि लसूण भाजून खलबत्त्यात मिठासह जाडसर कुटा.', hi: 'तवे पर तेल में मिर्च-लहसुन भूनें और खरल में दरदरा कूटें।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri with Ghee', mr: 'तूप लावलेली ज्वारीची भाकरी', hi: 'घी लगी ज्वार भाकरी' }],
    substitutions: [{ en: 'Green chillies can be used.', mr: 'हिरवी मिरचीही वापरू शकता.', hi: 'हरी मिर्च भी ले सकते हैं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['lal mirchi thecha', 'लाल मिरची ठेचा', 'red thecha', 'kharda']
  },
  {
    id: 'methi-pithla',
    name: { en: 'Maharashtrian Methi Pithla', mr: 'खमंग मेथीचे पिठलं', hi: 'मेथी का पिठला' },
    transliteration: 'Methi Pithla',
    description: {
      en: 'Nutritious gram-flour gravy cooked with fresh tender fenugreek leaves, crushed garlic, and green chillies.',
      mr: 'कोवळी ताजी मेथी, लसूण, हिरवी मिरची आणि बेसनाची खमंग वाफ काढून केलेले चवदार मेथी पिठलं.',
      hi: 'ताजी हरी मेथी, बेसन, लहसुन और हरी मिर्च से बना पौष्टिक और स्वादिष्ट मेथी पिठला।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 5, cookTime: 12, difficulty: 'easy', servings: 3, cost: 50,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', name: { en: 'Gram flour', mr: 'बेसन', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'fenugreek', name: { en: 'Fresh Methi leaves', mr: 'ताजी मेथी', hi: 'ताजी मेथी' }, amount: 1, unit: 'cup', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic and green chillies', mr: 'लसूण व मिरची', hi: 'लहसुन व मिर्च' }, amount: 8, unit: 'cloves', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Sauté garlic, chillies, and methi leaves in oil for 2 minutes. Pour whisked besan water and simmer covered for 7 minutes.', mr: 'तेलात लसूण, मिरची व मेथी परता. बेसनाचे पाणी ओतून ७ मिनिटे वाफ काढा.', hi: 'तेल में लहसुन, मिर्च और मेथी भूनकर बेसन का घोल डालें और ७ मिनट पकाएं।' } }
    ],
    accompaniments: [{ en: 'Jowar or Bajra Bhakri', mr: 'बाजरीची भाकरी', hi: 'बाजरा भाकरी' }],
    substitutions: [{ en: 'Spinach can replace methi.', mr: 'पालक वापरू शकता.', hi: 'पालक भी ले सकते हैं।' }],
    allergens: ['Besan'],
    searchAliases: ['methi pithla', 'मेथी पिठलं', 'fenugreek besan', 'methi zunka']
  },
  {
    id: 'tomato-saar',
    name: { en: 'Traditional Maharashtrian Tomato Saar', mr: 'पारंपारिक आंबट-गोड टोमॅटो सार', hi: 'महाराष्ट्रीयन टमाटर सार (सूप)' },
    transliteration: 'Tomato Saar',
    description: {
      en: 'A soothing tangy-sweet tomato broth tempered with cumin, coconut, curry leaves, and jaggery, drunk like soup or poured over hot rice.',
      mr: 'टोमॅटोचा रस, जिरे, कढीपत्ता, ओले खोबरे आणि चिमूटभर गूळ घालून केलेली पाचक व चविष्ट आमटी (सार).',
      hi: 'टमाटर का सूपनुमा रस्सा, जीरा, कढ़ी पत्ता, नारियल और गुड़ के संतुलित स्वाद के साथ।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'traditional', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 15, difficulty: 'easy', servings: 4, cost: 50,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'tomato', name: { en: 'Ripe tomatoes boiled and pureed', mr: 'टोमॅटो', hi: 'पके टमाटर' }, amount: 4, unit: 'medium', category: 'vegetables' },
      { id: 'fresh_coconut', name: { en: 'Fresh coconut paste', mr: 'ओले खोबरे वाटण', hi: 'ताजा नारियल पेस्ट' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'jaggery', name: { en: 'Jaggery', mr: 'गूळ', hi: 'गुड़' }, amount: 1, unit: 'tbsp', category: 'spices' },
      { id: 'ghee', name: { en: 'Ghee for tempering', mr: 'साजूक तूप', hi: 'घी' }, amount: 1, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Strain boiled tomato puree. Temper cumin and curry leaves in ghee, add tomato broth, coconut, jaggery, salt, and simmer for 8 minutes.', mr: 'टोमॅटोच्या रसात तुपाची फोडणी, खोबरे, गूळ व मीठ घालून ८ मिनिटे उकळा.', hi: 'टमाटर के रस में घी का तड़का, नारियल, गुड़ और नमक मिलाकर ८ मिनट उबालें।' } }
    ],
    accompaniments: [{ en: 'Steamed Rice with Ghee', mr: 'गरम भात आणि तूप', hi: 'गरम चावल और घी' }],
    substitutions: [{ en: 'Kokum can be added for deeper tang.', mr: 'कोकम घालू शकता.', hi: 'कोकम मिला सकते हैं।' }],
    allergens: ['Dairy (Ghee)'],
    searchAliases: ['tomato saar', 'टोमॅटो सार', 'tomato rasam', 'tomato soup']
  },
  {
    id: 'masoor-amti',
    name: { en: 'Kolhapuri Akkha Masoor Amti', mr: 'कोल्हापुरी झणझणीत अख्खा मसूर', hi: 'कोल्हापुरी अक्खा मसूर' },
    transliteration: 'Akkha Masoor',
    description: {
      en: 'Whole brown lentils cooked in a spicy Kolhapuri red gravy with roasted onion-coconut paste, garlic, and fresh coriander. Hearty and protein-packed.',
      mr: 'अख्खा मसूर, कांदा-खोबरे वाटण आणि कोल्हापुरी मसाल्यात शिजवलेली झणझणीत तर्रीदार रस्सा भाजी.',
      hi: 'साबुत मसूर, भुने प्याज-नारियल पेस्ट और तीखे कोल्हापुरी मसाले में बनी लाजवाब रसेदार दाल/सब्जी।'
    },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'pune_kolhapur', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 15, cookTime: 25, difficulty: 'easy', servings: 4, cost: 75,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'masoor_dal', name: { en: 'Whole Brown Masoor (soaked 4 hrs)', mr: 'भिजवलेला अख्खा मसूर', hi: 'भीगा साबुत मसूर' }, amount: 1.5, unit: 'cups', category: 'pulses' },
      { id: 'onion', name: { en: 'Onion paste', mr: 'कांदा वाटण', hi: 'प्याज पेस्ट' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Kolhapuri Masala', mr: 'कोल्हापुरी मसाला', hi: 'कोल्हापुरी मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Cook soaked masoor in cooker for 2 whistles. Sauté onion-coconut paste in oil till oil releases, add masoor, masala, and simmer 10 minutes.', mr: 'कुकरमध्ये मसूर शिजवून घ्या. तेलात वाटण व मसाला परतून मसूर घाला आणि १० मिनिटे उकळा.', hi: 'मसूर को २ सीटी तक उबालें। तेल में पेस्ट और मसाला भूनकर मसूर मिलाएं और १० मिनट पकाएं।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri or Poli and Rice', mr: 'भाकरी किंवा पोळी आणि भात', hi: 'भाकरी या रोटी और चावल' }],
    substitutions: [{ en: 'Sprouted masoor cooks even faster.', mr: 'मोड आलेला मसूरही वापरू शकता.', hi: 'अंकुरित मसूर से भी बना सकते हैं।' }],
    allergens: ['Pulses'],
    searchAliases: ['akkha masoor', 'अख्खा मसूर', 'masoor amti', 'brown lentil curry']
  },
  {
    id: 'pavta-usal',
    name: { en: 'Maharashtrian Pavta Usal (Lima Beans)', mr: 'पारंपारिक पावटा उसळ', hi: 'ताजा पावटा (सेम फली) उसल' },
    transliteration: 'Pavta Usal',
    description: {
      en: 'Fresh green lima beans cooked with potatoes, roasted peanuts, goda masala, and coconut. A seasonal winter delight in Maharashtra.',
      mr: 'ताजे हिरवे पावट्याचे दाणे, बटाटा, गोडा मसाला आणि शेंगदाणे कूट घालून केलेली चवदार हिवाळी उसळ.',
      hi: 'ताजे हरे पावटा के दाने, आलू, गोडा मसाला और मूंगफली कूट से बनी मौसमी उसल।'
    },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 10, cookTime: 18, difficulty: 'easy', servings: 4, cost: 70,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'green_peas', name: { en: 'Fresh Pavta / Lima beans', mr: 'पावट्याचे दाणे', hi: 'पावटा दाने' }, amount: 2, unit: 'cups', category: 'pulses' },
      { id: 'potato', name: { en: 'Potato cubed', mr: 'बटाटा', hi: 'आलू' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Roasted peanut powder', mr: 'शेंगदाणे कूट', hi: 'मूंगफली कूट' }, amount: 3, unit: 'tbsp', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Goda Masala', mr: 'गोडा मसाला', hi: 'गोडा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Temper mustard and hing in oil. Add pavta, potato, goda masala, peanut powder, salt, and 1 cup water. Steam covered for 12 minutes.', mr: 'तेलात फोडणी करून पावटा, बटाटा, गोडा मसाला, दाण्याचे कूट आणि पाणी घालून १२ मिनिटे वाफ काढा.', hi: 'तेल में तड़का लगाकर पावटा, आलू, गोडा मसाला, मूंगफली और पानी डालकर १२ मिनट भाप में पकाएं।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri or Chapati', mr: 'ज्वारीची भाकरी किंवा चपाती', hi: 'ज्वार भाकरी या रोटी' }],
    substitutions: [{ en: 'Fresh green peas (vatana) can be combined.', mr: 'मटारही एकत्र घालू शकता.', hi: 'मटर भी मिला सकते हैं।' }],
    allergens: ['Peanuts', 'Pulses'],
    searchAliases: ['pavta usal', 'पावटा उसळ', 'lima beans usal', 'valache birde']
  },
  {
    id: 'flower-vatana-rassa',
    name: { en: 'Flower Vatana Rassa Bhaji', mr: 'फ्लॉवर वाटाणा रस्सा भाजी', hi: 'फूलगोभी मटर की रसेदार सब्जी' },
    transliteration: 'Flower Vatana Bhaji',
    description: {
      en: 'Cauliflower florets and sweet green peas simmered in a spiced onion, coconut, and tomato gravy. A quintessential Maharashtrian wedding and lunch dish.',
      mr: 'फ्लॉवर, हिरवे मटार, कांदा-खोबरे वाटण आणि मसाल्यांच्या रश्श्यात शिजवलेली रसरशीत भाजी.',
      hi: 'फूलगोभी, हरी मटर, प्याज-नारियल और टमाटर की ग्रेवी में बनी स्वादिष्ट रसेदार सब्जी।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 10, cookTime: 15, difficulty: 'easy', servings: 4, cost: 65,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'cauliflower', name: { en: 'Cauliflower florets', mr: 'फ्लॉवरचे तुकडे', hi: 'फूलगोभी' }, amount: 300, unit: 'g', category: 'vegetables' },
      { id: 'green_peas', name: { en: 'Green peas (Vatana)', mr: 'हिरवे मटार', hi: 'हरी मटर' }, amount: 0.75, unit: 'cup', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Goda Masala or Kala Masala', mr: 'गोडा मसाला / काळा मसाला', hi: 'काळा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Sauté onion-tomato in oil. Add cauliflower, peas, masala, salt, 2 cups water, and cook covered on medium heat for 12 minutes.', mr: 'तेलात कांदा-टोमॅटो परतून फ्लॉवर, मटार, मसाला आणि पाणी घालून १२ मिनिटे झाकून शिजवा.', hi: 'तेल में प्याज-टमाटर भूनकर गोभी, मटर, मसाला और पानी डालकर १२ मिनट पकाएं।' } }
    ],
    accompaniments: [{ en: 'Poli (Chapati) and Rice', mr: 'गरम पोळी आणि भात', hi: 'रोटी और चावल' }],
    substitutions: [{ en: 'Add potato cubes for Aloo-Gobi-Matar.', mr: 'बटाटा घालू शकता.', hi: 'आलू भी मिला सकते हैं।' }],
    allergens: [],
    searchAliases: ['flower vatana', 'फ्लॉवर वाटाणा', 'cauliflower peas', 'gobi matar']
  },
  {
    id: 'khandeshi-aloo-sukhi-bhaji',
    name: { en: 'Khandeshi Spicy Aloo Bhaji', mr: 'खान्देशी चमचमीत बटाटा भाजी', hi: 'खान्देशी मसालेदार आलू' },
    transliteration: 'Khandeshi Aloo Bhaji',
    description: {
      en: 'Diced potatoes tossed in a blazing hot mix of Khandeshi kala masala, crushed garlic, peanuts, and red chillies.',
      mr: 'उकडलेले बटाटे, भरपूर ठेचलेला लसूण, अस्सल काळा मसाला आणि शेंगदाणे कूट घातलेली चमचमीत भाजी.',
      hi: 'उबले आलू, लहसुन, काळा मसाला और दरदरी मूंगफली में तली हुई तीखी सूखी सब्जी।'
    },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 5, cookTime: 10, difficulty: 'easy', servings: 3, cost: 50,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'potato', name: { en: 'Boiled potatoes (diced)', mr: 'उकडलेले बटाटे', hi: 'उबले आलू' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Crushed garlic', mr: 'ठेचलेला लसूण', hi: 'कुटा लहसुन' }, amount: 10, unit: 'cloves', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'काळा मसाला', hi: 'काळा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'peanuts', name: { en: 'Roasted peanut powder', mr: 'शेंगदाणे कूट', hi: 'मूंगफली कूट' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat oil, fry garlic till golden. Add kala masala, potatoes, peanut powder, salt, and stir-fry on high heat for 5 minutes.', mr: 'तेलात लसूण परतून काळा मसाला, बटाटे, शेंगदाणे कूट व मीठ घालून ५ मिनिटे खमंग परता.', hi: 'तेल में लहसुन भूनकर काळा मसाला, आलू, मूंगफली और नमक डालकर ५ मिनट तेज आंच पर भूनें।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri & Dal', mr: 'ज्वारीची भाकरी व वरण', hi: 'ज्वार भाकरी और दाल' }],
    substitutions: [{ en: 'Green chillies can replace red chilli.', mr: 'हिरवी मिरची वापरू शकता.', hi: 'हरी मिर्च भी ले सकते हैं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['khandeshi aloo', 'बटाटा भाजी', 'kala masala aloo', 'spicy aloo']
  },
  {
    id: 'solapuri-shengdana-chutney',
    name: { en: 'Famous Solapuri Shengdana Chutney', mr: 'प्रसिद्ध सोलापुरी शेंगदाणा चटणी', hi: 'सोलापुरी मूंगफली की सूखी चटनी' },
    transliteration: 'Solapuri Shengdana Chutney',
    description: {
      en: 'Coarsely pounded roasted peanuts with dry red chillies, raw garlic, cumin, and salt. An indispensable accompaniment on every Maharashtrian plate.',
      mr: 'भाजलेले शेंगदाणे, तिखट लाल मिरची, लसूण आणि जिरे खलबत्त्यात कुटून केलेली जगप्रसिद्ध सोलापुरी चटणी.',
      hi: 'भुनी मूंगफली, तीखी लाल मिर्च, लहसुन और जीरा को दरदरा कूटकर बनाई गई प्रसिद्ध सूखी चटनी।'
    },
    category: 'accompaniment', mealTypes: ['lunch', 'dinner', 'snack'], cuisine: 'traditional', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 5, cookTime: 5, difficulty: 'easy', servings: 8, cost: 40,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'peanuts', name: { en: 'Roasted peeled peanuts', mr: 'भाजलेले सोललेले शेंगदाणे', hi: 'भुनी छिली मूंगफली' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण', hi: 'लहसुन' }, amount: 12, unit: 'cloves', category: 'vegetables' },
      { id: 'red_chilli_powder', name: { en: 'Spicy red chilli powder', mr: 'लाल तिखट', hi: 'लाल मिर्च' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Pulse roasted peanuts, garlic, red chilli powder, cumin, and rock salt in a mixer or stone mortar in short bursts into coarse chutney.', mr: 'शेंगदाणे, लसूण, तिखट, जिरे आणि मीठ मिक्सरमध्ये पल्स मोडवर जाडसर वाटून घ्या.', hi: 'मूंगफली, लहसुन, मिर्च और नमक को मिक्सर में दरदरा पीस लें।' } }
    ],
    accompaniments: [{ en: 'Bhakri, Poli with Groundnut Oil', mr: 'भाकरी, पोळी व शेंगदाणा तेल', hi: 'भाकरी और तेल' }],
    substitutions: [{ en: 'Add sesame seeds for extra crunch.', mr: 'तीळ घालू शकता.', hi: 'तिल मिला सकते हैं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['shengdana chutney', 'शेंगदाणा चटणी', 'solapuri chutney', 'peanut chutney']
  },
  {
    id: 'dhirde-poha',
    name: { en: 'Maharashtrian Wheat & Spices Dhirde', mr: 'खमंग गव्हाचे तिखट धिरडे', hi: 'गेहूं का नमकीन धिरडे' },
    transliteration: 'Dhirde',
    description: {
      en: 'Savory crepes made with whole wheat flour, crushed green chillies, garlic, cumin, turmeric, and fresh coriander. Quick 10-minute breakfast.',
      mr: 'गव्हाचे पीठ, लसूण, हिरवी मिरची, जिरे, हळद आणि भरपूर कोथिंबीर घालून तव्यावर भाजलेले खमंग धिरडे.',
      hi: 'गेहूं के आटे, लहसुन, हरी मिर्च, जीरा और धनिए के घोल से तवे पर बना झटपट और स्वादिष्ट नमकीन चीला।'
    },
    category: 'breakfast', mealTypes: ['breakfast', 'dinner'], cuisine: 'traditional', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 5, cookTime: 10, difficulty: 'easy', servings: 3, cost: 35,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Whole wheat flour (Atta)', mr: 'गव्हाचे पीठ', hi: 'गेहूं का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'garlic', name: { en: 'Garlic and green chillies crushed', mr: 'लसूण व हिरवी मिरची वाटण', hi: 'लहसुन-मिर्च पेस्ट' }, amount: 1, unit: 'tbsp', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Mix wheat flour with crushed garlic-chilli, turmeric, cumin, coriander, salt, and water to make a thin batter. Pour onto a hot tawa and cook crisp with oil.', mr: 'पिठात वाटण, हळद, मीठ, कोथिंबीर व पाणी घालून पातळ पीठ बनवा. तव्यावर तेल लावून दोन्ही बाजूंनी खरपूस भाजा.', hi: 'आटे में पेस्ट, मसाले, धनिया और पानी मिलाकर पतला घोल बनाएं। तवे पर तेल लगाकर दोनों तरफ से सेकें।' } }
    ],
    accompaniments: [{ en: 'Thecha or Sweet Curd', mr: 'ठेचा किंवा गोड दही', hi: 'ठेचा या दही' }],
    substitutions: [{ en: 'Besan can be mixed for Besan Dhirde.', mr: 'बेसन मिसळू शकता.', hi: 'बेसन भी मिला सकते हैं।' }],
    allergens: ['Gluten'],
    searchAliases: ['dhirde', 'धिरडे', 'wheat chilla', 'atta dhirde', 'ghavan']
  },
  {
    id: 'karanji-sweet',
    name: { en: 'Maharashtrian Crispy Karanji (Gujiya)', mr: 'पारंपारिक खुसखुशीत करंजी', hi: 'पारंपरिक करंजी (गुझिया)' },
    transliteration: 'Karanji',
    description: {
      en: 'Half-moon shaped golden flaky pastry filled with a decadent mixture of roasted dry coconut, semolina, powdered sugar, cardamom, and nuts.',
      mr: 'दिवाळीचा खास फराळ: खमंग भाजलेले सुके खोबरे, खसखस, साखर आणि काजू-बदामाचे सारण भरलेली खुसखुशीत करंजी.',
      hi: 'भुने सूखे नारियल, सूजी, चीनी, खसखस और मेवों के भरावन से बनी खस्ता त्योहारी करंजी।'
    },
    category: 'sweet', mealTypes: ['snack'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 25, cookTime: 20, difficulty: 'hard', servings: 6, cost: 130,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Maida or Wheat flour for outer crust', mr: 'मैदा किंवा गव्हाचे पीठ', hi: 'मैदा या गेहूं का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'dry_coconut', name: { en: 'Dry grated coconut roasted', mr: 'भाजलेले सुके खोबरे', hi: 'भुना सूखा नारियल' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Ghee for frying and dough', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 3, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Roast coconut with suji, mix with sugar, cardamom, and nuts for filling. Roll small dough puris, stuff, crimp edges with cutter, and deep fry golden on low heat.', mr: 'खोबरे भाजून साखर व वेलची मिसळा. पुऱ्या लाटून सारण भरा, कडा कापून मंद तेलात खुसखुशीत तळून घ्या.', hi: 'नारियल भूनकर चीनी और इलायची मिलाएं। पूरी बेलकर भरें और धीमी आंच पर सुनहरा तल लें।' } }
    ],
    accompaniments: [{ en: 'Diwali Faral Assortment', mr: 'दिवाळी फराळ', hi: 'दिवाली फलाहार' }],
    substitutions: [{ en: 'Fresh coconut can be used for Olya Khobryachi Karanji.', mr: 'ओले खोबरे वापरू शकता.', hi: 'ताजा नारियल भी ले सकते हैं।' }],
    allergens: ['Gluten', 'Dairy'],
    searchAliases: ['karanji', 'करंजी', 'gujiya', 'diwali sweet', 'faral']
  },
  {
    id: 'basundi-sweet',
    name: { en: 'Rich Creamy Maharashtrian Basundi', mr: 'पारंपारिक केशर-बदाम बासुंदी', hi: 'केसर बादाम बासुंदी' },
    transliteration: 'Basundi',
    description: {
      en: 'Full-fat milk slow simmered and reduced to half with saffron, nutmeg, cardamom, and slivered almonds-pistachios. Rich and regal dessert.',
      mr: 'मंद आचेवर आटवलेले म्हशीचे दूध, साखर, केशर, वेलची-जायफळ आणि भरपूर काजू-पिस्त्याने सजवलेली दाट बासुंदी.',
      hi: 'धीमी आंच पर गाढ़े किए गए दूध में केसर, इलायची, जायफल और मेवे मिलाकर तैयार की गई शाही बासुंदी।'
    },
    category: 'sweet', mealTypes: ['lunch', 'dinner'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 45, difficulty: 'medium', servings: 4, cost: 140,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'milk', name: { en: 'Full-cream milk', mr: 'म्‍हशीचे घट्ट दूध', hi: 'फुल क्रीम दूध' }, amount: 1.5, unit: 'litres', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil milk in a heavy bottom pan. Simmer stirring regularly, scraping side malai until reduced by half. Add sugar, saffron, cardamom, and chopped nuts. Chill.', mr: 'जाड बुडाच्या पातेल्यात दूध आटवून अर्धे करा. साखर, केशर, वेलची आणि ड्रायफ्रुट्स घालून थंड करा.', hi: 'भारी तले के बर्तन में दूध को आधा रहने तक गाढ़ा करें। चीनी, केसर, इलायची और मेवे मिलाकर ठंडा करें।' } }
    ],
    accompaniments: [{ en: 'Hot Puris', mr: 'गरमागरम पुऱ्या', hi: 'गरम पूरियां' }],
    substitutions: [{ en: 'Add custard apple pulp for Sitaphal Basundi.', mr: 'सीताफळ बासुंदी करू शकता.', hi: 'सीताफल बासुंदी बना सकते हैं।' }],
    allergens: ['Dairy (Milk)', 'Nuts'],
    searchAliases: ['basundi', 'बासुंदी', 'rabdi', 'sweet milk dessert', 'kesar basundi']
  },
  {
    id: 'dadpe-pohe',
    name: { en: 'Konkani Dadpe Pohe', mr: 'कोकणी खमंग दडपे पोहे', hi: 'दडपे पोहा' },
    transliteration: 'Dadpe Pohe',
    description: { en: 'Raw thin poha soaked in fresh grated coconut, onion, green chillies, lemon, and a hot sizzling mustard-peanut tadka. No cooking required.', mr: 'पातळ पोहे, ओले खोबरे, बारीक कांदा, लिंबू आणि खमंग शेंगदाणे-मोहरीची चरचरीत फोडणी घालून केलेले दडपे पोहे.', hi: 'बिना पकाए, ताजे नारियल, प्याज, नींबू और हींग-राई के तड़के में भीगा हुआ दडपे पोहा।' },
    category: 'breakfast', mealTypes: ['breakfast', 'snack'], cuisine: 'konkan', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 2, difficulty: 'easy', servings: 3, cost: 40,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'poha', name: { en: 'Thin Poha (Patal Pohe)', mr: 'पातळ पोहे', hi: 'पतला पोहा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'fresh_coconut', name: { en: 'Fresh coconut grated', mr: 'ओले खोबरे', hi: 'ताजा नारियल' }, amount: 1, unit: 'cup', category: 'spices' },
      { id: 'onion', name: { en: 'Onion chopped', mr: 'कांदा', hi: 'प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Fried peanuts', mr: 'तळलेले शेंगदाणे', hi: 'तली मूंगफली' }, amount: 3, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Toss thin poha with grated coconut, onion, lemon juice, salt, and rest for 5 mins to soften. Pour hot mustard-chilli tadka, mix and serve.', mr: 'पातळ पोह्यात खोबरे, कांदा, लिंबू मिसळून ५ मिनिटे झाका. वरून मोहरी-मिरचीची फोडणी घाला.', hi: 'पोहा में नारियल, प्याज, नींबू मिलाकर ५ मिनट रखें। ऊपर से तड़का डालकर परोसें।' } }],
    accompaniments: [{ en: 'Masala Chai', mr: 'मसाला चहा', hi: 'चाय' }], substitutions: [], allergens: ['Peanuts'],
    searchAliases: ['dadpe pohe', 'दडपे पोहे', 'raw poha', 'konkani breakfast']
  },
  {
    id: 'kaju-usal',
    name: { en: 'Malvani Kaju Usal (Fresh Tender Cashew Curry)', mr: 'मालवणी ओल्या काजूची उसळ', hi: 'मालवणी ताजे काजू की उसल' },
    transliteration: 'Kaju Usal',
    description: { en: 'Fresh tender cashews simmered in roasted coconut, Malvani masala, and kokum gravy. A royal coastal delicacy.', mr: 'कोकणातील ओले काजू, नारळाचे वाटण आणि मालवणी मसाल्याच्या रश्श्यात केलेली चविष्ट उसळ.', hi: 'ताजे कोमल काजू, नारियल और मालवणी मसालों से बनी शाही कोंकणी सब्जी।' },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'konkan', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 15, cookTime: 20, difficulty: 'medium', servings: 4, cost: 220,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'fresh_coconut', name: { en: 'Fresh cashews & grated coconut', mr: 'ओले काजू व खोबरे', hi: 'ताजे काजू और नारियल' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Malvani Masala', mr: 'मालवणी मसाला', hi: 'मालवणी मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Cook cashews with coconut paste, Malvani masala, and kokum in 2 cups water for 15 minutes.', mr: 'खोबरे वाटण आणि मसाल्यात काजू १५ मिनिटे मऊ होईपर्यंत शिजवा.', hi: 'काजू को नारियल पेस्ट और मसालों के साथ १५ मिनट पकाएं।' } }],
    accompaniments: [{ en: 'Ghavan or Amboli', mr: 'घावन किंवा आंबोळी', hi: 'घावन' }], substitutions: [], allergens: ['Nuts (Cashews)'],
    searchAliases: ['kaju usal', 'काजू उसळ', 'cashew curry', 'malvani kaju']
  },
  {
    id: 'moong-usal',
    name: { en: 'Sprouted Moong Usal', mr: 'मोड आलेल्या मुगाची उसळ', hi: 'अंकुरित मूंग उसल' },
    transliteration: 'Moong Usal',
    description: { en: 'Wholesome sprouted green gram tempered with mustard, hing, turmeric, fresh coconut, and lemon. Rich in dietary fiber and protein.', mr: 'मोड आलेले हिरवे मूग, मोहरी, हिंग, हळद आणि ओले खोबरे घालून केलेली सात्विक उसळ.', hi: 'अंकुरित साबुत मूंग, राई, हींग, हल्दी और ताजे नारियल से बनी पौष्टिक उसल।' },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'everyday_maharashtrian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 5, cookTime: 10, difficulty: 'easy', servings: 3, cost: 50,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'sprouted_moong', name: { en: 'Sprouted Moong', mr: 'मोड आलेले मूग', hi: 'अंकुरित मूंग' }, amount: 2, unit: 'cups', category: 'pulses' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds & Hing', mr: 'मोहरी व हिंग', hi: 'राई और हींग' }, amount: 1, unit: 'tsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Temper mustard in oil, add sprouted moong, turmeric, salt, sprinkle water, steam covered for 7 mins, garnish with coconut.', mr: 'तेलात फोडणी करून मूग, हळद, मीठ घालून ७ मिनिटे वाफ काढा.', hi: 'तड़का लगाकर मूंग और नमक डालकर ७ मिनट भाप में पकाएं।' } }],
    accompaniments: [{ en: 'Chapati & Dal Rice', mr: 'चपाती व वरण-भात', hi: 'रोटी और दाल-चावल' }], substitutions: [], allergens: ['Pulses'],
    searchAliases: ['moong usal', 'मुगाची उसळ', 'sprouted moong', 'healthy usal']
  },
  {
    id: 'pithla-bhat',
    name: { en: 'Maharashtrian Pithla Bhat Combination', mr: 'गरमागरम पिठलं भात', hi: 'पिठला-भात' },
    transliteration: 'Pithla Bhat',
    description: { en: 'Piping hot garlic-tempered besan pithla poured over fragrant Indrayani rice with a drizzle of groundnut oil or pure ghee.', mr: 'गरमागरम वाफाळलेला इंद्रायणी भात, वरून लसणी पिठल्याची वाटी आणि कच्च्या शेंगदाणा तेलाची धार.', hi: 'गरमागरम चावल पर लहसुन वाला बेसन का पिठला और ऊपर से देसी घी या मूंगफली का तेल।' },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'traditional', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'medium', prepTime: 5, cookTime: 12, difficulty: 'easy', servings: 3, cost: 60,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', name: { en: 'Gram flour (Besan)', mr: 'बेसन', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'rice', name: { en: 'Steamed Indrayani rice', mr: 'इंद्रायणी भात', hi: 'चावल' }, amount: 2, unit: 'cups', category: 'grains' }
    ],
    instructions: [{ step: 1, text: { en: 'Cook smooth garlic besan pithla, ladle generously over hot steamed rice with raw onions and thecha.', mr: 'पिठलं तयार करून गरम भातावर कांदा व ठेच्यासह वाढा.', hi: 'पिठला बनाकर गरम चावल और ठेचे के साथ परोसें।' } }],
    accompaniments: [{ en: 'Khandeshi Thecha & Raw Onion', mr: 'ठेचा आणि कांदा', hi: 'ठेचा और प्याज' }], substitutions: [], allergens: ['Besan'],
    searchAliases: ['pithla bhat', 'पिठलं भात', 'pithla rice', 'comfort food']
  },
  {
    id: 'kothimbir-vadi-fried',
    name: { en: 'Steamed Kothimbir Vadi (Zero-Oil Diet)', mr: 'वाफवलेली सात्विक कोथिंबीर वडी', hi: 'बिना तेल की भाप वाली कोथिंबीर वड़ी' },
    transliteration: 'Steamed Kothimbir Vadi',
    description: { en: 'Health-conscious steamed coriander-besan cakes without frying, packed with calcium from white sesame and iron from fresh coriander.', mr: 'न तळता फक्त वाफवलेली सात्विक, पचायला हलकी कोथिंबीर वडी.', hi: 'बिना तले केवल भाप में पकी हुई स्वास्थ्यवर्धक कोथिंबीर वड़ी।' },
    category: 'snack', mealTypes: ['snack', 'breakfast'], cuisine: 'traditional', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 15, difficulty: 'easy', servings: 3, cost: 45,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 2.5, unit: 'cups', category: 'vegetables' },
      { id: 'besan', name: { en: 'Besan', mr: 'बेसन', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'sesame_seeds', name: { en: 'Sesame seeds', mr: 'तीळ', hi: 'तिल' }, amount: 1.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [{ step: 1, text: { en: 'Mix ingredients, shape into roll, steam 15 minutes, slice and enjoy soft without frying.', mr: 'रोल वाफवून चकत्या पाडा आणि तळून न घेता मऊ खा.', hi: 'रोल को भाप में पकाकर टुकड़े काटें और बिना तले खाएं।' } }],
    accompaniments: [{ en: 'Green Mint Chutney', mr: 'पुदिना चटणी', hi: 'पुदीना चटनी' }], substitutions: [], allergens: ['Besan', 'Sesame'],
    searchAliases: ['steamed vadi', 'वाफवलेली वडी', 'healthy kothimbir vadi']
  },
  {
    id: 'bajra-khichdi',
    name: { en: 'Maharashtrian Bajra Khichdi (Winter Special)', mr: 'हिवाळा विशेष बाजरीची खिचडी', hi: 'सर्दियों की बाजरा खिचड़ी' },
    transliteration: 'Bajra Khichdi',
    description: { en: 'Crushed pearl millet slow-cooked with yellow moong dal, ginger, cumin, and pure ghee. Warm, grounding winter meal.', mr: 'भरडलेली बाजरी, मूग डाळ, आले आणि तुपाची फोडणी देऊन केलेली पौष्टिक बाजरीची खिचडी.', hi: 'कुटे हुए बाजरे और मूंग दाल को धीमी आंच पर घी में पकाकर बनी स्वास्थ्यवर्धक खिचड़ी।' },
    category: 'dinner', mealTypes: ['dinner'], cuisine: 'traditional', dietary: 'veg',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 25, difficulty: 'medium', servings: 4, cost: 55,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'bajra_flour', name: { en: 'Coarsely crushed Bajra', mr: 'भरडलेली बाजरी', hi: 'दरदरा बाजरा' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'moong_dal', name: { en: 'Yellow moong dal', mr: 'मूग डाळ', hi: 'मूंग दाल' }, amount: 0.5, unit: 'cup', category: 'pulses' },
      { id: 'ghee', name: { en: 'Pure Ghee', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 2, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [{ step: 1, text: { en: 'Cook soaked crushed bajra and moong dal in cooker for 5 whistles with cumin, hing, salt, and generous ghee.', mr: 'बाजरी व मूग डाळ कुकरमध्ये तुपासह ५ शिट्ट्या काढून मऊ शिजवा.', hi: 'बाजरा और मूंग दाल को कुकर में घी और मसालों के साथ ५ सीटी तक पकाएं।' } }],
    accompaniments: [{ en: 'White Butter & Gur (Jaggery)', mr: 'लोणी आणि गूळ', hi: 'सफेद मक्खन और गुड़' }], substitutions: [], allergens: ['Dairy (Ghee)'],
    searchAliases: ['bajra khichdi', 'बाजरी खिचडी', 'millet khichdi', 'winter food']
  },
  {
    id: 'shankarpali-sweet',
    name: { en: 'Crispy Sweet Shankarpali', mr: 'खुसखुशीत गोड शंकरपाळी', hi: 'खस्ता मीठी शकरपारे' },
    transliteration: 'Shankarpali',
    description: { en: 'Diamond-cut flaky sweet biscuits made from wheat flour, sugar, ghee, and milk, fried to pale golden.', mr: 'तूप, दूध, साखर आणि मैद्याचे पीठ मळून हिऱ्याच्या आकारात कापलेली खुसखुशीत शंकरपाळी.', hi: 'दूध, घी, चीनी और आटे से बनी हीरे के आकार की खस्ता मीठी शकरपारे।' },
    category: 'sweet', mealTypes: ['snack'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 15, cookTime: 15, difficulty: 'medium', servings: 6, cost: 70,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Maida or Wheat flour', mr: 'मैदा किंवा गव्हाचे पीठ', hi: 'मैदा या गेहूं आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'ghee', name: { en: 'Pure Ghee', mr: 'तूप', hi: 'घी' }, amount: 0.5, unit: 'cup', category: 'dairy' }
    ],
    instructions: [{ step: 1, text: { en: 'Knead flour with melted sugar, ghee, milk. Roll thick, cut diamond shapes, deep fry on low heat till pale golden.', mr: 'तूप, साखर, दूध मिसळून पीठ मळा. कापून मंद तेलात तळून घ्या.', hi: 'आटे को घी, दूध और चीनी में गूंधें, काटकर धीमी आंच पर सुनहरा तलें।' } }],
    accompaniments: [{ en: 'Chai and Faral', mr: 'चहा व फराळ', hi: 'चाय' }], substitutions: [], allergens: ['Dairy', 'Gluten'],
    searchAliases: ['shankarpali', 'शंकरपाळी', 'shakkarpara', 'diwali sweet']
  },
  {
    id: 'anarsa-sweet',
    name: { en: 'Traditional Maharashtrian Anarsa', mr: 'जाळीदार पारंपारिक अनरसा', hi: 'जालीदार पारंपरिक अनरसा' },
    transliteration: 'Anarsa',
    description: { en: 'Heirloom pastry made from fermented soaked rice flour and jaggery, rolled in poppy seeds and fried in pure ghee with intricate lacework.', mr: '३ दिवस भिजवून वाटलेला तांदूळ, गूळ, खसखस लावून साजूक तुपात तळलेला जाळीदार अनरसा.', hi: 'भीगे चावल के आटे, गुड़ और खसखस से शुद्ध घी में तला हुआ जालीदार अनरसा।' },
    category: 'sweet', mealTypes: ['snack'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 20, cookTime: 20, difficulty: 'hard', servings: 6, cost: 120,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Rice soaked and dried for flour', mr: 'भिजवलेला तांदूळ पीठ', hi: 'चावल का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'jaggery', name: { en: 'Organic Jaggery', mr: 'गूळ', hi: 'गुड़' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Ghee for frying', mr: 'साजूक तूप', hi: 'घी' }, amount: 4, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [{ step: 1, text: { en: 'Rest rice-jaggery dough, pat on poppy seeds with fingers, fry in warm ghee splashing ghee on top to create lacy lattice.', mr: 'खसखस लावून हाताने थापा आणि तुपात जाळी पडेपर्यंत तळून घ्या.', hi: 'खसखस लगाकर हाथ से थपथपाएं और घी में जालीदार तल लें।' } }],
    accompaniments: [{ en: 'Festive Faral', mr: 'फराळ', hi: 'फलाहार' }], substitutions: [], allergens: ['Dairy (Ghee)'],
    searchAliases: ['anarsa', 'अनरसा', 'diwali anarsa', 'heritage sweet']
  }
];

