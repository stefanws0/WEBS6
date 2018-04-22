import {Participant} from '../models/participant';
import {Heat} from '../models/heat';

export interface IChampionship {
  winner: Participant;
  numberOfHeats: number;
  heats: Heat[];
  participants: Participant[];
  generateHeats: () => void;
}
