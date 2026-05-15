/**
 * Memory data for the scrapbook
 */
export interface Memory {
  id: string;
  title: string;
  date: string;
  image?: string;      
  images?: string[];   
  caption: string;
  content: string;
  tags: string[];
  rotation: number;
}

export const memories: Memory[] = [
  {
    id: "gym-chronicles",
    title: "Donde Todo Empezó",
    date: "January 14, 2026, 12:36 PM",
    image: "/gym/gymmain.png", 
    images: ["/gym/gymmain.png","/gym/gym1.png","/gym/gymvideo1.mp4", "/gym/gym2.png","/gym/gymvideo2.mp4", "/gym/gym3.png","/gym/gym4.png","/gym/gym5.png","/gym/gym6.png","/gym/gym7.png"], 
    caption: "The place it all started.💪 ",
    content: "Honestamente, I already knew who you were before this, ever since high school. But seeing your positive energy in this place is what finally gave me the courage to approach you. Jobby definitely knows how I acted back in December whenever I saw you at the gym and how I reacted when you weren't around. For the longest time, the gym felt like a battlefield to me. It was a constant fight against my past and body dysmorphia. But training with you brought an unexpected peace. Tu energía positiva y tu esfuerzo me hicieron olvidar esas batallas. Seeing you push yourself inspires me to grow even more. I am incredibly proud of all the progress you have made. Watching you hit new weights and conquer those top sets is amazing. Y la verdad, you are getting so jacked... ¡qué envidia me das! :))))) Gracias por darle un significado completamente nuevo a lo que más valoro. Here are some of my favorite moments of you putting in the work.",
    tags: ["where-it-started", "peace", "fuerza"],
    rotation: 2
  },

  {
    id: "cafe-and-smiles",
    title: "Tu Relación con la Comida",
    date: "January 24, 2026, 12:00 PM",
    image: "/sb/sbmain.png", 
    images: ["/sb/sbmain.png", "/sb/sb1.png","/sb/sb2.png","/sb/sb3.png","/sb/sb4.png","/sb/sb5.mp4","/sb/food1.png","/sb/food2.mp4","/sb/food3.png","/sb/food4.png","/sb/food5.png","/sb/grape1.mp4","/sb/grape2.mp4"], 
    caption: "Nourishing the soul y creyendo en ti, mi luna.🤍",
    content: "It broke my heart learning about what you had to go through with your eating disorder. Hearing how words from your grandmother when you were young left such a deep scar was incredibly painful for me. I can only imagine how difficult those battles were. Fue muy difícil para ti y me duele pensar en lo que tuviste que soportar. But seeing you actively work to heal that relationship with food is so inspiring. You are doing so well. I used to worry so much about your daily nutrition. I remember days when you ate under 1000 or even 500 calories and barely hit 50 grams of protein. But please look at how far you have come. Estoy tan orgulloso de ti. I am so proud of how hard you are trying and hitting your macro goals lately. You should be incredibly proud of yourself too for overcoming all of that. Eres muy fuerte, mi Michelle. These are the moments where I see you genuinely enjoying your food, and it brings me absolute joy to witness it. Sigue así. And wow, you even baked for me. I honestly never thought there would come a day when someone would take the time to bake something and give some to me. Fue una sorpresa tan linda. Even doing simple things like going grocery shopping with you is so much fun. Thank you for sharing these sweet moments with me.",
    tags: ["healing", "proud-of-you", "esa-sonrisa"],
    rotation: -2
  },
  {
    id: "wildlife-halifax",
    title: "Nuestro Refugio en el Sol",
    date: "APRIL 28TH, 03:15 PM",
    image: "/halifax/halifaxmain.png", 
    images: ["/halifax/halifaxmain.png","/halifax/park1.png","/halifax/parkvideo1.mp4","/halifax/park2.png","/halifax/parkvideo2.mp4","/halifax/halifax1.png","/halifax/halifax2.png"],
    caption: "Sunlight, peace y lo más bonito: Tú. 🌲🌊",
    content: "Of all the moments in the past five months, that day in Shubenacadie and Halifax was when I felt closest to you. Honestly, the Wildlife Park wasn't even the interesting part. Everything I saw, everything I focused on, was just you. It was such a beautiful, sunny day, but you were the one who made it bright. Being with you felt so warm and peaceful. Estar a tu lado es mi paz. It was one of my favorite days because I finally got to spend so much time with you, creating memories that I’ll keep forever. Gracias por ser mi sol en un día tan perfecto.",
    tags: ["refuge", "halifax", "mi-sol"],
    rotation: 1
  },
  {
    id: "everyday-magic",
    title: "Paz en tus Silencios",
    date: "MAY 10TH, 05:00 PM",
    image: "/happymain.png", 
    images: ["/happy/happymain.png", "/happy/happy5.png", "/happy/happyvideo1.mp4","/happy/happy1.png","/happy/happyvideo2.mp4","/happy/happy2.png","/happy/happyvideo3.mp4","/happy/happy4.png"],
    // Caption mới nhấn mạnh vào sự thấu hiểu và niềm tin
    caption: "Paz en tu silencio y amando cada versión de ti. 🌙🤍",
    content: "In the quiet moments we share together, I can often feel the weight of the worries and the negative thoughts that sometimes cloud your mind. I want to be honest with you and say that in the beginning, those days when your mood would suddenly drop used to make me feel so incredibly anxious. I would sit there and overthink everything because I was afraid that I had done something wrong or that perhaps you no longer enjoyed my presence by your side. But as time has passed, I have truly come to understand that your soul is simply carrying many heavy things that are difficult to put into words. No te preocupes más, mi niña. I promise you that if anything is ever weighing on your heart, you can always find a safe home for those thoughts with me instead of keeping them all bottled up inside. I will always be right here whenever you need me because I want you to feel completely free to share every part of your soul when you are with me. Te trataré con toda la gentileza y el cuidado que te mereces. Please do not worry because I will always be patient and I will be right here waiting for you with open arms whenever you are ready.",
    tags: ["paz", "trust", "mi-luna"],
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
    id: "birthday-letter-2026",
    date: "MAY 15TH, 2026",
    content: "Happy Birthday, Michelle. I know my artistic skills are not exactly the best but I really wanted to put all my effort into making something meaningful for your birthday with my own hands. That is why I brainstormed and built this journal for you. I wanted to find a way to show you how much I truly value the time we have spent together over these past five months. Espero que te guste de verdad. There are so many things I admire about you that I find difficult to say out loud when we are together. I see the incredible strength you have when you are pushing yourself at the gym and the even greater courage it takes for you to heal and grow every single day. Honestamente, you have become such a special part of my daily life and I find myself looking forward to every small moment with you, whether we are going to gym or just walking through the grocery store. I want you to know that I am always here to listen whenever your mind feels heavy and I promise to always treat you with the gentleness and the care that you deserve. You never have to be perfect around me because I have grown to love every phase of who you are. I hope this birthday is just the beginning of many more memories we will get to create together. Feliz cumpleaños, mi luna. You truly deserve all the beauty and peace in this world.",
    image: "/birthdaymain.png", 
    rotation: 0
  }
];