import { FunctionComponent as FC } from 'react';
import Box from '@mui/material/Box';

import styles from './slidingPanels.module.css';

const { slidingPanelsRoot, container, panelWrapper } = styles;

interface SlidingPanelsProps {

  children: JSX.Element[];
  current: number;

};

const SlidingPanels: FC<SlidingPanelsProps> = ({ children, current }) => {

  const getPanelWrapper = (child: JSX.Element, width: number) => (
    <div className={panelWrapper} style={{ width: `${width}%` }}>
      {child}
    </div>
  );

  const panels = children.length;
  const x = 100 * (current / panels);
  const width = 100 / panels;

  return (
    <div className={slidingPanelsRoot}>
      <Box
        className={container}
        sx={{
          transition: ({ transitions }) => transitions.create('transform'),
          transform: `translateX(-${x}%)`,
          width: `${panels * 100}%`
        }}
      >
        { children.map(c => getPanelWrapper(c, width)) }
      </Box>
    </div>
  );
};

export default SlidingPanels;
