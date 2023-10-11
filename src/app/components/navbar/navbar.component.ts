import { Component} from '@angular/core';
import { SidebarjsService } from "ng-sidebarjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
 constructor( private sideBarService:SidebarjsService ){
  console.log(this.sideBarService);
 }

  onOpen(){
  console.log('open');
  
 }

 onClose(){
  console.log('close');
  }

  onChangeVisibility(event:any){
    console.log('changeVisibility', event);
  }
}
