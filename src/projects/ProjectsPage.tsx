import { MOCK_PROJECTS } from "./MockProjects.ts";

function ProjectsPage() {
    return (
        <>
            <h1>ProjectsPage</h1>
            <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </>
    )
}

export default ProjectsPage;