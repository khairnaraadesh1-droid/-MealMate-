export const PAN_INDIAN_RECIPES = [
  {
    id: 'rajma-chawal',
    name: {
      en: 'Dhaba Style Rajma Chawal',
      mr: 'पंजाबी राजमा आणि जिरा राईस',
      hi: 'ढाबा स्टाइल राजमा-चावल'
    },
    transliteration: 'Rajma Chawal',
    description: {
      en: 'Slow-cooked red kidney beans simmered in a spiced onion, tomato, and ginger-garlic gravy, served over steaming hot basmati rice with pickled onions.',
      mr: 'कांदा, टोमॅटो आणि आल्याच्या खमंग मसाल्यात मंद आचेवर शिजवलेला रसरशीत राजमा आणि गरमागरम बासमती भात.',
      hi: 'प्याज, टमाटर और अदरक-लहसुन की गाढ़ी ग्रेवी में धीमी आंच पर पका राजमा, बासमती चावल के साथ।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'north_indian',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 35,
    difficulty: 'medium',
    servings: 4,
    cost: 110,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rajma', name: { en: 'Red Kidney Beans (soaked overnight)', mr: 'रात्रभर भिजवलेला राजमा', hi: 'रातभर भीगा हुआ राजमा' }, amount: 1.5, unit: 'cups', category: 'pulses' },
      { id: 'rice', name: { en: 'Basmati Rice', mr: 'बासमती तांदूळ', hi: 'बासमती चावल' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onions (finely chopped)', mr: 'बारीक चिरलेला कांदा', hi: 'बारीक कटा प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato puree', mr: 'टोमॅटो प्युरी', hi: 'टमाटर प्यूरी' }, amount: 3, unit: 'medium', category: 'vegetables' },
      { id: 'ginger', name: { en: 'Ginger-garlic paste', mr: 'आले-लसूण पेस्ट', hi: 'अदरक-लहसुन पेस्ट' }, amount: 1.5, unit: 'tbsp', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil soaked rajma in pressure cooker with salt, black cardamom, and 4 cups water for 6 whistles until soft.', mr: 'राजमा मीठ, मोठी वेलची आणि ४ कप पाण्यात कुकरमध्ये ६ शिट्ट्या काढून मऊ शिजवून घ्या.', hi: 'राजमा में नमक, बड़ी इलायची और पानी डालकर ६ सीटी तक अच्छी तरह उबालें।' } },
      { step: 2, text: { en: 'Heat 2 tbsp oil and 1 tbsp butter/ghee in a pot. Sauté cumin, ginger-garlic paste, and onions till golden.', mr: 'टोपात तेल आणि तूप गरम करून जिरे, आले-लसूण आणि कांदा सोनेरी रंगावर परता.', hi: 'तेल और घी गरम कर जीरा, अदरक-लहसुन और प्याज सुनहरा होने तक भूनें।' } },
      { step: 3, text: { en: 'Add tomato puree, turmeric, red chilli powder, coriander powder, and garam masala. Sauté till oil separates.', mr: 'टोमॅटो प्युरी, हळद, तिखट, धने पावडर आणि गरम मसाला घालून तेल सुटेपर्यंत परता.', hi: 'टमाटर, हल्दी, मिर्च, धनिया पाउडर और गरम मसाला डालकर तेल छोड़ने तक भूनें।' } },
      { step: 4, text: { en: 'Add boiled rajma along with its broth. Mash a few beans with the back of a ladle to thicken gravy. Simmer on low heat for 15 minutes.', mr: 'शिजलेला राजमा पाण्यासह घाला, पळीने थोडे राजमा मॅश करा आणि मंद आचेवर १५ मिनिटे शिजू द्या.', hi: 'उबला राजमा पानी सहित डालें, थोड़े दाने मैश करें और १५ मिनट धीमी आंच पर पकाएं।' } },
      { step: 5, text: { en: 'Serve piping hot over steamed Basmati Jeera Rice, topped with butter and pickled onion rings.', mr: 'गरमागरम जिरा राईसवर रसरशीत राजमा वाढा आणि कांद्याच्या चकत्यांसोबत खा.', hi: 'गरम जीरा राइस पर राजमा परोसें और सिरके वाले प्याज के साथ आनंद लें।' } }
    ],
    accompaniments: [
      { en: 'Steamed Basmati Rice or Jeera Rice', mr: 'बासमती जिरा राईस', hi: 'जीरा राइस' },
      { en: 'Sirka Pyaz (Pickled red onions)', mr: 'लिंबू आणि कांदा', hi: 'सिरके वाले प्याज' }
    ],
    substitutions: [
      { en: 'Chitra Rajma or Kashmiri Rajma cook faster with tender texture.', mr: 'काश्मिरी किंवा चित्रा राजमा वापरल्यास अधिक लवकर मऊ शिजतो.', hi: 'कश्मीरी राजमा से भी बना सकते हैं।' }
    ],
    allergens: ['Pulses / Kidney beans'],
    searchAliases: ['rajma chawal', 'राजमा चावल', 'rajma', 'kidney beans', 'punjabi rajma']
  },
  {
    id: 'dal-tadka-jeera-rice',
    name: {
      en: 'Dhaba Style Dal Tadka with Jeera Rice',
      mr: 'ढाबा स्टाईल दाल तडका आणि जिरा राईस',
      hi: 'दाल तड़का और जीरा राइस'
    },
    transliteration: 'Dal Tadka Jeera Rice',
    description: {
      en: 'Yellow toor and chana dal simmered with onions, tomatoes, and finished with a sizzling double ghee tadka of garlic, dried red chillies, and aromatic cumin.',
      mr: 'तूर व चणा डाळीचे मऊ वरण; वरून लसूण, सुकी लाल मिरची, जिरे आणि साजूक तुपाची खमंग दुहेरी फोडणी आणि जिरा राईस.',
      hi: 'अरहर और चना दाल का मिश्रण, ऊपर से लहसुन, साबुत लाल मिर्च, जीरा और शुद्ध घी का धुआंदार तड़का, जीरा राइस के साथ।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'north_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 10,
    cookTime: 20,
    difficulty: 'easy',
    servings: 4,
    cost: 85,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'toor_dal', name: { en: 'Toor dal (pigeon peas)', mr: 'तूर डाळ', hi: 'अरहर दाल' }, amount: 1, unit: 'cup', category: 'pulses' },
      { id: 'chana_dal', name: { en: 'Chana dal (for texture)', mr: 'चणा डाळ', hi: 'चना दाल' }, amount: 0.25, unit: 'cup', category: 'pulses' },
      { id: 'rice', name: { en: 'Basmati Rice', mr: 'बासमती तांदूळ', hi: 'बासमती चावल' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'garlic', name: { en: 'Garlic cloves (finely sliced for tadka)', mr: 'लसूण पाकळ्या (पातळ काप)', hi: 'लहसुन (कटा हुआ)' }, amount: 10, unit: 'cloves', category: 'vegetables' },
      { id: 'ghee', name: { en: 'Pure Desi Ghee', mr: 'साजूक तूप', hi: 'शुद्ध देसी घी' }, amount: 3, unit: 'tbsp', category: 'dairy' },
      { id: 'cumin_seeds', name: { en: 'Cumin seeds (Jeera)', mr: 'जिरे', hi: 'जीरा' }, amount: 1.5, unit: 'tbsp', category: 'spices' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Cook toor dal and chana dal in pressure cooker with turmeric, chopped tomato, and water for 4 whistles. Whisk until creamy.', mr: 'तूर व चणा डाळ हळद आणि टोमॅटोसह कुकरमध्ये ४ शिट्ट्या काढून मऊ शिजवून फेटून घ्या.', hi: 'अरहर और चना दाल को हल्दी, टमाटर और पानी के साथ कुकर में ४ सीटी लगाकर मथ लें।' } },
      { step: 2, text: { en: 'In a tadka pan, heat 3 tbsp pure ghee. Add cumin seeds, hing, sliced garlic, and fry until golden-brown and fragrant.', mr: 'तडका पॅनमध्ये ३ चमचे तूप गरम करून जिरे, हिंग आणि लसूण सोनेरी होईपर्यंत तळा.', hi: 'तड़का पैन में घी गरम करें। जीरा, हींग और लहसुन डालकर सुनहरा होने तक भूनें।' } },
      { step: 3, text: { en: 'Add dried whole red chillies and Kashmiri red chilli powder for color. Immediately pour the sizzling ghee tadka over the hot dal.', mr: 'सुकी लाल मिरची आणि काश्मिरी लाल मिरची पावडर घालून लगेचच हा खमंग तडका डाळीवर ओता.', hi: 'साबुत लाल मिर्च और कश्मीरी मिर्च डालकर तुरंत यह धुआंदार तड़का दाल में लगाएं।' } },
      { step: 4, text: { en: 'Cover immediately with a lid to trap the smoky garlic aroma inside.', mr: 'लसणाचा सुवास आत मुरण्यासाठी लगेच झाकण ठेवा.', hi: 'लहसुन की खुशबू समाने के लिए तुरंत ढक्कन बंद कर दें।' } },
      { step: 5, text: { en: 'Cook basmati rice with cumin seeds tempered in ghee. Serve dal tadka over fluffy jeera rice.', mr: 'तुपात जिरे परतून मोकळा भात शिजवा. गरमागरम दाल तडका जिरा राईससोबत सर्व्ह करा.', hi: 'घी में जीरा तड़काकर जीरा राइस बनाएं। गरमागरम दाल तड़का चावल के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Steamed Jeera Rice', mr: 'जिरा राईस', hi: 'जीरा राइस' },
      { en: 'Roasted Papad & Mixed Pickle', mr: 'भाजलेला पापड व लोणचे', hi: 'पापड़ और अचार' }
    ],
    substitutions: [
      { en: 'Use oil instead of ghee for a 100% vegan preparation.', mr: 'व्हेगनसाठी तुपाऐवजी तेल वापरा.', hi: 'वीगन के लिए तेल का उपयोग करें।' }
    ],
    allergens: ['Dairy (Ghee)'],
    searchAliases: ['dal tadka', 'दाल तड़का', 'jeera rice', 'yellow dal', 'dhaba dal']
  },
  {
    id: 'palak-paneer',
    name: {
      en: 'Homestyle Palak Paneer',
      mr: 'खमंग पालक पनीर',
      hi: 'ढाबा स्टाइल पालक पनीर'
    },
    transliteration: 'Palak Paneer',
    description: {
      en: 'Soft cubes of fresh cottage cheese simmered in a vibrant, spiced pureed spinach gravy infused with garlic, cumin, garam masala, and fresh cream.',
      mr: 'मऊ लुसलुशीत पनीरचे तुकडे, हिरवागार पालक, लसूण आणि खमंग मसाल्यांमध्ये शिजवलेली पौष्टिक पालक पनीर भाजी.',
      hi: 'नरम ताजे पनीर के टुकड़े, लहसुन और मसालों से भरपूर गाढ़ी पालक की ग्रेवी में पके हुए।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'north_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'mild',
    prepTime: 15,
    cookTime: 15,
    difficulty: 'medium',
    servings: 4,
    cost: 160,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', name: { en: 'Fresh Paneer cubes', mr: 'ताजे पनीर तुकडे', hi: 'ताजा पनीर' }, amount: 250, unit: 'g', category: 'dairy' },
      { id: 'spinach', name: { en: 'Fresh Spinach leaves (Palak)', mr: 'ताजा पालक', hi: 'ताजा पालक' }, amount: 2, unit: 'bunches', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा बारीक चिरलेला', hi: 'बारीक कटा प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato (pureed)', mr: 'टोमॅटो प्युरी', hi: 'टमाटर प्यूरी' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'garlic', name: { en: 'Garlic cloves (crushed)', mr: 'ठेचलेला लसूण', hi: 'कुटा हुआ लहसुन' }, amount: 8, unit: 'cloves', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 2, unit: 'pieces', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Blanch washed spinach in boiling water for 2 minutes, then transfer immediately to ice-cold water to retain its bright green color.', mr: 'पालक उकळत्या पाण्यात २ मिनिटे उकळून लगेच बर्फाच्या पाण्यात टाका, जेणेकरून रंग हिरवागार राहतो.', hi: 'पालक को उबलते पानी में २ मिनट उबालकर तुरंत ठंडे पानी में डालें ताकि हरा रंग बना रहे।' } },
      { step: 2, text: { en: 'Puree blanched spinach with green chillies into a smooth velvet texture.', mr: 'पालक आणि हिरवी मिरची मिक्सरमध्ये बारीक वाटून प्युरी बनवा.', hi: 'पालक और हरी मिर्च को पीसकर मुलायम प्यूरी बना लें।' } },
      { step: 3, text: { en: 'Heat 2 tbsp butter/oil in a pan. Sauté cumin, garlic, and onions till golden. Add tomato puree and spices.', mr: 'कढईत बटर किंवा तेल गरम करून जिरे, लसूण आणि कांदा परता. टोमॅटो आणि मसाले घाला.', hi: 'कड़ाही में मक्खन गरम कर जीरा, लहसुन और प्याज भूनें। टमाटर और मसाले मिलाएं।' } },
      { step: 4, text: { en: 'Add spinach puree, salt, and simmer for 5 minutes. Gently fold in fresh paneer cubes and fresh cream; cook for 2 minutes.', mr: 'पालक प्युरी आणि मीठ घालून ५ मिनिटे उकळा. पनीरचे तुकडे आणि साय घालून २ मिनिटे हलवा.', hi: 'पालक प्यूरी और नमक डालकर ५ मिनट पकाएं। पनीर के टुकड़े और मलाई डालकर २ मिनट चलाएं।' } },
      { step: 5, text: { en: 'Serve hot with Phulkas, Naan, or Jeera Rice.', mr: 'गरमागरम फुलके किंवा जिरा राईससोबत वाढा.', hi: 'गरम फुल्के या जीरा राइस के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Phulkas or Garlic Naan', mr: 'गरमागरम फुलके किंवा नान', hi: 'गरम रोटी या नान' }
    ],
    substitutions: [
      { en: 'Tofu or boiled sweet corn can replace paneer for a vegan option.', mr: 'पनीरऐवजी टोफू किंवा मका वापरू शकता.', hi: 'पनीर की जगह टोफू या कॉर्न का इस्तेमाल कर सकते हैं।' }
    ],
    allergens: ['Dairy (Paneer/Cream)'],
    searchAliases: ['palak paneer', 'पालक पनीर', 'spinach paneer', 'cottage cheese', 'paneer palak']
  },
  {
    id: 'chole-rice',
    name: {
      en: 'Amritsari Chole Rice',
      mr: 'अमScopesरी छोले भात',
      hi: 'अमृतसरी छोले-चावल'
    },
    transliteration: 'Chole Chawal',
    description: {
      en: 'Tender white chickpeas simmered in a dark, robust, tangy tea-infused gravy spiced with anardana, amchur, ginger juliennes, and whole garam masala.',
      mr: 'मऊ शिजवलेले काबुली चणे, खमंग छोले मसाला, आले-लसूण आणि टोमॅटोच्या मसालेदार दाट रश्श्यात केलेले चवदार छोले.',
      hi: 'अनारदाना, अमचूर और खड़े मसालों की गाढ़ी और तीखी ग्रेवी में पके हुए काबुली चने, चावल के साथ।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'north_indian',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 15,
    cookTime: 30,
    difficulty: 'medium',
    servings: 4,
    cost: 120,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chole', name: { en: 'Kabuli Chana (Chickpeas soaked 8 hrs)', mr: 'भिजवलेले काबुली चणे', hi: 'भीगे हुए काबुली चने' }, amount: 1.5, unit: 'cups', category: 'pulses' },
      { id: 'rice', name: { en: 'Basmati Rice', mr: 'बासमती तांदूळ', hi: 'बासमती चावल' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onion paste', mr: 'कांदा वाटण', hi: 'प्याज पेस्ट' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato puree', mr: 'टोमॅटो प्युरी', hi: 'टमाटर प्यूरी' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'ginger', name: { en: 'Ginger juliennes and paste', mr: 'आले तुकडे व पेस्ट', hi: 'अदरक के लच्छे व पेस्ट' }, amount: 2, unit: 'tbsp', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Boil soaked chole with a tea bag, bay leaf, cinnamon, and salt in cooker for 6 whistles until melt-in-mouth tender.', mr: 'कुकरमध्ये चणे चहाची पुरचुंडी, तमालपत्र, दालचिनी आणि मीठ घालून ६ शिट्ट्या काढून मऊ शिजवून घ्या.', hi: 'काबुली चने में चाय पत्ती की पोटली, तेजपत्ता और नमक डालकर ६ सीटी तक अच्छी तरह उबालें।' } },
      { step: 2, text: { en: 'Heat 3 tbsp oil. Sauté ginger-garlic paste and onion paste until rich golden-brown.', mr: 'तेलात आले-लसूण आणि कांदा पेस्ट सोनेरी होईपर्यंत खमंग परता.', hi: 'तेल में अदरक-लहसुन और प्याज पेस्ट सुनहरा होने तक भूनें।' } },
      { step: 3, text: { en: 'Add tomato puree, chole masala, cumin powder, amchur, and red chilli powder. Cook till oil separates.', mr: 'टोमॅटो प्युरी, छोले मसाला, आमचूर आणि तिखट घालून तेल सुटेपर्यंत परता.', hi: 'टमाटर प्यूरी, छोले मसाला, अमचूर और मिर्च डालकर तेल छोड़ने तक भूनें।' } },
      { step: 4, text: { en: 'Add boiled chickpeas along with cooking liquor. Simmer for 15 minutes, slightly mashing some chickpeas for a rich gravy.', mr: 'शिजलेले चणे पाण्यासह घाला. थोडे चणे मॅश करून १५ मिनिटे मंद आचेवर उकळू द्या.', hi: 'उबले चने पानी सहित डालें, थोड़े मैश करें और १५ मिनट धीमी आंच पर पकाएं।' } },
      { step: 5, text: { en: 'Top with ginger juliennes and green chillies. Serve with fragrant Basmati rice or fluffy Bhature.', mr: 'आल्याचे तुकडे आणि कोथिंबीर घालून गरमागरम बासमती भातासोबत किंवा भटुऱ्यासोबत वाढा.', hi: 'अदरक के लच्छे और धनिए से सजाकर गरम चावल या भटूरे के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Steamed Basmati Rice or Puri', mr: 'बासमती भात किंवा पुरी', hi: 'चावल या पूरी' },
      { en: 'Pickled onions & green chillies', mr: 'कांदा व हिरवी मिरची', hi: 'प्याज और हरी मिर्च' }
    ],
    substitutions: [
      { en: 'Canned chickpeas can be used to save boiling time.', mr: 'वेळ वाचवण्यासाठी उकडलेले रेडीमेड चणे वापरू शकता.', hi: 'कैन वाले उबले चने भी ले सकते हैं।' }
    ],
    allergens: ['Chickpeas / Legumes'],
    searchAliases: ['chole rice', 'छोले भात', 'chole chawal', 'chickpea curry', 'amritsari chole']
  },
  {
    id: 'besan-chilla',
    name: {
      en: 'Quick High-Protein Besan Chilla',
      mr: 'पौष्टिक बेसन चिल्ला / धिरडे',
      hi: 'हाई प्रोटीन बेसन चीला'
    },
    transliteration: 'Besan Chilla',
    description: {
      en: 'Wholesome savory Indian pancakes loaded with finely chopped onions, tomatoes, coriander, green chillies, and ajwain, cooked crispy on an iron tawa in 15 minutes.',
      mr: 'बेसन, कांदा, टोमॅटो, ओवा, हळद आणि कोथिंबीरचे खमंग व पौष्टिक धिरडे; १५ मिनिटांत तयार होणारा चविष्ट नाश्ता.',
      hi: 'बेसन, बारीक प्याज, टमाटर, अजवाइन और हरी मिर्च से बना झटपट और पौष्टिक नमकीन चीला।'
    },
    category: 'breakfast',
    mealTypes: ['breakfast', 'dinner', 'snack'],
    cuisine: 'pan_indian',
    dietary: 'vegan',
    isKhandeshi: false,
    isMaharashtrian: true,
    spiceLevel: 'mild',
    prepTime: 5,
    cookTime: 10,
    difficulty: 'easy',
    servings: 2,
    cost: 40,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', name: { en: 'Gram flour (Besan)', mr: 'बेसन / हरभऱ्याचे पीठ', hi: 'बेसन' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा बारीक चिरलेला', hi: 'बारीक कटा प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato (finely chopped)', mr: 'टोमॅटो बारीक चिरलेला', hi: 'बारीक कटा टमाटर' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 2, unit: 'pieces', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' },
      { id: 'turmeric', name: { en: 'Turmeric & Ajwain (carom seeds)', mr: 'हळद आणि ओवा', hi: 'हल्दी और अजवाइन' }, amount: 1, unit: 'tsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'In a bowl, mix besan with crushed ajwain, turmeric, salt, chopped onion, tomato, green chillies, and coriander.', mr: 'भांड्यात बेसन, ओवा, हळद, मीठ, कांदा, टोमॅटो, हिरवी मिरची आणि कोथिंबीर एकत्र करा.', hi: 'बर्तन में बेसन, अजवाइन, हल्दी, नमक, प्याज, टमाटर, मिर्च और धनिया मिलाएं।' } },
      { step: 2, text: { en: 'Add water gradually to form a pourable, lump-free batter of dosa consistency.', mr: 'पाणी घालून गुठळ्या न होता डोशासारखे पीठ तयार करा.', hi: 'धीरे-धीरे पानी डालकर डोसे जैसा चिकना घोल तैयार करें।' } },
      { step: 3, text: { en: 'Heat a tawa, drizzle a few drops of oil. Pour a ladleful of batter and spread into a round pancake with the back of the ladle.', mr: 'तव्यावर थोडे तेल लावून पळीभर पीठ मध्यभागी ओतून गोल पसरा.', hi: 'तवे पर तेल लगाएं, कलछी से घोल डालकर गोल फैलाएं।' } },
      { step: 4, text: { en: 'Cook on medium flame until edges turn crisp and golden. Flip and cook the other side for 1-2 minutes until speckled brown.', mr: 'कडेने तेल सोडून खालची बाजू सोनेरी होईपर्यंत भाजा. उलटवून दुसरी बाजूही शेका.', hi: 'किनारों पर तेल डालकर सुनहरा होने तक सेकें। पलटकर दूसरी तरफ भी सेक लें।' } },
      { step: 5, text: { en: 'Serve hot with mint chutney or tomato ketchup.', mr: 'हिरवी पुदिना चटणी किंवा सॉससोबत गरमागरम खा.', hi: 'हरी पुदीना चटनी या सॉस के साथ गरमागरम परोसें।' } }
    ],
    accompaniments: [
      { en: 'Green Mint Coriander Chutney', mr: 'हिरवी पुदिना चटणी', hi: 'हरी पुदीना चटनी' },
      { en: 'Hot Masala Chai', mr: 'गरमागरम चहा', hi: 'मसाला चाय' }
    ],
    substitutions: [
      { en: 'Add grated paneer on top before flipping for a Paneer Chilla.', mr: 'वरून किसलेले पनीर घालून पनीर चिल्ला बनवू शकता.', hi: 'ऊपर से कसा पनीर डालकर पनीर चीला बना सकते हैं।' }
    ],
    allergens: ['Besan (Gram flour)'],
    searchAliases: ['besan chilla', 'बेसन चिल्ला', 'dhirde', 'धिरडे', 'gram flour pancake', 'healthy breakfast']
  },
  {
    id: 'paneer-bhurji',
    name: {
      en: 'Spicy Homestyle Paneer Bhurji',
      mr: 'खमंग पनीर भुर्जी',
      hi: 'तीखी ढाबा पनीर भुर्जी'
    },
    transliteration: 'Paneer Bhurji',
    description: {
      en: 'Scrambled fresh cottage cheese sautéed with onions, juicy tomatoes, ginger, green chillies, and aromatic spices in butter. Quick, protein-packed 15-minute meal.',
      mr: 'कांदा, टोमॅटो, आले, हिरवी मिरची आणि खमंग मसाल्यांमध्ये बटरवर परतलेले मऊ पनीर भुर्जी; १५ मिनिटांत तयार.',
      hi: 'ताजे पनीर को प्याज, टमाटर, अदरक, हरी मिर्च और मक्खन में भूनकर बनाई गई स्वादिष्ट भुर्जी।'
    },
    category: 'dinner',
    mealTypes: ['lunch', 'dinner', 'breakfast'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'medium',
    prepTime: 5,
    cookTime: 10,
    difficulty: 'easy',
    servings: 3,
    cost: 140,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', name: { en: 'Fresh Paneer (crumbled)', mr: 'बारीक कुस्करलेले ताजे पनीर', hi: 'मैश किया हुआ ताजा पनीर' }, amount: 250, unit: 'g', category: 'dairy' },
      { id: 'onion', name: { en: 'Onion (finely chopped)', mr: 'कांदा बारीक चिरलेला', hi: 'बारीक कटा प्याज' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'tomato', name: { en: 'Tomato (finely chopped)', mr: 'टोमॅटो बारीक चिरलेला', hi: 'बारीक कटा टमाटर' }, amount: 2, unit: 'medium', category: 'vegetables' },
      { id: 'green_chillies', name: { en: 'Green chillies (chopped)', mr: 'हिरव्या मिरच्या', hi: 'हरी मिर्च' }, amount: 2, unit: 'pieces', category: 'vegetables' },
      { id: 'coriander', name: { en: 'Fresh Coriander', mr: 'कोथिंबीर', hi: 'हरा धनिया' }, amount: 3, unit: 'tbsp', category: 'vegetables' },
      { id: 'turmeric', name: { en: 'Turmeric and Pav Bhaji Masala', mr: 'हळद आणि पावभाजी मसाला', hi: 'हल्दी और पावभाजी मसाला' }, amount: 1, unit: 'tbsp', category: 'spices' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat 2 tbsp butter or oil in a pan. Add cumin seeds, chopped green chillies, and grated ginger.', mr: 'कढईत बटर किंवा तेल गरम करून जिरे, हिरवी मिरची आणि आले परता.', hi: 'कड़ाही में मक्खन गरम कर जीरा, हरी मिर्च और अदरक भूनें।' } },
      { step: 2, text: { en: 'Add chopped onions and sauté until translucent and soft. Add tomatoes and cook till mushy.', mr: 'कांदा घालून मऊ होईपर्यंत परता. टोमॅटो घालून तेल सुटेपर्यंत शिजवा.', hi: 'प्याज डालकर भूनें। टमाटर डालकर गलने तक पकाएं।' } },
      { step: 3, text: { en: 'Add turmeric, red chilli powder, pav bhaji masala or garam masala, and salt. Cook for 1 minute.', mr: 'हळद, तिखट, पावभाजी मसाला किंवा गरम मसाला आणि मीठ घालून परता.', hi: 'हल्दी, मिर्च, पावभाजी मसाला और नमक डालकर १ मिनट चलाएं।' } },
      { step: 4, text: { en: 'Add crumbled paneer. Toss gently on medium-high heat for 2-3 minutes so paneer stays soft and moist (do not overcook).', mr: 'कुस्करलेले पनीर घालून २-३ मिनिटे परता. जास्त शिजवू नका जेणेकरून पनीर मऊ राहील.', hi: 'मैश पनीर डालें और २-३ मिनट मध्यम आंच पर चलाएं ताकि पनीर सख्त न हो।' } },
      { step: 5, text: { en: 'Garnish with plenty of fresh coriander and a squeeze of fresh lemon. Serve with hot Butter Pav or Phulkas.', mr: 'कोथिंबीर आणि लिंबाचा रस घालून बटर लावलेल्या पावासोबत किंवा पोळीसोबत गरमागरम सर्व्ह करा.', hi: 'हरा धनिया और नींबू का रस डालकर बटर पाव या रोटी के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Hot Buttered Pav or Phulkas', mr: 'बटर लावलेला पाव किंवा गरम चपाती', hi: 'बटर पाव या गरम रोटी' }
    ],
    substitutions: [
      { en: 'Tofu can be crumbled for a high-protein vegan Tofu Bhurji.', mr: 'टोफू वापरून व्हेगन टोफू भुर्जी करू शकता.', hi: 'टोफू से वीगन भुर्जी बना सकते हैं।' }
    ],
    allergens: ['Dairy (Paneer/Butter)'],
    searchAliases: ['paneer bhurji', 'पनीर भुर्जी', 'scrambled paneer', 'quick paneer recipe', 'high protein dinner']
  },
  {
    id: 'veg-pulao',
    name: {
      en: 'Aromatic Mixed Vegetable Pulao',
      mr: 'सुगंधी व्हेजिटेबल पुलाव',
      hi: 'मिक्स वेज पुलाव'
    },
    transliteration: 'Veg Pulao',
    description: {
      en: 'Long-grain basmati rice cooked with colorful seasonal vegetables, fragrant whole spices (cinnamon, cloves, cardamom), mint, and caramelized onions.',
      mr: 'लांब दाण्याचा बासमती तांदूळ, मटार, गाजर, बटाटे, सुगंधी लवंग, दालचिनी, वेलची आणि पुदिन्यासह केलेला चवदार पुलाव.',
      hi: 'खिले-खिले बासमती चावल, ताजी सब्जियां, खड़े मसाले और पुदीने की खुशबू से बना स्वादिष्ट पुलाव।'
    },
    category: 'lunch',
    mealTypes: ['lunch', 'dinner'],
    cuisine: 'pan_indian',
    dietary: 'veg',
    isKhandeshi: false,
    isMaharashtrian: false,
    spiceLevel: 'mild',
    prepTime: 15,
    cookTime: 20,
    difficulty: 'easy',
    servings: 4,
    cost: 110,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', name: { en: 'Basmati Rice (soaked 20 mins)', mr: 'बासमती तांदूळ भिजवलेला', hi: 'भीगा बासमती चावल' }, amount: 1.5, unit: 'cups', category: 'grains' },
      { id: 'green_peas', name: { en: 'Green peas', mr: 'हिरवे मटार', hi: 'हरी मटर' }, amount: 0.5, unit: 'cup', category: 'vegetables' },
      { id: 'potato', name: { en: 'Potato (cubed)', mr: 'बटाटा तुकडे', hi: 'आलू के टुकड़े' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'onion', name: { en: 'Onion (thinly sliced)', mr: 'कांदा उभा चिरलेला', hi: 'लम्बा कटा प्याज' }, amount: 1, unit: 'medium', category: 'vegetables' },
      { id: 'ghee', name: { en: 'Ghee or oil', mr: 'साजूक तूप किंवा तेल', hi: 'घी या तेल' }, amount: 2, unit: 'tbsp', category: 'dairy' },
      { id: 'coriander', name: { en: 'Mint & coriander leaves', mr: 'पुदिना व कोथिंबीर', hi: 'पुदीना और धनिया' }, amount: 0.25, unit: 'cup', category: 'vegetables' }
    ],
    instructions: [
      { step: 1, text: { en: 'Heat 2 tbsp ghee in a pot. Add bay leaf, cinnamon, cardamom, cloves, and sliced onions; fry till golden.', mr: 'टोपात तूप तापवून तमालपत्र, लवंग, दालचिनी, वेलची आणि कांदा सोनेरी रंगावर परता.', hi: 'पतीले में घी गरम कर खड़े मसाले और प्याज सुनहरा होने तक भूनें।' } },
      { step: 2, text: { en: 'Add ginger-garlic-chilli paste, potato cubes, green peas, and carrots. Sauté for 2 minutes.', mr: 'आले-लसूण-मिरची पेस्ट, बटाटा, मटार आणि गाजर घालून २ मिनिटे परता.', hi: 'अदरक-लहसुन पेस्ट, आलू, मटर और गाजर डालकर २ मिनट भूनें।' } },
      { step: 3, text: { en: 'Add soaked basmati rice, mint, coriander, salt, and 3 cups hot water. Stir once.', mr: 'भिजवलेला तांदूळ, पुदिना, कोथिंबीर, मीठ आणि ३ कप गरम पाणी घाला.', hi: 'भीगा चावल, पुदीना, धनिया, नमक और ३ कप गर्म पानी मिलाएं।' } },
      { step: 4, text: { en: 'Cover tightly and cook on low heat for 12-14 minutes until water is absorbed and grains are fluffy.', mr: 'झाकण ठेवून मंद आचेवर १२-१४ मिनिटे वाफ काढा. तांदूळ मोकळा व लांब दाण्याचा होईल.', hi: 'ढककर धीमी आंच पर १२-१४ मिनट पकाएं जब तक कि चावल का दाना खिल न जाए।' } },
      { step: 5, text: { en: 'Rest for 5 minutes, fluff gently with a fork, and serve with vegetable raita.', mr: '५ मिनिटांनी चमच्याने हलकेच मोकळा करून काकडी किंवा बुंदी रायत्यासोबत वाढा.', hi: '५ मिनट बाद कांटे से हल्का चलाएं और बूंदी रायते के साथ परोसें।' } }
    ],
    accompaniments: [
      { en: 'Cucumber or Boondi Raita', mr: 'काकडी किंवा बुंदी रायता', hi: 'खीरा या बूंदी रायता' },
      { en: 'Roasted Papad', mr: 'भाजलेला पापड', hi: 'पापड़' }
    ],
    substitutions: [
      { en: 'Add fried paneer cubes or soya chunks for extra protein.', mr: 'पनीर किंवा सोयाबीन वड्या घालून अधिक पौष्टिक करू शकता.', hi: 'पनीर या सोयाबीन मिलाकर भी बना सकते हैं।' }
    ],
    allergens: ['Dairy (Ghee)'],
    searchAliases: ['veg pulao', 'व्हेज पुलाव', 'vegetable rice', 'pulao', 'matar pulao']
  }
];
