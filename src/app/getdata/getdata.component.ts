import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  fetchData:any;
  constructor(private serv:ServiceService) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.serv.getApi().subscribe(res=>{
      console.log(res);
      this.fetchData=res;
    })
  }
}