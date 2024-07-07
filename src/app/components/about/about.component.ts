import { Component, ElementRef, ViewChild } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { CertificatesComponent } from '../certificates/certificates.component';
import { link } from 'node:fs';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [SkillsComponent, CertificatesComponent]
})
export class AboutComponent {

    @ViewChild('next') next!: ElementRef;
    index = 0;

    certificates = [
        {
            image: this.imageUrl('QIX6KFRO'),
            link: this.certificateLink('QIX6KFRO')
        },{
            image:this.imageUrl('WGFLHUXT'),
            link: this.certificateLink('WGFLHUXT')
        },{
            image: this.imageUrl('VOELTNY6'),
            link: this.certificateLink('VOELTNY6')
        },{
            image: this.imageUrl('RNOYOB0K'),
            link: this.certificateLink('RNOYOB0K')
        },{
            image: this.imageUrl('FAQXKQSF'),
            link: this.certificateLink('FAQXKQSF')
        },{
            image:this.imageUrl('WXWVLLLB'),
            link: this.certificateLink('WXWVLLLB')
        }
    ];


    nextCertificate() {
        this.index++;
        if(this.index >= this.certificates.length){
            this.index = 0;
        }
    }
    previousCertificate(){
        this.index--;
        if(this.index < 0){
           this.index = this.certificates.length - 1;     
        }
    }

    imageUrl(certificateNumber:string){
        return `https://hermes.dio.me/certificates/cover/${certificateNumber}.jpg`;
    }
    certificateLink(name:string){
        return `https://www.dio.me/certificate/${name}/share`
    }


}
