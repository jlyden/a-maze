import { MapSite } from '../interfaces/map-site'

export class Wall implements MapSite {
  enter(): void {
    alert('ouch!');
  }

  display(): string {
    return 'this is a wall';
  }
}