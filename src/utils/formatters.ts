import moment from "moment";

export const convertDate = (timestamp: number): string =>
  moment(new Date(timestamp * 1000)).format("MMM YY'");

export const convertValue = (value: number): string =>
  `${Math.floor(value / 1e3)}M`;
