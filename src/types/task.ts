export interface Task {
  readonly id: string;
  title: string;
  readonly isCompleted: boolean;
  readonly createdAt: Date;
}
