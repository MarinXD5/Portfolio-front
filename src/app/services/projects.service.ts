import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projects } from 'app/common/projects';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  private allProjectsURL: string = "http://localhost:8080/list/projects";

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Projects[]>{
    return this.http.get<Projects[]>(this.allProjectsURL);
  }
}
