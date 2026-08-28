import { defineQuery, groq } from 'next-sanity';

export const homepageQuery = groq`
  *[_type == "homepage"][0]{
    title,
    subtitle,
    highlight,
    "heroImageUrl": heroImage.asset->url
  }
`;

export const partnersQuery = groq`
  *[_type == "partner"]{
    _id,
    name,
    "logoUrl": logo.asset->url
  }
`;

export const galleryQuery = groq`
  *[_type == "gallery" && slug.current == $slug][0]{
    "items": images[]{
      _type,
      _key,
      _type == "image" => {
        "url": asset->url,
        alt
      },
      _type == "video" => {
        url,
        caption
      }
    }
  }
`;

export const teamsQuery = defineQuery(/* groq */ `
  *[_type == "teamMember"] | order(name asc, _id asc){
    _id,
    name,
    role,
    "image": image.asset->url,
    bio
  }
`);

export const programsQuery = groq`
  *[_type == "program"] | order(coalesce(publishedAt, _createdAt) desc, _id asc){
    _id,
    title,
    "slug": slug.current,
    "publishedAt": coalesce(publishedAt, _createdAt),
    summary,
    "mainImageUrl": mainImage.asset->url,
    body
  } 
`;

export const allGalleriesQuery = groq`
  *[_type == "gallery"] | order(coalesce(publishedAt, _createdAt) desc, _id asc){
    _id,
    title,
    "publishedAt": coalesce(publishedAt, _createdAt),
    "items": images[]{
      _type,
      _key,
      "publishedAt": coalesce(publishedAt, ^.publishedAt, ^._createdAt),
      _type == "image" => {
        "url": asset->url,
        alt
      },
      _type == "video" => {
        url,
        caption
      }
    }
  }
`;

export const homepageGalleryQuery = groq`
  *[_type == "homepageGallery"][0]{
    heading,
    subheading,
    "items": items[]{
      _type,
      _key,
      "publishedAt": coalesce(publishedAt, ^._updatedAt),
      _type == "image" => {
        "url": asset->url,
        alt,
        caption
      },
      _type == "video" => {
        url,
        caption
      }
    }
  }
`;

export const globalDataQuery = groq`{
  "hero": *[_type == "homepage"][0]{
    title,
    subtitle,
    highlight,
    "heroImageUrl": heroImage.asset->url
  },
  "partners": *[_type == "partner"]{
    _id,
    name,
    "logoUrl": logo.asset->url
  },
  "gallerySection": *[_type == "homepageGallery"][0]{
    heading,
    subheading,
    "items": items[]{
      _type,
      _key,
      "publishedAt": coalesce(publishedAt, ^._updatedAt),
      _type == "image" => {
        "url": asset->url,
        alt,
        caption
      },
      _type == "video" => {
        url,
        caption
      }
    }
  },
  "teams": *[_type == "teamMember"]{
    _id,
    name,
    role,
    "image": image.asset->url,
    bio
  },
  "programs": *[_type == "program"] | order(coalesce(publishedAt, _createdAt) desc, _id asc)[0...4]{
    _id,
    title,
    "slug": slug.current,
    "publishedAt": coalesce(publishedAt, _createdAt),
    summary,
    "mainImageUrl": mainImage.asset->url,
    body
  },
  "programCount": count(*[_type == "program"])
}`;

export const paginatedProgramsQuery = groq`
  *[_type == "program" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc, _id asc)[$start...$end]{
    _id, title, "slug": slug.current, "publishedAt": coalesce(publishedAt, _createdAt), summary,
    "mainImageUrl": mainImage.asset->url
  }
`;

export const homepageProgramsQuery = defineQuery(/* groq */ `{
  "programs": *[_type == "program" && defined(slug.current)]
    | order(coalesce(publishedAt, _createdAt) desc, _id asc)[0...4]{
      _id,
      title,
      "slug": slug.current,
      "publishedAt": coalesce(publishedAt, _createdAt),
      summary,
      "mainImageUrl": mainImage.asset->url
    },
  "programCount": count(*[_type == "program" && defined(slug.current)])
}`);

export const programSlugsQuery = defineQuery(/* groq */ `
  *[_type == "program" && defined(slug.current)]{ "slug": slug.current }
`);

export const programDetailQuery = defineQuery(/* groq */ `
  *[_type == "program" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "publishedAt": coalesce(publishedAt, _createdAt),
    summary,
    body,
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": coalesce(mainImage.alt, title),
      "lqip": mainImage.asset->metadata.lqip
    },
    "relatedPrograms": *[
      _type == "program" && _id != ^._id && defined(slug.current)
    ] | order(coalesce(publishedAt, _createdAt) desc, _id asc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      summary,
      "mainImageUrl": mainImage.asset->url
    }
  }
`);

export const paginatedGalleriesQuery = groq`
  *[_type == "gallery"] | order(coalesce(publishedAt, _createdAt) desc, _id asc)[$start...$end]{
    _id, title, "publishedAt": coalesce(publishedAt, _createdAt),
    "items": images[]{
      _type, _key,
      "publishedAt": coalesce(publishedAt, ^.publishedAt, ^._createdAt),
      _type == "image" => {"url": asset->url, alt},
      _type == "video" => {url, caption}
    }
  }
`;
