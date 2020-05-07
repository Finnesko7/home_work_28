export interface Address {
  street: string;
  building: number;
  appartment: number;
}

export interface ProfessionPosition {
  name: string;
  avarageSalary: number;
}

export interface Profession {
  name: string;
  salary: number;
  /**
   * Title of position. Ex. Java, C#
   */
  position?: ProfessionPosition;
}

export interface User {
  id: number;
  address: Address;
  profession: Profession;
  name: string;
}

export interface Dog {
  abc: string;
}

export type GenericFunction<T /* emplate */> = (a: T) => T;

export interface OnClick {
  onClick: (e: Event) => void;
}

export interface OnBlur {
  onBlur: (e: Event) => void;
}
