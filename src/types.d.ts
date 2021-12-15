/* eslint-disable camelcase */
export interface User {
  userId: string
  email: string
  admin: boolean
  level: number
  badges: number
}
export interface News {
  title: string
  description : string
  img: string
  redirect: string
  timestamp: string
}
export interface Bookmark {
  userId: string
  id: string
  title: string
  img: string
}
export interface Watched {
  userId: string
  id: string
  title: string
  img: string
  episode: number
}
export interface UserModified extends User {
  username: string
  discriminator: string
  avatar?: string
  banner?: string
  banner_color?: string
  accent_color?: string
}
export interface DataSafe {
  users: UserModified[]
  news: News[]
  bookmarks: Bookmark[]
  watched: Watched[]
}
export interface Meta {
  updated: number
}
