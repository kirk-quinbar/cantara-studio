import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';

interface GalleryItem {
    image: string;
    title: string;
    dateTime: string;
}

export const useGalleryStore = defineStore('Gallery', {
    state: () => ({
        gallery: [] as GalleryItem[]
    }),
    getters: {},
    actions: {
        // Fetch followers from action
        async fetchGallery() {
            try {
                const response = await axios.get('/api/gallery/list');
                this.gallery = response.data.gallery;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
