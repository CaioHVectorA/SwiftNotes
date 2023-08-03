// export type Note = {
//   title: string;
//   body: string;
//   created: Date;
//   modified: Date;
// };

export type TextComponents = {
  component: React.ReactNode | Function;
  value: string | string[];
  identifier: string;
  initialValue: string | string[];
};
export type Note = {
  title: string;
  body: TextComponents[];
  created: Date;
  modified: Date;
};
