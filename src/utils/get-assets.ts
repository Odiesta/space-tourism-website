// utils/get-assets.ts
const images = import.meta.glob("@/assets/**/*", { eager: true, as: "url" });

export function getImageUrl(path: string): string {
  const key = `/src/assets/${path}`;
  return images[key] as string;
}
