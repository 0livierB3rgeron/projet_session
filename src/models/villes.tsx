export type IVille = {
    _id: string
    nom: string;
    surnoms: string[];
    pays: string;
    longitude: string;
    lattitude: string;
    climat: string;
    continent: string;
    population: number
    superficie: number;
    elevation: number;
    infraImportante: {nom: string;adresse: string;}[];
    anneeFondation: string;
    dangereux: boolean;
    image: string;
  };