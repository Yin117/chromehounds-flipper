import { Container, Grid, Image, Text } from '@mantine/core';
import Model3D from '@src/assets/images/Model3D.png';
import Rigging from '@src/assets/images/Rigging.png';
import Textures from '@src/assets/images/Textures.png';
import UVMap from '@src/assets/images/UVMap.png';

// const child = <Skeleton height={140} radius="md" animate={false} />;

export function Welcome() {
  return (
    <>
      <Text>
        Welcome, here you'll find information, images, and instructions on extracting assets from Chromhounds.
      </Text>
      <Text>
        It is expected that you have the Open Combas project setup and working, from this you'll have access to various folders
        mentioned throughout this website.
      </Text>

      <Container p="0" pt="sm">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Image
              src={Model3D}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Image
              src={Rigging}
            /></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Image
              src={Textures}
            /></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Image
              src={UVMap}
            /></Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
