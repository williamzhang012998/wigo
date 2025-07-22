declare module 'react-awesome-reveal' {
  import * as React from 'react';

  export interface RevealProps {
    children?: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
    triggerOnce?: boolean;
    duration?: number;
    cascade?: boolean;
    damping?: number;
    delay?: number;
    fraction?: number;
    style?: React.CSSProperties;
  }

  export const Fade: React.FC<RevealProps>;
  export const Slide: React.FC<RevealProps>;
  export const Zoom: React.FC<RevealProps>;
}
