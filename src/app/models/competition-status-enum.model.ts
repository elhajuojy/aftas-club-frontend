export enum StatusCompetition {
  AVENIR = 'avenir',
  FERME = 'ferme',
  ENCOURS = 'encour'
}

export interface IcompetitionsStatus{
  name: string;
  code: StatusCompetition;
  url?: string;

}
