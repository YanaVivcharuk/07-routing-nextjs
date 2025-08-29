import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function NotesSlugPage({ params }: Props) {
  const slug = (await params).slug || [];
  let tag: string | undefined = undefined;

  if (slug.length > 0 && slug[0].toLowerCase() !== "all") {
    tag = slug[0];
  }

  try {
    const data = await fetchNotes({ tag: tag });

    return <NotesClient initialData={data} tag={tag} />;
  } catch (error) {
    console.log("Error fetching notes:", error);
    return (
      <div>
        <p>Something went wrong while fetching the notes.</p>
      </div>
    );
  }
}
