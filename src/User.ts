import faker from 'faker';
import { Mapable } from './CustomMap';

export class User implements Mapable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'black';

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
