// src/app/app.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule], // 👈 THIS IS IMPORTANT
  templateUrl: './app.component.html',
})
export class AppComponent {}
