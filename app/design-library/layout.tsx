import { requireLibrary } from "@/lib/design-library";
import { LibraryPreviewNotice } from "@/components/design-library/library";

export default function DesignLibraryLayout({ children }: { children: React.ReactNode }) {
  requireLibrary();
  return <><LibraryPreviewNotice />{children}</>;
}
