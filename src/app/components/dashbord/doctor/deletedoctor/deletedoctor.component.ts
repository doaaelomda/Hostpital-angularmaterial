import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedoctor',
  templateUrl: './deletedoctor.component.html',
  styleUrls: ['./deletedoctor.component.css']
})
export class DeletedoctorComponent {
  doctorName !:string
  title !:string
  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<DeletedoctorComponent>
  ){
    this.doctorName=data.doctorName
    this.title =data.title
  }
  close(){
    this.dialogRef.close()
  }
  delete(){
    const deleteDoctor = true;
    this.dialogRef.close(deleteDoctor)
  }

}
