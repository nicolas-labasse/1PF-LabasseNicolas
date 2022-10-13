import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLetraCabecera]'
})
export class LetraCabeceraDirective implements OnInit {

  constructor(

    private elemento: ElementRef,
    private render: Renderer2

  ) { }

  ngOnInit():void{
    this.render.setStyle(this.elemento.nativeElement.parentElement, 'font-size', '20px');
  }

}
