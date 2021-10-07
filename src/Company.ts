import faker from 'faker';

export class Company {
  companName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
            <div>
            <h1>Company name: ${this.companName}</h1>
            <h3>Company Catchphrase ${this.catchPhrase}</h3>
            </div>`;
  }
}
