declare module "*.svg?inline" {
    const content: any;
    export default content;
  }

  declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement>
    >;
    const src: string;
    export default src;
  }
  
  declare module "*.jpg" {
    const content: any;
    export default content;
  }
  declare module "*.png" {
    const content: any;
    export default content;
  }
  declare module "*.woff" {
    const content: any;
    export default content;
  }
  declare module "*.woff2" {
    const content: any;
    export default content;
  }
  