export type Spotify = {
  isActive: boolean;
  songName: string;
};

export type Videogame = {
  isActive: boolean;
  gameName: string;
};

export type AvatarColors = 'red' | 'gray' | 'blue' | 'yellow' | 'purple';

export type Friend = {
  _id: string;
  color: AvatarColors;
  index: number;
  name: string;
  status?: string;
  isAdmin: boolean;
  isActive: boolean;
  spotify?: Spotify;
  videogame?: Videogame;
};
