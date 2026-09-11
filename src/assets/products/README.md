# Product photos

Local PNG cutouts for the nine product categories on the landing page. Import them
through `src/content/products.ts` so Next.js includes the deployment base path.
The photos depict branded products under the site's existing generic category names.

## Sources

Retrieved September 11, 2026. Eight images come from the supplied
[Capital One Shopping reference](https://capitaloneshopping.com/capitalone).
Rights to show them are being arranged with Chase (September 2026). Until that is
signed they are reference assets only. The footer carries the trademark notice
(`brand.trademarkNotice`).

| Local file | Original image |
| --- | --- |
| running-shoes.png | [Nike shoe](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/nike-shoe.png) |
| headphones.png | [Bose headphones](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/bose-headphones.png) |
| camera.png | [Sony camera](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/sony-camera.png) |
| sunglasses.png | [Ray-Ban sunglasses](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/ray-bans.png) |
| laptop.png | [MacBook](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/macbook.png) |
| fitness-watch.png | [Fitbit](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/fitbit.png) |
| game-controller.png | [Xbox controller](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/xbox-controller.png) |
| camera-drone.png | [Camera drone](https://cdn.ivaws.com/wikibuy-assets/images/upload_content/drone.png) |
| wireless-mouse.png | [Logitech M185 photo via PNGkey](https://www.pngkey.com/detail/u2w7y3e6y3q8w7q8_wireless-mouse-m185-logitech-m185-wireless-mouse/) |

The PNGkey mouse source had a solid background. The built-in image generation tool
removed its background; this image is an AI-edited photograph. No commercial reuse
license was established for the mouse source either.

## Mouse edit prompt

Use case: background-extraction. Edit target: supplied photograph of a wireless mouse.
Remove only the solid light gray background and output a PNG with actual alpha
transparency. Preserve the exact photographed mouse, proportions, materials, scroll
wheel, details and lighting. Center the entire mouse with a small transparent margin.
No invented parts, no new shadows, no backdrop, no checkerboard. This is a product
cutout for a website.
