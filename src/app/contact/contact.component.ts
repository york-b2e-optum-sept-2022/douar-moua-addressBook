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

  @Output() onDelete = new EventEmitter<IContact>;
  @Output() onUpdate = new EventEmitter<IContact>;

  isUpdating: boolean = false;
  isCreating: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.localContact = {...this.contact};
  }

  onDeleteClick(){
    console.log('delete clicked')
    this.onDelete.emit(this.contact)
  }

  onUpdateClick(){
    this.isUpdating = true;
    console.log('update clicked')
  }

  onSaveClick(){
    this.onUpdate.emit(this.localContact)
    this.isUpdating = false;
    console.log('save clicked')
  }

  onCancelClick(){
    this.isUpdating = false;
    console.log('cancel clicked')
  }

}
