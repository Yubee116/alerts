import AlertList from './AlertList';
import Loading from './Loading';
import Message from '../../Message';
import useFetch from './useFetch';

export default function Alerts() {
    const data = [
        { id: 23, type: 'Portal Opened', tag: ['test', 'staging'], description: 'This event occured in staging', origin: '192.168.0.184' },
        { id: 2, type: 'Portal Closed', tag: ['production'], description: 'This event occured in production', origin: '192.168.0.184' },
        { id: 3, type: 'Portal Opened', tag: ['dev'], description: 'This event occured in dev', origin: '192.168.0.184' }
    ]

    const { data: alerts, isLoading, error } = useFetch(`v1/alerts`)

    return (
        <div className='alerts'>
            
            <div className='flex justify-center'>
            <h1 className="mb-2 font-medium leading-tight align-center text-3xl"> All Alerts </h1>
            </div>
            { isLoading && <Loading /> }
            {/* { error && <Message message={error} /> } */}
            { error && <div>{error}</div> }
            { alerts && < AlertList alerts={alerts}/> }
        </div>
    )

}