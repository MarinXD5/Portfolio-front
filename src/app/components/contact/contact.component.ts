import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/common/contact';
import { ContactService } from 'app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.listContact();
  }

  listContact(){
    this.contactService.getContact().subscribe(data => 
      this.contact = data);
  }

}
