import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {
  id !:any;
  doctorObj:any;
  displayedColumns: string[] = ['name', 'mobile', 'gender','prescription','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:ActivatedRoute,private dataapi:DataService){
    this.id =router.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.getDoctorById()
  }
  getDoctorById(){
    this.dataapi.getDoctorById(this.id).subscribe(res=>{
      this.doctorObj=res
    })


  }


}
