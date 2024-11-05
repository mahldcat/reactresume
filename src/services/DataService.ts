import { Bullets} from "../data/types";


export class DataService {
    private bulletDataUrl = 'data/bulletbreakdowns.json'; // URL to fetch the data

    async getBulletData(): Promise<Bullets> {
        try {
            const response = await fetch(this.bulletDataUrl);
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
