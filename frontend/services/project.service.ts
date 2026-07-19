import { Project } from "@/types/project";

const STORAGE_KEY = "asteria_projects";

export function getProjects(): Project[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}


export function saveProject(project: Project) {
  const projects = getProjects();

  const index = projects.findIndex(
    (p) => p.id === project.id
  );

  if (index >= 0) {
    projects[index] = project;
  } else {
    projects.unshift(project);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(projects)
  );
}

export function deleteProject(id: string) {
  const projects = getProjects().filter(
    (p) => p.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(projects)
  );
}
export function getProject(id: string) {

  return getProjects().find(

    (project) => project.id === id

  );

}

export function updateProject(project: Project) {

  saveProject(project);

}
