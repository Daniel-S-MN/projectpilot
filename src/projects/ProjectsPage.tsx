import { MOCK_PROJECTS } from "./MockProjects.ts";
import ProjectList from "./ProjectList.tsx";

function ProjectsPage() {
    return (
        <>
            <h1>ProjectsPage</h1>
            <ProjectList projects={MOCK_PROJECTS} />
        </>
    )
}

export default ProjectsPage;