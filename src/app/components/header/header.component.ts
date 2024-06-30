import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  @ViewChild('home') home!:ElementRef
  @ViewChild('about') about!:ElementRef
  @ViewChild('contacts') contacts!:ElementRef
  @ViewChild('projects') projects!:ElementRef

  goToSection(section: string, element:any) {
    this.router.navigate([], { fragment: section });
    element.nativeElement.className = 'hover';
  }
}
