// ============================================================
// RITZ CARLTON BAL HARBOUR — POOL #1004 — DATA FILE
// Update this file to update the tracker. Push to GitHub.
// ============================================================
// COLUMNS: vendor, code, desc, qty, unit, unitCost, noShip, paid, commPaid, notes
// noShip: true = no shipping (Blondie's, existing on property items)
// paid: amount paid to vendor so far (update as payments go out)
// commPaid: true/false — has HI commission been transferred to operating?

const BUDGET_DATA = [

  // ──────────────────────────────────────────────
  // 179 DESIGN  (Total: $106,509.00)
  // ──────────────────────────────────────────────
  {vendor:"179 DESIGN", code:"BA-01", desc:"Table Base (Banquette Dining Table)", qty:2, unit:"ea", unitCost:325.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"BA-02", desc:"Table Base (Wood Two Top Table)", qty:9, unit:"ea", unitCost:125.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"BE-04", desc:"Double Chaise Sun Lounge - Pool Area (White Frame)", qty:6, unit:"ea", unitCost:3400.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"BE-05", desc:"Double Chaise Sun Lounge - Members Area (Brown Frame)", qty:10, unit:"ea", unitCost:3400.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"CG-02", desc:"Rolling Waiter Station", qty:2, unit:"ea", unitCost:4000.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"CG-03", desc:"Reception Desk", qty:1, unit:"ea", unitCost:11200.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"CG-05", desc:"Reception Desk", qty:1, unit:"ea", unitCost:7300.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"CG-06", desc:"Reception Credenza", qty:1, unit:"ea", unitCost:8500.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"TB-03", desc:'Table 4 Top 36"x36" (6+1 extra)', qty:7, unit:"ea", unitCost:850.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"TB-04", desc:"Table 2 Top Rectangle (7+2 extra)", qty:9, unit:"ea", unitCost:550.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"TB-14", desc:"Side Table (VIP Cabana)", qty:6, unit:"ea", unitCost:239.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"179 DESIGN", code:"TB-15", desc:'Cocktail Table Top 30"Dx42"H (3+1 extra)', qty:4, unit:"ea", unitCost:750.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // AMAZON  (Total: $400.00)
  // ──────────────────────────────────────────────
  {vendor:"AMAZON", code:"AC-13", desc:"Garbage Can (Bathroom)", qty:2, unit:"ea", unitCost:200.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // AMERICAN UPHOLSTERY  (Total: $49,647.90)
  // ──────────────────────────────────────────────
  {vendor:"AMERICAN UPHOLSTERY", code:"BQ-2", desc:"Banquette Curved", qty:2, unit:"ea", unitCost:8789.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"AMERICAN UPHOLSTERY", code:"BQ-3", desc:"Planter Banquette", qty:1, unit:"ea", unitCost:28094.50, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"AMERICAN UPHOLSTERY", code:"FA-04", desc:"Tropicalia Fabric (Coral)", qty:16, unit:"yd", unitCost:104.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"AMERICAN UPHOLSTERY", code:"FA-28", desc:"Sunbrella Canvas White", qty:4, unit:"yd", unitCost:22.99, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"AMERICAN UPHOLSTERY", code:"FA-39", desc:"Last Splash - Willow Tree", qty:28, unit:"yd", unitCost:57.88, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"AMERICAN UPHOLSTERY", code:"FA-40", desc:"Giza - Celadon", qty:12, unit:"yd", unitCost:49.90, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // BLONDIE'S TREEHOUSE  (Total: $245,280.00 — NO SHIPPING)
  // ──────────────────────────────────────────────
  {vendor:"BLONDIE'S TREEHOUSE", code:"SF-01", desc:"Artificial Foliage and Branches", qty:1, unit:"ea", unitCost:245280.00, noShip:true, paid:0, commPaid:false, notes:"Shipping inclusive — no add'l shipping charge"},

  // ──────────────────────────────────────────────
  // BROWN JORDAN  (Total: $17,979.92)
  // ──────────────────────────────────────────────
  {vendor:"BROWN JORDAN", code:"AC-03", desc:"Ottoman Pouf", qty:4, unit:"ea", unitCost:467.93, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"BROWN JORDAN", code:"CH-14", desc:"Lounge Chair", qty:12, unit:"ea", unitCost:1342.35, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // DECOSCAPE  (Total: $80,495.00)
  // ──────────────────────────────────────────────
  {vendor:"DECOSCAPE", code:"CH-13", desc:"Sectional Sofa - Single Cabana", qty:6, unit:"ea", unitCost:3900.00, noShip:false, paid:0, commPaid:false, notes:"Link new fabrics"},
  {vendor:"DECOSCAPE", code:"CH-17", desc:"Stackable Chaise Lounge", qty:100, unit:"ea", unitCost:570.95, noShip:false, paid:0, commPaid:false, notes:"Metal finish/sling color TBD"},

  // ──────────────────────────────────────────────
  // ERICA SHAMROCK  (Total: $35,056.13)
  // ──────────────────────────────────────────────
  {vendor:"ERICA SHAMROCK", code:"FA-15", desc:"Retro Runner Ivy", qty:546, unit:"yd", unitCost:51.67, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"ERICA SHAMROCK", code:"FA-36", desc:"Last Splash - Willow Tree", qty:118.25, unit:"yd", unitCost:57.88, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // FIBERBUILT  (Total: $15,725.00)
  // ──────────────────────────────────────────────
  {vendor:"FIBERBUILT", code:"UM-08", desc:"Octagon Beach Umbrella (7.5FT)", qty:50, unit:"ea", unitCost:314.50, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // FLORIDA SEATING  (Total: $7,600.00)
  // ──────────────────────────────────────────────
  {vendor:"FLORIDA SEATING", code:"TB-16", desc:"Side Table", qty:50, unit:"ea", unitCost:152.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // HOLLAND AND SHERRY  (Total: $1,800.00)
  // ──────────────────────────────────────────────
  {vendor:"HOLLAND AND SHERRY", code:"FA-17", desc:"Holland and Sherry Genoa Kir Royale", qty:12, unit:"yd", unitCost:150.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // HOMEY CUSHION  (Total: $11,860.00)
  // ──────────────────────────────────────────────
  {vendor:"HOMEY CUSHION", code:"CU-01", desc:"Cushion Single Chaise Lounge (1.5\" or 2\" thick)", qty:80, unit:"ea", unitCost:110.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"HOMEY CUSHION", code:"CU-02", desc:"Cushion Covers Single Chaise Lounge", qty:10, unit:"ea", unitCost:50.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"HOMEY CUSHION", code:"FA-18", desc:"Canvas Seasalt", qty:0, unit:"yd", unitCost:0, noShip:false, paid:0, commPaid:false, notes:"No cost listed — confirm"},
  {vendor:"HOMEY CUSHION", code:"PI-05", desc:"Head Pillows (Peter to provide specs)", qty:32, unit:"ea", unitCost:80.00, noShip:false, paid:0, commPaid:false, notes:"Awaiting Peter specs"},

  // ──────────────────────────────────────────────
  // INSIGHT CORDLESS LIGHTING  (Total: $3,028.50)
  // ──────────────────────────────────────────────
  {vendor:"INSIGHT CORDLESS LIGHTING", code:"LT-01", desc:"Cordless Table Lamp", qty:20, unit:"ea", unitCost:118.80, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"INSIGHT CORDLESS LIGHTING", code:"LT-02", desc:"Qi Charging Trolley (24 Lamps)", qty:1, unit:"ea", unitCost:652.50, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // JANUS ET CIE  (Total: $32,520.00)
  // ──────────────────────────────────────────────
  {vendor:"JANUS ET CIE", code:"CH-05", desc:"Single Chaise Lounger - Stackable - Frame Only", qty:60, unit:"ea", unitCost:542.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // LEDGE  (Total: $2,598.00)
  // ──────────────────────────────────────────────
  {vendor:"LEDGE", code:"CH-16", desc:"In Pool Loungers", qty:2, unit:"ea", unitCost:1299.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // LIGHTS ONLINE  (Total: $2,094.00)
  // ──────────────────────────────────────────────
  {vendor:"LIGHTS ONLINE", code:"EQ-06", desc:"Ceiling Fan", qty:6, unit:"ea", unitCost:349.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // LUMENS  (Total: $2,899.75)
  // ──────────────────────────────────────────────
  {vendor:"LUMENS", code:"EQ-04", desc:"Fan Dining Pergola", qty:5, unit:"ea", unitCost:579.95, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // PALECEK  (Total: $7,404.60)
  // ──────────────────────────────────────────────
  {vendor:"PALECEK", code:"CH-03", desc:"Dining Chair Armless (8+4 extra)", qty:12, unit:"ea", unitCost:617.05, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // PRESTWICK LIMITED  (Total: $2,800.00)
  // ──────────────────────────────────────────────
  {vendor:"PRESTWICK LIMITED", code:"AC-22", desc:"Garbage Can - Central Area", qty:1, unit:"ea", unitCost:1200.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"PRESTWICK LIMITED", code:"CG-04", desc:"Towel Drop Bucket", qty:1, unit:"ea", unitCost:1600.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // PROIMI OUTDOOR/INDOOR FURNITURE  (Total: $1,645.00)
  // ──────────────────────────────────────────────
  {vendor:"PROIMI OUTDOOR/INDOOR FURNITURE", code:"LTA-01", desc:"Pendant", qty:1, unit:"ea", unitCost:1645.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // RH  (Total: $180,466.82)
  // ──────────────────────────────────────────────
  {vendor:"RH", code:"AC-04", desc:'Planters Medium (North Lawn) 27"x23"', qty:4, unit:"ea", unitCost:384.14, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"AC-05", desc:'Planters (20"x32")', qty:10, unit:"ea", unitCost:354.69, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"AC-06", desc:'Planters Medium (24"x24")', qty:3, unit:"ea", unitCost:378.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"AC-15", desc:'Planters Small (18"x18")', qty:3, unit:"ea", unitCost:200.97, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"AC-16", desc:'Planters (20"x48")', qty:5, unit:"ea", unitCost:502.38, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"AC-20", desc:'Planters Small (North Lawn) 20"x17"', qty:3, unit:"ea", unitCost:310.01, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"CH-01", desc:"Bar Stool (19+4 extra)", qty:23, unit:"ea", unitCost:678.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"CH-07", desc:"Stackable Single Chaise Lounge (44+4 extra)", qty:60, unit:"ea", unitCost:925.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"CH-09", desc:"Lounge Chair", qty:12, unit:"ea", unitCost:918.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"CH-11", desc:"Sofa", qty:4, unit:"ea", unitCost:1620.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"CH-12", desc:"Barrel Dining Armchair Frame Only (28+4 extra)", qty:32, unit:"ea", unitCost:525.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"FA-12", desc:"Cushion Single Chaise Lounge (Members Area)", qty:60, unit:"ea", unitCost:570.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"FA-19", desc:"Barrel Dining Chair Cushions (COM)", qty:32, unit:"ea", unitCost:186.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"FA-20", desc:"Bar Stool Cushions", qty:23, unit:"ea", unitCost:233.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"FA-24", desc:"Sofa Cushion (Bloom Sofa)", qty:4, unit:"ea", unitCost:812.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"FA-25", desc:"Chair Cushions (Bloom Lounge)", qty:12, unit:"ea", unitCost:306.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"FA-33", desc:"Barrel Dining Chair Cushion Covers (COM)", qty:5, unit:"ea", unitCost:186.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"FA-34", desc:"Bar Stool Cushion Covers Only", qty:5, unit:"ea", unitCost:201.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"TB-01", desc:'Coffee Table 36"', qty:3, unit:"ea", unitCost:873.76, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"TB-11", desc:'Coffee Table Rectangle (52")', qty:4, unit:"ea", unitCost:1535.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"RH", code:"TB-13", desc:'Coffee Table Round 36"', qty:1, unit:"ea", unitCost:1687.24, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // STONEYARD INC.  (Total: $3,000.00)
  // ──────────────────────────────────────────────
  {vendor:"STONEYARD INC.", code:"CH-18", desc:"Stone Bench", qty:1, unit:"ea", unitCost:3000.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // TBD (TO BE DETERMINED)  (Total: $53,034.00)
  // Items with $0 cost = existing on property / no cost yet
  // ──────────────────────────────────────────────
  {vendor:"TBD", code:"AE-03", desc:"Cabana 10'x10' (Existing)", qty:3, unit:"ea", unitCost:0, noShip:true, paid:0, commPaid:false, notes:"Existing on property — no cost"},
  {vendor:"TBD", code:"CG-01", desc:"Credenza (Cabana)", qty:6, unit:"ea", unitCost:2900.00, noShip:false, paid:0, commPaid:false, notes:"Supplier TBD"},
  {vendor:"TBD", code:"CH-19", desc:"Single Chaise Lounge Stackable Frame (Existing)", qty:20, unit:"ea", unitCost:0, noShip:true, paid:0, commPaid:false, notes:"Existing on property — no cost"},
  {vendor:"TBD", code:"PI-06", desc:"Cabana Pillows (to be specified)", qty:6, unit:"ea", unitCost:750.00, noShip:false, paid:0, commPaid:false, notes:"Specs TBD"},
  {vendor:"TBD", code:"PI-10", desc:"Head Pillows (Extra)", qty:10, unit:"ea", unitCost:80.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TBD", code:"PI-11", desc:"Throw Pillows - Lulu Day Lounge", qty:3, unit:"ea", unitCost:750.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TBD", code:"TB-05", desc:'Table Top Stone (48"D)', qty:2, unit:"ea", unitCost:2950.00, noShip:false, paid:0, commPaid:false, notes:"Supplier: EurAsia or 179"},
  {vendor:"TBD", code:"TB-07", desc:"Four Post Bed Side Table (Deco Scape)", qty:3, unit:"ea", unitCost:950.00, noShip:false, paid:0, commPaid:false, notes:"Confirm white unit with Deco Scape"},
  {vendor:"TBD", code:"TB-17", desc:"Double Chaise Lounge Side Table - Main Pool Deck", qty:6, unit:"ea", unitCost:950.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TBD", code:"TB-18", desc:"Coffee Table (Single Cabana)", qty:6, unit:"ea", unitCost:339.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TBD", code:"TB-19", desc:"Double Chaise Lounge Side Table - Members Area Pool Deck", qty:10, unit:"ea", unitCost:950.00, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TBD", code:"UM-10", desc:"Tuuci Umbrella Frames Hex 8.5' (Existing)", qty:35, unit:"ea", unitCost:0, noShip:true, paid:0, commPaid:false, notes:"Existing on property"},
  {vendor:"TBD", code:"UMB-10", desc:"Aluma-Crete Anchor Wheels White (Existing)", qty:26, unit:"ea", unitCost:0, noShip:true, paid:0, commPaid:false, notes:"Existing on property"},
  {vendor:"TBD", code:"WD-01", desc:"Front Facia (Flexible Thermal Wood Panels)", qty:6, unit:"ea", unitCost:350.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // TEDDY'S CUSTOM MARINE SEWING  (Total: $51,000.00)
  // ──────────────────────────────────────────────
  {vendor:"TEDDY'S CUSTOM MARINE SEWING", code:"FA-21", desc:"Cushion Single Chaise Lounge (Peter to provide specs)", qty:100, unit:"ea", unitCost:500.00, noShip:false, paid:0, commPaid:false, notes:"Awaiting Peter specs"},
  {vendor:"TEDDY'S CUSTOM MARINE SEWING", code:"FA-35", desc:"Dining Chair Armless Cushion Covers", qty:5, unit:"ea", unitCost:200.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // TUUCI  (Total: $308,624.08 + $7,500 PE Drawings)
  // ──────────────────────────────────────────────
  {vendor:"TUUCI", code:"PE-01", desc:"PE Drawings Cabana", qty:1, unit:"ea", unitCost:7500.00, noShip:true, paid:0, commPaid:false, notes:"Separate line per budget summary"},
  {vendor:"TUUCI", code:"AC-19", desc:"Planters (Rectangular on Wheels)", qty:5, unit:"ea", unitCost:1057.05, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"AC-21", desc:'9"x9" Stainless Steel Surface Anchor', qty:12, unit:"ea", unitCost:405.92, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"AE-01", desc:"Cabana 10'x10' (New)", qty:3, unit:"ea", unitCost:15232.05, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"BE-01", desc:"Four Post Bed (Lulu Day Lounge)", qty:3, unit:"ea", unitCost:10080.45, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"PC-01 (OPT 2)", desc:"Replacement Roof Top for Existing Cabanas (if screws can't be removed)", qty:3, unit:"ea", unitCost:5522.17, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-02", desc:"Tuuci Umbrella Square (Cantilever) - Pool Area Main", qty:6, unit:"ea", unitCost:4843.80, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-03", desc:"Tuuci Canvas (Hex)", qty:36, unit:"ea", unitCost:718.06, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-05", desc:"Tuuci Umbrella 11.0'", qty:3, unit:"ea", unitCost:3784.73, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-06", desc:"Tuuci Umbrella 8.5'", qty:5, unit:"ea", unitCost:3464.78, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-07", desc:"Tuuci Umbrella Hex (Center Post) - Members Area - Aluma Teak", qty:20, unit:"ea", unitCost:1194.74, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-09", desc:"Tuuci Umbrella Square (Cantilever) - Members Area", qty:10, unit:"ea", unitCost:4843.80, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-11", desc:"Tuuci Umbrella Hex (Center Post) - White Finish", qty:1, unit:"ea", unitCost:1194.74, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UM-12", desc:"Tuuci Umbrella Hex (Center Post) - White Finish", qty:4, unit:"ea", unitCost:1194.74, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UMB-01", desc:"G-Plate Stack Combo 400lbs", qty:3, unit:"ea", unitCost:1267.65, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UMB-02", desc:"In-Ground Security Mount Anchor (Cantilever - Pool Deck Main)", qty:6, unit:"ea", unitCost:354.38, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UMB-04", desc:"Aluma-Crete Anchor 150lbs (Wheels)", qty:5, unit:"ea", unitCost:492.08, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UMB-05", desc:"G-Plate Stack Combo 600lbs (Cantilever - Members Area)", qty:10, unit:"ea", unitCost:1723.28, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UMB-06", desc:"Aluma-Crete Anchor 150lbs (Wheels) - White Finish", qty:10, unit:"ea", unitCost:437.40, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UMB-07", desc:"Aluma-Crete Anchor 150lbs (Wheels) - Aluma Teak Finish", qty:20, unit:"ea", unitCost:492.08, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"UMB-11", desc:"Aluma-Crete Anchor 150lbs (Wheels) - White Finish (Flex Area)", qty:4, unit:"ea", unitCost:437.40, noShip:false, paid:0, commPaid:false, notes:""},
  {vendor:"TUUCI", code:"WT-01", desc:"Cabana Curtains for Existing Cabanas (per side)", qty:3, unit:"ea", unitCost:826.20, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // WALTERS WICKER  (Total: $20,860.00)
  // ──────────────────────────────────────────────
  {vendor:"WALTERS WICKER", code:"TB-06", desc:"Side Table", qty:70, unit:"ea", unitCost:298.00, noShip:false, paid:0, commPaid:false, notes:""},

  // ──────────────────────────────────────────────
  // WEST ELM  (Total: $142.40)
  // ──────────────────────────────────────────────
  {vendor:"WEST ELM", code:"AC-18", desc:'Planters Pot (13"x9")', qty:2, unit:"ea", unitCost:71.20, noShip:false, paid:0, commPaid:false, notes:""},

];

// Fixed project-level costs (not vendor line items)
const PROJECT_FIXED = {
  storage_installation: 75000.00,   // Withers Worldwide
  tuuci_pe_drawings: 7500.00,       // Already in BUDGET_DATA above as TUUCI PE-01
  blondies_shipping_credit: -24528.00,  // Remove shipping on Blondie's
  sales_tax_rate: 0.07,
  shipping_rate: 0.10,
  commission_rate: 0.10,
};
