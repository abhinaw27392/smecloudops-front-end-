import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'tagsbusinessunit',
  templateUrl: './tagsbusinessunit.html',
  styleUrls: ['./tagsbusinessunit.scss']
})

export class TAGSBUSINESSUNIT implements OnInit{
  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }
  

  ngOnInit() {
    this.http.get("http://localhost:3000/get_tags_businessunit").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data[0];

    console.log(this.data);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
    

      columns: [{ title: 'BusinessUnit', data: 'BusinessUnit' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
