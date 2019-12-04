import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Stagiaire} from '../model/stagiaire';
import {StagiaireHttpService} from '../stagiaire/stagiaire-http-service';
import {Adresse} from '../model/adresse';

@Component({
  selector: 'stagiaire-form',
  templateUrl: './stagiaire-form.component.html',
  styleUrls: ['./stagiaire-form.component.css']
})
export class StagiaireFormComponent implements OnInit {

  constructor(private stagiaireService: StagiaireHttpService) { }

  @Input("current")
  stagiaire: Stagiaire;

  @Output()
  childEvent = new EventEmitter();

  save() {
    this.stagiaireService.save(this.stagiaire);
    this.cancel();
  }

  cancel(){
    this.childEvent.emit();
  }



  ngOnInit() {
  }



}
