import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
<footer className="px-8 md:px-30 lg:px-32 py-10 mt-40 grid gap-4">
  <div className="flex items-left justify-between">

    <div className="flex flex-col items-left">
      <Logo />
      {/* <p className="text-xs mt-1 text-left">
        Built with{" "}
        <a
          href="https://github.com/awkward-py"
          className="hover:text-primary hover:underline"
        >
          awkwardpy
        </a>
      </p> */}
      <p className="text-xs mt-2 text-center">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="text-primary hover:underline">
          LinkMe.
        </Link>{" "}
        All Rights Reserved.
      </p>
   
    </div>

 
   
      <ModeToggle />

  </div>
</footer>



    )
}