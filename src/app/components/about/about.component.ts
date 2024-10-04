import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { CertificatesComponent } from '../certificates/certificates.component';
import { NgFor, NgForOf } from '@angular/common';
import { PublicationsComponent } from "../publications/publications.component";
import { link } from 'fs';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [SkillsComponent, CertificatesComponent, NgFor, PublicationsComponent, NgForOf]
})
export class AboutComponent implements AfterViewInit {

    @ViewChild('content') content!: ElementRef;
    @ViewChild('container') container!: ElementRef;

    containerWidth!: number;
    contentWidth!: number

    ngAfterViewInit() {
        this.containerWidth = this.container.nativeElement.offsetWidth;
        this.contentWidth = this.content.nativeElement.offsetWidth;
    }
    certificates = [
        {
            image: this.imageUrl('NWIGU2DS'),       //backend com java
            link: this.certificateLink('NWIGU2DS')
        },{
            image: this.imageUrl('QIX6KFRO'),       //santander backend com java
            link: this.certificateLink('QIX6KFRO')
        },{
            image: this.imageUrl('RBPCJ8RW'),       //java com IA
            link: this.certificateLink('RBPCJ8RW')
        }
    ];

    publicationsLinks = [
        {
            link: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7230374378935353344'
        },
        {
            link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7208156403272712193'
        },
        {
            link: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7216769073160867842'
        },{
            link: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7207142379999358976'
        }
    ];

    currentIndex = 0;
    currentPubIndex = 0;

    selectCertificate(index:number){
        this.containerWidth = this.container.nativeElement.offsetWidth;
        this.contentWidth = this.content.nativeElement.offsetWidth;
        this.currentIndex = index;

        this.content.nativeElement.style.transform = `translateX(${-this.containerWidth * index}px)`;
    }

    nextCertificate() {
        this.selectCertificate(++this.currentIndex);

    }

    previousCertificate() {
        this.selectCertificate(--this.currentIndex);
    }

    selectPublication(index: number) {
        this.currentPubIndex = index;
    }

    nextPublication() {
        this.selectPublication(++this.currentPubIndex);
    }

    previousPublication() {
        this.selectPublication(--this.currentPubIndex);
    }

    imageUrl(certificateNumber: string) {
        return `https://hermes.dio.me/certificates/cover/${certificateNumber}.jpg`;
    }
    certificateLink(name: string) {
        return `https://www.dio.me/certificate/${name}/share`
    }

    @ViewChild('left') left!: ElementRef;
    @ViewChild('rigth') rigth!: ElementRef;
    private scrollPosition: number = 0;
    private elementHeight: number = 0;
    private pageHeight: number = 0;
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.scrollPosition = window.scrollY;
      this.elementHeight = this.left.nativeElement.offsetHeight;
      const rect = this.left.nativeElement.getBoundingClientRect();
      this.pageHeight = (rect.top + window.scrollY) - this.elementHeight;
  
      if (this.isShowing()) {
        this.addAnim();
      } else {
        this.remAnim();
      }
    }
  
    private isShowing(): boolean {
      return this.scrollPosition >= this.pageHeight;
    }
    private addAnim() {
      this.left.nativeElement.style.opacity = 1;
      this.left.nativeElement.style.transform = 'translateY(0)';
      this.left.nativeElement.style.transform = 'translateX(0)';
      this.rigth.nativeElement.style.opacity = 1;
      this.rigth.nativeElement.style.transform = 'translateY(0)';
      this.rigth.nativeElement.style.transform = 'translateX(0)';
    }
    private remAnim() {
      this.left.nativeElement.style.transform = 'translateY(20px)';
      this.left.nativeElement.style.transform = 'translateX(-100%)';
      this.left.nativeElement.style.opacity = 0;
      this.rigth.nativeElement.style.transform = 'translateY(20px)';
      this.rigth.nativeElement.style.transform = 'translateX(100%)';
      this.rigth.nativeElement.style.opacity = 0;
    }

}
