import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export function NavigationHeader() {
    return (
        <nav className="flex flex-row sticky z-20 mb-6 top-2 bg-white items-center justify-center border-gray-300 rounded-lg w-full max-w-4xl mx-auto mt-4 border px-4 py-2 shadow">
            <h1 className="font-bold uppercase text-xl">Benjamin Trounson</h1>
            <ul className="ml-auto">
                <li className="gap-x-2 flex flex-row">
                    <Button asChild>
                        <Link href="https://github.com/bjtrounson">
                            <Github /> Github
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="https://www.linkedin.com/in/benjamin-trounson/">
                            <Linkedin /> Linkedin
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="https://x.com/bjtrounson">
                            <Twitter /> Twitter
                        </Link>
                    </Button>
                    
                </li>
            </ul>
        </nav>
    );
}