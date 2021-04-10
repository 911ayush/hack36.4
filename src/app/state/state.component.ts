import { Component, OnInit,NgModule } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  st:boolean = true;
  str:boolean = false;
  states: string[] = ['Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal']
  district:string[]=['Agra','Aligarh','Allahabad','Ambedkar','Nagar','Amethi','Amroha','Auraiya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Faizabad','Farrukhabad','Fatehpur','Firozabad','Gautam','Buddha','Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur','Dehat','Kanpur','Nagar','Kanshiram Nagar','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','RaeBareli','Rampur','Saharanpur','Sambhal','Sant','Kabir','Nagar','Shahjahanpur','Shamali','Shravasti','Siddharth','Nagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi']
  
  statec:string=this.states[0];
  districtch:string=this.district[0];
  constructor() { }

  ngOnInit(): void {
  }
  statech($event){
    this.statec = $event.target.options[$event.target.options.selectedIndex].text;
    if(this.statec!='Uttar Pradesh'){
      alert("Not valid choice");
    }else{
      this.str = true;
    }
  }
  districth($event){
    this.districtch = $event.target.options[$event.target.options.selectedIndex].text;
  }
  donestate(){
    if(this.str){
      this.st = !(this.st);
    }
    
  }
}
