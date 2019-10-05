import * as React from 'react';

import metadata from "../metadata.json";

export default class Footer extends React.Component<any, {}> {

  public render() {
    return (
        <footer className="footer">
            <ul className="copyright">
              <li>&copy; {new Date().getFullYear()} Sébastien Dubois - Alexis Georges</li>
              <li><a href={metadata.siteSources} className="icon alt fa-github fa-xs" target="_blank" rel="noreferrer" title="Learn TypeScript's Website sources" aria-label="Learn TypeScript's Website sources"/>
              </li>
              <li><a href={metadata.social.twitterSebastien} target="_blank" rel="noreferrer" title="dSebastien @ Twitter" aria-label="dSebastien @ Twitter">dSebastien</a></li>
            </ul>
        </footer>
    )
  }
}
