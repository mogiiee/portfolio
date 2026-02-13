import type { Metadata } from "next";
import "./globals.css";
import { resume } from "@/data/resume";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: `${resume.name} | ${resume.title}`,
  description: resume.summary
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body data-font={resume.theme.fontPreset}>
        {children}
      </body>
    </html>
  );
}
