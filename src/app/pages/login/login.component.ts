import { Component } from '@angular/core';
import { BoxComponent } from '../../components/box/box.component';

@Component({
  selector: 'app-login',
  imports: [BoxComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  
}

// Lógica com localStorage
// if (localStorage.getItem("username") != null) {
//   alert(localStorage.getItem("username"));
// } else {
//   localStorage.setItem("username", "juan");
// }

