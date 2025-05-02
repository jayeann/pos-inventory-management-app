import { db } from "./firebase";
import { Category, CategoryFormData } from "@/types/category";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";

const categoryRef = collection(db, "categories");

export const fetchCategories = async (): Promise<Category[]> => {
  const q = query(categoryRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Category[];
};

export const createCategory = async (
  data: CategoryFormData
): Promise<string> => {
  const docRef = await addDoc(categoryRef, {
    ...data,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};
