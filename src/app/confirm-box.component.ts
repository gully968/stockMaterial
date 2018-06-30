import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-confirm-box',
    templateUrl: './confirm-box.component.html',
})

export class ConfirmBoxComponent  {

    constructor(public dialogRef: MatDialogRef<ConfirmBoxComponent>) {}
    public confirmMessage: string;
}