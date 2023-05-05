import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarModel } from '../home/car-model';
import {CarLinkModel} from "./carLink.model";

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {
  file: File | null = null;
  carModel: any;
  carLinks: CarLinkModel[] = [{
    name:'mazda',
    link: 'https://www.autoklass.ro/cars/car_production_54d27173-c9eb-4bcd-b8db-fdf279d75174/249167.jpg'},
    {name:'bmw',
    link: 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-performance-automobile/i7-m70-xdrive/bmw-i7-m70-stage-teaser.png.asset.1681387862051.png'},{
    name:'mercedes',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccGc7JM6XgGe_8BBtb_GsfBcttJ3rCoTDQw&usqp=CAU'},
]


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.carModel = {
      id: '',
      brand: '',
      type: '',
      fuel: '',
      image: '',
    };
  }

  addcars() {
    this.carLinks.map((item)=> {
      if(item.name === this.carModel.brand){
        this.carModel.image = item.link
      }
    })
    return this.http.post('http://localhost:3000/cars', this.carModel).subscribe(() => {
      alert('Car Added')
    });
  }

}
