import MoodCategory from "../models/category";
import Curator from "../models/curator";

export const MOODCATEGORIES = [
  new MoodCategory(
    1,
    "Calm",
    "#f5428d",
    "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
  new MoodCategory(
    2,
    "Anxious",
    "#f54242",
    "https://images.pexels.com/photos/3327126/pexels-photo-3327126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
  new MoodCategory(
    56,
    "Tired",
    "#f5a442",
    "https://images.pexels.com/photos/434034/pexels-photo-434034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
  new MoodCategory(
    4,
    "Focused",
    "#f5d142",
    "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
  new MoodCategory(
    5,
    "Sad",
    "#368dff",
    "https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
  new MoodCategory(
    6,
    "Exotic",
    "#41d95d",
    "https://images.pexels.com/photos/604694/pexels-photo-604694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
  new MoodCategory(
    7,
    "Confused",
    "#9eecff",
    "https://images.pexels.com/photos/929280/pexels-photo-929280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
  new MoodCategory(
    9,
    "Bored",
    "#ffc7ff",
    "https://images.pexels.com/photos/872756/pexels-photo-872756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "neutral"
  ),
];

export const CURATORS = [
  // new Curator('id', 'username', 'firstName', 'lastName', 'specialty', 'credential', 'credentialType', 'rating', 'genre', 'followers')
  new Curator(
    "23",
    "The One",
    "James",
    "Jordan",
    "Being Active",
    "credential",
    "credentialType",
    "A",
    "Hip Hop",
    8
  ),
];
