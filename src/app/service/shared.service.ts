import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  title="shared service"
  list : any[] = [];

  constructor() { }
}
