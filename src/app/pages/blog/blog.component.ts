import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  articleResult : any = [];

  constructor(private blogService: BlogService, private toast:ToastrService){

  }

  ngOnInit():void{
    this.blogData();
  }

  blogData(){
    this.blogService.getUserArticles().subscribe({
      next: (result) => {
        this.articleResult = result;
      },
      error : (err) => {
        this.toast.error('Try, Again', 'Error')
      },
    })
  }

}
