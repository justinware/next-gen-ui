import Box from '@mui/material/Box';

import styles from './slidingPanels.module.css';
import { ParentComponentProps } from '../../types';

const { slidingPanelsRoot, container, panelWrapper } = styles;

interface SlidingPanelsProps extends ParentComponentProps<JSX.Element[]> {

  current: number;
}

const SlidingPanels = ({ children, current }: SlidingPanelsProps) => {

  const getPanelWrapper = (child: JSX.Element, index: number, width: number) => (
    <Box
      key={`panel-${index}`}
      className={panelWrapper}
      sx={{
        width: `${width}%`,
        opacity: current === index ? 1 : 0,
        transition: ({ transitions }) => transitions.create('opacity')
      }}
    >
      {child}
    </Box>
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
        { children.map((c, i) => getPanelWrapper(c, i, width)) }
      </Box>
    </div>
  );
};

export default SlidingPanels;
