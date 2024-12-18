import { groq } from "next-sanity";

const link = /* groq */ `
  label,
  type,
  type == "reference" => {
    "label": select(
      defined(label) => label,
      defined(reference->.title) => reference->.title,
      true => "link"
    ),
    reference->{
      _type,
      "slug": slug.current
    }
  },
  type == "pdf" => {
    "url": pdf.asset->url + "?dl"
  },
  type == "url" => {
    url
  },
  type == "phone" => {
    "url": "tel:" + phone
  },
  type == "email" => {
    "url": "mailto:" + email
  }
`;


const content = /* groq */ `
   content[]{
    ...,
    _type == "hero" => {
      _key,
      _type,
      title,
      text,
      primaryCta,
      secondaryCta,
      "socialLinks": *[_type == "configuration"][0]{
        socialLinks[]{
          _key,
          name,
          url,
          icon {
            name
          }
        }
      }.socialLinks
    },
    _type == "services" => {
      _type,
      _key,
      title,
      services[]->{
        _id,
        title,
        slug,
        description, 
        icon {
          name
        }
      }
    },
    _type == "projects" => {
      _key,
      _type,
      title, 
      text,
      projects[]-> {
        _id,
        "image": coverImage.asset->.url,
        title,
        "category": category->.name,
        "slug": slug.current,
        date
      }
    },
    _type == "testimonials" => {
      _key,
      _type,
      title, 
      testimonials[]{
        authorName,
        authorProfession,
        "authorImage": authorImage.asset->.url,
        text,
        _key
      }
    }, 
    _type == "pricing" => {
      _key, 
      _type,
      title,
      plans[]->{
        _id,
        title,
        text,
        currency,
        price,
        billingRate,
        billingCycle,
        features[]{
          _key,
          text,
          isIncluded
        },
        url
      }
    },
    _type == "blog" => {
      _key,
      _type,
      title, 
      blog[]->{
        _id,
        title,
        "slug": slug.current,
        "image": coverImage.asset->url,
        "plainText": pt::text(body),
        publishedAt
      }
    },
  }
`;

export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  showTitle,
  "slug": slug.current,
  "ogImage": ogImage.asset->url,
  "createdAt": _createdAt,
  description,
  ${content},
  "keywords": string::split(keywords, ","),
  _updatedAt,
  }
  `;

export const homePageQuery = groq`
 *[_type == "page" && _id == "home"][0]{
  ${content},
  _updatedAt
}

`;

export const footerQuery = groq`
  *[_type == "configuration"][0]{
  socialLinks[]{
    _key,
    name,
    url,
    icon {
      name
    }
  },
  footer{
  ...,
  sections[]{
    _key,
    title,
    links[]{
      _key,
      ${link}
    }
  }, 
  }
}
`;

export const projectsPageQuery = groq`
  *[_type == "project"]{
    _id,
    "slug": slug.current,
    title,
    "image": coverImage.asset->url,
    date,
    category->{
      name
    },
  }
`;

export const projectPageQuery = groq`
 *[_type == "project" && slug.current == $slug][0]{
  _id, 
  title, 
  "slug": slug.current,
  date,
  "image": coverImage.asset->.url,
  client,
  website,
  location,
  overview,
  "projects": *[_type == "project" && _id != ^._id] | order(publishedAt desc)[0..6] {
    _id,
    title,
    "image": coverImage.asset->.url,
    "slug": slug.current,
    "category": category->.name
  }
 }
`;

export const blogPageQuery = groq`
  *[_type == "post"][0..20] | order(publishedAt desc){
    _id,
    "slug": slug.current,
    title,
    "image": coverImage.asset->url,
    excerpt,
    "plainText": pt::text(body),
    publishedAt
  }
`;

export const postPageQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    excerpt,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    category-> {
      name,
      "slug": slug.current
    },
    tags[]->{
      "slug": slug.current,
      name
    },
    author->{
      name,
      twitter,
      "image": image.asset->url,
      "slug": slug.current
    },
    "plainText": pt::text(body),
    "keywords": string::split(keywords, ","),
    _updatedAt,

    "relatedPosts": *[
      _type == "post"
      && _id != ^._id 
      && count(tags[@._ref in ^.^.tags[]._ref]) > 0
    ][0..5]{
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      publishedAt,
      "plainText": pt::text(body)
    },

    "recentPosts": *[
      _type == "post" 
      && _id != ^._id
      && !(_id in *[
          _type == "post"
          && _id != ^.^._id 
          && count(tags[@._ref in ^.^.^.tags[]._ref]) > 0
        ]._id)
      ] | order(publishedAt desc)[0..5]{
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      publishedAt,
      "plainText": pt::text(body)
    }
  }
  `;

export const servicesPageQuery = groq`
   *[_type == "service"][0..20]{
     _id,
      title,
      slug,
      description, 
      icon { 
        name
      }
   }
 `;

export const servicePageQuery = groq`
  *[_type == "service" && slug.current == $slug][0]{
    _id, 
    title, 
    "slug": slug.current, 
    description, 
    overview,
    "services": *[_type == "service"]{
      _id,
      title, 
      "slug": slug.current
    }
  }
`;

export const sitemapQuery = groq`
 {
  "pages": *[_type == "page" && _id!="home"]{
    "slug": slug.current,
    "_createdAt": _createdAt
  },
  "blog": *[_type == "post"]{
    "slug": slug.current,
    "publishedAt": publishedAt
  },
  "services": *[_type == "service"]{
    "slug": slug.current,
    _createdAt
  },
  "projects": *[_type == "project"]{
    "slug": slug.current,
    _createdAt
  }
}
`;
