import 'styled-components';
import { AppDefaultTheme } from '~/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppDefaultTheme {}
}
