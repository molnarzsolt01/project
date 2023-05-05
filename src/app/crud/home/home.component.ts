import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: any = []
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/cars').subscribe((res) => {
      this.cars = this.cars.concat(res);
      console.log(this.cars)
    });
  }

  deleteCar(id: number) {
    this.cars = this.cars.filter((car: { id: number; }) => car.id !== id);
    this.http.delete('http://localhost:3000/cars/' + id).subscribe(
    )

  }


}
