export interface Students {
  idPerson: number,
  matricule: string,
  firstName: string,
  lastName: string,
  numbers: string,
  numbersFather: string,
  dateOfBirth: string,
  urlPicture: string,
  gender: string,
  adress: {
    id_adress: number,
    country: string,
    city: string,
    street: string
  }
}
