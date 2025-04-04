// Types for the map component

export type Coordinate = [number, number];
export type MultiPolygon = Coordinate[][][];

export interface City {
  name: string;
  coords: Coordinate;
  description: string;
  host: string;
  usualAttendees: string;
  venue: string;
  time: string;
  date: string;
  link: string;
  importance: number;
}

export interface CityPair {
  from: City;
  to: City;
}

export interface MapDimensions {
  width: number;
  height: number;
}

export interface GeoFeature {
  type: string;
  properties: any;
  geometry: {
    type: string;
    coordinates: Coordinate[][] | Coordinate[][][] | Coordinate[];
  };
}

export interface GeoJSONResponse {
  type: string;
  properties: any;
  geometry: {
    type: string;
    coordinates: MultiPolygon;
  };
}