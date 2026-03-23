import { Box, Card, Image, NativeSelect, SimpleGrid, Stack, Text } from '@mantine/core';
import { useState } from 'react';
// import { imagesParts } from '@src/consts/imageFiles';


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

type PhotoSets = 'Parts' | 'Characters' | 'Map Objects';

export function Photos() {
  const [photoSet, setPhotoSet] = useState<PhotoSets>('Parts')
  return (
    <>
      <Text size="xl">
        Photos
      </Text>
      <Text>
        Eventually there will be: more information, QOL, and search tools available.
      </Text>
      <NativeSelect
        data={['Parts', 'Characters', 'Map Objects']}
        value={photoSet}
        onChange={({ currentTarget: { value } }) => setPhotoSet(value as PhotoSets)}
      />
      <Box mah="70vh" style={{ overflowY: 'scroll' }}>
        {photoSet === 'Parts' &&
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesPartsList.map(({ path, url }, idx) => {
            // Extract filename from path for the label/alt text
            const fileName = path.split('/').pop();

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
                  Part - {filenameRefactored(fileName)} ({idx + 1}/{imagesPartsList.length})
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>}

        {photoSet === 'Map Objects' &&
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesMapObjsList.map(({ path, url }, idx) => {
            // Extract filename from path for the label/alt text
            const fileName = path.split('/').pop();

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

        {photoSet === 'Characters' &&
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesCharsList.map(({ path, url }, idx) => {
            // Extract filename from path for the label/alt text
            const fileName = path.split('/').pop();

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
