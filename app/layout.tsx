import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '강병준 포트폴리오',
  description: '프론트엔드 개발자 강병준의 포트폴리오 사이트입니다.',
  openGraph: {
    locale: 'ko_KR',
    title: '강병준 포트폴리오',
    description: '프론트엔드 개발자 강병준의 포트폴리오 사이트입니다. 오늘도 행복한 하루 되세요',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: '강병준 포트폴리오',
    images: [
      {
        url: '/profile.jpeg',
        width: 1200,
        height: 630,
      },
    ],
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
