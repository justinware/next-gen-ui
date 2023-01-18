import { FunctionComponent as FC, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Idable } from '../../../shared/types';

interface TabInfo extends Idable {

  label: string;
}

interface NavBarProps {

  tabs?: TabInfo[];
}

const NavBar: FC<NavBarProps> = () => {

  const [selected, setSelected] = useState<number>(0);

  return (
    <Box sx={{ backgroundColor: 'primary.main', height: 48 }}>
      <Tabs
        value={selected}
        onChange={(_, newSelected) => { setSelected(newSelected); }}
      >
        <Tab label="Item One" sx={{ backgroundColor: 'primary.main', color: t => t.palette.getContrastText(t.palette.primary.main) }} />
        <Tab label="Item Two" sx={{ backgroundColor: 'primary.main', color: t => t.palette.getContrastText(t.palette.primary.main) }} />
        <Tab label="Item Three" sx={{ backgroundColor: 'primary.main', color: t => t.palette.getContrastText(t.palette.primary.main) }} />
      </Tabs>
    </Box>
  );
}

export default NavBar;
