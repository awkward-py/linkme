import Logo from "@/components/Logo";
import Header from "./_components/Header";
import Link from "next/link";

export default function Layout({ children }) {
    return(
        <main>
            <Header/>
            {children}
            <div className="mt-20 mb-8 grid place-content-center text-center">
                <Logo />
                <p className="text-xs">Built with <a href="https://awkwardpy.pro">awkwardpy</a></p>
                 <p className="text-xs mt-2 text-left">
    
        <Link href="https://offtopics.in/linkme-privacy-policy" className="text-primary underline">
          Privacy Policy |
        </Link>{" "}
        <Link href="https://offtopics.in/linkme-terms&use" className="text-primary underline">
          Terms & Use
        </Link>{" "}

      </p>
            </div>
        </main>
    )
}