export const INGREDIENTS_CATALOG = [
  // Vegetables (भाजीपाला / सब्जियां)
  { id: 'potato', category: 'vegetables', name: { en: 'Potato (Batata / Aloo)', mr: 'बटाटा (Batata)', hi: 'आलू (Aloo)' }, staple: true },
  { id: 'onion', category: 'vegetables', name: { en: 'Onion (Kanda / Pyaz)', mr: 'कांदा (Kanda)', hi: 'प्याज (Pyaz)' }, staple: true },
  { id: 'tomato', category: 'vegetables', name: { en: 'Tomato', mr: 'टोमॅटो (Tomato)', hi: 'टमाटर (Tamatar)' }, staple: true },
  { id: 'brinjal', category: 'vegetables', name: { en: 'Brinjal / Eggplant (Vange / Baingan)', mr: 'वांगी (Vange / Baingan)', hi: 'बैंगन (Baingan)' }, staple: true },
  { id: 'spinach', category: 'vegetables', name: { en: 'Spinach (Palak)', mr: 'पालक (Palak)', hi: 'पालक (Palak)' }, staple: true },
  { id: 'fenugreek', category: 'vegetables', name: { en: 'Fenugreek leaves (Methi)', mr: 'मेथी (Methi)', hi: 'मेथी (Methi)' }, staple: true },
  { id: 'cauliflower', category: 'vegetables', name: { en: 'Cauliflower (Flower / Gobi)', mr: 'फ्लॉवर / गोबी (Flower)', hi: 'फूलगोभी (Gobi)' }, staple: false },
  { id: 'capsicum', category: 'vegetables', name: { en: 'Capsicum / Bell pepper (Shimla Mirch)', mr: 'ढोबळी मिरची (Shimla Mirch)', hi: 'शिमला मिर्च (Shimla Mirch)' }, staple: false },
  { id: 'green_peas', category: 'vegetables', name: { en: 'Green Peas (Matar)', mr: 'हिरवे मटार (Matar)', hi: 'मटर (Matar)' }, staple: true },
  { id: 'ladyfinger', category: 'vegetables', name: { en: 'Ladyfinger / Okra (Bhindi)', mr: 'भेंडी (Bhendi)', hi: 'भिंडी (Bhindi)' }, staple: false },
  { id: 'bottle_gourd', category: 'vegetables', name: { en: 'Bottle Gourd (Dudhi / Lauki)', mr: 'दुधी भोपळा (Dudhi)', hi: 'लौकी (Lauki)' }, staple: false },
  { id: 'green_chillies', category: 'vegetables', name: { en: 'Green Chillies (Hirvi Mirchi)', mr: 'हिरवी मिरची (Mirchi)', hi: 'हरी मिर्च (Mirch)' }, staple: true },
  { id: 'ginger', category: 'vegetables', name: { en: 'Ginger (Ale / Adrak)', mr: 'आले (Ale)', hi: 'अदरक (Adrak)' }, staple: true },
  { id: 'garlic', category: 'vegetables', name: { en: 'Garlic (Lasun)', mr: 'लसूण (Lasun)', hi: 'लहसुन (Lahsun)' }, staple: true },
  { id: 'coriander', category: 'vegetables', name: { en: 'Fresh Coriander (Kothimbir / Dhania)', mr: 'कोथिंबीर (Kothimbir)', hi: 'हरा धनिया (Dhania)' }, staple: true },
  { id: 'curry_leaves', category: 'vegetables', name: { en: 'Curry Leaves (Kadi Patta)', mr: 'कढीपत्ता (Kadi Patta)', hi: 'कढ़ी पत्ता (Kadi Patta)' }, staple: true },
  { id: 'drumstick', category: 'vegetables', name: { en: 'Drumsticks (Shevga)', mr: 'शेवग्याच्या शेंगा (Shevga)', hi: 'सहजन (Sahjan)' }, staple: false },

  // Grains & Flours (धान्य व पिठे / अनाज व आटा)
  { id: 'wheat_flour', category: 'grains', name: { en: 'Wheat Flour (Atta)', mr: 'गव्हाचे पीठ (Atta)', hi: 'गेहूं का आटा (Atta)' }, staple: true },
  { id: 'rice', category: 'grains', name: { en: 'Rice (Tandul / Chawal)', mr: 'तांदूळ (Tandul / Rice)', hi: 'चावल (Chawal)' }, staple: true },
  { id: 'jowar_flour', category: 'grains', name: { en: 'Jowar Flour (Jwari che Peeth)', mr: 'ज्वारीचे पीठ (Jwari Peeth)', hi: 'ज्वार का आटा (Jowar Atta)' }, staple: true },
  { id: 'bajra_flour', category: 'grains', name: { en: 'Bajra Flour (Bajriche Peeth)', mr: 'बाजरीचे पीठ (Bajri Peeth)', hi: 'बाजरे का आटा (Bajra Atta)' }, staple: true },
  { id: 'besan', category: 'grains', name: { en: 'Gram Flour (Besan)', mr: 'बेसन / हरभऱ्याचे पीठ', hi: 'बेसन (Besan)' }, staple: true },
  { id: 'poha', category: 'grains', name: { en: 'Flattened Rice (Poha)', mr: 'पोहे (Poha)', hi: 'पोहा (Poha)' }, staple: true },
  { id: 'suji', category: 'grains', name: { en: 'Semolina (Rava / Suji)', mr: 'रवा (Rava)', hi: 'सूजी (Suji)' }, staple: true },
  { id: 'sabudana', category: 'grains', name: { en: 'Sago (Sabudana)', mr: 'साबुदाणा (Sabudana)', hi: 'साबूदाना (Sabudana)' }, staple: false },
  { id: 'bread', category: 'grains', name: { en: 'Bread', mr: 'ब्रेड (Bread)', hi: 'ब्रेड (Bread)' }, staple: false },
  { id: 'oats', category: 'grains', name: { en: 'Oats', mr: 'ओट्स (Oats)', hi: 'ओट्स (Oats)' }, staple: false },

  // Pulses & Dals (डाळी व कडधान्ये / दालें)
  { id: 'toor_dal', category: 'pulses', name: { en: 'Toor / Arhar Dal (Tuvar Dal)', mr: 'तूर डाळ (Toor Dal)', hi: 'अरहर / तूर दाल' }, staple: true },
  { id: 'moong_dal', category: 'pulses', name: { en: 'Moong Dal (Yellow / Green)', mr: 'मूग डाळ (Moong Dal)', hi: 'मूंग दाल (Moong Dal)' }, staple: true },
  { id: 'chana_dal', category: 'pulses', name: { en: 'Chana Dal (Bengal Gram)', mr: 'चणा डाळ / हरभरा डाळ', hi: 'चना दाल (Chana Dal)' }, staple: true },
  { id: 'urad_dal', category: 'pulses', name: { en: 'Urad Dal (Black Gram)', mr: 'उडीद डाळ (Urad Dal)', hi: 'उड़द दाल (Urad Dal)' }, staple: false },
  { id: 'masoor_dal', category: 'pulses', name: { en: 'Masoor Dal (Red Lentils)', mr: 'मसूर डाळ (Masoor Dal)', hi: 'मसूर दाल (Masoor Dal)' }, staple: false },
  { id: 'matki', category: 'pulses', name: { en: 'Moth Beans / Sprouted Matki', mr: 'मटकी (मोड आलेली मटकी)', hi: 'मोठ / मटकी अंकुरित' }, staple: true },
  { id: 'rajma', category: 'pulses', name: { en: 'Kidney Beans (Rajma)', mr: 'राजमा (Rajma)', hi: 'राजमा (Rajma)' }, staple: false },
  { id: 'chole', category: 'pulses', name: { en: 'Chickpeas (Kabuli Chana / Chole)', mr: 'काबुली चणे / छोले', hi: 'छोले / काबुली चना' }, staple: false },
  { id: 'sprouted_moong', category: 'pulses', name: { en: 'Sprouted Moong (Moog Mod)', mr: 'मोड आलेले मूग (Sprouted Moong)', hi: 'अंकुरित मूंग' }, staple: false },

  // Dairy (दूध व दुग्धजन्य / डेयरी)
  { id: 'curd', category: 'dairy', name: { en: 'Curd / Yogurt (Dahi)', mr: 'दही (Dahi)', hi: 'दही (Dahi)' }, staple: true },
  { id: 'milk', category: 'dairy', name: { en: 'Milk (Doodh)', mr: 'दूध (Doodh)', hi: 'दूध (Doodh)' }, staple: true },
  { id: 'paneer', category: 'dairy', name: { en: 'Paneer (Cottage Cheese)', mr: 'पनीर (Paneer)', hi: 'पनीर (Paneer)' }, staple: true },
  { id: 'ghee', category: 'dairy', name: { en: 'Clarified Butter (Toop / Ghee)', mr: 'तूप (Sajuk Toop)', hi: 'शुद्ध घी (Ghee)' }, staple: true },
  { id: 'buttermilk', category: 'dairy', name: { en: 'Buttermilk (Tak / Chhaas)', mr: 'ताक (Tak)', hi: 'छाछ (Chhaas)' }, staple: false },

  // Spices & Masalas (मसाले / मसाले)
  { id: 'kala_masala', category: 'spices', name: { en: 'Khandeshi Kala Masala / Goda Masala', mr: 'खान्देशी काळा मसाला / गोडा मसाला', hi: 'काळा मसाला / गोडा मसाला' }, staple: true },
  { id: 'turmeric', category: 'spices', name: { en: 'Turmeric (Halad / Haldi)', mr: 'हळद (Halad)', hi: 'हल्दी (Haldi)' }, staple: true },
  { id: 'mustard_seeds', category: 'spices', name: { en: 'Mustard Seeds (Mohri / Rai)', mr: 'मोहरी (Mohri)', hi: 'राई (Rai)' }, staple: true },
  { id: 'cumin_seeds', category: 'spices', name: { en: 'Cumin Seeds (Jeera)', mr: 'जिरे (Jeera)', hi: 'जीरा (Jeera)' }, staple: true },
  { id: 'red_chilli_powder', category: 'spices', name: { en: 'Red Chilli Powder (Mirchi Powder)', mr: 'लाल तिखट (Mirchi Powder)', hi: 'लाल मिर्च पाउडर' }, staple: true },
  { id: 'hing', category: 'spices', name: { en: 'Asafoetida (Hing)', mr: 'हिंग (Hing)', hi: 'हींग (Hing)' }, staple: true },
  { id: 'peanuts', category: 'spices', name: { en: 'Peanuts / Shengdana', mr: 'शेंगदाणे (Shengdana)', hi: 'मूंगफली (Peanuts)' }, staple: true },
  { id: 'dry_coconut', category: 'spices', name: { en: 'Dry Coconut / Khopra (Suke Khobre)', mr: 'सुके खोबरे (Suke Khobre)', hi: 'सूखा नारियल (Khopra)' }, staple: true },
  { id: 'fresh_coconut', category: 'spices', name: { en: 'Fresh Grated Coconut (Ole Khobre)', mr: 'ओले खोबरे (Grated Coconut)', hi: 'ताजा कसा नारियल' }, staple: false },
  { id: 'sesame_seeds', category: 'spices', name: { en: 'Sesame Seeds (Til)', mr: 'तीळ (Til)', hi: 'तिल (Til)' }, staple: false },
  { id: 'jaggery', category: 'spices', name: { en: 'Jaggery (Gul / Gud)', mr: 'गूळ (Gul)', hi: 'गुड़ (Gud)' }, staple: true },
  { id: 'tamarind', category: 'spices', name: { en: 'Tamarind (Chinch / Imli)', mr: 'चिंच (Chinch)', hi: 'इमली (Imli)' }, staple: false },
  { id: 'shev', category: 'spices', name: { en: 'Spicy Besan Shev (Tikhat Shev)', mr: 'तिखट शेव / गाठी शेव (Shev)', hi: 'बेसन शेव (Shev)' }, staple: true },

  // Eggs & Meat (अंडी व मांसाहार)
  { id: 'eggs', category: 'protein', name: { en: 'Eggs (Andi)', mr: 'अंडी (Eggs)', hi: 'अंडे (Eggs)' }, staple: false },
  { id: 'chicken', category: 'protein', name: { en: 'Chicken / Gavran Chicken', mr: 'चिकन / गावठी कोंबडी', hi: 'चिकन (Chicken)' }, staple: false },
  { id: 'mutton', category: 'protein', name: { en: 'Mutton / Sukka Meat', mr: 'मटन (Mutton)', hi: 'मटन (Mutton)' }, staple: false },
  { id: 'fish', category: 'protein', name: { en: 'Fresh Fish / Surmai / Pomfret', mr: 'मासे / सुरमई / पापलेट', hi: 'मछली (Fish)' }, staple: false }
];
