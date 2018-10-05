import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-youtube-search-results',
  templateUrl: './youtube-search-results.component.html',
  styleUrls: ['./youtube-search-results.component.css']
})
export class YoutubeSearchResultsComponent implements OnInit {

  @Input() searchResults;
  constructor( public dialog: MatDialog, public sanitize: DomSanitizer ) { }

  ngOnInit() {}

  openDialog( videoId ) {
   const href = `https://www.youtube.com/embed/${ videoId }`;
   const link = this.sanitize.bypassSecurityTrustResourceUrl( link );
    const dialogRef = this.dialog.open(YoutubeDialogComponent, {
      width: '80%',
      height: '80%',
      data: { link }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'app-dialog-youtube',
  templateUrl: 'youtube-dialog.html',
  styleUrls: ['./youtube-dialog.css']
})
export class YoutubeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<YoutubeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
