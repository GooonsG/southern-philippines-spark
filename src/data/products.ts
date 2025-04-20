
import { Product } from "@/components/marketplace/ProductCard";

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 2023",
    description: "13-inch, M2 chip, 8GB RAM, 256GB SSD, Space Gray. Barely used, perfect condition.",
    price: 89000,
    image: "/public/lovable-uploads/75dc838d-8129-4852-9f4c-679cf4254e60.png",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Calculus Textbook 9th Edition",
    description: "Great condition with minimal highlights. Perfect for MATH-203 and MATH-204 courses.",
    price: 850,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
    category: "Books"
  },
  {
    id: 3,
    name: "Scientific Calculator (Texas Instruments)",
    description: "TI-84 Plus, good condition, with batteries and case included.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1000&auto=format&fit=crop",
    category: "School Supplies"
  },
  {
    id: 4,
    name: "Ergonomic Study Desk",
    description: "Adjustable height, spacious surface, includes built-in USB ports. Used for one semester.",
    price: 3750,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000&auto=format&fit=crop",
    category: "Furniture"
  },
  {
    id: 5,
    name: "Wireless Noise-Cancelling Headphones",
    description: "Sony WH-1000XM4, perfect for studying. Includes carrying case and cable.",
    price: 12000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Engineering Drawing Set",
    description: "Complete set with compass, rulers, protractor, and mechanical pencils. Like new.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1587368768252-e22e11331d1f?q=80&w=1000&auto=format&fit=crop",
    category: "School Supplies"
  }
];

export const categories = [
  { name: "Electronics", count: 8 },
  { name: "Books", count: 12 },
  { name: "School Supplies", count: 15 },
  { name: "Furniture", count: 5 },
  { name: "Clothing", count: 7 },
  { name: "Services", count: 3 }
];
