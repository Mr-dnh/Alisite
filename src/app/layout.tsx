import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
export const metadata: Metadata = { metadataBase:new URL("https://alisite.vercel.app"), title:{default:"Alisite — طراحی سایت برای کسب‌وکارها",template:"%s | Alisite"}, description:"طراحی و توسعه وب‌سایت‌های سریع، حرفه‌ای و قابل رشد برای کسب‌وکارها.", openGraph:{title:"Alisite — طراحی سایت برای کسب‌وکارها",description:"وب‌سایت‌هایی که فقط زیبا نیستند؛ برای جذب مشتری ساخته می‌شوند.",type:"website"},robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body><Navbar/>{children}</body></html>}