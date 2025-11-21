# 🖥️ Terminal Portfolio

A modern, interactive portfolio website designed as a terminal interface. Built with Next.js 15, React 18, and TypeScript, this project offers a unique way to showcase your professional profile, skills, projects, and experience through a command-line inspired interface.

![Terminal Portfolio](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎯 Interactive Terminal Interface**: Navigate through your portfolio using terminal commands
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI Components**: Built with Radix UI and shadcn/ui for accessibility and aesthetics
- **⚡ Fast Performance**: Powered by Next.js 15 with Turbopack
- **🌙 Terminal Aesthetics**: Neon cyan theme with dark slate background for a futuristic look
- **📧 Contact Form**: Integrated email functionality using Resend
- **🔥 Firebase Integration**: Backend support for data management
- **♿ Accessible**: WCAG compliant with keyboard navigation support
- **🎭 Smooth Animations**: Typing effects and transitions for enhanced UX

## 🚀 Available Commands

Once the portfolio is running, you can use the following terminal commands:

| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `about` | Learn more about the portfolio owner |
| `skills` | View technical skills and proficiencies |
| `projects` | Browse portfolio projects |
| `experience` | View professional experience timeline |
| `education` | Display educational background |
| `achievements` | View personal achievements and awards |
| `contact` | Access contact form |
| `socials` | View social media links |
| `date` | Display current date and time |
| `clear` | Clear the terminal screen |

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.3.3** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5** - Type safety and developer experience

### UI & Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **shadcn/ui** - Re-usable component collection
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Component variant management
- **tailwindcss-animate** - Animation utilities

### Forms & Validation
- **React Hook Form 7.54.2** - Performant form management
- **Zod 3.24.2** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### Additional Libraries
- **Resend 6.5.2** - Email API
- **Embla Carousel** - Touch-friendly carousel
- **date-fns** - Date utility librar

## 📦 Installation

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/dragon-slayer99/Terminal_Portfolio.git
   cd Terminal_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Add your environment variables here
   # Example:
   # RESEND_API_KEY=your_resend_api_key
   ```

4. **Configure your portfolio data**
   
   Edit `src/lib/portfolio-data.json` with your personal information:
   - Name and tagline
   - About me section
   - Skills
   - Projects
   - Experience
   - Education
   - Contact details

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:9002](http://localhost:9002)

## 🏗️ Project Structure

```
Terminal_Portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── sections/          # Portfolio sections
│   │   │   ├── about.tsx
│   │   │   ├── achievements.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── education.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── help.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── socials.tsx
│   │   │   └── welcome.tsx
│   │   ├── terminal/          # Terminal components
│   │   │   ├── command-output.tsx
│   │   │   ├── terminal-header.tsx
│   │   │   └── terminal.tsx
│   │   └── ui/                # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions and data
│   │   └── portfolio-data.ts  # Portfolio data exports
│   └── tailwind.config.ts     # Tailwind configuration
├── docs/
│   └── blueprint.md           # Project blueprint
├── .env.local                 # Environment variables (not tracked)
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Customization

### Color Scheme
The default theme uses:
- **Primary**: Neon Cyan (#00FFFF)
- **Background**: Dark Slate (#2F4F4F)
- **Accent**: Pure White (#FFFFFF)

Modify the theme in `tailwind.config.ts` to customize colors.

### Fonts
- **Headings**: Orbitron (futuristic, sci-fi terminal look)
- **Body**: Roboto (clean, readable)

Update font configuration in `src/app/layout.tsx`.

### Portfolio Content
Edit `src/lib/portfolio-data.json` to update:
- Personal information
- Skills and technologies
- Project showcases
- Work experience
- Educational background
- Contact information

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 9002 with Turbopack |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!


### Other Platforms
This Next.js app can be deployed to:
- Netlify
- Railway
- Render
- AWS Amplify
- Any platform supporting Node.js

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Inspired by terminal interfaces and command-line aesthetics

## 📧 Contact

For questions or feedback, please use the contact form in the portfolio or reach out through the social links.

---

<div align="center">

**99% vide coded with AI**

</div>
