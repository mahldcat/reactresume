export interface Bullets {
    technology: string[];
    languages: string[];
    devPractices: string[];
    hobbies: Hobby[];
}

export interface Hobby {
    Name: string;
    Properties?: string[]; // Optional, as not all hobbies have properties
}