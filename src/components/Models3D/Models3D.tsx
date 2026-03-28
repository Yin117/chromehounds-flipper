import { Anchor, Image, Text } from '@mantine/core';
import { modelExtract, xprParser } from '@src/consts/resourceConsts';
import DragOntoMCFM from '@src/assets/images/3dModels/Drag_BND_onto_MCFM.png';
import BlenderOutliner from '@src/assets/images/3dModels/Blender_Outliner.png';
import BlenderCustomNormalsData from '@src/assets/images/3dModels/Blender_CustomNormalsData.png';
import { Bolded } from '@src/components/Bolded/Bolded';

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
        From this, you will be able to drag <Bolded>BND</Bolded> files onto the exe,
        you can do this in bulk; it will write <Bolded>fbx</Bolded> files for each source file,
        to a folder based on the source file's name.
      </Text>
      <Image mah={270} maw={807} src={DragOntoMCFM} />
      <Text>
        You can then easily import the resulting{' '}
        <Bolded>fbx</Bolded> files into Blender.
        Note some will also have extra files e.g.
        CK_CB003<Bolded>_L02</Bolded> and
        CK_CB003<Bolded>_L03</Bolded>; these
        are "<Anchor href="https://en.wikipedia.org/wiki/Level_of_detail_(computer_graphics)" target="_blank">
          Level of Detail
        </Anchor>" files.
      </Text>
      <Text mt="sm">
        <Bolded>Note</Bolded>, the process will generate <Bolded>SMD</Bolded> and <Bolded>MDL</Bolded> files
        the SMD have correct normals while the MDL do not, however the <Bolded>MDL</Bolded> files
        include UVMaps and Rigging; and are therefore the superior format to work in if the choice exists.
      </Text>
      <Text mt="sm">
        The exception to this is e.g. Godot if you want to preview them without funky normals, but we recommend
        you do not use them for functional purposes in Godot; instead export from Blender.
      </Text>
      <Text mt="sm">
        The tool <Bolded>{xprParser.name}</Bolded> can be used to generate <Bolded>FBX</Bolded> files, but they do import broken; either bad meshes or UVs.
        However, we can learn from importing these into Blender such as Shader properties like <Bolded>Roughness and IOR</Bolded> so we recommend do not use
        {' '}{xprParser.name} parsed FBX files, but do reference their "meta data" in Blender for use on the better models from {modelExtract.name}.
      </Text>
      <Text mt="sm">
        You will notice that the models are <Bolded>HUGE</Bolded> you may want to
        scale either their Armature to e.g. <Bolded>0.00002</Bolded> (which will scale the Meshes)
        , or Meshes down to <Bolded>0.0015</Bolded>.
      </Text>
      <Text>
        The values you use is upto you, and you should consider your use case and consistincy
        of the scaling for different models; so whatever you choose; note it down.
      </Text>
      <Image mah="250px" maw="300px" fit="contain" mt="sm" src={BlenderOutliner}/>
      <Text>
        Some Models will import multiple meshes, you will need to scale each if you choose
        Mesh scaling, and understand their elements; some are hydralics, others can be
        shell ejection systems on guns, etc.
      </Text>
      <Text mt="md">
        If when using in Godot you find that <Bolded>lighting</Bolded> acts in reverse; illuminating the farside of the models, you need to
        clear the <Bolded>Clear Custom Normals Data</Bolded>.
        <br/>You do not need to do this to every vertex group, just ever Mesh (Object) in the Outliner (orange reversed triangle).
      </Text>
      <Image mah="250px" maw="300px" fit="contain" mt="sm" src={BlenderCustomNormalsData}/>
      <Text mt="sm">
        They typically sometimes import with an "UnusedBonesMeshNode" as far as we have seen,
        you can safely delete this.
      </Text>
    </>
  );
}
