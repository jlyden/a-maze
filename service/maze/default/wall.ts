import { MapSite } from '../map-site'

export class Wall extends MapSite {
  enter(): void {
    alert('ouch!');
  }

  display(): string {
    return 'this is a wall';
  }
}