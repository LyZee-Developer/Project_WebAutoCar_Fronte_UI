declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    className?: string;
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    initialSlide?: number;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    [key: string]: any;
  }

  export default class Slider extends React.Component<Settings> {}
}
