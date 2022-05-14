import { Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';

export const routes: Routes = [

  { path: '', component: PresentationComponent },
  { path: 'accueil', component: PresentationComponent },
  { path: 'bilan', component: PresentationComponent },
];
