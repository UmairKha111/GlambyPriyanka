/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stats {
  posts: number;
  followers: string;
  following: number;
  experience: string;
  clientsServed: string;
  studentsTrained: string;
}

export interface Profile {
  handle: string;
  name: string;
  title: string;
  bioPhrase: string;
  whatsappLink: string;
  location: string;
  profileImage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "bridal" | "party" | "cocktail" | "student" | "before-after";
  imageUrl: string;
  beforeImageUrl?: string; // Optional for before/after look comparison
  description: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels" | "Intermediate to Advanced";
  type: "1:1 Masterclass" | "Professional Batch" | "Group Workshop";
  description: string;
  syllabus: string[];
  price?: string; // e.g. "Contact for details"
  imageUrl: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: "Bride" | "Student" | "Party Makeup Client" | "Co-Artist";
  text: string;
  rating: number;
  date: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stats;
  biography: {
    paragraphs: string[];
    philosophy: string;
    specialties: string[];
  };
  courses: Course[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
}

/**
 * CUSTOMIZATION NOTE: 
 * You can change any text, numbers, or images on this website simply by editing this file!
 * To replace an image, change the URL to your own image path (e.g., "/assets/my-image.jpg" or an online CDN link).
 */
export const portfolioData: PortfolioData = {
  profile: {
    handle: "glambypriyannka",
    name: "Priyanka Chhabra",
    title: "Bridal Makeup Artist & Certified MUA Educator",
    bioPhrase: "Crafting flawless signature bases, timeless bridal looks, and empowering the next generation of professional makeup artists in Delhi NCR & worldwide.",
    whatsappLink: "https://wa.me/message/ATCOGAZDW7NNF1", // From Instagram screenshots
    location: "Delhi NCR, India",
    // Premium, high-quality makeup artist portrait url
    profileImage: "https://i.ibb.co/qMtjTP6h/priyanka-png.png"
  },
  stats: {
    posts: 264,
    followers: "5.2K+",
    following: 489,
    experience: "7+ Years",
    clientsServed: "1000+",
    studentsTrained: "50+"
  },
  biography: {
    paragraphs: [
      "Priyanka Chhabra is an acclaimed elite Bridal Makeup Artist and certified Educator based in Delhi NCR, with over seven years of industry-enriching experience. Known for her signature glowing base, customized skin-mimicking finishes, and timeless elegance, she has helped over 1,000 brides look like the most authentic, radiant versions of themselves on their big day.",
      "Her artistic philosophy rejects cakey layers, focusing instead on structural enhancement, skin prep excellence, and bespoke detail styling. Priyanka's meticulous eye for detail and mastery over diverse skin tones make her one of the most sought-after bridal MUAs in Delhi and destination wedding circuits.",
      "Beyond active bridal glam, Priyanka is a dedicated mentor. She has trained more than 50 professional students and mentored countless makeup enthusiasts through her highly personalized 1:1 sessions, personal masterclasses, and certified corporate workshops, nurturing creative minds into thriving beauty entrepreneurs."
    ],
    philosophy: "Makeup is not a tool to hide, but a medium to celebrate. My mission is to design a bespoke aesthetic experience that fuses timeless luxury with your natural elegance.",
    specialties: [
      "HD & 3D Airbrush Bridal Base",
      "Traditional Indian & Fusion Wedding Looks",
      "Soft Cocktail Glams & High-Fashion Editorial",
      "Monochromatic & Dewy Aesthetics",
      "Professional Skill-up & Personal Styling Education"
    ]
  },
  courses: [
    {
      id: "pro-bridal-mastery",
      title: "Professional Bridal Mastery Certification",
      duration: "4 Weeks (Intensive)",
      level: "Intermediate to Advanced",
      type: "Professional Batch",
      description: "A comprehensive, intensive program designed for aspiring and practicing artists seeking to elevate their skill to the premium bridal tier. Learn signature bases, diverse traditional styling, and business monetization.",
      syllabus: [
        "Advanced Skin Anatomy, Science & Prep Masterclass",
        "Priyanka's Signature Airbrush vs. HD Flawless Base Styling",
        "Eye Artistry: Cut crease, Smokey base, Glitter application & Lashes",
        "Traditional North Indian, South Indian & Modern Fusion Bride Looks",
        "Client Consultation, Pricing Strategy, and Portfolio Building"
      ],
      price: "Inquire for Pricing",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800&h=500",
      highlights: ["Hands-on practical sessions with live models", "Professional portfolio photoshoot included", "Government & Premium Academy-recognized Certification", "Lifetime product guidance & mentorship group access"]
    },
    {
      id: "self-makeup-1on1",
      title: "1:1 Personal Self-Makeup Masterclass",
      duration: "3 Days (Personalized)",
      level: "Beginner",
      type: "1:1 Masterclass",
      description: "Master the art of doing your own makeup like a pro. A fully personalized 1-on-1 experience tailored strictly to your unique facial features, skin type, lifestyle, and beauty desires.",
      syllabus: [
        "Skin analysis and creating your custom everyday skincare routine",
        "Perfecting the 10-Minute Daily No-Makeup base technique",
        "Transforming Day Looks into high-glam Cocktail & Party Makeup",
        "Understanding your personal vanity: Product selection & shopping list"
      ],
      price: "Custom booking",
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800&h=500",
      highlights: ["100% individual attention from Priyanka", "Custom skin & feature matching chart", "Bring-Your-Own-Vanity audit & personal shopping guide"]
    },
    {
      id: "cocktail-editorial",
      title: "Advanced Cocktail & Editorial Artistry Workshop",
      duration: "5 Days (Masterclass)",
      level: "Intermediate",
      type: "Group Workshop",
      description: "Deep dive into hot global makeup trends: extreme dewy finishes, glass skin aesthetics, graphic colors, and editorial glams suited for cocktail parties, sangeets, and pre-wedding functions.",
      syllabus: [
        "Mastering the 'Glass Skin' look & long-lasting high-dew finishes",
        "Modern Graphic Eyeliner, Foils & Halo Eye artistry",
        "Contouring & Highlighting based on distinct facial structures",
        "Social media self-promotion & professional lighting hacks"
      ],
      price: "Inquire for batch dates",
      imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800&h=500",
      highlights: ["Learn trending cocktail glams & premium photography styling", "Access to premium products and tools in-class", "Digital Certificate of Completion"]
    }
  ],
  gallery: [
    {
      id: "look-1",
      title: "The Regal Indian Crimson Bride",
      category: "bridal",
      imageUrl: "https://i.ibb.co/pjHPGxjp/Save-Clip-App-469279522-18363164245185507-8294363400481645698-n.jpg",
      beforeImageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=500", // Elegant representation for slider
      description: "A signature traditional red-lehenga bridal look featuring a flawless HD matte base, classic gold glitter cut-crease eye makeup, and a perfect bold crimson lip."
    },
    {
      id: "look-2",
      title: "Ethereal Pastel Dewy Glam",
      category: "bridal",
      imageUrl: "https://i.ibb.co/8DKG9n02/Chat-GPT-Image-Jun-17-2026-12-20-55-PM.png",
      description: "Soft pink dewy base paired with monochromatic pastel eye tones and a glossy lip. Crafted meticulously for a modern daytime luxury destination wedding."
    },
    {
      id: "look-3",
      title: "Smokey Halo Sangeet Glam",
      category: "cocktail",
      imageUrl: "https://i.ibb.co/nNKyV6Cb/Save-Clip-App-654857603-18132536389549114-7184024588564352978-n.jpg",
      description: "A high-drama metallic gold halo eye paired with a warm contour and satin finish nude lips, curated to withstand hours of intense dancing."
    },
    {
      id: "look-4",
      title: "Glowy Intimate Mehndi Glow",
      category: "party",
      imageUrl: "https://i.ibb.co/FqNTXqwy/Chat-GPT-Image-Jun-17-2026-12-25-21-PM.png",
      description: "Sun-kissed bronzed glow with minimal base and beautiful peach accents. Ideal for outdoor daytime pre-wedding celebrations."
    },
    {
      id: "look-5",
      title: "Masterclass Graduation Glam",
      category: "student",
      imageUrl: "https://i.ibb.co/3mML1msD/Save-Clip-App-623413134-18110834434637053-3545256722390102066-n.jpg",
      description: "Demonstration model created live during the Professional Certification batch, illustrating complex skin texture correction and dual-tone blending."
    },
    {
      id: "look-6",
      title: "Royal Velvet Cocktail Elegance",
      category: "cocktail",
      imageUrl: "https://i.ibb.co/YFsZfFFj/Save-Clip-App-624712262-18053275142423977-5819590484266305679-n.jpg",
      description: "Intense matte contoured base, deep dual-tone smokey eye, and warm cinnamon lips. Designed for evening high-society cocktail dinners."
    },
    {
      id: "look-7",
      title: "Student Practical Exam: Classic Wing",
      category: "student",
      imageUrl: "https://i.ibb.co/d4LWXKPW/Screenshot-2026-06-17-162912.png",
      description: "A beautifully executed winged graphic layout and clean glowing finish delivered independently by a student under Priyanka's strict personal evaluation."
    },
    {
      id: "look-8",
      title: "The Royal Minimalist Nikki Bride",
      category: "bridal",
      imageUrl: "https://i.ibb.co/236FTvj8/Screenshot-2026-06-17-163126.png",
      description: "Timeless elegance with soft lash definitions, subtle champagne shadows, and a velvet matte rose lip for a serene daytime wedding aesthetic."
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Kriti Sharma",
      role: "Bride",
      text: "Booking Priyanka for my wedding was the finest decision I made! My base did not crease or budge even after hours of emotional ceremonies and intense camera flashes. I received endless compliments on my glowy, non-cakey look!",
      rating: 5,
      date: "May 2026"
    },
    {
      id: "t2",
      name: "Riya Sethi",
      role: "Student",
      text: "The Professional Bridal Mastery course transformed my perspective toward makeup. Priyanka teaches with absolute passion and hides zero secrets—from the science of skin prep to tricks about lighting and clients, she taught everything!",
      rating: 5,
      date: "April 2026"
    },
    {
      id: "t3",
      name: "Navya Gupta",
      role: "Party Makeup Client",
      text: "I booked Priyanka for my brother's Cocktail and Sangeet party. She did an incredibly chic metallic-halo eye look that matched my velvet gown. The dewy look was fresh, comfortable, and absolutely flawless!",
      rating: 5,
      date: "February 2026"
    },
    {
      id: "t4",
      name: "Meera Oberoi",
      role: "Bride",
      text: "Priyanka's bridal styling is luxury at its best. She is calm, professional, and listens closely to your preferences. She understood my vision of a soft pastel destination lookup completely. Absolute magician!",
      rating: 5,
      date: "January 2026"
    },
    {
      id: "t5",
      name: "Diksha Arora",
      role: "Student",
      text: "The 1:1 Personal Masterclass was spectacular. I used to think doing a base is hard, but her step-by-step guidance made it so easy. Now I do my everyday and evening party look seamlessly. Worth every single penny!",
      rating: 5,
      date: "March 2026"
    }
  ]
};
