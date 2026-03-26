import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./get-dictionary";

export function getMarkdownContent(filename: string, lang: Locale) {
  const baseName = filename.replace(".md", "");
  const localeFilename = lang === "en" ? `${baseName}.md` : `${baseName}-${lang}.md`;
  const filePath = path.join(process.cwd(), localeFilename);
  
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading markdown file: ${filePath}`, error);
    return "Content not found.";
  }
}
