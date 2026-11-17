import { vi } from "../content";
import Home, { homeMetadata } from "../home";

export const metadata = homeMetadata(vi);

export default function Page() {
  return <Home t={vi} />;
}
