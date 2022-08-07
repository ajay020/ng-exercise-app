import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExerciseService } from './../exercise.service';
import { SharedService } from './../service/shared.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  bodyParts!: any;
  targetMuscles!: any;
  equipments!: any;

  @Output() getBodyPart = new EventEmitter<string>();
  @Output() getTargetMuscle = new EventEmitter<string>();
  @Output() getEquipment = new EventEmitter<string>();


  constructor(private exerciseService: ExerciseService, private sharedService: SharedService) { }



  ngOnInit(): void {
    this.exerciseService.getAllBodyParts().subscribe(data =>{
        this.bodyParts = data;
    })

    this.exerciseService.getAllTargetmuscles().subscribe(data =>{
        this.targetMuscles = data;
    })

    this.exerciseService.getAllEquipments().subscribe(data =>{
        this.equipments = data;
    })

  }
  getBodyPartBy(bodyPart:string ){
    this.getBodyPart.emit(bodyPart);
  }
  selectTargetMuscle(target:string){
    this.getTargetMuscle.emit(target)
  }

  selectEquipment(equipment: string){
    this.getEquipment.emit(equipment);
  }

}
