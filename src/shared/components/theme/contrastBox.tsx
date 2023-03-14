import { useTheme } from '@mui/material/styles';

import { ParentComponentProps } from '../../types';

interface ContrastBoxProps extends ParentComponentProps {

  backgroundColor?: string;
}

const ContrastBox = ({ backgroundColor, children }: ContrastBoxProps) => {

  const { palette } = useTheme();
  const props = backgroundColor
    ? { style: { backgroundColor, color: palette.getContrastText(backgroundColor) } }
    : {};

  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default ContrastBox;
