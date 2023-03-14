import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Theme } from '@mui/material/styles';

import { Idable } from '../../../shared/types';

interface TabInfo extends Idable {

  label: string;
}

interface NavBarProps {

  /* eslint-disable-next-line react/no-unused-prop-types */
  tabs?: TabInfo[];
  muiTheme: Theme;
  colouredBackground: boolean;
}

const NavBar = ({ muiTheme, colouredBackground }: NavBarProps) => {

  const [selected, setSelected] = useState<number>(0);
  const { primary } = muiTheme.palette;
  const indicatorProps = colouredBackground ? {
    style: {
      backgroundColor: primary.contrastText,
      height: 3
    }
  } : {};

  return (
    <Box sx={{ height: 48 }}>
      <Tabs
        value={selected}
        textColor={colouredBackground ? 'inherit' : 'primary'}
        TabIndicatorProps={indicatorProps}
        onChange={(_, newSelected) => { setSelected(newSelected); }}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
};

export default NavBar;
