export interface Bullets {
    technology: string[];
    languages: string[];
    devPractices: string[];
    hobbies: Hobby[];
}

export interface Hobby {
    name: string;
    properties?: string[]; // Optional, as not all hobbies have properties
}