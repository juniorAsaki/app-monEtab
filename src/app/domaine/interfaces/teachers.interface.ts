export interface Teachers {
  idPerson: number,
  firstName: string,
  lastName: string,
  numbers: string,
  dateOfBirth: string,
  urlPicture: string,
  gender: string,
  available: boolean,
  specialty: string,
  adress: {
    id_adress: number,
    country: string,
    city: string,
    street: string
  }
}
