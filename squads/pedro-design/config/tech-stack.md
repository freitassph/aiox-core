# Tech Stack — pedro-design Squad

## Frontend Design Stack

### Core
- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS v4 + CSS Custom Properties
- **Component Base:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React (stroke style)
- **Fonts:** Geist Sans + Geist Mono (via next/font)

### Animation
- **UI Animations:** Framer Motion v11+
- **Scroll Animations:** GSAP + ScrollTrigger
- **Lottie:** @lottiefiles/dotlottie-react
- **3D:** Spline (no-code) / Three.js + React Three Fiber (code)
- **SVG Animation:** GSAP + SplitType

### Design Tooling
- **Design Tool:** Figma (variáveis nativas, protótipos, auto-layout)
- **Design System:** Storybook 8+
- **Token Management:** Token Studio (Figma ↔ Code sync)
- **Icon Creation:** Figma → Lucide-style export

### Image Generation (AI)
- **Midjourney:** v6/v7 (direto ou via Discord API)
- **DALL-E 3:** OpenAI API (`openai` package)
- **Flux:** Replicate API (`replicate` package)
- **Ideogram:** API direta (para imagens com texto)
- **Runway:** Gen-3 Alpha (vídeo IA)
- **Upscaling:** Topaz Gigapixel AI / Magnific AI

### Photo Editing
- **Primary:** Adobe Lightroom (color grading)
- **Compositing:** Adobe Photoshop
- **Quick edits:** Canva Pro
- **Background removal:** Remove.bg

### Performance
- **Images:** next/image (automatic optimization)
- **Fonts:** next/font (zero layout shift)
- **Bundle:** Turbopack (default em Next.js 16)
- **Monitoring:** Vercel Analytics + Speed Insights

## Design System Dependencies
```json
{
  "dependencies": {
    "tailwindcss": "^4.0.0",
    "framer-motion": "^11.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-dropdown-menu": "^2.1.0",
    "@radix-ui/react-tooltip": "^1.1.0",
    "@radix-ui/react-popover": "^1.1.0",
    "@radix-ui/react-select": "^2.1.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "class-variance-authority": "^0.7.0",
    "tailwind-merge": "^2.3.0",
    "gsap": "^3.12.0",
    "@lottiefiles/dotlottie-react": "^0.6.0",
    "three": "^0.165.0",
    "@react-three/fiber": "^8.16.0",
    "@react-three/drei": "^9.105.0",
    "sharp": "^0.33.0",
    "@vercel/og": "^0.6.0",
    "openai": "^4.52.0",
    "replicate": "^0.31.0"
  }
}
```

## Quality Standards
- **Accessibility:** WCAG 2.1 AA (obrigatório)
- **Performance:** LCP < 2.5s, CLS < 0.1, FID < 100ms
- **Code:** TypeScript strict, ESLint, Prettier
- **Design:** Design system compliance > 95%
- **Animation:** prefers-reduced-motion sempre implementado
