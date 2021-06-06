import { ElementRef } from '@angular/core';
import { AsGlassDirective } from './as-glass.directive';

describe('AsGlassDirective', () => {
  it('should create an instance', () => {
    // @ts-ignore
    const directive = new AsGlassDirective(null as ElementRef);
    expect(directive).toBeTruthy();
  });
});
