import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule,BsModalService } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
    
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
