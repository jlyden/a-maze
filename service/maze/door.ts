import { MapSite } from './map-site'

export class Door extends MapSite {
  // Note: roomNumber b/c Door does not need to know Room, only its reference
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

    const currentRoomNumber = 0; // TODO: getUserCurrentLocation;
    const otherSideRoomNumber = this.otherSideFrom(currentRoomNumber);
    var alertMessage = '';
    if (otherSideRoomNumber) {
      alertMessage = `passed through door to ${otherSideRoomNumber}`;
      // TODO: actually go through door
    } else {
      alertMessage = `you can't use this door from ${currentRoomNumber}`;
    }
    alert(alertMessage);
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
