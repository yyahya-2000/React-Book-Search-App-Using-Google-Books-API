export type BookItem = {
 id: string
 imageUrl: string
 categories: string[]
 title: string
 authors: string[]
}

export type BookDetails = {
 id: string
 imageUrl: string
 categories: string[]
 title: string
 authors: string[]
 description: string
 publishedDate: string
 previewLink: string
 pageCount: number
}

export type UrlBreadcrumd = {
 link: string
 name: string
}