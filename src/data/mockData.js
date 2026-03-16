export const CATEGORIES = [
  { id: 1,
 name: "DIAGNOSTIC/SURGICAL EQUIPMENTS", icon: "Activity", image: "/assets/Home/cat1.png" },
  { id: 2,
 name: "DISPOSABLES", icon: "Stethoscope", image: "/assets/Home/cat2.png" },
  { id: 3,
 name: "SURGICAL INSTRUMENTS", icon: "Settings", image: "/assets/Home/cat3.png" },
  { id: 4,
 name: "OPTICAL PRODUCTS", icon: "Eye", image: "/assets/Home/cat4.png" },
  { id: 5,
 name: "EYE HOSPITAL/CLINIC ESTABLISHMENT", icon: "Briefcase", image: "/assets/Home/cat5.png" },
  { id: 6,
 name: "GENERAL PRODUCTS", icon: "CheckCircle", image: "/assets/Home/cat6.png" },
  { id: 7,
 name: "STERILIZATION/DISINFECTION", icon: "Shield", image: "/assets/Home/cat6.png" },
  { id: 8,
 name: "PRE-OWNED", icon: "Package", image: "/assets/Home/Collection/collection3.png" }
];

export const HOME_CATEGORIES = [
  { id: 1,
 name: "Diagnostic / Surgical Equipments / Instruments", image: "/assets/Home/Collection/collection1.png" },
  { id: 2,
 name: "Consumables/ Disposables", image: "/assets/Home/Collection/collection2.png" },
  { id: 3,
 name: "PRE-OWNED", image: "/assets/Home/Collection/collection3.png" },
  { id: 4,
 name: "Optical Products", image: "/assets/Home/Collection/collection4.png" },
  { id: 5,
 name: "Eye Hospital/ Clinic Establishment", image: "/assets/Home/Collection/collection5.png" },
  { id: 6,
 name: "General Products", image: "/assets/Home/Collection/collection6.png" }
];

export const PRODUCTS = [
  // DIAGNOSTIC/SURGICAL EQUIPMENTS
  {
    id: 401,
    isSoldOut: false,
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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
  {
    id: 410,
    isSoldOut: false,

    name: "Eye Light Espansione Dry Eye Treatment System",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 5,
    image: "/assets/Products/p17.png",
    tag: "Rated 5.0",
    section: "shop",
    youtubeUrl: "https://www.youtube.com/embed/JNWlwa-gmCo?si=ebR7QU7vqoCNdclq",
    fullDescription: "Eye Light – Meibomian Gland Dysfunction Treatment Device\n\nIntense Pulsed Light (IPL) is an insufficient technology for the treatment of the Meibomian Glands Dysfunction (MGD). Following years of research, Espansione Group has developed an innovative device for the treatment of MGD, and other related pathologies, that is radically different from existing treatments.\n\nEye Light Resolves the IPL Limitations\n\nThe IPL can be only applied to the lower eyelids. This implies that the Meibomian Glands located in the upper eyelid could not be treated.\n\nThanks to our combined therapy and our innovative design, the treatment of both, upper and lower meibomian glands is now possible. In addition, Eye-light allows us to treat other frequent related pathologies, such as chalazion, stye, blepharitis, post-blepharoplasty, demodex and dry eye caused by refractive and cataract surgery.\n\nOPE/IPL and Light Modulation/LLLT Eyelight offers complete treatment to all MGD cases through 2 patented technologies as Light Modulation/ LLLT and OPE/IPL.\n\nOphthall Buying Group – Special Price and EMI Offers Please get in touch",
    features: [
      "Fully Automated",
      "Easy to use.",
      "Treat both Eyelids directly and indirectly.",
      "Comfortable and Convenient to patients and operator.",
      "No Gel or Anesthesia required.",
      "Very effective with immediate comfort.",
      "Highly affordable treatment cost."
    ],
    reviews: [
      {
        id: 1,

        author: "Verified Customer",
        initials: "VC",
        date: "March 9, 2024",
        rating: 5,
        content: "Excellent device for MGD treatment. Highly recommended."
      }
    ],
    specs: [
      { label: "Technology", value: "OPE/IPL and Light Modulation/LLLT" },
      { label: "Automation", value: "Fully Automated" },
      { label: "Application", value: "Direct & Indirect Treatment for both Eyelids" },
      { label: "Pathologies Treated", value: "MGD, Chalazion, Stye, Blepharitis, Demodex, Dry Eye" },
      { label: "Anesthesia", value: "None Required" },
      { label: "Gel Requirement", value: "None Required" }
    ]
  },
  { id: 411,
    isSoldOut: false,
 name: "eyevis Motorized Table", category: "GENERAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p18.png", tag: null, section: "shop" },
  { id: 412,
    isSoldOut: false,
 name: "I Optik CV 7800 – Wireles Auto Phoropter", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p20.png", tag: null, section: "shop" },
  {
    id: 413,
    isSoldOut: false,

    name: "Me Check MGD- Screening System",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p23.png",
    tag: null,
    section: "shop",
    youtubeUrl: "https://www.youtube.com/embed/G1Yb_DFRI6A?si=6P_h73JIgmpsQx80",
    fullDescription: "Me Check is a Meibomian gland dysfunction screening Device. Me Check classifies MGD patients on scale 0 to 4 in the range-Normal, Mild, Moderate, Severe and Very Severe MGD. It takes High Definition IR image followed by functional analysis through a brief questionnaire.\n\nDescription:\nMe Check is a Meibomian gland dysfunction screening Device. Me Check classifies MGD patients on scale 0 to 4 in the range-Normal, Mild, Moderate, Severe and Very Severe MGD. It takes High Definition IR image followed by functional analysis through a brief questionnaire.",
    features: [
      "Quick 3 minute screening test while patient is waiting for you.",
      "Easy to use.",
      "Affordable.",
      "Easily integrated into practice."
    ],
    specs: [
      { label: "Scale", value: "0 to 4 (Normal, Mild, Moderate, Severe and Very Severe)" },
      { label: "Imaging", value: "High Definition IR image" },
      { label: "Analysis", value: "Functional analysis through a brief questionnaire" },
      { label: "Classification", value: "MGD Screening" }
    ]
  },
  {
    id: 414,
    isSoldOut: false,

    name: "MEDIWORKS ANTERIOR SEGMENT ANALYZER SCANSYS TA 517",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/mediaworks-anterior-img1.png",
    tag: null,
    section: "shop",
    pdfUrl: "https://1drv.ms/b/s!AhfqFC9cJSdye6qrijCVwWRUOeQ",
    images: [
      "/assets/Products/mediaworks-anterior-img1.png",
      "/assets/Products/mediaworks-anterior-img2.png",
    ],
    fullDescription: "Scansys Anterior Segment Analyzer\n\nScansys provides a professional solution for anterior segment diagnosis. It applies Scheimpflug camera which can collect 107520/230400 data points and generates 28/60 cornea tomography images in high resolution. Scansys can provide a series of topography maps including cornea curvature maps, cornea thickness maps, cornea elevation maps, etc.\n\nClinical Applications:\n\n◉ Keratoconus Diagnosis: Scansys can provide the prevalence of Keratoconus by using the AI algorithm. Further checking the topographic maps to accurately analyze and diagnose the keratoconus.\n\n◉ Refractive surgery: Total cornea aberration guides surgeons to evaluate preoperative and postoperative visual quality to ensure patients of best surgery effect.\n\n◉ IOL Optimization: Specially designed for cataract surgery. It supports clinicians to choose suitable Toric IOL, Aspheric IOL or Multifocal IOL for patients.\n\n◉ ICL Surgery Examination: Scansys supports in different angles to collect a high-resolution picture. It also provides White to White, AC depth for ICL surgery. AI intelligence recommends the diameter of the ICL crystal and gives elevation of the arch.",
    features: [
      "AI Keratoconus Diagnosis (Prevalence 0% - 100%)",
      "IOL Optimization for Cataract Surgery",
      "Zernike Aberration Analysis",
      "Lens Fitting Simulation",
      "Chamber Angle Analysis for Glaucoma",
      "ICL Surgery Examination with Diameter Recommendation",
      "Selectable 4 Maps View",
      "Corneal Form Factor Analysis (Ecc, E, Q, P)",
      "Lens Density Analysis for Cataract Diagnosis"
    ],
    specs: [
      { label: "Technology", value: "Scheimpflug Camera" },
      { label: "Data Points", value: "107,520 / 230,400" },
      { label: "Cornea Tomography", value: "28 / 60 Images in high resolution" },
      { label: "Parameters", value: "K1, K2, Km, Astig, AC Depth, WTW, Volume" },
      { label: "Diagnosis Support", value: "AI Keratoconus, IOL Optimization, ICL, Glaucoma" }
    ]
  },
  {
    id: 415,
    isSoldOut: false,

    name: "MEDIWORKS DIGITAL SLITLAMP WITH DRY EYE DIAGNOSTIC SYSTEM",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/mediaworks-digital-img1.png",
    tag: null,
    section: "shop",
    pdfUrl: "https://1drv.ms/b/s!AhfqFC9cJSdyfLua26y7J20jkqk",
    images: [
      "/assets/Products/mediaworks-digital-img1.png",
      "/assets/Products/mediaworks-digital-img2.png",
      "/assets/Products/mediaworks-digital-img3.png",
    ],
    fullDescription: "Dry Eye Diagnostic System\n\nAs an excellent dry eye device, our dry eye diagnostic system enhances accurate diagnoses and earlier intervention, providing guidance for customized treatment. It serves as a platform for comprehensive Ocular Surface Examination including Dry eye diagnosis, Anterior Segment Photography, Lens fitting, Patient management, and Telemedicine.\n\nThe system offers guided examination, providing a comprehensive report covering 7 dry eye diagnoses. It features non-invasive examination with quantitative data output. The full-automatic Firefly digital module ensures easy operation without complex parameter settings. High-quality optics and a built-in yellow filter efficiently increase the accuracy of lens fitting.",
    features: [
      "Guided examination with comprehensive 7-point dry eye report",
      "Non-invasive examination with quantitative data",
      "Full-automatic Firefly digital module",
      "High quality optics with built-in yellow filter",
      "Smart patient management system (DICOM supported)",
      "Supports Telemedicine and Lens fitting analysis"
    ],
    specs: [
      { label: "Sensor", value: "Professional 1/1.8-inch sensor" },
      { label: "Pixel Size", value: "2.4μm" },
      { label: "Module", value: "Full-automatic Firefly digital module" },
      { label: "Storage", value: "Real-time playing and storage" },
      { label: "Integration", value: "DICOM supported" },
      { label: "Examinations", value: "7 Dry Eye Diagnoses, Anterior Segment Photography" }
    ]
  },
  {
    id: 416,
    isSoldOut: false,

    name: "MEDIWORKS S390L (FIREFLY WDR) SLIT LAMP MICROSCOPE",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p26.png",
    tag: null,
    section: "shop",
    pdfUrl: "https://1drv.ms/b/s!AhfqFC9cJSdyfYbVwIk9ek_wKYo",
    fullDescription: "MEDIWORKS S390L (FIREFLY WDR) SLIT LAMP MICROSCOPE\n\nSimple Design + Simple Operation: The design of the ophthalmic slit lamp S390L(Firefly WDR) was inspired by the shape of the firefly. The smart design largely saves space for clinicians compared to other bulky camera systems. We have preset many camera parameters so the user does not need to adjust settings before using the device. The user can operate the machine immediately once the installation has been finished.\n\nThe device features a wide range of automatic functions including Auto Exposure, Auto Gain, Auto White Balance, and Auto OS/OD Indicator. It includes a high-definition optical system with resolution up to 200 lp/mm, a built-in yellow filter for enhanced contrast, and a unique infrared light source module for Meibomian gland examination. It also supports DICOM for easy integration into hospital medical systems.",
    features: [
      "HD Optical System (up to 200 lp/mm)",
      "Built-in Yellow Filter for enhanced contrast",
      "Meibomian Glands Infrared Observation",
      "Wide Dynamic Range (WDR) Imaging",
      "Auto Exposure, Gain, and White Balance",
      "Orthokeratology Lens Fitting Assistance",
      "DICOM Support for hospital systems",
      "Tear Film Break-up Time & Tear Meniscus Height Analysis",
      "Red Eyes Analysis and Keratopathy Exposure"
    ],
    specs: [
      { label: "Optical Resolution", value: "200 lp/mm" },
      { label: "Filters", value: "Built-in Yellow Filter" },
      { label: "Light Source", value: "LED + Infrared Module" },
      { label: "Imaging Mode", value: "Wide Dynamic Range (WDR)" },
      { label: "Software", value: "Mediview (Patient Management & DICOM)" },
      { label: "Automatic Functions", value: "Exposure, Gain, White Balance, OS/OD Indicator" }
    ]
  },
  {
    id: 417,
    isSoldOut: false,

    name: "Ophthall Clear View Slitlamp Imaging System",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/clearview-slitlamp-img1.png",
    tag: null,
    section: "bestselling",
    images: [
      "/assets/Products/clearview-slitlamp-img1.png",
      "/assets/Products/clearview-slitlamp-img2.png",
      "/assets/Products/clearview-slitlamp-img3.png",
      "/assets/Products/clearview-slitlamp-img4.png",
      "/assets/Products/clearview-slitlamp-img5.png",
      "/assets/Products/clearview-slitlamp-img6.png",
      "/assets/Products/clearview-slitlamp-img7.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/ZWznXHhEnyg?si=4PQxdhkcLYhhItrw",
    fullDescription: "Ophthall Clear View Slit Lamp Imaging system is an innovative product to help improve your diagnostics and patient satisfaction. Imaging system is a good tool to demonstrate to the patients and their attenders the actual pathology and this helps in improved conversions and patient Care.\n\nOphthall Clear View Imaging system is customizable for any brand of 3 or 5 step slit lamp and is a very simple do it yourself self-installation product.\n\nVISIT OPHTHALL IMAGING PAGE FOR DETAILED INFORMATION: https://imagingsystems.ophthallmart.com/",
    features: [
      "Customizable for any brand of 3 or 5 step slit lamp",
      "Simple do it yourself (DIY) self-installation",
      "Superior Grade 80:20 Ophthall Beam Splitter (less light loss, zero observer strain)",
      "4K top Quality HDMI Camera (12.3 Megapixels 1/2.3 Inch CMOS Sensor)",
      "Raspberry pi Inbuilt 1.8 GHZ quadcore 2GB Ram processor (No external PC needed)",
      "32 GB Memory Card included",
      "Bluetooth Click Type Joystick for seamless image capture",
      "Multifunctional customized Imaging software for report generation"
    ],
    reviews: [
      {
        id: 1,

        author: "Dr Lalit Kumar",
        initials: "LK",
        date: "March 9, 2024",
        rating: 5,
        content: "One of the best innovative products launched by Ophthall, has made my work easier by demonstrating to pre op patients to convince them for procedures and post op patients to show them the good outcomes of surgery- very valuable tool for every Ophthalmologist- very economical too- Congratulations to team Ophthall",
        location: "Amrit Eye Hospital Sowcarpet – Chennai"
      }
    ]
  },


  // DISPOSABLES

  // SURGICAL INSTRUMENTS
  {
    id: 511,
    isSoldOut: false,

    name: "Oertli CR3 with SPEEP Phaco Machine",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/oertli-cr3-img1.png",
    tag: "Rated 4.0",
    section: "bestselling",
    images: [
      "/assets/Products/oertli-cr3-img1.png",
      "/assets/Products/oertli-cr3-img2.png",
      "/assets/Products/oertli-cr3-img3.png",
      "/assets/Products/oertli-cr3-img4.png",
      "/assets/Products/oertli-cr3-img5.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/BHgGw7vr17I?si=cHkOhVcDWphVpQ82",
    fullDescription: "Oertli CR3 with SPEEP Phaco Machine\n\nThe Oertli surgical platform CataRhex 3 impressively demonstrates that great platforms can sometimes be very small. With hitherto unachieved compactness and a lightweight of five kilogrammes, the CataRhex 3 device is consistently geared to mobility and portability – without making any compromises on performance.\n\nThe CataRhex 3 is newly featured with the unique SPEEP pump, which provides even more flexibility and control. easyPhaco technology ensures safe and efficient emulsification. Oertli makes The Eye Surgery Easier, Safer and more Efficient. Oertli has become one of the highest selling Phaco machine and Vitrectomy machine selling brand in India.\n\nThanks to the HF capsulotomy tip, capsulorhexis has become incredibly easy. In the I/A mode, the SPEEP pump ensures even greater safety. A compressor has been integrated for anterior vitrectomy, and in glaucoma surgery, the HFDS application ensures excellent long-term results.\n\nCataRhex 3 ® with the incorporation of SPEEP is now Smallest Phaco Emulsificaion System with 2 Pumps. With The easyPhaco ® technology that gives highest chamber stability and stress free surgical environment for the surgeon.\n\nPurchase the CR3 with SPEEP through the Ophthall Buying Group to get the best price advantage",
    features: [
      "Third generation CataRhex family with 15 years research",
      "Programming capacity for 20 different surgeons",
      "Compact and Lightweight (5kg) for perfect portability",
      "Ultra-fast boot time (ready in 5 seconds)",
      "Unique SPEEP Mode for simultaneous Flow and Vacuum control",
      "easyPhaco® technology for highest chamber stability",
      "HF capsulotomy tip for easy capsulorhexis",
      "Integrated compressor for anterior vitrectomy",
      "Universal voltage compatibility (100-240V)"
    ],
    specs: [
      { label: "Manufacturer", value: "Oertli (Swiss Made)" },
      { label: "Pump Type", value: "Unique SPEEP Pump (2 Pumps)" },
      { label: "Weight", value: "5 kg" },
      { label: "Ready Time", value: "5 Seconds" },
      { label: "Surgeon Memory", value: "20 Profiles" },
      { label: "Phaco Technology", value: "easyPhaco®" },
      { label: "Voltage", value: "100-240 V" }
    ],
    reviews: [
      {
        id: 1,

        author: "Dr. Kshijit Shukul",
        initials: "KS",
        date: "December 21, 2024",
        rating: 4,
        content: "Recently Installed Oertli Catarhex 3 phaco machine. Thanks Dr Senthil and the entire Ophthall team for helping me in procuring the machine. It is a real boon for all beginners and small practioners.",
        location: "Lucknow"
      },
      {
        id: 2,

        author: "Dr Rashmeet Arora Nakra",
        initials: "RA",
        date: "December 26, 2024",
        rating: 4,
        content: "It was really easy and the prices were better than the market in Ophthall Buying Group. Thank you for making the group and helping us with the process for Oertli CR 3 Speep. I recommend it to all new doctors who want to buy phaco machines",
        location: "City Clinic Eye Centre, Aligarh"
      }
    ]
  },
  {
    id: 517,
    isSoldOut: false,

    name: "OPHTHALL-SURGICAL MICROSCOPE",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 5,
    image: "/assets/Home/Sellingproduct/sp4.png",
    tag: "Rated 5.0",
    section: "bestselling",
    images: [
      "/assets/Home/Sellingproduct/sp4.png",
      "/assets/Products/surgical-microscope-img1.png",
      "/assets/Products/surgical-microscope-img2.png",
      "/assets/Products/surgical-microscope-img3.png",

    ],
    fullDescription: "Ophthalmic Surgical Microscopes was born out of the need for a Top Quality Yet Affordable Microscope for the Indian Ophthalmologist. These microscopes come in various models and are made in India with Imported Optics. Now Every Ophthalmologist in India can Own a Surgical Microscope and start his own OT. These microscopes are exclusively manufactured for Ophthall by experts with more than 30+ Years Experience in Surgical Microscope Manufacturing Technologies.\n\nNow everyone can Own One",
    features: [
      "Sleek and compact Design Occupying Less Space in your Operation Theater",
      "Imported Top Quality Optics",
      "40000+ Working Hours Yellow LED Light Source",
      "Make in India Product - Designed by Ophthalmologists for Ophthalmologists",
      "Product of Ophthall Practice Development",
      "300+ Satisfied Customers all over India",
      "Most Economical and Best in Quality Microscope in India",
      "Accessories: Camera Attachment with Monitor, Red Glo Enhancer",
      "Ophthal Pro- Combo: Available for both Ophthal and ENT surgeries"
    ],
    specs: [
      { label: "Model", value: "Ophthall Pro" },
      { label: "Experience", value: "30+ Years in Manufacturing" },
      { label: "Optics", value: "Imported Top Quality" },
      { label: "Light Source", value: "Yellow LED (40000+ Working Hours)" },
      { label: "Origin", value: "Made in India" },
      { label: "Customers", value: "300+ All Over India" },
      { label: "Design", value: "Sleek & Compact" }
    ]
  },
  {
    id: 550,
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
   {
    id: 425,
    isSoldOut: false,

    name: "OPHTHALL VID RECORDING SYSTEM",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4.8,
    image: "/assets/Home/Sellingproduct/sp3.png",
    tag: "Rated 4.78",
    section: "bestselling",
    images:[
      "/assets/Home/Sellingproduct/sp3.png",
      "/assets/Products/vid-recording-img2.png",
      "/assets/Products/vid-recording-img3.png",
      "/assets/Products/vid-recording-img4.png",
      "/assets/Products/vid-recording-img5.png",
      "/assets/Products/vid-recording-img6.png",
      "/assets/Products/vid-recording-img7.png",
      "/assets/Products/vid-recording-img8.png",
      "/assets/Products/vid-recording-img9.png",
      "/assets/Products/vid-recording-img10.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/s8bbWNPZtrM?si=oirH67tnaRZ3396U",
    fullDescription: "Ophthall Vid Surgical Recording system is the best in class recording system available for any kind of surgical microscopes in the market. With more than 700+ installations all over India, it is the trusted choice for ophthalmologists for high-quality surgical documentation.\n\nDesigned for documentation, conference presentations, and patient counseling, the system provides exceptional clarity and ease of use. It features a custom-made beam splitter with an 80:20 ratio, ensuring optimal field illumination while capturing high-definition video. Compatible with all major brands including Zeiss, Appasamy, Leica, and more.\n\nVISIT OPHTHALL IMAGING PAGE: https://imagingsystems.ophthallmart.com/",
    features: [
      "Custom Made Ophthall Beam Splitter (80:20 Split Ratio)",
      "Universal Compatibility (Zeiss, Appasamy, Leica, etc.)",
      "F-60 Focal Length for C-Mount",
      "ESC 16 MP High Definition Recording Camera",
      "Inbuilt 32GB Memory Card for direct recording",
      "Full HD Video Capture Resolution (1920 x 1080)",
      "Ultra-Lightweight design (550 Grams)",
      "Simple 'Do It Yourself' self-installation",
      "Remote Control for cordless video recording"
    ],
    cameraOptions: [
      {
        name: "16 MP HDMI Camera (Standard)",
        description: "Sony Chip, Micro SD recording. Best for Anterior Segment Surgery."
      },
      {
        name: "Full HD 1080p HDR Camera & Recorder",
        description: "60 FPS Zero Delay, USB Drive recording. Best for Posterior Segment/Retinal Surgery."
      },
      {
        name: "4K Ultra-High Resolution Camera",
        description: "8 MP Premium Resolution, 60 FPS, 4K USB Recording. Premium for Retinal Surgeries."
      }
    ],
    specs: [
      { label: "Split Ratio", value: "80:20 (Viewing:Recording)" },
      { label: "Focal Length", value: "F-60 for C Mount" },
      { label: "Resolution", value: "Up to 4K Ultra HD" },
      { label: "Weight", value: "550 Grams" },
      { label: "Storage", value: "32GB SD Card / USB Drive" },
      { label: "Frame Rate", value: "Up to 60 FPS" }
    ],
    reviews: [
      {
        id: 1,

        author: "Dr Harikrishnan Vannadil",
        initials: "HV",
        date: "March 7, 2022",
        rating: 5,
        content: "A very good recording system with fantastic clarity. I managed to install it myself on my Lumera 300 microscope. The SD card recording is very good.",
        location: "Lumera 300 Installation"
      },
      {
        id: 2,

        author: "Dr ASWINI KUMAR BEHERA",
        initials: "AB",
        date: "June 7, 2023",
        rating: 5,
        content: "Extremely happy with the recording, Still the image quality is good. Thank you Dr. senthil sir and good shout out to supporting staff.",
        location: "Founder, Naitrika Super Specialty Eye Care"
      },
      {
        id: 3,

        author: "Dr Tejaswi Prasad",
        initials: "TP",
        date: "June 21, 2024",
        rating: 5,
        content: "The camera quality is excellent, capturing surgical details with great precision. Service engineer was highly knowledgeable. Highly recommend it.",
        location: "Aravind Eye Hospital, Madurai"
      },
      {
        id: 4,

        author: "Dr N R Rangaraj",
        initials: "NR",
        date: "September 4, 2022",
        rating: 5,
        content: "Good recording system, the micro SD card makes transfer of data seamless into clips for presentations and patient information.",
        location: "September 4, 2022"
      },
      {
        id: 5,

        author: "Dr. P. Raja Sekhar",
        initials: "PR",
        date: "September 4, 2022",
        rating: 5,
        content: "Very Good quality recording system. Used for retina surgeries also… Very happy with this value for money product….",
        location: "Retina Specialist"
      }
    ]
  },

  {
    id: 607,
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
 {
    id: 906,
    isSoldOut: false,

    name: "MEGATRON S4 HPS – GEUDER",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/megatron-s4-img1.png",
    tag: "Premium",
    section: "shop",
    fullDescription: "MEGATRON S4 HPS: MAXIMUM PERFORMANCE IN THE ANTERIOR AND POSTERIOR SEGMENTS\n\nModular Phaco/Vitrectomy System – Sophisticated Technology for Maximum Performance. Take the lead in performing best. With sophisticated technology of the megaTRON S4HPS you can achieve maximum safety, efficiency, rentability and flexibility.\n\nThe revolutionary hybrid pump system is only one of the numerous features which make the megaTRON S4HPS one of the most powerful ophthalmic surgery systems for the anterior and posterior segment. Its UNO Colorline MACH2 vitreous cutters enable cut rates of up to 12,000 cpm. The optional endolaser endoTRON® 532 and xenon light source xenoTRON® III make the megaTRON S4HPS a fully equipped vitrectomy system.\n\nA German Premium Brand having an excellent track record of the last 15 years in India in terms of Quality & Service. Offering Geuder Megatron S4HPS Anterior Phaco System at an exceptional value through Ophthall Group.\n\nFor more Details whatsapp +91-9176702051",
    features: [
      "Modular Phaco/Vitrectomy System",
      "Revolutionary Hybrid Pump System",
      "UNO Colorline MACH2 vitreous cutters (up to 12,000 cpm)",
      "Optional endolaser endoTRON® 532 integration",
      "Optional xenon light source xenoTRON® III",
      "German Engineering & Build Quality",
      "Maximum Safety and Efficiency in surgical procedures",
      "Large variety of accessories for all applications"
    ],
    images: [
      "/assets/Products/megatron-s4-img1.png",
      "/assets/Products/megatron-s4-img2.png",
      "/assets/Products/megatron-s4-img3.png",
      "/assets/Products/megatron-s4-img4.png",
      "/assets/Products/megatron-s4-img5.png",
      "/assets/Products/megatron-s4-img6.png",
      "/assets/Products/megatron-s4-img7.png",
    ],
    specs: [
      { label: "Country of Origin", value: "Germany" },
      { label: "System Type", value: "Modular Phaco/Vitrectomy" },
      { label: "Pump System", value: "Revolutionary Hybrid Pump" },
      { label: "Vitreous Cut Rate", value: "Up to 12,000 cpm (MACH2)" },
      { label: "Light Source", value: "Optional xenoTRON® III (Xenon)" },
      { label: "Endolaser", value: "Optional endoTRON® 532" },
      { label: "Segments", value: "Anterior and Posterior" }
    ]
  },
  {
    id: 907,
    isSoldOut: false,

    name: "Meridian 532 nm Green laser",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/meridian-532-img1.png",
    tag: null,
    section: "shop",
    pdfUrl: "https://1drv.ms/b/s!AhfqFC9cJSdyfLua26y7J20jkqk", // Assuming similar OneDrive structure if provided later, but for now using the requested content structure
    fullDescription: "Meridian 532 nm Green laser – Merilas 532 / MR Q Combo\n\nGreen laser photocoagulator for all retinal photocoagulation procedures. The MR Q Combo is a combination package designed to save space and maximise treatment possibilities. It includes a renowned MR Q Nd:YAG laser with precision optics, a Merilas console with a crystal detachable control panel (Swiss engineered), and a stable twin column table.\n\nA unique parking station protects the sensitive optics when not in use. The Merilas shortpulse® technology delivers microsecond pulses for subthreshold retinal treatments. The thermoelectric cooling (TEC) system makes it a hermetically sealed, dust-free system, ensuring long-term reliability and quiet operation.",
    features: [
      "Award-winning Frequency Doubled Solid State Green Laser",
      "MR Q Combo combines YAG and Green Laser in one station",
      "High-grade Aluminum Housing for Swiss Quality",
      "Detachable Crystal Touch Control Panel for easy cleaning",
      "Thermoelectric Cooling (TEC) - No disturbing noise or air turbulences",
      "Auto Key connector for automatic probe recognition",
      "Meridian Parfocal Laser - No corneal heating",
      "Shortpulse® for subthreshold retinal treatments",
      "Compact and portable with a robust carry-on case"
    ],
    images: [
      "/assets/Products/meridian-532-img1.png",
      "/assets/Products/meridian-532-img2.png",
      "/assets/Products/meridian-532-img3.png",
      "/assets/Products/meridian-532-img4.png",
      "/assets/Products/meridian-532-img5.png",
      "/assets/Products/meridian-532-img6.png",
      "/assets/Products/meridian-532-img7.png",
      "/assets/Products/meridian-532-img8.png",
      "/assets/Products/meridian-532-img9.png",
      "/assets/Products/meridian-532-img10.png",
      "/assets/Products/meridian-532-img11.png",
      "/assets/Products/meridian-532-img12.png",
      "/assets/Products/meridian-532-img13.png",
      "/assets/Products/meridian-532-img14.png",
      "/assets/Products/meridian-532-img15.png",
    ],
    specs: [
      { label: "Wavelength", value: "532 nm (Green)" },
      { label: "Laser Type", value: "Solid State / Frequency Doubled" },
      { label: "Cooling", value: "Thermoelectric Cooling (TEC)" },
      { label: "Optical Resolution", value: "Renowned precision optics (up to 40x)" },
      { label: "Swiss Made", value: "Swiss Engineered and Robustly Built" },
      { label: "Applications", value: "Retinal Photocoagulation via Slit Lamp, LIO or Endoprobes" },
      { label: "Maintenance", value: "Hermetically sealed, dust-free system" }
    ]
  },
  {
    id: 908,
    isSoldOut: false,

    name: "Meridian Nd:YAG Laser",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/meridian-nd-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/meridian-nd-img1.png",
      "/assets/Products/meridian-nd-img2.png",
      "/assets/Products/meridian-nd-img3.png",
      "/assets/Products/meridian-nd-img4.png",
      "/assets/Products/meridian-nd-img5.png",
      "/assets/Products/meridian-nd-img6.png",
      "/assets/Products/meridian-nd-img7.png",

    ],
    fullDescription: "Meridian Nd:YAG Laser – MR Q\n\nThe latest technology in the Microruptor series, continuing a legacy that began in 1982. The Meridian MR Q is a fully featured and integrated Nd:YAG laser combined with renowned European precision optics. It features a high-grade aluminum mono-block laser housing for superior quality and longevity.\n\nThe MR Q utilizes a super Gaussian mode laser profile to provide exceptional accuracy and excellent laser treatments. With an integrated LED slit lamp offering 5 magnification steps (6x to 40x) and electronically controlled offsets, it provides both versatility and advanced safety for clinical procedures.",
    features: [
      "Latest technology Nd:YAG Laser in the Microruptor series",
      "Super Gaussian Mode Laser Profile for high precision",
      "Integrated LED Slit Lamp with 5-step magnification (6x to 40x)",
      "Electronically controlled Anterior and Posterior offset",
      "Automatic offset reset to posterior 100 μm for enhanced safety",
      "Internal Power Meters to monitor delivered energy",
      "High-grade Aluminum Mono-block Housing",
      "Compact and powerful European design",
      "Remote service access support for immediate assistance"
    ],
    specs: [
      { label: "Laser Type", value: "Nd:YAG" },
      { label: "Beam Profile", value: "Super Gaussian Mode" },
      { label: "Magnification", value: "6x, 10x, 16x, 25x, 40x (5 steps)" },
      { label: "Clinical Indications", value: "Posterior Capsulotomy and Iridotomy" },
      { label: "Safety Features", value: "Electronic offset reset, Internal power monitoring" },
      { label: "Housing", value: "High-grade Aluminum Mono-block" },
      { label: "Slit Lamp", value: "Integrated LED Slit Lamp" }
    ]
  },
  {
    id: 909,
    isSoldOut: false,

    name: "Ophthall Delight Zoom Microscope",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/delight-zoom-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/delight-zoom-img1.png",
      "/assets/Products/delight-zoom-img2.png",
      "/assets/Products/delight-zoom-img3.png",
      "/assets/Products/delight-zoom-img4.png",
      "/assets/Products/delight-zoom-img5.png",
      "/assets/Products/delight-zoom-img6.png",
      "/assets/Products/delight-zoom-img7.png",
      "/assets/Products/delight-zoom-img8.png",
    ],
    fullDescription: "Ophthall Delight Zoom Microscope\n\nThis Innovative microscope promotes super ergonomics through innovative design, with latest edition Yellow LED illumination System, its highly stable high contrast Red Reflex further enhances details recognition. featuring continuous motorized zoom & X-Y Coupling.\n\nThe Reliable X-Y Coupling features a one-button design with no complicated settings, offering guided movement in one plane with a 25mm x 25mm range. It is an ideal choice for surgeons seeking precision and ease of use in ophthalmic procedures.",
    features: [
      "Latest edition Yellow LED Illumination System",
      "Highly stable High Contrast Red Reflex",
      "Continuous Motorized Zoom & X-Y Coupling",
      "Reliable X-Y Coupling with 25mm x 25mm Range",
      "Super Ergonomics through innovative design",
      "One Button design for easy movement control",
      "Optional Accessory: HD Camera Recording system",
      "Optional Accessory: Ophthall Glo enhancer"
    ],
    specs: [
      { label: "Binocular", value: "Inclined 45 Degree (Optional 180 Degree)" },
      { label: "Objective Lens", value: "F-200mm" },
      { label: "Eyepiece", value: "12.5X Wide Field High Eye point" },
      { label: "Magnification", value: "Continuous Motorized (0.4x to 2.5x)" },
      { label: "Focus", value: "Motorized Fine Focus" },
      { label: "IPD Range", value: "50mm to 75mm" },
      { label: "Diopter Adjustment", value: "+6D to -6D" },
      { label: "Light Intensity", value: "1,00,000 LUX" }
    ]
  },
  {
    id: 910,
    isSoldOut: false,

    name: "Ophthall Digital Led Near Vision Chart",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/digital-led-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/digital-led-img1.png",
      "/assets/Products/digital-led-img2.png",
      "/assets/Products/digital-led-img3.png",
      "/assets/Products/digital-led-img4.png",
    ],
    fullDescription: "Ophthall Digital LED Near Vision Chart is the world’s first Digital Near Vision Chart with an interactive Touchscreen 7-inch color TFT LED display.\n\nIt features all major Indian languages for near vision test reading (English, Hindi, Urdu, Punjabi, Gujarati, Marathi, Malayalam, Tamil, Bengali, Telugu, and Kannada) along with additional clinical tests like Ishihara Color Vision, Amsler Grid, Dual Chrome test, binocular test, Contrast sensitivity, fixation disparity, and worth 4 dots. It’s handheld, very portable, and wireless, with a built-in rechargeable battery providing 8-10 hours of operation. Ideal for office or camp purposes.",
    features: [
      "7″ Color Touchscreen TFT LED Display",
      "All Major Indian Languages (English, Hindi, Tamil, etc.)",
      "Comprehensive Near Vision Tests (Ishihara, Amsler Grid, etc.)",
      "Lightweight, handheld, and wireless portability",
      "Rechargeable battery (8-10 hours operation)",
      "Battery status indicator included"
    ],
    specs: [
      { label: "Display", value: "7″ Color TFT LED Touchscreen (800 x 480p)" },
      { label: "Colors", value: "262K colors" },
      { label: "Brightness", value: "300 nit" },
      { label: "Languages", value: "11 Major Indian Languages" },
      { label: "Charts", value: "Color Vision, Pediatric, Amsler, Contrast, etc." },
      { label: "Power", value: "Built-in Rechargeable battery with Charger" },
      { label: "Dimension", value: "200 mm x 150 mm x 24 mm" },
      { label: "Weight", value: "420 grams" }
    ]
  },
  {
    id: 911,
    isSoldOut: false,

    name: "Ophthall GloMaster - RedGlow Enhancement Device for Surgical Microscopes",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/glomaster-redglow-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/glomaster-redglow-img1.png",
      "/assets/Products/glomaster-redglow-img2.png",
      "/assets/Products/glomaster-redglow-img3.png",
      "/assets/Products/glomaster-redglow-img4.png",
      "/assets/Products/glomaster-redglow-img5.png",
      "/assets/Products/glomaster-redglow-img6.png",
      "/assets/Products/glomaster-redglow-img7.png",
      "/assets/Products/glomaster-redglow-img8.png",
    ],
    fullDescription: "Ophthall GloMaster: Ophthalmic Surgical Microscope Red Glow Enhancement Device\n\nMany Ophthalmologists in developing countries use basic surgical microscope models that lack optimal red glow and stereopsis. Ophthall GloMaster was invented to solve this challenge, converting any basic surgical microscope into an advanced system with enhanced Red Glo, Stereopsis, and Illumination.\n\nThis wonder device can be externally attached to any brand of surgical microscope at its bottom without requiring any modifications. It provides its own source of illumination, meaning you can operate with the enhancer light alone or in combination with the microscope light. Crucially, the surgeon's working distance is not reduced, and the high-quality imported optics are scratch-resistant with fungicidal coatings.",
    features: [
      "Homogenous red reflex in all positions of the Eye",
      "Significant Stereopsis enhancement",
      "Additional Illumination to brighten the operating field",
      "Compatible with all brands of surgical microscopes",
      "No modifications required for installation",
      "Switch on/off using integrated foot pedal control",
      "Dimmable power supply (Zero to 100% illumination)",
      "Optional: New Objective Lens provided with the enhancer"
    ],
    specs: [
      { label: "Compatibility", value: "All Brand Surgical Microscopes" },
      { label: "Optics", value: "Imported, Scratch-resistant with Fungicidal Coating" },
      { label: "Control", value: "Foot Pedal Switch" },
      { label: "Illumination", value: "Variable & Dimmable (0-100%)" },
      { label: "Attachment", value: "External Bottom Base Mount" },
      { label: "Working Distance", value: "No reduction in standard distance" },
      { label: "Optional Feature", value: "New Objective Lens Integration" }
    ],
    reviews: [
      {
        id: 1,

        author: "Dr Raj Ganesh",
        initials: "RG",
        date: "April 5, 2022",
        rating: 4,
        content: "I used Ophthall Glow (Red Glow Enhancer) with my Zeiss 1 FR Microscope, and it was a fantastic experience operating with an excellent red glow. Thank you, Ophthall Team!",
        location: "Geetha Eye Hospital, Udumalaipet, Tamilnadu"
      },
      {
        id: 2,

        author: "Dr Arul Mozhi Varman",
        initials: "AV",
        date: "April 9, 2022",
        rating: 3,
        content: "My opinion after Using Ophthall Red Glow Enhancer,Excellent innovation for basic microscope, enjoyed my Rexis and depth perception is also good, kudos to Ophthall Team",
        location: "Arul Eye Hospital, Salem"
      },
      {
        id: 3,

        author: "Dr. Arun Kumar",
        initials: "AK",
        date: "April 9, 2022",
        rating: 4,
        content: "I Used Ophthall glow For my Zeiss 1FR microscope, It’s really nice, the red glow , depth perception is really good. I will say it’s a must for all microscope (without coaxial). Thank you Dr.Senthil sir and Ophthall team.",
        location: "Kumar Eye Hospital, Attur"
      },
      {
        id: 4,

        author: "Dr Venkatesh Reddy",
        initials: "VR",
        date: "April 27, 2022",
        rating: 5,
        content: "I used the Ophthall Red Glow Master Device on my Lumera 300, and it made performing rhexis without trypan blue effortless. It was also extremely helpful for cortical wash and IOL implantation in the bag. Overall, the experience was excellent, and the device proved to be both innovative and economically reliable. Many thanks to Dr. Senthil and his team for developing such a remarkable device!",
        location: "Ushodaya Laser Eye Hospital, Medchal, Telengana"
      },
      {
        id: 5,

        author: "Dr. Rajesh Chells",
        initials: "RC",
        date: "June 28, 2022",
        rating: 4,
        content: "My experience with ophthall red glo enhancer fitted on Zeiss lumera 300. The image & red glo quality enhanced so well that my surgical confidence increased. surgical time decreased, i recommend re glow enhancer and recording system to my colleagues.",
        location: "Focus Eye Hospital, Ernakulam, Kerala"
      },
      {
        id: 6,

        author: "Dr. Sushil",
        initials: "DS",
        date: "June 28, 2022",
        rating: 5,
        content: "RedGlow enhancer is a wonderful device. Red glow is just perfect. Very helpful for me in doing rhexis without Trypan and IA is becoming very smooth. Just one need to st without. It will take only one or two case for adjustment. Overall Perfect",
        location: "Sunayan Eye Care, Bargarh, Odisha"
      },
      {
        id: 7,

        author: "Dr Adithya Phadnis",
        initials: "AP",
        date: "August 2, 2022",
        rating: 3,
        content: "We purchased this red glow enhancer for Zeiss lumera 300. Had a pleasant experience with this product. Gives lot of confidence to surgeons"
      },
      {
        id: 8,

        author: "Dr Rushabh Shah",
        initials: "RS",
        date: "September 21, 2022",
        rating: 4,
        content: "Good Evening sir, many thanks for sending the red glow enhancer. I had used it on the Zeiss Visu 160, it is a good device, definitely worth it. Thank you once again sir."
      }
    ]
  },
  { id: 912,
    isSoldOut: false,
 name: "OPHTHALL LENSIT RM-9600 AUTO REF", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p46.png", tag: null, section: "shop" },
  { id: 913,
    isSoldOut: false,
 name: "Ophthall Manual Phoropter", category: "OPTICAL PRODUCTS", price: "Enquire", rating: 4, image: "/assets/Products/p48.png", tag: null, section: "shop" },
  {
    id: 914,
    isSoldOut: false,

    name: "OPHTHALL MEDISTER CLASS B BENCHTOP AUTOCLAVE 22 Liters",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/medister-classB-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/medister-classB-img1.png",
      "/assets/Products/medister-classB-img2.png",
      "/assets/Products/medister-classB-img3.png",
      "/assets/Products/medister-classB-img4.png",
      "/assets/Products/medister-classB-img5.png",
    ],
    fullDescription: "OPHTHALL MEDISTER CLASS B BENCHTOP AUTOCLAVE\n\nHigh-performance Class B Benchtop Autoclave designed for medical and ophthalmic sterilization needs. Featuring a convenient and fast single-lever locking door, this system ensures maximum safety and efficiency in your sterilization workflow.\n\nIt comes with 8 preset programs and 1 user-defined program, covering a temperature range of 121°C to 134°C. The system includes a bacterial filter, built-in printer, and USB port for seamless data output and documentation.\n\nFor More Details WhatsApp +91-9176702051",
    features: [
      "Convenient and fast single-lever locking door",
      "8 preset and 1 user-defined sterilization programs",
      "B&D / Helix test / Vacuum test & Cleaning programs",
      "Bacterial filter, internal printer, and USB port included",
      "Separate water tanks for freshwater & wastewater",
      "Audio and visual safety alarms",
      "Dry time customizable from 1 to 25 minutes",
      "Vacuum cycles selectable from 1 to 10 times"
    ],
    specs: [
      { label: "Class", value: "Class B Benchtop" },
      { label: "Available Capacities", value: "17L, 21L, 35L, 50L" },
      { label: "Sterilization Temp", value: "121°C to 134°C" },
      { label: "Sterilization Time", value: "0 to 60 Minutes" },
      { label: "Dry Time", value: "1 to 25 Minutes" },
      { label: "Power Supply", value: "230 VAC, 50 HZ, Single Phase" },
      { label: "Data Output", value: "Printer & USB Port" }
    ],
    safety: [
      "Overpressure Protection",
      "Pressure-balanced Lid Lock",
      "Electric Interlock for Lid Lock",
      "Electrical Safety via MCB",
      "Integrated Audio/Visual Alarms"
    ],
    utilities: "Electric Supply: 230 VAC 50 HZ, single phase. Well-ventilated room with space of at least 200mm on all sides."
  },
  {
    id: 915,
    isSoldOut: false,

    name: "Ophthall Portable Microscope - Table Top",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p56.png",
    tag: null,
    section: "shop",
    fullDescription: "Ophthall Portable Microscope – Table Top\n\nA top Quality Portable Multipurpose Ophthalmology Microscope and India's first Portable Microscope specifically designed for Ophthalmologists. This compact device serves multiple roles within an eye care facility.\n\nUses of Ophthall Portable:\n1. For Out Patient Department (OPD) in Eye Hospitals to perform minor procedures.\n2. For Ophthalmic Operating Theatre (OT).\n3. For Wetlab Training for trainees and students in teaching institutes.\n\nAvailable Models:\n- Ophthall – Portable\n- Ophthall – Portable with Video Recording",
    features: [
      "Compact and Light Weight design",
      "360 Degree Movement of Microscope Head",
      "In-built LED Light Source",
      "Objective Fine focusing",
      "Optional Wall Mount accessory",
      "Optional C Mount Beam Splitter and Video Recording",
      "Ideal for minor procedures and student training"
    ],
    specs: [
      { label: "Type", value: "Portable Multipurpose Microscope" },
      { label: "Head Movement", value: "360 Degree Rotation" },
      { label: "Illumination", value: "In-built LED" },
      { label: "Focusing", value: "Fine Objective Focusing" },
      { label: "Portability", value: "Lightweight Table Top Design" },
      { label: "Optional Accessories", value: "Wall Mount, Beam Splitter, Video Recording" }
    ]
  },
  {
    id: 916,
    isSoldOut: false,

    name: "Ophthall Pro Vision Chart",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "₹22,000",
    rating: 5,
    image: "/assets/Products/p57.png",
    tag: "Sale",
    section: "shop",
    youtubeUrl: "https://www.youtube.com/embed/G9KbhYa4uCY?si=udz6UDIG20V7V6nh",
    fullDescription: "Ophthall Vision Chart Pro-max: India’s Only Customizable Vision Chart with your Hospital Name or Image added to the start screen. This simple yet economical vision chart is manufactured to high industry standards using premium monitors. It offers high resolution suitable for contrast sensitivity tests and is designed to be space-saving. With its smart remote, it facilitates 'Speedy Refraction', saving up to 50% of refraction time by enabling quick-category switching at the click of a button. The advanced display modes allow Duochrome function to be applied to all available optotypes and language charts.",
    features: [
      "Hospital Name/Logo customization on start screen",
      "Smart charts with random display function",
      "Contrast Sensitivity adjustment for most charts",
      "Adaptable to smaller rooms (Distance: 2.5m to 6m)",
      "Exclusive Image gallery for various eye diseases",
      "Built-in HD Surgery Videos for patient education",
      "Extensive display modes for various optotypes",
      "Reverse mode (Black on White / White on Black) for all charts",
      "Automated randomization to prevent patient memorization",
      "Red-Green filter compensation",
      "Ergonomic remote control with direct-test commands",
      "Solid-state design with no moving parts for durability"
    ],
    specs: [
      { label: "Screen Size", value: "19 Inches (High Resolution)" },
      { label: "Distance Options", value: "2.5M to 6M (Adjustable in steps)" },
      { label: "Refraction Speed", value: "Save up to 50% time with Smart Remote" },
      { label: "Chart Options", value: "Standard Optotypes & Multiple Languages" },
      { label: "Visual Tests", value: "Duochrome, Contrast Sensitivity, Randomization" },
      { label: "Educational Content", value: "Built-in HD Surgery Videos & Disease Gallery" },
      { label: "Monitor Type", value: "Premium High-Brightness LED" }
    ],
    reviews: [
      {
        id: 1,

        author: "Dr. S. Karthik",
        initials: "SK",
        date: "January 14, 2024",
        rating: 5,
        content: "The customization with our hospital logo right on the first screen gives such a premium feel to our clinical setup! Patients are quite impressed.",
        location: "Chennai"
      },
      {
        id: 2,

        author: "Verified User",
        initials: "VU",
        date: "February 2, 2024",
        rating: 5,
        content: "Speedy refraction really works. The remote keys are very intuitive and it significantly speeds up our daily patient workflow.",
        location: "Mumbai"
      },
      {
        id: 3,

        author: "Eye Clinic Admin",
        initials: "EC",
        date: "March 10, 2024",
        rating: 5,
        content: "Excellent contrast sensitivity charts. The monitor is bright and the finish is very professional.",
        location: "Delhi"
      },
      {
        id: 4,

        author: "Senior Optometrist",
        initials: "SO",
        date: "March 15, 2024",
        rating: 5,
        content: "The built-in surgery videos help so much in explaining procedures to patients. It's a great tool for patient conversion and education.",
        location: "Bangalore"
      }
    ]
  },
  {
    id: 917,
    isSoldOut: false,

    name: "Ophthall Wireless LED Indirect Ophthalmoscope",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/wireless-led-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/wireless-led-img1.png",
      "/assets/Products/wireless-led-img2.png",
      "/assets/Products/wireless-led-img3.png",
    ],
    fullDescription: "The Ophthall Wireless LED Indirect Ophthalmoscope is a high-performance, cost-effective diagnostic tool designed for precision retinal examination. Built with advanced LED illumination, this device offers bright, even lighting without the heat or maintenance of traditional halogen systems. Its cordless operation with a rechargeable battery ensures optimal portability and ease of use, whether in clinics, hospitals, or during outreach camps.\n\nThe illumination rheostat, conveniently located on the headband, provides easily accessible and fully controllable light ranging from 5% to 100% of maximum intensity. Fully adjustable optics allow for optimal viewing, and tiltable mirrors enable beam adjustment of ±4 degrees. The headband is ergonomically engineered for comfort during extended use, featuring multiple adjustment points to suit every user.",
    features: [
      "Wireless freedom with high-performance battery",
      "Bright, uniform 3W LED illumination",
      "Headband-mounted light rheostat (5% to 100%)",
      "Three integrated spot sizes: Small, Medium, Large",
      "Integrated filters: Yellow, Red-Free (Green), Cobalt Blue",
      "Tiltable mirrors for adjustable beam (±4 degrees)",
      "Lightweight, ergonomic headband design",
      "Optimal portability for clinical or camp settings"
    ],
    specs: [
      { label: "Light Source", value: "3W LED" },
      { label: "Control", value: "Linear Variation (Rheostat on Headband)" },
      { label: "Filters", value: "Yellow, Red-Free, Cobalt Blue, Heat Absorbing" },
      { label: "Apertures", value: "Small, Medium, Large" },
      { label: "Focus Distance", value: "200mm to 800mm" },
      { label: "Illumination Area", value: "75mm, 55mm, 20mm (at 500mm)" },
      { label: "Battery", value: "Rechargeable / Dry Cell (AA size)" },
      { label: "Battery Backup", value: "More than 6 hours" },
      { label: "Weight", value: "520 Grams" },
      { label: "Case", value: "Rigid Carrying Case Included" }
    ]
  },
  {
    id: 918,
    isSoldOut: false,

    name: "REXXAM ( Shin Nippon) NCT-200",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p64.png",
    tag: null,
    section: "shop",
    pdfUrl: "https://1drv.ms/b/s!AhfqFC9cJSdydkDlY-Wx6-WIZFs",
    fullDescription: "The REXXAM NCT-200 Non-Contact Tonometer features a new generation design with sophisticated curves and a metallic pearlescent finish. It incorporates the newly-developed Smart Puffing Control system (S.P.C) which uses a precise algorithm to adjust air pressure instantly to match the patient's intraocular pressure, ensuring a soft pulse and minimal noise. The newly designed smart alignment and auto-shot function reduce patient stress by minimizing measurement time. It also features a reliability warning display, automatic IOP correction based on central corneal thickness, and triple safety functions including a 'Too Close' alarm and a physical safety stopper.",
    features: [
      "Newly-developed Smart Puffing Control System (S.P.C)",
      "Smart alignment & Auto shot function for speedy measurement",
      "Reliability Warning Display (alignment & eye opening alerts)",
      "Automatic IOP correction based on central corneal thickness",
      "Triple Safety Functions: Too Close alarm & Safety Stopper",
      "Feather touch sensor buttons for easy operation",
      "Unique 10.4-inch LCD Monitor with 30° Swivel and 40° Tilt",
      "Improved ergonomic forehead and chin rests with side flaps",
      "Redesigned joystick for precise and instinctive movement"
    ],
    specs: [
      { label: "Technology", value: "Smart Puffing Control (S.P.C) Algorithm" },
      { label: "Alignment", value: "Smart alignment & Auto shot" },
      { label: "Safety", value: "Electronic Alarm & Physical Stopper" },
      { label: "IOP Correction", value: "Automatic via Central Corneal Thickness" },
      { label: "Monitor", value: "10.4 inch LCD (30° Swivel / 40° Tilt)" },
      { label: "User Interface", value: "Feather Touch Sensor & New Joystick" }
    ]
  },
  {
    id: 919,
    isSoldOut: false,

    name: "REXXAM SPM-700 Specular Microscope",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/p66.png",
    tag: null,
    section: "shop",
    pdfUrl: "https://1drv.ms/b/s!AhfqFC9cJSdyedshoRimumeVmG0",
    fullDescription: "The REXXAM SPM-700 Specular Microscope is an all-in-one diagnostic system capable of capturing 16 independent images of the corneal endothelium in just 2 seconds. The system features a speedy analysis function that selects the best image automatically and finishes analysis in just 1 second. It measures a total of 17 points across the center, paracenter, and periphery. It can also measure corneal thickness simultaneously. The device offers extensive editing functions for contrast and brightness, manual analysis options (center and frame methods), and four distinct display modes. The 10.4-inch swivel/tilt screen and electric chinrest ensure ease of use for both operator and patient.",
    features: [
      "Continuous Capturing: 16 images in 2 seconds",
      "Speedy Analysis: Best image selection & analysis in 1 sec",
      "Multiple Measurement Points: center, 6 paracenter, 10 periphery",
      "Simultaneous Corneal Thickness Measurement",
      "Advanced Edit Function: Contrast, brightness, and cell results",
      "Dual Manual Analysis: Center method and Frame method",
      "4 Display Modes: Endothelial image, Trace, Area, and Pleomorphism",
      "10.4 inch wide color swivel/tilt screen",
      "Electric Chinrest with easy eye mark alignment"
    ],
    specs: [
      { label: "Capture Speed", value: "16 images in 2 sec" },
      { label: "Analysis Speed", value: "Automatic selection in 1 sec" },
      { label: "Measurement Range", value: "0.25mm x 0.55mm" },
      { label: "Measurement Points", value: "17 (Center, Paracenter, Periphery)" },
      { label: "Display", value: "10.4 inch wide color screen (Swivel/Tilt)" },
      { label: "Chinrest", value: "Electric" }
    ]
  },
  {
    id: 920,
    isSoldOut: false,

    name: "Sonoptek A/B Scan",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/sonoptek-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/sonoptek-img1.png",
      "/assets/Products/sonoptek-img2.png",
      "/assets/Products/sonoptek-img3.png",
      "/assets/Products/sonoptek-img4.png",
      "/assets/Products/sonoptek-img5.png",
      "/assets/Products/sonoptek-img6.png",
    ],
    fullDescription: "The Sonoptek SP-2000 is a compact and lightweight A/B scanning system featuring a one-station working platform. It provides integrated image capture, comprehensive patient management, and professional report editing within a single device. Its portable design makes it ideal for versatile clinical environments while maintaining high-quality diagnostic imaging.",
    features: [
      "Compact Body and Lightweight design",
      "One Station Working Platform",
      "Integrated High-Quality Image Capture",
      "Integrated Patient Management System",
      "Integrated Professional Report Editing",
      "Versatile A/B Scan capabilities"
    ],
    specs: [
      { label: "Model", value: "Sonoptek SP-2000" },
      { label: "Type", value: "A/B Scan System" },
      { label: "Weight", value: "Compact & Lightweight" },
      { label: "Platform", value: "One Station Comprehensive Platform" }
    ]
  },
  {
    id: 921,
    isSoldOut: false,

    name: "SP-1000AP - A-Scan/Pachymeter",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/sp-1000AP-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/sp-1000AP-img1.png",
      "/assets/Products/sp-1000AP-img2.png",
      "/assets/Products/sp-1000AP-img3.png",
      "/assets/Products/sp-1000AP-img4.png"
    ],
    fullDescription: "The SP-1000AP is a high-precision combined A-Scan and Pachymeter unit designed for comprehensive ocular biometric measurements. It features a compact and lightweight body with a user-friendly LCD touch screen for intuitive operation. The device supports both contact and immersion modes for A-Scanning and provides multiple IOL power calculation formulas. With a built-in thermal printer and PC connectivity options, it streamlines diagnostic workflows and documentation in ophthalmic practices.",
    features: [
      "Compact Body and Lightweight design",
      "User-Friendly LCD Touch Screen interface",
      "Supports Contact and Immersion measurement modes",
      "Multiple IOL Power Calculation formulas",
      "Built-in Thermal Printer for instant reports",
      "Capable of Connecting to PC for data management",
      "Optional Professional Workstation on PC"
    ],
    specs: [
      { label: "A-Scan Probe", value: "10MHz Frequency" },
      { label: "Axial Length Range", value: "14.0 - 46.0mm" },
      { label: "A-Scan Accuracy", value: "±0.1mm" },
      { label: "IOL Formulas", value: "6 Available Formulas" },
      { label: "Pachymeter Probe", value: "20MHz Frequency" },
      { label: "Pachymeter Range", value: "125 - 1000 microns" },
      { label: "Pachymeter Accuracy", value: "±10 microns" }
    ]
  },
  {
    id: 922,
    isSoldOut: false,

    name: "Spectral Domain OCT",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/spectral-domain-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/spectral-domain-img1.png",
      "/assets/Products/spectral-domain-img2.png",
      "/assets/Products/spectral-domain-img3.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/zpSxhO030_w?si=Dzx8CgEPVhN1yMVC",
    fullDescription: "The SPECTRALIS® from Heidelberg Engineering is an ophthalmic imaging platform optimized for the posterior segment. Featuring an upgradable, modular design, this platform allows clinicians to configure the SPECTRALIS to their specific diagnostic workflow, whether in a private practice or large hospital clinic. It offers multimodal imaging capabilities that provide a comprehensive view of ocular health.",
    features: [
      "Upgradable, modular platform design",
      "Multimodal imaging options including OCT",
      "Scanning laser fundus imaging modalities",
      "Widefield and ultra-widefield imaging",
      "Scanning laser angiography and OCT angiography",
      "Highly customizable diagnostic workflow integration"
    ],
    specs: [
      { label: "Manufacturer", value: "Heidelberg Engineering" },
      { label: "Model", value: "Spectralis" },
      { label: "Imaging Type", value: "Multimodal Imaging Platform" },
      { label: "Modularity", value: "Fully Upgradable & Modular" },
      { label: "Applications", value: "Posterior Segment / Retina Diagnostics" }
    ]
  },
  {
    id: 923,
    isSoldOut: false,

    name: "TAKAGI OPERATING MICROSCOPES",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/takagi-operating-img1.png",
    tag: null,
    section: "shop",
    images: [
      "/assets/Products/takagi-operating-img1.png",
      "/assets/Products/takagi-operating-img2.png",
      "/assets/Products/takagi-operating-img3.png",
      "/assets/Products/takagi-operating-img4.png",

    ],
    fullDescription: "Takagi offers a range of high-performance operating microscopes designed for various ophthalmic surgical needs. From entry-level models to advanced systems, Takagi microscopes are known for their optical clarity, ergonomic design, and innovative features. For pricing details, contact via WhatsApp at +91-8754517944 or +91-9176054051.\n\nModels include the OM-6 (Entry-level), OM-9 (Outstanding clarity), and the advanced OM-19 (Independent light adjustment).",
    features: [
      "OM-6: Entry-level, LED light source, compact size with high optical performance",
      "OM-9: LED optimized system for outstanding clarity, multi-specification configurations",
      "OM-19: World's first with independent coaxial and red-reflex light adjustment",
      "OM-19: Includes X-Y coupling, zoom magnification, and tiltable eyepieces",
      "OM-19: Rotating coaxial stereoscopic assistant microscope",
      "Suitable for both anterior and posterior surgical procedures (OM-9 & OM-19)",
      "Long-lasting LED illumination systems across models"
    ],
    specs: [
      { label: "Manufacturer", value: "Takagi (Japan)" },
      { label: "Available Models", value: "OM-6, OM-9, OM-19" },
      { label: "Illumination type", value: "LED (Optimized)" },
      { label: "OM-19 Features", value: "Zoom, X-Y Coupling, Red-Reflex Adjustment" },
      { label: "Support", value: "WhatsApp +91-8754517944 / +91-9176054051" }
    ]
  },
  {
    id: 924,
    isSoldOut: false,

    name: "XENOTRON XENON LIGHT SOURCE",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Products/xenotron-xenon-img1.png",
    tag: null,
    section: "shop",
    images:[
      "/assets/Products/xenotron-xenon-img1.png",
      "/assets/Products/xenotron-xenon-img2.png",
      "/assets/Products/xenotron-xenon-img3.png",
      "/assets/Products/xenotron-xenon-img4.png",
      "/assets/Products/xenotron-xenon-img5.png",
      "/assets/Products/xenotron-xenon-img6.png",
      "/assets/Products/xenotron-xenon-img7.png",

    ],
    fullDescription: "The XENOTRON III is a next-generation xenon light source designed for pars plana vitrectomy. It features a flexible, compact design that minimizes space in the operating room. The system includes the unique PHOTOTOXGUARD safety mechanism to improve clinical routine and ensure maximum light output for fundus illumination. For more details, contact +91-9176702051.",
    features: [
      "Mobile stand-alone solution compatible with any vitrectomy device",
      "PHOTOTOXGUARD: Safety system for monitoring phototoxicity limits (ISO 15004-2)",
      "Maximum light output with up to 80 lumens",
      "Intuitive color touch screen with user profile memory for up to six surgeons",
      "Dynamic adaptation of phototoxicity limits during setting changes",
      "Wide range of fiber optics compatibility",
      "Preconfigured settings for 20 to 25 gauge vitrectomy"
    ],
    specs: [
      { label: "Light Source", value: "High-power Xenon System" },
      { label: "Max Lumens", value: "80 lumens" },
      { label: "Safety System", value: "PHOTOTOXGUARD (ISO 15004-2)" },
      { label: "Compatibility", value: "Any vitrectomy device, complementing megaTRON S4HPS" },
      { label: "User Profiles", value: "Up to 6 Surgeons" },
      { label: "Operation", value: "Intuitive Color Touch Screen" }
    ]
  },
  // PRE-OWNED
  {
    id: 426,
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: true,
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
    isSoldOut: false,

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
    id: 2,
 // New Slider 2
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
    id: 5,
 // New Slider 5
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
    {
    id: 511,
    isSoldOut: false,

    name: "Oertli CR3 with SPEEP Phaco Machine",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Home/Sellingproduct/sp1.jpg",
    tag: "Rated 4.0",
    section: "bestselling",
    images: [
      "/assets/Products/oertli-cr3-img1.png",
      "/assets/Products/oertli-cr3-img2.png",
      "/assets/Products/oertli-cr3-img3.png",
      "/assets/Products/oertli-cr3-img4.png",
      "/assets/Products/oertli-cr3-img5.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/BHgGw7vr17I?si=cHkOhVcDWphVpQ82",
    fullDescription: "Oertli CR3 with SPEEP Phaco Machine\n\nThe Oertli surgical platform CataRhex 3 impressively demonstrates that great platforms can sometimes be very small. With hitherto unachieved compactness and a lightweight of five kilogrammes, the CataRhex 3 device is consistently geared to mobility and portability – without making any compromises on performance.\n\nThe CataRhex 3 is newly featured with the unique SPEEP pump, which provides even more flexibility and control. easyPhaco technology ensures safe and efficient emulsification. Oertli makes The Eye Surgery Easier, Safer and more Efficient. Oertli has become one of the highest selling Phaco machine and Vitrectomy machine selling brand in India.\n\nThanks to the HF capsulotomy tip, capsulorhexis has become incredibly easy. In the I/A mode, the SPEEP pump ensures even greater safety. A compressor has been integrated for anterior vitrectomy, and in glaucoma surgery, the HFDS application ensures excellent long-term results.\n\nCataRhex 3 ® with the incorporation of SPEEP is now Smallest Phaco Emulsificaion System with 2 Pumps. With The easyPhaco ® technology that gives highest chamber stability and stress free surgical environment for the surgeon.\n\nPurchase the CR3 with SPEEP through the Ophthall Buying Group to get the best price advantage",
    features: [
      "Third generation CataRhex family with 15 years research",
      "Programming capacity for 20 different surgeons",
      "Compact and Lightweight (5kg) for perfect portability",
      "Ultra-fast boot time (ready in 5 seconds)",
      "Unique SPEEP Mode for simultaneous Flow and Vacuum control",
      "easyPhaco® technology for highest chamber stability",
      "HF capsulotomy tip for easy capsulorhexis",
      "Integrated compressor for anterior vitrectomy",
      "Universal voltage compatibility (100-240V)"
    ],
    specs: [
      { label: "Manufacturer", value: "Oertli (Swiss Made)" },
      { label: "Pump Type", value: "Unique SPEEP Pump (2 Pumps)" },
      { label: "Weight", value: "5 kg" },
      { label: "Ready Time", value: "5 Seconds" },
      { label: "Surgeon Memory", value: "20 Profiles" },
      { label: "Phaco Technology", value: "easyPhaco®" },
      { label: "Voltage", value: "100-240 V" }
    ],
    reviews: [
      {
        id: 1,

        author: "Dr. Kshijit Shukul",
        initials: "KS",
        date: "December 21, 2024",
        rating: 4,
        content: "Recently Installed Oertli Catarhex 3 phaco machine. Thanks Dr Senthil and the entire Ophthall team for helping me in procuring the machine. It is a real boon for all beginners and small practioners.",
        location: "Lucknow"
      },
      {
        id: 2,

        author: "Dr Rashmeet Arora Nakra",
        initials: "RA",
        date: "December 26, 2024",
        rating: 4,
        content: "It was really easy and the prices were better than the market in Ophthall Buying Group. Thank you for making the group and helping us with the process for Oertli CR 3 Speep. I recommend it to all new doctors who want to buy phaco machines",
        location: "City Clinic Eye Centre, Aligarh"
      }
    ]
  },
    {
    id: 417,
    isSoldOut: false,

    name: "Ophthall Clear View Slitlamp Imaging System",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4,
    image: "/assets/Home/Sellingproduct/sp2.jpeg",
    tag: null,
    section: "bestselling",
    images: [
      "/assets/Products/clearview-slitlamp-img1.png",
      "/assets/Products/clearview-slitlamp-img2.png",
      "/assets/Products/clearview-slitlamp-img3.png",
      "/assets/Products/clearview-slitlamp-img4.png",
      "/assets/Products/clearview-slitlamp-img5.png",
      "/assets/Products/clearview-slitlamp-img6.png",
      "/assets/Products/clearview-slitlamp-img7.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/ZWznXHhEnyg?si=4PQxdhkcLYhhItrw",
    fullDescription: "Ophthall Clear View Slit Lamp Imaging system is an innovative product to help improve your diagnostics and patient satisfaction. Imaging system is a good tool to demonstrate to the patients and their attenders the actual pathology and this helps in improved conversions and patient Care.\n\nOphthall Clear View Imaging system is customizable for any brand of 3 or 5 step slit lamp and is a very simple do it yourself self-installation product.\n\nVISIT OPHTHALL IMAGING PAGE FOR DETAILED INFORMATION: https://imagingsystems.ophthallmart.com/",
    features: [
      "Customizable for any brand of 3 or 5 step slit lamp",
      "Simple do it yourself (DIY) self-installation",
      "Superior Grade 80:20 Ophthall Beam Splitter (less light loss, zero observer strain)",
      "4K top Quality HDMI Camera (12.3 Megapixels 1/2.3 Inch CMOS Sensor)",
      "Raspberry pi Inbuilt 1.8 GHZ quadcore 2GB Ram processor (No external PC needed)",
      "32 GB Memory Card included",
      "Bluetooth Click Type Joystick for seamless image capture",
      "Multifunctional customized Imaging software for report generation"
    ],
    reviews: [
      {
        id: 1,

        author: "Dr Lalit Kumar",
        initials: "LK",
        date: "March 9, 2024",
        rating: 5,
        content: "One of the best innovative products launched by Ophthall, has made my work easier by demonstrating to pre op patients to convince them for procedures and post op patients to show them the good outcomes of surgery- very valuable tool for every Ophthalmologist- very economical too- Congratulations to team Ophthall",
        location: "Amrit Eye Hospital Sowcarpet – Chennai"
      }
    ]
  },
     {
    id: 425,
    isSoldOut: false,

    name: "OPHTHALL VID RECORDING SYSTEM",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 4.8,
    image: "/assets/Home/Sellingproduct/sp3.png",
    tag: "Rated 4.78",
    section: "bestselling",
    images:[
      "/assets/Home/Sellingproduct/sp3.png",
      "/assets/Products/vid-recording-img2.png",
      "/assets/Products/vid-recording-img3.png",
      "/assets/Products/vid-recording-img4.png",
      "/assets/Products/vid-recording-img5.png",
      "/assets/Products/vid-recording-img6.png",
      "/assets/Products/vid-recording-img7.png",
      "/assets/Products/vid-recording-img8.png",
      "/assets/Products/vid-recording-img9.png",
      "/assets/Products/vid-recording-img10.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/s8bbWNPZtrM?si=oirH67tnaRZ3396U",
    fullDescription: "Ophthall Vid Surgical Recording system is the best in class recording system available for any kind of surgical microscopes in the market. With more than 700+ installations all over India, it is the trusted choice for ophthalmologists for high-quality surgical documentation.\n\nDesigned for documentation, conference presentations, and patient counseling, the system provides exceptional clarity and ease of use. It features a custom-made beam splitter with an 80:20 ratio, ensuring optimal field illumination while capturing high-definition video. Compatible with all major brands including Zeiss, Appasamy, Leica, and more.\n\nVISIT OPHTHALL IMAGING PAGE: https://imagingsystems.ophthallmart.com/",
    features: [
      "Custom Made Ophthall Beam Splitter (80:20 Split Ratio)",
      "Universal Compatibility (Zeiss, Appasamy, Leica, etc.)",
      "F-60 Focal Length for C-Mount",
      "ESC 16 MP High Definition Recording Camera",
      "Inbuilt 32GB Memory Card for direct recording",
      "Full HD Video Capture Resolution (1920 x 1080)",
      "Ultra-Lightweight design (550 Grams)",
      "Simple 'Do It Yourself' self-installation",
      "Remote Control for cordless video recording"
    ],
    cameraOptions: [
      {
        name: "16 MP HDMI Camera (Standard)",
        description: "Sony Chip, Micro SD recording. Best for Anterior Segment Surgery."
      },
      {
        name: "Full HD 1080p HDR Camera & Recorder",
        description: "60 FPS Zero Delay, USB Drive recording. Best for Posterior Segment/Retinal Surgery."
      },
      {
        name: "4K Ultra-High Resolution Camera",
        description: "8 MP Premium Resolution, 60 FPS, 4K USB Recording. Premium for Retinal Surgeries."
      }
    ],
    specs: [
      { label: "Split Ratio", value: "80:20 (Viewing:Recording)" },
      { label: "Focal Length", value: "F-60 for C Mount" },
      { label: "Resolution", value: "Up to 4K Ultra HD" },
      { label: "Weight", value: "550 Grams" },
      { label: "Storage", value: "32GB SD Card / USB Drive" },
      { label: "Frame Rate", value: "Up to 60 FPS" }
    ],
    reviews: [
      {
        id: 1,

        author: "Dr Harikrishnan Vannadil",
        initials: "HV",
        date: "March 7, 2022",
        rating: 5,
        content: "A very good recording system with fantastic clarity. I managed to install it myself on my Lumera 300 microscope. The SD card recording is very good.",
        location: "Lumera 300 Installation"
      },
      {
        id: 2,

        author: "Dr ASWINI KUMAR BEHERA",
        initials: "AB",
        date: "June 7, 2023",
        rating: 5,
        content: "Extremely happy with the recording, Still the image quality is good. Thank you Dr. senthil sir and good shout out to supporting staff.",
        location: "Founder, Naitrika Super Specialty Eye Care"
      },
      {
        id: 3,

        author: "Dr Tejaswi Prasad",
        initials: "TP",
        date: "June 21, 2024",
        rating: 5,
        content: "The camera quality is excellent, capturing surgical details with great precision. Service engineer was highly knowledgeable. Highly recommend it.",
        location: "Aravind Eye Hospital, Madurai"
      },
      {
        id: 4,

        author: "Dr N R Rangaraj",
        initials: "NR",
        date: "September 4, 2022",
        rating: 5,
        content: "Good recording system, the micro SD card makes transfer of data seamless into clips for presentations and patient information.",
        location: "September 4, 2022"
      },
      {
        id: 5,

        author: "Dr. P. Raja Sekhar",
        initials: "PR",
        date: "September 4, 2022",
        rating: 5,
        content: "Very Good quality recording system. Used for retina surgeries also… Very happy with this value for money product….",
        location: "Retina Specialist"
      }
    ]
  },
    {
    id: 517,
    isSoldOut: false,

    name: "OPHTHALL-SURGICAL MICROSCOPE",
    category: "DIAGNOSTIC/SURGICAL EQUIPMENTS",
    price: "Enquire",
    rating: 5,
    image: "/assets/Home/Sellingproduct/sp4.png",
    tag: "Rated 5.0",
    section: "bestselling",
    images: [
      "/assets/Home/Sellingproduct/sp4.png",
      "/assets/Products/surgical-microscope-img1.png",
      "/assets/Products/surgical-microscope-img2.png",
      "/assets/Products/surgical-microscope-img3.png",

    ],
    fullDescription: "Ophthalmic Surgical Microscopes was born out of the need for a Top Quality Yet Affordable Microscope for the Indian Ophthalmologist. These microscopes come in various models and are made in India with Imported Optics. Now Every Ophthalmologist in India can Own a Surgical Microscope and start his own OT. These microscopes are exclusively manufactured for Ophthall by experts with more than 30+ Years Experience in Surgical Microscope Manufacturing Technologies.\n\nNow everyone can Own One",
    features: [
      "Sleek and compact Design Occupying Less Space in your Operation Theater",
      "Imported Top Quality Optics",
      "40000+ Working Hours Yellow LED Light Source",
      "Make in India Product - Designed by Ophthalmologists for Ophthalmologists",
      "Product of Ophthall Practice Development",
      "300+ Satisfied Customers all over India",
      "Most Economical and Best in Quality Microscope in India",
      "Accessories: Camera Attachment with Monitor, Red Glo Enhancer",
      "Ophthal Pro- Combo: Available for both Ophthal and ENT surgeries"
    ],
    specs: [
      { label: "Model", value: "Ophthall Pro" },
      { label: "Experience", value: "30+ Years in Manufacturing" },
      { label: "Optics", value: "Imported Top Quality" },
      { label: "Light Source", value: "Yellow LED (40000+ Working Hours)" },
      { label: "Origin", value: "Made in India" },
      { label: "Customers", value: "300+ All Over India" },
      { label: "Design", value: "Sleek & Compact" }
    ]
  },
];

export const TRENDING_PRODUCTS = [
  {
    id: 517,
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: false,

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
    isSoldOut: true,
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
    isSoldOut: false,

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
