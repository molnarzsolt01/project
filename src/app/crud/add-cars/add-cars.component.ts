import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarModel } from '../home/car-model';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {
  carModel: any;
  time = new Date().getTime();
  username = "debzs7olx";
  apikey = "776866115828253";
  apisecret = "Jga8zxQWvAkcNJ6q-T4h6uH5uHY";

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
    return this.http.post('http://localhost:3000/cars', this.carModel).subscribe(() => {
    });
  }

  postImage() {
    console.log(this.carModel.image)
    const formData = new FormData();
    formData.append('file', this.carModel.image);
    formData.append('timestamp', this.time.toString());
    formData.append('api_key', this.apikey);
    formData.append('signature', this.apisecret);

    const url = `https://api.cloudinary.com/v1_1/${this.username}/image/upload`;
    this.http.post(url, formData).subscribe(
      response => {
        console.log('Upload successful', response);
      },
      error => {
        console.error('Upload error', error);
      }
    );

  }
}