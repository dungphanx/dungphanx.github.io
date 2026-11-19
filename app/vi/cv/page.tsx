import { vi } from "../../content";
import Cv, { cvMetadata } from "../../cv";

export const metadata = cvMetadata(vi);

export default function Page() {
  return <Cv t={vi} />;
}
