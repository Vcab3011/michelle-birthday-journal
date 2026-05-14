/**
 * Memory data for the scrapbook
 */
export interface Memory {
  id: string;
  title: string;
  date: string;
  image?: string;      // Thêm dấu ? để biến nó thành tuỳ chọn (phòng hờ)
  images?: string[];   // THÊM DÒNG NÀY: Mảng chứa nhiều ảnh
  caption: string;
  content: string;
  tags: string[];
  rotation: number;
}

export const memories: Memory[] = [
  {
    id: "gym-chronicles",
    title: "Gym Dates & Cat Energy",
    date: "FEBRUARY 18TH, 08:30 PM",
    image: "/gymmain.png", 
    // THÊM DÒNG NÀY: Điền danh sách các ảnh ông muốn hiện ở trang chi tiết vào đây
    images: ["/gymmain.png","/gym1.PNG", "/gym2.png", "/gym3.png"], 
    caption: "Gym dates and sleepy cat energy. 💪✨",
    content: "A collection of our gym moments. I love how you give it your all and then immediately turn into a sleepy kitten. No matter how exhausted you get, there's a quiet resilience in you. Siempre hermosa, even when you're completely exhausted. Cultivating strength together, one day at a time.",
    tags: ["gym", "sleepy-cat", "mi-niña"],
    rotation: 2
  },
  {
    id: "cafe-and-smiles",
    title: "Café, Food & You",
    date: "MARCH 12TH, 12:45 PM",
    image: "/sbmain.png", 
    // Điền các ảnh khác vào mảng này
    images: ["/sbmain.png", "/coffee_1.png"], 
    caption: "Café, deep talks y esa sonrisa tuya. ☕🤍",
    content: "From Starbucks runs to random bursts of excitement over good food. Catching those quiet moments when your beautifully complex mind is at work is a privilege. Y esa sonrisa tuya... it's my absolute favorite. I could watch you enjoy these little things all day. Porque cada momento contigo es arte.",
    tags: ["coffee", "foodie", "esa-sonrisa"],
    rotation: -2
  },
  {
    id: "wildlife-halifax",
    title: "Escapes & Adventures",
    date: "APRIL 28TH, 03:15 PM",
    image: "/halifaxmain.png", 
    images: ["/halifaxmain.png", "/halifax_1.png"],
    caption: "Paz, tranquilidad y aventuras en Halifax. 🌲🌊",
    content: "Whether we are looking at animals in the park or exploring Halifax by the water, being with you feels like peace. You in your natural element, surrounded by nature and your whimsy. Creando recuerdos inolvidables contigo. Every little trip is a new beautiful chapter in our story.",
    tags: ["wildlife", "halifax", "paz"],
    rotation: 1
  },
  {
    id: "everyday-magic",
    title: "En Cada Fase",
    date: "MAY 10TH, 05:00 PM",
    image: "/happymain.png", 
    images: ["/happymain.png", "/art_1.png", "/art_2.png"],
    caption: "Art stores, car snacks, and the real you. 🎨🌙",
    content: "Looking at sketchbooks for your graphic design dreams, sleeping in massage chairs, and snacking in the car. These are the random, beautiful moments of your día a día. I will always cherish the real you—en cada fase y en cada versión de ti. Seeing your passion and just being comfortable around me means the world.",
    tags: ["art", "everyday-magic", "mi-luna"],
    rotation: -3
  }
];

export interface Letter {
  id: string;
  date: string;
  content: string;
  image?: string;
  rotation: number;
}

export const letters: Letter[] = [
  {
    id: "letter-1",
    date: "August 14th",
    content: "I found that old pressed flower we tucked into the copy of 'Emma'. It made me think of that hazy afternoon by the lake. The water was so still, and the light caught the edge of your laugh. I keep coming back to these small moments. They feel like anchors.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB26jo4zi0QaQffPsf-VVuxrkzLPMtNVuV9vGAVPR2VX9TyzDLuzCE1KedZZp0GN8p_SzNdQ_UbPj93_FoI7noEfbaxmKEWH_qhF2OalXSew-jXgk4RJQVvxb2J_XaRHytDkzKcEg3vL_qx0dtIUnaohCsOyDp7UEPeEK0xLznMcszjoFGmbzh_PucTW-fj-OohwNtWuOP6GaZLPRuX3Xl5Mc0gozE6Mwt_3SD47LhxvVj93QJSDZsbymYjpzxkvrQNnIkC2esAAoI",
    rotation: -1
  }
];