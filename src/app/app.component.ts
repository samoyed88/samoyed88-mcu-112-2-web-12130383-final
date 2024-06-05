import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductPageComponent } from './product-page/product-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
