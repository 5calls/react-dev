/**
 *
 */
import * as React from 'react';

interface Props {}

const About: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    <h4>Why Calling Works</h4>
    <div>
      Calling members of Congress is the most effective way to
      have your voice heard. Calls are tallied by staffers and
      the count is given to your representatives, informing them
      how strongly their constituents feel about a current issue.
      The sooner your reach out, the more likely it is that your
      voice will influence their position.
    </div>
  </div>
);

export default About;
