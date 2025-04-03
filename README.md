# Tempara Solutions Landing Page

A modern, high-converting landing page for Tempara Solutions, an AI solutions agency.

## Features

- Clean, modern design optimized for conversions
- Fully responsive and mobile-friendly
- Built with Next.js and Tailwind CSS
- Optimized for performance
- Includes all essential sections

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory
```bash
cd tempara-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app` - Next.js App Router files
- `/src/components` - React components
- `/src/styles` - CSS styles including Tailwind configuration
- `/public` - Static assets

## Customization

### Changing Colors

The primary and secondary colors can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#0055FF',
        dark: '#0044CC',
        light: '#4D8BFF',
      },
      secondary: {
        DEFAULT: '#FF4500',
        dark: '#CC3700',
        light: '#FF7A45',
      },
      // ...
    }
  }
}
```

### Adding Content

Update the content in the respective component files in `/src/components/`.

## Email Configuration

The contact form uses Nodemailer to send emails. To configure email functionality:

1. Update the `.env.local` file with your email credentials:
```
EMAIL_USER=your-email@example.com
EMAIL_RECIPIENT=your-email@example.com
EMAIL_PASSWORD=your-app-password
EMAIL_SERVICE=gmail
```

2. For Gmail, you need to use an App Password instead of your regular password:
   - Go to your Google Account > Security > 2-Step Verification > App passwords
   - Create a new app password for "Mail" and use it in the EMAIL_PASSWORD field

3. Test the email functionality at `/test-mail` before going live 