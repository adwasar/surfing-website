import { LinkPath } from 'src/type';

export interface Itemized {
  type: string;
  amount: number;
  cost: number;
  toPath: LinkPath;
}

export interface Location {
  name: string;
  toPath: LinkPath;
}

export interface DateBooking {
  begin: Date;
  end: Date;
}
