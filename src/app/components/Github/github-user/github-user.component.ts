import { GithubUserReposService } from './../../../services/github-services/github-user-repos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  username: string;
  repos;
  isLoading = true;
  constructor(
    private route: ActivatedRoute ,
    private githubSelectedUserService: GithubUserReposService,
    public snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.username = this.route.snapshot.queryParamMap.get('user_id');
    this.githubSelectedUserService.getUserRepos( this.username ).pipe(
      map( data => data )
    ).subscribe( repos => {
      console.log( repos );
      setTimeout(() => {
        this.repos = repos;
        this.isLoading = false;
      }, 300);
    });
  }

  copyToClipboard() {
    const giturl = document.getElementById('giturl').getAttribute('value');
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = giturl;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.snackBar.open('Copied to Clipboard', null, {
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }
}
