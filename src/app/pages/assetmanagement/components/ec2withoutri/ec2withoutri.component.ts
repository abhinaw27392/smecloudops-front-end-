import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ec2withoutri',
  templateUrl: './ec2withoutri.html',
  styleUrls: ['./ec2withoutri.scss']
})

export class EC2WITHOUTRI implements OnInit{
  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }
  

  ngOnInit() {
    this.http.get("http://localhost:3000/get_ec2_ri").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    console.log(this.update_time);
    this.update_time = this.update_time.replace(/\[{"update_time":"/g, '').replace(/T/, ' ').replace(/.000Z"}]/, '');

    console.log(this.data);
// select Name,ImageId,AccountName,RegionName from ami_cleanup
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{ title: 'No_Of_Server', data: 'No_Of_Server' },
      { title: 'AccountName', data: 'AccountName' },
      { title: 'RegionName', data: 'RegionName' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
