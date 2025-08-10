import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export type Horse = {
  id: string;
  yardId: string;
  name: string;
  ownerName?: string;
  active: boolean;
  [k: string]: any;
};

/** Live list of horses in a yard (auto-unsubscribes on unmount). */
export function useHorses(yardId: string) {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const colRef = useMemo(
    () => collection(db, "yards", yardId, "horses"),
    [yardId],
  );

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      colRef,
      (snap) => {
        setHorses(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Horse));
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
    );
    return () => unsub();
  }, [colRef]);

  return { horses, loading, error };
}
