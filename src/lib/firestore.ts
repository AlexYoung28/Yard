import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase";

export type Role = "admin" | "staff" | "viewer";

export type Horse = {
  id: string;
  yardId: string;
  name: string;
  ownerName?: string;
  active: boolean;
  [k: string]: any;
};

export type Task = {
  id: string;
  yardId: string;
  title: string;
  status: "open" | "done";
  dueAt?: number; // epoch ms
  assigneeUid?: string;
  createdBy?: string;
  createdAt?: any;
  updatedAt?: any;
  [k: string]: any;
};

/** Add a task to a yard. */
export async function addTask(
  yardId: string,
  t: Omit<Task, "id" | "createdAt" | "updatedAt">,
) {
  const col = collection(db, "yards", yardId, "tasks");
  await addDoc(col, {
    ...t,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

/** Mark a task complete (optimistic UI recommended at call-site). */
export async function completeTask(yardId: string, taskId: string) {
  const ref = doc(db, "yards", yardId, "tasks", taskId);
  await updateDoc(ref, { status: "done", updatedAt: serverTimestamp() });
}

/** Example: batch complete multiple tasks. */
export async function completeTasks(yardId: string, taskIds: string[]) {
  const batch = writeBatch(db);
  for (const id of taskIds) {
    const ref = doc(db, "yards", yardId, "tasks", id);
    batch.update(ref, { status: "done", updatedAt: serverTimestamp() });
  }
  await batch.commit();
}

/** Basic list loader (non-realtime) for horses. Use hook for realtime. */
export async function listHorses(yardId: string): Promise<Horse[]> {
  const snap = await getDocs(collection(db, "yards", yardId, "horses"));
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
}

/** Example: watch tasks with sorting. Returns unsubscribe. */
export function watchTasks(yardId: string, cb: (tasks: Task[]) => void) {
  const q = query(
    collection(db, "yards", yardId, "tasks"),
    orderBy("dueAt", "asc"),
  );
  return onSnapshot(q, (snap) =>
    cb(
      snap.docs.map((d) => {
        const data = d.data() as any;
        const dueAt =
          typeof data.dueAt === "number"
            ? data.dueAt
            : (data.dueAt?.toMillis?.() ?? undefined);
        return { id: d.id, ...data, dueAt } as Task;
      }),
    ),
  );
}
