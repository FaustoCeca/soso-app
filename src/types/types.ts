export type Service = {
    id: number;
    created_at: string;
    title: string;
    description: string;
    image?: string;
}

export type Sound = {
    id: number;
    created_at: string;
    title: string;
    subtitle: string;
    description: string;
    category_id: number;
}

export type Category = {
    id: number;
    created_at: string;
    title: string;
}