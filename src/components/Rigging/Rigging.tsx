import { Box, Image, Text } from '@mantine/core';
import { Bolded } from '@src/components/Bolded/Bolded';
import { NavLink } from 'react-router-dom';
import { routesLookup } from '@src/consts/routeConsts';
import RigImportedBones from '@src/assets/images/Rigging/Rig_Imported_Bones.png';
import RigSnapToCursorPre from '@src/assets/images/Rigging/Rig_Snap_to_Cursor_Pre.png';
import RigSnapToCursorPost from '@src/assets/images/Rigging/Rig_Snap_to_Cursor_Post.png';
import RigSelectionToCursorPre from '@src/assets/images/Rigging/Rig_Selection_to_Cursor_Pre.png';
import RigSelectionToCursorPost from '@src/assets/images/Rigging/Rig_Selection_to_Cursor_Post.png';
import RiggedLegs from '@src/assets/images/Rigging/Rigged.png';

// Bone names in case re change the terms used
// Aught to update `RigSnapToCursorPost` too if so
const tail = "Tail";
const head = "Head";

export function Rigging() {
  return (
    <>
      <Text size="xl">
        Rigging
      </Text>
      <Text>
        Once you have obtained the <Bolded>MDL sourced FBX</Bolded> files by following the instructions
        in <NavLink
          to={routesLookup.models3d.path}
        >
          3D Models  
        </NavLink>
        {' '}you can then import these into Blender and look at their Skeleton/Rigging/Armature.
      </Text>
      <Image mt="sm" mah="270px" maw="230px" fit="contain" src={RigImportedBones} />
      <Text mt="sm">
        You will notice that the bones have imported and include linkages between them
        {' '}(in my Blender configuration here, and v5.0.1, they are dashed lines).
        However, they are all pointing upwards, there is a <Bolded>nice easy trick</Bolded> to fix this, although it is manual.
      </Text>
      <Text mt="sm">
        First select the {head} of the bone, you want the preceeding bone's {tail} to move to, then open the <Bolded>Snap Shortcuts</Bolded>
        {' '}(in my Blender that is SHIFT+S) and select <Bolded>Cursor to Selected</Bolded>.
      </Text>
      <Box
        display="flex"
        dir="row"
        style={{
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Image mah="270px" maw="230px" fit="contain" src={RigSnapToCursorPre} />
        <Image mah="270px" maw="230px" fit="contain" src={RigSnapToCursorPost} />
      </Box>
      <Text mt="sm">
        For example here, selecting the {head} of the "shin" bone of this reverse legged part
        <br/>This will move the cursor to to this {head}.
      </Text>
      
      <Text mt="md">
        Next, we select the {tail} of the preceeding bone (so the thigh bone here) and again using
        the snap menu, but we select <Bolded>Selection to Cursor (keep offset)</Bolded>
      </Text>
      <Box
        display="flex"
        dir="row"
        style={{
          gap: '6px',
          flexWrap: 'wrap',
        }}
      >
        <Image mah="270px" maw="230px" fit="contain" src={RigSelectionToCursorPre} />
        <Image mah="270px" maw="230px" fit="contain" src={RigSelectionToCursorPost} />
      </Box>
      <Text mt="sm">
        This will move the {tail} of this one to the {head} of the earlier bone,
        {' '}placing the "thigh" bone correctly.
      </Text>
      <Text mt="mg">
        <Bolded>Repeat</Bolded> until you have a visually correct Skeleton.
        <br/>You can then use <Bolded>Pose Mode</Bolded> to experiment with rotations and positions (e.g. for Hydraulics/Legs).
        <br/>If down the line you find some parts don't move when you move a certain bone, you can consider re-painting through <Bolded>Weight Paint</Bolded> mode.
      </Text>
      
      <Image mt="sm" mah="270px" maw="230px" fit="contain" src={RiggedLegs} />

      <Text mt="sm">
        Note, editing positions in edit mode doesn't affect the model, only pose model well, but unless you are doing
        animations, you should leave the model in its rest pose.
        <br/>Feel free to edit the bones sizes and rotations to better fit, e.g. shrink the size of bones for Hydraulics
      </Text>
    </>
  );
}
