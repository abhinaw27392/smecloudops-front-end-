import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'agentreports',
  styleUrls: ['./agentreports.scss'],
  templateUrl: './agentreports.html'
})
export class AGENTREPORTS implements OnInit{
   public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_agent_status").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    console.log(this.update_time);
    this.update_time = this.update_time.replace(/\[{"update_time":"/g, '').replace(/T/, ' ').replace(/.000Z"}]/, '');

    this.data.forEach(res => {
      if(res.DeepSecurity==1){
        res.DeepSecurity='<i style="color:#008000" class="fa fa-check"></i>';
      }
      else {
        res.DeepSecurity='<i style="color:red" class="fa fa-times"></i>';
      }
      if(res.AlertLogic==1){
        res.AlertLogic='<i style="color:#008000" class="fa fa-check"></i>';
      }
      else {
        res.AlertLogic='<i style="color:red" class="fa fa-times"></i>';
      }
      if(res.QualysAgent==1){
        res.QualysAgent='<i style="color:#008000" class="fa fa-check"></i>';
      }
      else {
        res.QualysAgent='<i style="color:red" class="fa fa-times"></i>';
      }
    });
    

    console.log(this.data);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{ title: 'Hostname', data: 'Hostname' }, { title: 'AlertLogic', data: 'AlertLogic' }, { title: 'DeepSecurity', data: 'DeepSecurity' },
      { title: 'QualysAgent', data: 'QualysAgent' }, { title: 'AccountName', data: 'AccountName' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
// : select Hostname,AlertLogic,DeepSecurity,QualysAgent,AccountName from agent_status.
}
