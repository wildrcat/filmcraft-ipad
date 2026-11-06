# FilmCraft for iPad (unofficial)

An installable, full-screen build of [FilmCraft](https://github.com/storytold/filmcraft), the open-source video editor from the ArtCraft team, set up to work on an iPad without a keyboard.

This is not an official ArtCraft release. All credit for FilmCraft goes to its authors; this repo only hosts their published web build (v0.17.1) with an iPad layer on top.

## What's added for iPad

- **Home screen app:** opens full screen with its own icon, and keeps working offline after the first load.
- **Touch keys:** an on-screen bar for Play, frame steps, Split, Delete, Ripple Delete, Undo/Redo, tools, Copy/Paste, In/Out and timeline zoom.
- **＋ Media:** pick clips from Photos or Files. FilmCraft's own Import buttons also work (iPad needs one extra tap).
- **♪ Music:** opens Pixabay's free music library. Download a track, then add it with ＋ Media.
- **Save exports:** finished videos go to the Share sheet (Save Video, Save to Files, AirDrop).
- **Progress kept:** projects are stored on the iPad by the app itself, and the app asks the system to keep that storage.

## Install

1. Open the site in **Safari** on the iPad.
2. Tap **Share**, then **Add to Home Screen**.
3. Open FilmCraft from the new icon.

## Updating FilmCraft

Replace `filmcraft_web.js`, the `snippets/` folder and `audio-worklet.js` with the files from a newer `filmcraft-web-<version>.zip` release, gzip the new `filmcraft_web_bg.wasm` to `filmcraft_web_bg.wasm.gz`, update `TOTAL` in `index.html` to its size in bytes, and bump `VERSION` in `sw.js`.

## Licenses

FilmCraft is dual-licensed under MIT and Apache-2.0; see `LICENSE-MIT`, `LICENSE-APACHE` and `NOTICE`.
