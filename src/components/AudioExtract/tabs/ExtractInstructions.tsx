import { Anchor, Image, Text } from '@mantine/core';
import { Bolded } from '@src/components/Bolded/Bolded';
import { soundExtract, soundParser } from '@src/consts/resourceConsts';
import DragXWBOntoUnXWB from '@src/assets/images/AudtioExtract/Drag_XWB_onto_UnXWB.png';
import DragWAVf_OntoAudacity from '@src/assets/images/AudtioExtract/Drag_wav-f_onto_Audacity.png';
import AudacityDetectedBPM from '@src/assets/images/AudtioExtract/AudacityDetectedBPM.png';
import AudacityExport from '@src/assets/images/AudtioExtract/AudacityExport.png';




export function ExtractInstructions() {
  return (
    <>
      <Text>
        All the Sound files are contained within the <Bolded>Sound folder</Bolded>, you will want to make use of{' '}
        <Anchor href={soundExtract.hyperlink} target="_blank">
          {soundExtract.name}
        </Anchor>
        {' '}by {soundExtract.author}. This will create <Bolded>specially formatted WAV</Bolded> files
        into the same folder; you may want to move these to a sub-folder.
      </Text>
      <Image mah={270} maw={807} src={DragXWBOntoUnXWB} />

      <Text mt="md">
        Next, in order to parse these into <Bolded>Usable WAV</Bolded> files, you will want to make use of{' '}
        <Anchor href={soundParser.hyperlink} target="_blank">
          {soundParser.name}
        </Anchor>
        {' '} you will also however need
        {' '}<Anchor href={soundParser.plugins?.ffmpeg.hyperlink} target="_blank">
          {soundParser.plugins?.ffmpeg.name}  
        </Anchor>
        {' '} by {soundParser.plugins?.ffmpeg.author}.
      </Text>
      <Image mah={270} maw={807} src={DragWAVf_OntoAudacity} />

      <Text mt="sm">
        You can then save the resulting file to a new folder.
      </Text>

      <Image mah={350} maw={400} src={AudacityExport} mt="sm"/>
      <Text mt="md">
        {soundParser.name} will auto-detect <span title="Beats per Minute">BPM</span>
        {' '}changes; accept the prompts.
      </Text>
      <Image mah={125} maw={400} src={AudacityDetectedBPM} />
    </>
  )
}