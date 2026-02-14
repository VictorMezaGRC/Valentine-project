import { existsSync } from "node:fs";
import path from "node:path";
import { HomeClient } from "@/components/HomeClient";

function imageExists(relativePath: string) {
  return existsSync(path.join(process.cwd(), "public", relativePath));
}

export default function HomePage() {
  const hasPhoto = imageExists("photo.jpeg");
  const hasFamily = imageExists("family.jpeg");

  return <HomeClient hasPhoto={hasPhoto} hasFamily={hasFamily} />;
}
