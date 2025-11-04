# Sodax Frontend - Purple & White Theme

[![CI](https://github.com/DavidFBD/sodax-frontend-purple/actions/workflows/ci.yml/badge.svg)](https://github.com/DavidFBD/sodax-frontend-purple/actions/workflows/ci.yml)

This repository contains a rebuilt version of the [Sodax Frontend](https://github.com/icon-project/sodax-frontend) with a modern **purple and white branding theme**. Built with the same tech stack and monorepo architecture as the original.

## 🎨 Purple Theme Features

This rebuild maintains all the functionality of the original Sodax frontend while introducing:

- **Purple & White Color Palette**: Modern, professional purple gradients with clean white accents
- **Enhanced Visual Hierarchy**: Improved contrast and readability with the new color scheme
- **Consistent Branding**: Cohesive purple theme applied across all components and pages
- **Dark/Light Mode Support**: Purple theme variations for both light and dark modes

## Repository Structure

### Apps (`/apps`)

The `apps` directory contains various frontend applications:

- **web** (`/apps/web`): Main Next.js web application with purple theme
- **demo** (`/apps/demo`): Demo application showcasing purple-themed features
- **node** (`/apps/node`): Node.js specific implementation
- **react-solver-example** (`/apps/react-solver-example`): Example implementation of the solver

### SDK's (`/packages`)

The `packages` directory contains SDKs and libraries:

- **sdk** (`/packages/sdk`): The core SDK with purple-themed interfaces [Sodax SDK Documentation](./packages/sdk/README.md)
- **wallet-sdk-react** (`/packages/wallet-sdk-react`): Wallet Connectivity SDK with purple UI components [Wallet SDK Documentation](./packages/wallet-sdk-react/README.md)
- **dapp-kit** (`/packages/dapp-kit`): Purple-themed utility kit for React and Next.js applications [dApp Kit Documentation](./packages/dapp-kit/README.md)

## 🚀 Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom purple theme
- **UI Components**: Radix UI with purple customizations
- **State Management**: Zustand
- **Package Manager**: pnpm with workspace support
- **Build Tool**: Turbo (monorepo)
- **Code Quality**: Biome (formatting & linting)

## 🎨 Purple Theme Colors

The purple theme includes these primary colors:

- **Primary Purple**: `#7C3AED` - Main brand color
- **Light Purple**: `#A855F7` - Secondary elements
- **Deep Purple**: `#5B21B6` - Accents and borders
- **Purple Gradient**: Various gradients from light to deep purple
- **Pure White**: `#FFFFFF` - Clean backgrounds and text
- **Off-White**: `#F8FAFC` - Subtle backgrounds

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/DavidFBD/sodax-frontend-purple.git
   cd sodax-frontend-purple
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev:web
   ```

4. **Open your browser**
   Navigate to `http://localhost:3001` to see the purple-themed Sodax frontend

## 🛠️ Development

- `pnpm dev` - Start all development servers
- `pnpm dev:web` - Start only the web application
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run linting
- `pnpm pretty` - Format code
- `pnpm clean` - Clean all build artifacts

## 📄 Original vs Purple Theme

This purple theme rebuild maintains:
- ✅ All original functionality
- ✅ Same component structure
- ✅ Complete SDK compatibility
- ✅ Responsive design patterns
- 🎨 **New**: Purple and white branding
- 🎨 **New**: Enhanced visual appeal
- 🎨 **New**: Improved accessibility with better contrast

## 🤝 Contributing

We welcome contributions to improve the purple theme! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/purple-enhancement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add purple enhancement'`)
5. Push to the branch (`git push origin feature/purple-enhancement`)
6. Create a Pull Request

## 📜 License

This project maintains the same license as the original Sodax Frontend repository.

## 🔗 Links

- **Original Repository**: [icon-project/sodax-frontend](https://github.com/icon-project/sodax-frontend)
- **Purple Theme Demo**: *[Coming Soon]*
- **Documentation**: See individual package README files

---

**Built with 💜 by rebuilding the excellent Sodax Frontend with a modern purple and white theme.**