import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Ng2MdlModule } from 'ng2-mdl';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, Ng2MdlModule ],
    declarations: [ 
        AppComponent,
        CardComponent  
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
