export const CATEGORIES = [
  { id: 1, name: "DIAGNOSTIC/SURGICAL EQUIPMENTS", icon: "Activity", image: "/assets/Home/cat1.png" },
  { id: 2, name: "DISPOSABLES", icon: "Stethoscope", image: "/assets/Home/cat2.png" },
  { id: 3, name: "SURGICAL INSTRUMENTS", icon: "Settings", image: "/assets/Home/cat3.png" },
  { id: 4, name: "OPTICAL PRODUCTS", icon: "Eye", image: "/assets/Home/cat4.png" },
  { id: 5, name: "EYE HOSPITAL/CLINIC ESTABLISHMENT", icon: "Briefcase", image: "/assets/Home/cat5.png" },
  { id: 6, name: "GENERAL PRODUCTS", icon: "CheckCircle", image: "/assets/Home/cat6.png" },
  { id: 7, name: "STERILIZATION/DISINFECTION", icon: "Shield", image: "/assets/Home/cat6.png" },
  { id: 8, name: "PRE-OWNED PRODUCTS", icon: "Package", image: "/assets/Home/Collection/collection3.png" }
];

export const HOME_CATEGORIES = [
  { id: 1, name: "Diagnostic / Surgical Equipments / Instruments", image: "/assets/Home/Collection/collection1.png" },
  { id: 2, name: "Consumables/ Disposables", image: "/assets/Home/Collection/collection2.png" },
  { id: 3, name: "Pre-Owned Equipments", image: "/assets/Home/Collection/collection3.png" },
  { id: 4, name: "Optical Products", image: "/assets/Home/Collection/collection4.png" },
  { id: 5, name: "Eye Hospital/ Clinic Establishment", image: "/assets/Home/Collection/collection5.png" },
  { id: 6, name: "General Products", image: "/assets/Home/Collection/collection6.png" }
];

export const PRODUCTS = [
  // DIAGNOSTIC/SURGICAL EQUIPMENTS
  {
    id: 401,
    name: "3Nethra aberro Hand-held Autorefractometer",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/3nethra-aberro-img1.webp",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/3nethra-aberro-img1.webp",
      "/assets/Products/3nethra-aberro-img2.webp",
      "/assets/Products/3nethra-aberro-img3.webp",
      "/assets/Products/3nethra-aberro-img4.webp",
      "/assets/Products/3nethra-aberro-img5.webp",
    ],
    fullDescription: "The 3nethra aberro is a handheld autorefractometer equipped with the Shack-Hartmann Wavefront sensor aberrometry technology to detect visual acuity and refractive errors. It is used by an eye care professional to measure a person’s wide range of refractive errors and help prescribe glasses or contact lens. Due to its portable handheld feature, it is an ideal tool for mobile eye care such as community and home eye screening. The compact refractometer can also be mounted on a chin-rest stand to achieve more stability.",
    features: [
      "Portable and lightweight",
      "Intuitive touch screen",
      "Easy printing",
      "Extended battery life",
      "Compatible with telemedicine platform for mobile eye test"
    ],
    specs: [
      { label: "Spherical measurement range", value: "-14D to +14D, increments (0.25D)" },
      { label: "Cylindrical measurement range", value: "-7D to 0D, increments (0.25D)" },
      { label: "Axis measurement range", value: "0 to 180 degrees, with 1-degree increment" },
      { label: "Minimum pupil diameter", value: "2.5 mm" },
      { label: "Vertex distance", value: "19.5 mm" },
      { label: "Patient age range", value: "Above 5 years" },
      { label: "Internal fixation", value: "Low spatial frequency sinusoidal grating with Gaussian envelope" },
      { label: "Battery life", value: "8 hours with normal usage when fully charged" },
      { label: "Display / connectivity", value: "3.5” color touch screen / USB and Bluetooth" },
      { label: "Technology", value: "Wave-front sensing" },
      { label: "Power source", value: "AC 100 to 240 V, 50 / 60 Hz" },
      { label: "Measurement time", value: "<5 seconds per eye" },
      { label: "Weight / dimension", value: "650 g / 8.9” X 7.2” X 2.9”" },
      { label: "Total weight", value: "11.1 kgs (3.4 kgs tricam + 7.7 kgs stand)" },
      { label: "Internal storage memory", value: "300 measurements" },
      { label: "Working environment light", value: "Ambient light" },
      { label: "Calibration", value: "Not required" },
      { label: "Battery pack", value: "Lithium-ion battery 3.6V, 6800 mAh" },
      { label: "Additional feature", value: "Telemedicine compatible" },
      { label: "Optional accessories", value: "Bluetooth printer, portable stand" },
      { label: "Standard accessories", value: "Suitcase, device charger" }
    ]
  },
  {
    id: 402,
    name: "3Nethra Classic Digital Non-mydriatic Fundus Camera",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 5,
    image: "/assets/Products/3nethra-classic-img1.webp",
    tag: "Rated 5.0",
    section: "shop",
    images: [
      "/assets/Products/3nethra-classic-img1.webp",
      "/assets/Products/3nethra-classic-img2.webp",
      "/assets/Products/3nethra-classic-img3.webp",
      "/assets/Products/3nethra-classic-img4.webp",
      "/assets/Products/3nethra-classic-img5.webp",
      "/assets/Products/3nethra-classic-img6.webp",
      "/assets/Products/3nethra-classic-img7.webp",
    ],
    fullDescription: "The 3nethra classic is a digital non-mydriatic fundus camera, equipped with an efficient workflow to capture undistorted and uniformly illuminated photographs of the retina and surface area of the cornea. The compact design of the camera enhances mobility and easy deployment. The camera is used by clinicians in ophthalmology, optometry, or primary care practice to assist them in the effective evaluation, diagnosis, and documentation of visual health. Some of the common eye diseases that lead to visual impairment are glaucoma, diabetic retinopathy, Age-Related Macular Degeneration (ARMD), and cataract.",
    specs: [
      { label: "FOV", value: "45 degrees" },
      { label: "Optical resolution", value: "8-14 microns" },
      { label: "Image sensor", value: "3 megapixels" },
      { label: "Interface", value: "USB 2.0" },
      { label: "Dimensions", value: "520 mm (H) X 420 mm (L) X 400 mm (W)" },
      { label: "Total weight", value: "11.1 kgs (3.4 kgs tricam + 7.7 kgs stand)" },
      { label: "Power consumption", value: "5-10 W (DC)" },
      { label: "Power supply", value: "AC 100-240 V, 50/60 Hz (for DC power adapter 5 V/4 A)" },
      { label: "Minimum system requirements", value: "The software will work on MS Windows 10 having a 64-bit OS and an i3 10th Generation Processor with a turbo booster of up to 3.3 GHz. A minimum of 4GB RAM with 500 GB or more of hard disk space is required. A display dimension of 1366 X 768 is needed. Forus Health recommends using a CE-marked laptop or desktop." }
    ],
    reviews: [
      {
        id: 1,
        author: "Dr Devdutta Nayak",
        initials: "DN",
        date: "April 7, 2022",
        rating: 5,
        content: "3nethra classic is a simple yet robust nonmydriatic fundus camera. Good quality of images. It provides value addition to one’s practice.\nBuying it through ophthall platform was hassle-free with added discount from its market price. Installation was in time."
      }
    ]
  },
  {
    id: 403,
    name: "3Nethra Classic HD Digital Fundus camera",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 5,
    image: "/assets/Products/3nethra-classic-hd-img1.webp",
    tag: "Rated 5.0",
    section: "shop",
    images: [
      "/assets/Products/3nethra-classic-hd-img1.webp",
      "/assets/Products/3nethra-classic-hd-img2.webp",
      "/assets/Products/3nethra-classic-hd-img3.webp",
      "/assets/Products/3nethra-classic-hd-img4.webp",
      "/assets/Products/3nethra-classic-hd-img5.webp",
      "/assets/Products/3nethra-classic-hd-img6.webp",
      "/assets/Products/3nethra-classic-hd-img7.webp",
    ],
    fullDescription: "The 3nethra classic HD is a digital fundus camera that combines the best of workflow and design. It captures high-resolution, undistorted, and uniformly illuminated images of the retina and surfaces such as the cornea. With state-of-the-art imaging, software features, and telemedicine capabilities, the fundus camera is fully equipped to help clinicians improve diagnostic accuracy and minimize screening time. The camera offers a variety of imaging modes such as high dynamic range imaging, red-free imaging, and mydriatic modes. The camera assists clinicians in the evaluation, diagnosis, and documentation of ocular diseases.",
    features: [
      "Non-mydriatic and mydriatic retinal imaging",
      "Multi-functional (retina and cornea)",
      "Retinal image montage to achieve a 75-degree Field of View of the retina",
      "Compact and easy to use",
      "Superior image review features"
    ],
    specs: [
      { label: "FOV", value: "45 degrees" },
      { label: "Optical resolution", value: "8-14 microns" },
      { label: "Image sensor", value: "6.4 megapixels" },
      { label: "Interface", value: "USB 3.0" },
      { label: "Dimensions", value: "520 (H) X 420 (L) X 340 (W)" },
      { label: "Total weight", value: "11.1 kgs (3.4 kgs tricam + 7.7 kgs stand)" },
      { label: "Power consumption", value: "5-10 W (DC)" },
      { label: "Power supply", value: "AC 100-240 V, 50/60 Hz (for DC power adapter 5 V/5 A)" },
      { label: "Minimum system requirements", value: "The 3nethra classic HD software is compatible with a Microsoft Windows 10 laptop or desktop with i3 Processor of 8th Generation and above. A minimum of 8 GB RAM with 500 GB or more of hard disk space is required. A CPU of minimum 2.4 GHz and a display dimension of 1920X1080 is needed. Forus Health recommends using a CE-certified laptop or desktop." }
    ],
    reviews: [
      {
        id: 1,
        author: "Dr Senthil",
        initials: "DS",
        date: "March 8, 2022",
        rating: 5,
        content: "Wonderful value for money product- very useful in patient education and also for camps"
      }
    ]
  },
  {
    id: 404,
    name: "Anterion- Multimodal Anterior Segment Imaging System",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p6.png",
    tag: null,
    section: "shop",
    fullDescription: "Anterion\nHeidelberg\n\nANTERION® utilizes the power of high-resolution swept-source OCT images to provide the most important anterior segment examinations and measurements in one modular, upgradeable platform. The single workflow-efficient solution brings together corneal topography and tomography, anterior segment metrics, axial length measurement and IOL calculation to transform the day-to-day routine of busy practices and clinics.",
    features: [
      "All measurements based on high-resolution swept-source OCT images",
      "Modular and upgradeable platform to suit different workflow needs",
      "Supports the complete ophthalmic image management solution, HEYEX 2",
      "Generate high-resolution images and detailed maps including: camera image, OCT image, anterior and posterior axial curvature maps, tangential maps, elevation maps, total corneal power map, corneal wavefront maps, and pachymetry map.",
      "The data obtained in the cornea analysis combined with the anterior chamber depth and width, lens thickness and axial length determines the parameters for IOL calculations. View the camera image and OCT image to confirm your measurements.",
      "Measure anterior chamber depth, volume and angle, spur-to-spur, white-to-white and angle opening distances, trabecular iris space area (TISA) and lens thickness parameters all in one App.",
      "Visualize anterior segment pathologies and signs of surgical interventions, e.g. keratoplasty, LASIK, implanted IOLs and phakic lenses using the versatile anterior segment imaging application."
    ]
  },
  {
    id: 501,
    name: "Ansell Encore Latex Micro Powder Free Surgical Gloves",
    category: "DISPOSABLES",
    price: "Enquire",
    rating: 5,
    image: "/assets/Products/ansell-encore-img1.webp",
    tag: "Powder Free",
    section: "shop",
    images: [
      "/assets/Products/ansell-encore-img1.webp",
      "/assets/Products/ansell-encore-img2.webp",
    ],
    fullDescription: "To Order Product Click the Link Below and Use Code OBGANS While Checkout.\n\nhttps://healthcareshoppie.com/?coupon=obgans",
    specs: [
      { label: "Available Sizes", value: "6.0, 6.5, 7.0, 7.5, 8.0, 8.5" }
    ],
    features: [
      "20% thinner on average than Ansell’s standard latex powder-free surgical gloves with soft latex formulation for unsurpassed dexterity and tactile sensitivity",
      "Its brown color helps reduce glare of surgical lights and makes it suitable to be used as an underglove",
      "The DERMASHIELD™ Technology internal coating facilitates dry or damp donning and intra-operative changes"
    ]
  },
  {
    id: 502,
    name: "Ansell Gammex Latex Powder Free Surgical Gloves",
    category: "DISPOSABLES",
    price: "Enquire",
    rating: 5,
    image: "/assets/Products/ansell-gammex-img1.webp",
    tag: "Powder Free",
    section: "shop",
    images: [
      "/assets/Products/ansell-gammex-img1.webp",
      "/assets/Products/ansell-gammex-img2.webp",
    ],
    fullDescription: "To Order Product Click the Link Below and Use Code OBGANS While Checkout.\n\nhttps://healthcareshoppie.com/?coupon=obgans",
    specs: [
      { label: "Available Sizes", value: "6.0, 6.5, 7.0, 7.5, 8.0, 8.5" }
    ],
    features: [
      "Proprietary glove formulation delivers a soft and sensitive yet robust surgical glove",
      "Made with Ansell’s unique anatomic formers to enhance comfort and fit to help reduce hand fatigue",
      "Shaped finger pads improve fingertip sensitivity",
      "Additional cleaning processes ensure low residues of both latex proteins and chemical accelerators to minimize the risk of developing latex Type I & chemical Type IV allergies and skin sensitivities",
      "Tested for use with chemotherapy drugs and a wide range of chemicals used in hospitals"
    ]
  },
  {
    id: 405,
    name: "Applanation Tonometer T170 R Type",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/applanation-tonometer-img1.webp",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/applanation-tonometer-img1.webp",
      "/assets/Products/applanation-tonometer-img2.webp",
      "/assets/Products/applanation-tonometer-img3.webp",
      "/assets/Products/applanation-tonometer-img4.webp",
    ],
    fullDescription: "Goldmann applanation tonometer is a kind of instrument based on Imbert-Fick law. It is considered to be the gold standard instrument for measuring intraocular pressure. Applanation tonometer T170 is suitable for most slit lamps and pivots in front of the microscope for examination. It can effectively detect whether patients have glaucoma and play an important role in improving the diagnosis and treatment of ophthalmic diseases.",
    features: [
      "Designed based on the Goldman principle, which is a world widely gold standard.",
      "Provides fast and accurate IOP measurement data to clinical diagnosis and treatment.",
      "Adjustable mechanical design ensures reliable measurement results and durable performance.",
      "Repeated measuring procedures do not reduce the natural ocular pressure of the patient.",
      "Combined with most slit lamps: Measurement can be carried out on the patient sitting at the slit lamp in conjunction with other routine microscopic examinations."
    ],
    specs: [
      { label: "Measurement Principle", value: "Goldmann / Imbert-Fick Law" },
      { label: "Design", value: "T170 R Type (Slit Lamp Integrated)" },
      { label: "Clinical Application", value: "Intraocular Pressure (IOP) Measurement" },
      { label: "Mounting Type", value: "Pivots in front of Slit Lamp microscope" },
      { label: "Compatibility", value: "Compatible with most diagnostic Slit Lamps" },
      { label: "Diagnosis Capability", value: "Effective for Glaucoma screening and monitoring" },
      { label: "Operation", value: "Manual adjustable mechanical design" }
    ]
  },
  {
    id: 406,
    name: "Autophoropter YPA-2100 (Digital Refractor)",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/autophoropter-img1.webp",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/autophoropter-img1.webp",
      "/assets/Products/autophoropter-img2.webp",
      "/assets/Products/autophoropter-img3.webp",
      "/assets/Products/autophoropter-img4.webp",
    ],
    fullDescription: "YPA-2100 DIGITAL REFRACTOR\n\nUSA FDA APPROVED\nTablet Touch Control\nConnected with control terminal through built-in WIFI or BT, supporting multi-touch/gesture control.\n\nReal-time Guiding System\nBuilt-in graphical operation guiding system, zero learning cost, easy operation.\n\nUltrathin Design\nUltrathin body with maximum thickness of 92 mm.\n\nAdvanced design of drive system with all-motor drive and low noise. Strong responsive operation framework with more efficient human-computer interaction system than traditional control panel.\n\nSupports Retina screen with outstanding image quality.\nSupports multi-touch and gesture control.\nSupports wireless network, connection with YEASN LM/AR, quick optometry data exchange.",
    features: [
      "USA FDA APPROVED",
      "Tablet Touch Control (WiFi/BT)",
      "Real-time Guiding System (Zero learning cost)",
      "Ultrathin Design (92 mm)",
      "All-motor drive system with low noise",
      "Retina screen support",
      "Quick optometry data exchange with YEASN LM/AR"
    ],
    specs: [
      { label: "Sphere lens", value: "-29.00D to +26.75D, Step 0.12D/0.25D/1D" },
      { label: "Cylinder lens", value: "0.00D to ±8.75D, Step 0.25D/1D" },
      { label: "Axis", value: "0° to 180°, Step 1°/5°" },
      { label: "Pupil distance (Far)", value: "48mm to 82mm" },
      { label: "Pupil distance (Near)", value: "49mm to 75mm (Working Distance 35cm)" },
      { label: "Rotary prism", value: "0 to 20Δ, Step 0.1Δ, 0.5Δ" },
      { label: "Cross cylinder", value: "±0.25D/±0.50D (Auto), ±0.50D (Fixed)" },
      { label: "Dimensions (Refractor)", value: "400(W) × 92(D) × 275(H)mm" },
      { label: "Weight (Refractor)", value: "3.9 kg" },
      { label: "Certification", value: "USA FDA Approved" }
    ]
  },
  {
    id: 998,
    name: "AVA – Elisar",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/ava-elisar-img1.webp",
    youtubeUrl: "https://www.youtube.com/embed/HHXBLS4wMyc",
    tag: null,
    section: "shop",
    fullDescription: "Portable Perimetry\nNow you can perform perimetry without a traditional exam lane or high-cost capital equipment. The AVA Advanced Vision Analyzer is a small, battery-operated autoperimeter that can perform visual field threshold measurements. And not only is it completely portable, but it does not require a separate dark room.\n\nPatient Friendly Device\nThe light-weight head-mounted device allows a high degree of flexibility in -inpatient position. They can even take the test reclined. This is particularly advantageous for aging and disabled patients. The AVA Advanced Vision Analyzer also generates a patient-friendly version of the report that helps you explain the diagnosis better.\n\nAdminister the test in just a few clicks. The automated, intuitive system is simple enough that even non-eye care professionals can learn how to use the AVA Advanced Vision Analyzer quickly.",
    features: [
      "Portable Perimetry (Small, battery-operated)",
      "Does not require a separate dark room",
      "Patient Friendly Device (Head-mounted, flexible positioning)",
      "Suitable for aging and disabled patients (tests can be taken reclined)",
      "Generates patient-friendly reports",
      "Automated, intuitive system with low learning curve"
    ],
    specs: [
      { label: "Device Type", value: "Advanced Vision Analyzer (Portable Autoperimeter)" },
      { label: "Design", value: "Head-mounted, Lightweight" },
      { label: "Power Source", value: "Built-in Battery Operated" },
      { label: "Testing Environment", value: "Ambient light (No separate dark room needed)" },
      { label: "Test Capability", value: "Visual Field Threshold Measurements" },
      { label: "Positioning", value: "Supports Seated, Reclined, or In-patient testing" },
      { label: "User Learning Curve", value: "Intuitive automated system" }
    ]
  },
  {
    id: 407,
    name: "Bosch- Portable Handheld Fundus Camera",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/bosch-portable-img1.webp",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/bosch-portable-img1.webp",
      "/assets/Products/bosch-portable-img2.webp",
      "/assets/Products/bosch-portable-img3.webp",
    ],
    warranty: "1 Year",
    fullDescription: "Non-Mydriatic Imaging\nImaging without dilation of the pupil, leading to lesser screening time.\n\nPortability\nHand held and light weight, making applications across various contexts and locations possible.\n\nDescription:\n- Non mydriatic, Handheld, portable fundus camera.\n- 5MP CMOS sensor with posterior module to capture image & video.\n- 40 degree FOV\n- 3 capture settings – Manual (-20D to +20D), Auto, Autofocus assist\n- LED Flash light\n- Lightweight – 400gms\n- 8GB Memory card – Stores upto 2000 patient data\n- Rechargeable battery – 45 mins charging time.\n- Red, Low red, Red free, Infrared images can be captured in single click.\n- Lightweight 400gms.\n- Dual purpose cradle to charge battery and as camera stand.\n- USB cable to transfer images to computer.\n- Suitable for camps, screening in diabetic clinics, home care screening\n- 1 year warranty.",
    features: [
      "Non-Mydriatic Imaging (No pupil dilation needed)",
      "True Portability (Hand held, 400gms)",
      "5MP CMOS sensor for image & video",
      "40 degree FOV",
      "3 capture settings: Manual, Auto, Autofocus assist",
      "Red, Low red, Red free, Infrared images in single click",
      "8GB Memory card (2000 patient data)",
      "Rechargeable battery (45 mins charge time)",
      "Dual purpose cradle (charger and stand)",
      "1 year warranty"
    ],
    specs: [
      { label: "Sensor Type", value: "5MP CMOS Sensor" },
      { label: "Field of View (FOV)", value: "40 Degrees" },
      { label: "Focus Range", value: "Manual (-20D to +20D), Auto, Autofocus assist" },
      { label: "Storage", value: "8GB Memory Card (Up to 2000 patient data)" },
      { label: "Weight", value: "400 gms" },
      { label: "Illumination", value: "LED Flash Light" },
      { label: "Battery", value: "Rechargeable (45 min charge time)" },
      { label: "Charging", value: "Dual purpose cradle (Charger and Stand)" },
      { label: "Connectivity", value: "USB cable for computer transfer" },
      { label: "Warranty", value: "1 Year" }
    ]
  },
  {
    id: 408,
    name: "Catarhex 3 Easy Phaco Machine",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 5,
    image: "/assets/Products/p12.png",
    tag: "Rated 5.0",
    section: "shop",
    fullDescription: "Ultraportable Device for Cataract Surgery\nCataRhex 3®easy employs components and design concepts proven under harsh conditions in hundred thousands of surgeries every year in India. CataRhex 3®easy masters 2.2 mm and 1.6 mm incision sizes too, thus making you ready for the implantation of future premium IOLs.\nWith CataRhex 3®easy you can reduce the incision to 2.8 mm – 3.2 mm, a size which is perfectly astigmatism neutral when done scleral.\n\nCatarhex 3 Easy – 2nd Generation Phaco Machine\nIndias Largest Selling Phaco Machine\nUltraportable Device for Cataract Surgery\nCataRhex 3®easy employs components and design concepts proven under harsh conditions in hundred thousands of surgeries every year in India. CataRhex 3®easy masters 2.2 mm and 1.6 mm incision sizes too, thus making you ready for the implantation of future premium IOLs.\nWith CataRhex 3®easy you can reduce the incision to 2.8 mm – 3.2 mm, a size which is perfectly astigmatism neutral when done scleral.",
    features: [
      "Larger Control Panel",
      "Portability - High Mobility and Space Saving",
      "Direct Access - One Button Per Function for Simple Operation",
      "Precise flow control Peristaltic Pump",
      "Continuous Flow Cutter (up to 2,400 cpm)",
      "Integrated Air Compressor",
      "Fast Instrument Set-up (All plugs on front)",
      "easyPhaco® function for 1.6, 2.2 and 2.8 mm"
    ],
    specs: [
      { label: "Pump Type", value: "Peristaltic pump" },
      { label: "Tubing system", value: "Integrated closed sensor" },
      { label: "Program Memories", value: "3 memories with DirectAccess®" },
      { label: "Cutting Performance", value: "SUS guillotine cutter (20G, 23G)" },
      { label: "Cutting Rate", value: "Linear 30 to 1200 cuts/min" },
      { label: "Display", value: "Glass covering, luminous display and keys" },
      { label: "Control", value: "Linear multifunctional pedal" },
      { label: "Diathermy", value: "Endo- and macro diathermy" }
    ],
    reviews: [
      {
        id: 1,
        author: "Dr.K.Jayasri",
        initials: "KJ",
        date: "March 3, 2022",
        rating: 5,
        content: "Hi, I am a private practitioner practicing at a semi urban setup. I have recently purchased oertli catarhex easy machine through ophthall buying group, it’s doing wonderfully good, tecnicians were always available to help me clear my doubts. Heartfelt thanks to ophthall for their instant help and making arrangements for a fair deal. Needless to say they are a great helping hand for budding ophthalmologists, congratulations and best wishes."
      },
      {
        id: 2,
        author: "Dr Kshijit Shukul",
        initials: "KS",
        date: "March 8, 2022",
        rating: 5,
        content: "Recently Installed Oertli Catarhex 3 phaco machine. Thanks Dr Senthil and the entire Ophthall team for helping me in procuring the machine at the right price. It is a real boon for all beginners and small practioners. Lucknow."
      }
    ]
  },
  {
    id: 409,
    name: "Ellex – UltraQ – Yag Laser",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p15.png",
    tag: null,
    section: "shop",
    fullDescription: "UltraQ\nMicrosurgical YAG Laser\nEllex\n\nThe Ultra Q™ is the industry’s leading microsurgical YAG laser, optimised for both anterior and posterior Nd:YAG laser treatments. Whether you are performing capsulotomy with new generation IOLs, peripheral iridotomy for glaucoma or Nd:YAG laser vitreolysis for the treatment of floaters, the Ultra Q™ delivers higher accuracy and greater control.",
    features: [
      "Efficient Energy Delivery: Ultra Gaussian spot profile and fast rise time allow treatments at lower energy levels.",
      "Faster Treatment: Industry’s fastest firing rate at 3 Hertz for quick and accurate treatment.",
      "Long-Term Performance: Solid-state Q-switch life-tested to deliver 400,000 shots without deterioration.",
      "Pinpoint Precision: Fine, two-point focusing system with a tolerance range of ± 8 µm.",
      "Versatile Applications: Optimized for capsulotomy, peripheral iridotomy, and laser vitreolysis."
    ],
    specs: [
      { label: "Laser Source", value: "Q-switched Nd:YAG" },
      { label: "Wavelength", value: "1064 nm" },
      { label: "Energy", value: "0.3 to 10 mJ per pulse (continuously variable)" },
      { label: "Pulse Duration", value: "4 ns (typical)" },
      { label: "Spot Size", value: "8 µm" },
      { label: "Burst Mode", value: "1, 2, or 3 pulses per burst" },
      { label: "Repetition Rate", value: "Up to 3 Hz (3 shots per second)" },
      { label: "Aiming Beam", value: "Red 635 nm, adjustable intensity" },
      { label: "Posterior Offset", value: "Continuously variable from 0 to ±500 µm" },
      { label: "Cooling", value: "Air Cooled" },
      { label: "Weight", value: "30 kg (Laser Head)" }
    ]
  },
  { id: 410, name: "Eye Light Espansione Dry Eye Treatment System", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 5, image: "/assets/Products/p17.png", tag: "Rated 5.0", section: "shop" },
  { id: 411, name: "eyevis Motorized Table", category: "GENERAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p18.png", tag: null, section: "shop" },
  { id: 412, name: "I Optik CV 7800 – Wireles Auto Phoropter", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p20.png", tag: null, section: "shop" },
  { id: 413, name: "Me Check MGD- Screening System", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p23.png", tag: null, section: "shop" },
  { id: 414, name: "MEDIWORKS ANTERIOR SEGMENT ANALYZER SCANSYS TA 517", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p24.png", tag: null, section: "shop" },
  { id: 415, name: "MEDIWORKS DIGITAL SLITLAMP WITH DRY EYE DIAGNOSTIC SYSTEM", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p25.png", tag: null, section: "shop" },
  { id: 416, name: "MEDIWORKS S390L (FIREFLY WDR) SLIT LAMP MICROSCOPE", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p26.png", tag: null, section: "shop" },
  { id: 417, name: "Ophthall Clear View Slitlamp Imaging System", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp2.jpeg", tag: null, section: "bestselling" },

  // DISPOSABLES

  // SURGICAL INSTRUMENTS
  { id: 511, name: "Oertli CR3 with SPEEP Phaco Machine", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp1.jpg", tag: "Rated 4.0", section: "bestselling" },
  { id: 517, name: "OPHTHALL-SURGICAL MICROSCOPE", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 5, image: "/assets/Home/Sellingproduct/sp4.png", tag: "Rated 5.0", section: "bestselling" },
  { id: 550, name: "EXTRA CAPSULAR CATARACT SET", category: "SURGICAL INSTRUMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p16.png", tag: null, section: "shop" },
  { id: 551, name: "MICRO SURGERY CATARACT SET (SICS)", category: "SURGICAL INSTRUMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p31.png", tag: null, section: "shop" },
  { id: 552, name: "MICRO SURGERY CATRACT & IOL SET", category: "SURGICAL INSTRUMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p32.png", tag: null, section: "shop" },
  { id: 553, name: "OPHTHALL PHACO TROLLEY", category: "SURGICAL INSTRUMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p55.png", tag: null, section: "shop" },
  { id: 554, name: "SMALL INCISION PHACO SET", category: "SURGICAL INSTRUMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p67.png", tag: null, section: "shop" },

  // OPTICAL PRODUCTS
  { id: 601, name: "MEDIWORKS SLIT LAMP S260/S260S", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p27.png", tag: null, section: "shop" },
  { id: 602, name: "Ophthall ILLUMINATED TRIAL LENS SET", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p41.png", tag: null, section: "shop" },
  { id: 603, name: "OPHTHALL LENSIT AR-9 AUTO REF", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p43.png", tag: null, section: "shop" },
  { id: 604, name: "OPHTHALL LENSIT KR-9 AUTO REF-KERATOMETER", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p44.png", tag: null, section: "shop" },
  { id: 605, name: "OPHTHALL LENSIT KR-9600 AUTO REF-KERATOMETR", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p45.png", tag: null, section: "shop" },
  { id: 425, name: "OPHTHALL VID RECORDING SYSTEM", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4.8, image: "/assets/Home/Sellingproduct/sp3.png", tag: "Rated 4.78", section: "bestselling" },
  { id: 607, name: "OPHTHALL LENSIT TL6500-B/C", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p47.png", tag: null, section: "shop" },
  { id: 608, name: "Ophthall Max Vision Chart", category: "OPTICAL PRODUCTS", price: "₹25,000", rating: 4, image: "/assets/Products/p49.png", tag: "Sale", section: "shop" },
  { id: 609, name: "Orthoptek (A New Approach to Amblyopia)", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p62.png", tag: null, section: "shop" },
  { id: 610, name: "REXXAM RET-700 Toporef Keratometer", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p65.png", tag: null, section: "shop" },
  { id: 611, name: "Streak Retinoscope", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p72.png", tag: null, section: "shop" },

  // EYE HOSPITAL/CLINIC ESTABLISHMENT
  { id: 701, name: "BCC-Branding and Digital Marketing", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 5, image: "/assets/Products/p10.png", tag: "Rated 5.0", section: "shop" },
  { id: 702, name: "DOCBOX EMR", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p13.png", tag: null, section: "shop" },
  { id: 703, name: "EH NOTE OPHTHALMOLOGY EMR", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p14.png", tag: null, section: "shop" },
  { id: 704, name: "HEALTHGRAPH EMR", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p19.png", tag: null, section: "shop" },
  { id: 705, name: "Infection Control Consultancy for Eye Hospital OT", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p21.png", tag: "Consultancy", section: "shop" },
  { id: 706, name: "Management Consultancy for Eye Hospitals", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p22.png", tag: null, section: "shop" },
  { id: 707, name: "OPERATION THEATRE DESIGNING", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p34.png", tag: "Service", section: "shop" },
  { id: 708, name: "Ophthall 2022 Practice Development Conference", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p36.png", tag: null, section: "shop" },
  { id: 709, name: "Ophthalmic Equipment Purchase Consultancy", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p60.png", tag: null, section: "shop" },
  { id: 710, name: "OPTICAL STORE DESIGNING / CONSULTANCY SERVICE", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p61.png", tag: null, section: "shop" },
  { id: 711, name: "PALM POWER MEDICUS OPHTHALMOLOGY EMR", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p63.png", tag: null, section: "shop" },
  { id: 712, name: "Yarrago- Ophthalmology EMR", category: "EYE HOSPITAL/CLINIC ESTABLISHMENT", price: "Enquire", rating: 4, image: "/assets/Products/p75.png", tag: null, section: "shop" },

  // GENERAL PRODUCTS
  { id: 801, name: "Ophthall LED External Light Source For Surgical Microscopes", category: "GENERAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p42.png", tag: null, section: "shop" },
  { id: 802, name: "Sale!SPANDAN PRO - POCKET ECG", category: "GENERAL PRODUCTS", price: "₹17,000", rating: 4, image: "/assets/Products/p70.png", tag: "Sale", section: "shop" },

  // STERILIZATION/DISINFECTION
  { id: 901, name: "Ophthall Medister Auto Fogger", category: "STERILIZATION/DISINFECTION", price: "Enquire", rating: 4, image: "/assets/Products/p50.png", tag: null, section: "shop" },
  { id: 902, name: "Ophthall-ETO Steriliser", category: "GENERAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p59.png", tag: null, section: "shop" },
  { id: 903, name: "Ophthall Medister Dehumidifier", category: "STERILIZATION/DISINFECTION", price: "Enquire", rating: 4, image: "/assets/Products/p52.png", tag: null, section: "shop" },
  { id: 904, name: "Ophthall Medister Fully Automatic ETO", category: "STERILIZATION/DISINFECTION", price: "Enquire", rating: 4, image: "/assets/Products/p53.png", tag: null, section: "shop" },
  { id: 905, name: "Ophthall Medister Plasma Sterilizer", category: "STERILIZATION/DISINFECTION", price: "Enquire", rating: 4, image: "/assets/Products/p54.png", tag: null, section: "shop" },
  { id: 906, name: "MEGATRON S4 HPS – GEUDER", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p28.png", tag: null, section: "shop" },
  { id: 907, name: "Meridian 532 nm Green laser", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p29.png", tag: null, section: "shop" },
  { id: 908, name: "Meridian Nd:YAG Laser", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p30.png", tag: null, section: "shop" },
  { id: 909, name: "Ophthall Delight Zoom Microscope", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p38.png", tag: null, section: "shop" },
  { id: 910, name: "Ophthall Digital Led Near Vision Chart", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p39.png", tag: null, section: "shop" },
  { id: 911, name: "Ophthall GloMaster - RedGlow Enhancement Device for Surgical Microscopes", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p40.png", tag: null, section: "shop" },
  { id: 912, name: "OPHTHALL LENSIT RM-9600 AUTO REF", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p46.png", tag: null, section: "shop" },
  { id: 913, name: "Ophthall Manual Phoropter", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p48.png", tag: null, section: "shop" },
  { id: 914, name: "OPHTHALL MEDISTER CLASS B BENCHTOP AUTOCLAVE 22 Liters", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p51.png", tag: null, section: "shop" },
  { id: 915, name: "Ophthall Portable Microscope - Table Top", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p56.png", tag: null, section: "shop" },
  { id: 916, name: "Ophthall Pro Vision Chart", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "₹22,000", rating: 5, image: "/assets/Products/p57.png", tag: "Sale", section: "shop" },
  { id: 917, name: "Ophthall Wireless LED Indirect Ophthalmoscope", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p58.png", tag: null, section: "shop" },
  { id: 918, name: "REXXAM ( Shin Nippon) NCT-200", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p64.png", tag: null, section: "shop" },
  { id: 919, name: "REXXAM SPM-700 Specular Microscope", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p66.png", tag: null, section: "shop" },
  { id: 920, name: "Sonoptek A/B Scan", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p68.png", tag: null, section: "shop" },
  { id: 921, name: "SP-1000AP - A-Scan/Pachymeter", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p69.png", tag: null, section: "shop" },
  { id: 922, name: "Spectral Domain OCT", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p71.png", tag: null, section: "shop" },
  { id: 923, name: "TAKAGI OPERATING MICROSCOPES", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p73.png", tag: null, section: "shop" },
  { id: 924, name: "XENOTRON XENON LIGHT SOURCE", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p74.png", tag: null, section: "shop" },
  // PRE-OWNED PRODUCTS
  {
    id: 426,
    name: "Compact Intutiv Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹9 Lakhs",
    rating: 4.8,
    year: "2019",
    condition: "Excellent / Fully Functional",
    location: "Gangavathi, Karnataka",
    fullDescription: "Well-maintained Compact Intuitive Phaco Machine (2019) available for sale. The system is in perfect working condition and offers reliable performance for efficient cataract surgery. A great opportunity for eye hospitals or surgeons looking for a high-quality phaco machine at an economical price.",
    image: "/assets/Pre-owned/Compact Intutiv Phaco Machine/1 A.jpg",
    images: ["/assets/Pre-owned/Compact Intutiv Phaco Machine/1 A.jpg", "/assets/Pre-owned/Compact Intutiv Phaco Machine/1 B.jpg"],
    videoUrl: "/assets/Pre-owned/Compact Intutiv Phaco Machine/1 C.mp4",
    tag: "Rated 4.78",
    section: "shop"
  },
  {
    id: 427,
    name: "Sovereign Compact Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹6.5 Lakhs",
    rating: 4.7,
    year: "2017",
    condition: "Good Working Condition",
    location: "Tamil Nadu",
    fullDescription: "Reliable and well-maintained Sovereign Compact Phaco Machine (Model 2017) available at an attractive price. Known for its stable fluidics and smooth phaco performance, this unit is ideal for surgeons looking for a dependable upgrade at a budget-friendly cost. Additional tubes included.",
    image: "/assets/Pre-owned/Sovereign Compact Phaco Machine/2A.jpeg",
    images: ["/assets/Pre-owned/Sovereign Compact Phaco Machine/2A.jpeg", "/assets/Pre-owned/Sovereign Compact Phaco Machine/2B.jpeg"],
    tag: "High Quality",
    section: "shop"
  },
  {
    id: 428,
    name: "Laureate Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹7 Lakhs",
    rating: 4.6,
    year: "2012",
    condition: "Good Working Condition",
    location: "Jammu",
    fullDescription: "Well-maintained Laureate Phaco Machine (2012) available in good working condition. A dependable choice for cataract surgeons seeking a cost-effective surgical setup. Includes 24 Cassettes. An excellent opportunity for clinics looking for a budget-friendly phaco system with ready consumables.",
    image: "/assets/Pre-owned/Laureate Phaco Machine/4 A.jpeg",
    tag: "Available",
    section: "shop"
  },
  {
    id: 429,
    name: "J&J Lasik & Femto Second Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹1.25 Crores",
    rating: 4.9,
    year: "2014/2015",
    condition: "Working Condition: Yes",
    location: "Delhi",
    fullDescription: "Premium Star S4 IR Excimer Laser (2014) + iFS Advanced Femto (2015) + iDesign Diagnostic Platform available for sale as a complete refractive suite. A strong opportunity for eye hospitals looking to establish or upgrade a full-scale refractive surgery practice at a competitive investment.",
    videoUrl: "/assets/Pre-owned/J&J Lasik & Femto Second Machine/3.mp4",
    tag: "High Tech",
    section: "shop"
  },
  {
    id: 430,
    name: "Appa Legend Tru Glow FS1 Microscope",
    category: "PRE-OWNED PRODUCTS",
    price: "₹9.5 Lakhs",
    rating: 4.8,
    year: "March 2023",
    condition: "Excellent",
    location: "Nagpur",
    fullDescription: "High-quality Appaswamy Legend Tru Glow FS-1 Microscope available in excellent condition (March 2023 model). Ideal for cataract and anterior segment surgeries, offering bright Tru Glow illumination and sharp optical clarity. Comes equipped with a CCTV visualization system.",
    image: "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5A.jpg",
    images: [
      "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5A.jpg",
      "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5B.jpg",
      "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5C.jpg"
    ],
    tag: "Premium",
    section: "shop"
  },
  {
    id: 431,
    name: "Stellaris Anterior Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹6 Lakhs",
    rating: 4.7,
    year: "2011",
    condition: "Good Working Condition",
    location: "Delhi",
    fullDescription: "Well-maintained Stellaris Anterior (2011 model) available at an attractive price. A reliable phaco system known for stable fluidics and efficient anterior segment performance. Includes 2 Handpieces and 12 Cassettes (2 New, 10 Used). Reason for Sale: Upgrading to a portable machine.",
    image: "/assets/Pre-owned/Stellaris Anterior Phaco Machine/6A.jpg",
    images: ["/assets/Pre-owned/Stellaris Anterior Phaco Machine/6A.jpg", "/assets/Pre-owned/Stellaris Anterior Phaco Machine/6B.jpg"],
    tag: "Advanced",
    section: "shop"
  },
  {
    id: 432,
    name: "Appaswamy Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "₹9 Lakhs",
    rating: 4.5,
    year: "2024",
    condition: "Excellent",
    location: "Mysore",
    fullDescription: "Latest 2024 model Appaswamy Phaco Machine available in excellent condition at a competitive price. Ideal for modern cataract practices. Included Accessories: 2 Phaco Probes, 1 Cautery, I/A, Bimanual I/A, and 2 Tubing Sets. A near-new system with essential accessories.",
    image: "/assets/Pre-owned/Appaswamy Phaco/7A.jpg",
    images: [
      "/assets/Pre-owned/Appaswamy Phaco/7A.jpg",
      "/assets/Pre-owned/Appaswamy Phaco/7B.jpg",
      "/assets/Pre-owned/Appaswamy Phaco/7C.jpg"
    ],
    tag: "Reliable",
    section: "shop"
  },
  {
    id: 433,
    name: "Appa Galaxy Pro Orbit Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "₹11 Lakhs",
    rating: 4.8,
    year: "2023",
    condition: "Excellent",
    location: "Vijayawada",
    fullDescription: "Latest-generation Appa Galaxy Pro Orbit Phaco Machine (2023 model) available for sale in excellent condition. Designed for smooth emulsification, stable fluidics, and efficient cataract surgery performance. A great opportunity for an advanced phaco system.",
    image: "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8A.jpeg",
    images: [
      "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8A.jpeg",
      "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8B.jpeg",
      "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8C.jpeg"
    ],
    tag: "High-Performance",
    section: "shop"
  },
  {
    id: 434,
    name: "Oertli Speep Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "Enquire",
    rating: 4.9,
    year: "3 Years Old",
    condition: "Rarely Used / Excellent",
    location: "Contact for Details",
    fullDescription: "Compact, powerful, and rarely used Oertli CR 3 Speep (CataRhex 3) available in excellent condition. Designed with advanced Swiss technology, this portable phaco system delivers high-precision performance. Perfect for clinics looking to optimize OT efficiency.",
    image: "/assets/Pre-owned/Oertli Speep Phaco/9A.jpeg",
    images: [
      "/assets/Pre-owned/Oertli Speep Phaco/9A.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9B.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9C.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9D.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9E.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9F.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9G.jpeg"
    ],
    tag: "Professional",
    section: "shop"
  },
  {
    id: 435,
    name: "Appa Green Laser Slit Lamp Mount",
    category: "PRE-OWNED PRODUCTS",
    price: "₹7.3 Lakhs",
    rating: 4.7,
    year: "2022",
    condition: "Good Working Condition",
    location: "Himatnagar, Gujarat",
    fullDescription: "Well-maintained Appa Green Laser Slit Lamp Mount (AMOG SMART) available for sale. Ideal for retinal photocoagulation, offering precise laser delivery with slit lamp integration. Price Negotiable. Interested buyers may contact for further details.",
    image: "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10A.jpg",
    images: [
      "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10A.jpg",
      "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10B.jpeg",
      "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10C.jpeg"
    ],
    tag: "Precision",
    section: "shop"
  },
  {
    id: 436,
    name: "J&J Intuitiv Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "₹11.20 Lakhs",
    rating: 4.8,
    year: "2019",
    condition: "Excellent working condition",
    location: "Surat",
    fullDescription: "Well-maintained J&J Intuitive Phaco Machine (2019) available in excellent working condition. Complete surgical package including Console, Foot Switch, Ellipse FX Probe, Trolley, and Vitrectomy Cutter. CMC Available for 2 More Years. Price Negotiable.",
    image: "/assets/Pre-owned/J&J Intuitiv Phaco/11B.jpeg",
    videoUrl: "/assets/Pre-owned/J&J Intuitiv Phaco/11A.mp4",
    images: [
      "/assets/Pre-owned/J&J Intuitiv Phaco/11B.jpeg",
      "/assets/Pre-owned/J&J Intuitiv Phaco/11C.jpeg"
    ],
    tag: "High-End",
    section: "shop"
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "",
    subtitle: "OPHTHALL IMAGING SOLUTIONS",
    desc: "Transform Your Slit Lamp or Microscope into a High-Resolution Ophthalmic Imaging & Recording Powerhouse",
    image: "/assets/Home/banner1.png",
    subHead: "Advanced Ophthalmic Diagnostics",
    buttonText: "Click Here",
    link: "https://imagingsystems.ophthallmart.com/",
    linkType: "external"
  },
  {
    id: 2, // New Slider 2
    title: "",
    subtitle: "PREOWNED EQUIPMENT'S MARKETPLACE",
    desc: "A dedicated initiative to facilitate doctor-to-doctor trading of high-quality pre-owned equipment",
    image: "/assets/Home/banner13.png", // Using the best related asset discovered
    subHead: "Exclusive Marketplace",
    buttonText: "Explore Collection",
    link: "https://ophthall-marketplace.vercel.app/",
    linkType: "external"
  },
  {
    id: 3,
    title: "",
    subtitle: "OPHTHALL CLEAR VIEW SLITLAMP IMAGING SYSTEM",
    desc: "Convert Any Slit lamp To An Advanced Imaging System At Most Economical Prices",
    image: "/assets/Home/banner2.jpeg",
    subHead: "Precision Imaging",
    buttonText: "View Now",
    link: 417,
    linkType: "product"
  },
  {
    id: 4,
    title: "",
    subtitle: "OPHTHALL VID",
    desc: "CONVERT YOUR SURGICAL MICROSCOPE TO A VIDEO RECORDING SYSTEM WITH CUSTOMIZED C MOUNT, BEAM SPLITTER AND FULL HD SONY CMOS CAMERA VERY ECONOMICAL AND HIGH QUALITY PRODUCT. For Anterior Segment Surgeries",
    image: "/assets/Home/banner5.png",
    subHead: "Video Documentation",
    buttonText: "View Now",
    link: 425,
    linkType: "product"
  },
  {
    id: 5, // New Slider 5
    title: "",
    subtitle: "OPHTHALL VID PRO",
    desc: `<div class="text-left font-normal normal-case">Elevate Your Surgical Visualization by Converting your existing surgical microscope into a <b>high-definition video recording system</b> with precision-engineered <b>custom C-Mount and beam splitter integration.</b> Powered by a <b>large Sony sensor</b>, the system delivers:<ul class="list-disc pl-5 mt-2"><li>Wide field surgical view</li><li>Exceptional image sharpness</li><li>High dynamic range with HDR10+</li><li>Brilliant color accuracy and depth</li></ul></div>`,
    image: "/assets/Home/banner14.webp", // Temporarily using the same asset for now since no new one is listed for Pro
    subHead: "Video Documentation",
    buttonText: "View Now"
  },
  {
    id: 6,
    title: "",
    subtitle: "OERTLI PHACO MACHINE",
    desc: `SWISS PHACO TECHNOLOGY MAKE THE DIFFERENCE IN YOUR OPHTHALMIC PRACTICE <span class="normal-case">Buy through Ophthall Buying Group to get Guaranteed Lowest price on the market</span>`,
    image: "/assets/Home/banner8.png", // Re-mapped to actual Oertli image
    subHead: "Surgical Technology",
    buttonText: "View Now",
    link: "oertli",
    linkType: "search"
  },
  {
    id: 7,
    title: "",
    subtitle: "OPHTHALL SURGICAL MICROSCOPES",
    desc: `India's Best and Value for Money Surgical Microscope for Ophthalmologists.<br/>"Now everyone Can Own One"`,
    image: "/assets/Home/banner9.png", // Remapped to microscope banner
    subHead: "",
    buttonText: "View Now",
    link: 517,
    linkType: "product"
  },
  {
    id: 8,
    title: "",
    subtitle: "OPHTHALL ETO",
    desc: `OPHTHALL MEDISTER FULLY AUTOMATIC ETO<br/><span class="normal-case">Precision Sterilization for Sensitive Ophthalmic Instruments</span>`,
    image: "/assets/Home/banner4.png", // Remapped ETO
    subHead: "Sterilization Solutions",
    buttonText: "View Now",
    link: "eto",
    linkType: "search"
  },
  {
    id: 9,
    title: "REDGLOW ENHANCEMENT DEVICE FOR SURGICAL MICROSCOPES",
    subtitle: "OPHTHALL GLOMASTER",
    desc: `<span class="normal-case">Experience superior clinical performance with the Ophthall GloMaster. Designed for ophthalmologists who demand precision and reliability.</span>`,
    image: "/assets/Home/banner15.png",
    subHead: "",
    buttonText: "View Now",
    link: "glow",
    linkType: "search"
  },
  {
    id: 10,
    title: "",
    subtitle: "OPHTHALL LENSIT",
    desc: `<span class="normal-case">Engineered for Optical Excellence.<br/>High-Performance Diagnostics You Can Trust.</span>`,
    image: "/assets/Home/banner3.png",
    subHead: "Optical Precision",
    buttonText: "View Now",
    link: "auto ref",
    linkType: "search"
  },
  {
    id: 11,
    title: "",
    subtitle: "OPHTHALL LED VISION CHART",
    desc: "INDIA'S ONLY CUSTOMIZABLE VISION CHART WITH YOUR HOSPITAL NAME/ IMAGE ADDED IN FIRST SCREEN OF THE VISION CHART.",
    image: "/assets/Home/banner7.png", // Re-mapped to vision chart banner
    subHead: "Diagnostic Tools",
    buttonText: "View Now",
    link: "vision",
    linkType: "search"
  },
  {
    id: 12,
    title: "",
    subtitle: "OPHTHALLMART EQUIPMENT VALUATION",
    desc: "FILL THE SIMPLE FORM KNOW YOUR EQUIPMENT VALUE",
    image: "/assets/Home/banner12.jpeg", // Equipment Valuation banner
    subHead: "Exclusive Services",
    buttonText: "Click Here",
    link: "valuation",
    linkType: "page"
  },
  {
    id: 13,
    title: "",
    subtitle: "FOR TRADE PARTNERSHIPS ADVERTISEMENT",
    desc: "TO LIST YOUR PRODUCTS/(NEW & PREOWNED) SERVICES IN OPHTHALLMART WHATSAPP +919176702051 / CALL TOLLFREE - 1800 572 1051",
    image: "/assets/Home/banner10.png", // Trade partnerships banner
    subHead: "Partnerships",
    buttonText: "Click Here",
    link: "contact",
    linkType: "page"
  }
];

export const BEST_SELLING_PRODUCTS = [
  { id: 511, name: "Oertli CR3 with SPEEP Phaco Machine", category: "SURGICAL INSTRUMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp1.jpg", tag: "Rated 4.0", section: "bestselling" },
  { id: 417, name: "Ophthall Clear View Slitlamp Imaging System", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp2.jpeg", tag: null, section: "bestselling" },
  { id: 425, name: "OPHTHALL VID RECORDING SYSTEM", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4.8, image: "/assets/Home/Sellingproduct/sp3.png", tag: "Rated 4.78", section: "bestselling" },
  { id: 517, name: "OPHTHALL-SURGICAL MICROSCOPE", category: "SURGICAL INSTRUMENTS", price: "Enquire", rating: 5, image: "/assets/Home/Sellingproduct/sp4.png", tag: "Rated 5.0", section: "bestselling" }
];

export const TRENDING_PRODUCTS = [
  {
    id: 517,
    name: "Ophthall Surgical Microscope",
    subtitle: "Ophthall Pro, Ophthall Max, Ophthall Zen",
    category: "SURGICAL INSTRUMENTS",
    price: "Enquire",
    rating: 5,
    image: "/assets/Home/Trending/t1.png",
    tag: "Rated 5.0"
  },
  {
    id: 417,
    name: "OPHTHALL- SLITLAMP IMAGING SYSTEM",
    subtitle: "Ophthall Clear view Imaging System",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Home/Trending/t2.png",
    tag: null
  },
  {
    id: 511,
    name: "Oertli Phaco",
    subtitle: "Catarhex 3",
    category: "SURGICAL INSTRUMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Home/Trending/t3.png",
    tag: "Rated 4.0"
  }
];

export const FEATURED_PRODUCTS = [
  {
    id: 426,
    name: "Compact Intutiv Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹9 Lakhs",
    rating: 4.8,
    year: "2019",
    condition: "Excellent / Fully Functional",
    location: "Gangavathi, Karnataka",
    fullDescription: "Well-maintained Compact Intuitive Phaco Machine (2019) available for sale. The system is in perfect working condition and offers reliable performance for efficient cataract surgery. A great opportunity for eye hospitals or surgeons looking for a high-quality phaco machine at an economical price.",
    image: "/assets/Pre-owned/Compact Intutiv Phaco Machine/1 A.jpg",
    images: ["/assets/Pre-owned/Compact Intutiv Phaco Machine/1 A.jpg", "/assets/Pre-owned/Compact Intutiv Phaco Machine/1 B.jpg"],
    videoUrl: "/assets/Pre-owned/Compact Intutiv Phaco Machine/1 C.mp4",
    tag: "Rated 4.78",
    section: "featured"
  },
  {
    id: 427,
    name: "Sovereign Compact Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹6.5 Lakhs",
    rating: 4.7,
    year: "2017",
    condition: "Good Working Condition",
    location: "Tamil Nadu",
    fullDescription: "Reliable and well-maintained Sovereign Compact Phaco Machine (Model 2017) available at an attractive price. Known for its stable fluidics and smooth phaco performance, this unit is ideal for surgeons looking for a dependable upgrade at a budget-friendly cost. Additional tubes included.",
    image: "/assets/Pre-owned/Sovereign Compact Phaco Machine/2A.jpeg",
    images: ["/assets/Pre-owned/Sovereign Compact Phaco Machine/2A.jpeg", "/assets/Pre-owned/Sovereign Compact Phaco Machine/2B.jpeg"],
    tag: "High Quality",
    section: "featured"
  },
  {
    id: 428,
    name: "Laureate Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹7 Lakhs",
    rating: 4.6,
    year: "2012",
    condition: "Good Working Condition",
    location: "Jammu",
    fullDescription: "Well-maintained Laureate Phaco Machine (2012) available in good working condition. A dependable choice for cataract surgeons seeking a cost-effective surgical setup. Includes 24 Cassettes. An excellent opportunity for clinics looking for a budget-friendly phaco system with ready consumables.",
    image: "/assets/Pre-owned/Laureate Phaco Machine/4 A.jpeg",
    tag: "Top Choice",
    section: "featured"
  },
  {
    id: 429,
    name: "J&J Lasik & Femto Second Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹1.25 Crores",
    rating: 4.9,
    year: "2014/2015",
    condition: "Working Condition: Yes",
    location: "Delhi",
    fullDescription: "Premium Star S4 IR Excimer Laser (2014) + iFS Advanced Femto (2015) + iDesign Diagnostic Platform available for sale as a complete refractive suite. A strong opportunity for eye hospitals looking to establish or upgrade a full-scale refractive surgery practice at a competitive investment.",
    videoUrl: "/assets/Pre-owned/J&J Lasik & Femto Second Machine/3.mp4",
    tag: "New Arrival",
    section: "featured"
  },
  {
    id: 430,
    name: "Appa Legend Tru Glow FS1 Microscope",
    category: "PRE-OWNED PRODUCTS",
    price: "₹9.5 Lakhs",
    rating: 4.8,
    year: "March 2023",
    condition: "Excellent",
    location: "Nagpur",
    fullDescription: "High-quality Appaswamy Legend Tru Glow FS-1 Microscope available in excellent condition (March 2023 model). Ideal for cataract and anterior segment surgeries, offering bright Tru Glow illumination and sharp optical clarity. Comes equipped with a CCTV visualization system.",
    image: "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5A.jpg",
    images: [
      "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5A.jpg",
      "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5B.jpg",
      "/assets/Pre-owned/Appa Legend Tru Glow FS1 Microscope/5C.jpg"
    ],
    tag: "Premium",
    section: "featured"
  },
  {
    id: 431,
    name: "Stellaris Anterior Phaco Machine",
    category: "PRE-OWNED PRODUCTS",
    price: "₹6 Lakhs",
    rating: 4.7,
    year: "2011",
    condition: "Good Working Condition",
    location: "Delhi",
    fullDescription: "Well-maintained Stellaris Anterior (2011 model) available at an attractive price. A reliable phaco system known for stable fluidics and efficient anterior segment performance. Includes 2 Handpieces and 12 Cassettes (2 New, 10 Used). Reason for Sale: Upgrading to a portable machine.",
    image: "/assets/Pre-owned/Stellaris Anterior Phaco Machine/6A.jpg",
    images: ["/assets/Pre-owned/Stellaris Anterior Phaco Machine/6A.jpg", "/assets/Pre-owned/Stellaris Anterior Phaco Machine/6B.jpg"],
    tag: "Advanced",
    section: "featured"
  },
  {
    id: 432,
    name: "Appaswamy Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "₹9 Lakhs",
    rating: 4.5,
    year: "2024",
    condition: "Excellent",
    location: "Mysore",
    fullDescription: "Latest 2024 model Appaswamy Phaco Machine available in excellent condition at a competitive price. Ideal for modern cataract practices. Included Accessories: 2 Phaco Probes, 1 Cautery, I/A, Bimanual I/A, and 2 Tubing Sets. A near-new system with essential accessories.",
    image: "/assets/Pre-owned/Appaswamy Phaco/7A.jpg",
    images: [
      "/assets/Pre-owned/Appaswamy Phaco/7A.jpg",
      "/assets/Pre-owned/Appaswamy Phaco/7B.jpg",
      "/assets/Pre-owned/Appaswamy Phaco/7C.jpg"
    ],
    tag: "Reliable",
    section: "featured"
  },
  {
    id: 433,
    name: "Appa Galaxy Pro Orbit Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "₹11 Lakhs",
    rating: 4.8,
    year: "2023",
    condition: "Excellent",
    location: "Vijayawada",
    fullDescription: "Latest-generation Appa Galaxy Pro Orbit Phaco Machine (2023 model) available for sale in excellent condition. Designed for smooth emulsification, stable fluidics, and efficient cataract surgery performance. A great opportunity for an advanced phaco system.",
    image: "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8A.jpeg",
    images: [
      "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8A.jpeg",
      "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8B.jpeg",
      "/assets/Pre-owned/Appa Galaxy Pro Orbit Phaco/8C.jpeg"
    ],
    tag: "High-Performance",
    section: "featured"
  },
  {
    id: 434,
    name: "Oertli Speep Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "Enquire",
    rating: 4.9,
    year: "3 Years Old",
    condition: "Rarely Used / Excellent",
    location: "Contact for Details",
    fullDescription: "Compact, powerful, and rarely used Oertli CR 3 Speep (CataRhex 3) available in excellent condition. Designed with advanced Swiss technology, this portable phaco system delivers high-precision performance. Perfect for clinics looking to optimize OT efficiency.",
    image: "/assets/Pre-owned/Oertli Speep Phaco/9A.jpeg",
    images: [
      "/assets/Pre-owned/Oertli Speep Phaco/9A.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9B.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9C.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9D.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9E.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9F.jpeg",
      "/assets/Pre-owned/Oertli Speep Phaco/9G.jpeg"
    ],
    tag: "Professional",
    section: "featured"
  },
  {
    id: 435,
    name: "Appa Green Laser Slit Lamp Mount",
    category: "PRE-OWNED PRODUCTS",
    price: "₹7.3 Lakhs",
    rating: 4.7,
    year: "2022",
    condition: "Good Working Condition",
    location: "Himatnagar, Gujarat",
    fullDescription: "Well-maintained Appa Green Laser Slit Lamp Mount (AMOG SMART) available for sale. Ideal for retinal photocoagulation, offering precise laser delivery with slit lamp integration. Price Negotiable. Interested buyers may contact for further details.",
    image: "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10A.jpg",
    images: [
      "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10A.jpg",
      "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10B.jpeg",
      "/assets/Pre-owned/Appa Green Laser Slit Lamp Mount/10C.jpeg"
    ],
    tag: "Precision",
    section: "featured"
  },
  {
    id: 436,
    name: "J&J Intuitiv Phaco",
    category: "PRE-OWNED PRODUCTS",
    price: "₹11.20 Lakhs",
    rating: 4.8,
    year: "2019",
    condition: "Excellent working condition",
    location: "Surat",
    fullDescription: "Well-maintained J&J Intuitive Phaco Machine (2019) available in excellent working condition. Complete surgical package including Console, Foot Switch, Ellipse FX Probe, Trolley, and Vitrectomy Cutter. CMC Available for 2 More Years. Price Negotiable.",
    image: "/assets/Pre-owned/J&J Intuitiv Phaco/11B.jpeg",
    videoUrl: "/assets/Pre-owned/J&J Intuitiv Phaco/11A.mp4",
    images: [
      "/assets/Pre-owned/J&J Intuitiv Phaco/11B.jpeg",
      "/assets/Pre-owned/J&J Intuitiv Phaco/11C.jpeg"
    ],
    tag: "High-End",
    section: "featured"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Extremely happy with the recording, Still thé image quality is good .<br/>Thank you Dr. Senthil Sir<br/>And good shout out to supporting staff..<br/>Thank you Ophthal group",
    name: "Dr. ASWINI KUMAR BEHERA",
    title: "MD & EX- SR RPC, AIIMS, New Delhi<br/>Founder and Director Naitrika super specialty eye care",
    image: "/assets/Home/Testimonal/testimonal1.png"
  },
  {
    id: 2,
    quote: "I have been using the OPHTHALL VIDEO Recording System For Our Operating Microscope for approximately a month, and I am very impressed with its performance. The camera quality is excellent, capturing surgical details with great precision. Mr. Suren Sathya, the service engineer, was highly knowledgeable and provided a thorough demonstration of the camera's usability. I am very satisfied with this product and highly recommend it.",
    name: "Dr Tejaswi Prasad",
    title: "Aravind Eye Hospital Madurai",
    image: "/assets/Home/Testimonal/testimonal2.png"
  },
  {
    id: 3,
    quote: "My experience with ophthall red glo enhancer fitted on Zeiss lumera 300. The image & red glo quality enhanced so well that my surgical confidence increased. surgical...",
    name: "Dr. Rajesh Chells",
    title: "Focus Eye hospital Kaloor, Eranakulam Kerala",
    image: "/assets/Home/Testimonal/testimonal3.png"
  },
  {
    id: 4,
    quote: "Ophthalll is the best microscope what you can afford at the best price. It's optics and depth perception are at par to a branded microscope making it a superb value for...",
    name: "Dr Anurag Shandil",
    title: "Narayana Nethradhama Superspeciality Eye...",
    image: "/assets/Home/Testimonal/testimonal4.png"
  }
];
