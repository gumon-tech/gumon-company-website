# Client logos (UK strip)

Shown in the single partner network grid on the home page and `/partners`
(`components/PartnerNetworkGrid.tsx`, data in `content/partnerNetwork.ts`). Partners and clients
are one list by the owner's decision (2026-10-29): everyone in it works on research with Gumon. Each tile shows
the logo, the name and the country. Logos are the clients' own files, unaltered (only downscaled where noted).
Brand names are never translated. Taitam-D uses its shop logo (`public/assets/partners/taitam-d.png`).
Permission: the owner confirmed on 2026-10-29 that Gumon runs these sites in exchange for being a
reference, and Taitam-D is the owner's own business. The shop logo and the Academy logo are two different marks.

| File | Client | Source | Notes |
| --- | --- | --- | --- |
| `public/assets/clients/pure-essentials-london.png` | Pure Essentials London (https://www.pureessentialslondon.com) | The clinic's original logo from its Wix site (`pel-logo-full-wix-original.png`, 629x289, black on white) kept in Gumon's OneDrive `10-Work/PEL-Pure-Essentials-London/logo/` | Byte-identical copy, sha256 `e2697a06c195a31203503922266e0d7ff37a3081bc4a1272a4456d28dbb3dd3d` |
| `public/assets/clients/sri-siam-thai-therapy-wellness.png` | Sri Siam Thai Therapy & Wellness (https://www.srisiamthaitherapyandwellness.co.uk/) | Downloaded 2026-10-29 from the client's own page: `https://static.wixstatic.com/media/63aa52_c9b283cc03a44466af2f207b81f43c78~mv2.png` (the header logo, 697x700 RGBA, sha256 `2944dfa688ecd1ba6bad320be9da5834e0cf0302fc0e57d31fc35aa870c76da6`) | Resized to 358x360 with `sips -Z 360`, colours untouched |
| `public/assets/clients/taitam-d-academy-london.png` | Taitam-D Academy London (https://academy.taitam-d.com/) | `solution-taitamd-platform/docs/assets/brand/taitamd-academy-logo-512.png`, the 512x512 copy that is live on the academy storefront (ring text "TAITAM-D ACADEMY LONDON") | sha256 `9ac96367ab7b69b0b3f26ca32f13fc542afea0d8b8885f54509092dbd23dfd7f` |

Logos sit on white tiles in both themes; Siam Cruise & Hotel Academy sits on a black tile because its mark was supplied gold-on-black.

## Added 2026-10-29 (owner request)

| File | Client | Source | Notes |
| --- | --- | --- | --- |
| `public/assets/clients/vera-d.webp` | Vera-D, United Kingdom (https://vera-d.gumon.io/) | `solution-taitamd-platform/apps/web/public/image/verad-logo.webp` (400x392, from the master artwork the customer confirmed; provenance in that repo's `tools/scripts/asset-provenance.json`) | Byte-identical copy, sha256 `43f39004698276f7889fdf6221e0a528a113fa5cd796e675e1763d6b44fd1e48` |
| `public/assets/clients/siam-cruise-hotel-academy.webp` | Siam Cruise & Hotel Academy, Finland (no website yet; links to https://www.facebook.com/siamcruiseandhotelacademy) | `solution-taitamd-platform/apps/web/public/image/siam-cruise-logo.webp` (500x270, from the JPEG the academy sent the owner; black keyed out) | Byte-identical copy, sha256 `4228a8087a7c14fc77858477c244d42fc13910cd40f682d7872d796062934b7f`. Replace when the academy sends a vector or lossless master |

The "Partner Organizations" and "Operating Countries" stats on the home page and `/partners` are computed from `partnerNetwork`.
