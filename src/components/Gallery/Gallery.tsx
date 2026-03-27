import { Box, Card, CloseButton, Image, Input, NativeSelect, SimpleGrid, Stack, Text } from '@mantine/core';
import { partsArmor, partsCockpit, partsFuelTank, partsGenerator, partsHeatSink, partsHeavyArms, partsLightArms, partsMissileCounter, partsMobilityBase, partsMobilitySystemDevice, partsNaJammer, partsNaMaker, partsRotorcraft, partsSensor, partsSpacer, partsStabilitySystemDevice, partsWeaponSystemDevice } from '@src/consts/parts';
import type { FactionKey } from '@src/consts/partTypes';
import { getPartFlags } from '@src/helpers/partsHelper';
import { useState } from 'react';
// import { imagesParts } from '@src/consts/imageFiles';

function reducePartsByImageName<T extends { imageName: string }>(list: T[]) {
  return list.reduce((ac, cur) => {
    if (ac[cur.imageName] == undefined) {
      ac[cur.imageName] = [];
    }
    ac[cur.imageName].push(cur);
    return ac;
  }, {} as Record<string, T[]>);
}

const imageNameToParts = {
  ...reducePartsByImageName(partsArmor),
  ...reducePartsByImageName(partsMobilityBase),
  ...reducePartsByImageName(partsCockpit),
  ...reducePartsByImageName(partsFuelTank),
  ...reducePartsByImageName(partsGenerator),
  ...reducePartsByImageName(partsHeatSink),
  ...reducePartsByImageName(partsHeavyArms),
  ...reducePartsByImageName(partsLightArms),
  ...reducePartsByImageName(partsMissileCounter),
  ...reducePartsByImageName(partsMobilitySystemDevice),
  ...reducePartsByImageName(partsNaJammer),
  ...reducePartsByImageName(partsNaMaker),
  ...reducePartsByImageName(partsRotorcraft),
  ...reducePartsByImageName(partsSensor),
  ...reducePartsByImageName(partsSpacer),
  ...reducePartsByImageName(partsStabilitySystemDevice),
  ...reducePartsByImageName(partsWeaponSystemDevice),
}

const imagesParts = import.meta.glob('@src/assets/images/Photos/Parts/**', { 
  eager: true, 
  import: 'default'
});
const imagesPartsList = Object.entries(imagesParts).map(([path, url]) => ({
  path,
  url: url as string,
  fileName: path.split('/').pop()
}));

const imagesChars = import.meta.glob('@src/assets/images/Photos/Characters/**', { 
  eager: true,
  import: 'default'
});
const imagesCharsList = Object.entries(imagesChars).map(([path, url]) => ({
  path,
  url: url as string,
  fileName: path.split('/').pop()
}));

const imagesMapObjs = import.meta.glob('@src/assets/images/Photos/MapObjects/**', { 
  eager: true,
  import: 'default'
});
const imagesMapObjsList = Object.entries(imagesMapObjs).map(([path, url]) => ({
  path,
  url: url as string,
  fileName: path.split('/').pop()
}));

function filenameRefactored(filename?: string) {
  if (filename == undefined) {
    return "NO FILENAME FOUND";
  }
  return filename.substring('image_'.length, filename.length - 8);
}

const gallerySets = ['Parts', 'Characters', 'Map Objects'] as const;
type GallerySet = typeof gallerySets[number];

const partTypes = ['Other', 'Mobility Base', 'Cockpit', 'Mobility System Device'
 , 'Weapon System Device', 'Stability Device', 'Generator', 'Spacer'
 , 'Sensor', 'Na Jammer', 'Missile Counter', 'Rotor Craft', 'Heat Sink'
 , 'Fuel Tank', 'Armor', 'NA Maker', 'Weapon', 'Heavy Weapon'] as const;
type PartType = typeof partTypes[number]

export function Gallery() {
  const [gallerySet, setGallerySet] = useState<GallerySet>('Parts');
  const [partType, setPartType] = useState<PartType>('Mobility Base');
  const [searchTerm, setSearchTerm] = useState<string>('');


  return (
    <>
      <Text size="xl">
        Gallery
      </Text>
      <Text>
        Here you can browse the different (core) 3D Models discoverable within the Chromehounds files.
        These being Parts, Characters, and Map Objects; Map Terrain does exist but are too many
        in number to present here.<br/>
        Eventually there will be: more information, QOL, and search tools available.
      </Text>
      <NativeSelect
        data={gallerySets}
        value={gallerySet}
        onChange={({ currentTarget: { value } }) => setGallerySet(value as GallerySet)}
      />
      {gallerySet === 'Parts' &&
      <>
        <NativeSelect
          data={partTypes}
          value={partType}
          onChange={({ currentTarget: { value } }) => setPartType(value as PartType)}
        />
      </>}
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setSearchTerm('')}
            style={{ display: searchTerm ? undefined : 'none' }}
          />
        }
      />
      <Box mah="70vh" style={{ overflowY: 'scroll' }} mt="sm">

        {gallerySet === 'Parts' &&
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesPartsList.map(({ path, url }, idx) => {
            // Extract filename from path for the label/alt text
            const filename = path.split('/').pop() ?? '';

            const nonRafPart = (imageNameToParts[filename] ?? []).find(({ isRaf }) => isRaf !== true);
            const rafPart = (imageNameToParts[filename] ?? []).find(({ isRaf }) => isRaf === true);

            const partFlags = getPartFlags(nonRafPart);

            if (filename.includes('CP_AS002')) {
              console.log(filename, {
                nonRafPart,
                rafPart,
                partFlags,
              });
            }

            if (
              (partType === 'Mobility Base' && partFlags.isMobilityBase) ||
              (partType === 'Cockpit' && partFlags.isCockpit) ||
              (partType === 'Mobility System Device' && partFlags.isMobilitySystemDevice) ||
              (partType === 'Weapon System Device' && partFlags.isWeaponSystemDevice) ||
              (partType === 'Stability Device' && partFlags.isStabilityDevice) ||
              (partType === 'Generator' && partFlags.isGenerator) ||
              (partType === 'Spacer' && partFlags.isSpacer) ||
              (partType === 'Sensor' && partFlags.isSensor) ||
              (partType === 'Na Jammer' && partFlags.isNaJammer) ||
              (partType === 'Missile Counter' && partFlags.isMissileCounter) ||
              (partType === 'Rotor Craft' && partFlags.isRotorCraft) ||
              (partType === 'Heat Sink' && partFlags.isHeatSink) ||
              (partType === 'Fuel Tank' && partFlags.isFuelTank) ||
              (partType === 'Armor' && partFlags.isArmor) ||
              (partType === 'NA Maker' && partFlags.isNaMaker) ||
              (partType === 'Weapon' && partFlags.isWeapon) ||
              (partType === 'Heavy Weapon' && partFlags.isWeaponHeavy)
            ) {
              // Keep going
            } else {
              if (partType === 'Other' && Object.values(partFlags).every(val => val !== true)) {
                // Continue
              } else {
                return null;
              }
            }

            const weaponCategory = nonRafPart && 'category' in nonRafPart
              ? nonRafPart.category
              : '';

            const faction: FactionKey | undefined = nonRafPart && 'faction' in nonRafPart
              ? nonRafPart.faction
              : undefined;

            if (searchTerm && nonRafPart) {
              if (nonRafPart.name.toUpperCase().includes(searchTerm.toUpperCase()) === false) {
                if (rafPart) {
                  if (rafPart && rafPart?.name.toUpperCase().includes(searchTerm.toUpperCase()) === false) {
                    return null;
                  }
                } else {
                  return null;
                }
              }
            }

            return (
              <Card
                id={filename}
                key={path}
                shadow="sm"
                padding="sm"
                radius="md"
                withBorder
                style={{
                  borderColor: faction === 'MSK'
                    ? '#610202'
                    : faction === 'SK'
                      ? '#807700'
                      : faction === 'TAK'
                        ? '#065f75'
                          : 'inherit',
                }}
              >
                <Card.Section>
                  <Stack align="center" justify="center" p="sm">
                    <Image
                      src={url as string}
                      alt={filename}
                      fit="contain" // Ensures original proportions
                      h={200}       // Constraints the box height
                      w="auto"      // Keeps width natural
                    />
                  </Stack>
                </Card.Section>

                {nonRafPart &&
                <Text fw={500} size="sm" c="dimmed" ta="center">
                  {nonRafPart?.name ?? '???'}{
                    rafPart != undefined
                      ? ` and ${rafPart.name}`
                      : ''
                  }
                </Text>}
                {weaponCategory &&
                <Text fw={500} size="sm" c="dimmed" ta="center">
                  {weaponCategory}
                </Text>}
                <Text fw={500} size="sm" c="dimmed" ta="center">
                  {filenameRefactored(filename)} ({idx + 1}/{imagesPartsList.length})
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>}

        {gallerySet === 'Map Objects' &&
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesMapObjsList.map(({ path, url }, idx) => {
            // Extract filename from path for the label/alt text
            const fileName = path.split('/').pop();

            if (searchTerm && fileName) {
              console.log('Check Part against Filename', { searchTerm, fileName })
              if (fileName.toUpperCase().includes(searchTerm.toUpperCase()) === false) {
                return null;
              }
            }

            return (
              <Card key={path} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Stack align="center" justify="center" p="md">
                    <Image
                      src={url as string}
                      alt={fileName}
                      fit="contain" // Ensures original proportions
                      h={200}       // Constraints the box height
                      w="auto"      // Keeps width natural
                    />
                  </Stack>
                </Card.Section>

                <Text fw={500} size="sm" mt="md" c="dimmed" ta="center">
                  Map Object - {filenameRefactored(fileName)} ({idx + 1}/{imagesMapObjsList.length})
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>}

        {gallerySet === 'Characters' &&
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesCharsList.map(({ path, url }, idx) => {
            // Extract filename from path for the label/alt text
            const fileName = path.split('/').pop();

            if (searchTerm && fileName) {
              console.log('Check Part against Filename', { searchTerm, fileName })
              if (fileName.toUpperCase().includes(searchTerm.toUpperCase()) === false) {
                return null;
              }
            }

            return (
              <Card key={path} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Stack align="center" justify="center" p="md">
                    <Image
                      src={url as string}
                      alt={fileName}
                      fit="contain" // Ensures original proportions
                      h={200}       // Constraints the box height
                      w="auto"      // Keeps width natural
                    />
                  </Stack>
                </Card.Section>

                <Text fw={500} size="sm" mt="md" c="dimmed" ta="center">
                  Character - {filenameRefactored(fileName)} ({idx + 1}/{imagesCharsList.length})
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>}
      </Box>
    </>
  );
}
