import axios from '@/utils/axios';

const getAllApartments = async () => {
     return await axios.get('/apartments');
}

export default getAllApartments;