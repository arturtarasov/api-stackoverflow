export interface Url {
    protocol: string;
    hostname: string;
    version: string;
    method: string;
    order?: string;
    sort?: string;
    intitle?: string;
    site: string;
    filter?: string;
}

export interface Api {
    answer_count: number;
    tags: Array<string>;
    owner: {
        display_name: string;

    };
    title: string;
    body?: string;
}