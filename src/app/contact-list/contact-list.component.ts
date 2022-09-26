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
  @Output() onDelete = new EventEmitter<string>();
  @Output() onUpdate = new EventEmitter<IContact>();

  searchText: string = "";
  displayList!: IContact[]

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.list)
    this.displayList = [...this.list];
  }

  onNewContact(){
    console.log('Console in Contact List Comp: New contact clicked!')
    this.newContact.emit();
  }

  onContactDelete(id: string){
    this.onDelete.emit(id);
  }

  onContactUpdate(contact: IContact){
    this.onUpdate.emit(contact);
  }

  filterList(searchText: string){
    console.log(searchText);
    this.displayList = this.list.filter((contact) => {
      return contact.name.includes(searchText);
    })
  }

}
