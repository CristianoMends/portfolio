import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, NgModule, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageComponent } from "../message/message.component";
import { NgIf, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { access } from 'fs';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  imports: [FormsModule, MessageComponent, NgIf, NgStyle]
})
export class ContactsComponent {
  @ViewChild('message') message!: MessageComponent;
  @ViewChild('form') form!: NgForm;
  @ViewChild('btn') btn!: ElementRef;

  constructor(private http: HttpClient) { }


  formData = {
    name: '',
    email: '',
    message: '',
    accessKey: 'e5869e91-9363-4747-8d07-7b4c9c40c8dc'
  };

  messageSended = false;
  formInvalid = false;

  onBtnClick(form: NgForm) {
    this.formInvalid = true;
    this.submit(this.form);
  }

  async submit(form: NgForm) {
    if (form.valid) {
      if (this.messageSended) {
        this.message.title = 'Mensagem já enviada!';
        this.message.message = 'Você já enviou uma mensagem. Entrarei em contato em breve!';
        this.message.showContainer();

      } else {

        this.http.post('https://api.staticforms.xyz/submit', this.formData).subscribe(response => {
          this.message.title = 'Mensagem enviada com sucesso!';
          this.message.message = 'Obrigado por entrar em contato! Irei analisar sua mensagem e responder em breve.';
          this.messageSended = true;
          this.message.showContainer();


          form.resetForm();
          this.formData = {
            name: '',
            email: '',
            message: '',
            accessKey: 'e5869e91-9363-4747-8d07-7b4c9c40c8dc'
          };
          this.formInvalid = false;
        }, error => {

          console.error('Erro ao enviar mensagem:', error);
          this.message.title = 'Erro ao enviar mensagem!';
          this.message.message = 'Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
          this.message.showContainer();
        });

      }
    } else {
      this.formInvalid = true;

    }
  }

  @ViewChild('section') element!: ElementRef;
  private scrollPosition: number = 0;
  private elementHeight: number = 0;
  private pageHeight: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
    this.elementHeight = this.element.nativeElement.offsetHeight;
    const rect = this.element.nativeElement.getBoundingClientRect();
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
    this.element.nativeElement.style.opacity = 1;
    this.element.nativeElement.style.transform = 'translateY(0)';
  }
  private remAnim() {
    this.element.nativeElement.style.transform = 'translateY(20px)';
    this.element.nativeElement.style.opacity = 0;
  }
  


}
