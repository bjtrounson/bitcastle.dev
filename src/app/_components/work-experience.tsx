import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { formatDate } from "./_utils";

type Experience = {
    company: string;
    job: string;
    profileUrl: string;
    description: string;
    fromDate: Date;
    toDate: Date;
}

const experiences: Experience[] = [
    {
        company: "Contec Group International",
        job: "Full Stack Software Developer",
        description: `· <strong>Mapping Portal</strong> <br></br>
        Overhaul the our existing GIS mapping system to enable visibility of farms 
        and hauler activities and provide a easy access to users via the browser. Built on a modern, 
        versatile tech stack <strong>Next.js</strong>, <strong>TRPC</strong>, <strong>NextAuth</strong> 
        and <strong>MapLibre</strong> to provide a scalable and robust solution
        for future development and insure fast developer velocity.<br></br>
        · <strong>Farmer/Producer Mobile App</strong> <br></br> 
        Helped migrated our existing <strong>.NET Xamarin</strong> app to <strong>.NET MAUI</strong> and ensuring consisting code
        quality, performance and structure. Creating a mechanism for automatically switching between
        different client configuration and themes to conform to all client requirements.`,
        profileUrl: "/madcap_dairy_software_logo.jpg",
        fromDate: new Date("05-01-2023"),
        toDate: new Date()
    },
    {
        company: "Pay It Now",
        job: "Mobile & Website Developer",
        description: `· <strong>PIN Network Mobile App</strong> <br></br> 
        Revamped the Pay It Now mobile application from scratch utilizing <strong>React Native</strong>
        and the <strong>Expo</strong> framework, significantly enhancing its performance and user experience.`,
        profileUrl: "/pay_it_now_pin_logo.jpg",
        fromDate: new Date("06-01-2022"),
        toDate: new Date("03-01-2023")
    },
    {
        company: "Propertyscouts",
        job: "System Admin (Internship)",
        description: `· <strong>Network Installation</strong> <br></br> 
        Helped the design and implementation of a small network infrastructure for the new company location,
        ensuring seamless connectivity and stability. Additionally,
        provided proactive IT support to streamline operations.`,
        profileUrl: "/propertyscouts_logo.jpg",
        fromDate: new Date("02-01-2018"),
        toDate: new Date("11-01-2018")
    }
];



export function WorkExperienceSection() {
    return (
        <div className="max-w-lg w-full gap-y-2 flex flex-col mx-auto">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <Accordion type="single" collapsible className="bg-white border px-2 rounded-lg shadow-sm">
                {experiences.map((experience) => (
                    <AccordionItem key={experience.company} value={experience.company}>
                        <AccordionTrigger>
                            <div className="flex flex-row gap-x-2 items-center">
                                <Avatar>
                                    <AvatarImage src={experience.profileUrl} />
                                </Avatar>
                                <div className="flex flex-col text-left">
                                    <span className="font-semibold text-lg">{experience.company}</span>
                                    <div className="flex flex-row  text-sm text-gray-600 gap-x-1">
                                        <span>{experience.job}</span>
                                        <span>·</span>
                                        <span>{formatDate(experience.fromDate)} - {formatDate(experience.toDate)}</span>
                                    </div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div dangerouslySetInnerHTML={{ __html: experience.description }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}