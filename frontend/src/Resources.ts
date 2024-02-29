

export type UserResource = {
    id?: string
    username: string
    password?: string
    email: string
}

export type ProfileResource = {
    id?: string
    user: string
    nickname: string
}

export type BookResource = {
    id?: string
    title: string
    author?: string
    publisher?: string 
    address?: string
    edition?: number
    year?: Date 
    genre?: string
    owner: boolean
    location?: string
    borrowed_from?: string
    comments?: string
}

export type BookListResource = BookResource[]