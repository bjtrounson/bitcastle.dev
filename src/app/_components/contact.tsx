import Link from "next/link";
import { Badge } from "~/components/ui/badge";

export function Contact() {
    return (
        <div className="flex flex-col my-8">
            <Badge className="text-base rounded-lg w-fit mx-auto">Contact</Badge>
            <div className="flex flex-col mt-4">
                <h3 className="text-4xl font-bold w-fit mx-auto">Get in Touch</h3>
                <span className="text-center text-gray-500">
                    Send me an message on <Link className="underline hover:text-blue-500" href="https://www.linkedin.com/in/benjamin-trounson/">Linkedin</Link>, I get make to you soon. 
                </span>
            </div>
        </div>
    )
}