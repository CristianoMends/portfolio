import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActiveSectionService } from '../section.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements AfterViewInit {
  @ViewChild('container') container!:ElementRef

  async ngAfterViewInit() {
    try {
      const images: HTMLImageElement[] = this.container.nativeElement.querySelectorAll('img');

      await this.addAnimation(images);

    } catch (error) {

    }
  }
  async addAnimation(images: any) {
    for (const img of images) {
      (img as HTMLImageElement).classList.add('animation');
      await this.sleep(300);
    }
  }
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
