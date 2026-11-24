# Nafesa FYP

Source code for Nafesa's final-year-project progress tracker.

Features include progress logs, objectives and research questions, tasks and calendar, supervisor feedback, file uploads and previews, and titled Google Earth Engine scripts.

## Structure

- `worker/index.js` contains the web interface and Cloudflare Worker API.
- `worker/nafesa-fyp-icon-original.png` contains the original app icon.
- `scripts/build.sh` builds the Worker artifact.
- `.openai/hosting.json` declares the original ChatGPT Sites project and R2 storage binding.

## Build

Run `bash scripts/build.sh` and `node scripts/validate-artifact.mjs`.

The application uses the `BUCKET` R2 binding for shared records and uploads. Student authentication uses the identity headers supplied by ChatGPT Sites. Running this source on another host requires equivalent storage and authentication configuration.

This repository contains source code and assets. Live progress records, comments, GEE scripts entered through the website, and uploaded files remain in the site's hosted storage.

Live website: https://nafesa-fyp.nafesaamalyn0410.chatgpt.site
