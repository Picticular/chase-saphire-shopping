import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="scroll-smooth overscroll-none bg-purple-600 scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
