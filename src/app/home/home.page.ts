import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  city: string = '';
  weather: any = null;
  forecast: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.city = 'Johannesburg';
    this.fetchWeather();
  }

  // Function to format the current date and day
  getFormattedDate(): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return now.toLocaleDateString('en-GB', options);
  }

  fetchWeather() {
    const apiKey = 'e7f87037686596e39a1727865cd409b4';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${apiKey}&units=metric`;

    // Current weather
    this.http.get(weatherUrl).subscribe(
      (response: any) => {
        this.weather = response;
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );

    // Forecast
    this.http.get(forecastUrl).subscribe(
      (response: any) => {
        const dailyMap: { [date: string]: any[] } = {};
        response.list.forEach((entry: any) => {
          const date = new Date(entry.dt_txt).toDateString();
          if (!dailyMap[date]) {
            dailyMap[date] = [];
          }
          dailyMap[date].push(entry);
        });

        const today = new Date().toDateString();
        const days = Object.keys(dailyMap).filter(d => d !== today).slice(0, 6);

        this.forecast = days.map(day => {
          const entries = dailyMap[day];
          const noonData = entries.find(e => e.dt_txt.includes("12:00:00")) || entries[0];
          return {
            date: new Date(noonData.dt_txt),
            temp: noonData.main.temp,
            wind: noonData.wind.speed,
            humidity: noonData.main.humidity,
            icon: noonData.weather[0].icon,
            description: noonData.weather[0].description
          };
        });
      },
      (error) => {
        console.error('Error fetching forecast data', error);
      }
    );
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.fetchWeatherByCoordinates(lat, lon);
        },
        (error) => {
          console.error('Error getting geolocation', error);
        }
      );
    } else {
      console.log('Geolocation not supported.');
    }
  }

  fetchWeatherByCoordinates(lat: number, lon: number) {
    const apiKey = 'e7f87037686596e39a1727865cd409b4';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    this.http.get(weatherUrl).subscribe(
      (response: any) => {
        this.weather = response;
      },
      (error) => {
        console.error('Error fetching weather data by coordinates', error);
      }
    );

    this.http.get(forecastUrl).subscribe(
      (response: any) => {
        const dailyMap: { [date: string]: any[] } = {};
        response.list.forEach((entry: any) => {
          const date = new Date(entry.dt_txt).toDateString();
          if (!dailyMap[date]) {
            dailyMap[date] = [];
          }
          dailyMap[date].push(entry);
        });

        const today = new Date().toDateString();
        const days = Object.keys(dailyMap).filter(d => d !== today).slice(0, 6);

        this.forecast = days.map(day => {
          const entries = dailyMap[day];
          const noonData = entries.find(e => e.dt_txt.includes("12:00:00")) || entries[0];
          return {
            date: new Date(noonData.dt_txt),
            temp: noonData.main.temp,
            wind: noonData.wind.speed,
            humidity: noonData.main.humidity,
            icon: noonData.weather[0].icon,
            description: noonData.weather[0].description
          };
        });
      },
      (error) => {
        console.error('Error fetching forecast data by coordinates', error);
      }
    );
  }
}
