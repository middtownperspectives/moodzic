class Curator {
  constructor(
    id,
    username,
    firstName,
    lastName,
    specialty,
    credential,
    credentialType,
    rating,
    genres,
    followers
  ) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.specialty = specialty;
    this.credential = credential;
    this.credentialType = credentialType;
    this.rating = rating;
    this.genres = genres;
    this.followers = followers;
  }
}

export default Curator;
