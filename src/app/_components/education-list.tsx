import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { formatDate } from "./_utils";
import Link from "next/link";
import clsx from "clsx";

type Education = {
    provider: string;
    title: string;
    imageUrl: string;
    link: string;
    fromDate: Date;
    toDate: Date;
    note?: string;
};

const educations: Education[] = [
    {
        provider: "Ara Institute of Canterbury",
        title: "Bachelor of Information and Communication Technologies",
        imageUrl: "/ara_institute_of_canterbury_logo.jpg",
        link: "",
        fromDate: new Date("01-01-2020"),
        toDate: new Date("09-01-2022")
    },
    {
        provider: "Ara Institute of Canterbury",
        title: "Diploma in Systems Administration",
        imageUrl: "/ara_institute_of_canterbury_logo.jpg",
        link: "",
        fromDate: new Date("02-01-2019"),
        toDate: new Date("02-01-2020")
    }
];

export function EducationList() {
    return (
        <div className="flex flex-col max-w-lg gap-y-2 mx-auto w-full">
            <h2 className="text-xl font-bold">Education</h2>
            <div className="bg-white border rounded-lg shadow-sm p-2 gap-y-2 flex flex-col">
                {educations.map((education, index) => (
                    <Link href="" key={index} className={clsx(["flex flex-row items-center gap-x-4 py-4", index % 2 != 1 && "border-b"])}>
                        <Avatar>
                            <AvatarImage src={education.imageUrl} />
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg">{education.provider}</span>
                            <span className="text-gray-500 text-sm w-56">{education.title}</span>
                        </div>
                        <div className="ml-auto my-auto">
                            <span className="text-sm text-gray-500">{formatDate(education.fromDate)} - {formatDate(education.toDate)}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}