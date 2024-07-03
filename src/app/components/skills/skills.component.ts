import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
 /* @ViewChild('container') container!: ElementRef;

  timeAnimation = 2000

  async ngAfterViewInit() {
    try {
      const images: HTMLImageElement[] = this.container.nativeElement.querySelectorAll('img');

      while(true){
        await this.addAnimation(images);
      }

    } catch (error) {

    }
  }
  async addAnimation(images: any) {
    for (const img of images) {     //percorre uma linha de imagens
      (img as HTMLImageElement).classList.add('animation'); //adiciona a animação q leva 1s para completar
      await this.sleep(this.timeAnimation / 2);     //espera a metade da animação, quando toca no elemento da frente já começa a animação do proximo 
      this.removeAnimation(img)   //remove a animação
    }
  }
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async removeAnimation(img:HTMLImageElement){
    await this.sleep(this.timeAnimation); //aguarda até a animação terminar, e tira a classe de animação
    (img as HTMLImageElement).classList.remove('animation');
  }*/
}
