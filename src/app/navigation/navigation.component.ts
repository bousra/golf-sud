import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navigations = [
    {
      path: '',
      label: 'Accueil',
      collapseId: 'presentation',
      children: [
        {
          path: 'accueil',
          label: 'Presentation',
        },
        {
          path: 'admin-geo',
          label: 'Administration et Géographie',
        },
        {
          path: 'caracteristique-socio-demo',
          label: 'Sociodémographiques',
        },
        {
          path: 'caracteristique-phy-hydro-clim',
          label: 'Physiques, hydrographiques et climatologiques',
        },
      ],
    },
    {
      path: '/bilan',
      label: 'Bilan diagnostic',
      collapseId: 'bilan-diagnostic',
      children: [
        {
          path: 'profil-social',
          label: 'Profil social',
        },
        {
          path: 'education',
          label: 'Education',
        },
        {
          path: 'profil-economique',
          label: 'Profil économique',
        },


      ],
    },
    {
      path: '/orientation',
      label: 'Orientations et perspectives',
      collapseId: 'orention-perspectives',
      children: [
        {
          path: '',
          label: 'Vision',
        },
        {
          path: '',
          label: 'Objectifs',
        },
        {
          path: '',
          label: 'Perspectives',
        },


      ],
    },
  ];
}
