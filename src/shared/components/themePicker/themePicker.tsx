// import { FunctionComponent as FC } from 'react';
// import { Color } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
// import { capitalCase } from 'capital-case';
// import CheckIcon from '@mui/icons-material/Check';

// import { PALETTE_MAP } from '../../constants/theme';
// import { ColourPalette } from '../../types';
// import styles from './themePicker.module.css';

// const { themePicker } = styles;

// interface ThemePickerProps {

//   selectedPalette: ColourPalette;
//   onChange: (newPalette: ColourPalette) => void;
// }

// const ThemePicker: FC<ThemePickerProps> = ({ selectedPalette, onChange }) => {

//   const paletteValues = [...PALETTE_MAP.keys()]
//                                        .map(k => ([k, PALETTE_MAP.get(k as ColourPalette)]));

//   return (
//     <div className={themePicker}>
//       { paletteValues.map(pvp => {

//         const paletteKey = pvp[0] as ColourPalette;

//         return (
//           <Tooltip title={capitalCase(paletteKey.replace('-', ' '))}>
//             <button
//               key={`palette-button-${paletteKey}`}
//               style={{ backgroundColor: (pvp[1] as Color)[500] }}
//               onClick={() => { onChange(paletteKey) }}
//             >
//               { selectedPalette === paletteKey ? <CheckIcon /> : null }
//             </button>
//           </Tooltip>
//         );
//       })}
//     </div>
//   );
// };

// export default ThemePicker;
