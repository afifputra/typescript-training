// Project Status Enum
export enum ProjectStatus {
  Active,
  Finished,
}

// Project Type
export class Project {
  id: string;
  title: string;
  description: string;
  people: number;
  status: ProjectStatus;

  constructor(id: string, title: string, description: string, people: number, status: ProjectStatus) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.people = people;
    this.status = status;
  }
}
