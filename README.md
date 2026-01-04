# STRIDE & SOUL | Defy Gravity

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)
![Framer Motion](https://img.shields.io/badge/Motion-10.0-purple)

**STRIDE & SOUL** is a premium, high-performance e-commerce landing page interface designed for the future of urban footwear. Merging aerospace engineering aesthetics with street culture, this project showcases advanced web technologies including 3D interactivity, smooth scroll physics, and immersive animations.

## 🚀 Features

- **3D Interactive Hero**: A fully interactive 3D shoe model using `Three.js` and `React Three Fiber`.
- **Smooth Physics Scrolling**: Integrated `Lenis` for buttery smooth vertical scrolling experiences.
- **Horizontal Scrollytelling**: "Tech Specs" section utilizing sticky positioning and horizontal motion transforms.
- **Draggable Carousel**: Custom-built product carousel with fluid drag interactions powered by `Framer Motion`.
- **State Management**: Global cart state management using `Zustand` with persistent storage logic.
- **Modern Design System**: A bespoke "Dark Luxury" aesthetic providing a premium feel with custom typography (`Oswald` & `Inter Tight`) and a refined color palette (`Charcoal`, `Vapor`, `Lime`).
- **Responsive & Accessible**: Fully responsive layout ensuring a seamless experience across all devices.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Scrolling**: [Lenis](https://github.com/studio-freight/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18+ installed
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhinavr-19/stride-n-soul.git
   cd stride-n-soul
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

```bash
stride-n-soul/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout with smooth scroll & providers
│   └── page.tsx          # Main landing page composition
├── components/           # React components
│   ├── landing/          # Landing page specific sections (Hero, About, TechSpecs, etc.)
│   └── ui/               # Reusable UI components (Navbar, Cart, Button, etc.)
├── lib/                  # Utilities and stores
│   ├── store.ts          # Zustand store for cart & UI state
│   └── products.ts       # Mock product data
├── public/               # Static assets (images, 3D models)
└── ...config files       # Tailwind, Next.js, TypeScript configs
```

## 🎨 Customization

### Fonts
The project uses `next/font` to optimize and load Google Fonts:
- **Headings**: `Oswald`
- **Body**: `Inter Tight`

### Colors
Defined in `tailwind.config.ts` (or CSS variables):
- `bg-charcoal`: Main background
- `text-vapor`: Primary text color
- `text-lime`: Accent color

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by AR
</p>
