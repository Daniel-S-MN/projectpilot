import { MOCK_PROJECTS } from "./MockProjects.ts";
import ProjectList from "./ProjectList.tsx";
import { Project } from './Project';

function ProjectsPage() {
    const saveProject = (project: Project) => {
        console.log('Saving project: ', project);
    }

    return (
        <>
            <h1>ProjectsPage</h1>
            <ProjectList
                onSave={saveProject}
                projects={MOCK_PROJECTS} />
        </>
    )
}

export default ProjectsPage;