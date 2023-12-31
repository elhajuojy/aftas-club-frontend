export interface Competition {
  code: string;
  date: string;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  location: string;
  amount: number;
  status: string;
}

export interface CompetitionRequest{
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  amount: number;

}
