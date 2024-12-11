import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search ]{
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

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type == 'startup' && _id == $id ][0]{
  _createdAt,
  category,
  slug,
  image,
  author -> {name, username, bio, _id, image},
  title,
  _id,
  views,
  descriptuon,
  pitch
}
`);

export const STARTUP_WIEVS_QUERY =
  defineQuery(`*[_type == 'startup' && _id == $id ][0]{
  _id,
  views,
}
`);
