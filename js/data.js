// Data Source for Vision Pro TV Store

const TV_DATA = {
  categories: [
    { id: "all", name: "ทีวีทั้งหมด", icon: "tv" },
    { id: "oled", name: "OLED / QD-OLED", icon: "sparkles", desc: "ดำสนิท สีสดสมจริง ไร้แสงลอด" },
    { id: "qled", name: "QLED / Mini-LED", icon: "sun", desc: "สว่างเจิดจ้า คมชัดแม้ห้องสว่าง" },
    { id: "gaming", name: "Gaming 144Hz+", icon: "gamepad-2", desc: "ตอบสนองไว ลื่นไหลระดับโปร" },
    { id: "8k", name: "8K Ultra HD", icon: "zap", desc: "ความละเอียดสูงสุด 33 ล้านพิกเซล" },
    { id: "lifestyle", name: "Lifestyle & Frame", icon: "image", desc: "เปลี่ยนทีวีให้เป็นกรอบรูปศิลปะ" }
  ],

  brands: ["Samsung", "LG", "Sony", "TCL", "Hisense", "Xiaomi"],
  sizes: [43, 50, 55, 65, 75, 85],

  products: [
    {
      id: "tv-01",
      name: "Samsung Neo QLED 8K 85\" QN900D (2025/2026)",
      brand: "Samsung",
      category: "8k",
      size: 85,
      resolution: "8K (7680 x 4320)",
      panelType: "Neo QLED (Mini-LED)",
      refreshRate: "240Hz (Motion Xcelerator)",
      smartOS: "Tizen OS (AI NQ8 Gen3)",
      sound: "90W 6.2.4CH Dolby Atmos (OTS Pro)",
      hdr: "Neo Quantum HDR 8K Pro, HDR10+",
      hdmiPorts: "4x HDMI 2.1 (4K@240Hz / 8K@60Hz)",
      originalPrice: 199990,
      price: 159990,
      discount: 20,
      rating: 4.9,
      reviewsCount: 42,
      badge: "Flagship 8K",
      badgeColor: "bg-purple-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80",
      description: "ทีวี 8K ระดับเรือธงที่ดีที่สุด ด้วยชิปประมวลผล NQ8 AI Gen3 ยกระดับทุกภาพสู่ความละเอียด 8K คมชัดเหนือจินตนาการ พร้อมดีไซน์ Infinity Air ไร้ขอบที่บางเฉียบ",
      features: [
        "ชิปประมวลผล NQ8 AI Gen3 อัจฉริยะที่สุด",
        "อัตราการรีเฟรชสูงสุด 240Hz สำหรับเกมเมอร์ระดับท็อป",
        "เสียงรอบทิศทาง 6.2.4CH พร้อมระบบ Object Tracking Sound Pro",
        "หน้าจอ Infinity Screen ไร้ขอบเกือบ 99%"
      ]
    },
    {
      id: "tv-02",
      name: "LG OLED evo G4 65\" 4K Gallery Edition",
      brand: "LG",
      category: "oled",
      size: 65,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "OLED evo (Micro Lens Array)",
      refreshRate: "144Hz VRR / G-Sync / FreeSync",
      smartOS: "webOS 24 (AI α11 Processor)",
      sound: "60W 4.2CH Dolby Atmos (AI Sound Pro 11.1.2)",
      hdr: "Dolby Vision, HDR10, HLG",
      hdmiPorts: "4x HDMI 2.1 (4K@144Hz)",
      originalPrice: 119900,
      price: 94900,
      discount: 21,
      rating: 5.0,
      reviewsCount: 68,
      badge: "Best Picture OLED",
      badgeColor: "bg-blue-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=900&q=80",
      description: "ที่สุดของความคมชัดระดับสตูดิโอด้วยแผง OLED evo เจเนอเรชันใหม่ พร้อมเทคโนโลยี Brightness Booster Max สว่างกว่า OLED ทั่วไปถึง 70% และชิป α11 AI 4K",
      features: [
        "Brightness Booster Max ให้ความสว่างสูงสุด",
        "ชิป α11 AI Processor ยกระดับภาพและเสียงระดับพรีเมียม",
        "รองรับ Dolby Vision และ Dolby Atmos เต็มรูปแบบ",
        "รับประกันพาเนลหน้าจอ OLED นานถึง 5 ปีเต็ม"
      ]
    },
    {
      id: "tv-03",
      name: "Sony BRAVIA 9 Mini-LED 75\" XR Master Series",
      brand: "Sony",
      category: "qled",
      size: 75,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "QLED Mini-LED (XR Backlight Master Drive)",
      refreshRate: "120Hz (Perfect for PS5)",
      smartOS: "Google TV (XR Processor)",
      sound: "70W Acoustic Multi-Audio+ Beam Tweeter",
      hdr: "Dolby Vision, IMAX Enhanced, HDR10",
      hdmiPorts: "4x HDMI (2x HDMI 2.1)",
      originalPrice: 139900,
      price: 114900,
      discount: 18,
      rating: 4.8,
      reviewsCount: 35,
      badge: "Cinema Master",
      badgeColor: "bg-amber-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=900&q=80",
      description: "ทีวี Mini-LED สว่างที่สุดและให้สีตรงตามที่ผู้กำกับฮอลลีวูดต้องการ ด้วยระบบ XR Backlight Master Drive และเทคโนโลยี Acoustic Multi-Audio+ เสียงเปล่งตรงจากจอภาพ",
      features: [
        "ควบคุมความสว่างหลอด Mini-LED อิสระระดับพันโซน",
        "ฟังก์ชันพิเศษสำหรับ PlayStation 5 (Auto HDR Tone Mapping)",
        "ระบบปฏิบัติการ Google TV โหลดแอปได้จุใจ",
        "ระบบภาพ IMAX Enhanced และ Netflix Calibrated Mode"
      ]
    },
    {
      id: "tv-04",
      name: "TCL Premium QD-Mini LED 65\" C855 (144Hz)",
      brand: "TCL",
      category: "gaming",
      size: 65,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "QD-Mini LED (2160 Local Dimming Zones)",
      refreshRate: "144Hz VRR (Game Accelerator 240Hz)",
      smartOS: "Google TV (AiPQ PRO Processor)",
      sound: "60W 2.1.2CH ONKYO Hi-Fi Sound System",
      hdr: "Dolby Vision IQ, HDR10+, HLG",
      hdmiPorts: "4x HDMI (2x HDMI 2.1 4K@144Hz)",
      originalPrice: 49990,
      price: 36990,
      discount: 26,
      rating: 4.7,
      reviewsCount: 89,
      badge: "คุ้มค่าที่สุด (Hot)",
      badgeColor: "bg-red-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=900&q=80",
      description: "ราชาแห่งความคุ้มค่า ให้โซนคุมแสงมากถึง 2,160 โซน ความสว่างสูงสุด 3,500 nits ลื่นไหลด้วยรีเฟรชเรท 144Hz พร้อมลำโพง Onkyo พลังเสียงสะใจ",
      features: [
        "ความสว่างระดับพีค 3500 nits มองเห็นชัดทุกรายละเอียด",
        "ระบบเสียง Onkyo 2.1.2CH พร้อม Subwoofer ในตัว",
        "Game Master Pro 3.0 สำหรับคอเกมตัวจริง",
        "ขอบเขตสี Quantum Dot DCI-P3 97%"
      ]
    },
    {
      id: "tv-05",
      name: "LG OLED C4 55\" 4K Smart Cinema TV",
      brand: "LG",
      category: "oled",
      size: 55,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "OLED evo",
      refreshRate: "144Hz (G-Sync & FreeSync Premium)",
      smartOS: "webOS 24 (α9 AI Gen7)",
      sound: "40W 2.2CH Dolby Atmos",
      hdr: "Dolby Vision, HDR10 Pro, Filmmaker Mode",
      hdmiPorts: "4x HDMI 2.1 Full Bandwidth",
      originalPrice: 59900,
      price: 45900,
      discount: 23,
      rating: 4.9,
      reviewsCount: 112,
      badge: "Best Seller",
      badgeColor: "bg-emerald-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
      description: "ทีวี OLED ขวัญใจมหาชนรุ่นยอดนิยมตลอดกาล พิกเซลเปล่งแสงอิสระ Contrast ระดับอนันต์ เหมาะทั้งดูหนังระบบ Dolby Vision และเล่นเกม Console/PC 144Hz",
      features: [
        "พิกเซลกำเนิดแสงเอง ดำสนิทสมบูรณ์แบบ (Perfect Black)",
        "ตอบสนองไวพิเศษ 0.1ms Response Time",
        "รองรับ Apple AirPlay 2, HomeKit และ Matter",
        "รีโมต Magic Remote ใช้งานง่ายเหมือนเมาส์ไร้สาย"
      ]
    },
    {
      id: "tv-06",
      name: "Samsung The Frame 65\" LS03D Lifestyle TV",
      brand: "Samsung",
      category: "lifestyle",
      size: 65,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "QLED Matte Display (ป้องกันแสงสะท้อน)",
      refreshRate: "120Hz (Motion Xcelerator 120Hz)",
      smartOS: "Tizen OS (Art Mode & Art Store)",
      sound: "40W 2.0.2CH Dolby Atmos (OTS Lite)",
      hdr: "Quantum HDR, HDR10+",
      hdmiPorts: "4x HDMI (One Connect Box)",
      originalPrice: 62990,
      price: 49990,
      discount: 21,
      rating: 4.8,
      reviewsCount: 54,
      badge: "Art & Decor",
      badgeColor: "bg-teal-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      description: "แปลงโฉมห้องนั่งเล่นให้เป็นหอศิลป์ระดับโลก ด้วยทีวีกรอบรูป หน้าจอ Matte Display ตัดแสงสะท้อน 100% สวยงามแนบสนิทกับผนังเสมือนภาพวาดจริง",
      features: [
        "หน้าจอแบบด้าน Matte Display ไร้แสงสะท้อนรบกวน",
        "Art Mode แสดงผลงานศิลปะกว่า 2,500 ชิ้นเมื่อปิดทีวี",
        "สายเชื่อมต่อแบบใสเส้นเดียว One Connect Box เก็บสายเนียนตา",
        "กรอบแม่เหล็กเปลี่ยนสีได้ตามสไตล์ห้อง (Customizable Bezel)"
      ]
    },
    {
      id: "tv-07",
      name: "Sony BRAVIA 8 OLED 65\" Acoustic Audio",
      brand: "Sony",
      category: "oled",
      size: 65,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "OLED (Pure Black)",
      refreshRate: "120Hz (XR Clear Image)",
      smartOS: "Google TV (XR Processor)",
      sound: "50W Acoustic Surface Audio+ (สั่นจากกระจก)",
      hdr: "Dolby Vision, HDR10, HLG",
      hdmiPorts: "4x HDMI (2x HDMI 2.1)",
      originalPrice: 89900,
      price: 74900,
      discount: 17,
      rating: 4.9,
      reviewsCount: 31,
      badge: "True Cinema",
      badgeColor: "bg-indigo-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=900&q=80",
      description: "สัมผัสประสบการณ์ภาพและเสียงที่ผสานเป็นหนึ่งเดียวด้วย Acoustic Surface Audio+ ลำโพงเปล่งเสียงออกมาจากตำแหน่งตัวละครบนจอภาพโดยตรง",
      features: [
        "Acoustic Surface Audio+ เสียงตรงตำแหน่งปากผู้พูด",
        "XR Triluminos Pro แสดงเฉดสีกว่า 1 พันล้านสี",
        "โหมดภาพยนตร์ Studio Calibrated (Netflix, SONY PICTURES CORE)",
        "รองรับการเชื่อมต่อกับ Soundbar Sony เพื่อทำระบบ 360 Spatial Sound"
      ]
    },
    {
      id: "tv-08",
      name: "Hisense UX Championship 85\" RGB Mini-LED",
      brand: "Hisense",
      category: "gaming",
      size: 85,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "Mini-LED X (5,000+ Dimming Zones)",
      refreshRate: "144Hz Game Mode PRO",
      smartOS: "VIDAA U7.6 AI",
      sound: "82W 4.1.2 CineStage X Surround",
      hdr: "Dolby Vision IQ, HDR10+ Adaptive",
      hdmiPorts: "4x HDMI 2.1",
      originalPrice: 129900,
      price: 99900,
      discount: 23,
      rating: 4.6,
      reviewsCount: 27,
      badge: "Giant Screen",
      badgeColor: "bg-rose-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&w=900&q=80",
      description: "โรงภาพยนตร์ขนาดยักษ์ในบ้านคุณ จอ 85 นิ้ว พร้อมหลอด Mini-LED กว่า 40,000 ดวง สว่างถึง 2500 nits คมชัดทุกมุมมองด้วยเทคโนโลยี Hi-View Engine X",
      features: [
        "โซนหรี่แสงมากถึง 5,000+ โซน มิติภาพลึกสมจริง",
        "ระบบเสียง 4.1.2 CineStage X พลังเสียงรอบทิศทางในตัว",
        "144Hz Game Mode Pro พร้อม FreeSync Premium Pro",
        "แผงหน้าจอ Low Reflection Panel มุมมองกว้างพิเศษ"
      ]
    },
    {
      id: "tv-09",
      name: "Xiaomi TV Max 86\" 120Hz Ultra Size",
      brand: "Xiaomi",
      category: "gaming",
      size: 85,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "Quantum Dot LED (Full Array Local Dimming)",
      refreshRate: "120Hz (MEMC 120Hz 4K)",
      smartOS: "Android TV 11 (Google Assistant Built-in)",
      sound: "30W (2x 15W) Dolby Audio & DTS-HD",
      hdr: "Dolby Vision IQ, HDR10+, HLG",
      hdmiPorts: "3x HDMI (1x HDMI 2.1)",
      originalPrice: 59990,
      price: 45990,
      discount: 23,
      rating: 4.6,
      reviewsCount: 76,
      badge: "Mega Size Value",
      badgeColor: "bg-orange-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80",
      description: "เปิดมิติใหม่ของการรับชมด้วยจอขนาดยักษ์ 86 นิ้ว ในราคาที่จับต้องได้ที่สุด รองรับ 120Hz 4K สำหรับเล่นเกมและดูถ่ายทอดสดกีฬาได้อย่างไร้รอยต่อ",
      features: [
        "จอใหญ่สะใจ 86 นิ้ว กรอบโลหะพรีเมียมแข็งแกร่ง",
        "120Hz Refresh Rate พร้อมเทคโนโลยีชดเชยภาพ MEMC",
        "รองรับ Chromecast Built-in และสั่งงานด้วยเสียงภาษาไทย",
        "ระบบเสียง Dolby Atmos และ DTS:X"
      ]
    },
    {
      id: "tv-10",
      name: "Samsung Crystal UHD 55\" DU8000 4K",
      brand: "Samsung",
      category: "qled",
      size: 55,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "Dynamic Crystal Color",
      refreshRate: "60Hz (Motion Xcelerator)",
      smartOS: "Tizen Smart TV (SmartThings Hub)",
      sound: "20W 2CH (Q-Symphony)",
      hdr: "HDR10+, HLG",
      hdmiPorts: "3x HDMI",
      originalPrice: 19990,
      price: 13990,
      discount: 30,
      rating: 4.7,
      reviewsCount: 154,
      badge: "ขายดีอันดับ 1",
      badgeColor: "bg-green-600",
      inStock: true,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
      description: "สมาร์ททีวี 4K ที่คุ้มค่าและขายดีที่สุด สีสันสดใส พันล้านเฉดสีด้วย Dynamic Crystal Color ดีไซน์ AirSlim บางเฉียบ จัดวางมุมไหนก็สวยงามลงตัว",
      features: [
        "Dynamic Crystal Color ให้สีสันสมจริงสดใส",
        "ดีไซน์ AirSlim บางเฉียบ สวยหรูทุกมุมมอง",
        "SmartThings Hub ในตัว ควบคุมเครื่องใช้ไฟฟ้าในบ้าน",
        "ระบบ Q-Symphony ผสานเสียงทีวีและซาวด์บาร์อย่างกลมกลืน"
      ]
    },
    {
      id: "tv-11",
      name: "TCL 55\" C755 QD-Mini LED 4K 144Hz",
      brand: "TCL",
      category: "gaming",
      size: 55,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "QD-Mini LED",
      refreshRate: "144Hz VRR",
      smartOS: "Google TV (AiPQ Processor 3.0)",
      sound: "50W 2.1CH ONKYO Subwoofer",
      hdr: "Dolby Vision IQ, HDR10+",
      hdmiPorts: "4x HDMI (2x HDMI 2.1)",
      originalPrice: 28990,
      price: 21990,
      discount: 24,
      rating: 4.8,
      reviewsCount: 95,
      badge: "Best Gaming Budget",
      badgeColor: "bg-blue-500",
      inStock: true,
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=900&q=80",
      description: "ทีวีสำหรับสายเกมเมอร์ในงบประหยัด สเปกจัดเต็มด้วย QD-Mini LED รีเฟรชเรต 144Hz แท้ พร้อมพอร์ต HDMI 2.1 สองช่อง เล่นเกม PS5 และ PC สบายๆ",
      features: [
        "แผงจอ QD-Mini LED คอนทราสต์สูง ดำลึก สว่างชัด",
        "144Hz VRR + AMD FreeSync Premium Pro",
        "ระบบเสียง Onkyo มี Subwoofer ในตัว เบสแน่น",
        "ระบบปฏิบัติการ Google TV มีแอปดูหนังครบครัน"
      ]
    },
    {
      id: "tv-12",
      name: "Hisense 50\" E7K 4K Quantum Dot Smart TV",
      brand: "Hisense",
      category: "qled",
      size: 50,
      resolution: "4K UHD (3840 x 2160)",
      panelType: "Quantum Dot QLED",
      refreshRate: "60Hz (Game Mode PLUS)",
      smartOS: "VIDAA U6 OS",
      sound: "20W Dolby Atmos & DTS Virtual:X",
      hdr: "Dolby Vision, HDR10+",
      hdmiPorts: "3x HDMI (eARC)",
      originalPrice: 15900,
      price: 10900,
      discount: 31,
      rating: 4.5,
      reviewsCount: 63,
      badge: "Super Save",
      badgeColor: "bg-amber-500",
      inStock: true,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80",
      description: "ทีวี QLED 50 นิ้ว ในราคาหมื่นต้นๆ ให้สีสัน Quantum Dot Color พันล้านเฉด รองรับ Dolby Vision และ Dolby Atmos เต็มระบบ คุ้มค่าที่สุดสำหรับห้องนอนหรือคอนโด",
      features: [
        "เทคโนโลยี Quantum Dot Color สีสันคมชัดสมจริง",
        "รองรับ Dolby Vision และ Dolby Atmos ในตัว",
        "โหมด AI Sports Mode และ Game Mode PLUS",
        "ระบบปฏิบัติการ VIDAA รวดเร็ว ไม่มีโฆษณากวนใจ"
      ]
    }
  ],

  promotions: [
    {
      id: "promo-1",
      title: "🔥 FLASH SALE MID-YEAR MEGA TV DEALS",
      subtitle: "ลดกระหน่ำสูงสุด 40% เฉพาะสัปดาห์นี้เท่านั้น!",
      code: "TVPRO2026",
      discountText: "ลดเพิ่ม 2,500 บาท",
      minSpend: "เมื่อช้อปครบ 25,000 บาท",
      expiry: "เหลือเวลาอีก 2 วัน 14 ชม.",
      highlight: true,
      badge: "คูปองแนะนำ"
    },
    {
      id: "promo-2",
      title: "👑 OLED LUXURY UPGRADE",
      subtitle: "รับฟรี Soundbar มูลค่า 9,990.- เมื่อซื้อทีวี OLED 65\" ขึ้นไป",
      code: "OLEDGIFT",
      discountText: "ฟรี Soundbar 3.1CH",
      minSpend: "สำหรับสินค้ารุ่นที่ร่วมรายการ",
      expiry: "ถึงสิ้นเดือนนี้",
      highlight: false,
      badge: "ของแถมพรีเมียม"
    },
    {
      id: "promo-3",
      title: "💳 ผ่อนสบาย 0% นานสูงสุด 10 เดือน",
      subtitle: "พร้อมรับเครดิตเงินคืน (Cashback) สูงสุด 12,000 บาท กับบัตรเครดิตชั้นนำ",
      code: "0PERCENT",
      discountText: "ผ่อน 0% + เครดิตเงินคืน",
      minSpend: "ธนาคาร กสิกร, SCB, กรุงศรี, KTC, BBL",
      expiry: "ตลอดทั้งปี",
      highlight: false,
      badge: "สิทธิพิเศษบัตรเครดิต"
    },
    {
      id: "promo-4",
      title: "🚚 บริการส่งฟรี + ติดตั้งแขวนผนังฟรีทั่วประเทศ",
      subtitle: "โดยทีมช่างมืออาชีพผ่านการรับรองมาตรฐานสากล พร้อมสอนการใช้งานอย่างละเอียด",
      code: "FREESHIP",
      discountText: "ฟรีค่าจัดส่งและติดตั้ง",
      minSpend: "ทุกยอดสั่งซื้อ 10,000 บาทขึ้นไป",
      expiry: "ไม่มีวันหมดอายุ",
      highlight: false,
      badge: "บริการยอดเยี่ยม"
    },
    {
      id: "promo-5",
      title: "♻️ โครงการเก่าแลกใหม่ (Trade-in)",
      subtitle: "นำทีวีเครื่องเก่าทุกรุ่น ทุกสภาพ มาแลกรับส่วนลดเพิ่มทันที 3,000 - 8,000 บาท",
      code: "TRADEIN",
      discountText: "ลดเพิ่มสูงสุด 8,000.-",
      minSpend: "เมื่อซื้อทีวี 55 นิ้วขึ้นไป",
      expiry: "สิทธิ์มีจำนวนจำกัด",
      highlight: false,
      badge: "สิทธิพิเศษเก่าแลกใหม่"
    }
  ],

  articles: [
    {
      id: "art-1",
      title: "คู่มือเลือกซื้อทีวีปี 2025/2026: ระหว่าง OLED, QLED และ Mini-LED ต่างกันอย่างไร? เลือกแบบไหนเหมาะกับคุณที่สุด",
      category: "คู่มือเลือกซื้อ",
      author: "ช่างวิทย์ ผู้เชี่ยวชาญด้านภาพและเสียง",
      date: "28 กุมภาพันธ์ 2026",
      readTime: "6 นาที",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80",
      excerpt: "เจาะลึกเทคโนโลยีจอภาพทีวีในปัจจุบัน ไขข้อข้องใจความแตกต่างระหว่าง OLED ที่ให้สีดำสนิท กับ Mini-LED ที่สว่างจัดจ้าน เพื่อการตัดสินใจซื้อที่คุ้มค่าและตอบโจทย์ห้องของคุณมากที่สุด",
      content: `
        <h3>1. ทำความรู้จักเทคโนโลยี OLED (Organic Light Emitting Diode)</h3>
        <p>จุดเด่นที่สุดของ OLED คือแต่ละพิกเซลสามารถ <strong>"เปล่งแสงได้ด้วยตัวเอง"</strong> โดยไม่ต้องพึ่งหลอดไฟด้านหลัง (Backlight) เมื่อต้องการแสดงสีดำ พิกเซลนั้นจะดับสนิท 100% ทำให้ได้ค่า Contrast อัตราส่วนความต่างขาวดำที่ไม่มีที่สิ้นสุด (Infinite Contrast) ภาพมีมิติ มีความลึก และมุมมองการรับชมกว้างมาก มองจากด้านข้างสีไม่เพี้ยน</p>
        <p><strong>เหมาะสำหรับ:</strong> ผู้ที่ชอบดูหนังในห้องมืดหรือห้องนอน คอภาพยนตร์ที่ต้องการภาพตรงตามต้นฉบับของผู้กำกับ และเกมเมอร์ที่ต้องการ Response Time ต่ำระดับ 0.1ms</p>

        <h3>2. ทำความรู้จักเทคโนโลยี QLED และ Mini-LED</h3>
        <p>QLED ใช้สาร Quantum Dot ยกระดับความบริสุทธิ์ของสีสัน และเมื่อผสานกับ <strong>Mini-LED</strong> ซึ่งใช้หลอดไฟ LED ขนาดจิ๋วนับหมื่นดวงพร้อมการคุมแสงอิสระนับพันโซน (Local Dimming) ทำให้ได้ความสว่างสูงมาก (2,000 - 4,000 nits) สีสันเจิดจ้าสดใสสู้แสงแดดได้สบาย</p>
        <p><strong>เหมาะสำหรับ:</strong> ห้องนั่งเล่นหรือห้องที่มีหน้าต่างบานใหญ่ แสงเข้าเยอะ ผู้ที่ชอบดูถ่ายทอดสดกีฬา หรือเปิดทีวีตลอดวันโดยไม่ต้องกังวลเรื่องการเบิร์นอิน (Burn-in)</p>

        <h3>3. ตารางสรุปการเปรียบเทียบ</h3>
        <ul>
          <li><strong>ระดับสีดำและความลึกของภาพ:</strong> OLED ชนะเลิศ (ดำสนิทสมบูรณ์แบบ)</li>
          <li><strong>ความสว่างสูงสุด (Peak Brightness):</strong> Mini-LED ชนะเลิศ (สว่างสู้แสงห้องได้ดีเยี่ยม)</li>
          <li><strong>มุมมองการรับชม:</strong> OLED กว้างกว่า สีไม่ซีดจาง</li>
          <li><strong>ความทนทานต่อการเปิดภาพนิ่งนานๆ:</strong> Mini-LED ไร้ความเสี่ยงต่อ Burn-in</li>
        </ul>
      `
    },
    {
      id: "art-2",
      title: "วิธีคำนวณระยะห่างในการดูทีวี และการเลือกขนาดหน้าจอ (43\" ถึง 85\") ให้สบายตาและได้อรรถรสสูงสุด",
      category: "เทคนิค & ทริค",
      author: "ทีมงาน Vision Pro",
      date: "15 กุมภาพันธ์ 2026",
      readTime: "4 นาที",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      excerpt: "ห้องขนาดนี้ควรซื้อทีวีกี่นิ้วดี? แนะนำสูตรคำนวณระยะนั่งดูทีวี 4K และ 8K ตามมาตรฐาน THX และ SMPTE เพื่อไม่ให้ปวดตาและได้ประสบการณ์เหมือนยกโรงหนังมาไว้ที่บ้าน",
      content: `
        <h3>สูตรคำนวณระยะดูทีวีความละเอียด 4K UHD</h3>
        <p>สำหรับทีวี 4K เนื่องจากมีความละเอียดสูงมาก เม็ดพิกเซลเนียนละเอียด คุณจึงสามารถนั่งดูได้ใกล้กว่าทีวี Full HD ในอดีตโดยไม่เห็นเม็ดพิกเซลแตก</p>
        <p><strong>ระยะนั่งดูที่แนะนำ (มาตรฐานภาพยนตร์ 30°-40° Field of View):</strong></p>
        <ul>
          <li><strong>ทีวีขนาด 43 - 50 นิ้ว:</strong> ระยะห่างที่เหมาะสม 1.2 - 1.8 เมตร (เหมาะกับคอนโด / ห้องนอน)</li>
          <li><strong>ทีวีขนาด 55 นิ้ว:</strong> ระยะห่างที่เหมาะสม 1.7 - 2.2 เมตร (ขนาดยอดนิยมสำหรับห้องทั่วไป)</li>
          <li><strong>ทีวีขนาด 65 นิ้ว:</strong> ระยะห่างที่เหมาะสม 2.0 - 2.6 เมตร (ให้มิติภาพระดับโรงหนังสำหรับห้องนั่งเล่น)</li>
          <li><strong>ทีวีขนาด 75 - 85 นิ้วขึ้นไป:</strong> ระยะห่างที่เหมาะสม 2.5 - 3.5 เมตร (ประสบการณ์โรงภาพยนตร์ส่วนตัวในบ้าน)</li>
        </ul>
        <p><strong>ข้อแนะนำเพิ่มเติม:</strong> ความสูงในการติดตั้ง ระดับสายตาขณะนั่งโซฟาควรอยู่ตรงกับกึ่งกลางหน้าจอทีวีพอดี เพื่อป้องกันอาการเมื่อยคอ</p>
      `
    },
    {
      id: "art-3",
      title: "เจาะลึก 5 สเปกสำคัญสำหรับคอเกมเมอร์ ทีวีสำหรับต่อ PS5, Xbox Series X และ PC 144Hz ต้องดูอะไรบ้าง?",
      category: "เกมมิ่ง",
      author: "เกมเมอร์บอล Pro Player",
      date: "10 กุมภาพันธ์ 2026",
      readTime: "5 นาที",
      image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=900&q=80",
      excerpt: "เลือกทีวีเล่นเกมอย่างไรให้ลื่นหัวแตก ไม่แล็ก ไม่ดีเลย์ เช็คสเปก HDMI 2.1, VRR, ALLM, 144Hz และ Response Time ให้ชัวร์ก่อนควักเงินซื้อ",
      content: `
        <h3>5 สเปกทีวีเกมมิ่งที่ต้องมี</h3>
        <ol>
          <li><strong>พอร์ต HDMI 2.1 (Full Bandwidth 48Gbps):</strong> จำเป็นอย่างยิ่งสำหรับการส่งสัญญาณภาพ 4K ที่ 120Hz/144Hz พร้อม HDR</li>
          <li><strong>Variable Refresh Rate (VRR) & FreeSync/G-Sync:</strong> ป้องกันปัญหาภาพฉีกขาด (Screen Tearing) และภาพกระตุกเวลาเฟรมเรตตก</li>
          <li><strong>Auto Low Latency Mode (ALLM):</strong> ทีวีจะตัดเข้าสู่ Game Mode อัตโนมัติเมื่อตรวจพบเครื่องคอนโซล ทำให้ค่า Input Lag ต่ำกว่า 10ms ทันที</li>
          <li><strong>Response Time ต่ำ:</strong> พาเนล OLED ได้เปรียบสูงสุดเรื่องความเร็วการเปลี่ยนสีของพิกเซล (0.1ms) ทำให้ภาพเคลื่อนไหวเร็วๆ ไม่มี Ghosting</li>
          <li><strong>Dolby Vision for Gaming:</strong> แสดงรายละเอียดแสงเงาในเกมแบบ Real-time ให้คุณมองเห็นศัตรูในเงามืดได้อย่างชัดเจน</li>
        </ol>
      `
    },
    {
      id: "art-4",
      title: "วิธีดูแลรักษาและทำความสะอาดจอทีวี OLED / QLED อย่างถูกต้อง เพื่อยืดอายุการใช้งานให้นานนับสิบปี",
      category: "การดูแลรักษา",
      author: "ทีมช่างเทคนิค Vision Pro",
      date: "02 กุมภาพันธ์ 2026",
      readTime: "3 นาที",
      image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=900&q=80",
      excerpt: "ห้ามใช้น้ำยาเช็ดกระจกเด็ดขาด! แนะนำวิธีเช็ดทำความสะอาดฝุ่นและรอยนิ้วมือบนหน้าจอเคลือบสารป้องกันแสงสะท้อนอย่างปลอดภัย ไร้รอยขีดข่วน",
      content: `
        <h3>สิ่งที่ห้ามทำเด็ดขาด ❌</h3>
        <ul>
          <li><strong>ห้ามใช้น้ำยาเช็ดกระจก แอลกอฮอล์ หรือน้ำยาล้างจาน:</strong> เพราะสารเคมีจะไปกัดกร่อนสารเคลือบกันสะท้อน (Anti-Reflective Coating) ทำให้จอเป็นรอยด่างถาวร</li>
          <li><strong>ห้ามใช้กระดาษทิชชู่หรือผ้าขนหนูหยาบ:</strong> เส้นใยไม้ในทิชชู่สามารถทำให้เกิดรอยขนแมวละเอียดบนหน้าจอได้</li>
          <li><strong>ห้ามฉีดพ่นของเหลวลงบนหน้าจอโดยตรง:</strong> ของเหลวอาจไหลซึมเข้าสู่ขอบล่างของแผงวงจรพาเนลและทำให้ช็อตได้</li>
        </ul>
        <h3>วิธีทำความสะอาดที่ถูกต้อง ✔️</h3>
        <ol>
          <li>ปิดทีวีและถอดปลั๊กออก รอให้หน้าจอเย็นสนิท</li>
          <li>ใช้ผ้าไมโครไฟเบอร์เนื้อนุ่มและแห้ง เช็ดปัดฝุ่นเบาๆ เป็นวงกลม</li>
          <li>หากมีคราบมันหรือรอยนิ้วมือ ให้ชุบน้ำกลั่นหรือน้ำยาทำความสะอาดจอโดยเฉพาะลงบนผ้าเพียงเล็กน้อยให้หมาด แล้วเช็ดเบาๆ</li>
        </ol>
      `
    }
  ],

  branches: [
    {
      id: "bkk-siam",
      name: "สาขา สยามพารากอน (Flagship Store)",
      address: "ชั้น 4 โซน Power Mall สยามพารากอน ถ.พระราม 1 ปทุมวัน กรุงเทพฯ 10330",
      phone: "02-123-4567, 089-999-8881",
      hours: "เปิดทุกวัน 10:00 - 22:00 น.",
      highlight: "มีห้องทดสอบระบบภาพและเสียง Dolby Cinema Experience ส่วนตัว",
      mapQuery: "Siam Paragon"
    },
    {
      id: "bkk-mega",
      name: "สาขา เมกาบางนา (Mega Bangna)",
      address: "ชั้น 2 ฝั่ง HomePro เมกาบางนา ถ.บางนา-ตราด สมุทรปราการ 10540",
      phone: "02-987-6543, 089-999-8882",
      hours: "เปิดทุกวัน 10:00 - 21:30 น.",
      highlight: "โซนโชว์เคสทีวีขนาดยักษ์ 85\" - 100\" และชุดโฮมเธียเตอร์",
      mapQuery: "Mega Bangna"
    },
    {
      id: "cm-fest",
      name: "สาขา เซ็นทรัล เชียงใหม่ (ภาคเหนือ)",
      address: "ชั้น 3 เซ็นทรัล เชียงใหม่ (เฟสติวัล) ถ.ซุปเปอร์ไฮเวย์ อ.เมือง เชียงใหม่ 50000",
      phone: "053-111-222, 089-999-8883",
      hours: "เปิดทุกวัน 10:30 - 21:00 น.",
      highlight: "ศูนย์บริการและจัดส่งด่วนพิเศษครอบคลุม 8 จังหวัดภาคเหนือ",
      mapQuery: "Central Chiangmai"
    },
    {
      id: "pkt-fest",
      name: "สาขา เซ็นทรัล ภูเก็ต ฟลอเรสต้า (ภาคใต้)",
      address: "ชั้น 2 ฝั่งฟลอเรสต้า ถ.วิชิตสงคราม อ.เมือง ภูเก็ต 83000",
      phone: "076-333-444, 089-999-8884",
      hours: "เปิดทุกวัน 10:30 - 21:30 น.",
      highlight: "ทีมช่างติดตั้งมาตรฐานวิลล่าและโรงแรมระดับ 5 ดาว",
      mapQuery: "Central Phuket Floresta"
    }
  ],

  botResponses: [
    {
      keywords: ["โปรโมชั่น", "ส่วนลด", "ลดราคา", "คูปอง", "โค้ด", "promotion", "coupon", "code"],
      reply: "🎉 ตอนนี้เรามีโปรโมชั่นพิเศษมากมายครับ!\n- โค้ด **TVPRO2026** ลดเพิ่ม 2,500 บาท เมื่อซื้อครบ 25,000.-\n- ซื้อ OLED 65\" รับฟรี Soundbar มูลค่า 9,990.-\n- ผ่อน 0% นาน 10 เดือน พร้อม Cash Back สูงสุด 12,000.- กับบัตรเครดิตที่ร่วมรายการครับ!"
    },
    {
      keywords: ["ผ่อน", "บัตร", "เครดิต", "0%", "installment", "credit card"],
      reply: "💳 เรามีโปรผ่อน 0% นานสูงสุด 10 เดือน กับธนาคาร กสิกรไทย (KBank), SCB, KTC, กรุงศรี และ กรุงเทพ ครับ พร้อมรับเครดิตเงินคืน สามารถเลือกชำระในหน้า Checkout ได้เลยครับ"
    },
    {
      keywords: ["ส่ง", "ติดตั้ง", "ขนส่ง", "ค่าส่ง", "delivery", "shipping", "install"],
      reply: "🚚 บริการจัดส่งและติดตั้งฟรีทั่วประเทศ สำหรับยอดสั่งซื้อ 10,000 บาทขึ้นไปครับ! มีทีมช่างมืออาชีพติดตั้งแขวนผนัง/ตั้งโต๊ะ พร้อมทดสอบเดดพิกเซลและสอนการใช้งานหน้างานฟรีครับ"
    },
    {
      keywords: ["ประกัน", "เคลม", "warranty", "claim"],
      reply: "🛡️ ทีวีทุกเครื่องเป็นของแท้ 100% ศูนย์ไทย รับประกันศูนย์ 3 ปีเต็ม (สำหรับ OLED รับประกันจอภาพ 5 ปี) และมีบริการ On-site Service ซ่อมฟรีถึงบ้านตลอดอายุการรับประกันครับ"
    },
    {
      keywords: ["ps5", "เล่นเกม", "เกม", "game", "gaming", "120hz", "144hz"],
      reply: "🎮 สำหรับคอเกม เราแนะนำ **LG OLED C4** หรือ **TCL C855** ครับ รองรับ 4K 144Hz, HDMI 2.1, VRR และ G-Sync/FreeSync ภาพลื่นไหล ไม่กระตุก ไม่มีหน่วงแน่นอนครับ!"
    },
    {
      keywords: ["oled", "qled", "ต่างกัน", "เลือก"],
      reply: "💡 แนะนำง่ายๆ ครับ:\n- **OLED**: ให้สีดำสนิท 100% คอนทราสต์ลึก เหมาะกับดูหนังห้องมืด/ห้องนอน\n- **QLED / Mini-LED**: สว่างเจิดจ้า สู้แสงแดดได้ดี เหมาะกับห้องนั่งเล่นสว่างๆ และไม่มีกังวลเรื่องเบิร์นอินครับ"
    },
    {
      keywords: ["ติดต่อ", "โทร", "สาขา", "หน้าร้าน", "contact", "phone"],
      reply: "📞 สามารถโทรสอบถามสายด่วนได้ที่ 02-123-4567 หรือแวะชมสินค้าจริงได้ที่ Flagship Store สยามพารากอน ชั้น 4 และสาขาใกล้บ้านคุณได้เลยครับ!"
    }
  ]
};
