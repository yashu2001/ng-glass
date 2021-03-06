# AngularGlass

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Usage guide

### Install Package
```
    npm install angular-glass
```

### Import module from package into your app module

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { GlassModule } from "angular-glass";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GlassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Use directive inside component html

```
<div class="parent">
  <div class="container" asGlass [outlineWidth]=4>
    <p>This is a Test for glassMorphism module angular-glass</p>
  </div>
</div>
```

## Properties you can bind to after adding the asGlass directive to any html element

| Property     	| Default Value 	| Permitted Values         	|
|--------------	|---------------	|--------------------------	|
| blur         	| 4             	| any integer from 0-20     |
| opacity      	| 0.25          	| 0-1                      	|
| borderRadius 	| 10            	| any positive number      	|
| showOutline  	| true          	| boolean                  	|
| outlineWidth 	| 1             	| any positive number      	|
| r            	| 255           	| any number between 0-255 	|
| g            	| 255           	| any number between 0-255 	|
| b            	| 255           	| any number between 0-255 	|



## Sample Images

![Tinted Abstract background](https://user-images.githubusercontent.com/45912002/120915737-22d15a80-c6c3-11eb-8eb2-5872c745533d.png)
![Abstract Shape](https://user-images.githubusercontent.com/45912002/120915748-2b299580-c6c3-11eb-9fdf-1382daff1198.png)
![Login Screen](https://user-images.githubusercontent.com/45912002/120915756-2f55b300-c6c3-11eb-924f-742498251592.png)
