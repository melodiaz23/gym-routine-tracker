import { Injectable } from '@angular/core';
import { Workout } from '../workouts/workout.model';
import { WorkoutService } from '../workouts/workout.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private workoutService: WorkoutService) {}

  storeWorkout() {
    const workouts = this.workoutService.getWorkouts();
  }
}
