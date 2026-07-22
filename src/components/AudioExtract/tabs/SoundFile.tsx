import { Button, Card, CopyButton, Group, Stack, Text, Image } from "@mantine/core";
import type { SoundFileDetails } from "@src/consts/audioFiles";

type Props = {
  sound: SoundFileDetails,
  waveform: string,
}

export function SoundFile({ sound, waveform }: Props) {
  return (
    <Card
      key={sound.filename}
    >
      <Card.Section>
        <Stack align="center" justify="center" p="sm">
          <CopyButton value={sound.filename}>
            {({ copied, copy }) => (
              <Button
                variant={copied ? "filled" : "default"}
                title={copied ? "Copied" : "Copy"}
                color={copied ? 'teal' : 'blue'}
                onClick={copy}
              >
                {copied
                  ? "Copied to Clipboard"
                  : sound.filename === "00000000"
                    ? "0"
                    : sound.filename.replace(/^0+/, '')
                }
              </Button>
            )}
          </CopyButton>
        </Stack>
      </Card.Section>

      <Text mb="md" style={{ minHeight: '60px' }}>
        "{sound.searchWords.join(' ')}"
      </Text>

      <Image
        src={waveform}
        alt={`${sound.filename} Waveform`}
        fit="contain"
        w="auto"
        h="100"
      />

      <Text display="none">
        {waveform}
      </Text>

      <Group mt="auto" justify="space-between">
        <Text size="sm">
          {(sound.filesize / 1_024).toFixed()}KB
        </Text>

        <Text>
          {sound.durationS >= 1 
            ? `${sound.durationS.toFixed()}s`
            : `${sound.durationS * 1000}ms`
          }
        </Text>
      </Group>
    </Card>
  )
}