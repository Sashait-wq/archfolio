import { Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./pages/project-details/project-details.component').then(
        (m) => m.ProjectDetailsComponent
      )
  },
  {
    path: 'certifications',
    component: CertificationsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
