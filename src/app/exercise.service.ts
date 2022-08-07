import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  url = 'https://exercisedb.p.rapidapi.com/exercises'  ;
  API_KEY ='6f6e4b37c0mshf77d39ad978b189p1fb4adjsn2d7bbd1d85aa';
  API_HOST ='exercisedb.p.rapidapi.com';

  constructor(private httpClient: HttpClient) { }

  getAllBodyParts(){
    return this.httpClient.get(this.url+'/bodyPartList', {
        headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': this.API_HOST
          }
    });
  }

  getAllTargetmuscles(){
    return this.httpClient.get(this.url+'/targetList', {
        headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': this.API_HOST
          }
    });
  }

  getAllEquipments(){
    return this.httpClient.get(this.url+'/equipmentList', {
        headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': this.API_HOST
          }
    });
  }

  getAllExercise(){
    return this.httpClient.get(this.url, {
        headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': this.API_HOST
          }
    });
  }

  getByBodyPart(name:string){
    return this.httpClient.get(this.url+'/bodyPart/'+name , {
        headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': this.API_HOST
          }
    });
  }
  getByTargetMuscle(name:string){
    return this.httpClient.get(this.url+'/target/'+name , {
        headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': this.API_HOST
          }
    });
  }
  getByEquipment(name:string){
    return this.httpClient.get(this.url+'/equipment/'+name , {
        headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': this.API_HOST
          }
    });
  }
}
