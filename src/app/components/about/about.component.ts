import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { CertificatesComponent } from '../certificates/certificates.component';
import { NgClass, NgFor, NgForOf } from '@angular/common';
import { CertificationService } from '../../service/certification.service';
import Certificate from '../../interface/certificate';
import { AboutService } from '../../service/about.service';
import About from '../../interface/about';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    providers: [CertificationService, AboutService],
    imports: [SkillsComponent, CertificatesComponent, NgFor, NgForOf, NgClass]
})
export class AboutComponent implements AfterViewInit {

    private containerWidth!: number;
    private contentWidth!: number
    errorMessage: string | null = null;


    certificates: Certificate[] = [];
    paragraphs: About[] = [];
    currentIndex = 0;

    private scrollPosition: number = 0;
    private sectionTop: number = 0;
    private sectionBottom: number = 0;

    @ViewChild('down') element!: ElementRef;
    @ViewChild('content') private content!: ElementRef;
    @ViewChild('container') private container!: ElementRef;

    constructor(private certificateService: CertificationService, private aboutService: AboutService) { }


    ngAfterViewInit() {
        this.certificateService.getCertificates().subscribe({
            next: (res) => {
                this.certificates = res;
            },
            error: (err) => {
                this.errorMessage = err;
            }
        })
        this.aboutService.getAbout().subscribe({
            next: (res) => {
                this.paragraphs = res;
            },
            error: (err) => {
                this.errorMessage = err;
            }
        })

        this.containerWidth = this.container.nativeElement.offsetWidth;
        this.contentWidth = this.content.nativeElement.offsetWidth;
    }

    selectCertificate(index: number) {
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


    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.scrollPosition = window.scrollY;
        const elementHeight = this.element.nativeElement.offsetHeight;
        const rect = this.element.nativeElement.getBoundingClientRect();

        this.sectionTop = (rect.top + window.scrollY) - elementHeight;
        this.sectionBottom = (this.sectionTop) + elementHeight;
    }

    isElementVisible(): boolean {
        return this.scrollPosition >= this.sectionTop - 100 && this.scrollPosition <= this.sectionBottom + 100;
    }


}
