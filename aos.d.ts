
declare module 'aos' {
    export function init(options?: AosOptions): void;
    export function refresh(): void;
    export function refreshHard(): void;
    export function disable(): void;
  
    export interface AosOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    export interface AosElement {
      isVisible: boolean;
      once: boolean;
      hasBeenVisible: boolean;
      position: {
        top: number;
        left: number;
        right: number;
        bottom: number;
      };
    }
    
    const AOS: {
      init: typeof init;
      refresh: typeof refresh;
      refreshHard: typeof refreshHard;
      disable: typeof disable;
    };
  
    export default AOS;
  }
  