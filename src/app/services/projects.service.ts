import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Projects } from '../common/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private allProjectsURL = 'http://localhost:8080/list/projects';

  constructor(private httpClient: HttpClient) {}

  getAllProjectsList(): Observable<Projects[]> {
    return this.httpClient
      .get<GetResponse>(this.allProjectsURL)
      .pipe(map((response) => response._embedded.projects));
  }
}

interface GetResponse {
  _embedded: {
    projects: Projects[];
  };
}
