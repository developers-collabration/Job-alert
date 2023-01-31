import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor( private dialog:MatDialog) { }

  openDialog(templateRef: TemplateRef<any>) {
   this.dialog.open(templateRef,{

   });
  }
  ngOnInit(): void {
  }

}
