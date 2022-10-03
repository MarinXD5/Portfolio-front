import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'app/common/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private contactURL: string = "localhost:8080/contact";
  constructor(private http: HttpClient) { }

  getContact(){
    return this.http.get<Contact>(this.contactURL);
  }
}
