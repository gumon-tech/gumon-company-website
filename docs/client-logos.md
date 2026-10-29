# Client logos (UK strip)

Shown in the "Trusted by clients in the United Kingdom" strip on `/partners` and the home page
(`components/UkClientsStrip.tsx`, data in `content/locales/ukClients.ts`). Logos are the clients'
own files, unaltered (only downscaled where noted). Brand names are never translated.
Permission: the owner confirmed on 2026-10-29 that Gumon runs these sites in exchange for being a
reference, and Taitam-D is the owner's own business.

| File | Client | Source | Notes |
| --- | --- | --- | --- |
| `public/assets/clients/pure-essentials-london.png` | Pure Essentials London (https://www.pureessentialslondon.com) | The clinic's original logo from its Wix site (`pel-logo-full-wix-original.png`, 629x289, black on white) kept in Gumon's OneDrive `10-Work/PEL-Pure-Essentials-London/logo/` | Byte-identical copy, sha256 `e2697a06c195a31203503922266e0d7ff37a3081bc4a1272a4456d28dbb3dd3d` |
| `public/assets/clients/sri-siam-thai-therapy-wellness.png` | Sri Siam Thai Therapy & Wellness (https://www.srisiamthaitherapyandwellness.co.uk/) | Downloaded 2026-10-29 from the client's own page: `https://static.wixstatic.com/media/63aa52_c9b283cc03a44466af2f207b81f43c78~mv2.png` (the header logo, 697x700 RGBA, sha256 `2944dfa688ecd1ba6bad320be9da5834e0cf0302fc0e57d31fc35aa870c76da6`) | Resized to 358x360 with `sips -Z 360`, colours untouched |
| `public/assets/clients/taitam-d-academy-london.png` | Taitam-D (https://taitam-d.com/) and Taitam-D Academy London (https://academy.taitam-d.com/) | `solution-taitamd-platform/docs/assets/brand/taitamd-academy-logo-512.png`, the 512x512 copy that is live on the academy storefront (the ring text reads "TAITAM-D ACADEMY LONDON") | Same file for both entries; told apart by the caption under the logo (Website / Academy platform). sha256 `9ac96367ab7b69b0b3f26ca32f13fc542afea0d8b8885f54509092dbd23dfd7f` |

The tiles are white so every logo sits on the same background in dark and light theme.
