export default interface Repository {
    id: number;
    name: string;
    commits_on_main: number;
    html_url: string;
    description: string;
    stars_count:number;

    collaborators: collaborator[];

    originalOwner: {
        id: number;
        login: string;
        avatar_url: string;
        html_url: string;
    }

    languages_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    language: string;
    topics: string[];
    visibility: string;
    fork: boolean;
    languages: string[];
}

interface collaborator {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}
