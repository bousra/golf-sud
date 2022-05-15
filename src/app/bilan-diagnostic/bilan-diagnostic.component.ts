import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bilan-diagnostic',
  templateUrl: './bilan-diagnostic.component.html',
  styleUrls: ['./bilan-diagnostic.component.css'],
})
export class BilanDiagnosticComponent implements OnInit {
  tableDiagnostic = [
    {
      contraintes: 'Problèmes de traitement des ordures;',
      potentialites: 'Absence de pollution industrielle ;',
      orientations:
        'Élaborer un' +
        'programme de formation sur le traitement des ordures ;',
    },
    {
      contraintes: 'Problèmes d’assainissement ;',
      potentialites: 'Existence de réseau d’assainissement ;',
      orientations: 'Généraliser le réseau d’égouts ;',
    },
    {
      contraintes: 'Existence de rues sablonneuses ;',
      potentialites: '',
      orientations: ' Mettre des pavés dans les axes routiers ;',
    },
    {
      contraintes: 'Défectuosité de routes bitumées ;',
      potentialites: 'Existence d’un réseau routier ;',
      orientations:
        'Acquérir un équipement comprenant deux hydrocureurs, deux camions entasseurs, deux pelles mécaniques ;',
    },
    {
      contraintes: '',
      potentialites: '',
      orientations: 'Aménager les points bas ;',
    },
  ];

  tableCadreVie = [
    {
      contraintes: ['Inexistence de jardins et places publics ;'],
      potentialites: ['Existence du littoral atlantique ;','Existence d’un poumon vert (technopole)'],
      orientations: ['Aménager des espaces verts ;','Aménager les 4 km de plage ;','Aménager la rocade du technopole ;']
    },
    {
      contraintes: ['Prolifération des véhicules hippomobiles ; '],
      potentialites: [],
      orientations: ['Créer une fourrière municipale ;','nitier les charretiers au code de la route ;'],
    },
  ];

  tableTerritoire = [
    {
      contraintes: [],
      potentialites: ['Existence de terrains dans le quartier de Golf-Sud ;'],
      orientations: ['Construire des terrains multifonctionnels;','Construire des terrains de football synthétique']
    },
    {
      contraintes: [],
      potentialites: ['Existence d’une façade maritime ;'],
      orientations: ['Installer un parcours sportif sur une partie de la façade atlantique ;'],
    },
    {
      contraintes: ['Nombre élevé de décès par noyade ;'],
      potentialites: ['Forte population jeune ;'],
      orientations: ['Aménager les 4 km de plage et relever le niveau de sécurité ;'],
    },
  ];
  tableAgriElevagePeche =  [
    {
      domaines: 'Agricultue',
      contraintes: ['Secteur non organisé ;'],
      potentialites: ['Production relativement importante ;','Existence de baux maraichers ;'],
      orientations: ['Regrouper les commerçants en GIE pour booster les recettes ;','Réhabiliter les baux maraichers ;']
    },
    {
      domaines: 'Pêche',
      contraintes: ['Non utilisation de l’eau du technopole ;'],
      potentialites: ['Existence de zones favorables à la pisciculture ;'],
      orientations: [' Développer la pisciculture ;'],
    },
    {domaines: 'Elevage',
      contraintes: ['Secteur non organisé'],
      potentialites: ['Existence de nombreux poulaillers'],
      orientations: ['Regrouper les commerçants en GIE'],
    },
  ];
  tableArtisanat =  [
    {

      contraintes: ['Difficile accès au crédit ;'],
      potentialites: ['Existence d’institutionsde finance ;'],
      orientations: ['Établir des conventions avec les partenaires techniques et financiers ;']
    },
    {

      contraintes: ['Cloisonnement des différents corps de métier ;'],
      potentialites: ['Existence de plusieurs corps de métier ;'],
      orientations: ['Mettre en réseau les artisans ;'],
    },
    {
      contraintes: ['Inexistence de cadres de promotion des produits artisanaux ;'],
      potentialites: ['Existence d’un centre de formation en horticulture ;'],
      orientations: ['Créer un cadre d’expression, de promotion et de partage ;'],
    },
    {
      contraintes: ['Problème d’accès à l’information et au partenariat','Cadre de travail non approprié ;'],
      potentialites: ['Existence de plusieurs centres de formation privés ;'],
      orientations: ['Construire et équiper un centre polyvalent de formation professionnelle ;'],
    },
  ];

  tableTourisme =  [
    {
      contraintes: ['Non valorisation du littoral atlantique ;','Faible exploitation du technopole ;'],
      potentialites: ['Existence de sites potentiels ;'],
      orientations: ['Aménager le littoral atlantique et la technopole ;']
    },
    {
      contraintes: ['Insuffisance d’infrastructures hôtelières ;'],
      potentialites: ['Existence d’hôtels et d’auberges ;'],
      orientations: ['Promouvoir une politique pour développer le tourisme ;'],
    },
    {
      contraintes: ['Dépôt sauvage d’ordures sur le littoral ;'],
      potentialites: [],
      orientations: ['Sécuriser et entretenir les sites ;'],
    },

  ];

  tableCommerce =  [
    {
      contraintes: ['Vétusté des marchés et équipements marchands ;'],
      potentialites: ['Existence de 7 marchés ;'],
      orientations: ['Moderniser les marchés ;']
    },
    {
      contraintes: ['Occupation anarchique de la voie publique ;'],
      potentialites: ['Existence de surveillants de marchés ;'],
      orientations: ['Désengorger la voie publique ;'],
    },
    {
      contraintes: ['Insuffisance de sécurité au niveau des marchés ;'],
      potentialites: [],
      orientations: ['Renforcer la dotation des marchés en projecteurs ;', 'Affecter des gardiens en nombre suffisant;'],
    },
    {
      contraintes: ['Problème de gestion des marchés ;'],
      potentialites: ['Existence d’une commission halles et marchés ;'],
      orientations: ['Procéder au recensement général des cantines et tables dans les marchés ;']
    },
    {
      contraintes: ['Problème de recouvrement des taxes ;'],
      potentialites: [],
      orientations: ['Systématiser l’abonnement mensuel ;'],
    },
    {
      contraintes: ['Absence de répertoires ;'],
      potentialites: ['Patente annuelle ;'],
      orientations: ['Recenser les boutiques ;'],
    },

    {
      contraintes: ['Absence de répertoires ;'],
      potentialites: ['Recouvrement patentes et publicités ;'],
      orientations: ['Faire le recensement général ;'],
    },

  ];

  tableTransport =  [
    {
      contraintes: ['Étroitesse des routes ;'],
      potentialites: ['Important parc automobile ;'],
      orientations: ['Élargir les axes principaux ;']
    },
    {
      contraintes: ['Absence de panneaux de signalisation ;'],
      potentialites: [],
      orientations: ['Installer des panneaux de signalisation ;'],
    },
    {
      contraintes: ['Non-respect du code de la route ;'],
      potentialites: ['Existence d’un commissariat de police ;'],
      orientations: ['Former les conducteurs au civisme et les sensibiliser au respect du code de la route ;'],
    },

  ];

  tableFinance = [
    {
      contraintes: ['Inexistence d’un fond d’appui aux initiatives de développement locales des Organisations communautaires de Base (OCB) ;'],
      potentialites: ['Existence d’institutions financières ;'],
      orientations: ['Créer une mutuelle d’épargne et de crédit municipale ; ']
    },
    {
      contraintes: [],
      potentialites: ['Existence de GIE et de groupements de promotion féminine ;'],
      orientations: ['Organiser une foire municipale ; '],
    },


  ];
  constructor() {}

  ngOnInit(): void {}
}
