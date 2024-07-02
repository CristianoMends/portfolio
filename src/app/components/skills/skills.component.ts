import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  async ngAfterViewInit() {
    try {
      const images: HTMLImageElement[] = this.container.nativeElement.querySelectorAll('img');

      while(true){
        await this.addAnimation(images);
        await this.sleep(1500);
      }

    } catch (error) {

    }
  }
  async addAnimation(images: any) {
    for (const img of images) {
      (img as HTMLImageElement).classList.add('animation');
      await this.sleep(500);
      this.removeAnimation(img)
    }
  }
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async removeAnimation(img:HTMLImageElement){
    await this.sleep(1000);
    await (img as HTMLImageElement).classList.remove('animation');
  }
}
