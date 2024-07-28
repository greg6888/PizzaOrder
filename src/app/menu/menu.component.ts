import { Component, OnInit } from '@angular/core';
import { IsbnserviceService } from '../isbnservice.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public small:Array<{ischeck:boolean, value: number}> = [
  {ischeck:false,value:1.00},
  {ischeck:false,value:0.50},
  {ischeck:false,value:1.00},
  {ischeck:false,value:1.20},
  {ischeck:false,value:0.75},
  {ischeck:false,value:1.00},
  {ischeck:false,value:2.00},
  {ischeck:false,value:3.00}
  ];
  public medium:Array<{ischeck:boolean, value: number}> = [
    {ischeck:false,value:1.00},
    {ischeck:false,value:0.50},
    {ischeck:false,value:1.00},
    {ischeck:false,value:1.20},
    {ischeck:false,value:0.75},
    {ischeck:false,value:1.00},
    {ischeck:false,value:2.00},
    {ischeck:false,value:3.00},
    {ischeck:false,value:5.00},
    {ischeck:false,value:9.00}
    ];
    public large:Array<{ischeck:boolean, value: number}> = [
      {ischeck:false,value:1.00},
      {ischeck:false,value:0.50},
      {ischeck:false,value:1.00},
      {ischeck:false,value:1.20},
      {ischeck:false,value:0.75},
      {ischeck:false,value:1.00},
      {ischeck:false,value:2.00},
      {ischeck:false,value:3.00},
      {ischeck:false,value:0.50}
      ];
      public extra:Array<{ischeck:boolean, value: number}> = [
        {ischeck:false,value:1.00},
        {ischeck:false,value:0.50},
        {ischeck:false,value:1.00},
        {ischeck:false,value:1.20},
        {ischeck:false,value:0.75},
        {ischeck:false,value:1.00},
        {ischeck:false,value:2.00},
        {ischeck:false,value:3.00}
        ];
      public smallSum:number=5.00;
      public midiumSum:number=7.00;
      public largeSum:number=8.00;
      public extraSum:number=9.00;
      public discount:number=1.00;
      public temp:number=0;
      public tempt:number=1;
  constructor(private webService : IsbnserviceService) { }

  ngOnInit() {
 
  }
  onChange(id:number, size:string){
    if(size=='s'){
      if(this.small[id].ischeck){
      this.smallSum=this.smallSum+this.small[id].value;
      }
      else{
        this.smallSum=this.smallSum-this.small[id].value;
      }
    }
    else if(size=='m'){
      if(id==8 || id==9){
        if(this.medium[id].ischeck){
          if(this.temp==0){
            this.temp=this.midiumSum;
          }
        this.midiumSum=this.medium[id].value;
        if(id==8 && this.medium[9].ischeck){this.medium[9].ischeck=false;}else if(id==9 && this.medium[8].ischeck){this.medium[8].ischeck=false;}
        }
        else{
          this.midiumSum=this.temp;
          this.temp=0;
        }
      }
      else{
        if(this.medium[id].ischeck && this.temp==0){
      this.midiumSum=this.midiumSum+this.medium[id].value;
      }
      else if(!this.medium[id].ischeck && this.temp==0){
        this.midiumSum=this.midiumSum-this.medium[id].value;
      }
      else{
        if(this.medium[id].ischeck){
        this.temp=this.temp+this.medium[id].value;
        }
        else{
        this.temp=this.temp-this.medium[id].value;
        }
      }
      }
    }
    else if(size=='l'){
      if(id==8){
        if(this.large[id].ischeck){
        this.largeSum=this.largeSum * this.large[id].value;
        this.tempt=0.5;
        }
        else{
          this.largeSum=this.largeSum/this.large[id].value;
          this.tempt=1;
        }
      }
      else{
        if(this.large[id].ischeck){
      this.largeSum=this.largeSum+this.large[id].value*this.tempt;
      }
      else{
        this.largeSum=this.largeSum-this.large[id].value*this.tempt;
      }
    }
    }
    else if(size=='e'){
      if(this.extra[id].ischeck){
      this.extraSum=this.extraSum+this.extra[id].value;
    }
    else{
      this.extraSum=this.extraSum-this.extra[id].value;
    }
  }
  }
}
