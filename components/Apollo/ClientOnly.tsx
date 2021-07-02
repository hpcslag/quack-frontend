import { useEffect, useState } from "react";

/**
 *
 * The JSX children only shows when Children mounted.
 * <ClientOnly> ... put your child </ClientOnly>
 *
 * @param param0
 * @returns
 */
export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
