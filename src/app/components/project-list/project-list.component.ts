import { Component, OnInit } from '@angular/core';
import { Projects } from 'app/common/projects';
import { ProjectsService } from 'app/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Projects[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.listAllProjects();
  }

  listAllProjects(){
    this.projectsService.getAllProjects().subscribe(data =>
      this.projects = data);
  }
}
