export class Workout {
  constructor(
    public day: number,
    public dayName: string,
    public exercises: {
      exerciseName: string;
      imagePath: string;
      sets: number;
      reps: number;
      weight: number;
    }[]
  ) {}
}
