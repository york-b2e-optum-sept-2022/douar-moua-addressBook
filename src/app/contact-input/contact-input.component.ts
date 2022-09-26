import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  //local to this component - a blueprint that is used to create new contact
  contact: IContact = {
    id: "",
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    birthday: new Date(),
    meetingDate: new Date(),
    relation: "",
    company: "",
    notes: "",
};

  @Output() onCancel = new EventEmitter<undefined>();
  @Output() onSubmit = new EventEmitter<IContact>();


  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.onCancel.emit();
  }

  //records the captured new contact input
  onSubmitClick(contact: IContact){
    console.log('submitted= ',contact)

    //ensure the date inputs are still saved as Objects
    this.contact.birthday
    this.onSubmit.emit(contact);
  }

}
