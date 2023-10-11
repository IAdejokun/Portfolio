import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 

  ngOnInit():void{
    const options = {
      strings:[ 'Frontend Developer.','Technical Writer.', 'Designer.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    }
  
   const typed = new Typed('#textTyped', options)
  }

  downloadCV(){
    const filePath = "assets/ADEJOKUN_IBUKUNOLUWA_CV.pdf";
    const fileName = "Adejokun Ibukunoluwa's CV";

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    
    link.click();
  }

}
