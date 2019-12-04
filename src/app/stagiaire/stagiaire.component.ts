import {Component, OnInit} from '@angular/core';
import {Stagiaire} from '../model/stagiaire';
import {StagiaireHttpService} from './stagiaire-http-service';
import {Adresse} from '../model/adresse';

@Component({
  selector: 'stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  stagiaire: Stagiaire = null;

  constructor(private stagiaireService: StagiaireHttpService) {
  }

  ngOnInit() {
  }

  public list(): any {
    return this.stagiaireService.findAll();
  }

  add() {
    this.stagiaire = new Stagiaire();
    this.stagiaire.adresse = new Adresse();
  }

  edit(id: number) {
    this.stagiaireService.findById(id).subscribe(resp =>
    {this.stagiaire = resp;
    if (this.stagiaire.adresse==null){
      this.stagiaire.adresse= new Adresse()}
    })
  }

  delete(id: number) {
    this.stagiaireService.deleteBydId(id);
  }

  cancel() {
    this.stagiaire = null;
  }
}
