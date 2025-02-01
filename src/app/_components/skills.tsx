import { Badge } from "~/components/ui/badge"

const skills = [
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Go",
    "Expo",
    "TypeScript",
    "C#",
    "MapLibre",
    "Valhalla",
    "Docker",
    "Expo Modules",
    "Java",
    "Kotlin",
    "Android",
    "Linux"
]

export function Skills() {
    return (
        <div className="flex flex-col gap-y-2 mx-auto">
            <Badge className="text-base w-fit rounded-lg mx-auto">Skills</Badge>
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-1 max-w-lg bg-white border p-4 rounded-lg shadow-sm">
                {skills.map(skill => (
                    <Badge key={skill}>{skill}</Badge>
                ))}
            </div>
        </div>
    )
}