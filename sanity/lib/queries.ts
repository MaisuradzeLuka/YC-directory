import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[_type == 'startup' && defined(slug.current)]{
  _createdAt,
  category,
  slug,
  image,
  author -> {name, username, bio, _id, image},
  title,
  _id,
  views,
  descriptuon
}
`);
