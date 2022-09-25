import {Component, EventEmitter, Output} from '@angular/core';
import {IAccount} from "../interfaces/IAccount";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //creating an Output Property/Variable/Data to STORE/WRAP the New Event OF USER INPUT.
  //uses the Interface Account as the Structure Procedure of how to Structure/store the input
  //this Output basically creates a doorway that allows data to go out
  @Output() onLogin = new EventEmitter<IAccount>();

  username!: string;
  password!: string;

  onClick() {
    //allows: letting parent root know new event has occurred
    //bc it collects the user input & throws it out with the .emit & the @Output catches that .emit
    this.onLogin.emit({
      "username": this.username,
      "password": this.password
    });

    // console.log('test click')
    console.log(this.username);
    console.log(this.password);
  }
}
