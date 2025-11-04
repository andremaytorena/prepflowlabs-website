// src/imagetools.d.ts
/// <reference types="vite-imagetools" />
declare module '*&as=picture' {
  const out: {
    sources: { type: string; srcset: string }[];
    img: { src: string; width: number; height: number };
  };
  export default out;
}
