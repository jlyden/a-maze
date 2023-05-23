import { MapSite } from './map-site'

export class Wall extends MapSite {
  enter(): void {
    alert('Ouch!');
  }
}