type children = {
  path: string;
  label: string;
};
type navigate = {
  path: string;
  label: string;
  collapseId: string;
  children: children[];
};

export const navigations = {
 presentation: {
    path: '',
    label: 'Accueil',
    collapseId: 'presentation',
    children: {
      accueil: {
        path: 'accueil',
        label: 'Presentation',
      },
      admingeo: {
        path: 'admin-geo',
        label: 'Administration et Géographie',
      },
      sociodemographiques: {
        path: 'caracteristique-socio-demo',
        label: 'Sociodémographiques',
      },
     phisyhyclim: {
        path: 'caracteristique-phy-hydro-clim',
        label: 'Physiques, hydrographiques et climatologiques',
      },
 },
  },
  bilanDiagnostic: {
    path: '/bilan',
    label: 'Bilan diagnostic',
    collapseId: 'bilan-diagnostic',
    children: {
      profilsocial: {
        path: 'profil-social',
        label: 'Profil social',
      },
      education: {
        path: 'education',
        label: 'Education',
      },
      profileconomique:{
        path: 'profil-economique',
        label: 'Profil économique',
      },
  },
  },
 orientationPerspectives: {
    path: '/orientation',
    label: 'Orientations et perspectives',
    collapseId: 'orention-perspectives',
    children: {
     vision: {
        path: 'vision',
        label: 'Vision',
      },
     objectifs: {
        path: 'objectifs',
        label: 'Objectifs',
      },
     perspectives: {
        path: 'perspectives',
        label: 'Perspectives',
      },
    },
  },
};
