import { Component } from '@angular/core';
import { WorkoutsComponent } from '../workouts/workouts.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [WorkoutsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {}
