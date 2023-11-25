import Card from '@/components/Card'
import getAllApartments from '@/services/getAllApartments'
import axios from '@/utils/axios';
import Home from './_components/home';

export default async function page() {
     const apartments = await getAllApartments();
     return (
          <Home apartments={apartments.data}/>
     )
}
