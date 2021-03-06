import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-colorpicker';

@NgModule({
    imports: [
        BrowserModule,
        ColorPickerModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
