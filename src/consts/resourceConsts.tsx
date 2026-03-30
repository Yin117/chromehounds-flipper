
type Resource<T extends string = string> = {
  name: string,
  author?: string,
  hyperlink: string,
  plugins?: Record<T, Resource<T>>,
}

export const modelExtract: Resource = {
  name: 'MassConvertFromModel',
  author: 'WarpZephyr',
  hyperlink: 'https://github.com/WarpZephyr/MassConvertFromModel/releases',
}

export const xprExtract: Resource = {
  name: 'WitchyBND',
  author: 'ividyon',
  hyperlink: 'https://github.com/ividyon/WitchyBND/releases',
}

export const xprParser: Resource = {
  name: 'Noesis',
  author: 'Rich Whitehouse',
  hyperlink: 'https://richwhitehouse.com/index.php?content=inc_res.php#:~:text=noesisv4474',
}

export const soundExtract: Resource = {
  name: 'UnXWB',
  author: 'mariodon',
  hyperlink: 'https://github.com/mariodon/unxwb',
}

export const soundParser: Resource<'ffmpeg'> = {
  name: 'Audacity',
  hyperlink: 'https://www.audacityteam.org/',
  plugins: {
    ffmpeg: {
      name: 'ffmpeg',
      author: 'buanzo',
      hyperlink: 'https://lame.buanzo.org/ffmpeg.php',
      // Importing this "just works" as it gets installed
    }
  }
}