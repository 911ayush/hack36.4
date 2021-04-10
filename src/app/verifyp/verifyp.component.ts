import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-verifyp',
  templateUrl: './verifyp.component.html',
  styleUrls: ['./verifyp.component.css']
})
export class VerifypComponent implements OnInit {
  ve:boolean=false;
  vas:boolean=true;
  otp:string='';
  constructor() { }

  ngOnInit(): void {
  }
  verifythis(){
   // alert("fgdhj");
    this.ve = true;
    this.vas = false;
  }
  verifyotp(){
    alert(this.otp);

  }
}
