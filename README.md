# Boo-Baby Privacy & Legal Documents

This is the repository for the legal and support documentation of the **Boo-Baby** mobile application. It is a Next.js project that renders Markdown files into a clean, modern web interface.

## Supported Documents

The repository contains the following documents in multiple languages (English, Turkish, German, French):

- **Privacy Policy**: `privacy-policy[-lang].md`
- **Terms of Use**: `terms-of-use[-lang].md`
- **Support**: `support[-lang].md`

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown files parsed with `gray-matter` and rendered with `react-markdown`.
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Development

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Structure

- `src/app/[lang]`: Main routing logic for multi-language support.
- `src/components`: UI components.
- `src/lib`: Helper functions and content fetching logic.
- `*.md`: The actual content files located in the root directory.

## Adding/Updating Content

To update a policy, simply edit the corresponding `.md` file in the root directory. The application uses these files as the source of truth.

To add a new language:
1. Create the new `.md` files (e.g., `privacy-policy-es.md`).
2. Update the language configuration if necessary.

## License

This project is **Proprietary**. All rights reserved. The source code and documentation within this repository are the exclusive property of the Boo-Baby development team. Unauthorized copying, modification, or distribution is strictly prohibited.

## Security & Safety

- **Code Integrity**: Ensure all dependencies are updated and screened for vulnerabilities.
- **Data Privacy**: No sensitive user data should be stored or handled by this frontend-only documentation repository.
- **Access Control**: Keep repository access limited to authorized contributors only.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).
