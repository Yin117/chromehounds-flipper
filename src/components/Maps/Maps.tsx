import { Box, Image, Text } from '@mantine/core';
import { Bolded } from '@src/components/Bolded/Bolded';
import MapTile_Flat_Textured from '@src/assets/images/Maps/MapTile_Flat_Textured.png';
import Map_Blender_Perspective from '@src/assets/images/Maps/Map_Blender_Perspective.png';
import Map_Meshed_Path from '@src/assets/images/Maps/Map_Meshed_Path.png';
import Tile_Pieces from '@src/assets/images/Maps/Tile_Pieces.png';
import InGame_Tile_Overlay_Combas_Path from '@src/assets/images/Maps/InGame_Tile_Overlay_Combas_Path.png';
import { NavLink } from 'react-router-dom';
import { routesLookup } from '@src/consts/routeConsts';


export function Maps() {
  return (
    <>
      <Text size="xl">
        Maps
      </Text>

      <Text>
        Once you have obtained the <Bolded>MDL sourced FBX</Bolded> files by following the instructions
        in <NavLink
          to={routesLookup.models3d.path}
        >
          3D Models  
        </NavLink>
        {' '}you can then import these into Blender consider texturing them and/or using them in e.g. Godot for Terrain.
      </Text>

      <Text mt="md">
        <Bolded>Sadly</Bolded>, not much progress has been made with Texturing the Map files, while their textures
        do exist in <Bolded>mapdata\tex</Bolded> there are several files that it is currently suspected are applied
        not only to each seperate mesh within each tile, but also bleed into one another through the game engine.
        <br/>In addition, they are typically not fully-textured, and it is futher suspected that they are combined
        with a base color as a background, or perhaps combined with some other texturing system such as a Shader.
      </Text>
      <Text mt="sm">
        Images here look at map <Bolded>m07_003</Bolded> and in particular, at tiles 54, 55, and 56.
      </Text>
      <Image mt="sm" mah="300" maw="600" src={MapTile_Flat_Textured}/>

      <Text mt="md">
        What has been identified is that the Map Tiles are split into several different meshes, each of these
        appears to represent their own texture; hence how the image above was textured in such a <Bolded>bordered</Bolded> fashion
      </Text>
      <Image mt="sm" mah="350" maw="600" src={Tile_Pieces}/>

      <Text mt="sm">
        As you can see, the Highlighted bit of "path" perfectly <i>(allowing for perspective)</i> matches
        the path in-game from the Combas leading south.
      </Text>
      <Box
        display="flex"
        dir="row"
        style={{
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Image mt="sm" mah="600" maw="600" src={InGame_Tile_Overlay_Combas_Path}/>
        <Image mt="sm" mah="600" maw="300" src={Map_Meshed_Path}/>
      </Box>

      <Text mt="md">
        The tiles (at least in the one consulted) are arranged bottom-up, and left-to-right.
        <br/>A full map can be re-created, but <Bolded>Texturing</Bolded> it, is the current barrier
      </Text>
      <Image mt="sm" mah="300" maw="600" src={Map_Blender_Perspective}/>


      
    </>
  );
}
