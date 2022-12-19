export enum Views {

  Site,
  Gallery,
  Image
}

export enum Sites {

  Site1,
  Site2,
  Site3
};

type Layout = {

  settingsDrawerOpen: boolean
};

export type ShellState = {

  layout: Layout;
  view: Views;
  site: Sites;
};
