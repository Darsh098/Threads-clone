import Topbar from "@/components/shared/Topbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <Topbar />
      <SignIn />
    </>
  );
}
