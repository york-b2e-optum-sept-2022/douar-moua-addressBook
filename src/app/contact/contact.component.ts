import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;

  localContact!: IContact;

  @Output() onDelete = new EventEmitter<string>();
  @Output() onSave = new EventEmitter<IContact>();

  isUpdating: boolean = false;

  constructor() { }

  //allows us to work with localContact! copy?
  ngOnInit(): void {
    this.localContact = {...this.contact};
  }

  //tells contact-list it has been clicked
  onDeleteClick(){
    console.log('delete clicked')
    this.onDelete.emit(this.contact.id)
  }

  //just a button that toggles the Update feature
  onUpdateClick(){
    console.log('update clicked')
    this.isUpdating = true;
  }

  //emit new updates to contact-list
  onSaveClick(){
    //TODO: ensure the date inputs are still saved as Objects
    this.localContact.birthday
    this.localContact.meetingDate

    this.onSave.emit(this.localContact)
    this.isUpdating = false;
    console.log('save clicked & save update is:', this.localContact)
  }

  onCancelClick(){
    this.isUpdating = false;
    console.log('cancel clicked')
  }

}
