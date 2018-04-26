import {IChampionship} from '../interfaces/ichampionship';
import {Heat} from './heat';
import {Participant} from './participant';

export class Poule implements IChampionship {
  generateHeats: () => void;
  heats: Heat[];
  numberOfHeats: number;
  participants: Participant[];
  winner: Participant;
}
