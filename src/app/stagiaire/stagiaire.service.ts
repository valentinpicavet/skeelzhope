import {Injectable} from '@angular/core';
import {Stagiaire} from '../model/stagiaire';
import {Adresse} from '../model/adresse';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();

  constructor() {
    this.stagiaires.push(new Stagiaire(1, 0, 'MICHEL', 'Arnaud', 'arnaud.lebo@gmail.com', '0606060606', new Adresse('4 rue de Paris', '1er étage', '33160', 'Saint-Médard-en-Jalles'), new Date('1996-11-11'), 'BAC'));
    this.stagiaires.push(new Stagiaire(2, 0, 'DUCOS', 'Théo', 'theo.legros@gmail.com', '6666666666', new Adresse('28 rue de l\'enfer', '', '66666', 'Dante'), new Date('1991-09-07'), 'BAC_8'));
    this.stagiaires.push(new Stagiaire(3, 0, 'GALMAR', 'Oriane', 'oriane@gmail.com', '8888888888', new Adresse('88 rue de l\'infini', '', '88888', 'Pluton'), new Date('1994-03-06'), 'BAC_2'));
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  findById(id: number): Stagiaire {
    for (let stagiaire of this.stagiaires) {
      if (id == stagiaire.id) {
        return stagiaire;
      }
    }

    return null;
  }

  save(stagiaire: Stagiaire) {
    let find: boolean = false;
    let index;
    for (index in this.stagiaires) {
      if (stagiaire.id == this.stagiaires[index].id) {
        find = true;
        break;
      }
    }

    if (find) {
      this.stagiaires[index] = stagiaire;
    } else {
      this.stagiaires.push(stagiaire);
    }
  }

  deleteBydId(id: number) {
    let find: boolean = false;
    let index;
    for (index in this.stagiaires) {
      if (id == this.stagiaires[index].id) {
        find = true;
        break;
      }
    }

    if (find) {
      this.stagiaires.splice(index, 1);
    }
  }
}
