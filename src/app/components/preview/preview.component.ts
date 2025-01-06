import { CommonModule } from '@angular/common';
import { Component, Injectable, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {

  @Input() url!: string | SafeResourceUrl;
  
}
