import { Box, Card, Flex, Tabs, Text } from "@mantine/core";
import classes from './FontViewer.module.css';

const allChars = "\u001f !#$%&'()*+,-.\"/0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]_`abcdefghijklmnopqrstuvwxyz\u00a9\u00c0\u00c1\u00c2\u00c4\u00c8\u00c9\u00cb\u00cc\u00cd\u00ce\u00ca\u00d1\u00d2\u00d3\u00d4\u00d6\u00d9\u00da\u00db\u00dc\u00df\u00e0\u00e1\u00e2\u00e3\u00e6\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00f1\u00f2\u00f3\u00f4\u00f6\u00f9\u00fa\u00fb\u00fc\u00ff\u00a5\u00aa\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039a\u039b\u039c\u039d\u039e\u039f\u03a0\u03a1\u03a3\u03a4\u03a5\u03a6\u03a7\u03a8\u03a9\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9";

const tabNames = {
  text: 'text',
  tiles: 'tiles',
};

export function FontViewer() {
  return (
    <Box>

      <Tabs defaultValue={tabNames.text}>
        <Tabs.List>
          <Tabs.Tab value={tabNames.text}>
            Text
          </Tabs.Tab>
          <Tabs.Tab value={tabNames.tiles}>
            Tiles
          </Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panel value={tabNames.text}>
          <Text className={classes.charactersList}>
            {allChars.split('').map(char =>
              <span
                className={classes.characterText}
                onClick={() => console.log(`Char is: ${char.charCodeAt(0)}`)}
              >
                {char}
              </span>)}
          </Text>
        </Tabs.Panel>

        <Tabs.Panel value={tabNames.tiles}>
          <Flex
            display="flex"
            dir="row"
            mah="70vh"
            mt="sm"
            wrap="wrap"
            gap="sm"
            align="center"
            style={{ overflowY: 'scroll' }}
          >
            {allChars.split('').map(char => {
              return (
                <Card>
                  <Card.Section>
                    <Box className={classes.characterWrapper}>
                      <span className={classes.character}>{char}</span>
                    </Box>
                  </Card.Section>
                </Card>
              )
            })}
          </Flex>
        </Tabs.Panel>
      </Tabs>



    </Box>
  )
}