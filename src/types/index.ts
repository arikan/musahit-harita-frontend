export type DeviceType = "mobile" | "desktop";

export type Point = {
  lat: number;
  lng: number;
};

export type ChannelData = {
  properties: {
    name: string | null;
    description: string | null;
  };
  location: Point;
  intensity: number;
  reference?: number | null;
  closeByRecords?: number[];
  isVisited?: boolean;
};

export type ChannelFeedDetails = {
  buildingName: string;
  ballotBoxNos: number[];
};

export type ChannelDetailData = {
  name: string | null;
  lastUpdateTime: string;
  neighbourhoodId: number;
  details: ChannelFeedDetails[];
  intensity: number;
};

export type APIResponse = {};

export type MarkerVisited = {
  [key: number]: boolean;
};

export type ClusterPopupData = {
  count: number;
  baseMarker: ChannelData;
  markers: any[];
};

export type EVENT_TYPES =
  | "movestart"
  | "moveend"
  | "zoomstart"
  | "zoomend"
  | "ready";
