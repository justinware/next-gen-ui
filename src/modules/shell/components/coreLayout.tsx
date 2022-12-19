import { FunctionComponent as FC } from 'react';

import styles from './coreLayout.module.css';

interface CoreLayoutProps {

  appBar: JSX.Element;
  contextBar: JSX.Element;
  content: JSX.Element;
}

const CoreLayout: FC<CoreLayoutProps> = ({ appBar, contextBar, content }) => {

  const { coreLayoutRoot, innerContainer, mainSection } = styles;

  return (
    <div className={coreLayoutRoot}>
      { appBar }
      <div className={innerContainer}>
        {/* <ActionBar> */}
          { contextBar }
        {/* </ActionBar> */}
        <div className={mainSection}>
          { content }
        </div>
      </div>
    </div>
  );
};

export default CoreLayout;
