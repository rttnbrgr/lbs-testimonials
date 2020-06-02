import dan from "./assets/dan.jpeg";
import parker from "./assets/parker.jpeg";
import parr from "./assets/parr.jpeg";

// Parker Gindele

const danFulltext =
  "I was continuously impressed both by Nathan's ability to take on new technologies and his ability to thoughtfully and meaningfully engage in important dialog and planning for products and processes. \n Product development can be messy, but I found I was excited any time I knew that Nathan was involved in a key discussion. He has a knack for clarifying key issues and decisions in a tactful and disarming way.";

export const reviewDan = {
  // link: "https://medium.com/@ryanparr/6e0920bfa5d6",
  name: "Dan Blaisdell",
  title: "Director of Product Development, Sprinklr",
  avatar: dan,
  reviewText:
    "Product development can be messy, but I found I was excited any time I knew that Nathan was involved in a key discussion. He has a knack for clarifying key issues and decisions in a tactful and disarming way.",
};

const parkerFulltext =
  "I had the pleasure of working on UI/UX with Nathan on the Product Design team at Sprinklr. He empowered our team with a well documented design system and a UI kit which helped immensely with our design efforts to keep everything consistently designed and continually improving our UI. He is very thorough with documentation and plays a huge role with bridging the gap between Design and Development. Nathan has a strong eye for design and a deep understanding of current technology/development which makes him a valuable asset to any digital design team. His knowledge of the industry and his ability to empower and lead our UI designers is unmatched! I've learned a lot from Nathan, and will continue to use the knowledge I've gained during the 2 years working with him.";

export const reviewParker = {
  name: "Parker Gindale",
  title: "Product Designer, Sprinklr",
  avatar: parker,
  reviewText:
    "He plays a huge role bridging the gap between Design and Development. His knowledge of the industry and his ability to empower and lead our UI designers is unmatched!",
};

export const reviewParr = {
  link: "https://medium.com/@ryanparr/6e0920bfa5d6",
  name: "Ryan Parr",
  title: "VP Design, Sprinklr",
  avatar: parr,
  reviewText:
    "He has contributed extreme value while on the Sprinklr Product Design team... Because of his work we have saved countless hours of design & dev work.",
};

const reviews = [reviewDan, reviewParker, reviewParr];

export default reviews;
