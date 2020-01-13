import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchFilterPipe } from './shared/search-filter.pipe';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectFormComponent } from './project-form/project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    SearchFilterPipe,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
