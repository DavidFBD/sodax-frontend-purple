import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '../providers/providers';
import AppSidebar from '@/components/landing/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppStoreProvider } from '@/stores/app-store-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'SODAX Purple · Money, as it Should be Be',
  description:
    'SODAX Purple is a DeFi execution layer with modern purple and white branding. Swap, lend, and borrow seamlessly with our beautiful purple theme. One platform, coordinated liquidity, and smarter yield — no slippage, no friction.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <Providers>
            <AppStoreProvider>{children}</AppStoreProvider>
          </Providers>
        </SidebarProvider>
      </body>
    </html>
  );
}