type Content = string | JSX.Element | string[] | JSX.Element[] | (string | JSX.Element)[];

type Handler = () => void;

export interface ParentComponent {

  children: Content;
}

export interface ModalComponent {

  isOpen: boolean;
  onClose: Handler;
}
