import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'app/common/contact';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
  private contactURL: string = "http://localhost:8080/contact";

  constructor(private http: HttpClient) { }

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactURL);
  }
}
