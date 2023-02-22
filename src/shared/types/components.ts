type Content = string | JSX.Element | string[] | JSX.Element[] | (string | JSX.Element)[];

type Handler = () => void;

export interface ParentComponentProps {

  children: Content;
}

export interface ModalComponentProps {

  isOpen: boolean;
  onClose: Handler;
}

export interface DialogComponentProps {

  confirmText?: string;
  onConfirm: Handler;
  onCancel?: Handler;
}
