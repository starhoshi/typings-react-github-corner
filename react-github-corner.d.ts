/// <reference path="typings/main.d.ts" />

declare module "react-github-corner" {
  import * as React from 'react';

  interface IGithubCornerProps extends React.Props<GithubCorner> {
    href?: string;
    width?: string | number;
    height?: string | number;
    direction?: string;
    octoColor?: string;
    bannerColor?: string;
  }

  interface GithubCorner extends React.ComponentClass<IGithubCornerProps> {
  }
  const GithubCorner:GithubCorner;

  export = GithubCorner;
}
