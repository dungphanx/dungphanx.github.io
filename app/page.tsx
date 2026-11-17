import { en } from "./content";
import Home, { homeMetadata } from "./home";

export const metadata = homeMetadata(en);

export default function Page() {
  return <Home t={en} />;
}
