import { siteConfig } from "@/data/site";

export interface RepoResult {
  id: string;
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  htmlUrl: string;
  stars: number;
  forked: boolean;
}

/**
 * Abstraction over the GitHub API.
 *
 * Currently `fetchUserRepos` is NOT wired to the live GitHub API — it returns
 * the curated local project list so the UI works without a backend or token.
 *
 * To connect real data later:
 *  1. Set `GITHUB_TOKEN` in your environment (a fine-grained PAT with read access).
 *  2. Remove the `localMode` early-return and allow the fetch path to run.
 *  3. Optionally add server-side caching/ISR to avoid rate limits.
 *
 * The component layer only depends on this file's shape, so nothing else needs
 * to change when swapping to live data.
 */
export async function fetchUserRepos(): Promise<RepoResult[]> {
  const localMode = true;

  if (localMode) {
    const { projects } = await import("@/data/projects");
    return projects.map((p) => ({
      id: p.id,
      name: p.id,
      fullName: `${siteConfig.githubUsername}/${p.id}`,
      description: p.description,
      language: p.technologies[0] ?? null,
      htmlUrl: p.github ?? `${siteConfig.github}/${p.id}`,
      stars: 0,
      forked: false,
    }));
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured for live GitHub data.");
  }

  const res = await fetch(
    `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=20`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API request failed with status ${res.status}`);
  }

  const data = (await res.json()) as Array<{
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    language: string | null;
    html_url: string;
    stargazers_count: number;
    fork: boolean;
  }>;

  return data.map((repo) => ({
    id: String(repo.id),
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    language: repo.language,
    htmlUrl: repo.html_url,
    stars: repo.stargazers_count,
    forked: repo.fork,
  }));
}