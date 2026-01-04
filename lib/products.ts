export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    features: string[];
}

export const products: Product[] = [
    {
        id: "1",
        name: "AERO-X LIMITLESS",
        price: 295,
        category: "Performance",
        image: "/images/hero-shoe.png",
        // Classic red Nike shoe placeholder, but will serve as the "Hero" shoe
        description: "Defy gravity with the Aero-X. Engineered with zero-gravity foam and adaptive mesh for the ultimate weightless experience.",
        features: ["Zero-G Foam", "Carbon Plate", "Adaptive Knit"],
    },
    {
        id: "2",
        name: "URBAN DRIFTER",
        price: 210,
        category: "Lifestyle",
        image: "/images/shoe-green.png",
        // Green/Volt shoe
        description: "Street-ready aesthetics meet performance engineering. The Urban Drifter is built for the concrete jungle.",
        features: ["Water Repellent", "Night Reflective", "Grip Sole"],
    },
    {
        id: "3",
        name: "QUANTUM LEAP",
        price: 350,
        category: "Limited",
        image: "/images/shoe-luxury.png",
        // Premium textured shoe
        description: "A fusion of luxury materials and futuristic silhouette. Limited edition release for the bold.",
        features: ["Italian Leather", "Hand Stitching", "Memory Sole"],
    },
    {
        id: "4",
        name: "NEON STRIDE",
        price: 180,
        category: "Running",
        image: "/images/shoe-neon.png",
        // Colorful clean shoe
        description: "Light up the track. Neon Stride combines high-visibility design with explosive energy return.",
        features: ["Energy Return", "Breathable", "Lightweight"],
    },
];
