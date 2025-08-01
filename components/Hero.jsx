import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";



export default async function Hero() {
    const user = await currentUser();
    return (
        <div className="py-14 px-6 md:px-20 lg:px-32 grid">
            <div className="border mb-4 w-fit sm:mx-auto py-1.5 px-3 rounded-full bg-background">
                  <a className="hover:underline" href="">
      <p className="text-xs flex items-center justify-center gap-1">
        <Image src="/assets/star.svg" width={14} height={14} />
        Contribute to this project on GitHub
        <ArrowRight className="h-4 w-4" />
      </p>
    </a> 
            </div>
            <div className="grid sm:place-content-center sm:text-center gap-2">
               <h2 className="block sm:hidden text-3xl max-w-md sm:max-w-3xl md:max-w-4xl sm:text-4xl font-medium md:text-5xl text-gray-900 dark:text-gray-50">
  One link to bring all your social profiles into  
  <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
    &nbsp;one place.
  </span>
</h2>

<h2 className="hidden sm:block text-3xl max-w-md sm:max-w-3xl md:max-w-4xl sm:text-4xl font-medium md:text-5xl text-gray-900 dark:text-gray-50">
  One link to bring all your 
  <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
    social profiles into one place.
  </span>
</h2>
<p className="md:text-base text-[13.5px] max-w-sm md:max-w-xl sm:text-center sm:mx-auto dark:text-gray-400 text-gray-600">Make your online presence simple and strong with LinkMe. One link connects you to endless opportunities.</p>
            </div>
            <div className="sm:flex items-center sm:justify-center grid grid-cols-2 gap-2.5 mt-7">
                <Button asChild variant="pulseBtn"><Link href={!user ? "/sign-in" : "/dashboard/manage"}>Get Started</Link></Button>
                <Button variant="outline" asChild><Link href="https://www.linkmee.xyz/awkwardpy" className="flex items-center gap-1">Preview <ArrowRight className="h-4 w-4 -rotate-45" /></Link></Button>
            </div>
        </div>
    )
}
