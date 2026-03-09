export const CATEGORIES = [
  { id: 1, name: "DIAGNOSTIC/SURGICAL EQUIPMENTS", icon: "Activity", image: "/assets/Home/cat1.png" },
  { id: 2, name: "DISPOSABLES", icon: "Stethoscope", image: "/assets/Home/cat2.png" },
  { id: 3, name: "SURGICAL INSTRUMENTS", icon: "Settings", image: "/assets/Home/cat3.png" },
  { id: 4, name: "OPTICAL PRODUCTS", icon: "Eye", image: "/assets/Home/cat4.png" },
  { id: 5, name: "EYE HOSPITAL/CLINIC ESTABLISHMENT", icon: "Briefcase", image: "/assets/Home/cat5.png" },
  { id: 6, name: "GENERAL PRODUCTS", icon: "CheckCircle", image: "/assets/Home/cat6.png" },
  { id: 7, name: "STERILIZATION/DISINFECTION", icon: "Shield", image: "/assets/Home/cat6.png" },
  { id: 8, name: "PRE-OWNED", icon: "Package", image: "/assets/Home/Collection/collection3.png" }
];

export const HOME_CATEGORIES = [
  { id: 1, name: "Diagnostic / Surgical Equipments / Instruments", image: "/assets/Home/Collection/collection1.png" },
  { id: 2, name: "Consumables/ Disposables", image: "/assets/Home/Collection/collection2.png" },
  { id: 3, name: "PRE-OWNED", image: "/assets/Home/Collection/collection3.png" },
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
  {
    id: 411,
    name: "eyevis Motorized Table",
    category: "GENERAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p18.png",
    tag: null,
    section: "shop",
    fullDescription: "The eyevis Motorized Table is a robust and versatile equipment stand designed for ophthalmic diagnostics and surgical environments. It features a high-capacity actuator-driven lifting system with a smooth 200mm range, supporting loads up to 55Kg. The table top provides a spacious 480x400mm surface, and the adjustable height between 630mm and 830mm ensure an ergonomic working position for various clinical applications.",
    specs: [
      { label: "Type", value: "Actuator" },
      { label: "Up Down Range", value: "200mm" },
      { label: "Load Lifting Capacity", value: "55Kg" },
      { label: "Power Input", value: "110-230V, 50-60Hz" },
      { label: "Fuse", value: "3A" },
      { label: "Power Consumption", value: "75W" },
      { label: "Dimensions", value: "480*400mm Table Top" },
      { label: "Min/Max Height", value: "630mm / 830mm" }
    ]
  },
  {
    id: 412,
    name: "I Optik CV 7800 – Wireless Auto Phoropter",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p20.png",
    tag: null,
    section: "shop",
    fullDescription: "The I Optik CV 7800 is a high-speed, wireless auto phoropter designed for precision and flexibility. With an initialization time of less than 7 seconds and a quiet operation at only 46 decibels, it offers an efficient screening experience. The system supports dual operation via keyboard or tablet (Android/Apple) and features a wide measurement range for spherical and cylindrical vision testing.",
    features: [
      "Ultra-fast initialization (< 7 seconds)",
      "Whisper-quiet operation (46 decibels)",
      "Wireless tablet control (Android & Apple support)",
      "Flexible Tablet & Keyboard dual mode",
      "Wide Vision measurement range",
      "Jackson & Double cross cylinder support",
      "Built-in Compensation retinoscopy (+1.5D/+2.00D)"
    ],
    specs: [
      { label: "Sphere Range", value: "-29.00D ~ +26.75D" },
      { label: "Cylinder Range", value: "-8.75D ~ +8.75D (0.25D/1.00D increments)" },
      { label: "Axis", value: "0-180° (1°/5°/15° increments)" },
      { label: "PD Far/Near", value: "48-80mm / 48-76mm" },
      { label: "Rotating Prism", value: "0 ~ 20Δ" },
      { label: "Power Supply", value: "220V/50Hz, 90VA" },
      { label: "Weight", value: "3.8kg (Head)" }
    ]
  },
  { id: 413, name: "Me-Check MGD Screening System", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p23.png", tag: null, section: "shop" },
  { id: 414, name: "MEDIWORKS ANTERIOR SEGMENT ANALYZER SCANSYS TA 517", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p24.png", tag: null, section: "shop" },
  { id: 415, name: "MEDIWORKS DIGITAL SLITLAMP WITH DRY EYE DIAGNOSTIC SYSTEM", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p25.png", tag: null, section: "shop" },
  { id: 416, name: "MEDIWORKS S390L (FIREFLY WDR) SLIT LAMP MICROSCOPE", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p26.png", tag: null, section: "shop" },
  { id: 417, name: "Ophthall Clear View Slitlamp Imaging System", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp2.jpeg", tag: null, section: "bestselling" },

  // DISPOSABLES

  // SURGICAL INSTRUMENTS
  { id: 511, name: "Oertli CR3 with SPEEP Phaco Machine", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp1.jpg", tag: "Rated 4.0", section: "bestselling" },
  { id: 517, name: "OPHTHALL-SURGICAL MICROSCOPE", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 5, image: "/assets/Home/Sellingproduct/sp4.png", tag: "Rated 5.0", section: "bestselling" },
  {
    id: 550,
    name: "EXTRA CAPSULAR CATARACT SET",
    category: "SURGICAL INSTRUMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p16.png",
    tag: null,
    section: "shop",
    fullDescription: "A comprehensive surgical set designed for Extra Capsular Cataract Extraction (ECCE). This kit includes all the essential instruments made from high-quality materials to ensure precision and reliability during surgery. Packaged in a double-layered sterilization box with a protective mat.",
    features: [
      "Barraquer Wire Speculum",
      "Iris Scissors & Castroviejo Corneal Scissors",
      "Vannus Capsulotomy Scissors (Angle & Curved)",
      "Kelman McPherson & McPherson Suture Tying Forceps",
      "Arruga Capsular & Dastoor Superior Rectus Forceps",
      "Lewis Lens Loop & Irrigating Vectis",
      "Simco Cannula & Hydrodissection Cannula",
      "Sinsky Hook & Nightingale Capsule Polisher",
      "Sterilization Box With Mat (Double layer)"
    ]
  },
  {
    id: 551,
    name: "MICRO SURGERY CATARACT SET (SICS)",
    category: "SURGICAL INSTRUMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p31.png",
    tag: null,
    section: "shop",
    fullDescription: "The SICS Micro Surgery set is specifically curated for Small Incision Cataract Surgery. It features micro-precision instruments including specialized forceps, cannulas, and a sterilization box with a protective mat. Ideal for surgeons performing modern high-volume cataract procedures.",
    features: [
      "Barraquer Wire Speculum & Superior rectus Forceps",
      "Westcott Conjunctival & Castroviejo Corneal Scissors",
      "Kelman McPherson & Suture Tying Forceps",
      "Capsularhexis Forceps & Lim's Forceps",
      "Simco Cannula & Hydrodissection Cannula",
      "Barraquer Needle Holder (Micro)",
      "Sharpe Chopper & Sinsky Hook",
      "Sterilization Box With Mat (Single layer)"
    ]
  },
  {
    id: 552,
    name: "MICRO SURGERY CATRACT & IOL SET",
    category: "SURGICAL INSTRUMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p32.png",
    tag: null,
    section: "shop",
    fullDescription: "A professional-grade kit for Cataract and IOL (Intraocular Lens) implantation. This set combines essential micro-surgical instruments for safe and effective lens replacement procedures, ensuring surgeons have the right tools for every step of the surgery.",
    features: [
      "Barraquer Wire Speculum & Superior rectus Forceps",
      "Utrata Capsularhexis Forceps",
      "Kelman McPherson & Suture Tying Forceps",
      "Vannus Capsulotomy & Castroviejo Corneal Scissors",
      "Simco Cannula & Air injection Cannula",
      "Wire Vectis Serrated & Sinsky Hook",
      "Castroviejo Caliper (20mm)",
      "Barraquer Needle Holder (Micro)",
      "Sterilization Box With Single Mat"
    ]
  },
  {
    id: 553,
    name: "OPHTHALL PHACO TROLLEY",
    category: "SURGICAL INSTRUMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p55.png",
    images: [
      "/assets/Products/p55.png",
      "/assets/Products/p55-detail-1.png",
      "/assets/Products/p55-detail-2.png",
      "/assets/Products/p55-detail-3.png"
    ],
    tag: null,
    section: "shop",
    fullDescription: "The Ophthall Phaco Trolley is a heavy-duty, professionally designed stand built to support all types of Phaco machines. Constructured with high-quality carbon steel and a durable powder coating, it features a manually adjustable I/V pole and a retractable Phaco tubing tray. The sturdy base with high-quality caster wheels ensures effortless movement and stability within the OT environment.",
    features: [
      "Very sturdy design built with high-quality material",
      "Manually adjustable I/V Pole",
      "Retractable Phaco tubing tray for cable management",
      "Stainless steel instrument plate with swivel arm",
      "Heavy-duty caster wheels for effortless movement",
      "Durable high-quality powder coating",
      "Fits extral-large phaco machines with optional top plate"
    ],
    specs: [
      { label: "Top Size", value: "500 x 380 mm" },
      { label: "Retractable Tray", value: "295 x 270 mm" },
      { label: "Retraction Range", value: "150-170 mm" },
      { label: "Material", value: "High Quality Carbon Steel" },
      { label: "Finish", value: "Premium Powder Coating" }
    ]
  },
  {
    id: 554,
    name: "SMALL INCISION PHACO SET",
    category: "SURGICAL INSTRUMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p67.png",
    tag: null,
    section: "shop",
    fullDescription: "An optimized instrument set for Small Incision Phaco surgery. This kit focuses on the critical tools needed for modern phacoemulsification, featuring high-precision speculums, choppers, and cannulas to streamline the surgical workflow.",
    features: [
      "Liberman Speculum",
      "Agarwal Chopper",
      "Castroviejo Caliper & Corneal Scissors",
      "Vannus Capsulotomy Scissors",
      "Kelman McPherson & Corneal Forceps",
      "I/A Bi-manual Cannula",
      "Sinsky Hook & Hydrodissection Cannula",
      "Sterilization Box with Mat (Single)"
    ]
  },

  // OPTICAL PRODUCTS
  {
    id: 601,
    name: "MEDIWORKS SLIT LAMP S260/S260S",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p27.png",
    tag: null,
    section: "shop",
    fullDescription: "The MediWorks S260/S260S is a high-definition slit lamp featuring an advanced optical system with resolution up to 200 lp/mm. It offers professional LED illumination that mimics the warm, vivid colors of halogen lamps while providing higher intensity and energy efficiency. Designed for easy installation, it features a compact control panel with a built-in power supply, eliminating the need for a separate power box.",
    features: [
      "HD Optical System (Up to 200 lp/mm resolution)",
      "LED Illumination similar to Halogen (Vivid colors, no glare)",
      "Built-in Yellow Filter for early corneal epithelial staining",
      "Cobalt-blue filter for enhanced contrast in Sodium Fluorescein imaging",
      "Compact control panel with built-in power supply",
      "Easier Installation on ophthalmic units",
      "Longer life span and lower energy consumption"
    ]
  },
  {
    id: 602,
    name: "Ophthall ILLUMINATED TRIAL LENS SET",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p41.png",
    tag: null,
    section: "shop",
    fullDescription: "The Ophthall Illuminated Trial Lens Set is a premium instrument designed for precise and efficient refraction testing. Housed in an elegant wooden box with a professional red & black finish, it ensures maximum durability and organization for vision care professionals. This comprehensive set provides a wide range of high-quality optics for accurate vision assessment.",
    features: [
      "Premium wooden storage box with Red & Black finish",
      "Reduced Aperture Lenses in metal mounts",
      "Comprehensive set of 225 high-quality lenses",
      "32 Pairs each of +/- Spherical lenses",
      "20 Pairs each of +/- Cylindrical lenses",
      "Includes 10 Prism and 7 Accessory lenses",
      "Standard Lens Diameter (22mm Inner / 38mm Outer)"
    ],
    specs: [
      { label: "Total Lenses", value: "225" },
      { label: "Spherical Lenses", value: "+32 to -32 Pairs" },
      { label: "Cylindrical Lenses", value: "+20 to -20 Pairs" },
      { label: "Prism/Accessories", value: "10 Prism / 7 Accessories" },
      { label: "Lens Mount", value: "Powder Coated Metal (Red & Black)" }
    ]
  },
  {
    id: 603,
    name: "OPHTHALL LENSIT AR-9 AUTO REF",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p43.png",
    tag: null,
    section: "shop",
    fullDescription: "The Ophthall Lensit AR-9 is a sophisticated auto refractometer contained within a simple and compact body design. It features a new flat-screen monitor with a beautiful graphics display and excellent visibility, making it a reliable tool for quick and accurate refraction measurements. For more information, contact Mr. Suren at +91-9176709051.",
    features: [
      "New flat screen monitor with beautiful graphics",
      "Excellent visibility for testing",
      "Sophisticated yet simple and compact body design",
      "Quick and accurate refraction measurements",
      "Downloadable brochure available"
    ],
    specs: [
      { label: "Contact Person", value: "Mr Suren (+91-9176709051)" }
    ]
  },
  {
    id: 604,
    name: "OPHTHALL LENSIT KR-9 AUTO REF-KERATOMETER",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p44.png",
    tag: null,
    section: "shop",
    fullDescription: "The Ophthall Lensit KR-9 combines both auto refraction and keratometry into a compact and sophisticated device. It features a high-visibility flat-screen monitor and an intuitive graphics display, ensuring ease of use for practitioners. Its sleek design saves space while maintaining high diagnostic performance. For more info, contact Mr. Suren at +91-9176709051.",
    features: [
      "Dual Function: Auto Refraction and Keratometry",
      "New flat screen monitor with high-visibility display",
      "Compact and sophisticated body design",
      "Improved data consistency for clinical diagnosis",
      "Advanced optical system for reliable results"
    ],
    specs: [
      { label: "Contact Person", value: "Mr Suren (+91-9176709051)" }
    ]
  },
  {
    id: 605,
    name: "OPHTHALL LENSIT KR-9600 AUTO REF-KERATOMETER",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p45.png",
    tag: null,
    section: "shop",
    fullDescription: "The KR-9600 is a state-of-the-art auto ref-keratometer adopting the ARM Cortex-A8 processor for ultra-fast measurements. Its advanced refraction technology enables more comprehensive image analysis and accurate results. The system automatically identifies the best measurement position for Keratometry, significantly reducing operating errors. IOL function is also available for specialized assessments.",
    features: [
      "ARM Cortex-A8 Processor for fast measurements",
      "Advanced Refraction Measurement & Image Analysis",
      "Automatic identification of best measurement position",
      "Integrated IOL function available",
      "Consistent and accurate Keratometry results",
      "Fashionable and compact architectural design"
    ],
    specs: [
      { label: "Processor", value: "ARM Cortex-A8" },
      { label: "Features", value: "IOL Function, Auto Identification" },
      { label: "Contact Person", value: "Mr Suren (+91-9176709051)" }
    ]
  },
  {
    id: 606,
    name: "OPHTHALL LENSIT RM-9600 AUTO REF",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p45.png",
    tag: null,
    section: "shop",
    fullDescription: "The OPHTHALL LENSIT RM-9600 is a high-performance auto refractometer with a fashionable and compact design. Powered by an ARM Cortex-A8 processor, it delivers ultra-fast and reliable refraction measurements. The advanced image analysis technology ensures data consistency and precision for optical assessments. Contact Mr. Suren at +91-9176709051 for inquiries.",
    features: [
      "ARM Cortex-A8 Processor for high-speed measurement",
      "Advanced refraction technology with entire image analysis",
      "Reliable measurement results with optimized data consistency",
      "Automatic identification for measurement positioning",
      "IOL function available for specialized patients",
      "Fashionable and compact body design"
    ],
    specs: [
      { label: "Processor", value: "ARM Cortex-A8" },
      { label: "Function", value: "Auto Refraction" },
      { label: "Contact Person", value: "Mr Suren (+91-9176709051)" }
    ]
  },
  { id: 425, name: "OPHTHALL VID RECORDING SYSTEM", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4.8, image: "/assets/Home/Sellingproduct/sp3.png", tag: "Rated 4.78", section: "bestselling" },
  {
    id: 607,
    name: "OPHTHALL LENSIT TL6500-B/C",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p47.png",
    images: ["/assets/Products/p47.png", "/assets/Products/p47-detail.png"],
    tag: null,
    section: "shop",
    fullDescription: "The LENSit Digital Lensmeter TL-6500B/C features a 108-point Shack-Hartmann matrix, making measurements extremely fast and accurate. It is designed to measure vertex powers and prismatic effects of spectacle and contact lenses with ease. The 7-inch tiltable color touch screen provides excellent ergonomics, while the built-in automatic printer with auto-cutter simplifies result documentation. Available in Model B (without UV) and Model C (with UV measurement).",
    features: [
      "108-point Shack-Hartmann matrix for high accuracy",
      "User-friendly 7-inch tiltable color touch screen",
      "Automatic Printer with integrated Auto Cutter",
      "Measures white lenses, sunglasses, and contact lenses",
      "Ergonomic design for daily vision care professional use",
      "Computerized apparatus for simple or multifocal lenses"
    ],
    specs: [
      { label: "Spherical Power", value: "-25D to +25D" },
      { label: "Cylindrical Power", value: "0 to ±10D" },
      { label: "Axis", value: "0 to 180°" },
      { label: "Addition Power", value: "0 to +10D" },
      { label: "Prismatic Power", value: "0 to 10Δ" },
      { label: "Pupillary Distance", value: "45 to 85mm" },
      { label: "Wavelength", value: "525 nm" },
      { label: "Power Requirement", value: "240V" }
    ]
  },
  {
    id: 608,
    name: "Ophthall Max Vision Chart",
    category: "OPTICAL PRODUCTS",
    price: "₹25,000",
    rating: 4,
    image: "/assets/Products/p49.png",
    tag: "Sale",
    section: "shop",
    fullDescription: "The Ophthall Max Vision Chart is India's only customizable vision chart that allows you to add your hospital name or image to the start screen. It is a simple, economical, and space-saving solution featuring a high-resolution 22-inch screen. Designed as per industry standards, it supports contrast sensitivity tests and multiple language options, providing a modern alternative to traditional vision charts.",
    features: [
      "Customizable First Screen with Hospital Name/Image",
      "Speedy Refraction: Smart remote with navigation keys",
      "22-inch High-Resolution HD Screen",
      "Multiple distance options (2.5m to 6m)",
      "Smart charts with Random display function",
      "Contrast Sensitivity adjustment for all charts",
      "HD Surgery Videos for patient education",
      "External USB port for loading custom media",
      "Exclusive Image gallery for various eye diseases"
    ],
    specs: [
      { label: "Screen Size", value: "22 Inches" },
      { label: "Distance Options", value: "2.5M to 6M (Precise adjustment)" },
      { label: "Audio", value: "External 3.5mm jack for output" },
      { label: "Connectivity", value: "USB Port for videos/photos" },
      { label: "Weight", value: "Lightweight with fine finish" }
    ]
  },
  {
    id: 609,
    name: "Orthoptek (A New Approach to Amblyopia)",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p62.png",
    images: ["/assets/Products/p62.png", "/assets/Products/p62-detail-1.png", "/assets/Products/p62-detail-2.png"],
    tag: null,
    section: "shop",
    fullDescription: "Orthoptek is a non-invasive instrument designed for the treatment of amblyopia (lazy eye) and related binocular disorders. Unlike traditional patching which can take over 6 months for results, Orthoptek improves stereopsis, uniocular vision, and binocular cooperation in as little as 2 to 3 weeks. It is effective for patients aged 4 to 55 years and is remarkably easy to set up, making it suitable even for young children. Esteemed users include AIIMS (New Delhi/Hyderabad), Aravind Eye Care, and Prabha Eye Clinic.",
    features: [
      "Non-invasive treatment for Amblyopia & related disorders",
      "Fast results: Improvements in 2-3 weeks (vs 6+ months for patching)",
      "Broad age range: Effective from 4 to 55 years old",
      "Improves Stereopsis, Uniocular vision, and Binocular cooperation",
      "Easy set up and operation for pediatric cases",
      "High success rate: Improving vision even where patching fails",
      "Trusted by 89+ regular users across premier eye institutes"
    ],
    specs: [
      { label: "Treatment Duration", value: "2 to 3 Weeks" },
      { label: "Age Group", value: "4 to 55 Years" },
      { label: "Clinical Proof", value: "Used by AIIMS, Aravind, Nethradhama" },
      { label: "Contact for Details", value: "WhatsApp +91-9176709051" }
    ]
  },
  {
    id: 610,
    name: "REXXAM RET-700 Toporef Keratometer",
    category: "OPTICAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p65.png",
    tag: null,
    section: "shop",
    fullDescription: "The REXXAM RET-700 is an all-in-one diagnostic solution that captures auto refraction, keratometry, and topography measurements simultaneously. It features a wide topography measurement range (0.4mm to 10.7mm) and can measure the peripheral cornea up to approximately 16.00mm. With a variety of analysis functions including CL fitting, aberration analysis, and difference maps, it provides a comprehensive assessment of ocular health on a large 10.4-inch swivel/tilt color screen.",
    features: [
      "All-in-one: Simultaneous Auto Ref, Kerato, and Topography",
      "Wide Topo Range: 0.4mm to 10.7mm (R8.0)",
      "Peripheral corneal measurement up to approx. 16.00mm",
      "Advanced Analysis: CL fitting, Aberration, Difference maps",
      "Manual Ring Edit function for difficult measurements",
      "Scotopic & Photopic Pupil Diameter measurement (SPS/PPS)",
      "10.4-inch Swivel/Tilt wide color screen",
      "Electric Chinrest for easy patient alignment",
      "Comprehensive Database for stored measurement data"
    ],
    specs: [
      { label: "Screen Size", value: "10.4 inch Color LCD" },
      { label: "Topo Range", value: "0.4mm to 10.7mm" },
      { label: "Pupil Measurement", value: "Scotopic (SPS) & Photopic (PPS)" },
      { label: "Database", value: "Built-in storage for data history" },
      { label: "Chinrest", value: "Electric with easy alignment" }
    ]
  },
  {
    id: 611,
    name: "Streak Retinoscope",
    category: "OPTICAL PRODUCTS",
    price: "₹9,500",
    rating: 4,
    image: "/assets/Products/p72.png",
    images: [
      "/assets/Products/p72.png",
      "/assets/Products/p72-detail-1.png",
      "/assets/Products/p72-detail-2.png",
      "/assets/Products/p72-detail-3.png"
    ],
    tag: null,
    section: "shop",
    fullDescription: "The Streak Retinoscope is a maintenance-free, dustproof diagnostic tool designed for precise refraction. It features a single control for vergence and rotation, ensuring comfortable operation for the user. The integrated polarization filter eliminates stray light and internal reflexes for a brighter pupil reflex, while the detachable brow rest provides increased control during examinations. For more info, WhatsApp +91-9176702051.",
    features: [
      "Dustproof & Maintenance-free design",
      "Single control for vergence and rotation",
      "Integrated polarization filter (brighter reflex)",
      "Eliminates stray light and internal reflexes",
      "Detachable brow rest for user comfort",
      "High intensity 3.5V Halogen bulb"
    ],
    specs: [
      { label: "Bulb Type", value: "3.5Volt Halogen" },
      { label: "Battery", value: "Rechargeable with Charger" },
      { label: "Price", value: "₹9,500 (Inc All)" },
      { label: "Contact", value: "WhatsApp +91-9176702051" }
    ]
  },

  // EYE HOSPITAL/CLINIC ESTABLISHMENT
  {
    id: 701,
    name: "BCC-Branding and Digital Marketing",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 5,
    image: "/assets/Products/p10.png",
    tag: "Rated 5.0",
    section: "shop",
    fullDescription: "Ophthall and BCC Healthcare Branding and Marketing have collaborated to bring ethical marketing strategies to eye care practices. This partnership helps hospitals and clinics implement professional branding and digital marketing to grow their practice to the next level. Services range from identity design to full-scale digital presence management, with multiple rate card options available to suit different budget requirements.",
    features: [
      "Website Design & Development",
      "Logo & Brand Identity Design",
      "Flyers & Patient Brochures Design",
      "Sign Board & Hospital Stationery Design",
      "Social Media Management (YouTube, Instagram, LinkedIn, Facebook)",
      "SEO Services (Search Engine Optimization)",
      "Campaign Design & Monitoring",
      "Professional Profile & Video Shoots",
      "Annual Social Media Marketing Packages",
      "Ethical Marketing Consultancy"
    ],
    reviews: [
      {
        id: 1,
        author: "Dr Vipul Arora",
        initials: "VA",
        date: "March 8, 2022",
        rating: 5,
        content: "Recently I got my hospital website made by Ophthall-Brand Care Communications. I am really happy with the outcome; it has really shaped nicely. I appreciate their methodology, working in a time-bound professional way and with utmost transparency. My special thanks to the team for their dedication."
      },
      {
        id: 2,
        author: "Dr Lalit Kumar",
        initials: "LK",
        date: "March 8, 2022",
        rating: 5,
        content: "I have taken up the Annual Social Media Marketing Package. Mr Ilias and his company are doing a very professional service in taking care of our total social media and website strategy and implementation. Would highly recommend!"
      },
      {
        id: 3,
        author: "Dr Ramesh Durairajan",
        initials: "RD",
        date: "March 8, 2022",
        rating: 5,
        content: "Our website has been designed by Ophthall BCC. We are very satisfied with the support, quality of work, and the competitive pricing they offer."
      },
      {
        id: 4,
        author: "Dr Shreyans Kothari",
        initials: "SK",
        date: "March 8, 2022",
        rating: 5,
        content: "I am totally blown away by the quality of work. Their dedication, hard work, and practical approach are evident in the website created for my firm. They are easily approachable, understand my needs, and work accordingly."
      }
    ]
  },
  {
    id: 702,
    name: "DOCBOX EMR",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p13.png",
    tag: "Special Price",
    section: "shop",
    fullDescription: "DocBox is an easy-to-use practice management platform tailored especially for healthcare professionals and medicine students. It is fully NABH compliant and offers a seamless experience across web and mobile. Special discounted pricing is available for Ophthall members. The system ensures high security with encrypted cloud storage and provides an all-in-one solution for small to large practices.",
    features: [
      "Intuitive & Customizable account interaction",
      "Easy migration from existing systems",
      "Comprehensive OPD and IPD Modules",
      "Beautifully printed custom prescriptions",
      "Secure Encrypted Cloud Storage & Sync",
      "NABH Compliant EMR System",
      "Online Appointments & Cancellations",
      "Fully Integrated Pharmacy Module",
      "Web & Mobile accessibility"
    ]
  },
  {
    id: 703,
    name: "EH NOTE OPHTHALMOLOGY EMR",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p14.png",
    images: ["/assets/Products/p14.png", "/assets/Products/p14-detail.png"],
    tag: null,
    section: "shop",
    fullDescription: "EHNOTE is an advanced speciality-based EHR system designed by doctors to simplify physician workflows. It streamlines both clinical and business processes, delivering value-based care. The patient-centric system automates time-consuming tasks to improve general work efficiency and ensures your hospital remains future-ready with expanding healthcare solutions.",
    features: [
      "Designed by Doctors, Engineered for Physicians",
      "Speciality-based Patient-Centric workflows",
      "Streamlines Clinical and Business processes",
      "Streamlined Value-based Care delivery",
      "Future-ready Healthcare solutions",
      "Automates time-consuming clinical tasks",
      "Special benefits for OBG members"
    ]
  },
  {
    id: 704,
    name: "HEALTHGRAPH EMR",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p19.png",
    tag: null,
    section: "shop",
    fullDescription: "HealthGraph is a trusted EMR partner for online clinicians, offering a comprehensive suite of modules from registration to reporting. It focuses on practice customization, data security comparable to bank lockers, and a 'click and drop down' approach to speed up daily workflows. With no upfront capital costs, it provides cost-effective digitization for modern practices.",
    features: [
      "Safe as a Bank Locker Data Security",
      "Cost-effective with no upfront capital cost",
      "Click-and-drop down approach for speed",
      "Customizable to specific practice needs",
      "Self-registration options for patients",
      "Track patient outcomes efficiently",
      "Customizable reports and analytics",
      "Comprehensive modules (ODP, IPD, OT, Pharmacy, etc.)"
    ],
    specs: [
      { label: "OFFER 1: Core", value: "Registration & Billing Module Only (Free if registered by 31st Jan)" },
      { label: "OFFER 2: Clinical", value: "All Modules (Reception to TPA/Reports) - ₹54,000 for 5 Users" }
    ]
  },
  {
    id: 705,
    name: "Infection Control Consultancy for Eye Hospital OT",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p21.png",
    tag: "Consultancy",
    section: "shop",
    fullDescription: "Top-quality infection control consultancy for Ophthalmology OTs, backed by specialists with over 3 decades of experience. Services range from initial construction phase design (OT and CSSD) to identifying gaps in existing systems for Hospitals encountering frequent infections. Delivered by certified consultants and microbiologists.",
    features: [
      "Construction Phase Design (OT & CSSD)",
      "Existing System Gap Analysis",
      "Equipment & Consumables Procurement guidance",
      "Certified Environmental Specialists & Microbiologists",
      "Mode: Online, On-Site, or Remote Monitoring",
      "Tailored to specific hospital needs"
    ]
  },
  {
    id: 706,
    name: "Management Consultancy for Eye Hospitals",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p22.png",
    tag: "Consultancy",
    section: "shop",
    fullDescription: "Comprehensive Ophthalmic Practice Management consulting providing strategy, operations, and marketing assistance worldwide. Supporting startups, single-owner practices, corporate hospitals, and medical equipment/pharma companies. Our team of experts helps optimize every facet of your clinical and business journey.",
    features: [
      "Strategic Planning & Company Formation",
      "Operations Management & Integration",
      "Marketing Assistance & Management",
      "Cost Benchmarking & Mergers/Acquisitions",
      "Institutional Ventures & Co-Management",
      "Leadership Skills & Staff Training",
      "NABH/Accreditations Guidance",
      "Practice Valuation & Succession Planning",
      "Dispute Mediation & Recruitment Guidance",
      "Medical Tourism & Bulk Purchase"
    ]
  },
  {
    id: 707,
    name: "OPERATION THEATRE DESIGNING",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p25.png",
    images: [
      "/assets/Products/p25.png",
      "/assets/Products/p25-detail-1.png",
      "/assets/Products/p25-detail-2.png",
      "/assets/Products/p25-detail-3.png",
      "/assets/Products/p25-detail-4.png",
      "/assets/Products/p25-detail-5.png",
      "/assets/Products/p25-detail-6.png",
      "/assets/Products/p25-detail-7.png",
      "/assets/Products/p25-detail-8.png"
    ],
    tag: "Consultancy",
    section: "shop",
    fullDescription: "Professional Operation Theatre designing focusing on optimal room placement and workflow. Our experts design OTs as per NABH standards, including strategic positioning of Changing Rooms, Patient Recovery, Toilets, Autoclaves, and Doctor Lounges. For more information on Professional OT Designing Charges, contact via Whatsapp: +91-9840324333.",
    features: [
      "Professional Layout & Workflow Design",
      "NABH Standards Compliance",
      "Optimized Room Placement (Recovery, CSSD, Lounges)",
      "Strategic Infrastructure planning",
      "Expert Consultation for new/renovated OTs",
      "Specialized OT Door Design & Procurement"
    ],
    specs: [
      { label: "OT ROOM DOOR", value: "46mm GPSP sheet, Honeycomb/PUFF infill, Double glazing glass, SS hardware" },
      { label: "OT ROOM SS DOOR", value: "46mm SS 304G sheet, Honeycomb/PUFF infill, Double glazing glass, SS hardware" },
      { label: "Contact for Charges", value: "Whatsapp +91-9840324333" }
    ]
  },
  {
    id: 708,
    name: "Ophthall 2022 Practice Development Conference",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p36.png",
    tag: null,
    section: "shop",
    fullDescription: "Ophthall 2022 is the fifth edition of India’s only Practice Development Conference for Ophthalmologists and Eye Hospital Managers. It offers unique insights into the business skills required to run a successful practice—subjects rarely taught in medical colleges. The conference follows an 'unconference' format with TED-style talks, fireside chats, and round tables to take your practice to the next level.",
    features: [
      "TED Talk like sessions",
      "Interactive Panel Discussions",
      "Fireside Chats & Round Table sessions",
      "Unconference format breaking traditional barriers",
      "Mentorship & Investment Networking",
      "Special partner events: India Ophthalmology/Optical Expo",
      "Special negotiated prices for Equipment & Consumables"
    ],
    specs: [
      { label: "Date", value: "July 16-17, 2022" },
      { label: "Venue", value: "Chennai Trade Centre, Chennai" },
      { label: "Registration Link", value: "https://www.ophthall.in/registation/delegate" }
    ]
  },
  {
    id: 709,
    name: "Ophthalmic Equipment Purchase Consultancy",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p60.png",
    tag: null,
    section: "shop",
    fullDescription: "Outsource your equipment purchase to our team of experts. We support you through the entire process—from identifying the right equipment and dealers to negotiating the best possible price. Our service helps new and existing setups save lakhs of rupees and significant time by handling complex vendor negotiations and technical comparisons.",
    features: [
      "Purchase Consultancy for all Ophthalmology Equipments",
      "Support for Multiple Equipment Packages",
      "Expert Negotiation with Vendors",
      "Identification of Genuine Dealers & Correct Pricing",
      "Significant Cost Savings (Lakhs of Rupees)",
      "Technical Comparison & Evaluation Support"
    ]
  },
  {
    id: 710,
    name: "OPTICAL STORE DESIGNING / CONSULTANCY SERVICE",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p61.png",
    tag: null,
    section: "shop",
    fullDescription: "A-Z services for Optical Store Designing and Consulting in your hospital. With experience in more than 100 projects across India, we help you design optical showrooms as per international standards. Our team handles everything from initial space planning and 3D design to interiors execution support and frames/lenses procurement.",
    features: [
      "International Standard Showroom Design",
      "Detailed Space Planning",
      "Optimized Optical Shop Layouts",
      "Professional 3D Design visualization",
      "Interiors Execution Support",
      "Frames & Lenses Procurement Assistance",
      "Experience of over 100 successful projects"
    ]
  },
  {
    id: 711,
    name: "PALM POWER MEDICUS OPHTHALMOLOGY EMR",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p63.png",
    images: [
      "/assets/Products/p63.png",
      "/assets/Products/p63-detail-1.png",
      "/assets/Products/p63-detail-2.png",
      "/assets/Products/p63-detail-3.png",
      "/assets/Products/p63-detail-4.png"
    ],
    tag: "OBG Special",
    section: "shop",
    fullDescription: "PalmPower Medicus is a trustworthy and flexible patient relationship management platform designed by doctors, for doctors. It helps increase hospital revenue, improve patient engagement, and automate daily clinical tasks. The platform is designed to scale with your practice while delivering a high level of patient satisfaction and better care coordination.",
    features: [
      "Designed by Doctors for Doctors",
      "Flexible Patient Relationship Management",
      "Integrated Revenue & Engagement tools",
      "Clinical Task Automation",
      "Secure and Scalable architecture",
      "Improved Patient Satisfaction focus"
    ],
    specs: [
      { label: "OBG Member Pricing", value: "₹2400 / Month (Single Doctor Hospital)" },
      { label: "Systems Limit", value: "Unlimited (Irrespective of no. of systems)" },
      { label: "Website", value: "www.palmpower.in" }
    ]
  },
  {
    id: 712,
    name: "Yarrago- Ophthalmology EMR",
    category: "EYE HOSPITAL/CLINIC ESTABLISHMENT",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p75.png",
    tag: null,
    section: "shop",
    fullDescription: "YaraGo is a comprehensive Digital Transformation platform for hospitals, integrating Electronic Medical Records (EMR), Supply Chain Management (SCM), and Insurance/TPA claims. It features seamless interfacing with ophthalmic equipment and third-party software like Tally and SAP. With implementations across 300+ eye clinics and large corporate chains in 20 Indian states, YaraGo is building the future of eye care with AI-driven image recognition and predictive analytics.",
    features: [
      "Integrated Suite (Patient Reg to Discharge, Labs, Pharmacy)",
      "Unique One Page EMR for efficient doctor interaction",
      "Supply Chain Management (SCM) for retail and surgery",
      "NABH Compliant with consolidated best practices",
      "Decision Support System & Patient Tracking via Mobile",
      "Specialized analysis for Retina, Cataract, Glaucoma, etc.",
      "Comprehensive Management Dashboards (CSR, DCR, Revenue)",
      "Interoperable communication across hospital departments",
      "AI Roadmap for predictive analytics and image recognition"
    ],
    specs: [
      { label: "Implementation", value: "300+ Eye Clinics / 20 States in India" },
      { label: "Integrations", value: "Tally, CRM, SAP, Oracle, Image Integration" },
      { label: "Modules", value: "IOL Software, LAB, Pharmacy, Optical Retail" }
    ]
  },

  // GENERAL PRODUCTS
  {
    id: 801,
    name: "Ophthall LED External Light Source For Surgical Microscopes",
    category: "GENERAL PRODUCTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p42.png",
    images: ["/assets/Products/p42.png", "/assets/Products/p42-detail.png"],
    tag: null,
    section: "shop",
    fullDescription: "External LED Light Source for Surgical Microscopes. This high-brightness source is comparable to traditional 300W xenon sources but with significantly longer life (>50,000 hrs). It can be used as a backup light in case of bulb failure, for external illumination during corneal and other ocular surgeries, or to convert halogen-based microscopes to LED technology. The system achieve significant energy savings (over 50%) and is environmentally friendly with forced air cooling and over-temperature protection.",
    features: [
      "LED cool light",
      "Super long life > 50,000 hrs",
      "Maintenance Free",
      "Energy efficient (save > 50%)",
      "Compact and friendly design",
      "No UV or IR emission"
    ],
    specs: [
      { label: "Light spectral", value: "Visible light only" },
      { label: "Light Colour Temperature", value: "6000K (Sunlight)" },
      { label: "Power Supply", value: "90-270VAC (50/60Hz)" },
      { label: "Power Consumption", value: "180W" },
      { label: "Refrigeration", value: "Forced Air Cooling" },
      { label: "Over Temperature Protection", value: "Automatic LED System power cut" },
      { label: "Dimmer", value: "Electronic, 1% – 100%" },
      { label: "Dimensions", value: "310*250*110 mm" },
      { label: "Weight", value: "3.7 Kg" }
    ]
  },
  {
    id: 802,
    name: "SPANDAN PRO – POCKET ECG",
    category: "GENERAL PRODUCTS",
    price: "₹17,000",
    rating: 4,
    image: "/assets/Products/p70.png",
    images: [
      "/assets/Products/p70.png",
      "/assets/Products/p70-detail-1.jpg",
      "/assets/Products/p70-detail-2.png",
      "/assets/Products/p70-detail-3.png",
      "/assets/Products/p70-detail-4.png"
    ],
    tag: "Sale",
    section: "shop",
    fullDescription: "Spandan Pro is a specially designed 12-lead ECG system for cardiologists, general practitioners, and healthcare professionals. It captures high-quality 12-lead ECGs using just 10 leads via the Goldberger ECG system. With 99.7% accuracy, it offers precise cardiac diagnosis in a compact pocket design. Featuring direct smartphone connectivity and auto-switching leads, it allows healthcare professionals to perform ECGs anywhere, from clinics to remote patient visits.",
    features: [
      "12-Lead ECG with only 10 leads",
      "Goldberger ECG system technology",
      "99.7% Accuracy",
      "Direct Smartphone connectivity",
      "Compact pocket-sized design",
      "Auto-switching leads for ease of use"
    ]
  },

  // STERILIZATION/DISINFECTION
  {
    id: 901,
    name: "Ophthall Medister Auto Fogger",
    category: "STERILIZATION/DISINFECTION",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p50.png",
    tag: null,
    section: "shop",
    fullDescription: "ULV Fogger is used to disinfect the atmosphere in O.T. using water based disinfectants. It gives micron size particle mist there by allowing the fog to reach each and every corner.",
    features: [
      "Portable Design",
      "Controlled particles size 2-40 microns",
      "Corrosion resistant aluminium body",
      "Low power consumption and more area coverage",
      "Area covered upto 10,000 cu.fit."
    ]
  },
  {
    id: 902,
    name: "Ophthall-ETO Steriliser",
    category: "STERILIZATION/DISINFECTION",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p59.png",
    tag: null,
    section: "shop",
    fullDescription: "ETO STERILIZER with SS 304/316 rectangular chamber and pipeline. It features a digital PID controller, oil-free compressor, and single-point locking door system. Operates in manual or automatic modes with gas purging via puncture system or cylinder. The entire cycle runs under negative atmosphere for total hazardous-free operation, with working temperatures of 37°C or 55°C.",
    specs: [
      { label: "Operating Temperature", value: "37°C & 55°C" },
      { label: "Model ETO 54", value: "300x300x600 mm, 54 Ltr, 1.5 Kw" },
      { label: "Model ETO 100", value: "300x300x1200 mm, 108 Ltr, 2.5 Kw" },
      { label: "Model ETO 200", value: "400x400x1200 mm, 192 Ltr, 3 Kw" },
      { label: "Model ETO 250", value: "450x450x1200 mm, 243 Ltr, 4 Kw" },
      { label: "Chamber Material", value: "SS 304 / 316" },
      { label: "Operating Voltage", value: "230V / 50Hz" }
    ]
  },
  {
    id: 903,
    name: "Ophthall Medister Dehumidifier",
    category: "STERILIZATION/DISINFECTION",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p52.png",
    tag: null,
    section: "shop",
    fullDescription: "World Class DEHUMIDIFIER from White WestingHouse USA Model WDE-205 (Available sizes 16ltrs & 20ltrs)",
    specs: [
      { label: "Rated voltage/Frequency", value: "220-240V/50Hz" },
      { label: "Moisture removal", value: "12L/D (27℃/60％RH) 20L/D (30℃/80%RH)" },
      { label: "Rated input", value: "380W" },
      { label: "Refrigerant gas", value: "R-410a" },
      { label: "Timer", value: "24h count-down" },
      { label: "Fan speed", value: "2" },
      { label: "Full/Tank capacity(l)", value: "4.2L/5.4L" },
      { label: "Visible water level", value: "No" },
      { label: "Adjustable humidistat", value: "Yes" },
      { label: "Hygrometer/Thermometer", value: "Yes" },
      { label: "Anti dust filter", value: "Yes" },
      { label: "Continuous drainage", value: "Yes" },
      { label: "Electronic anti-defrost device", value: "Yes" },
      { label: "Working temperature", value: "5°C-32°C" },
      { label: "Unit dimension (W*D*H) in mm", value: "390*274*612" }
    ]
  },
  {
    id: 904,
    name: "Ophthall Medister Fully Automatic ETO",
    category: "STERILIZATION/DISINFECTION",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p53.png",
    tag: null,
    section: "shop",
    fullDescription: "Ophthall Medister Fully Automatic ETO features a compact design that saves space, with both automatic and manual design options available. It includes process lamp indicators and alarms for monitoring, and an inbuilt aerator for economy and safety. This dual-model system can use both cartridges and gas cylinders, ensuring flexibility in operation. It also features a safe and easy-to-operate door lock. Custom models for cath-labs and CSSD are also available.",
    features: [
      "Compact design saves space",
      "Automatic and manual design available",
      "Process lamp indicators and alarms",
      "Inbuilt aerater - economy and safety",
      "Dual model - can use cartridges and gas cylinder",
      "Safe and easy to operator door lock",
      "Custom models for cath-labs and CSSD available"
    ],
    specs: [
      { label: "Optional Accessories", value: "EO Gas Cartridges, EO Gas Integrators, Sealer Machine, Sterilization Peel Pouches & reels, EO Gas Indicator Tape, Biological Indicators" },
      { label: "For Booking (Whatsapp)", value: "+91-8754517944 / +91-9176702051" }
    ]
  },
  {
    id: 905,
    name: "Ophthall Medister Plasma Sterilizer",
    category: "STERILIZATION/DISINFECTION",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p54.png",
    images: ["/assets/Products/p54.png", "/assets/Products/p54-detail.png"],
    tag: null,
    section: "shop",
    fullDescription: "Ophthall Medister Plasma Sterilizers (HPS Series) are a safe, fast, and eco-friendly alternative to EO gas and formalin sterilization. They complete the process within a minimum of 28-45 minutes, with no residual toxic gases (only water and oxygen by-products). Instruments can be used immediately after sterilization. These systems feature an aluminum alloy chamber for perfect heat transfer, an intuitive touch monitor, and a preheating system to ensure consistent results by removing moisture. Ideal for heat and moisture-sensitive medical instruments.",
    features: [
      "Safe alternative to EO gas & Formalin",
      "Fast processing (30 to 45 mins)",
      "Eco-friendly (Residuals are only water & oxygen)",
      "Instruments usable immediately after sterilization",
      "Aluminum alloy chamber for perfect sterilization",
      "User-friendly Touch Monitor interface",
      "Preheating system for stability and moisture removal",
      "Simple installation (AC220V, no exhaust/drain required)"
    ],
    specs: [
      { label: "Available Sizes", value: "25L (HPS-25L), 35L (HPS-35L), 50L (HPS-50L), 80L (HPS-80L)" },
      { label: "Sterilization Time", value: "Min 28 minutes (min 30-45 min typical)" },
      { label: "Power Supply", value: "AC 220V" },
      { label: "Material", value: "Aluminum Alloy Chamber" },
      { label: "For Booking (Whatsapp)", value: "+91-9176702051 / +91-8754517944" }
    ]
  },
  { id: 906, name: "MEGATRON S4 HPS – GEUDER", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p28.png", tag: null, section: "shop" },
  { id: 907, name: "Meridian 532 nm Green Laser", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p29.png", tag: null, section: "shop" },
  { id: 908, name: "Meridian Nd:YAG Laser", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p30.png", tag: null, section: "shop" },
  { id: 909, name: "Ophthall Delight Zoom Microscope", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p38.png", tag: null, section: "shop" },
  { id: 910, name: "Ophthall Digital LED Near Vision Chart", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Products/p39.png", tag: null, section: "shop" },
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
  // PRE-OWNED
  {
    id: 426,
    name: "Compact Intuitive Phaco Machine",
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    name: "J&J Intuitive Phaco",
    category: "PRE-OWNED",
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
  { id: 511, name: "Oertli CR3 with SPEEP Phaco Machine", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp1.jpg", tag: "Rated 4.0", section: "bestselling" },
  { id: 417, name: "Ophthall Clear View Slitlamp Imaging System", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4, image: "/assets/Home/Sellingproduct/sp2.jpeg", tag: null, section: "bestselling" },
  { id: 425, name: "OPHTHALL VID RECORDING SYSTEM", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 4.8, image: "/assets/Home/Sellingproduct/sp3.png", tag: "Rated 4.78", section: "bestselling" },
  { id: 517, name: "OPHTHALL-SURGICAL MICROSCOPE", category: "DIAGNOSTIC/SURGICAL EQUIPMENTS", price: "Enquire", rating: 5, image: "/assets/Home/Sellingproduct/sp4.png", tag: "Rated 5.0", section: "bestselling" }
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
    name: "Compact Intuitive Phaco Machine",
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    category: "PRE-OWNED",
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
    name: "J&J Intuitive Phaco",
    category: "PRE-OWNED",
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
    quote: "Ophthall is the best microscope what you can afford at the best price. It's optics and depth perception are at par to a branded microscope making it a superb value for...",
    name: "Dr Anurag Shandil",
    title: "Narayana Nethradhama Superspeciality Eye...",
    image: "/assets/Home/Testimonal/testimonal4.png"
  }
];
