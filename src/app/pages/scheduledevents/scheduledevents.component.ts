import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduledevents',
  templateUrl: './scheduledevents.component.html',
  styleUrls: ['./scheduledevents.component.scss']
})
export class ScheduledeventsComponent implements OnInit {
  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_scheduled_events").subscribe(data => {
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

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{ title: 'InstanceId	', data: 'InstanceId	' }, { title: 'EventCode', data: 'EventCode' }, { title: 'EventDescription', data: 'EventDescription' },
      { title: 'EventNotBefore', data: 'EventNotBefore' }, { title: 'EventNotAfter', data: 'EventNotAfter' },{ title: 'EventZone', data: 'EventZone' },
      { title: 'AccountName', data: 'AccountName' },{ title: 'RegionName', data: 'RegionName' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }

}
