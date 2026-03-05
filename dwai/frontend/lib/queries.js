import { groq } from 'next-sanity';

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

export const teamsQuery = groq`
  *[_type == "teamMember"]{
    _id,
    name,
    role,
    "image": image.asset->url,
    bio
  }`

export const programsQuery = groq`
  *[_type == "program"]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    summary,
    "mainImageUrl": mainImage.asset->url,
    body
  } 
`;

export const allGalleriesQuery = groq`
  *[_type == "gallery"]{
    _id,
    title,
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

export const homepageGalleryQuery = groq`
  *[_type == "homepageGallery"][0]{
    heading,
    subheading,
    "items": items[]{
      _type,
      _key,
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
  "programs": *[_type == "program"]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    summary,
    "mainImageUrl": mainImage.asset->url,
    body
  }
}`;