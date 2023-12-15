import { Component, OnInit , NO_ERRORS_SCHEMA} from '@angular/core';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
})
export class AdminNavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}

export interface MenuItem {
  label?: string;
  icon?: string;
}
