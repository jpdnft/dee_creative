import { requireLibrary } from "@/lib/design-library";

export default function DesignLibraryLayout({ children }: { children: React.ReactNode }) {
  requireLibrary();
  return children;
}
