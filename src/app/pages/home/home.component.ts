import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
