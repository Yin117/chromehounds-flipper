# Chromehounds Flipper

This website is an instructional tool to explore the various files and formats
used in the creation of the game Chromehounds for **educational purposes**, things can be
gleamed from these files such as:
- Structure of 3D Models
- Use of LODs in 3D Models
- Structure of Terrain Tiles
- Organization and Layering of Sound files
- Design of Texture/UV maps
- Approach to Rigging the 3D Models including Weapons
- The Sheer variety of 3D Models created for the game
- How Animations such as collapsing buildings was implemented

## NPM Fixes

### Rolldown Error
> Cannot find module './rolldown-binding.win32-x64-msvc.node'

Solution:
1. Delete `node_modules`
2. Delete `package-lock.json`
3. Swap to later version of node using `nvm`
4. Run `npm cache clean --force`
5. Run `npm i`
6. Run app as desired
7. Swap back to desired node version using `nvm`

<!--
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'eslint-visitor-keys@5.0.1',
npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
npm warn EBADENGINE   current: { node: 'v22.12.0', npm: '10.9.0' }
npm warn EBADENGINE }
-->