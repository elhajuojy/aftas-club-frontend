import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Fish } from 'src/app/models/fish.model';
import { Level } from 'src/app/models/level.model';
import { FishService } from 'src/app/services/fish/fish.service';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-add-fish-modal',
  templateUrl: './add-fish-modal.component.html',
  styleUrls: ['./add-fish-modal.component.scss']
})
export class AddFishModalComponent {

  fishFrom!: FormGroup;
  levels: Level[] = [];
  constructor(
    private fishService: FishService,
    private levelService: LevelService
  ) { }


  ngOnInit(): void {

      this.fishFrom = new FormGroup({
        name: new FormControl(''),
        averageWeight: new FormControl(''),
        // id: new FormControl(''),
        level_id: new FormControl('')
      });
      this.getLevels();
 }

  getLevels(): void{
    this.levelService.getLevels().subscribe(
      data => {
        this.levels = data;
        console.log(this.levels);
      },
      error => {
        console.log(error);
      }
    )

  }

  public onSubmit(from: FormGroup): void {
    console.log("onSubmit");
    console.log("Valid: " + from.valid);
    console.log("Value: " + from.value.toString());


    //TODO: VALIDATION THAN SEND TO BACKEND



    this.fishService.addFish(from).subscribe(
      data => {
          console.log(data);

      },
      error => {
        console.log(error);

      }
    )
    //todo: close modal
  }

}
