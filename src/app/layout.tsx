import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import '@/lib/styles/globals.css'
import Navbar from "@/components/Navbar";
import { dark } from "@clerk/themes";
import StoreProvider from "./StoreProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{baseTheme:dark}}>
        <StoreProvider>
          <body>
            <ClerkLoading>
              <div>Loading</div>
            </ClerkLoading>
            <ClerkLoaded>
              <Navbar></Navbar>{children}</ClerkLoaded>
          </body>
        </StoreProvider>
      </ClerkProvider>
    </html>
  );
}
