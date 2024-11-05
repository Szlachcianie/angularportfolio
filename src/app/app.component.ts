import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Galleries } from './constants/galleries.constant';
import { IGallery } from './interfaces/IGallery';
import { NgModule } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Moje podróże';
  description: string = 'Gdzie, kiedy i czemu mnie tam wywiało';
  galleries: IGallery[] = Galleries;
}
