import React, { useMemo, useState } from 'react';
import { Avatar, Box, Button, Chip, Collapse, Flex, Group, RangeSlider, SimpleGrid, Text, TextInput } from '@mantine/core';
import {
  longestFile,
  sound_CH_WaveBank_SE,
  sound_CH_WaveBank_SE_searchWords,
} from '@src/consts/audioFiles';
import { useDisclosure } from '@mantine/hooks';
import { SoundFile } from './SoundFile';


export function AudioSearch() {

  const maxDuration = Math.floor(longestFile.durationS + 1);

  const [durationRange, setDurationRange] = useState<[number, number]>([0, maxDuration]);
  const [searchWordsExpanded, { toggle: toggleSearchWordsExpanded }] = useDisclosure(false);
  const [searchWords, setSearchWords] = useState<Map<string, boolean>>(new Map);
  const [searchTerm, setSearchTerm] = useState('');
  const [durMin, durMax] = durationRange;

  const soundFilesFiltered = useMemo(() => {
    console.log('Memo!');
    if (
      searchTerm === ""
      && [...searchWords.values()].every(check => check !== true)
      && durMin === 0 && durMax === maxDuration
    ) {
      return sound_CH_WaveBank_SE;
    }
    return sound_CH_WaveBank_SE.filter(sound => {

      if (
        searchTerm.length > 0
        && sound.searchWords.some(word => word.toUpperCase().includes(searchTerm.toUpperCase()))
      ) {
        return true;
      }

      if (durMin !== 0 || durMax !== maxDuration) {
        console.log('Check durations', durMin, 'to', durMax)
        if (
           durMin <= sound.durationS && sound.durationS <= durMax
        ) {
          return true;
        }
      }

      if (sound.searchWords.some(word => searchWords.get(word.toUpperCase()) === true)) {
        return true;
      }



      return false;
    })
  }, [searchTerm, searchWords, durMin, durMax, maxDuration]);

  return (
    <>
      <TextInput
        value={searchTerm}
        onChange={({ target: { value }}) => setSearchTerm(value)}
        aria-label="Search"
        placeholder="Search against Search Words by freetext"
      />

      <Group justify="flex-start">
        <Button mt="sm" onClick={toggleSearchWordsExpanded}>
          {searchWordsExpanded ? 'Hide Search Words' : 'Show Search Words'}
        </Button>

        <Box style={{ flex: 1 }}>
          <RangeSlider
            color="blue"
            step={1}
            min={0}
            max={maxDuration}
            minRange={1}
            value={durationRange}
            onChange={setDurationRange}
            marks={[
              { value: 0, label: '0s' },
              { value: Math.floor(maxDuration * 0.25), label: `${Math.floor(maxDuration * 0.25).toFixed()}s` },
              { value: Math.floor(maxDuration * 0.5), label: `${Math.floor(maxDuration * 0.5).toFixed()}s` },
              { value: Math.floor(maxDuration * 0.75), label: `${Math.floor(maxDuration * 0.75).toFixed()}s` },
              { value: maxDuration, label: `${maxDuration.toFixed()}s` },
            ]}
          />
        </Box>
      </Group>

      <Collapse in={searchWordsExpanded}>
        <Text mt="sm">
          This search is an 'OR' check not an 'AND' check.
        </Text>
        <Flex
          display="flex"
          dir="row"
          mah="50vh"
          mt="sm"
          wrap="wrap"
          gap="sm"
          align="center"
          style={{ overflowY: 'scroll' }}
        >
          {sound_CH_WaveBank_SE_searchWords.map((word, idx) => {
            const isShowLetter = idx === 0 || sound_CH_WaveBank_SE_searchWords[idx - 1].substring(0, 1)
              !== word.substring(0, 1);
            return (
              <React.Fragment key={word}>
                {isShowLetter &&
                <Avatar color="cyan" radius="xl">{word.toUpperCase().substring(0, 1)}</Avatar>}
                <Chip
                  checked={searchWords.get(word.toUpperCase())}
                  onChange={() => {
                    const draft = new Map(searchWords);
                    draft.set(word.toUpperCase(), !draft.get(word.toUpperCase()))
                    setSearchWords(draft);
                  }}
                >
                  {word}
                </Chip>
              </React.Fragment>
            );
          })}
        </Flex>
      </Collapse>

      
      <Box mah="60vh" style={{ overflowY: 'scroll' }} mt="sm">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {soundFilesFiltered.map(sound => {
            return (
              <SoundFile key={sound.filename} sound={sound}/>
            )
          })}
        </SimpleGrid>
      </Box>
    </>
  )
}