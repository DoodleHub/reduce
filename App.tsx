import { StatusBar } from 'expo-status-bar';
import { Navigation } from './navigation';
import { ThemeProvider } from 'styled-components/native';
import { useTheme, MD3Theme } from 'react-native-paper';

export default function App() {
  const theme = useTheme<MD3Theme>();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
