import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() list!: IContact[];
  @Output() newContact = new EventEmitter<undefined>();
  @Output() onDelete = new EventEmitter<IContact>();
  @Output() onUpdate = new EventEmitter<IContact>();

  searchList!: IContact;

  constructor() { }

  ngOnInit(): void {
    console.log(this.list)
  }

  onClick(){
    console.log('hello')
    this.newContact.emit();
  }

  onContactDelete(contact: IContact){
    this.onDelete.emit(contact);
  }

  onContactUpdate(contact: IContact){
    this.onUpdate.emit(contact);
  }


}
