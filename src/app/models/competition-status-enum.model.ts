export enum StatusCompetition {
  AVENIR = 'avenir',
  FERME = 'ferme',
  ENCOURS = 'encour',
  default = ''
}

export interface IcompetitionsStatus{
  name: string;
  code: StatusCompetition;
  url?: string;

}
