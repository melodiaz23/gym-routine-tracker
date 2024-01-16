import { Injectable } from '@angular/core';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: Workout[] = [
    new Workout(1, 'Push', [
      {
        exerciseName: 'Machine Press',
        imagePath:
          'https://www.inspireusafoundation.org/wp-content/uploads/2022/05/chest-press-machine.gif',
        sets: 3,
        reps: 15,
        weight: 12,
      },
      {
        exerciseName: 'Dumbell press',
        imagePath:
          'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif',
        sets: 3,
        reps: 15,
        weight: 12,
      },
    ]),
    new Workout(2, 'Legs', [
      {
        exerciseName: 'Bulgarian Squat',
        imagePath:
          'https://weighttraining.guide/wp-content/uploads/2021/10/Bulgarian-split-squat.png',
        sets: 3,
        reps: 10,
        weight: 18,
      },
    ]),
  ];

  constructor() {}

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
    console.log(this.workouts);
  }

  getWorkouts() {
    console.log(this.workouts);
    return this.workouts.slice();
  }
}
