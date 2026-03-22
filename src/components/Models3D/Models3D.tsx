import { Anchor, Box, Image, Text } from '@mantine/core';
import { modelExtract } from '@src/consts/resourceConsts';
import type { ReactNode } from 'react';
import DragOntoMCFM from '@src/assets/images/3dModels/Drag_BND_onto_MCFM.png';
import BlenderOutliner from '@src/assets/images/3dModels/Blender_Outliner.png';

function Bolded({ children }: { children: ReactNode }) {
  return <Text component="span" size="lg" c="#5ec4a2" fw={700}>{children}</Text>
}

export function Models3D() {
  return (
    <>
      <Text size="xl">
        3D Models
      </Text>
      <Text>
        In order to obtain 3D Models from Chromehounds, you will want to make use of{' '}
        <Anchor href={modelExtract.hyperlink} target="_blank">
          {modelExtract.name}
        </Anchor>
        {' '}by {modelExtract.author}.
      </Text>
      <Text>
        From this, you will be able to drag <Bolded>bnd</Bolded> files onto the exe,
        you can do this in bulk; it will write <Bolded>fbx</Bolded> files for each source file,
        to a new folder.
      </Text>
      <Image mah={270} maw={807} src={DragOntoMCFM} />
      <Text>
        You can then easily import the resulting <Bolded>fbx</Bolded> files into Blender.
      </Text>
      <Text mt="sm">
        <Bolded>Note</Bolded>, the process will generate <Bolded>SMD</Bolded> and <Bolded>MDL</Bolded> files
        the former have correct normals while the latter do not, however the <Bolded>MDL</Bolded> files
        include UVMaps and Rigging; and are therefore the superior format to work in if the choice exists.
      </Text>
      <Text mt="sm">
        The exception to this is e.g. Godot if you want to preview them without funky normals, but we recommend
        you do not use them for functional purposes in Godot; instead export from Blender.
      </Text>
      <Text mt="lg">
        You will notice that the models are <Bolded>HUGE</Bolded> you may want to
        scale either their Armature to e.g. <Bolded>0.00002</Bolded> (which will scale the Meshes)
        , or Meshes down to <Bolded>0.0015</Bolded>.
      </Text>
      <Text>
        The values you use is upto you, and you should consider your use case and consistincy
        of the scaling for different models; so whatever you choose; note it down.
      </Text>
      <Box display="flex" dir="row" mt="sm">
        <Image maw={302} src={BlenderOutliner}/>
        <Text ml="sm">
          Some Models will import multiple meshes, you will need to scale each if you choose
          Mesh scaling, and understand their elements; some are hydralics, others can be
          shell ejection systems on guns, etc.
        </Text>
      </Box>
      <Text mt="sm">
        Additionally, they sometimes import with an "UnusedBonesMeshNode" as far as we have seen,
        you can safely delete this.
      </Text>
    </>
  );
}
