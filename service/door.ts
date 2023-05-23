import { MapSite } from './map-site'

export class Door extends MapSite {
  // Note: Intentionally storing number not Room
  // Door does not need to know Room, only its reference
  private _roomOneNumber: number;
  private _roomTwoNumber: number;
  private _isOpen: boolean;

  constructor(roomOneNumber: number, roomTwoNumber: number) {
    super();

    this._roomOneNumber = roomOneNumber;
    this._roomTwoNumber = roomTwoNumber;
    this._isOpen = false;
  }

  enter(): void {
    alert('passed through door');
  }
}
