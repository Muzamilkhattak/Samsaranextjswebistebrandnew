import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ageless-embed-launcher': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'data-ageless-url'?: string;
          'data-ageless-mode'?: string;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
    }
  }

  namespace React.JSX {
    interface IntrinsicElements {
      'ageless-embed-launcher': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'data-ageless-url'?: string;
          'data-ageless-mode'?: string;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
    }
  }
}
