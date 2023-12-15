export enum StatusCompetition {
  AVENIR = 'AVENIR',
  FERME = 'FERME',
  ENCOURS = 'ENCOURS'
}

export interface IcompetitionsStatus{
  name: string;
  code: StatusCompetition;
  url?: string;

}
