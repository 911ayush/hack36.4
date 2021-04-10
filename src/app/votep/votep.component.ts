import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votep',
  templateUrl: './votep.component.html',
  styleUrls: ['./votep.component.css']
})
export class VotepComponent implements OnInit {
  showstat:string="Not Allowed To Vote";
  verified:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  dothisgreen(){
    document.getElementById('stat').style.color = "green";
    this.showstat = "Allowed To Vote";
  }
}
