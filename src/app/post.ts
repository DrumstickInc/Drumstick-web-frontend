export class Post {
    id: number;
    user_id: number;
    community_id: number;
    tag_id: number;
    live_link: string;
    repo_link: string;
    post_heading: string;
    description: string;
    deadline: string;
    creation: string;
    is_open_source: boolean;
    is_paid: boolean;
    needs_contrib: boolean;
}
