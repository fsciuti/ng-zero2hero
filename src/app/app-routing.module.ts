import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ProjectContainerComponent } from './projects/project-container/project-container.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'projects', component: ProjectContainerComponent },
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}