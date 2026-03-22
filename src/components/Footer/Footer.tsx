import { Anchor, Box, Button, Text } from '@mantine/core';
import classes from './Footer.module.css';

type Props = {
  handleToggleFont: () => void,
  useCustomFont: boolean,
}

export function Footer({ useCustomFont, handleToggleFont }: Props) {
  return (
    <Box className={classes.footer} pl="sm" pr="sm">
      <Button onClick={handleToggleFont}>
        Switch to {useCustomFont ? 'Basic' : 'Chromehounds'} Font
      </Button>
      <Text>
        Background from{' '}
        <Anchor href="https://opengameart.org/content/muddy-concrete-wall-01" target="_blank">
          OpenGameArt
        </Anchor>
        {' '}used under{' '}
        <Anchor href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">
          GPL 3.0
        </Anchor>
        {' '}and{' '}
        <Anchor href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">
          CC-BY-SA 3.0
        </Anchor>
      </Text>
    </Box>
  );
}
