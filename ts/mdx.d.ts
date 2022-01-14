export interface FrontMatter {
  [key: string]: any;
}

// objects for querying all posts
export interface PublishedPost {
  frontMatter: FrontMatter;
  slug: string;
}

// object for a single post fetched
export interface SinglePost {
  code: string;
  frontMatter: FrontMatter;
}