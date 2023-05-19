
// Schema
export interface Schema {
    _id: string;
    users: object;
    ecommerce: object;
    counts: object;
    field_count: number;
    thumb_count: number;
    object_count: number;
    task_count: number;
    view_count: number;
    scene_count: number;
    credential_count: number;
    status: string;
    settings: [];
    tasks: [];
    payment_precessors: [];
    design: object;
    layout: object;
    copying: boolean;
    feature_flags: [];
    name: string;
    slug: string;
    distributions: [];
    versions: Version[];
    first_created: string;
    account_id: string;
    user_id: string;
}

// Versions interface
export interface Version {
    _id: string;
    objects: Object[];
    scenes: Scene[];
}

// Objects and its fields
export interface Object {
    key: string;
    fields: Field[];
}
export interface Field {
    key: string;
}


// Scenes and its views
export interface Scene {
    key: string;
    views: View[];
}
export interface View {
    key: string;
}







