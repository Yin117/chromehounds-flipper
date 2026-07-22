import { Anchor, Box, Button, em, Text } from '@mantine/core';
import classes from './Footer.module.css';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  handleToggleFont: () => void,
  useCustomFont: boolean,
}

export function Footer({ useCustomFont, handleToggleFont }: Props) {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Box className={classes.footer} pl="sm" pr="sm">

      <Button className={isMobile ? classes.fontSize_xxSmall : classes.fontSize_medium} onClick={handleToggleFont}>
        {isMobile ? '' : 'Switch to '}{useCustomFont ? 'Basic' : 'Chromehounds'} Font
      </Button>

      <Text
        ml="sm"
        className={isMobile ? classes.fontSize_xxSmall : classes.fontSize_medium}
      >
        Background from{' '}
        <Anchor
          className={isMobile ? classes.fontSize_xxSmall : classes.fontSize_medium}
          href="https://opengameart.org/content/muddy-concrete-wall-01"
          target="_blank"
        >
          OpenGameArt
        </Anchor>
        {' '}used under{' '}
        <Anchor
          className={isMobile ? classes.fontSize_xxSmall : classes.fontSize_medium}
          href="https://www.gnu.org/licenses/gpl-3.0.html"
          target="_blank"
        >
          GPL 3.0
        </Anchor>
        {' '}and{' '}
        <Anchor
          className={isMobile ? classes.fontSize_xxSmall : classes.fontSize_medium}
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
        >
          CC-BY-SA 3.0
        </Anchor>
      </Text>
    </Box>
  );
}
