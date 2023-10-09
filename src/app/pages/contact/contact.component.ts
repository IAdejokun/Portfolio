import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  contactFormData = new FormGroup({

    firstName:new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    lastName:new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    email:new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
    ]),

    phoneNumber:new FormControl(''),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  contactFormSubmit(){
    console.log(this.contactFormData.value, '#userValue');
  }

}
