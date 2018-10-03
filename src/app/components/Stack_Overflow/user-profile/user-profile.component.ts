import { map } from 'rxjs/operators';
import { UserProfileService } from './../../../services/user-profile.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user_id: string;
  userData = [];
  isLoading = true;

  constructor( private route: ActivatedRoute, private userProfileSerive: UserProfileService ) { }

  ngOnInit() {

    this.user_id = this.route.snapshot.queryParamMap.get('user_id');
    this.userProfileSerive.getUserProfile( this.user_id ).pipe(
      map( (data: any) => data.items[0] )
    ).subscribe( userData => {
      console.log( userData );
      setTimeout(() => {
        this.isLoading = false;
        this.userData = userData;
      }, 300);
    }
    );
  }

}
