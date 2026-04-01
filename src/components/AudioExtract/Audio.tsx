import { Tabs, Text } from '@mantine/core';
import { ExtractInstructions } from './tabs/ExtractInstructions';
import { AudioSearch } from './tabs/AudioSearch';

const tabNames = {
  instructions: 'instructions',
  search: 'search',
};

export function Audio() {

  return (
    <>
      <Text size="xl">
        Audio
      </Text>

      <Tabs defaultValue={tabNames.instructions}>

        <Tabs.List>
          <Tabs.Tab value={tabNames.instructions}>
            Instructions
          </Tabs.Tab>
          <Tabs.Tab value={tabNames.search}>
            Search
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={tabNames.instructions}>
          <ExtractInstructions/>
        </Tabs.Panel>

        <Tabs.Panel value={tabNames.search}>
          <AudioSearch/>
        </Tabs.Panel>

      </Tabs>
      
    </>
  );
}
