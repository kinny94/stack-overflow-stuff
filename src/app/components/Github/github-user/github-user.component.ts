import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  username: string;
  constructor(  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.username = this.route.snapshot.queryParamMap.get('user_id');
    console.log( this.username );
  }

}
