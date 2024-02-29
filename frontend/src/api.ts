import { API_URL } from "./constants";


export async function getBookList(): Promise<any[]> {
    const url = `${API_URL}/books`;
    const response = await fetch(url);
    return response.json();
}