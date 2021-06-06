import { Directive, ElementRef, Input, OnInit } from '@angular/core';

type blur = 0 |1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

@Directive({
  selector: '[asGlass]',
})
export class AsGlassDirective implements OnInit {
  @Input() blur: blur = 4;
  @Input() opacity: number = 0.25;
  @Input() borderRadius: number = 10;
  @Input() showOutline: Boolean = true;
  @Input() outlineWidth: number = 1;
  @Input() r: number = 255;
  @Input() g: number = 255;
  @Input() b: number = 255;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    if (this.opacity < 0) {
      this.opacity = 0;
    }
    if (this.opacity > 1) {
      this.opacity = 1;
    }
    if (this.borderRadius < 0) {
      this.borderRadius = 0;
    }
    this.el.nativeElement.style.backgroundColor = `rgba(${this.r},${this.g},${this.b},${this.opacity})`;
    this.el.nativeElement.style.borderRadius = `${this.borderRadius}px`;
    this.el.nativeElement.style.boxShadow =
      '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )';
    this.el.nativeElement.style.backdropFilter = `blur(${this.blur}px)`;
    this.el.nativeElement.style[
      '-webkit-backdrop-filter'
    ] = `blur(${this.blur}px)`;
    if (this.showOutline) {
      this.el.nativeElement.style.border =
        `${this.outlineWidth}px solid rgba( 255, 255, 255, 0.18 )`;
    }
  }
}
