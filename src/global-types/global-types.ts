
export interface IUser {
    id?: number,
    email: string,
    password: string,
    username: string,
    subscriptions: IDid[],
    subscribers: IDid[],
    likeVideo: ILike[]
}

export interface IVideos {
    id?: number,
    userId: number,
    video: string,
    title: string,
    image: string,
    comments: IComments[],
    like: number
}

export interface ILike {
    id?: number,
    userId: number,
    video: string,
    image: string,
}

export interface IDid {
    id?: number,
    userId: number | undefined,
    username: string | undefined
}

export interface IComments {
    id?: number,
    userId: number | undefined,
    username: string,
    title: string
}