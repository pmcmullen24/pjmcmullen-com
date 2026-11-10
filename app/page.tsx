// pjmcmullen.com: one column, a soft static gradient, no cards, no motion tricks.
// Rules: four type sizes only (13 label / 18 body / 22 title / 40 name),
// and projects, experience and education all use the same item layout.
import { education, experience, links, profile, projects } from "@/content";
import s from "./page.module.css";

type Item = {
  key: string;
  title: string;
  sub?: string;
  when: string;
  body?: string;
  meta?: string;
  url?: string;
};

function List({ label, items }: { label: string; items: Item[] }) {
  return (
    <section className={s.section}>
      <h2 className={s.label}>{label}</h2>
      <ul className={s.list}>
        {items.map((it) => (
          <li key={it.key} className={s.item}>
            <div className={s.itemHead}>
              {it.url ? (
                <a className={s.title} href={it.url} target="_blank" rel="noreferrer">
                  {it.title} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={s.title}>{it.title}</span>
              )}
              <span className={s.when}>{it.when}</span>
            </div>
            {it.sub && <p className={s.sub}>{it.sub}</p>}
            {it.body && <p className={s.body}>{it.body}</p>}
            {it.meta && <p className={s.meta}>{it.meta}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Calm() {
  const live = links.filter((l) => l.url);

  const projectItems: Item[] = projects.map((p) => ({
    key: p.name,
    title: p.name,
    when: p.year,
    body: p.body,
    meta: p.tags.join(" · "),
    url: p.url,
  }));

  const jobItems: Item[] = experience.map((j) => ({
    key: j.role + j.org,
    title: j.role,
    sub: j.place ? `${j.org}, ${j.place}` : j.org,
    when: j.dates,
    body: j.body,
    meta: j.tags?.join(" · "),
  }));

  const eduItems: Item[] = [
    { key: "edu", title: education.school, sub: education.degree, when: education.year },
  ];

  return (
    <div className={s.root}>
      <main className={s.column}>
        <header className={s.intro}>
          {profile.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={s.photo} src={profile.photo} alt={profile.name} />
          )}
          <h1 className={s.name}>{profile.name}</h1>
          <p className={s.label}>{profile.role} · {profile.location}</p>
          <div className={s.bio}>
            {profile.bio.map((p) => <p key={p}>{p}</p>)}
          </div>
          {live.length > 0 && (
            <p className={s.links}>
              {live.map((l) => (
                <a key={l.label} href={l.url!} target="_blank" rel="noreferrer">{l.label} ↗</a>
              ))}
            </p>
          )}
        </header>

        <List label="Projects" items={projectItems} />
        <List label="Experience" items={jobItems} />
        <List label="Education" items={eduItems} />
      </main>
    </div>
  );
}
