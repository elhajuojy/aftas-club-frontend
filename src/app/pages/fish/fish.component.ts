import { Component } from '@angular/core';
import { Fish } from 'src/app/models/fish.model';
import { FishService } from 'src/app/services/fish/fish.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent {
  fishes: Fish[] = [];
  messageError!: string;

  constructor(private fishService: FishService) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fishService.getFishs().subscribe(
      data => {
        this.fishes = data;
        console.log(this.fishes);

      },
      error => {
        this.messageError = error
      }
    )
  }

}
