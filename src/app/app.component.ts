import { Component } from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accountList: IAccount[] = [
    {username: 'admin', password: 'admin'}
    ]

  contactList: IContact[] = [
    {
    id: '0',
    name: 'test1 name',
    address: '123 main st',
    phoneNumber: '555-555-555',
    email: 'string',
    birthday: new Date(),
    meetingDate: new Date(),
    relation: 'co-worker',
    company: 'york solutions',
    notes: 'cool person',
  }
  ]

  //we turn isLoggedIn to TRUE so that we can work on the Rendered Contact-List component w/out having to keep logging in
  //remember to turn isLoggedIn to false for final
  isLoggedIn: boolean = true;
  isCreating: boolean = false;

  //login feature
  onLogin(loginCreds: IAccount){
    const foundAccount = this.accountList.find((account) => {
      return account.username === loginCreds.username
      && account.password === loginCreds.password
    })

    //guard for incorrect login credentials
    if (foundAccount === undefined){
      console.log('Console in root: invalid login')
      return
    }

    this.isLoggedIn = true;

  }

  //button to toggle on/enable contact-input feature/component
  newContact(){
    this.isCreating = true;
  }

  //create new contact feature on contact-input component
  submitCreate(newContact: IContact){

    //guard
    if (newContact.name.length === 0){
      return;
    }

    console.log('In root: ', newContact)
    newContact.id = uuidv4()
    this.isCreating = false;
    this.contactList.unshift(newContact);
  }

  //button to toggle off contact-input feature
  cancelCreate(){
    console.log('Console in root: cancel clicked!');
    this.isCreating = false;
  }

  //delete selected contact feature
  deleteContact(id: string){
    console.log('console in root; delete: ' , id)
    this.contactList = this.contactList.filter(contact => contact.id !== id);
  }

  //update contact feature
  updateContact(updatedContact: IContact){
    if (updatedContact === undefined){
      console.log('console in root unable to find contact')
      return;
    }

    const contactIndex = this.contactList.findIndex(contact => contact.id === updatedContact.id);
    if (contactIndex === -1){
      console.log('console in root: unable to find')
    }

    this.contactList[contactIndex] = updatedContact;

    console.log('console in root; update: ', updatedContact)
  }

}
