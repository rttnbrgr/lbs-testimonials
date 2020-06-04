import dan from "./assets/dan.jpeg";
import parker from "./assets/parker.jpeg";
import parr from "./assets/parr.jpeg";
import taylor from "./assets/taylor.jpeg";
import joel from "./assets/joel.jpeg";

// Dan
const danFulltext =
  "I was continuously impressed both by Nathan's ability to take on new technologies and his ability to thoughtfully and meaningfully engage in important dialog and planning for products and processes. \n Product development can be messy, but I found I was excited any time I knew that Nathan was involved in a key discussion. He has a knack for clarifying key issues and decisions in a tactful and disarming way.";

export const reviewDan = {
  name: "Dan Blaisdell",
  title: "Director of Product Development, Sprinklr",
  avatar: dan,
  fullText: danFulltext,
  reviewText:
    "Product development can be messy, but I found I was excited any time I knew that Nathan was involved in a key discussion. He has a knack for clarifying key issues and decisions in a tactful and disarming way.",
};

// Parker Gindele
const parkerFulltext =
  "I had the pleasure of working on UI/UX with Nathan on the Product Design team at Sprinklr. He empowered our team with a well documented design system and a UI kit which helped immensely with our design efforts to keep everything consistently designed and continually improving our UI. He is very thorough with documentation and plays a huge role with bridging the gap between Design and Development. Nathan has a strong eye for design and a deep understanding of current technology/development which makes him a valuable asset to any digital design team. His knowledge of the industry and his ability to empower and lead our UI designers is unmatched! I've learned a lot from Nathan, and will continue to use the knowledge I've gained during the 2 years working with him.";

export const reviewParker = {
  name: "Parker Gindale",
  title: "Product Designer, Sprinklr",
  avatar: parker,
  fullText: parkerFulltext,
  reviewText:
    "He plays a huge role bridging the gap between Design and Development. His knowledge of the industry and his ability to empower and lead our UI designers is unmatched!",
};

// Parr
const parrFulltext =
  "When I hired Nathan back in 2016 I knew he had potential. He was young eager and ready for any challenge. Fast forward to 2019. Nathan has outpaced and exceeded my expectations and his peers. While at Sprinklr Nathan built and maintain our vast Space Design System. He made inroads with developers with his deep knowledge of front-end technologies, like React. Making him a valuable connection between design to the development teams. He has contributed extreme value while on the Sprinklr Product Design team in building our first ever Design Operations program. Which included our Space design system, UIKit, and tokenization dev strategies of all of our design patterns and components. Because of this work we have saved countless hours of design & dev work. He ran a sensible Design Operations program that included the adoption of 3rd party tools, an automated central design repository where designers could work seamlessly, ongoing training for team members, brown bags, onsite training in India, and much more. He’s a pleasure to have around and a wonderful teammate and a good friend. Fast forward to now, 2020. Due to the COVID-19 pandemic, we had to cut back, and unfortunately, Nathan’s position was removed from our business. His infrastructures and lessons will live on. He’s a strong leader, mentor to others, and a talent all around. We will miss him immensely. If you are lucky to talk with Nathan, grab him while you can he will move you and your business forward with no regrets. You can thank me later.";

export const reviewParr = {
  link: "https://medium.com/@ryanparr/6e0920bfa5d6",
  name: "Ryan Parr",
  title: "VP Design, Sprinklr",
  avatar: parr,
  fullText: parrFulltext,
  reviewText:
    "He has contributed extreme value while on the Sprinklr Product Design team... Because of his work we have saved countless hours of design & dev work.",
};

// Taylor
const taylorFulltext =
  "Nathan is dedicated, knowledgeable, and a pleasure to work with. His expertise in design systems, Sketch, and Abstract has helped me tremendously as a designer. Nathan was my go-to colleague for any design-related questions—whether it be Sketch plugin recommendations, best practices for Abstract, or ways to build Sketch symbols efficiently. His work on the UI Kit has helped me create workflows at a much faster pace while maintaining design consistency and ensuring accurate deliverables. All in all, Nathan is extremely resourceful and personable; he is one of the most insightful people I have ever worked with. I hope to be able to work with him again in the future.";

export const reviewTaylor = {
  name: "Taylor Yeerong",
  title: "Visual Designer, Sprinklr",
  avatar: taylor,
  fullText: taylorFulltext,
  reviewText:
    "Nathan is dedicated, knowledgeable, and a pleasure to work with. His expertise in design systems, Sketch, and Abstract has helped me tremendously as a designer.",
};

const joelFulltext =
  "I have worked and collaborated with Nathan for a few years now and it has been a pure delight. \n There are so many ways that he has improved our teams' experience. His research in design systems and front end engineering systems help our team create maintainable, scalable, consistent, and highly performant libraries. His work connects design and engineering teams in a way that improves communications and consistency in user experience. Through this process, our developer experience was greatly improved as well. Nathan has been willing to learn and teach about the design system space at large, leading our team to better understand the \"why\" and \"how\" for our own system. He's also turned us on to industry podcasts, Gatsby, Styled Components, Styled System (and systems with similar specs/theories.) \n It's a huge asset to have someone like Nathan on your team who plays multiple roles in discussions and thinks objectively to help identify potential pitfalls and areas of improvement. \n I also appreciate the humor and playfulness he brings to situations that are ordinarily dull or tense; how he helps me (and others) meet and interact with others at networking events and conferences, and gives space for voices that aren't normally heard in conversations. \n Clearly, I highly recommend Nathan as he is one of the best coworkers I've ever had. I'm excited to see him continue to grow and look forward to learning more from him along the way.";

// Joel
export const reviewJoel = {
  name: "Joel Turner",
  title: "Product Engineer, Sprinklr",
  avatar: joel,
  fullText: joelFulltext,
  reviewText:
    "It's a huge asset to have someone like Nathan on your team who plays multiple roles in discussions and thinks objectively to help identify potential pitfalls and areas of improvement",
};

const reviews = [reviewDan, reviewParker, reviewParr, reviewTaylor, reviewJoel];

export default reviews;
