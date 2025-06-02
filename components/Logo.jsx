import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none">
            <h1 className="text-2xl font-bold"><span className="text-blue-700">Link</span>Me<span className="text-blue-700">.</span></h1>
        </Link>
    )
}