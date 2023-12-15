export interface PodiumCompetition {
  code: string
  status: any
  date: string
  startTime: string
  endTime: string
  location: string
  podium: PagePodium
}

export interface PagePodium {
  content: Content[]
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  first: boolean
  size: number
  number: number
  sort: Sort2
  numberOfElements: number
  empty: boolean
}

export interface Content {
  rank: number
  score: number
  num: number
  name: string
  familyName: string
  nationality: string
  nationalityFlag: string
  competitionCode: string
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  empty: boolean
  unsorted: boolean
  sorted: boolean
}

export interface Sort2 {
  empty: boolean
  unsorted: boolean
  sorted: boolean
}
