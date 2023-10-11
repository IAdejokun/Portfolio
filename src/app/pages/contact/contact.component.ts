import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  constructor( private toast: ToastrService){}

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

    subject:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    to_name: new FormControl('Admin')
  })

  

  async contactFormSubmit(){

    console.log(this.contactFormData.value, '#userValue');

  try{
    emailjs.init('3OAf2K82I_PfYov-q');
    let response = await emailjs.send("service_okwc2hg","template_79li52i",{
      lastName: this.contactFormData.value.lastName,
      firstName: this.contactFormData.value.firstName,
      to_name: this.contactFormData.value.to_name,
      email: this.contactFormData.value.email,
      subject: this.contactFormData.value.subject,
      message: this.contactFormData.value.message,
      });

      this.toast.success('Email Sent', 'Success');
      this.contactFormData.reset();
    }
    
    catch(err){
      this.toast.error('Email not Sent', 'Error!');
      this.contactFormData.reset()
    }

  }

}

