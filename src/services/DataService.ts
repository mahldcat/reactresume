import { Bullets} from "../data/types";
import config from '../config.json';


export class DataService {
    private bulletDataUrl= config.bulletDataUrl; // URL to fetch the data

    async getBulletData(): Promise<Bullets> {
        try {
            const response = await fetch(this.bulletDataUrl+ "v1/resume/expertise");
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const data: Bullets = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to fetch bullet data:', error);
            throw error;
        }
    }
}
