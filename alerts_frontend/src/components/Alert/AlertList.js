import { Link } from 'react-router-dom';

export default function AlertList({ alerts }) {

    return (
        <div className='alert-list flex justify-center '>
            <table className='text-sm text-left text-gray-500 w-3/4'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-300'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>ID</th>
                        <th scope='col' className='px-6 py-3'>Type</th>
                        <th scope='col' className='px-6 py-3'>Description</th>
                        <th scope='col' className='px-6 py-3'>Tag</th>
                        <th scope='col' className='px-6 py-3'>Origin</th>
                        <th scope='col' className='px-6 py-3'> <span className="sr-only">View</span></th>
                    </tr>
                </thead>
                <tbody>
                    {alerts.map((alert, idx) => {
                        return (
                            <tr key={idx} className='bg-white border-b hover:bg-gray-100' >
                                
                                <th scope='col' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap' > {alert.id} </th>
                                <td className='px-6 py-4 capitalize'>{alert.alert_type.replace(/_/g, ' ')}</td>
                                <td className='px-6 py-4 capitalize'> {alert.description}</td>
                                <td className='px-6 py-4'> {alert.tag.join(', ')}</td>
                                <td className='px-6 py-4'> {alert.origin} </td>
                                <td className='px-6 py-4'> <Link to={`/alerts/${alert.id}`} className="font-medium text-purple-600 hover:underline">View</Link> </td>
                                
                            </tr> 
                        );
                    })
                    }
                </tbody>
            </table>
        </div>
    )

}