import { FunctionComponent as FC } from 'react';
import Box from '@mui/material/Box';

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
        { contextBar }
        <Box className={mainSection} sx={{ backgroundColor: t => t.palette.grey[100] }}>
          { content }
        </Box>
      </div>
    </div>
  );
};

export default CoreLayout;
