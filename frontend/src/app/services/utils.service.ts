import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  start: () => void;
  pause: () => void;
  getTimeLeft: () => any;
  getStateRunning: () => any;

  constructor() { }
}
