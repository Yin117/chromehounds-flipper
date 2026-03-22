import { Box, Card, Image, SimpleGrid, Stack, Text } from '@mantine/core';
// import { imagesParts } from '@src/consts/imageFiles';


const imagesParts = import.meta.glob('@src/assets/images/Photos/Parts/**', { 
  eager: true, 
  as: 'url' 
});
const imagesPartsEntries = Object.entries(imagesParts);

const imagesChars = import.meta.glob('@src/assets/images/Photos/Characters/**', { 
  eager: true, 
  as: 'url' 
});
const imagesCharsEntries = Object.entries(imagesChars);

const imagesMapObjs = import.meta.glob('@src/assets/images/Photos/MapObjects/**', { 
  eager: true, 
  as: 'url' 
});
const imagesMapObjsEntries = Object.entries(imagesMapObjs);

function filenameRefactored(filename?: string) {
  if (filename == undefined) {
    return "NO FILENAME FOUND";
  }
  return filename.substring('image_'.length, filename.length - 8).split('_').join(' ');
}

export function Photos() {
  return (
    <>
      <Text size="xl">
        Photos
      </Text>
      <Text>
        Eventually there will be: more information, QOL, and search tools available.
      </Text>
      <Box mah="70vh" style={{ overflowY: 'scroll' }}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesPartsEntries.map(([path, url]) => {
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
                  Part - {filenameRefactored(fileName)}
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>

        <Text size="lg" mt="lg">
          Map Objects
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesMapObjsEntries.map(([path, url]) => {
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
                  Map Object - {filenameRefactored(fileName)}
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>

        <Text size="lg" mt="lg">
          Characters
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4, xl: 5 }} spacing="md">
          {imagesCharsEntries.map(([path, url]) => {
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
                  Character - {filenameRefactored(fileName)}
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
