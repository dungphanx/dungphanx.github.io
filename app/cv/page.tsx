import { en } from "../content";
import Cv, { cvMetadata } from "../cv";

export const metadata = cvMetadata(en);

export default function Page() {
  return <Cv t={en} />;
}
