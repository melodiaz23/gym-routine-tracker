import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Workout } from '../workout.model';

@Component({
  selector: 'app-workout-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-item.component.html',
  styleUrl: './workout-item.component.css',
})
export class WorkoutItemComponent {
  @Input() workouts!: Workout[];
  @Input() id!: number;
}
