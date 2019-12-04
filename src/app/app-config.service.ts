import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  backEnd: string = "http://localhost:8080/"

  constructor() { }
}
