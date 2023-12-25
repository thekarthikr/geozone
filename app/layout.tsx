import { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "sonner";
import { Navbar } from "../components/shared/Nav/navbar";
import Footer from "../components/shared/footer";
import  {createClient , repositoryName} from '@/prismicio'
import { PrismicPreview } from "@prismicio/next";




const heading = localFont({
  src: "../public/fonts/headingFont.woff2",
  variable: "--font-heading",
});

const body = localFont({
  src: "../public/fonts/bodyFont.woff2",
  variable: "--font-body",
});


 

 
// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const setting = await client.getSingle("settings")


//   return {
//     title: setting.data.meta_title,
//     description:setting.data.meta_description,
//     openGraph: {
//       images: [setting.data.og_image.url || ""],
//     },
//   }
// }
 



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${heading.variable} ${body.variable} overflow-x-hidden`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            
          >

           <Navbar/>

            <main >
              {children}
            </main>
            <Footer/>
          </ThemeProvider>
          <Toaster position="top-center" richColors expand closeButton />
          <PrismicPreview  repositoryName={repositoryName} />
      </body>
    </html>
  );
}
