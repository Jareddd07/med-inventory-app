// ==========================================
// MedInventory Pro - JavaScript
// Inventory & Borrowing Management System
// ==========================================

// ==========================================
// DATA STRUCTURE - IMAGINATION AREA
// Add your items below following the format
// ==========================================
    let items = [];
    let borrowedItems = [];    

    const supabaseUrl = "https://gapiiywfcqcgyrkxfjgp.supabase.co";
    const supabaseKey = "sb_publishable__O3gYYpPYCJoGq8ot8akKQ_6zG9Fw6I";

    const client = supabase.createClient(supabaseUrl, supabaseKey);


    /*const items = [
    // Medical Equipment & Devices  Category
    { name: "Ambulance Collapsible Stretcher", total: 5, available: 5, category: "Medical Equipment & Devices" },
    { name: "Emergency Stretcher (stainless)", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Luxurious Stretcher", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Hospital Bed 3 cranks w/ mattress", total: 5, available: 5, category: "Medical Equipment & Devices" },
    { name: "Hospital Bed 3 cranks", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Hospital Bed", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Delivery Bed", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "IV Stand", total: 7, available: 7, category: "Medical Equipment & Devices" },
    { name: "IV Stands 4 hooks (stainless)", total: 6, available: 6, category: "Medical Equipment & Devices" },
    { name: "Mayo Stand w/ tray & wheels (stainless)", total: 6, available: 6, category: "Medical Equipment & Devices" },
    { name: "Portable Suction Machine (Desk Type)", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Portable Suction Machine", total: 2, available: 2, category: "Medical Equipment & Devices" },
    { name: "Electric Suction Apparatus", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Oxygen Tank w/ regulator (small)", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Oxygen Tank w/ regulator (big)", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "ECG Machine (Advance Medical AM303)", total: 2, available: 2, category: "Medical Equipment & Devices" },
    { name: "Tabletop Pulse Oximeter", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "BP Apparatus w/ stand", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Fire Extinguisher", total: 1, available: 1, category: "Medical Equipment & Devices" },
    { name: "Fire Extinguisher (green)", total: 1, available: 1, category: "Medical Equipment & Devices" },

    // Furnitures Category
    { name: "Wooden Table (oval)", total: 1, available: 1, category: "Furnitures" },
    { name: "Long Wooden Table", total: 4, available: 4, category: "Furnitures"},
    { name: "Wooden Table w/ glass pad", total: 1, available: 1, category: "Furnitures" },
    { name: "Steel Table (gray)", total: 1, available: 1, category: "Furnitures" },
    { name: "Teacher's Table", total: 2, available: 2, category: "Furnitures" },
    { name: "Bed Side Table", total: 1, available: 1, category: "Furnitures" },
    { name: "Side Table", total: 1, available: 1, category: "Furnitures" },
    { name: "Monoblock Chair", total: 15, available: 15, category: "Furnitures" },
    { name: "Study Chair", total: 59, available: 59, category: "Furnitures" },
    { name: "Long Chair (outside-green)", total: 1, available: 1, category: "Furnitures" },
    { name: "Long Wooden Chair (brown)", total: 2, available: 2, category: "Furnitures" },


    // Medical Devices Category
    { name: "ECG Machine (Advance Medical AM303)", total: 2, available: 2, category: "Medical Devices" },
    { name: "Portable Suction Machine", total: 2, available: 2, category: "Medical Devices" },
    { name: "Electric Suction Apparatus", total: 1, available: 1, category: "Medical Devices" },
    { name: "Tabletop Pulse Oximeter", total: 1, available: 1, category: "Medical Devices" },
    { name: "Oxygen Tank w/ regulator (small)", total: 1, available: 1, category: "Medical Devices" },
    { name: "Oxygen Tank w/ regulator (big)", total: 1, available: 1, category: "Medical Devices" },
    { name: "BP Apparatus w/ stand", total: 1, available: 1, category: "Medical Devices" },

    // Mannequins / Simulators Category
    { name: "Female Mannequin (Noelle)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Teri Androgynous Geriatric Patient Skills Trainer (NASCO)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Child Birth Simulator (VG395)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Child Birth Stimulator (VG395)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Complete Geri Nursing Skills Mannequin", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Smart Stat Patient Simulator (NASCO #1018001)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Baby Mannequin", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Baby Mannequin - Neonatal Resuscitation Trainer", total: 8, available: 8, category: "Mannequins / Simulators" },
    { name: "New Born Baby", total: 2, available: 2, category: "Mannequins / Simulators" },
    { name: "Female Mannequin (pregnant)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Torso Mannequin", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Life Form Simulator (J022-2-02)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Life Form Simulator (J021-3-03)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Life Form Simulator (J021-3-01)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Five Year Old Multipurpose Simulator (S157)", total: 1, available: 1, category: "Mannequins / Simulators" },
    { name: "Patient Care w/ CPR Mannequin (NASCO #150-1325)", total: 1, available: 1, category: "Mannequins / Simulators" },
    
    // Surgical Intruments Category
    { name: "Mayo Scissors 5 ½” (straight)", total: 1, available: 1, category: "Surgical Intsruments" },
    { name: "Mayo Scissors 6 ¾” (straight)", total: 1, available: 1, category: "Surgical Intsruments" },
    { name: "Mayo Scissors 6 ½” (angular)", total: 2, available: 2, category: "Surgical Intsruments" },
    { name: "Mayo Scissors 6 ¾” (curve)", total: 2, available: 2, category: "Surgical Intsruments" },
    { name: "Metz 5 ½” (curve)", total: 1, available: 1, category: "Surgical Intsruments" },
    { name: "Metz 7”", total: 1, available: 1, category: "Surgical Intsruments" },
    { name: "Operating Scissors 5 ½” (straight)", total: 3, available: 3, category: "Surgical Intsruments" },
    { name: "Operating Scissors 8” (straight)", total: 1, available: 1, category: "Surgical Intsruments" },
    { name: "Suture Wire Scissors 4 ¾” (straight)", total: 2, available: 2, category: "Surgical Intsruments" },
    { name: "Thumb Forceps 5 ½” (straight)", total: 2, available: 2, category: "Surgical Intsruments" },
    { name: "Tissue Forceps 5 ½” (straight)", total: 8, available: 8, category: "Surgical Intsruments" },
    { name: "Allis Forcep 6”", total: 19, available: 19, category: "Surgical Intsruments" },
    { name: "Babcock 6 ½”", total: 4, available: 4, category: "Surgical Intsruments" },
    { name: "Mosquito 5” (straight)", total: 28, available: 28, category: "Surgical Intsruments" },
    { name: "Mosquito 6” (curve)", total: 35, available: 35, category: "Surgical Intsruments" },
    { name: "Crile Forcep 6 ¼” (straight)", total: 12, available: 12, category: "Surgical Intsruments" },
    { name: "Crile Forcep 6 ¼” (curve)", total: 12, available: 12, category: "Surgical Intsruments" },
    { name: "Pean Forcep 6 ¼” (curve)", total: 24, available: 24, category: "Surgical Intsruments" },
    { name: "Pean 6 ¼” (straight)", total: 12, available: 12, category: "Surgical Intsruments" },

        
    // Laboratory Containers / Tray Category
    { name: "Kidney Basin", total: 27, available: 27, category: "Laboratory Containers / Tray" },
    { name: "Tray - porcelain", total: 12, available: 12, category: "Laboratory Containers / Tray" },
    { name: "Sterilizing Tray (big)", total: 2, available: 2, category: "Laboratory Containers / Tray" },
    { name: "Test Tube (15ml)", total: 5, available: 5, category: "Laboratory Containers / Tray" },
    { name: "Soaking Jar", total: 35, available: 35, category: "Laboratory Containers / Tray" },
    { name: "Medicine Tray (Red)", total: 34, available: 34, category: "Laboratory Containers / Tray" },
    { name: "Instrument Tray (Porcelain)", total: 8, available: 8, category: "Laboratory Containers / Tray" },

    // Linens / Clothing Category
    { name: "Linen", total: 247, available: 247, category: "Linens / Clothing" },
    { name: "Draw Sheet", total: 132, available: 132, category: "Linens / Clothing" },
    { name: "Pillow Case", total: 113, available: 113, category: "Linens / Clothing" },
    { name: "Bed Sheet", total: 1, available: 1, category: "Linens / Clothing" },
    { name: "Top Sheet", total: 1, available: 1, category: "Linens / Clothing" },
    { name: "Rubber Sheet", total: 11, available: 11, category: "Linens / Clothing" },
    { name: "Bath Towel", total: 12, available: 12, category: "Linens / Clothing" },
    { name: "Face Towel", total: 17, available: 17, category: "Linens / Clothing" },
    { name: "Lab Gown", total: 27, available: 27, category: "Linens / Clothing" },
    { name: "Patient Gown", total: 45, available: 45, category: "Linens / Clothing" },
    { name: "Surgical Gown", total: 15, available: 15, category: "Linens / Clothing" },
    { name: "Apron", total: 32, available: 32, category: "Linens / Clothing" },
    { name: "Comforter", total: 1, available: 1, category: "Linens / Clothing" },

    //Baby / Pediatric Items Category
    { name: "Baby Dress", total: 17, available: 17, category: "Baby / Pediatric Items" },
    { name: "Baby Bib", total: 14, available: 14, category: "Baby / Pediatric Items" },
    { name: "Baby Booties", total: 5, available: 5, category: "Baby / Pediatric Items" },
    { name: "Baby Cap", total: 9, available: 9, category: "Baby / Pediatric Items" },
    { name: "Baby’s Layette", total: 11, available: 11, category: "Baby / Pediatric Items" },
    { name: "Diaper Clothe", total: 10, available: 10, category: "Baby / Pediatric Items" },
    { name: "Newborn Crib w/ stand & carriage", total: 2, available: 2, category: "Baby / Pediatric Items" },

    //Others
    { name: "Pitcher", total: 37, available: 37, category: "Baby / Pediatric Items" },
    { name: "Plastic Basin", total: 24, available: 24, category: "Baby / Pediatric Items" },
    { name: "Kidney Basin", total: 35, available: 35, category: "Baby / Pediatric Items" },
    { name: "Trash Can", total: 2, available: 2, category: "Baby / Pediatric Items" },
    { name: "Trash Can (outside)", total: 1, available: 1, category: "Baby / Pediatric Items" },
    { name: "Water Container (slim)", total: 2, available: 2, category: "Baby / Pediatric Items" },
    { name: "Canister", total: 6, available: 6, category: "Baby / Pediatric Items" },
    { name: "Pail", total: 7, available: 7, category: "Baby / Pediatric Items" },
    { name: "Tray - porcelain", total: 12, available: 12, category: "Baby / Pediatric Items" },
    { name: "Medicine Tray", total: 108, available: 108, category: "Baby / Pediatric Items" },
    { name: "Hypo Tray", total: 94, available: 94, category: "Baby / Pediatric Items" },
    { name: "Soaking Tray", total: 56, available: 56, category: "Baby / Pediatric Items" },
    { name: "Mayo Tray", total: 56, available: 56, category: "Baby / Pediatric Items" },
    { name: "Instrument Tray - stainless 8x3 (porcelain)", total: 6, available: 6, category: "Baby / Pediatric Items" },
    { name: "Instrument Tray - stainless 8x3 (plastic)", total: 10, available: 10, category: "Baby / Pediatric Items" }

];*/

// Procedures Configuration
const procedures = {
handwashing: { 
        title: "Handwashing Procedure", 
        items: [
            { name: "Faucet", qty: 1 },
            { name: "Liquid Soap", qty: 1 }, 
            { name: "Wooden Pick", qty: 1 },
            { name: "Small Towel", qty: 1 },
            { name: "Lotion", qty: 1 }
        ] 
    },

    positioning_and_draping: { 
        title: "Positioning and Draping", 
        items: [
            { name: "Draping Sheet/Linen", qty: 1 }
        ] 
    },

    bedmaking: { 
        title: "Bedmaking", 
        items: [
            { name: "Bedsheet", qty: 1 },
            { name: "Pillowcase", qty: 1 },
            { name: "Drawsheet", qty: 1 },
            { name: "Blanket", qty: 1 }
        ] 
    },

    bedbath: { 
        title: "Bed Bath", 
        items: [
            { name: "Pail", qty: 1 },
            { name: "Bedpan", qty: 1 },
            { name: "Washcloth", qty: 1 },
            { name: "Soap", qty: 1 },
            { name: "Shampoo", qty: 1 },
            { name: "Towel", qty: 1 }
        ] 
    },

    hot_cold_compress: { 
        title: "Hot & Cold Compress", 
        items: [
            { name: "Hot & Cold Bag", qty: 1 },
            { name: "Hot Water", qty: 1 },
            { name: "Ice", qty: 1 },
            { name: "Pitcher with Water", qty: 1 },
            { name: "Bath Thermometer", qty: 1 },
            { name: "Cover Linen", qty: 1 }
        ] 
    },

    donning_gloves: { 
        title: "Donning and Removing Gloves", 
        items: [
            { name: "Flat Surface", qty: 1 },
            { name: "Sterile Gloves", qty: 1 }
        ] 
    },

    medication: { 
        title: "Medication Administration", 
        items: [
            { name: "Medicine", qty: 1 },
            { name: "Medicine Cup", qty: 1 },
            { name: "10 mL Syringe", qty: 1 },
            { name: "U100 Syringe", qty: 1 },
            { name: "Sterile Water", qty: 1 },
            { name: "Cotton", qty: 1 }
        ] 
    },

    vital_signs: { 
        title: "Vital Signs", 
        items: [
            { name: "BP Apparatus", qty: 1 },
            { name: "Thermometer", qty: 1 },
            { name: "Oxygen Saturation Monitor", qty: 1 },
            { name: "Watch with Second Hand", qty: 1 }
        ] 
    },

    perineal_care: { 
        title: "Perineal Care", 
        items: [
            { name: "Small Towel", qty: 1 },
            { name: "Draping Sheet", qty: 1 },
            { name: "Pitcher", qty: 1 },
            { name: "Water", qty: 1 },
            { name: "Soap", qty: 1 }
        ] 
    },

    oral_hygiene: { 
        title: "Oral Hygiene", 
        items: [
            { name: "Kidney Basin", qty: 1 },
            { name: "Toothbrush", qty: 1 },
            { name: "Toothpaste", qty: 1 },
            { name: "Water (Cup/Glass)", qty: 1 },
            { name: "Bed Table", qty: 1 },
            { name: "Mineral Oil", qty: 1 },
            { name: "Cotton Tip Applicator", qty: 1 }
        ] 
    },

    wound_care: { 
        title: "Wound Care", 
        items: [
            { name: "Gauze", qty: 1 },
            { name: "Kidney Basin", qty: 1 },
            { name: "Gloves", qty: 1 },
            { name: "Cotton Balls", qty: 1 },
            { name: "Betadine", qty: 1 },
            { name: "Adhesive Tape", qty: 1 },
            { name: "Bandage", qty: 1 }
        ] 
    },
    or_hand_scrubbing: { 
        title: "OR Hand Scrubbing", 
        items: [
            { name: "Antimicrobial Soap / Surgical Scrub Solution", qty: 1 },
            { name: "Sterile Nail Cleaner / Nail Pick", qty: 1 },
            { name: "Sterile Scrub Brush or Sponge", qty: 1 },
            { name: "Running Water with Elbow/Foot/Knee Control", qty: 1 },
            { name: "Sterile Towel", qty: 1 },
            { name: "Surgical Cap", qty: 1 },
            { name: "Face Mask", qty: 1 },
            { name: "Eye Protection / Goggles (Optional)", qty: 1 }
        ] 
    },

    sterile_gowning: { 
        title: "Sterile Gowning", 
        items: [
            { name: "Sterile Surgical Gown", qty: 1 },
            { name: "Sterile Gloves", qty: 1 },
            { name: "Sterile Field / Sterile Table", qty: 1 },
            { name: "Surgical Cap", qty: 1 },
            { name: "Face Mask", qty: 1 }
        ] 
    },

    sterile_gloving: { 
        title: "Sterile Gloving", 
        items: [
            { name: "Sterile Gloves (Correct Size)", qty: 1 },
            { name: "Sterile Gown (for Closed Gloving Technique)", qty: 1 },
            { name: "Sterile Field / Sterile Package of Gloves", qty: 1 },
            { name: "Alcohol-Based Hand Rub / Clean Hands", qty: 1 }
        ] 
    },
    range_of_motion_rom: { 
        title: "Range of Motion (ROM) Exercise", 
        items: [
            { name: "Pillow (for joint support)", qty: 1 },
            { name: "Bed or Examination Table", qty: 1 },
            { name: "Blanket or Sheet (for comfort and privacy)", qty: 1 },
            { name: "Towel or Small Roll (joint support)", qty: 1 },
            { name: "Alcohol / Hand Sanitizer", qty: 1 },
            { name: "Gloves (if needed)", qty: 1 }
        ] 
    },

    crutch_walking: { 
        title: "Crutch Walking (Crutch Training)", 
        items: [
            { name: "Axillary or Forearm Crutches", qty: 1 },
            { name: "Rubber Tips for Crutches", qty: 1 },
            { name: "Non-slip Footwear", qty: 1 },
            { name: "Gait Belt", qty: 1 },
            { name: "Measuring Tape (for crutch height)", qty: 1 },
            { name: "Alcohol / Hand Sanitizer", qty: 1 }
        ] 
    },

    mi_simulation: { 
        title: "AI Simulation: Myocardial Infarction (ER Scenario)", 
        items: [
            { name: "Stethoscope", qty: 1 },
            { name: "Blood Pressure Apparatus / Sphygmomanometer", qty: 1 },
            { name: "Cardiac Monitor", qty: 1 },
            { name: "Pulse Oximeter", qty: 1 },
            { name: "Oxygen Tank with Nasal Cannula / Face Mask", qty: 1 },
            { name: "IV Stand and IV Fluids (Normal Saline)", qty: 1 },
            { name: "IV Cannula", qty: 1 },
            { name: "Syringes and Needles", qty: 1 },
            { name: "ECG Machine", qty: 1 },
            { name: "Defibrillator", qty: 1 },
            { name: "Emergency Drug Tray", qty: 1 }
        ] 
    },
    station_1_health_assessment: {
        title: "Station 1 - Health Assessment",
        items: [
            { name: "Eyes", qty: 1 },
            { name: "Ears, Mouth, Nose, Sinus", qty: 1 },
            { name: "Skin", qty: 1 },
            { name: "Head & Neck", qty: 1 },
            { name: "Lungs and Thorax", qty: 1 },
            { name: "Breast & Heart", qty: 1 },
            { name: "Neurologic", qty: 1 },
            { name: "Musculoskeletal", qty: 1 },
            { name: "Abdomen", qty: 1 }
        ]
    },

    station_2_fundamentals: {
        title: "Station 2 - Fundamentals",
        items: [
            { name: "Handwashing", qty: 1 },
            { name: "Positioning and Draping", qty: 1 },
            { name: "Gloving", qty: 1 },
            { name: "Vital Signs", qty: 1 },
            { name: "Perineal Care (Female)", qty: 1 },
            { name: "Perineal Care (Male)", qty: 1 },
            { name: "Bedmaking", qty: 1 },
            { name: "Oral Care", qty: 1 },
            { name: "Bed Shampoo", qty: 1 },
            { name: "Bed Bath", qty: 1 },
            { name: "Wound Care", qty: 1 },
            { name: "Hot & Cold Application", qty: 1 },
            { name: "Medication - Oral", qty: 1 },
            { name: "Medication - Intradermal Injection", qty: 1 },
            { name: "Medication - Subcutaneous Injection", qty: 1 },
            { name: "Medication - Intramuscular Injection", qty: 1 },
            { name: "Medication - IV", qty: 1 }
        ]
    },

    station_2nd_year_delivery: {
        title: "2nd Year - Station 1 (Delivery Room Technique)",
        items: [
            { name: "Delivery Room Technique", qty: 1 },
            { name: "EINC", qty: 1 },
            { name: "Leopold's Maneuver", qty: 1 },
            { name: "Perineal Care", qty: 1 },
            { name: "Catheterization - Female", qty: 1 },
            { name: "Catheterization - Male", qty: 1 }
        ]
    },

    station_2nd_year_infant: {
        title: "2nd Year - Station 2 (Infant Care)",
        items: [
            { name: "BLS (Infant Resuscitation)", qty: 1 },
            { name: "FBAO", qty: 1 },
            { name: "Oxygen Administration", qty: 1 },
            { name: "Nebulization", qty: 1 },
            { name: "Infant Suctioning", qty: 1 },
            { name: "Infant NGT Feeding", qty: 1 },
            { name: "IV Changing and Discontinuing", qty: 1 },
            { name: "Rescue Breathing", qty: 1 }
        ]
    },

    station_3_or_tech: {
        title: "3rd Year - Station 1 (OR Technique)",
        items: [
            { name: "Scrubbing", qty: 1 },
            { name: "Gloving", qty: 1 },
            { name: "Instrumentation", qty: 1 },
            { name: "Skin Preparation", qty: 1 }
        ]
    },

    station_3_adult_care: {
        title: "3rd Year - Station 2 (Adult Patient Care)",
        items: [
            { name: "ECG", qty: 1 },
            { name: "Tracheostomy Care", qty: 1 },
            { name: "Colostomy Care", qty: 1 },
            { name: "NGT Adult", qty: 1 },
            { name: "Suctioning (Tracheostomy & Endotracheal)", qty: 1 },
            { name: "CBG", qty: 1 },
            { name: "Spirometry", qty: 1 },
            { name: "GCS", qty: 1 }
        ]
    },

    station_3_ortho: {
        title: "3rd Year - Station 3 (Orthopedics)",
        items: [
            { name: "Range of Motion (ROM)", qty: 1 },
            { name: "Crutches", qty: 1 }
        ]
    },

    station_4th_year_iv_therapy: {
        title: "4th Year - Station 1 (IV Therapy)",
        items: [
            { name: "BLS", qty: 1 },
            { name: "Bandaging", qty: 1 },
            { name: "CPR", qty: 1 }
        ]
    },







    
    vitals: { 
        title: "Vital Signs Assessment", 
        items: [
            { name: "Stethoscope", qty: 1 }, 
            { name: "BP Cuff (Sphygmomanometer)", qty: 1 }, 
            { name: "Thermometer (Digital)", qty: 1 },
            { name: "Penlight", qty: 1 }
        ] 
    },
    physical_exam: { 
        title: "Physical Examination", 
        items: [
            { name: "Stethoscope", qty: 1 }, 
            { name: "Reflex Hammer", qty: 1 }, 
            { name: "Penlight", qty: 1 },
            { name: "Tuning Fork", qty: 1 },
            { name: "Gloves (Latex)", qty: 1 }
        ] 
    },
    ear_exam: { 
        title: "Ear Examination", 
        items: [
            { name: "Otoscope", qty: 1 }, 
            { name: "Gloves (Latex)", qty: 1 }
        ] 
    },
    wound_dressing: { 
        title: "Wound Dressing Change", 
        items: [
            { name: "Gloves (Latex)", qty: 2 }, 
            { name: "Gauze Pads", qty: 3 }, 
            { name: "Tape (Medical)", qty: 1 },
            { name: "Alcohol (70%)", qty: 1 }
        ] 
    },
    injection: { 
        title: "Injection Procedure", 
        items: [
            { name: "Syringes (5ml)", qty: 1 }, 
            { name: "Needles", qty: 1 }, 
            { name: "Gloves (Latex)", qty: 1 },
            { name: "Cotton Balls", qty: 2 },
            { name: "Alcohol (70%)", qty: 1 }
        ] 
    }
};

// State Management
let currentTab = 'available';

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', async function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set current date and update every minute
    updateDate();
    setInterval(updateDate, 60000);
    
    // Load saved data from localStorage
    await loadData();
    
    // Initial render of all components
    renderAvailableItems();
    renderBorrowedItems();
    renderProcedures();
    //updateSummary();
    
    // Setup modal close on outside click
    setupModalListeners();
});


/**
 * Updates the current date display in header
 */
function updateDate() {
    const now = new Date();
    document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });
}

/**
 * Setup event listeners for modal interactions
 */
function setupModalListeners() {
    document.getElementById('borrowModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeBorrowModal();
        }
    });
}

// ==========================================
// NAVIGATION & UI FUNCTIONS
// ==========================================

/**
 * Transition from intro screen to main application
 */
function enterSystem() {
    document.getElementById('introScreen').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('mainApp').classList.add('fade-in');
    lucide.createIcons();
}

/**
 * Show intro screen with confirmation
 */
function showIntro() {
    if(confirm('Are you sure you want to exit the system?')) {
        document.getElementById('introScreen').classList.remove('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }
}

/**
 * Switch between main tabs/sections
 * @param {string} tab - Tab identifier ('available', 'borrowed', 'procedures')
 */
function switchTab(tab) {
    currentTab = tab;
    
    // Hide all sections
    document.getElementById('section-available').classList.add('hidden');
    document.getElementById('section-borrowed').classList.add('hidden');
    document.getElementById('section-procedures').classList.add('hidden');
    
    // Reset all tabs to inactive state
    document.getElementById('tab-available').className = 'tab-inactive py-4 px-1 text-sm font-medium flex items-center gap-2';
    document.getElementById('tab-borrowed').className = 'tab-inactive py-4 px-1 text-sm font-medium flex items-center gap-2';
    document.getElementById('tab-procedures').className = 'tab-inactive py-4 px-1 text-sm font-medium flex items-center gap-2';
    
    // Show selected section and activate tab
    document.getElementById(`section-${tab}`).classList.remove('hidden');
    document.getElementById(`tab-${tab}`).className = 'tab-active py-4 px-1 text-sm font-medium flex items-center gap-2';
    
    lucide.createIcons();
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

/**
 * Render the available items table grouped by category
 * @param {string} searchTerm - Optional search term to filter items
 */
function renderAvailableItems(searchTerm = '') {
    const container = document.getElementById('availableItemsContainer');
    container.innerHTML = '';
    
    // Group items by category
    const grouped = {};
    items.forEach(item => {
        if (!grouped[item.category]) grouped[item.category] = [];
        grouped[item.category].push(item);
    });
    
    // Sort categories alphabetically
    const sortedCategories = Object.keys(grouped).sort();
    
    let hasResults = false;
    
    sortedCategories.forEach(category => {
        // Sort items within category alphabetically
        const sortedItems = grouped[category].sort((a, b) => a.name.localeCompare(b.name));
        
        // Filter items based on search term
        const filteredItems = searchTerm 
            ? sortedItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            : sortedItems;
        
        if (filteredItems.length === 0) return;
        hasResults = true;
        
        // Create category section
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'border-b border-gray-200 last:border-b-0';
        
        // Category Header
        const header = document.createElement('div');
        header.className = 'bg-gray-50 px-6 py-3 font-bold text-gray-700 text-sm uppercase tracking-wider flex items-center gap-2 category-header';
        header.innerHTML = `<i data-lucide="folder" class="w-4 h-4"></i> ${category}`;
        categoryDiv.appendChild(header);
        
        // Items List
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'divide-y divide-gray-100';
        
        filteredItems.forEach(item => {
            const available = item.available > 0;
            const row = document.createElement('div');
            row.className = 'px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors';
            row.innerHTML = `
                <div class="flex-1">
                    <div class="flex items-center gap-3">
                        <span class="font-medium text-gray-900">${item.name}</span>
                        <span class="status-badge text-xs px-2 py-1 rounded-full ${available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                            ${item.available} left
                        </span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Total Stock: ${item.total}</div>
                </div>
                <button 
                    onclick="openBorrowModal('${item.name}')" 
                    class="px-4 py-2 rounded-md text-sm font-medium transition-all ${available 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
                    ${!available ? 'disabled' : ''}
                >
                    ${available ? 'Borrow' : 'Unavailable'}
                </button>
            `;
            itemsDiv.appendChild(row);
        });
        
        categoryDiv.appendChild(itemsDiv);
        container.appendChild(categoryDiv);
    });
    
    // Show empty state if no results
    if (!hasResults) {
        container.innerHTML = `
            <div class="text-center py-12">
                <i data-lucide="search-x" class="w-12 h-12 text-gray-300 mx-auto mb-3"></i>
                <p class="text-gray-500">No items found matching "${searchTerm}"</p>
            </div>
        `;
    }
    
    lucide.createIcons();
}

/**
 * Render the borrowed items table
 */
function renderBorrowedItems() {
    const tbody = document.getElementById('borrowedTableBody');
    const emptyState = document.getElementById('emptyBorrowedState');
    const countBadge = document.getElementById('borrowedCount');
    
    tbody.innerHTML = '';
    
    // Show empty state if no borrowed items
    if (borrowedItems.length === 0) {
        emptyState.classList.remove('hidden');
        countBadge.classList.add('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    countBadge.textContent = borrowedItems.length;
    countBadge.classList.remove('hidden');
    
    // Sort by date (newest first)
    const sorted = [...borrowedItems].sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
    
    sorted.forEach((record, index) => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${record.item}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${record.studentID}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${record.fullName}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div>${record.date}</div>
                <div class="text-xs text-gray-400">${record.time}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">${record.quantity}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onclick="returnItem(${index})" class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors flex items-center gap-1">
                    <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                    Return
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    lucide.createIcons();
}

/**
 * Render the procedures section with availability status
 */
function renderProcedures() {
    const container = document.getElementById('proceduresContainer');
    container.innerHTML = '';
    
    Object.keys(procedures).forEach(key => {
        const proc = procedures[key];
        
        // Check if all required items are available
        let allAvailable = true;
        let missingItems = [];
        
        proc.items.forEach(req => {
            const item = items.find(i => i.item === req.name);
            if (!item || item.quantity < req.qty) {
                allAvailable = false;
                missingItems.push(req.name);
            }
        });
        
        const card = document.createElement('div');
        card.className = `bg-white rounded-lg shadow p-6 border-l-4 ${allAvailable ? 'border-green-500' : 'border-red-500'} hover-card`;
        
        let itemsList = proc.items.map(req => {
            const item = items.find(i => i.name === req.name);
            const available = item && item.quantity >= req.qty;
            return `
                <li class="flex items-center justify-between py-1 ${available ? 'text-gray-700' : 'text-red-600'}">
                    <span class="flex items-center gap-2">
                        <i data-lucide="${available ? 'check-circle' : 'x-circle'}" class="w-4 h-4 ${available ? 'text-green-500' : 'text-red-500'}"></i>
                        ${req.name}
                    </span>
                    <span class="text-sm font-medium">x${req.qty}</span>
                </li>
            `;
        }).join('');
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-semibold text-gray-900">${proc.title}</h3>
                <span class="px-3 py-1 rounded-full text-xs font-bold ${allAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                    ${allAvailable ? 'Available' : 'Unavailable'}
                </span>
            </div>
            <ul class="space-y-1 mb-4 text-sm">
                ${itemsList}
            </ul>
            ${!allAvailable ? `
                <div class="mt-3 p-3 bg-red-50 rounded-md text-xs text-red-700">
                    <strong>Missing:</strong> ${missingItems.join(', ')}
                </div>
            ` : ''}
        `;
        
        container.appendChild(card);
    });
    
    lucide.createIcons();
}

/**
 * Update the summary bar with current inventory status
 */
function updateSummary() {
    const summary = items.map(item => `${item.name}: ${item.available} left`).join(' | ');
    document.getElementById('summaryText').textContent = summary;
}

// ==========================================
// BORROWING FUNCTIONS
// ==========================================

/**
 * Open the borrow modal for a specific item
 * @param {string} itemName - Name of the item to borrow
 */
function openBorrowModal(itemName) {
    const item = items.find(i => i.name === itemName);
    if (!item || item.available <= 0) return;
    
    document.getElementById('borrowItemName').value = itemName;
    document.getElementById('modalItemName').textContent = itemName;
    document.getElementById('modalItemAvailable').textContent = `${item.available} available`;
    document.getElementById('borrowQuantity').max = item.available;
    document.getElementById('borrowQuantity').value = 1;
    
    document.getElementById('borrowModal').classList.remove('hidden');
    lucide.createIcons();
}

/**
 * Close the borrow modal and reset form
 */
function closeBorrowModal() {
    document.getElementById('borrowModal').classList.add('hidden');
    document.getElementById('borrowForm').reset();
}

/**
 * Handle the borrow form submission
 * @param {Event} event - Form submit event
 */
async function handleBorrowSubmit(event) {
    event.preventDefault();

    const itemName = document.getElementById('borrowItemName').value;
    const studentId = document.getElementById('studentId').value.trim();
    const fullName = document.getElementById('fullName').value.trim();
    const quantity = parseInt(document.getElementById('borrowQuantity').value);

    const item = items.find(i => i.name === itemName);

    if (!item || item.available < quantity) {
        showToast('Not enough items available!', 'error');  
        return;
    }

    // reduce locally
    item.available -= quantity;

    const nowISO = new Date().toISOString();

    try {
        // 1. Update Inventory1 (deduct available)
        const { error: updateError } = await client
            .from('Inventory1')
            .update({ available: item.available })
            .eq('name', itemName);

        if (updateError) {
            console.log(updateError);
            showToast('Database update failed', 'error');
            return;
        }

        // 2. Insert into BorrowedItems table
        const { data, error: insertError } = await client
            .from('Inventory')
            .insert([
                {
                    item: itemName,
                    borrowers_id: studentId,
                    full_name: fullName,
                    created_at: nowISO,
                    quantity: quantity,
                    action: 'borrow'
                }
            ])
            .select();

        if (insertError) {
            console.log(insertError);
            showToast('Failed to save borrowed record', 'error');
            return;
        }

        // 3. Update local borrowedItems array (optional for UI)
        const inserted = data[0];

        borrowedItems.push({
            id: inserted.id,
            item: itemName,
            studentID: studentId,
            fullName: fullName,
            date: new Date().toLocaleDateString('en-US'),
            time: new Date().toLocaleTimeString('en-US'),
            quantity: quantity
        });

        // 4. Persist local data (if you are using local storage)
        saveData();

        // 5. Refresh UI
        closeBorrowModal();
        renderAvailableItems(document.getElementById('searchInput').value);
        renderBorrowedItems();
        renderProcedures();
        updateSummary();

        showToast(`Successfully borrowed ${quantity} ${itemName}(s)`);

    } catch (err) {
        console.log(err);
        showToast('Unexpected error occurred', 'error');
    }
}
/**
 * Process returning an item
 * @param {number} index - Index of the borrowed item record
 */
async function returnItem(index) {
    const record = borrowedItems[index];
    if (!record) return;

    const item = items.find(i => i.name === record.item);

    try {
        // 1. DELETE from Inventory table (borrow records)
        const { error: deleteError } = await client
            .from('Inventory')
            .delete()
            .eq('id', record.id)

        if (deleteError) {
            console.log(deleteError);
            showToast('Failed to remove borrow record', 'error');
            return;
        }

        // 2. UPDATE Inventory1 (add back stock)
        if (item) {
            item.available += record.quantity;

            const { error: updateError } = await client
                .from('Inventory1')
                .update({ available: item.available }) // ✅ FIXED
                .eq('name', record.item);

            if (updateError) {
                console.log(updateError);
                showToast('Database update failed', 'error');
                return;
            }
        }

        // 3. REMOVE locally
        borrowedItems.splice(index, 1);

        // 4. UI refresh
        saveData();
        renderAvailableItems(document.getElementById('searchInput').value);
        renderBorrowedItems();
        renderProcedures();
        updateSummary();

        showToast(`Returned ${record.quantity} ${record.item}(s)`);

    } catch (err) {
        console.log(err);
        showToast('Unexpected error', 'error');
    }
}

// ==========================================
// SEARCH FUNCTION
// ==========================================

/**
 * Filter available items based on search input
 */
function searchItems() {
    const searchTerm = document.getElementById('searchInput').value;
    renderAvailableItems(searchTerm);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Display toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type of toast ('success' or 'error')
 */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
     
    if (!toast || !toastMessage) {
        console.error("Toast العناصر not found in DOM");
        return;
    }

    const icon = toast.querySelector('i');

    toastMessage.textContent = message;
    
    if (icon) {
        if (type === 'error') {
            icon.className = 'w-5 h-5 text-red-400';
            icon.setAttribute('data-lucide', 'alert-circle');
        } else {
            icon.className = 'w-5 h-5 text-green-400';
            icon.setAttribute('data-lucide', 'check-circle');
        }
    }
    
    lucide.createIcons();
    toast.classList.remove('hidden');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

/**
 * Save current state to localStorage
 */
function saveData() {
    localStorage.setItem('medInventory1_borrowed', JSON.stringify(borrowedItems));
    localStorage.setItem('medInventory1_items', JSON.stringify(items));
}

/**
 * Load saved state from localStorage
 */
async function loadData() {
    // 1. Load inventory items
    const { data, error } = await client.from('Inventory1').select('*');

    if (error) {
        console.log(error);
        return;
    }

    items = data.map(row => ({
        name: row.name || row.item,
        available: row.available ?? row.quantity,
        total: row.total ?? row.quantity,
        category: row.category || "General"
    }));

    // 2. Load borrowed items from Supabase
    const { data: borrowedData, error: borrowedError } = await client
        .from('Inventory')
        .select('*');

    if (borrowedError) {
        console.log(borrowedError);
        return;
    }

    borrowedItems = borrowedData.map(row => ({
        id: row.id,
        item: row.item,
        studentID: row.borrowers_id,
        fullName: row.full_name,
        date: new Date(row.created_at).toLocaleDateString('en-US'),
        time: new Date(row.created_at).toLocaleTimeString('en-US'),
        quantity: row.quantity
    }));

    console.log("Loaded items:", items);
    console.log("Loaded borrowed items:", borrowedItems);

    // 3. Render UI
    renderAvailableItems();
    renderBorrowedItems(); // ✅ important
    renderProcedures();
    updateSummary();
}

    
    async function testConnection() {
        const { data, error } = await client
            .from('Inventory1')
            .select('*');

        if (error) {
            console.log("Error:", error);
        } else {
            console.log("Data:", data);
        }
    }

    testConnection();
    "Inventory"