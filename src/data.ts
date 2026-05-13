/**
 * Memory data for the scrapbook
 */
export interface Memory {
  id: string;
  title: string;
  date: string;
  image: string;
  caption: string;
  content: string;
  tags: string[];
  rotation: number;
}

export const memories: Memory[] = [
  {
    id: "golden-hour-2024",
    title: "Golden Hour, 2024",
    date: "OCTOBER 14TH, 04:32 PM",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uhdx73EPWKm8JJhD804BWRT_xFbDr8zkRQ1tE0GRqjfez8wbNzIb5CLz0fa80_Wlvd1kgsfnMUBH_zBS7KjDFR_KZAQlHndJO5oyRXLjfj1dpOhzpHWrQTCSJlL05y3hZJEcJXO1DAWLu5n_z-Q_-T-lWvUc2cpCsfV_LcwM1YZu3YnH4J3biQVhc2AwMoGaH3M3fGmX27Jo7ywvlBsxA_DsBfmBMaHYCsDVySeIQGFmioHv6aymECDsaw",
    caption: "The light was caught in the curtains...",
    content: "Today felt like a painting waiting to happen. The air was crisp, carrying that specific scent of wet earth and drying leaves that only exists for a few weeks in October. I spent the better part of the afternoon just watching how the light moved across the floor.\n\n\"Everything is temporary, but these pages keep them still.\"\n\nI found this old film camera at the back of the closet. It still had three frames left. I took this one right as the sun hit the horizon. The way the shadows stretched long and thin felt like a secret being whispered. It’s strange how a single image can hold so much of a day's weight.",
    tags: ["afternoons", "nature-study", "home"],
    rotation: 2
  },
  {
    id: "cafe-morning",
    title: "Cafe Morning",
    date: "NOVEMBER 2ND, 10:15 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8WfF2f4MyUNrJdaifT5AWuFfF-rmEwT_NB_R1WL22Fo-zYK-b8aGMbyJoFx-ED6DJQO1VQriI-aLNhx7MJz8Ad6ooYeJO9eeBC8dN4BuTrEaUGaBoJUX25WoIStkKPtjhyLuYh_kiOIs3YmJbbY2IjM_bAWilduVNuwnmoIETxjRhvEGiIzyj2HnEGDWLP43-US5zSp0E29o4o9OJZzBYl9ETfXuNojNA7p7FYHFRzoTNctcikgsigvFVDs5jJVL2cEz5PPIO3-U",
    caption: "That morning in the cafe... ☕️",
    content: "The smell of roasting beans always takes me back. We spent hours here, just talking and drawing in our sketchbooks. The window was fogged up from the rain outside, making the whole world feel distant and soft.",
    tags: ["coffee", "sketchbook", "rainy-days"],
    rotation: -2
  },
  {
    id: "lost-in-hills",
    title: "Lost in the Hills",
    date: "JULY 15TH, 02:00 PM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCERQHa-u96f6TKFQeS04fkmUeadILnGsSpYjxD_I6ajGRc7cvmsp4Njq_lsC4V8CMGc_OwgqwbhBIhqsHeQ7CmYp70nZ6QAjeC5gk8ioM6hV37_bmzSFrxHQffmu4kgOqRnyL1F7thLsX8boBbMqQYEZZOF1OWRp_r5htIRvw2OMN3ynFdUB3RbmnO7oB4xRVA8t_3tdQObWXVELWccwlftE59ZHKlUHFTZ5D7WS5hrLq98B828Sl5kEEd7YSNZ6kC0LDywFR8gD8",
    caption: "Lost in the hills 🌿",
    content: "The green was almost overwhelming. We hiked until our legs burned, but the view from the top was worth every step. The air smelled like pine and distant summer storms.",
    tags: ["hiking", "summer", "greenery"],
    rotation: 1
  },
  {
    id: "birthday-cake",
    title: "Birthday Wish",
    date: "MAY 13TH, 08:30 PM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIxcKxu34ApvDHkcdWlzwZSNkPt5L6tltMeFuGdxjWuoHQNvjqcXwWjs9hab5AD1QvQT6X-CLOv-y10NtxLzyWBaq_HVXm0Ed7Sz7yxmPE1H4yfLOxHrQopV2MWhHbmgrXM2WDQEQZy3vJhzCWYFQ7vBhdtlICjJqkrBiDnjz_FK-gSSPStfalL7VYw3RzQnWuukPqPa2je8N_s9BUssbm1CaXYdNvZmubGVADxQgFAOk6xCJZLah-nAMSXg0zDX3JN3NW_T-SuLg",
    caption: "Make a wish! ✨🎂",
    content: "2024. Another year of magic. The cake was perfect, and the room was full of laughter and light. I felt so loved.",
    tags: ["celebration", "birthday", "cake"],
    rotation: 3
  },
  {
    id: "sleepy-head",
    title: "Sleepy Head",
    date: "APRIL 20TH, 03:00 PM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8zvZFr0b0XY-hLt8504mIRO-w_Pi1VjBCuCMPwwYJ3QwN70ZVpN58QA5zSb8odUaPx1rqjQw8WFCJxHA5lFC_RnJHbNBUUc3p2gv0sapmEpPl4V3xZf-Cs7wSjjX5r-gvWrOhSPUzzx_JHrx_a5KMKVwjBdHpT_itWHrXIH-xHU-aUL_BWJF6B0PjZYqa1xU9P8ioXD2wmPYD6NY6Grq89wyqa0aV2m-pmW4h2tVLMjHv5yy0UbJk4JWO2gATvQMyQijQ3M3KiF4",
    caption: "Sleepy head 🐾",
    content: "Found this one curled up in the sunniest spot of the house. Pure peace in a ginger ball of fur.",
    tags: ["cats", "afternoon-nap", "peaceful"],
    rotation: -1
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
