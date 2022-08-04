import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public static baseUrl = environment.baseUrl
  constructor() { }
}
