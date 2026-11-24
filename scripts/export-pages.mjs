import { mkdir, writeFile } from 'node:fs/promises';
import worker from '../worker/index.js';

const backend = 'https://nafesa-fyp.nafesaamalyn0410.chatgpt.site';
const response = await worker.fetch(new Request(backend + '/'), {});
let html = await response.text();
const scriptStart = html.indexOf('<script>');
let markup = html.slice(0, scriptStart);
let script = html.slice(scriptStart);
markup = markup.replace(/(href|src)="\/(?!\/)/g, '$1="' + backend + '/');
script = script.replaceAll("'/api/", "'" + backend + '/api/');
script = script.replaceAll('href="/api/', 'href="' + backend + '/api/');
// Student sign-in opens the authenticated editing workspace on its original host.
html = markup + script;
await mkdir('docs', {recursive: true});
await writeFile('docs/index.html', html);
await writeFile('docs/.nojekyll', '');
console.log('Exported GitHub Pages interface to docs/index.html');
