import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeatilsComponent } from './Components/deatils/deatils.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatCheckboxModule } from  '@angular/material';
import { InnerComponent } from './Components/inner/inner.component';
import { TableCheckboxComponent } from './Components/table-checkbox/table-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DeatilsComponent,
    InnerComponent,
    TableCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
