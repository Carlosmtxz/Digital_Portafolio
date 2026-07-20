import { createClient } from "@supabase/supabase-js";
import { MOCK_PROJECTS } from "../data/mockProjects";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;

/** Fetch all published projects, falling back to mock data when
 *  Supabase env vars are absent (local dev / demo mode). */
export async function fetchProjects() {
  if (!supabase) return { data: MOCK_PROJECTS, source: "mock" };
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_public", true)
    .order("sort_order", { ascending: true })
    .order("year", { ascending: false });
  if (error) {
    console.error("Supabase fetch failed, using mock data:", error.message);
    return { data: MOCK_PROJECTS, source: "mock" };
  }
  return { data, source: "supabase" };
}
