import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export type Task = {
  id: string;
  yardId: string;
  title: string;
  status: "open" | "done";
  dueAt?: number; // epoch ms
  assigneeUid?: string;
  [k: string]: any;
};

type Filter = { status?: "open" | "done"; assigneeUid?: string | null };

/** Live task list with basic filtering; auto-unsubscribes on unmount. */
export function useTasks(yardId: string, filter: Filter = {}) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const qRef = useMemo(() => {
    const base = collection(db, "yards", yardId, "tasks");
    const clauses: any[] = [];
    if (filter.status) clauses.push(where("status", "==", filter.status));
    if (filter.assigneeUid)
      clauses.push(where("assigneeUid", "==", filter.assigneeUid));
    return query(base, ...clauses, orderBy("dueAt", "asc"));
  }, [yardId, filter.status, filter.assigneeUid]);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      qRef,
      (snap) => {
        setTasks(
          snap.docs.map((d) => {
            const data = d.data() as any;
            // Support Firestore Timestamp as well as number
            const dueAt =
              typeof data.dueAt === "number"
                ? data.dueAt
                : (data.dueAt?.toMillis?.() ?? undefined);
            return { id: d.id, ...data, dueAt } as Task;
          }),
        );
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
    );
    return () => unsub();
  }, [qRef]);

  return { tasks, loading, error };
}
