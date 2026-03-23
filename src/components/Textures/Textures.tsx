import { Anchor, Image, List, Text } from '@mantine/core';
import { xprExtract, xprParser } from '@src/consts/resourceConsts';
import DragOntoWitchey from '@src/assets/images/Textures/Drag_BND_onto_Witchey.png';
import ExportTexturesWithNoesis from '@src/assets/images/Textures/ExportTexturesWithNoesis.png';
import { Bolded } from '@src/components/Bolded/Bolded';

export function Textures() {
  return (
    <>
      <Text size="xl">
        Textures
      </Text>
      <Text>
        In order to obtain the Textures from Chromehounds, first you will want to make use of{' '}
        <Anchor href={xprExtract.hyperlink} target="_blank">
          {xprExtract.name}
        </Anchor>
        {' '}by {xprExtract.author}.
      </Text>
      <Text>
        From this, you will be able to drag <Bolded>BND</Bolded> files onto the exe,
        you can do this in bulk; it will write <Bolded>XPR</Bolded> files for each source file,
        to a folder based on the source file's name.
      </Text>
      <Image mah={270} maw={807} src={DragOntoWitchey} />
      <Text mt="md">
        In order to obtain the Textures from these <Bolded>XPR</Bolded> files, you will want to make use of{' '}
        <Anchor href={xprParser.hyperlink} target="_blank">
          {xprParser.name}
        </Anchor>
        {' '}by {xprParser.author}. 
        however you will need some additional <Bolded>plugins</Bolded> in order to handle these files for export
      </Text> 
      <List>
        <List.Item>fmt_XBOX_360_XPC.py</List.Item>
        <List.Item>fmt_XBOX_360_XPR.py</List.Item>
        <List.Item>fmt_mdl4.py</List.Item>
      </List>
      <Text>
        These plugins are placed in <Bolded>noesisv</Bolded>####<Bolded>\plugins\python</Bolded>
      </Text>
      <Text>
        For now, you can find these plugins in the OpenCOMBAS Discord Server.
      </Text>
      <Image mt="sm" mah={270} maw={807} src={ExportTexturesWithNoesis} />
      
    </>
  );
}
