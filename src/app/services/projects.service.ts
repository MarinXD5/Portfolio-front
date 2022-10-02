import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projects } from 'app/common/projects';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  private allProjectsURL: string = 'http://localhost:8080/list/projects';

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<any>{
    return this.httpClient.get<any>(this.allProjectsURL);
  }
}
