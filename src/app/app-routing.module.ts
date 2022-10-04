import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { AutobiographyComponent } from './components/autobiography/autobiography.component';

const routes: Routes = [
    {path: 'projects', component: ProjectListComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'autobiography', component: AutobiographyComponent},
    {path: 'placeholder', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponent = [ProjectListComponent, ContactComponent, AutobiographyComponent]