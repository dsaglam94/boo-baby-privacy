import Header from "@/components/Header";
import ReactMarkdown from "react-markdown";
import { getMarkdownContent } from "@/lib/markdown";
import type { Locale } from "@/lib/get-dictionary";

export default async function SupportPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const content = getMarkdownContent("support.md", lang);

  return (
    <main>
      <Header lang={lang} />
      <div className="container glass-panel markdown-content" style={{
        marginTop: '2rem',
        borderRadius: '1.5rem',
        padding: '3rem'
      }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  );
}
