export const MORE_RECIPES = [
  {
    id: 'khandeshi-dal-gandori',
    name: { en: 'Khandeshi Dal Gandori', mr: 'खान्देशी डाळ गंडोरी', hi: 'खान्देशी दाल गंडोरी' },
    transliteration: 'Dal Gandori',
    description: {
      en: 'Traditional Khandeshi thick dal made with coarse toor dal, whole garlic cloves, peanuts, and dry red chillies, slow-cooked in an earthen pot.',
      mr: 'जाडसर भरडलेली तूर डाळ, अख्ख्या लसूण पाकळ्या, शेंगदाणे आणि सुकी लाल मिरची घालून केलेली अस्सल खान्देशी डाळ गंडोरी.',
      hi: 'दरदरी अरहर दाल, साबुत लहसुन, मूंगफली और साबुत लाल मिर्च से बनी पारंपरिक खान्देशी गाढ़ी दाल।'
    },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 10, cookTime: 25, difficulty: 'easy', servings: 4, cost: 70,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'toor_dal', name: { en: 'Toor dal', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'peanuts', name: { en: 'Raw peanuts', mr: 'शेंगदाणे', hi: 'मूंगफली' }, amount: 3, unit: 'tbsp', category: 'spices' },
      { id: 'garlic', name: { en: 'Whole garlic cloves', mr: 'लसूण पाकळ्या', hi: 'लहसुन' }, amount: 12, unit: 'cloves', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'काळा मसाला', hi: 'काळा मसाला' }, amount: 1.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Pressure cook toor dal and peanuts with water and turmeric until tender.', mr: 'तूर डाळ आणि शेंगदाणे हळद घालून कुकरमध्ये शिजवा.', hi: 'अरहर दाल और मूंगफली को हल्दी के साथ उबाल लें।' } },
      { step: 2, text: { en: 'Temper garlic and mustard seeds in oil, add dal, kala masala, and simmer thick with Jowar Bhakri.', mr: 'तेलात लसूण तळून डाळ आणि काळा मसाला घाला, मंद आचेवर घट्ट उकळा.', hi: 'लहसुन का तड़का लगाकर दाल और काळा मसाला मिलाएं और गाढ़ा होने तक उबालें।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri and Thecha', mr: 'ज्वारीची भाकरी आणि ठेचा', hi: 'ज्वार भाकरी और ठेचा' }],
    substitutions: [{ en: 'Chana dal can be added for texture.', mr: 'चणा डाळही घालू शकता.', hi: 'चना दाल भी मिला सकते हैं।' }],
    allergens: ['Pulses', 'Peanuts'],
    searchAliases: ['dal gandori', 'डाळ गंडोरी', 'khandeshi dal', 'thick dal']
  },
  {
    id: 'khandeshi-tarri-rassa',
    name: { en: 'Khandeshi Zanzanit Tarri Rassa', mr: 'खान्देशी झणझणीत तर्री रस्सा', hi: 'खान्देशी तीखा तर्री रस्सा' },
    transliteration: 'Zanzanit Tarri Rassa',
    description: {
      en: 'Spicy black-masala thin broth with a floating layer of fiery red oil, eaten with hot Bhakri or poured over rice.',
      mr: 'भाजलेला कांदा-खोबरे आणि अस्सल काळा मसाल्याचा झणझणीत पातळ रस्सा, ज्यावर लालभडक तर्री तरंगते.',
      hi: 'भुने प्याज-नारियल और काले मसाले से बनी तीखी पतली तरी, भाकरी या चावल के साथ।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'khandesh', dietary: 'vegan',
    isKhandeshi: true, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 10, cookTime: 20, difficulty: 'easy', servings: 4, cost: 60,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'onion', name: { en: 'Charred onions', mr: 'भाजलेला कांदा', hi: 'भुना प्याज' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'dry_coconut', name: { en: 'Dry coconut', mr: 'सुके खोबरे', hi: 'सूखा नारियल' }, amount: 40, unit: 'g', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic and ginger', mr: 'आले-लसूण', hi: 'अदरक-लहसुन' }, amount: 10, unit: 'cloves', category: 'vegetables' },
      { id: 'kala_masala', name: { en: 'Khandeshi Kala Masala', mr: 'खान्देशी काळा मसाला', hi: 'काळा मसाला' }, amount: 2, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Grind roasted onions and coconut with ginger-garlic to make black vatan.', mr: 'भाजलेला कांदा, खोबरे, आले, लसूण बारीक वाटून घ्या.', hi: 'भुना प्याज, नारियल, अदरक-लहसुन पीस लें।' } },
      { step: 2, text: { en: 'Sauté in 3 tbsp groundnut oil till tarri separates. Add kala masala, hot water, and simmer for 15 minutes.', mr: 'तेलात वाटण आणि काळा मसाला परतून गरम पाणी घाला व १५ मिनिटे उकळा.', hi: 'तेल में पेस्ट और मसाला भूनकर गर्म पानी डालें और १५ मिनट उबालें।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri & Sliced Onions', mr: 'ज्वारीची भाकरी व कांदा', hi: 'ज्वार भाकरी और प्याज' }],
    substitutions: [{ en: 'Add boiled potatoes or boiled eggs if desired.', mr: 'बटाटे किंवा अंडी घालू शकता.', hi: 'आलू या उबले अंडे डाल सकते हैं।' }],
    allergens: [],
    searchAliases: ['tarri rassa', 'तर्री रस्सा', 'khandeshi rassa', 'spicy gravy']
  },
  {
    id: 'sheng-sola',
    name: { en: 'Marathwada Sheng Sola (Groundnut Curry)', mr: 'मराठवाडा शेंग सोला', hi: 'मराठवाड़ा शेंग सोला' },
    transliteration: 'Sheng Sola',
    description: {
      en: 'A rustic Marathwada specialty made by crushing soaked roasted peanuts and garlic in a fiery spiced gravy, served with thick Bajra Bhakri.',
      mr: 'मराठवाड्याची गावरान चव: भरपूर शेंगदाणे, लसूण आणि लाल तिखटाच्या रश्श्यात उकळलेला चमचमीत शेंग सोला.',
      hi: 'मराठवाड़ा का पारंपरिक व्यंजन: भुनी मूंगफली और लहसुन की तीखी गाढ़ी तरी, बाजरे की भाकरी के साथ।'
    },
    category: 'lunch', mealTypes: ['lunch', 'dinner'], cuisine: 'marathwada', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 10, cookTime: 18, difficulty: 'easy', servings: 4, cost: 65,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'peanuts', name: { en: 'Raw peanuts (boiled or roasted)', mr: 'शेंगदाणे', hi: 'मूंगफली' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'garlic', name: { en: 'Garlic cloves', mr: 'लसूण', hi: 'लहसुन' }, amount: 15, unit: 'cloves', category: 'vegetables' },
      { id: 'red_chilli_powder', name: { en: 'Spicy red chilli powder', mr: 'लाल तिखट', hi: 'लाल मिर्च' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Goda Masala or Kala Masala', mr: 'गोडा / काळा मसाला', hi: 'मसाला' }, amount: 1, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Coarsely crush roasted peanuts with garlic and red chilli powder in a mortar.', mr: 'शेंगदाणे, लसूण आणि तिखट खलबत्त्यात जाडसर कुटून घ्या.', hi: 'मूंगफली, लहसुन और मिर्च को खरल में दरदरा कूट लें।' } },
      { step: 2, text: { en: 'Heat oil, add mustard seeds and hing, sauté the crushed mixture with turmeric and 2.5 cups hot water for 10 minutes.', mr: 'तेलात मोहरी-हिंग परतून कूट आणि पाणी घाला, १० मिनिटे उकळू द्या.', hi: 'तेल में तड़का लगाकर पेस्ट और पानी डालें, १० मिनट उबालें।' } }
    ],
    accompaniments: [{ en: 'Hot Bajra Bhakri with Thecha', mr: 'बाजरीची भाकरी आणि ठेचा', hi: 'बाजरा भाकरी और ठेचा' }],
    substitutions: [{ en: 'Cashews can be mixed with peanuts for richness.', mr: 'काजूही थोडे घालू शकता.', hi: 'काजू भी मिला सकते हैं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['sheng sola', 'शेंग सोला', 'marathwada curry', 'peanut curry']
  },
  {
    id: 'saoji-chicken-curry',
    name: { en: 'Vidarbha Saoji Spicy Chicken Curry', mr: 'झणझणीत सावजी चिकन रस्सा', hi: 'नागपुरी सावजी चिकन' },
    transliteration: 'Saoji Chicken',
    description: {
      en: 'The legendary fiery black curry of Nagpur’s Halba Koshti community, spiced with 32 hand-pounded Saoji spices, poppy seeds, and stone-flowers.',
      mr: 'विदर्भाची जगप्रसिद्ध सावजी चव: दगडफूल, खसखस आणि ३२ मसाल्यांच्या मिश्रणात शिजवलेला लाल-काळा तर्रीदार सावजी चिकन रस्सा.',
      hi: 'नागपुर का विश्वप्रसिद्ध तीखा सावजी चिकन, दगड़फूल और खास सावजी मसालों की तीखी तरी में बना।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'vidarbha', dietary: 'non-veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'spicy', prepTime: 20, cookTime: 35, difficulty: 'medium', servings: 4, cost: 340,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', name: { en: 'Chicken pieces', mr: 'चिकन', hi: 'चिकन' }, amount: 600, unit: 'g', category: 'protein' },
      { id: 'onion', name: { en: 'Charred onion paste', mr: 'कांदा वाटण', hi: 'प्याज पेस्ट' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'dry_coconut', name: { en: 'Roasted coconut', mr: 'सुके खोबरे', hi: 'सूखा नारियल' }, amount: 50, unit: 'g', category: 'spices' },
      { id: 'kala_masala', name: { en: 'Saoji Masala (rich black spice blend)', mr: 'अस्सल सावजी मसाला', hi: 'सावजी मसाला' }, amount: 2.5, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Sauté onion-coconut paste in groundnut oil until dark and aromatic.', mr: 'तेलात कांदा-खोबरे वाटण काळपट होईपर्यंत खमंग परता.', hi: 'तेल में प्याज-नारियल पेस्ट गहरा भूरा होने तक भूनें।' } },
      { step: 2, text: { en: 'Add Saoji masala, marinated chicken, hot water, and simmer for 25 minutes till meat is tender and tarri separates.', mr: 'सावजी मसाला, चिकन आणि गरम पाणी घालून २५ मिनिटे उकळा.', hi: 'सावजी मसाला, चिकन और गर्म पानी डालकर २५ मिनट तक पकाएं।' } }
    ],
    accompaniments: [{ en: 'Jowar Bhakri or Steamed Rice', mr: 'ज्वारीची भाकरी किंवा भात', hi: 'ज्वार भाकरी या चावल' }],
    substitutions: [{ en: 'Mutton can be used in place of chicken.', mr: 'मटणाचा सावजी रस्साही करता येतो.', hi: 'मटन से भी बना सकते हैं।' }],
    allergens: ['Poultry'],
    searchAliases: ['saoji chicken', 'सावजी चिकन', 'nagpuri chicken', 'spicy chicken rassa']
  },
  {
    id: 'kolhapuri-pandhra-rassa',
    name: { en: 'Kolhapuri Pandhra Rassa (White Mutton/Chicken Broth)', mr: 'कोल्हापुरी पांढरा रस्सा', hi: 'कोल्हापुरी सफेद रस्सा' },
    transliteration: 'Pandhra Rassa',
    description: {
      en: 'A soothing, aromatic white broth cooked with mutton bone broth, coconut milk, white poppy seeds, white pepper, and mild whole spices.',
      mr: 'मटण स्टॉक, नारळाचे दूध, खसखस, पांढरी मिरी आणि सुगंधी मसाल्यांपासून बनवलेला पांढराशुभ्र, सौम्य व सुगंधी पांढरा रस्सा.',
      hi: 'मटन सूप, नारियल के दूध, खसखस और सफेद मिर्च से बना सुगंधित और स्वादिष्ट सफेद रस्सा।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'pune_kolhapur', dietary: 'non-veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 15, cookTime: 30, difficulty: 'medium', servings: 4, cost: 280,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'fresh_coconut', name: { en: 'Thick fresh coconut milk', mr: 'नारळाचे घट्ट दूध', hi: 'गाढ़ा नारियल का दूध' }, amount: 1.5, unit: 'cups', category: 'spices' },
      { id: 'mutton', name: { en: 'Mutton bone broth (Alani pani)', mr: 'मटण आळणी पाणी (स्टॉक)', hi: 'मटन सूप' }, amount: 3, unit: 'cups', category: 'protein' },
      { id: 'ginger', name: { en: 'Ginger-garlic white paste', mr: 'आले-लसूण पेस्ट', hi: 'अदरक-लहसुन पेस्ट' }, amount: 1, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Sauté whole spices, ginger, and garlic in ghee without browning. Add mutton stock and simmer 10 minutes.', mr: 'तुपात मसाले आणि आले-लसूण परतून मटण स्टॉक घाला व १० मिनिटे उकळा.', hi: 'घी में खड़े मसाले और अदरक-लहसुन भूनकर मटन सूप डालें और उबालें।' } },
      { step: 2, text: { en: 'Turn heat to low, stir in fresh coconut milk and white pepper powder. Heat through gently (do not boil hard).', mr: 'गॅस मंद करून नारळाचे दूध आणि पांढरी मिरी घाला. उकळी न आणता गरम करा.', hi: 'धीमी आंच पर नारियल का दूध और सफेद मिर्च मिलाएं। ज्यादा न उबालें।' } }
    ],
    accompaniments: [{ en: 'Kolhapuri Tambda Rassa & Bhakri', mr: 'तांबडा रस्सा आणि भाकरी', hi: 'तांबड़ा रस्सा और भाकरी' }],
    substitutions: [{ en: 'Chicken stock can be used instead of mutton.', mr: 'चिकनचा स्टॉक वापरू शकता.', hi: 'चिकन सूप भी इस्तेमाल कर सकते हैं।' }],
    allergens: ['Meat', 'Coconut'],
    searchAliases: ['pandhra rassa', 'पांढरा रस्सा', 'white broth', 'kolhapuri soup']
  },
  {
    id: 'sabudana-vada',
    name: { en: 'Crispy Maharashtrian Sabudana Vada', mr: 'कुरकुरीत साबुदाणा वडा', hi: 'कुरकुरा साबूदाना वड़ा' },
    transliteration: 'Sabudana Vada',
    description: {
      en: 'Golden crispy deep-fried patties made of soaked tapioca pearls, mashed potatoes, roasted peanuts, green chillies, and cumin. The holy grail of fasting treats.',
      mr: 'भिजवलेला साबुदाणा, उकडलेला बटाटा, शेंगदाणे कूट आणि मिरची एकत्र करून तेलात कुरकुरीत तळलेले साबुदाणा वडे.',
      hi: 'साबूदाना, उबले आलू, मूंगफली और हरी मिर्च से बने सुनहरे कुरकुरे फलाहारी वड़े।'
    },
    category: 'snack', mealTypes: ['breakfast', 'snack'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 15, cookTime: 15, difficulty: 'medium', servings: 4, cost: 70,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'sabudana', name: { en: 'Soaked Sabudana', mr: 'भिजवलेला साबुदाणा', hi: 'भीगा साबूदाना' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'potato', name: { en: 'Boiled potatoes (mashed)', mr: 'उकडलेले बटाटे मॅश केलेले', hi: 'उबले आलू मैश किए' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'peanuts', name: { en: 'Roasted peanut powder', mr: 'भाजलेले शेंगदाणे कूट', hi: 'मूंगफली कूट' }, amount: 0.5, unit: 'cup', category: 'spices' },
      { id: 'green_chillies', name: { en: 'Green chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 3, unit: 'pieces', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Mix soaked sabudana, mashed potatoes, peanut powder, green chillies, cumin, salt, and lemon juice into a binding mixture.', mr: 'साबुदाणा, बटाटा, शेंगदाणे कूट, मिरची, जिरे आणि मीठ एकत्र मळून गोळा बनवा.', hi: 'साबूदाना, आलू, मूंगफली, मिर्च, जीरा और नमक मिलाकर मिश्रण तैयार करें।' } },
      { step: 2, text: { en: 'Shape into round flat patties. Deep fry in hot oil on medium flame until golden brown and crispy.', mr: 'गोलाकार वडे थापून गरम तेलात मध्यम आचेवर कुरकुरीत तळून घ्या.', hi: 'गोल टिक्की का आकार देकर गरम तेल में मध्यम आंच पर सुनहरा तल लें।' } }
    ],
    accompaniments: [{ en: 'Sweet Curd & Peanut Chutney', mr: 'गोड दही आणि शेंगदाणा चटणी', hi: 'मीठा दही और मूंगफली चटनी' }],
    substitutions: [{ en: 'Can be air-fried with a brush of oil for low calorie.', mr: 'कमी तेलासाठी एअर फ्राय करू शकता.', hi: 'एयर फ्रायर में भी बना सकते हैं।' }],
    allergens: ['Peanuts'],
    searchAliases: ['sabudana vada', 'साबुदाणा वडा', 'sago vada', 'upvas vada', 'falahari vada']
  },
  {
    id: 'aloo-paratha',
    name: { en: 'Dhaba Style Aloo Paratha with Butter', mr: 'खमंग आलू पराठा आणि लोणी', hi: 'ढाबा स्टाइल आलू पराठा' },
    transliteration: 'Aloo Paratha',
    description: {
      en: 'Golden crispy whole-wheat flatbread stuffed with spiced mashed potatoes, green chillies, coriander, amchur, served with melting white butter and sweet curd.',
      mr: 'मसालेदार उकडलेल्या बटाट्याचे सारण भरून साजूक तुपात खरपूस भाजलेला आलू पराठा आणि पांढरे लोणी.',
      hi: 'मसालेदार आलू के भरावन से भरकर तवे पर मक्खन में कुरकुरा सेका हुआ आलू पराठा।'
    },
    category: 'breakfast', mealTypes: ['breakfast', 'lunch', 'dinner'], cuisine: 'north_indian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'medium', prepTime: 15, cookTime: 15, difficulty: 'easy', servings: 3, cost: 65,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Wheat flour for dough', mr: 'गव्हाचे पीठ', hi: 'गेहूं का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'potato', name: { en: 'Boiled potatoes (mashed)', mr: 'उकडलेले बटाटे', hi: 'उबले आलू' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies & coriander', mr: 'मिरची व कोथिंबीर', hi: 'मिर्च और धनिया' }, amount: 2, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Mash boiled potatoes with chopped chillies, coriander, amchur, garam masala, and salt.', mr: 'बटाट्यात मिरची, कोथिंबीर, आमचूर आणि मीठ घालून सारण बनवा.', hi: 'आलू में मिर्च, धनिया, अमचूर और नमक मिलाकर भरावन बनाएं।' } },
      { step: 2, text: { en: 'Stuff into rolled wheat dough, seal, roll gently, and roast on tawa with ghee/butter until golden brown and flaky.', mr: 'कणकेत सारण भरून लाटा आणि तुपात खरपूस भाजून घ्या.', hi: 'आटे की लोई में भरकर बेलें और मक्खन में सुनहरा सेकें।' } }
    ],
    accompaniments: [{ en: 'White Butter & Fresh Curd', mr: 'पांढरे लोणी आणि दही', hi: 'सफेद मक्खन और ताजा दही' }],
    substitutions: [{ en: 'Add grated paneer for Aloo-Paneer Paratha.', mr: 'पनीर घालून आलू-पनीर पराठा करू शकता.', hi: 'पनीर मिलाकर भी बना सकते हैं।' }],
    allergens: ['Gluten', 'Dairy (Butter)'],
    searchAliases: ['aloo paratha', 'आलू पराठा', 'batata paratha', 'stuffed paratha']
  },
  {
    id: 'bombay-veg-sandwich',
    name: { en: 'Bombay Street Style Toasted Veg Sandwich', mr: 'बॉम्बे टोस्टेड व्हेजिटेबल सँडविच', hi: 'बॉम्बे टोस्टेड वेज सैंडविच' },
    transliteration: 'Bombay Veg Sandwich',
    description: {
      en: 'Triple-decker sandwich layered with spicy green chutney, boiled potatoes, tomatoes, cucumbers, onions, beetroots, and chaat masala, toasted crispy with butter.',
      mr: 'हिरवी तिखट चटणी, बटाटे, कांदा, टोमॅटो, काकडी आणि चाट मसाला घालून बटरवर कुरकुरीत टोस्ट केलेले सँडविच.',
      hi: 'तीखी हरी चटनी, उबले आलू, ककड़ी, टमाटर, प्याज और चाट मसाले से बना कुरकुरा टोस्ट सैंडविच।'
    },
    category: 'snack', mealTypes: ['breakfast', 'snack'], cuisine: 'everyday_maharashtrian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 8, difficulty: 'easy', servings: 2, cost: 55,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'bread', name: { en: 'Bread slices', mr: 'ब्रेड स्लाइस', hi: 'ब्रेड स्लाइस' }, amount: 4, unit: 'pieces', category: 'grains' },
      { id: 'potato', name: { en: 'Boiled potato slices', mr: 'उकडलेल्या बटाट्याच्या चकत्या', hi: 'उबले आलू की स्लाइस' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato & cucumber slices', mr: 'टोमॅटो व काकडी चकत्या', hi: 'टमाटर और ककड़ी' }, amount: 1, unit: 'medium', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Apply butter and spicy green mint-coriander chutney to bread slices.', mr: 'ब्रेडवर बटर आणि तिखट हिरवी चटणी लावा.', hi: 'ब्रेड पर मक्खन और हरी चटनी लगाएं।' } },
      { step: 2, text: { en: 'Layer potato, cucumber, tomato slices, sprinkle chaat masala, cover with bread, and toast crispy in a sandwich toaster with butter.', mr: 'भाजीपाल्याच्या चकत्या ठेवून चाट मसाला भुरभुरवून बटर लावून कुरकुरीत टोस्ट करा.', hi: 'सब्जियां रखें, चाट मसाला छिड़कें और मक्खन लगाकर टोस्ट करें।' } }
    ],
    accompaniments: [{ en: 'Tomato Ketchup & Green Chutney', mr: 'सॉस आणि हिरवी चटणी', hi: 'सॉस और हरी चटनी' }],
    substitutions: [{ en: 'Add grated processed cheese for Cheese Toast.', mr: 'चीज घालून चीज टोस्ट करू शकता.', hi: 'चीज डालकर चीज टोस्ट बना सकते हैं।' }],
    allergens: ['Gluten', 'Dairy (Butter)'],
    searchAliases: ['veg sandwich', 'सँडविच', 'bombay sandwich', 'toast sandwich']
  },
  {
    id: 'idli-sambar',
    name: { en: 'Soft Steamed Idli with Drumstick Sambar', mr: 'मऊ लुसलुशीत इडली आणि शेवगा सांबार', hi: 'मुलायम इडली और सांभर' },
    transliteration: 'Idli Sambar',
    description: {
      en: 'Pillowy steamed rice and urad dal cakes paired with tangy, lentil-rich vegetable sambar simmered with drumsticks, tamarind, and fresh coconut chutney.',
      mr: 'मऊ कापसासारख्या वाफवलेल्या इडल्या आणि शेवग्याच्या शेंगा, टोमॅटो आणि चिंचेच्या चवदार सांबार.',
      hi: 'रुई जैसी मुलायम चावल-उड़द की इडली और सहजन, इमली व दाल से बना पारंपरिक सांभर।'
    },
    category: 'breakfast', mealTypes: ['breakfast', 'dinner'], cuisine: 'south_indian', dietary: 'vegan',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'mild', prepTime: 10, cookTime: 20, difficulty: 'medium', servings: 4, cost: 70,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Idli Rice & Urad Dal batter', mr: 'इडली तांदूळ व उडीद डाळ पीठ', hi: 'इडली बैटर' }, amount: 3, unit: 'cups', category: 'grains' },
      { id: 'toor_dal', name: { en: 'Toor dal for sambar', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'drumstick', name: { en: 'Drumsticks', mr: 'शेवग्याच्या शेंगा', hi: 'सहजन' }, amount: 2, unit: 'pieces', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Pour fermented batter into greased idli moulds and steam for 10-12 minutes until fluffy.', mr: 'इडली पात्रात पीठ ओतून १०-१२ मिनिटे वाफवून मऊ इडल्या काढा.', hi: 'इडली सांचों में घोल डालकर १०-१२ मिनट भाप में पकाएं।' } },
      { step: 2, text: { en: 'Cook toor dal with drumsticks, sambar powder, tamarind, and mustard tadka to make aromatic sambar.', mr: 'तूर डाळ, शेवगा, सांबार मसाला, चिंच आणि फोडणी घालून सांबार उकळा.', hi: 'दाल, सहजन, सांभर मसाला और इमली मिलाकर सांभर तैयार करें।' } }
    ],
    accompaniments: [{ en: 'Fresh Coconut Chutney', mr: 'ओल्या खोबऱ्याची चटणी', hi: 'नारियल चटनी' }],
    substitutions: [{ en: 'Rava Idli can be prepared instantly without fermentation.', mr: 'झटपट रवा इडलीही बनवू शकता.', hi: 'रवा इडली भी तुरंत बना सकते हैं।' }],
    allergens: ['Pulses'],
    searchAliases: ['idli sambar', 'इडली सांबार', 'idli', 'south indian breakfast', 'steamed idli']
  },
  {
    id: 'paneer-butter-masala',
    name: { en: 'Restaurant Style Paneer Butter Masala', mr: 'रेस्टॉरंट स्टाईल पनीर बटर मसाला', hi: 'पनीर बटर मसाला' },
    transliteration: 'Paneer Butter Masala',
    description: {
      en: 'Tender cottage cheese cubes simmered in a rich, buttery, velvety tomato and cashew gravy delicately perfumed with kasuri methi and cream.',
      mr: 'मखमली टोमॅटो आणि काजूच्या ग्रेव्हीत बटर, कसुरी मेथी आणि ताज्या सायीसह शिजवलेले चवदार पनीर.',
      hi: 'टमाटर और काजू की मखमली ग्रेवी में मक्खन, कसूरी मेथी और मलाई के साथ पका हुआ पनीर।'
    },
    category: 'dinner', mealTypes: ['lunch', 'dinner'], cuisine: 'north_indian', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: false, spiceLevel: 'mild', prepTime: 15, cookTime: 20, difficulty: 'medium', servings: 4, cost: 180,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', name: { en: 'Fresh Paneer cubes', mr: 'पनीर तुकडे', hi: 'पनीर' }, amount: 250, unit: 'g', category: 'dairy' },
      { id: 'tomato', name: { en: 'Ripe tomatoes pureed with cashews', mr: 'टोमॅटो आणि काजू प्युरी', hi: 'टमाटर और काजू प्यूरी' }, amount: 4, unit: 'medium', category: 'vegetables' },
      { id: 'ghee', name: { en: 'Butter and Ghee', mr: 'बटर व तूप', hi: 'मक्खन और घी' }, amount: 3, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Cook tomato and cashew puree in butter with ginger, Kashmiri chilli, and garam masala until oil releases.', mr: 'बटरमध्ये टोमॅटो-काजू प्युरी आणि मसाले तेल सुटेपर्यंत परता.', hi: 'मक्खन में टमाटर-काजू प्यूरी और मसाले तेल छोड़ने तक भूनें।' } },
      { step: 2, text: { en: 'Add water, salt, a pinch of sugar, paneer cubes, crushed kasuri methi, and cream. Simmer for 3 minutes.', mr: 'पनीर, कसुरी मेथी आणि साय घालून मंद आचेवर ३ मिनिटे उकळा.', hi: 'पनीर, कसूरी मेथी और मलाई डालकर ३ मिनट धीमी आंच पर पकाएं।' } }
    ],
    accompaniments: [{ en: 'Butter Naan or Jeera Rice', mr: 'बटर नान किंवा जिरा राईस', hi: 'बटर नान या जीरा राइस' }],
    substitutions: [{ en: 'Mushrooms or green peas can be used instead of paneer.', mr: 'पनीरऐवजी मशरूम किंवा मटार वापरू शकता.', hi: 'मशरूम या मटर भी इस्तेमाल कर सकते हैं।' }],
    allergens: ['Dairy', 'Cashews (Nuts)'],
    searchAliases: ['paneer butter masala', 'पनीर बटर मसाला', 'paneer makhani', 'shahi paneer']
  },
  {
    id: 'aamras-puri',
    name: { en: 'Maharashtrian Hapus Aamras with Hot Puri', mr: 'अस्सल हापूस आमरस आणि गरम पुऱ्या', hi: 'हापुस आमरस और गरमागरम पूरी' },
    transliteration: 'Aamras Puri',
    description: {
      en: 'The golden nectar of summer: chilled thick pulp of naturally ripened Alphonso mangoes flavored with cardamom, saffron, and sunth, served with hot puffed wheat puris.',
      mr: 'उन्हाळ्यातील अमृत: पिकलेल्या हापूस आंब्यांचा थंडगार दाट रस, वेलची-सुंठ आणि केशर घालून; सोबत गरमागरम टम्म फुगलेल्या पुऱ्या.',
      hi: 'गर्मियों का राजा: मीठे हापुस आम का गाढ़ा रस, इलायची और केसर से सुगंधित, फूली हुई गर्म पूरियों के साथ।'
    },
    category: 'sweet', mealTypes: ['lunch', 'dinner'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 15, cookTime: 10, difficulty: 'easy', servings: 4, cost: 150,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'wheat_flour', name: { en: 'Wheat flour for puris', mr: 'गव्हाचे पीठ', hi: 'गेहूं का आटा' }, amount: 2, unit: 'cups', category: 'grains' },
      { id: 'milk', name: { en: 'Milk (a splash for smooth aamras)', mr: 'दूध', hi: 'दूध' }, amount: 0.25, unit: 'cup', category: 'dairy' },
      { id: 'ghee', name: { en: 'Pure Ghee for frying/drizzle', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 2, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Extract pulp from sweet ripe Alphonso mangoes, blend with cardamom powder, saffron, and a pinch of dry ginger (sunth) powder. Chill.', mr: 'हापूस आंब्यांचा रस काढून वेलची, सुंठ आणि केशर घालून मिक्सरमधून फिरवा आणि थंड करा.', hi: 'पके आम का गूदा निकालकर इलायची और केसर के साथ पीसकर ठंडा करें।' } },
      { step: 2, text: { en: 'Knead stiff dough, roll small puris, and fry in hot oil until puffed and crisp. Serve aamras in bowls drizzled with pure ghee alongside hot puris.', mr: 'पुऱ्या लाटून तेलात तळून घ्या. थंड आमरसावर साजूक तूप सोडून गरम पुऱ्यांसोबत वाढा.', hi: 'फूली पूरियां तलें और ठंडे आमरस पर घी डालकर गरमागरम परोसें।' } }
    ],
    accompaniments: [{ en: 'Kurdaya, Papad & Batata Bhaji', mr: 'कुरडई, पापड आणि बटाटा भाजी', hi: 'पापड़ और आलू सब्जी' }],
    substitutions: [{ en: 'Kesar or Badami mangoes can be used.', mr: 'केशर किंवा बदाम आंबाही वापरू शकता.', hi: 'केसर या बादामी आम भी ले सकते हैं।' }],
    allergens: ['Gluten', 'Dairy (Milk/Ghee)'],
    searchAliases: ['aamras puri', 'आमरस पुरी', 'aamras', 'mango pulp', 'summer special']
  },
  {
    id: 'narali-bhat',
    name: { en: 'Traditional Konkani Narali Bhat (Sweet Coconut Rice)', mr: 'नारळी पौर्णिमा खास नारळी भात', hi: 'नारियल मीठा भात (नारळी भात)' },
    transliteration: 'Narali Bhat',
    description: {
      en: 'Festive sweet rice cooked with freshly grated coconut, jaggery, pure cow ghee, cloves, cardamom, cashews, and saffron. A coastal celebration dish.',
      mr: 'नारळी पौर्णिमेचा सण: ओले खोबरे, गूळ, साजूक तूप, लवंग, काजू आणि वेलचीच्या सुवासात शिजवलेला गोड नारळी भात.',
      hi: 'ताजे कसे नारियल, गुड़, शुद्ध घी, काजू और लौंग से बना पारंपरिक मीठा नारियल भात।'
    },
    category: 'sweet', mealTypes: ['lunch', 'dinner'], cuisine: 'festive_seasonal', dietary: 'veg',
    isKhandeshi: false, isMaharashtrian: true, spiceLevel: 'mild', prepTime: 10, cookTime: 20, difficulty: 'medium', servings: 4, cost: 90,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Basmati or Ambemohar rice', mr: 'आंबेमोहर तांदूळ', hi: 'चावल' }, amount: 1, unit: 'cup', category: 'grains' },
      { id: 'fresh_coconut', name: { en: 'Freshly grated coconut', mr: 'खोवलेले ओले खोबरे', hi: 'ताजा कसा नारियल' }, amount: 1, unit: 'cup', category: 'spices' },
      { id: 'jaggery', name: { en: 'Grated Jaggery', mr: 'गूळ', hi: 'गुड़' }, amount: 1, unit: 'cup', category: 'spices' },
      { id: 'ghee', name: { en: 'Pure Ghee', mr: 'साजूक तूप', hi: 'शुद्ध घी' }, amount: 2, unit: 'tbsp', category: 'dairy' }
    ],
    instructions: [
      { step: 1, text: { en: 'Cook rice with cloves and a pinch of salt until 90% done.', mr: 'तांदूळ लवंग घालून ९०% शिजवून घ्या.', hi: 'चावल को लौंग डालकर ९०% पका लें।' } },
      { step: 2, text: { en: 'In a pan, cook fresh coconut and jaggery in ghee until jaggery melts. Fold in the cooked rice, cover, and steam on lowest heat for 8 minutes.', mr: 'तुपात खोबरे व गूळ वितळवून त्यात भात मिसळा आणि मंद आचेवर ८ मिनिटे वाफ काढा.', hi: 'घी में नारियल और गुड़ पिघलाकर पका चावल मिलाएं और ८ मिनट धीमी आंच पर दम दें।' } }
    ],
    accompaniments: [{ en: 'Pure Cow Ghee drizzle', mr: 'साजूक तूप', hi: 'देसी घी' }],
    substitutions: [{ en: 'Sugar can replace jaggery for white Narali Bhat.', mr: 'गुळाऐवजी साखर वापरू शकता.', hi: 'गुड़ की जगह चीनी भी ले सकते हैं।' }],
    allergens: ['Dairy (Ghee)'],
    searchAliases: ['narali bhat', 'नारळी भात', 'coconut rice', 'sweet rice', 'festive rice']
  }
];
