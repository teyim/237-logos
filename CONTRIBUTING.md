# Contributing to 237-logos

Contributing to 237-logos can involve adding a new logo, or even fixing a typo in the codebase or docs. All type of contributions are welcome.

# Adding a new logo

The process of finding and adding a new logo can be divided into 2 steps

## 1. Optimising and convert logos

To optimise and convert you logo to the desired formats, follow the below steps :

### - Find the company logo you will like to add

Find and download the company logo image you want to add

### - Upscale low quality logo

The minimum logo image dimension should be 500 x 500px. logo images with lower resolutions need to be upscaled. For this, use [Iloveimg](https://www.iloveimg.com/upscale-image) to upscale the image(increase image quality)

### - Remove image background

Some logos can only be found in JPEG format, but will need to have tranparent backgrounds. For logos that need to be converted to PNG format, use [Remove.bg](https://www.remove.bg/upload).

**NOTE: This step should be skipped for logos already in PNG format (transparent background)**

### - Compress PNG logo

**237-logos** uses optimised images (< 80kb), and as such all the logo variants have to be compressed. To compress PNG logos use [Tiny png](https://tinypng.com/).

### - Convert compressed PNG logo to SVG

All logos need an SVG variant. To convert the compressed PNG logo to SVG format, use [Svgtrace](https://svgtrace.com/png-to-svg)

### - Compress SVG logo

Compress the SVG logo using [SVGOMG](https://jakearchibald.github.io/svgomg/) .

## 2. Adding Logo to 237-logos

To add the optimsed PNG and SVG logos to this project, you should :

- Create a folder in the **public/logos** directory with the company name in lowercase. e.g for MTN would be **mtn** and Camair-Co will be **camair-co**
- In the **_logos.json_** file, add a new object with the Title(Company name), filename where the logo images are stored, company website url and the company category (categories can be found in the **_category.ts_** helper file)

### A PR with your changes will be reviewed and merged if they meet all requirements.
