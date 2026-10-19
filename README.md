# still.

A minimal music library with a black-and-white interface built with React, Tailwind CSS, and shadcn/ui.

## Run

```sh
npm install
npm run dev
```

Open **http://127.0.0.1:3000**. For a production build, use `npm run build`; `npm run preview` serves the build.

## Features

- Upload audio files or drag them into an album.
- Create, rename, edit, favorite, and delete albums.
- Choose artwork or upload a custom cover.
- Move and reorder tracks, set their stage, and add notes.
- Search, filter, sort, and switch between grid and list views.
- Play audio with seeking, volume, shuffle, repeat, and a queue.
- Download original audio and export or restore `.still` backups.
- Six removable sample albums with original 18-second synthesized audio.

## UI

Official shadcn components are in `src/components/ui`. The project uses the neutral theme in `src/theme.css`, with responsive app layouts in `styles.css`. `src/main.jsx` renders the existing controller's markup through shadcn Button, Input, Textarea, Badge, Card, and Table components. `components.json` configures the shadcn CLI for adding more components.

The audio and IndexedDB controller remains in `app.js`. This preserves the existing database and backup format. Covers display in grayscale; uploaded artwork is stored unchanged.

## Storage

Metadata and uploaded files are stored in IndexedDB in the current browser. Data is specific to the browser and origin, including hostname and port. Keep using the same address to retain access to an existing library. Clearing browser data can remove files; export backups from Settings.

Audio limit: 100 MB per file. Artwork: 10 MB, resized to at most 1,000 pixels. Backup import: 500 MB. Playback support depends on the browser. Backups contain original, unencrypted audio files. Export assembles files in memory.

Accounts, cloud sync, collaboration, and sharing are not implemented.

## Verify

```sh
npm run check
npm run test:ui
```

`check` runs syntax checks, core storage/audio tests, and the production build. The UI tests use an isolated Chromium session and start a separate local server.
