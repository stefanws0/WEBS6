import {IChampionship} from '../interfaces/ichampionship';
import {Participant} from './participant';
import {Heat} from './heat';

export class Knockout implements IChampionship {
  winner: Participant;
  numberOfHeats: number;
  heats: Heat[];
  participants: Participant[];
  generateHeats: () => void;
}
