import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { Exercise } from './model/exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    exercises : Exercise[] = [];

  constructor(private exerciseService: ExerciseService){}

  ngOnInit(): void {
      this.exerciseService.getAllExercise().subscribe(data =>{
        this.exercises = data; 
      })
  }
 

  getExerciseByBodyPart(bodyPart: string){
    // this.exerciseService.getByBodyPart(bodyPart).subscribe(data =>{
    //     this.exercises = data;
    // })
    this.exercises =  this.exercises.filter(ex => ex.bodyPart === bodyPart)
  }

  getExerciseByMuscle(muscleName: string){
    // this.exerciseService.getByTargetMuscle(muscleName).subscribe(data =>{
    //     this.exercises = data;
    // })
    this.exercises =  this.exercises.filter(ex => ex.bodyPart === muscleName)

  }

  getExerciseByEquipment(equipment:string){
    // this.exerciseService.getByEquipment(equipment).subscribe(data =>{
    //     this.exercises = data;
    // })
    this.exercises =  this.exercises.filter(ex => ex.bodyPart === equipment)

  }
}
