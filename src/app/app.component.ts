import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from 'my-logger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'home';
  loggerService: LoggerService = inject(LoggerService);

  ngOnInit(): void {
    this.loggerService.log('hello world');
  }
}
