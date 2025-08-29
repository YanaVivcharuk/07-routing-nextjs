import Link from "next/link";
import TagsMenu from "../TagsMenu/TagsMenu";
import { tags } from "@/types/note";
import css from "./Header.module.css";

export default async function Header() {
  // const { notes } = await fetchNotes({});

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu tags={tags} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
