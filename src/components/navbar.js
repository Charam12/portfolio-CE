import Link from "next/link";

export default function Navbar () {

    return (
        <nav className="flex justify-between bg-slate-300 py-4 px-12 items-center">
            <div>
                <span className="font-bold text-xl">Portfolio</span>
            </div>
            <ul className="flex gap-5  items-center">
                <li className="block font-bold uppercase text-sm">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="block font-bold uppercase text-sm">
                    <Link href={'/hobby'}>Hobby</Link>
                </li>
                <li className="block font-bold uppercase text-sm">
                    <Link href={'/project'}>Project</Link>
                </li>
            </ul>
        </nav>
    )
}