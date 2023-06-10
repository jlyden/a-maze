import { MapSite } from '../map-site'

export class Door extends MapSite {
  private roomOneNumber: number;
  private roomTwoNumber: number;
  private isOpen: boolean;

  constructor(roomOneNumber: number, roomTwoNumber: number) {
    super();

    this.roomOneNumber = roomOneNumber;
    this.roomTwoNumber = roomTwoNumber;
    this.isOpen = false;
  }

  enter(): void {
    if (!this.isOpen) {
      alert('door is shut!');
      return;
    }

    const userCurrentLocation = 0; // TODO: getUserLocation()
    const otherSideRoomNumber = this.otherSideFrom(userCurrentLocation);

    var alertMessage = '';

    if (otherSideRoomNumber) {
      alertMessage = `passed through door to ${otherSideRoomNumber}`;
      // TODO: actually go through door, i.e. setUserLocation(otherSideRoomNumber)
    } else {
      alertMessage = `you can't use this door from ${userCurrentLocation}`;
    }
    alert(alertMessage);
    return;
  }

  display(): string {
    return `door between room ${this.roomOneNumber} and ${this.roomTwoNumber}, isOpen is ${JSON.stringify(this.isOpen)}`;
  }

  close(): void {
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
  }

  otherSideFrom(roomNumber: number): number|void {
    switch(roomNumber) {
      case this.roomOneNumber:
        return this.roomTwoNumber;
      case this.roomTwoNumber:
        return this.roomOneNumber;
      default:
        return;
    }
  }
}
