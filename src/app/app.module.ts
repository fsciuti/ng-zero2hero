import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchFilterPipe } from './shared/search-filter.pipe';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectContainerComponent } from './projects/project-container/project-container.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectSearchComponent } from './projects/project-search/project-search.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { HomeComponent } from './layout/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectContainerComponent,
    SearchFilterPipe,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectSearchComponent,
    ProjectDetailComponent,
    HomeComponent,
    NavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
