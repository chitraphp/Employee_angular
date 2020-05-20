import { Component, OnInit, OnDestroy} from '@angular/core';
import { CountryModel } from 'src/app/models/CountryModel';
import { CovidService } from 'src/app/services/covid.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit,OnDestroy {
  countries:CountryModel[];
  covidSummary:any=[];
  covidSub:Subscription;

  constructor(private covidService:CovidService) { }

  ngOnInit(): void {
    this.covidSub=  this.covidService.getCovidSummary().subscribe(
      res=>{
      this.covidSummary=res;      
      res},err=>{console.log(err)});

    this.countries = this.covidSummary.Countries;
  }
  
  ngOnDestroy()
   {
     this.covidSub.unsubscribe();
   }

}
