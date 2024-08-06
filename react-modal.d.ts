declare module 'react-modal' {
    import * as React from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      onAfterOpen?: () => void;
      onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
      closeTimeoutMS?: number;
      style?: {
        content?: React.CSSProperties;
        overlay?: React.CSSProperties;
      };
      contentLabel?: string;
      portalClassName?: string;
      overlayClassName?: string | Record<string, any>;
      className?: string | Record<string, any>;
      bodyOpenClassName?: string;
      htmlOpenClassName?: string;
      ariaHideApp?: boolean;
      appElement?: HTMLElement | null;
      aria?: {
        [key: string]: string;
      };
      role?: string;
      parentSelector?: () => HTMLElement;
      shouldFocusAfterRender?: boolean;
      shouldCloseOnOverlayClick?: boolean;
      shouldReturnFocusAfterClose?: boolean;
      preventScroll?: boolean;
      overlayRef?: (node: HTMLElement | null) => void;
      contentRef?: (node: HTMLElement | null) => void;
      id?: string;
      testId?: string;
    }
  
    export default class Modal extends React.Component<React.PropsWithChildren<ModalProps>> {
      static setAppElement(element: string | HTMLElement): void;
      static defaultStyles: {
        content: React.CSSProperties;
        overlay: React.CSSProperties;
      };
    }
  }  