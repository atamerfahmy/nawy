import getApartmentDetails from '@/services/getApartmentDetails'
import { IApartment } from '@/types/apartment';
import capitalizeFirstLetter from '@/utils/capitalize';
import dateFormatter from '@/utils/dateFormatter';
import Link from 'next/link';

export default async function page({ params }: { params: { id: String } }) {
     const { data }: { data: IApartment } = await getApartmentDetails(params.id);
     return (
          <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-8">
               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="md:flex-1 px-4">
                         <Link href={`/`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">
                              Back
                         </Link>
                         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{capitalizeFirstLetter(data.type)} - {data.address}</h2>
                         {
                              data.compound && (
                                   <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {data.compound}
                                   </p>
                              )
                         }
                         <div className="flex flex-col gap-1 mb-4">
                              <div>
                                   <span className="font-bold text-gray-700 dark:text-gray-300">Area: </span>
                                   <span className="text-gray-600 dark:text-gray-300">{data.area.toFixed(1)}</span>
                              </div>
                              <div className="mr-4">
                                   <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                   <span className="text-gray-600 dark:text-gray-300">{data.price.toFixed(2)} {data.currency}</span>
                              </div>
                              <div>
                                   <span className="font-bold text-gray-700 dark:text-gray-300">Rooms: </span>
                                   <span className="text-gray-600 dark:text-gray-300">{data.rooms.toFixed(0)}</span>
                              </div>
                              <div>
                                   <span className="font-bold text-gray-700 dark:text-gray-300">Owner: </span>
                                   <span className="text-gray-600 dark:text-gray-300">{data.owner}</span>
                              </div>
                              <div>
                                   <span className="font-bold text-gray-700 dark:text-gray-300">Created at: </span>
                                   <span className="text-gray-600 dark:text-gray-300">{dateFormatter(data.createdAt)}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
