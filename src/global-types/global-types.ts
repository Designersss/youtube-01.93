
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
    userId: string,
    video: string,
    title: string,
    image: string,
    comments: IDid[],
    like: number
}

export interface ILike {
    id?: number,
    userId: string,
    video: string,
    image: string,
}

export interface IDid {
    id?: number,
    userId: string,
    username: string
}