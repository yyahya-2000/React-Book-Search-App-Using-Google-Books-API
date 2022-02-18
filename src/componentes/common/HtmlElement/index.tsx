import React, { FC } from 'react';
import { ElementProps } from './HtmlElement.types';

const HtmlElement:FC<ElementProps> = 
  ({component, html, classes = "", style}) => 
    React.createElement(
      component, 
      {
        style, 
        className: classes, 
        dangerouslySetInnerHTML: { __html: html } 
      }
    )

export default HtmlElement