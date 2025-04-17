import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule
  ]
})
export class HomePage implements OnInit {
  city: string = '';
  weather: any = null;
  forecast: any[] = [];
  favorites: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.city = '';  
    this.loadFavorites();
    this.fetchWeather('Johannesburg'); 
  }
  

  getFormattedDate(): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return now.toLocaleDateString('en-GB', options);
  }

  fetchWeather(city: string = this.city) {
    const apiKey = 'e7f87037686596e39a1727865cd409b4';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
    this.http.get(weatherUrl).subscribe(
      (response: any) => {
        this.weather = response;
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  
    this.http.get(forecastUrl).subscribe(
      (response: any) => {
        const dailyMap: { [date: string]: any[] } = {};
        response.list.forEach((entry: any) => {
          const date = new Date(entry.dt_txt).toDateString();
          if (!dailyMap[date]) dailyMap[date] = [];
          dailyMap[date].push(entry);
        });
  
        const today = new Date().toDateString();
        const days = Object.keys(dailyMap).filter(d => d !== today).slice(0, 5);
  
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
        this.city = this.weather.name;
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );

    this.http.get(forecastUrl).subscribe(
      (response: any) => {
        const dailyMap: { [date: string]: any[] } = {};
        response.list.forEach((entry: any) => {
          const date = new Date(entry.dt_txt).toDateString();
          if (!dailyMap[date]) dailyMap[date] = [];
          dailyMap[date].push(entry);
        });

        const today = new Date().toDateString();
        const days = Object.keys(dailyMap).filter(d => d !== today).slice(0, 5);

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

  toggleFavorite() {
    if (this.weather?.name) {
      const cityName = this.weather.name;
      if (this.isFavorite(cityName)) {
        this.removeFromFavorites(cityName);
      } else {
        this.addToFavorites(cityName);
      }
    }
  }
  
  isFavorite(cityName: string = this.weather?.name): boolean {
    return this.favorites.includes(cityName);
  }
  

  addToFavorites(city: string) {
    this.favorites.push(city);
    this.saveFavorites();
  }

  removeFromFavorites(city: string) {
    this.favorites = this.favorites.filter(fav => fav !== city);
    this.saveFavorites();
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

  selectFavorite(city: string) {
    this.city = city;
    this.fetchWeather();
  }
}
