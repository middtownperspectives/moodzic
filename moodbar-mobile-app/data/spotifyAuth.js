import * as AuthSession from "expo-auth-session";
import axios from "axios";

const scopesArr = [
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-modify",
  "user-library-read",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-recently-played",
  "user-top-read",
];

const scopes = scopesArr.join(" ");

const getSpotifyCredentials = async () => {
  const res = await axios.get("/api/spotify-credentials");
  const spotifyCredentials = res.data;
  return spotifyCredentials;
};

const getAuthorizationCode = async () => {
  try {
    const credentials = await getSpotifyCredentials();
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl:
        "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" +
        credentials.clientId +
        (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
        "&redirect_uri=" +
        encodeURIComponent(redirectUrl),
    });
  } catch (err) {
    console.error(err);
  }
  return result.params.code;
};
