import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
    exercises! : any;
    message! : string;

  constructor(private exerciseService: ExerciseService, private sharedService: SharedService){}

  ngOnInit(): void {
      this.exerciseService.getAllExercise().subscribe(data =>{
        this.exercises = data; 
      })
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.message =  this.sharedService.title;
    console.log(this.sharedService.list.pop(), changes);   
  }

  getExerciseByBodyPart(bodyPart: string){
    this.exerciseService.getByBodyPart(bodyPart).subscribe(data =>{
        this.exercises = data;
    })
  }

  getExerciseByMuscle(muscleName: string){
    this.exerciseService.getByTargetMuscle(muscleName).subscribe(data =>{
        this.exercises = data;
    })
  }

  getExerciseByEquipment(equipment:string){
    this.exerciseService.getByEquipment(equipment).subscribe(data =>{
        this.exercises = data;
    })
  }
}
