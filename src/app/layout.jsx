import '@/styles/globals.css';

export const metadata = {
  title: 'Tempara Solutions | AI Solutions for PropTech',
  description: 'Leveraging AI tools and automation to uncover hidden market opportunities, reduce operational costs, and optimize decision-making in real estate.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <script src="/debug.js" defer></script>
      </head>
      <body className="bg-primary">
        {children}
      </body>
    </html>
  );
} 