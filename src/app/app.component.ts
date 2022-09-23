import { Component } from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";

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
    id: 0,
    name: 'contact name',
    address: '123 main st',
    phoneNumber: '555-555-555',
    email: 'string',
    birthday: new Date(),
    meetingDate: new Date(),
    relation: 'co-worker',
    company: 'york solutions',
    notes: 'cool person',
  },
    {
      id: 1,
      name: 'contact name',
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

//-----

  //we turn this to TRUE so that we can work on the Rendered Contact-List component w/out having to keep logging in
  isLoggedIn: boolean = true;

  isCreating: boolean = false;

//-----

  onLogin(loginCreds: IAccount){
    const foundAccount = this.accountList.find((account) => {
      return account.username === loginCreds.username
      && account.password === loginCreds.password
    })

    //guard for incorrect login credentials
    if (foundAccount === undefined){
      console.log('invalid login')
      return
    }

    this.isLoggedIn = true;

  }

  //for button
  newContact(){
    this.isCreating = true;

  }

  submitCreate(newContact: IContact){

    //guard
    if (newContact.name.length ===0){
      return
    }

    console.log('In root: ', newContact)
    this.isCreating = false;
    this.contactList.unshift(newContact);
  }

  cancelCreate(){
    this.isCreating = false;
  }

  deleteContact(contactToDelete: IContact){
    this.contactList = this.contactList.filter(contact => contact.id !== contactToDelete.id);
  }

}
