interface ProjectTechProps {
    name: string;
    img: string;
    imgClass?: string;
}
const ProjectTech = ({name, img, imgClass}: ProjectTechProps) => {
    return (
        <div className="p-2 drop-shadow bg-white dark:bg-zinc-800 rounded-xl flex-row flex items-center">
            <img className={imgClass ? imgClass : "w-8"} src={img} alt={name}/>
            <h4 className="font-bold text-md ml-2 text-black dark:text-white">{name}</h4>
        </div>
    );
};

export default ProjectTech;