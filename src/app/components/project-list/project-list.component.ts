import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/common/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Projects[] = [];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.listProjects();
  }
  listProjects() {
    this.projectsService.getAllProjectsList().subscribe(
      data => {
        this.projects = data;
      }
    )
  }

}
