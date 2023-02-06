interface ProjectLinkProps {
    url: string
    isText: boolean
    title?: string
    img?: string
}

const ProjectLink = ({url, isText, img, title}: ProjectLinkProps) => {
    if (isText) return (
        <a className="px-4 py-1 drop-shadow bg-white rounded-xl text-center my-auto font-bold uppercase"
           href={url} target="_blank">
            {title}
        </a>
    )

    return (
        <a href={url} target="_blank">
            <img className="ml-auto w-8" src={img} alt={title}/>
        </a>
    );
};

export default ProjectLink;