import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-form';
  anytext: string = "";
  email: string = ""; 
  phone: string = ""; 
  message: string = ""; 
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true
    console.log("Submitted values:", {
      text: this.anytext,
      email: this.email,
      phone: this.phone,
      message: this.message
    });
  }
}
