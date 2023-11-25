import axios from '@/utils/axios';

const getApartmentDetails = async (id: String) => {
     return await axios.get(`/apartments/${id}`);
}

export default getApartmentDetails;