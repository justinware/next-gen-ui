import { FunctionComponent as FC } from 'react';
import { useTheme } from '@mui/material/styles';

import { ParentComponentProps } from '../../types';

interface ContrastBoxProps extends ParentComponentProps {
  backgroundColor?: string;
}

const ContrastBox: FC<ContrastBoxProps> = ({ backgroundColor, children }) => {

  const { palette } = useTheme();
  const props = backgroundColor ?
    { style: { backgroundColor, color: palette.getContrastText(backgroundColor) }} :
    {};

  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default ContrastBox;
