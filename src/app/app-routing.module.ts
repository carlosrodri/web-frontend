import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminComponent } from './components/admin/admin.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmprenComponent } from './components/empren/empren.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainBodyComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'empren',
    component: EmprenComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog/details/:id',
    component: CardDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'adminPanel',
    component: AdminPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BlogComponent, MainBodyComponent]