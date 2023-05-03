import { Component } from '@angular/core';
import { CrudComponent } from './crud/crud.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _dialog: MatDialog) { }

  openCrud() {
    this._dialog.open(CrudComponent);
  }
}
