import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsGlassDirective } from "../as-glass.directive";


@NgModule({
  declarations: [AsGlassDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AsGlassDirective
  ]
})
export class GlassModule { }
