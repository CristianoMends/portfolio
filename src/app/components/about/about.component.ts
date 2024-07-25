import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { CertificatesComponent } from '../certificates/certificates.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [SkillsComponent, CertificatesComponent, NgFor]
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
        },{
            image: this.imageUrl('EQTP2490'),
            link: this.certificateLink('EQTP2490')
        },{
            image: this.imageUrl('6BAD5E05'),
            link: this.certificateLink('6BAD5E05')
        },{
            image: this.imageUrl('WXWVLLLB'),
            link: this.certificateLink('WXWVLLLB')
        },{
            image: this.imageUrl('WGFLHUXT'),
            link: this.certificateLink('WGFLHUXT')
        }, {
            image: this.imageUrl('VOELTNY6'),
            link: this.certificateLink('VOELTNY6')
        }, {
            image: this.imageUrl('RNOYOB0K'),
            link: this.certificateLink('RNOYOB0K')
        }, {
            image: this.imageUrl('FAQXKQSF'),
            link: this.certificateLink('FAQXKQSF')
        }
    ];

    currentIndex = 0;

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

    imageUrl(certificateNumber: string) {
        return `https://hermes.dio.me/certificates/cover/${certificateNumber}.jpg`;
    }
    certificateLink(name: string) {
        return `https://www.dio.me/certificate/${name}/share`
    }


}
