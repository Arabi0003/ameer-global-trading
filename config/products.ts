export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  moq: string;
};

const IMG = {
  electronics: [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80",
    "https://images.unsplash.com/photo-1625798501090-0c3b0b0b0b0b?w=500&q=80",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
    "https://images.unsplash.com/photo-1593359672778-0f0f0f0f0f0f?w=500&q=80",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  ],
  transport: [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80",
    "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80",
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&q=80",
    "https://images.unsplash.com/photo-1517940310602-26535839fe84?w=500&q=80",
    "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&q=80",
  ],
  home: [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80",
    "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb77e?w=500&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55ce644f3?w=500&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80",
    "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&q=80",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80",
  ],
  machinery: [
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80",
    "https://images.unsplash.com/photo-1581094794329-adb2e0b3f3f0?w=500&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=500&q=80",
  ],
  fashion: [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea62?w=500&q=80",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    "https://images.unsplash.com/photo-1467043237213-65a9feb53239?w=500&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f0229b9db1?w=500&q=80",
  ],
  building: [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80",
    "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=500&q=80",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a8099?w=500&q=80",
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=500&q=80",
  ],
  beauty: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80",
    "https://images.unsplash.com/photo-1571781926291-c77df809afc1?w=500&q=80",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80",
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80",
  ],
  medical: [
    "https://images.unsplash.com/photo-1581595220892-b087e4393db3?w=500&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80",
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80",
  ],
  agriculture: [
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&q=80",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&q=80",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=80",
  ],
};

const NAMES: Record<string, string[]> = {
  "Electronics & Smart Devices": [
    "Smartphone Pro Max","Wireless Earbuds X2","Power Bank 20000mAh","LED Smart TV 55\"","Laptop Ultrabook 14\"","Tablet HD 10\"","Smartwatch Sport","Bluetooth Speaker Boom","Security IP Camera","Drone 4K Pro","Gaming Console Stick","Solar Inverter 3kW","Lithium Battery Pack","POS Terminal Touch","WiFi 6 Router","USB-C Hub 7-in-1","Mechanical Keyboard RGB","Wireless Mouse Pro","Webcam Full HD","Phone Screen OEM","Motherboard ATX","Graphics Card Fan","SSD NVMe 1TB","Portable Projector","Smart Home Hub","Network Switch 24P","CCTV DVR Kit","Car Dash Cam","Action Camera 4K","Neckband Earphones","Ring Light Pro","Phone Gimbal","Power Strip USB","HDMI Cable Pack","Screen Protector Lot","Phone Case Wholesale","VR Headset Lite","E-Reader Display","Smart Plug 4-Pack","LED Strip Kit"
  ],
  "Transportation & Vehicles": [
    "Electric Tricycle Cargo","City E-Bike 500W","Motorcycle Sport 150cc","EV Compact Sedan","Truck Tire 12R22.5","Car Battery 12V 100Ah","Brake Pad Set OEM","Shock Absorber Pair","GPS Tracker 4G","Motorcycle Helmet DOT","Forklift Electric 2T","Golf Cart 4-Seater","Boat Outboard 15HP","LED Headlight Pair","Car Radiator Alloy","Windshield Front OEM","Engine Oil Filter","Spark Plug Set","Alloy Wheel 16\"","Car Audio Android","Side Mirror Electric","Fuel Pump Assembly","Clutch Kit Complete","Air Filter Heavy","Seat Cover Leather","Steering Wheel Cover","Wiper Blade Pair","Exhaust Muffler","Timing Belt Kit","Brake Disc Rotor"
  ],
  "Home & Furniture": [
    "Luxury L-Shape Sofa","Oak Dining Table 6-Seat","Orthopedic Mattress Queen","Sliding Wardrobe 3-Door","Kitchen Cabinet Set","Ceramic Floor Tile 60x60","Marble Look Slab","Crystal Chandelier 8-Arm","Smart Toilet Bidet","Shower Cubicle Glass","Blackout Curtain Set","Wooden Office Desk","Ergonomic Mesh Chair","Outdoor Patio Set","Persian Style Rug","Peel Wallpaper Roll","Stainless Cutlery 24pc","Nonstick Cookware 10pc","Microwave 25L","Air Fryer 5L","Standing Fan 18\"","Blender 2L Glass","Rice Cooker 1.8L","Coffee Maker Drip","Vacuum Cleaner Bagless","Iron Steam Pro","Bookshelf 5-Tier","TV Stand Modern","Bed Frame King","Nightstand Pair"
  ],
  "Machinery & Industrial": [
    "Diesel Generator 10kVA","Water Pump 1.5HP","CNC Router 1325","Packaging Sealer Auto","Block Making Machine","MIG Welding Machine","Air Compressor 100L","Mini Excavator","Lathe Machine Bench","Offset Printing Press","Industrial Sewing Unit","Oil Press Expeller","Food Mixer Industrial","Conveyor Belt 5m","Electric Crane Hoist","Core Drill Rig","Power Transformer 50kVA","Industrial Gate Valve","Hydraulic Press 50T","Angle Grinder 9\"","Circular Saw Bench","Pillar Drill Press","Plasma Cutter 40A","Sandblasting Cabinet","Industrial Fan 24\"","Pallet Jack 2.5T","Scaffold Tower Set","Concrete Mixer 350L","Rebar Bender","Laser Engraver 50W"
  ],
  "Fashion & Textiles": [
    "Cotton Ankara Fabric","Swiss Lace Material","Men Slim Fit Suit","Women Evening Dress","Sneakers Unisex Run","Leather Formal Shoes","Designer Handbag PU","Travel Luggage 3pc","Stainless Watch Set","UV Sunglasses Pack","Leather Belt Classic","Denim Jeans Slim","Sports Tracksuit","Cotton Underwear Pack","Kids School Uniform","Winter Puffer Coat","Silk Scarf Printed","Human Hair Wig 20\"","Baseball Cap Bulk","Hoodie Fleece Zip","Polo Shirt Pack","Yoga Leggings","Rain Jacket Light","Canvas Tote Bag","Crossbody Bag Mini","High Heel Pumps","Flip Flop Bulk","Socks Cotton 12pk","Bow Tie Set","Cufflink Box"
  ],
  "Building & Construction": [
    "Steel Rebar 12mm","Color Roofing Sheet","Cement Mixer Drum","Aluminium Window Profile","PVC Casement Window","Steel Security Door","Marine Plywood 18mm","PVC Plumbing Pipe 4\"","Emulsion Paint 20L","Water Tank 1000L","Scaffolding Frame Set","Self-Tapping Screw Box","Glass Wool Insulation","Tempered Glass Panel","Electrical Cable 2.5mm","Wall Switch Socket Kit","Solar Street Light 60W","Barbed Fencing Wire","Floor Drain Brass","Bathroom Mixer Tap","Ceiling Fan 56\"","LED Panel Light 60x60","Gypsum Board 12mm","Door Hinge Heavy","Padlock Laminated","Wheelbarrow Heavy","Shovel & Pick Set","Spirit Level 60cm","Measuring Tape 50m","Safety Helmet Bulk"
  ],
  "Beauty & Personal Care": [
    "Skincare Serum Set","Makeup Brush Kit","Hair Dryer Ionic","Electric Shaver Wet","Nail Polish Display","Perfume Atomizer 50ml","Facial Steamer Nano","Massage Gun Pro","Hair Clipper Kit","Beard Trimmer Set","Cosmetic Mirror LED","Manicure Set Steel","Body Lotion Carton","Shampoo Bulk 5L","Hair Extension Bundle","Makeup Palette 40","Lipstick Assorted","Eyelash Curl Set","Facial Cleanser Box","Sunscreen SPF50 Lot"
  ],
  "Medical & Health": [
    "Hospital Bed Manual","Portable Ultrasound","Digital X-Ray Panel","Surgical Instrument Kit","Dental Chair Unit","Folding Wheelchair","Medical Face Mask Box","Nitrile Gloves Carton","Disposable Syringe Box","Oxygen Concentrator 5L","First Aid Cabinet","IR Thermometer Gun","BP Monitor Digital","Lab Incubator","Binocular Microscope","Knee Brace Support","Massage Chair Zero-G","Stethoscope Dual","Nebulizer Compressor","Pulse Oximeter Pack"
  ],
  "Agriculture & Farming": [
    "Farm Tractor 40HP","Combine Harvester Mini","NPK Fertilizer Bag","Pesticide Sprayer 16L","Drip Irrigation Kit","Greenhouse Tunnel 6x30","Poultry Cage Battery","Egg Incubator 528","Feed Pellet Mill","Garden Sprinkler Set","Disc Plough 3-Bottom","Seed Planter Manual","Petrol Chainsaw 58cc","Lawn Mower Petrol","Solar Water Pump 2HP","Grain Silo 10T","Knapsack Sprayer","Hedge Trimmer","Bee Hive Box Set","Fish Pond Aerator"
  ],
};

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

function buildProducts(): Product[] {
  const out: Product[] = [];
  let id = 1;
  const catImg: Record<string, string[]> = {
    "Electronics & Smart Devices": IMG.electronics,
    "Transportation & Vehicles": IMG.transport,
    "Home & Furniture": IMG.home,
    "Machinery & Industrial": IMG.machinery,
    "Fashion & Textiles": IMG.fashion,
    "Building & Construction": IMG.building,
    "Beauty & Personal Care": IMG.beauty,
    "Medical & Health": IMG.medical,
    "Agriculture & Farming": IMG.agriculture,
  };

  // Generate ~1000 product entries by expanding base names with variants
  const variants = ["Standard", "Premium", "OEM", "Wholesale Pack", "Export Grade", "Pro Series", "Economy", "Heavy Duty", "Mini", "Industrial Grade"];
  for (const [category, names] of Object.entries(NAMES)) {
    const images = catImg[category] || IMG.electronics;
    let n = 0;
    // target ~110 products per major category ≈ 990 total
    while (n < 110) {
      const base = pick(names, n);
      const variant = pick(variants, n);
      const name = n < names.length ? base : `${base} — ${variant}`;
      const priceNum = 5 + ((id * 17) % 490);
      const moqNum = [10, 20, 50, 100, 200, 500][id % 6];
      out.push({
        id: id++,
        name,
        category,
        image: pick(images, n + id),
        price: `From $${priceNum}`,
        moq: `MOQ ${moqNum}`,
      });
      n++;
    }
  }
  return out;
}

export const ALL_PRODUCTS: Product[] = buildProducts();
export const CATEGORIES = Array.from(new Set(ALL_PRODUCTS.map((p) => p.category)));
export const PRODUCT_COUNT = ALL_PRODUCTS.length;
