"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "./copy-button";

interface CodeInputProps {
  code: string;
  language: string;
  filename?: string;
}

export function CodeInput({ code, language, filename }: CodeInputProps) {
  const { theme } = useTheme();
  const highlighterTheme = theme === "light" ? vs : vscDarkPlus;
  return (
    <figure className="my-6">
      <div className="bg-muted py-1.5 px-4 flex justify-between items-center">
        {filename && (
          <figcaption className="font-mono flex-1 whitespace-nowrap overflow-x-auto ">
            {filename}
          </figcaption>
        )}
        <CopyButton variant="ghost" value={code} className="ml-auto" />
      </div>

      <SyntaxHighlighter
        language={language}
        style={highlighterTheme}
        customStyle={{ 
          margin: 0
        }}
        showLineNumbers
        
      >
        {code}
      </SyntaxHighlighter>
    </figure>
  );
}
