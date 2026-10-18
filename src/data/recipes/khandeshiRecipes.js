export const KHANDESHI_RECIPES = [
  {
    id: 'khandeshi-shev-bhaji',
    name: {
      en: 'Khandeshi Shev Bhaji',
      mr: 'खान्देशी शेव भाजी',
      hi: 'खान्देशी शेव भाजी'
    },
    transliteration: 'Khandeshi Shev Bhaji',
    description: {
      en: 'The crown jewel of Khandeshi cuisine: spicy, aromatic red-black gravy made with roasted onion-coconut paste and kala masala, topped with thick spicy shev.',
      mr: 'खान्देशची शान: भाजलेला कांदा, खोबरे आणि अस्सल काळा मसाला यांपासून बनवलेला झणझणीत लाल-काळा रस्सा आणि तिखट जाड शेव.',
      hi: 'खान्देश की पहचान: भुने प्याज-नारियल के पेस्ट और असली काळा मसाला से बनी तीखी तर्रीदार ग्रेवी, ऊपर से मोटी बेसन शेव।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'veg',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 15,
    cookTime: 25,
    difficulty: 'medium',
    servings: 4,
    cost: 140,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'shev', name: { en: 'Thick spicy Besan Shev (Gathi Shev)', mr: 'जाड तिखट शेव (गाठी शेव)', hi: 'मोटी तीखी बेसन शेव' }, amount: 200, unit: 'g', category: 'spices' },
      { id: 'onion', name: { en: 'Onions (sliced and roasted brown)', mr: 'कांदे (भाजून बारीक केलेले)', hi: 'प्याज (भूरा भुना हुआ)' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'dry_coconut', name: { en: 'Dry Coconut / Khopra (roasted)', mr: 'सुके खोबरे (भाजलेले)', hi: 'सूखा नारियल (भुना हुआ)' }, amount: 50, unit: 'g', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन की कलियां' }, amount: 12, unit: 'cloves', category: 'vegetables' },
      { id: 'ginger', name: { en: 'Ginger piece', mr: 'आले तुकडा', hi: 'अदरक का टुकड़ा' }, amount: 1, unit: 'inch', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'खान्देशी काळा मसाला', hi: 'खान्देशी काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'red_chilli_powder', name: { en: 'Spicy Red Chilli Powder', mr: 'तिखट लाल मिरची पावडर', hi: 'तीखी लाल मिर्च' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander (chopped)', mr: 'बारीक चिरलेली कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Roast sliced onions on a tawa until dark brown. Roast dry coconut slices separately until fragrant.', mr: 'तव्यावर कांदा मंद आचेवर काळपट-तपकिरी होईपर्यंत भाजा. सुके खोबरेही सोनेरी रंगावर भाजा.', hi: 'तवे पर प्याज को गहरा भूरा होने तक भूनें। सूखे नारियल को भी खुशबू आने तक भून लें।' } },
      { step: 2, text: { en: 'Grind roasted onions, dry coconut, ginger, garlic, and fresh coriander into a smooth Khandeshi vatan (paste) adding a little water.', mr: 'भाजलेला कांदा, खोबरे, आले, लसूण आणि कोथिंबीर थोडे पाणी घालून मिक्सरमध्ये बारीक वाटून घ्या (खान्देशी वाटण).', hi: 'भुना प्याज, नारियल, अदरक, लहसुन और धनिया थोड़ा पानी डालकर बारीक पेस्ट बना लें।' } },
      { step: 3, text: { en: 'Heat 3-4 tbsp oil in a kadai. Add the ground paste and sauté on medium flame until oil separates (tarri).', mr: 'कढईत ३-४ मोठे चमचे तेल तापवा. वाटण घालून तेल सुटेपर्यंत (तर्री येईपर्यंत) चांगले परता.', hi: 'कड़ाही में ३-४ चम्मच तेल गरम करें। पेस्ट डालकर मध्यम आंच पर तेल अलग होने तक भूनें।' } },
      { step: 4, text: { en: 'Add Khandeshi kala masala, red chilli powder, turmeric, and salt. Sauté for 1 minute.', mr: 'यात खान्देशी काळा मसाला, तिखट, हळद आणि चवीनुसार मीठ घालून एक मिनिट परता.', hi: 'इसमें खान्देशी काळा मसाला, लाल मिर्च, हल्दी और नमक डालकर १ मिनट चलाएं।' } },
      { step: 5, text: { en: 'Add 3 cups of hot boiling water. Simmer on low heat for 10-12 minutes until a fiery red oil layer (tarri) floats on top.', mr: '३ कप गरम उकळते पाणी घाला. मंद आचेवर १०-१२ मिनिटे उकळू द्या, जेणेकरून वरती छान तर्री येईल.', hi: '३ कप उबलता पानी डालें और धीमी आंच पर १०-१२ मिनट पकाएं ताकि ऊपर लाल तरी तैरने लगे।' } },
      { step: 6, text: { en: 'Serve the hot spicy rassa in a bowl and add crispy thick shev just before eating with hot Jowar Bhakri and raw onion.', mr: 'गरमागरम रस्सा वाटीत काढून जेवतानाच त्यात वरून शेव घाला. ज्वारीची भाकरी आणि कांद्यासोबत आस्वाद घ्या.', hi: 'गरमागरम रस्से में परोसते समय ही कुरकुरी शेव डालें और गर्म ज्वार की भाकरी के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Jowar Bhakri (ज्वारीची भाकरी)', mr: 'गरमागरम ज्वारीची भाकरी', hi: 'गरम ज्वार की भाकरी' },
      { en: 'Sliced raw onion with lemon wedges', mr: 'लिंबू आणि कच्चा कांदा', hi: 'नींबू और कच्चा प्याज' },
      { en: 'Khandeshi Thecha', mr: 'खान्देशी ठेचा', hi: 'खान्देशी ठेचा' }
    ],
    substitutions: [
      { en: 'If Kala Masala is unavailable, use Goda Masala with 1 tsp garam masala and roasted cumin powder.', mr: 'काळा मसाला नसेल तर गोडा मसाला अधिक १ चमचा गरम मसाला वापरा.', hi: 'काळा मसाला न हो तो गोडा मसाला और गरम मसाला का उपयोग करें।' }
    ],
    allergens: ['Chickpeas / Gram flour (Besan)'],
    searchAliases: ['shev bhaji', 'शेव भाजी', 'khandeshi shev bhaji', 'sev sabji', 'shev rassa', 'tikhat shev']
  },
  {
    id: 'khandeshi-vangyache-bharit',
    name: {
      en: 'Khandeshi Vangyache Bharit',
      mr: 'खान्देशी वांग्याचे भरीत',
      hi: 'खान्देशी बैंगन का भरता'
    },
    transliteration: 'Khandeshi Vangyache Bharit',
    description: {
      en: 'Traditional roasted green-striped Khandeshi brinjal mash cooked with generous crushed garlic, green chillies, roasted peanuts, and spring onions.',
      mr: 'खान्देशच्या प्रसिद्ध काटेरी / हिरव्या वांग्यांचे खमंग भाजून केलेले भरीत. भरपूर लसूण, हिरवी मिरची, शेंगदाणे आणि कांद्याची पात.',
      hi: 'खान्देश के पारंपरिक कांटेदार हरे बैंगन को आग पर भूनकर बनाया गया भरता। प्रचुर लहसुन, हरी मिर्च, मूंगफली और हरी प्याज।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 20,
    cookTime: 20,
    difficulty: 'easy',
    servings: 4,
    cost: 110,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'brinjal', name: { en: 'Large green Khandeshi brinjals (Kateri Vangi)', mr: 'मोठी हिरवी काटेरी खान्देशी वांगी', hi: 'बड़े हरे खान्देशी बैंगन' }, amount: 500, unit: 'g', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies (crushed with garlic)', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 6, unit: 'pieces', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves (crushed)', mr: 'ठेचलेला लसूण', hi: 'कुटा हुआ लहसुन' }, amount: 15, unit: 'cloves', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Roasted peanuts (coarsely crushed)', mr: 'भाजलेले जाडसर शेंगदाणे कूट', hi: 'भुनी हुई मूंगफली का दरदरा कूट' }, amount: 4, unit: 'tbsp', category: 'spices' },
      { id: 'onion', name: { en: 'Spring onion / Green onion chopped', mr: 'कांद्याची पात (बारीक चिरलेली)', hi: 'हरी प्याज के पत्ते' }, amount: 1, unit: 'cup', category: 'vegetables' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'बारीक चिरलेली कोथिंबीर', hi: 'ताजा हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Slit the brinjals and insert garlic cloves inside. Roast directly on an open flame until skin is completely charred and inner pulp is soft.', mr: 'वांग्यांना चीर देऊन त्यात लसूण पाकळ्या भरा. गॅसच्या आचेवर साल काळी पडेपर्यंत आणि आतील गर मऊ होईपर्यंत खमंग भाजा.', hi: 'बैंगन में चीरा लगाकर लहसुन भरें। सीधी आंच पर छिलका काला होने और अंदर तक नरम होने तक भूनें।' } },
      { step: 2, text: { en: 'Cool slightly, peel off the burnt skin carefully, remove the stem, and mash the flesh thoroughly using a fork or wooden churner.', mr: 'वांगी थंड झाल्यावर काळी साल काढून टाका आणि गर चमच्याने किंवा रवीने छान मॅश करा.', hi: 'ठंडा होने पर जला हुआ छिलका उतारें और कांटे से अच्छी तरह मैश कर लें।' } },
      { step: 3, text: { en: 'Heat 3 tbsp groundnut oil in a pan. Add crushed cumin, remaining garlic, and green chillies; sauté until aromatic.', mr: 'कढईत ३ मोठे चमचे शेंगदाणा तेल गरम करा. जिरे, लसूण आणि हिरवी मिरचीची पेस्ट घालून खमंग परता.', hi: 'कड़ाही में ३ चम्मच मूंगफली का तेल गरम करें। जीरा, लहसुन और हरी मिर्च डालकर भूनें।' } },
      { step: 4, text: { en: 'Add turmeric, chopped spring onion, and coarsely crushed roasted peanuts. Sauté for 2 minutes.', mr: 'यात हळद, कांद्याची पात आणि जाडसर शेंगदाणे कूट घालून २ मिनिटे परता.', hi: 'हल्दी, हरी प्याज और दरदरी भुनी मूंगफली डालकर २ मिनट चलाएं।' } },
      { step: 5, text: { en: 'Mix in the mashed brinjal and salt. Cook on low flame covered for 5-7 minutes so all the flavours blend.', mr: 'आता मॅश केलेले वांग्याचे भरीत आणि चवीनुसार मीठ घाला. झाकण ठेवून मंद आचेवर ५-७ मिनिटे वाफ काढा.', hi: 'मैश किया बैंगन और नमक मिलाएं। ढककर धीमी आंच पर ५-७ मिनट भाप में पकने दें।' } },
      { step: 6, text: { en: 'Garnish with fresh coriander. Traditionally served with hot Jowar Bhakri, Puri, and Kala Masala Daal.', mr: 'कोथिंबीर घालून गरमागरम बाजरी-ज्वारीची भाकरी किंवा पुरी सोबत वाढा.', hi: 'धनिया पत्ती से सजाकर गरमागरम ज्वार भाकरी या पूरी के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Jowar or Bajra Bhakri', mr: 'गरम ज्वारी किंवा बाजरीची भाकरी', hi: 'गरम ज्वार या बाजरे की भाकरी' },
      { en: 'Khandeshi Varan / Daal', mr: 'खान्देशी वरण', hi: 'खान्देशी दाल' },
      { en: 'Kharda / Thecha', mr: 'हिरवा ठेचा / खर्डा', hi: 'हरी मिर्च का ठेचा' }
    ],
    substitutions: [
      { en: 'Regular purple bharta brinjal can be used if green Khandeshi brinjal is not available.', mr: 'हिरवी वांगी नसतील तर जांभळे मोठे भरता वांगे वापरू शकता.', hi: 'हरा बैंगन न मिले तो सामान्य भरता बैंगन इस्तेमाल करें।' }
    ],
    allergens: ['Peanuts'],
    searchAliases: ['vangyache bharit', 'वांग्याचे भरीत', 'khandeshi bharit', 'baingan bharta', 'vange bharit']
  },
  {
    id: 'khandeshi-thecha',
    name: {
      en: 'Authentic Khandeshi Thecha (Kharda)',
      mr: 'अस्सल खान्देशी ठेचा (खर्डा)',
      hi: 'असली खान्देशी ठेचा (खरडा)'
    },
    transliteration: 'Khandeshi Thecha',
    description: {
      en: 'Pounding fresh spicy green chillies, raw garlic, roasted peanuts, and cumin on a stone mortar (khalbatta) to make Maharashtra’s favourite fiery condiment.',
      mr: 'तव्यावर भाजलेली हिरवी मिरची, लसूण, जिरे आणि खमंग शेंगदाणे खलबत्त्यात कुटून तयार केलेला झणझणीत ठेचा.',
      hi: 'तवे पर भुनी हरी मिर्च, लहसुन, जीरा और भुनी मूंगफली को खरल में कूटकर बनाया गया तीखा ठेचा।'
    },
    category: 'accompaniment',
    mealTypes: ['lunch', 'dinner', 'snack'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 5,
    cookTime: 8,
    difficulty: 'easy',
    servings: 6,
    cost: 40,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'green_chillies', name: { en: 'Spicy green chillies (broken in half)', mr: 'तिखट हिरव्या मिरच्या (तुकडे केलेल्या)', hi: 'तीखी हरी मिर्च (दो टुकड़ों में)' }, amount: 15, unit: 'pieces', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Whole peeled garlic cloves', mr: 'सोललेला लसूण', hi: 'छिली हुई लहसुन' }, amount: 15, unit: 'cloves', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Roasted peanuts', mr: 'भाजलेले शेंगदाणे', hi: 'भुनी हुई मूंगफली' }, amount: 3, unit: 'tbsp', category: 'spices' },
      { id: 'cumin_seeds', name: { en: 'Cumin seeds (Jeera)', mr: 'जिरे', hi: 'जीरा' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander leaves', mr: 'ताजी कोथिंबीर', hi: 'ताजा हरा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat 1 tbsp groundnut oil on an iron tawa. Add green chillies and whole garlic cloves.', mr: 'लोखंडी तव्यावर १ मोठा चमचा तेल तापवा. हिरव्या मिरच्या आणि लसूण घाला.', hi: 'लोहे के तवे पर १ बड़ा चम्मच तेल गरम करें। हरी मिर्च और लहसुन डालें।' } },
      { step: 2, text: { en: 'Roast on medium flame until chillies have white blisters and garlic turns golden-brown.', mr: 'मिरचीवर पांढरे डाग पडेपर्यंत आणि लसूण सोनेरी होईपर्यंत मंद आचेवर खमंग भाजा.', hi: 'मिर्च पर सफेद चित्तियां पड़ने और लहसुन सुनहरा होने तक भूनें।' } },
      { step: 3, text: { en: 'Add cumin seeds and roasted peanuts; toss for 30 seconds and turn off the gas.', mr: 'यात जिरे आणि भाजलेले शेंगदाणे घालून ३० सेकंद परता आणि गॅस बंद करा.', hi: 'जीरा और भुनी मूंगफली डालकर ३० सेकंड चलाएं और आंच बंद कर दें।' } },
      { step: 4, text: { en: 'Transfer to a stone mortar (khalbatta) or pound directly on the tawa using a flat metal glass bottom (lota) with rock salt.', mr: 'खलबत्त्यात किंवा तव्यावरच तांब्याने/ग्लासच्या बुडाने मीठ घालून जाडसर कुटा.', hi: 'खरल में या तवे पर ही लोटे के पेंदे से नमक डालकर दरदरा कूट लें।' } },
      { step: 5, text: { en: 'Enjoy this fiery thecha with hot bhakri, pithla, or any Maharashtrian meal.', mr: 'भाकरी, पिठलं किंवा कोणत्याही जेवणासोबत या झणझणीत ठेच्याचा आनंद घ्या.', hi: 'गर्म भाकरी, पिठला या रोज के खाने के साथ तीखे ठेचे का स्वाद लें।' } }
    ],
    accompaniments: [
      { en: 'Hot Jowar Bhakri with Ghee', mr: 'तूप लावलेली गरम ज्वारीची भाकरी', hi: 'घी लगी गर्म ज्वार भाकरी' },
      { en: 'Pithla / Zunka', mr: 'गरमागरम पिठलं / झुणका', hi: 'गरमागरम पिठला / झुणका' }
    ],
    substitutions: [
      { en: 'Reduce chillies and add more roasted peanuts for a milder version.', mr: 'कमी तिखट हवे असल्यास मिरची कमी करून शेंगदाणे वाढवा.', hi: 'कम तीखेपन के लिए मूंगफली की मात्रा बढ़ाएं।' }
    ],
    allergens: ['Peanuts'],
    searchAliases: ['thecha', 'ठेचा', 'kharda', 'खर्डा', 'mirchi thecha', 'khandeshi thecha', 'green chilli thecha']
  },
  {
    id: 'khandeshi-pithla-bhakri',
    name: {
      en: 'Khandeshi Pithla Bhakri',
      mr: 'खान्देशी पिठलं भाकरी',
      hi: 'खान्देशी पिठला-भाकरी'
    },
    transliteration: 'Pithla Bhakri',
    description: {
      en: 'Rustic soul food of Maharashtra: savory gram flour curry tempered with garlic, mustard seeds, and green chillies, paired with hand-patted Jowar Bhakri.',
      mr: 'महाराष्ट्राचे अस्सल खाद्यसंस्कृतीचे प्रतीक: लसूण, हिरवी मिरची आणि मोहरीच्या खमंग फोडणीतले गरमागरम पिठलं आणि हातावर थापलेली ज्वारीची भाकरी.',
      hi: 'महाराष्ट्र का पसंदीदा देसी भोजन: लहसुन, हरी मिर्च और राई के तड़के वाला गरमागरम बेसन का पिठला और हाथ से बनी ज्वार की भाकरी।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 15,
    difficulty: 'easy',
    servings: 3,
    cost: 75,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', name: { en: 'Gram flour (Besan)', mr: 'बेसन / हरभऱ्याचे पीठ', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'jowar_flour', name: { en: 'Jowar flour (for Bhakri)', mr: 'ज्वारीचे पीठ (भाकरीसाठी)', hi: 'ज्वार का आटा (भाकरी के लिए)' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा (बारीक चिरलेला)', hi: 'बारीक कटा प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves (crushed)', mr: 'ठेचलेला लसूण', hi: 'कुटा हुआ लहसुन' }, amount: 8, unit: 'cloves', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies (slit)', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 4, unit: 'pieces', category: 'vegetables' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds (Mohri)', mr: 'मोहरी', hi: 'राई' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'hing', name: { en: 'Asafoetida (Hing)', mr: 'हिंग', hi: 'हींग' }, amount: 0.25, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'बारीक चिरलेली कोथिंबीर', hi: 'ताजा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'In a bowl, mix besan with 2.5 cups of water, turmeric, and salt to form a lump-free thin batter.', mr: 'एका भांड्यात बेसन, २.५ कप पाणी, हळद आणि मीठ घालून गुठळ्या न राहता पातळ मिश्रण बनवा.', hi: 'एक बर्तन में बेसन, २.५ कप पानी, हल्दी और नमक मिलाकर बिना गुठली का पतला घोल बनाएं।' } },
      { step: 2, text: { en: 'Heat oil in a kadai. Add mustard seeds, cumin, hing, crushed garlic, and green chillies; sauté until fragrant.', mr: 'कढईत तेल तापवून मोहरी, जिरे, हिंग, ठेचलेला लसूण आणि हिरवी मिरची घालून खमंग फोडणी करा.', hi: 'कड़ाही में तेल गरम कर राई, जीरा, हींग, लहसुन और हरी मिर्च का छौंक लगाएं।' } },
      { step: 3, text: { en: 'Add chopped onion and fry until translucent. Pour the besan batter while stirring continuously.', mr: 'कांदा घालून सोनेरी होईपर्यंत परता. आता बेसनाचे मिश्रण सतत ढवळत कढईत ओता.', hi: 'प्याज डालकर भूनें। अब लगातार चलाते हुए बेसन का घोल डालें।' } },
      { step: 4, text: { en: 'Cook on low flame for 6-8 minutes with a lid on, until pithla thickens, turns glossy, and smells aromatic.', mr: 'मंद आचेवर झाकण ठेवून ६-८ मिनिटे छान वाफ काढा, जेणेकरून पिठलं चमकदार व चविष्ट होईल.', hi: 'धीमी आंच पर ढककर ६-८ मिनट पकाएं जब तक कि पिठला गाढ़ा और खुशबूदार न हो जाए।' } },
      { step: 5, text: { en: 'Make fresh hand-patted Jowar Bhakri on an iron tawa. Serve pithla hot topped with coriander, accompanied by thecha and raw onion.', mr: 'तव्यावर गरमागरम थापलेली ज्वारीची भाकरी बनवा. पिठल्यावर कोथिंबीर, कच्चा कांदा आणि ठेच्यासोबत वाढा.', hi: 'तवे पर गरमागरम ज्वार की भाकरी बनाएं। ऊपर से धनिया, कच्चा प्याज और ठेचे के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hand-patted Jowar Bhakri', mr: 'हातावर थापलेली ज्वारीची भाकरी', hi: 'हाथ से बनी ज्वार की भाकरी' },
      { en: 'Khandeshi Thecha / Kharda', mr: 'झणझणीत ठेचा / खर्डा', hi: 'तीखा ठेचा' },
      { en: 'Sliced raw onion & lemon', mr: 'कच्चा कांदा आणि लिंबू', hi: 'कच्चा प्याज और नींबू' }
    ],
    substitutions: [
      { en: 'Bajra Bhakri or Wheat Poli can be used instead of Jowar Bhakri.', mr: 'ज्वारीच्या भाकरीऐवजी बाजरीची भाकरी किंवा चपाती चालेल.', hi: 'ज्वार भाकरी की जगह बाजरा भाकरी या रोटी ले सकते हैं।' }
    ],
    allergens: ['Besan (Gram flour)'],
    searchAliases: ['pithla bhakri', 'पिठलं भाकरी', 'pithla', 'zunka bhakri', 'besan pithla']
  },
  {
    id: 'khandeshi-zunka-bhakri',
    name: {
      en: 'Khandeshi Zunka Bhakri',
      mr: 'खान्देशी झुणका भाकरी',
      hi: 'खान्देशी झुणका-भाकरी'
    },
    transliteration: 'Zunka Bhakri',
    description: {
      en: 'Dry, spicy, roasted gram flour preparation packed with browned onions, garlic, and fresh coriander, served with crispy Bajra bhakri.',
      mr: 'कोरडा, खमंग भाजलेला बेसनाचा झुणका; भरपूर परतलेला कांदा, लसूण, हिरवी मिरची आणि कोथिंबीर. बाजरीच्या भाकरीसोबत सर्वोत्तम.',
      hi: 'सूखा और भुना हुआ बेसन का झुणका; खूब सारा भुना प्याज, लहसुन, हरी मिर्च और ताज़ा धनिया। बाजरा भाकरी के साथ लाजवाब।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 15,
    difficulty: 'easy',
    servings: 3,
    cost: 80,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', name: { en: 'Gram flour (Besan)', mr: 'बेसन', hi: 'बेसन' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'bajra_flour', name: { en: 'Bajra flour (for Bhakri)', mr: 'बाजरीचे पीठ', hi: 'बाजरे का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onions (finely sliced)', mr: 'कांदे (लांब चिरलेले)', hi: 'बारीक कटे प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves (crushed)', mr: 'ठेचलेला लसूण', hi: 'कुटा हुआ लहसुन' }, amount: 10, unit: 'cloves', category: 'vegetables' },
      { id: 'red_chilli_powder', name: { en: 'Red chilli powder', mr: 'लाल तिखट', hi: 'लाल मिर्च' }, amount: 1, unit: 'tbsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander (chopped)', mr: 'भरपूर कोथिंबीर', hi: 'खूब सारा धनिया' }, amount: 0.5, unit: 'cup', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat 3 tbsp oil in a pan. Add mustard seeds, cumin, hing, and crushed garlic.', mr: 'कढईत ३ मोठे चमचे तेल तापवा. मोहरी, जिरे, हिंग आणि भरपूर लसूण परतून घ्या.', hi: 'कड़ाही में ३ चम्मच तेल गरम करें। राई, जीरा, हींग और लहसुन भूनें।' } },
      { step: 2, text: { en: 'Add sliced onions and fry on medium heat until golden brown.', mr: 'कांदा घालून सोनेरी-तपकिरी होईपर्यंत खमंग परता.', hi: 'प्याज डालकर सुनहरा भूरा होने तक भूनें।' } },
      { step: 3, text: { en: 'Add red chilli powder, turmeric, and salt. Sprinkle dry besan all over the onions.', mr: 'तिखट, हळद आणि मीठ घाला. त्यावर सुके बेसन पीठ पसरवून घाला.', hi: 'लाल मिर्च, हल्दी और नमक डालें। ऊपर से सूखा बेसन फैलाकर डालें।' } },
      { step: 4, text: { en: 'Sprinkle 3-4 tbsp of water, stir well to coat the besan, cover and steam on low flame for 7-8 minutes.', mr: '३-४ चमचे पाण्याचा हबका मारा, छान मिसळा आणि झाकण ठेवून मंद आचेवर ७-८ मिनिटे वाफ काढा.', hi: '३-४ चम्मच पानी छिड़कें, अच्छी तरह मिलाएं और धीमी आंच पर ढककर ७-८ मिनट पकाएं।' } },
      { step: 5, text: { en: 'Garnish with plenty of coriander and serve hot with rustic Bajra Bhakri.', mr: 'भरपूर कोथिंबीर घालून बाजरीच्या भाकरीसोबत गरमागरम वाढा.', hi: 'धनिया पत्ती से सजाकर गरम बाजरा भाकरी के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Bajra Bhakri with white butter', mr: 'लोणी लावलेली बाजरीची भाकरी', hi: 'सफेद मक्खन के साथ बाजरा भाकरी' },
      { en: 'Raw spring onion & green chillies', mr: 'कांद्याची पात व कच्ची मिरची', hi: 'हरी प्याज और कच्ची मिर्च' }
    ],
    substitutions: [
      { en: 'Add chopped methi leaves to make nutritious Methi Zunka.', mr: 'पौष्टिकतेसाठी बारीक मेथी घालून मेथी झुणका बनवू शकता.', hi: 'कटी हुई मेथी मिलाकर मेथी झुणका बना सकते हैं।' }
    ],
    allergens: ['Besan (Gram flour)'],
    searchAliases: ['zunka bhakri', 'झुणका भाकरी', 'zunka', 'junka', 'sukha zunka']
  },
  {
    id: 'khandeshi-patodi-rassa',
    name: {
      en: 'Khandeshi Patodi Rassa (Patwadi)',
      mr: 'खान्देशी पाटवडी रस्सा',
      hi: 'खान्देशी पाटवडी रस्सा'
    },
    transliteration: 'Patodi Rassa',
    description: {
      en: 'Diamond-shaped steamed spiced gram-flour cakes simmered in a dark, fiery Khandeshi kala masala gravy with intense garlic and coconut flavour.',
      mr: 'बेसनाची खमंग थापून कापलेली पाटवडी (कापण्या) आणि काळ्या मसाल्याचा झणझणीत तर्रीदार रस्सा.',
      hi: 'बेसन की मसालेदार कतली (पाटवडी) और खान्देशी काले मसाले की तीखी और तर्रीदार ग्रेवी।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'veg',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 25,
    cookTime: 30,
    difficulty: 'medium',
    servings: 4,
    cost: 130,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', name: { en: 'Gram flour for Patodi', mr: 'बेसन (पाटवडीसाठी)', hi: 'बेसन' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'खान्देशी काळा मसाला', hi: 'काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'onion', name: { en: 'Roasted onions for gravy', mr: 'भाजलेला कांदा', hi: 'भुना प्याज' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'dry_coconut', name: { en: 'Dry coconut roasted', mr: 'भाजलेले सुके खोबरे', hi: 'भुना सूखा नारियल' }, amount: 40, unit: 'g', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन' }, amount: 15, unit: 'cloves', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 0.5, unit: 'cup', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Cook besan with water, garlic, green chilli paste, turmeric, and salt until it forms a thick dough.', mr: 'बेसन, पाणी, लसूण-मिरची वाटण, हळद आणि मीठ कढईत घट्ट गोळा होईपर्यंत शिजवून घ्या.', hi: 'बेसन, पानी, लहसुन-मिर्च पेस्ट, हल्दी और नमक को गाढ़ा होने तक पकाएं।' } },
      { step: 2, text: { en: 'Spread the hot besan dough onto a greased plate, sprinkle coriander and coconut, and cut into diamond shapes.', mr: 'गरम गोळा ताटावर थापून त्यावर कोथिंबीर व खोबरे पसरा, आणि शंकरपाळ्यासारख्या पाटवड्या कापा.', hi: 'गरम मिश्रण थाली पर फैलाएं, धनिया बुरकें और काजू कतली की तरह पाटवडी काटें।' } },
      { step: 3, text: { en: 'Prepare the rassa by grinding roasted onion, dry coconut, ginger, and garlic into a fine vatan.', mr: 'भाजलेला कांदा, खोबरे, आले, लसूण वाटून रस्स्याचे वाटण तयार करा.', hi: 'भुने प्याज, नारियल, अदरक और लहसुन को पीसकर ग्रेवी का पेस्ट तैयार करें।' } },
      { step: 4, text: { en: 'Sauté the vatan in oil until oil releases. Add Kala Masala, red chilli powder, and hot water to make a thin spicy rassa.', mr: 'वाटण तेलात परतून काळा मसाला, तिखट व गरम पाणी घालून पातळ झणझणीत रस्सा उकळा.', hi: 'पेस्ट को तेल में भूनकर काळा मसाला और गर्म पानी डालकर तीखी पतली तरी बनाएं।' } },
      { step: 5, text: { en: 'Drop the patodis into the boiling rassa just before serving, or serve rassa alongside the steamed patodis.', mr: 'जेवताना पाटवड्या रस्स्यात सोडा किंवा रस्सा सोबत सर्व्ह करा. भाकरीसोबत आस्वाद घ्या.', hi: 'परोसते समय पाटवडी को रस्से में डालें या अलग से भाकरी के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Jowar Bhakri', mr: 'गरम ज्वारीची भाकरी', hi: 'गरम ज्वार की भाकरी' },
      { en: 'Steamed Rice with Rassa', mr: 'रस्सा-भात', hi: 'रस्सा और चावल' }
    ],
    substitutions: [
      { en: 'Patodis can be lightly pan-fried for extra crispness.', mr: 'पाटवड्या तव्यावर थोड्या शॅलो फ्राय करूनही वापरू शकता.', hi: 'पाटवडी को हल्का सा तवे पर सेक कर भी डाल सकते हैं।' }
    ],
    allergens: ['Besan (Gram flour)'],
    searchAliases: ['patodi rassa', 'पाटवडी रस्सा', 'patwadi rassa', 'patodi bhaji']
  },
  {
    id: 'khandeshi-bharli-vangi',
    name: {
      en: 'Khandeshi Bharli Vangi (Stuffed Brinjal)',
      mr: 'खान्देशी भरली वांगी',
      hi: 'खान्देशी भरवा बैंगन'
    },
    transliteration: 'Khandeshi Bharli Vangi',
    description: {
      en: 'Small tender brinjals stuffed with a mouthwatering masala of roasted peanuts, sesame, dry coconut, Khandeshi kala masala, and slow-cooked to perfection.',
      mr: 'भाजलेले शेंगदाणे, तीळ, खोबरे आणि अस्सल काळा मसाला भरून मंद आचेवर शिजवलेली चमचमीत भरली वांगी.',
      hi: 'भुनी मूंगफली, तिल, सूखा नारियल और असली काळा मसाला से भरे छोटे बैंगन, धीमी आंच पर पके हुए।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 15,
    cookTime: 25,
    difficulty: 'medium',
    servings: 4,
    cost: 110,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'brinjal', name: { en: 'Small purple/green brinjals (slit X)', mr: 'लहान वांगी (चार चिरा दिलेली)', hi: 'छोटे बैंगन (चार चीरे लगे)' }, amount: 8, unit: 'pieces', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Roasted peanuts', mr: 'भाजलेले शेंगदाणे', hi: 'भुनी मूंगफली' }, amount: 0.5, unit: 'cup', category: 'spices' },
      { id: 'dry_coconut', name: { en: 'Grated dry coconut', mr: 'सुके खोबरे', hi: 'सूखा नारियल' }, amount: 3, unit: 'tbsp', category: 'spices' },
      { id: 'sesame_seeds', name: { en: 'Sesame seeds (Til)', mr: 'तीळ', hi: 'सफेद तिल' }, amount: 1, unit: 'tbsp', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'काळा मसाला', hi: 'काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन' }, amount: 10, unit: 'cloves', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Grind roasted peanuts, coconut, sesame seeds, garlic, ginger, kala masala, red chilli powder, and salt into a coarse stuffing.', mr: 'शेंगदाणे, खोबरे, तीळ, लसूण, आले, काळा मसाला, तिखट आणि मीठ जाडसर वाटून सारण तयार करा.', hi: 'मूंगफली, नारियल, तिल, लहसुन, अदरक, काळा मसाला, मिर्च और नमक को दरदरा पीसकर मसाला बनाएं।' } },
      { step: 2, text: { en: 'Slit brinjals leaving the stem intact. Stuff the prepared masala tightly into each brinjal.', mr: 'वांग्यांचे देठ न काढता चार चिरा द्या आणि त्यात तयार मसाला गच्च भरा.', hi: 'डंठल लगे रहने दें, बैंगन में चीरा लगाकर मसाला अच्छी तरह भरें।' } },
      { step: 3, text: { en: 'Heat 3 tbsp oil in a pan, add mustard seeds and hing. Place the stuffed brinjals gently in the oil.', mr: 'कढईत ३ मोठे चमचे तेल तापवून मोहरी व हिंग घाला. भरलेली वांगी हळूच तेलात ठेवा.', hi: 'कड़ाही में ३ चम्मच तेल गरम कर राई व हींग डालें। भरे हुए बैंगन तेल में रखें।' } },
      { step: 4, text: { en: 'Cover with a plate holding water on top. Cook on medium-low flame for 15-20 minutes, turning occasionally until brinjals are melt-in-mouth tender.', mr: 'झाकणावर पाणी ठेवून मंद आचेवर १५-२० मिनिटे वाफ काढा. वांगी मऊ व रसरशीत होईपर्यंत शिजू द्या.', hi: 'ढक्कन पर पानी रखकर धीमी आंच पर १५-२० मिनट पकाएं ताकि बैंगन एकदम नरम हो जाएं।' } },
      { step: 5, text: { en: 'Serve with hot Jowar Bhakri or chapati and Varan Bhat.', mr: 'गरमागरम ज्वारीची भाकरी किंवा चपाती आणि वरण-भातासोबत वाढा.', hi: 'गरमागरम ज्वार भाकरी या रोटी और दाल-चावल के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Jowar Bhakri', mr: 'गरम ज्वारीची भाकरी', hi: 'गरम ज्वार की भाकरी' },
      { en: 'Varan Bhat with Ghee', mr: 'तूप-वरण भात', hi: 'घी दाल चावल' }
    ],
    substitutions: [
      { en: 'Potatoes or capsicum can be stuffed with the same masala.', mr: 'बटाटे किंवा ढोबळी मिरचीही याच मसाल्याने भरू शकता.', hi: 'आलू या शिमला मिर्च भी इसी मसाले से भरी जा सकती है।' }
    ],
    allergens: ['Peanuts', 'Sesame'],
    searchAliases: ['bharli vangi', 'भरली वांगी', 'stuffed brinjal', 'khandeshi bharli vangi', 'baingan sabzi']
  },
  {
    id: 'khandeshi-gavran-chicken-rassa',
    name: {
      en: 'Khandeshi Gavran Chicken Rassa',
      mr: 'खान्देशी गावठी चिकन रस्सा',
      hi: 'खान्देशी देसी चिकन रस्सा'
    },
    transliteration: 'Khandeshi Chicken Rassa',
    description: {
      en: 'Fiery Khandeshi country-chicken curry cooked in deep roasted black masala with rich coconut gravy, served with thick jowar bhakri.',
      mr: 'अस्सल गावरान कोंबडी, भाजलेल्या खोबऱ्याचे व कांद्याचे वाटण आणि झणझणीत खान्देशी काळा मसाला घातलेला लाल-काळा तर्रीदार रस्सा.',
      hi: 'देसी चिकन, गहरे भुने प्याज-नारियल पेस्ट और तीखे काले मसाले में बना तर्रीदार रस्सा।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'non-veg',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 20,
    cookTime: 40,
    difficulty: 'medium',
    servings: 4,
    cost: 320,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', name: { en: 'Country Chicken / Gavran Chicken', mr: 'गावठी चिकन (तुकडे केलेले)', hi: 'देसी चिकन (टुकड़ों में)' }, amount: 600, unit: 'g', category: 'protein' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'खान्देशी काळा मसाला', hi: 'खान्देशी काळा मसाला' }, amount: 2.5, unit: 'tbsp', category: 'spices' },
      { id: 'dry_coconut', name: { en: 'Dry coconut (roasted brown)', mr: 'भाजलेले सुके खोबरे', hi: 'भुना सूखा नारियल' }, amount: 60, unit: 'g', category: 'spices' },
      { id: 'onion', name: { en: 'Onions (roasted on flame)', mr: 'कांदे (आचेवर भाजलेले)', hi: 'आंच पर भुना प्याज' }, amount: 4, unit: 'medium', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन' }, amount: 18, unit: 'cloves', category: 'vegetables' },
      { id: 'ginger', name: { en: 'Ginger piece', mr: 'आले तुकडा', hi: 'अदरक' }, amount: 1.5, unit: 'inch', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Marinate chicken with turmeric, salt, and ginger-garlic paste for 20 minutes.', mr: 'चिकनला हळद, मीठ आणि आले-लसूण पेस्ट लावून २० मिनिटे मुरत ठेवा.', hi: 'चिकन में हल्दी, नमक और अदरक-लहसुन पेस्ट लगाकर २० मिनट रखें।' } },
      { step: 2, text: { en: 'Roast onions directly on flame till outer layer is charred. Roast dry coconut slices till dark golden. Grind together with ginger, garlic, and coriander to make black vatan.', mr: 'कांदा गॅसवर भाजून घ्या आणि खोबरे तव्यावर परता. आले, लसूण, कोथिंबीरसह बारीक वाटून काळे वाटण तयार करा.', hi: 'प्याज को आंच पर भूनें और नारियल सेक लें। अदरक-लहसुन और धनिए के साथ पीसकर काला पेस्ट बनाएं।' } },
      { step: 3, text: { en: 'In a pressure cooker, cook marinated chicken with 1 chopped onion and 2 cups water for 3 whistles to get Alani Pani (flavorful stock).', mr: 'कुकरमध्ये १ बारीक कांदा, चिकन आणि २ कप पाणी घालून ३ शिट्ट्या काढून आळणी पाणी (सूप) वेगळे करा.', hi: 'कुकर में १ प्याज, चिकन और २ कप पानी डालकर ३ सीटी लगाएं और चिकन का सूप अलग करें।' } },
      { step: 4, text: { en: 'In a heavy pot, heat 4 tbsp oil. Sauté black vatan, Kala Masala, and red chilli powder until rich oil floats.', mr: 'टोपात ४ चमचे तेल गरम करून काळे वाटण, काळा मसाला आणि तिखट तेल सुटेपर्यंत परता.', hi: 'पतीले में ४ चम्मच तेल में पेस्ट, काळा मसाला और मिर्च डालकर तरी आने तक भूनें।' } },
      { step: 5, text: { en: 'Add cooked chicken pieces and hot stock. Simmer for 15 minutes to develop authentic Khandeshi tarri.', mr: 'शिजलेले चिकन आणि आळणी पाणी घालून १५ मिनिटे उकळा जेणेकरून झणझणीत तर्री येईल.', hi: 'पका चिकन और सूप मिलाकर १५ मिनट उबालें ताकि तीखी तर्री तैयार हो जाए।' } }
    ],
    accompaniments: [
      { en: 'Hot Jowar or Bajra Bhakri', mr: 'गरमागरम बाजरी/ज्वारीची भाकरी', hi: 'गरम ज्वार या बाजरे की भाकरी' },
      { en: 'Alani Bhat (Stock Rice)', mr: 'आळणी भात', hi: 'सूप वाला चावल' },
      { en: 'Khandeshi Thecha & Raw Onion', mr: 'ठेचा आणि कांदा', hi: 'ठेचा और प्याज' }
    ],
    substitutions: [
      { en: 'Broiler chicken can be used; reduce cooking time accordingly.', mr: 'ब्रॉयलर चिकन वापरल्यास शिजवायची वेळ कमी करा.', hi: 'ब्रॉयलर चिकन भी इस्तेमाल कर सकते हैं।' }
    ],
    allergens: ['Poultry'],
    searchAliases: ['khandeshi chicken', 'गावठी चिकन', 'gavran chicken rassa', 'chicken rassa', 'kala masala chicken']
  },
  {
    id: 'khandeshi-matki-usal',
    name: {
      en: 'Khandeshi Matki Usal',
      mr: 'खान्देशी मटकी उसळ',
      hi: 'खान्देशी मटकी उसल'
    },
    transliteration: 'Matki Usal',
    description: {
      en: 'Nutrient-rich sprouted moth beans cooked with Khandeshi spices, garlic, mustard seeds, and fresh coriander. Wholesome and protein-packed.',
      mr: 'मोड आलेली मटकी, लसूण, हिरवी मिरची किंवा काळा मसाला आणि खमंग फोडणीत केलेली पौष्टिक खान्देशी उसळ.',
      hi: 'अंकुरित मोठ (मटकी), लहसुन, काळा मसाला और ताजे धनिए से बनी पौष्टिक और प्रोटीन युक्त उसल।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 15,
    difficulty: 'easy',
    servings: 4,
    cost: 70,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'matki', name: { en: 'Sprouted Matki (Moth beans)', mr: 'मोड आलेली मटकी', hi: 'अंकुरित मटकी' }, amount: 2, unit: 'cups', category: 'pulses' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा (बारीक चिरलेला)', hi: 'बारीक कटा प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves (crushed)', mr: 'ठेचलेला लसूण', hi: 'कुटा हुआ लहसुन' }, amount: 6, unit: 'cloves', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala or Goda Masala', mr: 'काळा मसाला / गोडा मसाला', hi: 'काळा मसाला' }, amount: 1, unit: 'tbsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat 2 tbsp oil. Add mustard seeds, cumin, hing, and crushed garlic; sauté until aromatic.', mr: 'कढईत २ मोठे चमचे तेल तापवा. मोहरी, जिरे, हिंग आणि ठेचलेला लसूण घालून परता.', hi: 'तेल गरम करें। राई, जीरा, हींग और लहसुन डालकर तड़का लगाएं।' } },
      { step: 2, text: { en: 'Add chopped onion and sauté till soft. Add turmeric, kala masala, and red chilli powder.', mr: 'कांदा घालून मऊ होईपर्यंत परता. हळद, काळा मसाला आणि तिखट घाला.', hi: 'प्याज डालकर भूनें। हल्दी, काळा मसाला और मिर्च डालें।' } },
      { step: 3, text: { en: 'Add sprouted matki, salt, and 0.5 cup water. Cover and steam on low flame for 8-10 minutes until tender.', mr: 'मोड आलेली मटकी, चवीनुसार मीठ आणि अर्धा कप पाणी घालून झाकण ठेवा. मंद आचेवर ८-१० मिनिटे वाफ काढा.', hi: 'अंकुरित मटकी, नमक और आधा कप पानी डालकर ढकें। धीमी आंच पर ८-१० मिनट पकने दें।' } },
      { step: 4, text: { en: 'Garnish with fresh coriander and grated fresh coconut. Serve with hot Bhakri or chapati.', mr: 'कोथिंबीर आणि ओले खोबरे घालून बाजरीच्या भाकरीसोबत किंवा चपातीसोबत वाढा.', hi: 'ताज़ा धनिया और नारियल डालकर गर्म भाकरी या रोटी के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Jowar Bhakri', mr: 'गरम ज्वारीची भाकरी', hi: 'गरम ज्वार की भाकरी' },
      { en: 'Koshimbir and Mattha', mr: 'कोशिंबीर आणि ताक', hi: 'सलाद और छाछ' }
    ],
    substitutions: [
      { en: 'Sprouted moong or vatana can be used as an alternative.', mr: 'मटकीऐवजी मोड आलेले मूग किंवा वाटाणे वापरू शकता.', hi: 'मटकी की जगह अंकुरित मूंग का उपयोग कर सकते हैं।' }
    ],
    allergens: ['Pulses / Legumes'],
    searchAliases: ['matki usal', 'मटकी उसळ', 'moth beans', 'khandeshi usal', 'sprouted matki']
  },
  {
    id: 'khandeshi-jowar-bhakri',
    name: {
      en: 'Hand-Patted Jowar Bhakri',
      mr: 'हातावर थापलेली ज्वारीची भाकरी',
      hi: 'हाथ से बनी ज्वार की भाकरी'
    },
    transliteration: 'Jowar Bhakri',
    description: {
      en: 'Traditional gluten-free Indian flatbread made of freshly milled sorghum flour, hand-patted, cooked with water spread on a hot tawa, and puffed on an open flame.',
      mr: 'कोमट पाण्यात भिजवून हातावर थापलेली, तव्यावर पाणी लावून दोन्ही बाजूंनी खमंग भाजलेली टम्म फुगणारी ज्वारीची भाकरी.',
      hi: 'ताजे ज्वार के आटे से हाथ से थपकी देकर बनी, तवे पर पानी लगाकर दोनों तरफ से सिकी फूली हुई भाकरी।'
    },
    category: 'accompaniment',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 10,
    cookTime: 10,
    difficulty: 'medium',
    servings: 4,
    cost: 30,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'jowar_flour', name: { en: 'Fresh fine Jowar flour (Sorghum)', mr: 'बारीक दळलेले ताजे ज्वारीचे पीठ', hi: 'ताजा बारीक ज्वार का आटा' }, amount: 2, unit: 'cups', category: 'grains' }
    ],
    instructions: [
      { step: 1, text: { en: 'Take jowar flour in a parat (large plate), add warm water gradually, and knead firmly with your palm heel into a pliable soft dough.', mr: 'परातीत पीठ घेऊन कोमट पाणी घालत हाताच्या तळव्याने मळून मऊ व एकजीव गोळा बनवा.', hi: 'परात में आटा लें, गुनगुना पानी डालते हुए हथेली से अच्छी तरह मसलकर नरम आटा गूंध लें।' } },
      { step: 2, text: { en: 'Dust dry flour on the rolling board. Pat the dough ball gently with your fingers and palm rotating in a circle until flat and round.', mr: 'पोळपाटावर सुके पीठ पसरून गोळा हाताने हळूहळू गोलाकार फिरवत थापून घ्या.', hi: 'चकले पर सूखा आटा छिड़कें और लोई को हाथ की थपकी से गोल आकार में फैलाएं।' } },
      { step: 3, text: { en: 'Place the patted bhakri onto a hot cast-iron tawa. Smear water gently over the top surface with your hand.', mr: 'गरम तव्यावर भाकरी टाका. वरच्या बाजूला हाताने हलकेच पाणी लावा.', hi: 'गरम तवे पर भाकरी डालें और ऊपर की सतह पर हाथ से पानी लगाएं।' } },
      { step: 4, text: { en: 'When water begins to dry, flip the bhakri. Roast the other side until light brown spots appear, then puff directly on gas flame.', mr: 'पाणी सुकू लागले की भाकरी उलटा. दुसरी बाजू भाजून थेट गॅसच्या आचेवर टम्म फुगवा.', hi: 'पानी सूखने लगे तो पलट दें। दूसरी तरफ सिकने पर सीधी आंच पर रखकर फुलाएं।' } }
    ],
    accompaniments: [
      { en: 'Khandeshi Shev Bhaji / Bharit', mr: 'शेव भाजी / वांग्याचं भरीत', hi: 'शेव भाजी / बैंगन भरता' },
      { en: 'Thecha with Sajuk Toop (Ghee)', mr: 'ठेचा आणि साजूक तूप', hi: 'ठेचा और शुद्ध घी' }
    ],
    substitutions: [
      { en: 'Bajra flour can be used following the same method.', mr: 'बाजरीचे पीठ वापरून बाजरीची भाकरीही याच पद्धतीने करता येते.', hi: 'इसी विधि से बाजरे की भाकरी भी बनाई जा सकती है।' }
    ],
    allergens: [],
    searchAliases: ['jowar bhakri', 'ज्वारीची भाकरी', 'bhakri', 'jwari bhakri', 'sorghum roti']
  },
  {
    id: 'khandeshi-dry-garlic-chutney',
    name: {
      en: 'Khandeshi Sukki Lasun Chutney (Dry Garlic Chutney)',
      mr: 'सुक्या लसणाची चटणी (खान्देशी लसूण चटणी)',
      hi: 'सूखी लहसुन की चटणी'
    },
    transliteration: 'Lasun Chutney',
    description: {
      en: 'Addictive dry red chutney made with roasted dry coconut, pungent garlic, roasted peanuts, and spicy red chillies. The perfect spice kick.',
      mr: 'भाजलेले सुके खोबरे, भरपूर लसूण, खमंग शेंगदाणे आणि लाल तिखट एकत्र खलबत्त्यात कुटलेली चवदार सुकी चटणी.',
      hi: 'भुने सूखे नारियल, भरपूर लहसुन, मूंगफली और तीखी लाल मिर्च से बनी तीखी सूखी चटनी।'
    },
    category: 'accompaniment',
    mealTypes: ['lunch', 'dinner', 'snack'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'spicy',
    prepTime: 5,
    cookTime: 5,
    difficulty: 'easy',
    servings: 10,
    cost: 50,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'garlic', name: { en: 'Garlic cloves (unpeeled or peeled)', mr: 'लसूण पाकळ्या', hi: 'लहसुन की कलियां' }, amount: 20, unit: 'cloves', category: 'vegetables' },
      { id: 'dry_coconut', name: { en: 'Grated dry coconut (Khopra)', mr: 'सुके खोबरे किसलेले', hi: 'कसा सूखा नारियल' }, amount: 0.5, unit: 'cup', category: 'spices' },
      { id: 'peanuts', name: { en: 'Roasted peanuts', mr: 'भाजलेले शेंगदाणे', hi: 'भुनी मूंगफली' }, amount: 3, unit: 'tbsp', category: 'spices' },
      { id: 'red_chilli_powder', name: { en: 'Kashmiri and spicy red chilli powder', mr: 'लाल तिखट', hi: 'लाल मिर्च पाउडर' }, amount: 2, unit: 'tbsp', category: 'spices' },
      { id: 'cumin_seeds', name: { en: 'Cumin seeds', mr: 'जिरे', hi: 'जीरा' }, amount: 1, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Lightly dry roast grated dry coconut on low flame until golden and crisp. Let it cool.', mr: 'किसलेले सुके खोबरे मंद आचेवर सोनेरी व कुरकुरीत होईपर्यंत भाजा. थंड होऊ द्या.', hi: 'कसे हुए सूखे नारियल को धीमी आंच पर सुनहरा होने तक भूनकर ठंडा करें।' } },
      { step: 2, text: { en: 'In a mixer grinder or stone mortar, pulse roasted coconut, garlic cloves, peanuts, cumin, red chilli powder, and salt in short pulses.', mr: 'मिक्सरमध्ये किंवा खलबत्त्यात खोबरे, लसूण, शेंगदाणे, जिरे, लाल तिखट आणि मीठ पल्स मोडवर जाडसर वाटून घ्या.', hi: 'मिक्सर में नारियल, लहसुन, मूंगफली, जीरा, लाल मिर्च और नमक डालकर दरदरा पीस लें।' } },
      { step: 3, text: { en: 'Store in an airtight jar. Enjoy with bhakri, vada pav, or daily dal-rice with a drizzle of warm groundnut oil.', mr: 'हवाबंद डब्यात भरा. भाकरी, वडापाव किंवा वरण-भातावर थोडे गरम शेंगदाणा तेल घालून आस्वाद घ्या.', hi: 'एयरटाइट जार में रखें। भाकरी, वड़ा पाव या दाल-चावल पर थोड़ा मूंगफली का तेल डालकर खाएं।' } }
    ],
    accompaniments: [
      { en: 'Hot Bhakri or Poli', mr: 'गरम भाकरी किंवा पोळी', hi: 'गरम भाकरी या रोटी' },
      { en: 'Warm groundnut oil drizzle', mr: 'कच्चे शेंगदाणा तेल', hi: 'मूंगफली का तेल' }
    ],
    substitutions: [
      { en: 'Sesame seeds (til) can be added for extra nutty flavour.', mr: 'तीळ घालूनही ही चटणी अधिक स्वादिष्ट बनते.', hi: 'तिल मिलाकर भी यह चटनी बनाई जा सकती है।' }
    ],
    allergens: ['Peanuts'],
    searchAliases: ['lasun chutney', 'लसूण चटणी', 'dry garlic chutney', 'vada pav chutney', 'khandeshi chutney']
  },
  {
    id: 'khandeshi-kala-masala-dal',
    name: {
      en: 'Khandeshi Kala Masala Daal',
      mr: 'खान्देशी काळ्या मसाल्याचे वरण / डाळ',
      hi: 'खान्देशी काले मसाले वाली दाल'
    },
    transliteration: 'Kala Masala Daal',
    description: {
      en: 'Comforting toor dal simmered with authentic Khandeshi roasted kala masala, garlic, mustard seeds, and coriander. Wholesome everyday soul food.',
      mr: 'मऊ शिजवलेली तूर डाळ, लसूण, मोहरी आणि अस्सल काळ्या मसाल्याची खमंग फोडणी देऊन केलेली चवदार डाळ.',
      hi: 'उबली हुई अरहर दाल, लहसुन, राई और असली काले मसाले के तड़के से बनी लाजवाब दाल।'
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
    cost: 85,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'toor_dal', name: { en: 'Toor dal (pigeon peas)', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'खान्देशी काळा मसाला', hi: 'काळा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves (crushed)', mr: 'ठेचलेला लसूण', hi: 'कुटा हुआ लहसुन' }, amount: 8, unit: 'cloves', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा', hi: 'प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato (chopped)', mr: 'टोमॅटो', hi: 'टमाटर' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Pressure cook toor dal with turmeric and 2.5 cups water for 4 whistles until completely soft. Whisk smooth.', mr: 'तूर डाळीत हळद आणि २.५ कप पाणी घालून कुकरमध्ये ४ शिट्ट्या काढून मऊ शिजवून रवीने घोटा.', hi: 'अरहर दाल में हल्दी और पानी डालकर कुकर में ४ सीटी लगाकर अच्छे से घोंट लें।' } },
      { step: 2, text: { en: 'Heat 2 tbsp oil or ghee. Add mustard seeds, cumin, hing, and crushed garlic; sauté until garlic is aromatic and golden.', mr: 'तेलात किंवा तुपात मोहरी, जिरे, हिंग आणि भरपूर लसूण घालून खमंग फोडणी करा.', hi: 'तेल या घी में राई, जीरा, हींग और लहसुन डालकर सुनहरा होने तक भूनें।' } },
      { step: 3, text: { en: 'Add onions and tomato; cook until soft. Stir in Khandeshi Kala Masala and red chilli powder.', mr: 'कांदा व टोमॅटो घालून परता. यात काळा मसाला आणि थोडे लाल तिखट घाला.', hi: 'प्याज और टमाटर डालकर भूनें। इसमें काळा मसाला और लाल मिर्च मिलाएं।' } },
      { step: 4, text: { en: 'Pour the cooked dal, adjust consistency with warm water, add salt, and simmer for 8 minutes on low flame.', mr: 'घोटलेली डाळ घाला, आवश्यकतेनुसार पाणी आणि मीठ घालून मंद आचेवर ८ मिनिटे उकळू द्या.', hi: 'उबली दाल डालें, पानी और नमक मिलाकर धीमी आंच पर ८ मिनट तक उबलने दें।' } }
    ],
    accompaniments: [
      { en: 'Steamed Indrayani Rice with pure Ghee', mr: 'इंद्रायणी भात आणि साजूक तूप', hi: 'गरम चावल और शुद्ध घी' },
      { en: 'Vangyache Bharit & Bhakri', mr: 'वांग्याचं भरीत आणि भाकरी', hi: 'बैंगन भरता और भाकरी' }
    ],
    substitutions: [
      { en: 'Mix toor dal with a handful of chana dal for thicker texture.', mr: 'घट्टपणासाठी तूर डाळीसोबत थोडी चणा डाळ घालू शकता.', hi: 'गाढ़ेपन के लिए थोड़ी चना दाल भी मिला सकते हैं।' }
    ],
    allergens: ['Pulses / Lentils'],
    searchAliases: ['kala masala dal', 'काळा मसाला डाळ', 'khandeshi dal', 'spicy dal', 'varan']
  },
  {
    id: 'khandeshi-shev-poha',
    name: {
      en: 'Khandeshi Shev Poha',
      mr: 'खान्देशी शेव पोहे',
      hi: 'खान्देशी शेव पोहा'
    },
    transliteration: 'Shev Poha',
    description: {
      en: 'Fluffy tempered flattened rice loaded with crunchy peanuts, onions, green chillies, topped generously with spicy Khandeshi besan shev, coriander, and fresh lemon.',
      mr: 'कांदे, हिरवी मिरची, खमंग शेंगदाणे आणि हळदीची फोडणी दिलेले मऊ पोहे; त्यावर भरपूर तिखट खान्देशी शेव, कोथिंबीर आणि लिंबू पिळून वाढलेले.',
      hi: 'मुलायम खिले-खिले पोहे, भुनी मूंगफली और हरी मिर्च का तड़का, ऊपर से तीखी बेसन शेव, हरा धनिया और नींबू का रस।'
    },
    category: 'breakfast',
    mealTypes: ['breakfast', 'snack'],
    cuisine: 'khandesh',
    dietary: 'vegan',
    isKhandeshi: true,
    isMaharashtrian: true,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 10,
    difficulty: 'easy',
    servings: 3,
    cost: 60,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'poha', name: { en: 'Thick Poha (flattened rice)', mr: 'जाड पोहे', hi: 'मोटा पोहा' }, amount: 2.5, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा (बारीक चिरलेला)', hi: 'बारीक कटा प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Raw peanuts', mr: 'शेंगदाणे', hi: 'मूंगफली' }, amount: 0.25, unit: 'cup', category: 'spices' },
      { id: 'green_chillies', name: { en: 'Green chillies (chopped)', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 3, unit: 'pieces', category: 'vegetables' },
      { id: 'mustard_seeds', name: { en: 'Mustard seeds', mr: 'मोहरी', hi: 'राई' }, amount: 1, unit: 'tsp', category: 'spices' },
      { id: 'turmeric', name: { en: 'Turmeric powder', mr: 'हळद', hi: 'हल्दी' }, amount: 0.5, unit: 'tsp', category: 'spices' },
      { id: 'shev', name: { en: 'Spicy Besan Shev for topping', mr: 'तिखट शेव', hi: 'तीखी बेसन शेव' }, amount: 1, unit: 'cup', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Rinse poha in a colander under running water for 30 seconds. Drain thoroughly and sprinkle with 0.5 tsp salt and pinch of sugar.', mr: 'पोहे चाळणीत पाण्याखाली ३० सेकंद धुवून पाणी निथळू द्या. त्यावर थोडे मीठ व साखर टाकून हलकेच मिसळा.', hi: 'पोहा को छलनी में पानी से धोकर निथार लें। हल्का नमक और थोड़ी चीनी छिड़कें।' } },
      { step: 2, text: { en: 'Heat oil in a kadai. Fry peanuts till crunchy, then push to side and add mustard seeds, cumin, hing, green chillies, and curry leaves.', mr: 'कढईत तेल तापवून शेंगदाणे कुरकुरीत तळा. नंतर मोहरी, जिरे, कढीपत्ता आणि हिरवी मिरची घाला.', hi: 'कड़ाही में तेल गरम कर मूंगफली तलें। फिर राई, जीरा, कढ़ी पत्ता और हरी मिर्च डालें।' } },
      { step: 3, text: { en: 'Add chopped onions and sauté until translucent. Add turmeric powder and mix.', mr: 'कांदा घालून मऊ होईपर्यंत परता. हळद घालून छान मिसळा.', hi: 'प्याज डालकर हल्का भूनें। हल्दी मिलाकर चलाएं।' } },
      { step: 4, text: { en: 'Add rinsed poha, toss gently on low heat for 3-4 minutes, cover with lid and steam for 2 minutes.', mr: 'भिजवलेले पोहे घालून हलक्या हाताने परता, झाकण ठेवून २ मिनिटे वाफ काढा.', hi: 'भीगा पोहा डालकर हल्के हाथ से मिलाएं, २ मिनट ढककर भाप दें।' } },
      { step: 5, text: { en: 'Plate hot poha, top lavishly with crunchy spicy shev, fresh coriander, raw onion, and a lemon squeeze.', mr: 'गरमागरम पोहे प्लेटमध्ये काढून त्यावर भरपूर तिखट शेव, कोथिंबीर, बारीक कांदा आणि लिंबू पिळून वाढा.', hi: 'प्लेट में निकालकर ऊपर से खूब सारी तीखी शेव, हरा धनिया, कच्चा प्याज और नींबू निचोड़ें।' } }
    ],
    accompaniments: [
      { en: 'Hot Masala Chai', mr: 'गरमागरम मसाला चहा', hi: 'गरमागरम मसाला चाय' },
      { en: 'Lemon wedge & raw onion', mr: 'लिंबू आणि कच्चा कांदा', hi: 'नींबू और कच्चा प्याज' }
    ],
    substitutions: [
      { en: 'Add boiled potato cubes to make Khandeshi Batata-Shev Poha.', mr: 'बटाट्याचे तुकडे घालून बटाटा-शेव पोहे बनवू शकता.', hi: 'उबले आलू मिलाकर आलू-शेव पोहा बना सकते हैं।' }
    ],
    allergens: ['Peanuts', 'Gram flour (Besan)'],
    searchAliases: ['shev poha', 'शेव पोहे', 'poha', 'khandeshi poha', 'breakfast poha']
  }
];
