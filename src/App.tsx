import '@mantine/core/styles.css';

import { AppShell, Center, createTheme, MantineProvider, Title } from '@mantine/core';
import { Router } from './Router';
import { theme as baseTheme } from './theme';
import './globalStyles.css';
import { useState } from 'react';
import bgImage from './assets/images/conc_w01.png';
import { BaseOverlay } from './components/BaseOverlay/BaseOverlay';
import { NavBar } from './components/Navigation/NavBar';
import { Footer } from './components/Footer/Footer';

const SYSTEM_FONTS = 'var(--mantine-font-family)';

export default function App() {
  const [useCustomFont, setUseCustomFont] = useState(true);

  const theme = createTheme({
    ...baseTheme,
    // Toggle between Chromehounds and the system stack
    fontFamily: useCustomFont ? 'Chromehounds, sans-serif' : SYSTEM_FONTS,
  });
  return (
    <MantineProvider theme={theme}>
      <style>
        {`
          body {
            background-image: url(${bgImage}) !important;
            background-size: cover !important;
            background-attachment: fixed !important;
          }
        `}
      </style>
    <AppShell
      padding="md"
      header={{ height: 60 }}
      footer={{ height: 60 }} // This reserves space at the bottom
    >
      <AppShell.Header>
        <Center h="100%">
          <Title order={3}>{'Chromehounds'.toUpperCase()} Flipper</Title>
        </Center>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavBar /> 
      </AppShell.Navbar>

      <AppShell.Main ml={80}>
        <BaseOverlay>
          <Router />
        </BaseOverlay>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer useCustomFont={useCustomFont} handleToggleFont={() => setUseCustomFont(!useCustomFont)} />
      </AppShell.Footer>
    </AppShell>
    </MantineProvider>
  );
}
