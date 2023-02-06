import ProjectTech from "./ProjectTech";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectLink from "./ProjectLink";
import {useMemo, useState} from "react";
import useDarkMode from "../hooks/useDarkMode";

interface ProjectProps {
    id: number
    title: string
    description: string | JSX.Element
    previewImg?: ProjectPreviewProps
    technologies: JSX.Element[]
    links: JSX.Element[]
}

interface ProjectPreviewProps {
    src: string
    type: "image" | "video"
    classes: string
}
const ProjectPreview = ({src, type, classes}: ProjectPreviewProps) => {
    if (type === "image") return <img className={`${classes} bg-white  drop-shadow`} src={src} alt={"project-preview"}/>
    return (
        <video className={`${classes} bg-white drop-shadow`} autoPlay loop muted>
            <source src={src} />
        </video>
    )
}
const Project = ({id, title, description, previewImg, links, technologies}: ProjectProps) => {
    const [isDarkMode] = useDarkMode();
    return (
        <div key={id} className="relative bg-white dark:bg-zinc-900 drop-shadow-lg rounded-xl p-4 mt-8">
            <img className="absolute bg-white dark:bg-zinc-800 rounded-full drop-shadow p-2 w-12 h-12 -left-4 -top-4 z-0"
                 src={`${ isDarkMode ? `/puck/puck-${id}-white.webp` : `/puck/puck-${id}.webp`}`} alt={`puck-corner-img-${id}`}/>
            <div className="z-10 mt-4">
                <div className="flex flex-row">
                    <h3 className="text-xl font-bold border-b pr-4 text-black dark:text-white">{title}</h3>
                    <div className="flex flex-row ml-auto gap-2">
                        {links.map(link => {return link})}
                    </div>
                </div>
                <div className="max-w-3/4 mt-3">
                    <h4 className="font-bold text-black dark:text-white">About</h4>
                    <div className="flex flex-col md:flex-row">
                        <p className="whitespace-normal mr-4 text-black dark:text-white">{description}</p>
                        {previewImg ? <ProjectPreview src={previewImg.src} type={previewImg.type} classes={previewImg.classes} /> : null}
                    </div>
                    <div className="mt-3">
                        <h4 className="font-bold text-black dark:text-white">Technologies</h4>
                        <div className="flex flex-row flex-wrap gap-2 mt-4">
                            {technologies.map(tech => {return tech})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const ProjectCarousel = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const projects: ProjectProps[] = [
        {
            id: 1,
            title: "expo-select-dropdown",
            description:
                "I made a special dropdown for the new PIN App using React Native and Expo. " +
                "It's easy to search and you can even make your own filters. " +
                "I did this project in my free time to show my skills and expand my portfolio. " +
                "It's a good example of how I make simple and helpful software.",
            previewImg: {
                src: "/projects/expo-select-dropdown-preview.mp4",
                type: "video",
                classes: "rounded-xl border w-full md:w-2/5"
            },
            technologies: [
                <ProjectTech key={1} name={"TypeScript"} img={"/software/ts-logo.svg"} />,
                <ProjectTech key={2} name={"React Native"} img={"/software/react-icon.svg"} />,
                <ProjectTech key={3} name={"Expo Vector Icons"} img={"/software/expo-logo.svg"} />
            ],
            links: [
                <ProjectLink
                    key={1}
                    url={"https://www.npmjs.com/package/expo-select-dropdown"}
                    isText={false}
                    img={"/software/npm-logo.svg"}
                    title={"npm registry"}
                />,
                <ProjectLink
                    key={2}
                    url={"https://github.com/bjtrounson/expo-select-dropdown"}
                    isText={false}
                    img={`${isDarkMode ? "/github-mark-white.svg" : "/github-mark.svg"}`}
                    title={"github"}
                />
            ]
        },
        {
            id: 2,
            title: "PIN (Pay It Now) Mobile App",
            description: "As one of the current maintainer and developer of the PIN Network App," +
                "I am responsible for both its ongoing upkeep and the development of its new version." +
                "The PIN Network mobile application serves as the primary interface for interacting with the network," +
                "offering users a range of essential features such as payment options, reward opportunities," +
                "and digital wallet management. As a dedicated and skilled developer," +
                "I am committed to ensuring the app provides a seamless and user-friendly experience for all users of the PIN Network.",
            previewImg: {
                src: "/projects/payitnow-app-hero.avif",
                type: "image",
                classes: "rounded-xl border w-full md:w-2/5 md:h-1/2 md:my-auto"
            },
            technologies: [
                <ProjectTech key={1} name={"React Native"} img={"/software/react-icon.svg"} />,
                <ProjectTech key={2} name={"Expo"} img={"/software/expo-logo.svg"} />,
                <ProjectTech key={3} name={"React Query"} img={"/software/expo-logo.svg"} />,
                <ProjectTech key={4} name={"Tailwind"} img={"/software/tailwindcss-mark.svg"} />,
                <ProjectTech key={5} name={"Jest"} img={"/software/jest-icon.svg"} />,
                <ProjectTech key={6} name={"TypeScript"} img={"/software/ts-logo.svg"} />
            ],
            links: [
                <ProjectLink
                    key={1}
                    url={"https://payitnow.io/download-app/"}
                    isText={true}
                    title={"Download"}
                />,
            ]
        },
        {
            id: 3,
            title: "PIN Scan",
            description: "As a proud addition to my portfolio," +
                "I present the Pay It Now Layer 2 Transaction History platform." +
                "By designing a seamless transaction list sorting feature and an address search tool," +
                "I was able to bring transparency and accessibility to the world of cryptocurrency." +
                "The ability to view price graphs and key stats of the PIN Token showcases my commitment to delivering high-quality," +
                "user-friendly software solutions. Keeping users more informed about their investments and PIN Token related information.",
            technologies: [
                <ProjectTech key={1} name={"React"} img={"/software/react-icon.svg"} />,
                <ProjectTech key={2} name={"Next.js"} img={"/software/nextjs-icon.svg"} />,
                <ProjectTech key={3} name={"TypeScript"} img={"/software/ts-logo.svg"} />,
                <ProjectTech key={4} name={"Tailwind"} img={"/software/tailwindcss-mark.svg"} />,
            ],
            links: [
                <ProjectLink
                    key={1}
                    url={"https://pinscan.io"}
                    isText={true}
                    title={"Visit"}
                />
            ]
        },
        {
            id: 4,
            title: "Sokoban Game",
            description: "During my C# Programming course at the Ara Institute of Canterbury," +
                "I developed a Windows puzzle game based on the classic game 'Sokoban'." +
                "I successfully recreated the game in C# and performed full unit-testing to ensure its functionality." +
                "To enhance the user experience, I adapted the C# game model to work with a Windows UI library (WinForm)." +
                "This project demonstrates my skills in C# programming and ability to create a user-friendly software solution.",
            technologies: [
                <ProjectTech
                    key={1}
                    name={"C#"}
                    img={"/software/csharp-logo.png"}
                />,
            ],
            links: [
                <ProjectLink
                    key={1}
                    url={"https://github.com/bjtrounson/Sokoban_Game_Engine"}
                    isText={false}
                    img={`${isDarkMode ? "/github-mark-white.svg" : "/github-mark.svg"}`}
                    title={"github"}
                />
            ]
        },
        {
            id: 5,
            title: "ZombieInMyPocket",
            description: <>
                I created a terminal-based Python game inspired by the classic paper print-out game 'Zombie in My Pocket
                <a className={"ml-1"} target="_blank" href="https://boardgamegeek.com/boardgame/33468/zombie-my-pocket">(Paper Version)</a>.
                Developed during my Advanced Programming course at Ara Institute of Canterbury,
                this project allowed me to apply my knowledge of design patterns and enhance my skills in Python programming
                A fun and challenging project, it demonstrates my ability to bring even the simplest concepts to life with code.
            </>,
            technologies: [
                <ProjectTech
                    key={1}
                    name={"Python"}
                    img={"/software/python-logo.svg"}
                />,
            ],
            links: [
                <ProjectLink
                    key={1}
                    url={"https://github.com/bjtrounson/ZombieInMyPocket"}
                    isText={false}
                    img={`${isDarkMode ? "/github-mark-white.svg" : "/github-mark.svg"}`}
                    title={"github"}
                />
            ]
        }
    ];
    const [selected, setSelected] = useState<{key: number; name: string}>({key: projects[0].id, name: projects[0].title})

    const selectedProject = useMemo(() => {
        const project = projects.find(item => item.id === selected.key);
        if (project) return project
    }, [selected, projects])

    const onSelect = (isForward: boolean) => {
        if (isForward) {
            // get the next project by getting the index of the current project and adding 1 but also check if its at the end of the array
            const currentProjectIndex = projects.findIndex(item => item.id === selected.key);
            let nextProject: ProjectProps;
            if (projects.length - 1 === currentProjectIndex) nextProject = projects[0];
            else nextProject = projects[currentProjectIndex + 1];
            if (nextProject) {
                setSelected({key: nextProject.id, name: nextProject.title})
            }
        } else {
            // get the previous project by getting the index of the current project and subtracting 1 but also check if its at the start of the array
            const currentProjectIndex = projects.findIndex(item => item.id === selected.key);
            let previousProject: ProjectProps;
            if (currentProjectIndex === 0) previousProject = projects[projects.length - 1];
            else previousProject = projects[currentProjectIndex - 1];
            if (previousProject) {
                setSelected({key: previousProject.id, name: previousProject.title})
            }
        }
    }

    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row mx-auto"}>
                <button className={"flex"} onClick={() => onSelect(false)}>
                    <span className="material-symbols-outlined my-auto text-black dark:text-white">chevron_left</span>
                </button>
                {projects.map((project, index) => {
                    if (index > 10) return null;
                    return (
                        <div key={project.id} className={`${projects[index].id === selectedProject.id ? "bg-red-400" : "bg-zinc-200"} p-2 rounded-full w-4 h-4 mx-1 self-center`}></div>
                    )
                })}
                <button className={"flex"} onClick={() => onSelect(true)}>
                    <span className="material-symbols-outlined my-auto text-black dark:text-white">chevron_right</span>
                </button>
            </div>
            <Project
                key={selectedProject.id}
                id={selectedProject.id}
                title={selectedProject.title}
                previewImg={selectedProject.previewImg}
                description={selectedProject.description}
                technologies={selectedProject.technologies}
                links={selectedProject.links}
            />

        </div>
    );
};

export default ProjectCarousel;