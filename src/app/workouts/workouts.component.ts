import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutItemComponent } from './workout-item/workout-item.component';
import { Workout } from './workout.model';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [WorkoutItemComponent, CommonModule],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css',
})
export class WorkoutsComponent {
  workouts: Workout[] = [];
  daySelected: number = 0;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.workouts = this.workoutService.getWorkouts();
  }

  onDayButton(event: Event, id: number) {
    this.daySelected = id;
  }
}
