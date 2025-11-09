export enum BOOKINGSTATUS {
  OPEN = "Open",
  BOOKED = "Booked",
}

export interface TrainerAvailibilty {
  id: number;
  trainerId?: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: BOOKINGSTATUS;
}
