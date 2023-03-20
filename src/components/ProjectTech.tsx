import { motion } from "framer-motion";

interface ProjectTechProps {
    name: string;
    img: string;
    toolLink?: string;
    imgClass?: string;
}
const ProjectTech = ({name, img, imgClass, toolLink}: ProjectTechProps) => {
    return (
        <motion.a
            whileHover={{ scale: 1.1, marginRight: 5, marginLeft: 5 }}
            href={toolLink}
            className="p-2 drop-shadow bg-white dark:bg-zinc-800 rounded-xl flex-row flex items-center select-none"
        >
            <img className={imgClass ? imgClass : "w-8"} src={img} alt={name}/>
            <h4 className="font-bold text-md ml-2 text-black dark:text-white">{name}</h4>
        </motion.a>
    );
};

export default ProjectTech;