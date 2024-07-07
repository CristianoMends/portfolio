import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [ NgIf],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

  @Input() title!:string;
  @Input() image!:string;
  @Input() link!:string;

  goLink(link:string){
    window.open(link,'_blank');
  }
}
