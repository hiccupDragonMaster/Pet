import { Button, TextInput } from "flowbite-react";
import { HiSearch, HiPlus, HiUserCircle } from 'react-icons/hi';
import { Client } from '@/types/Client';


interface Props {
    clients: Client[];
    isLoadingClients: boolean;
    searchTerm: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContinue: () => void;
    handleClientSelect: (client: Client) => void;
    handleCreateClient: () => void;
}

export default function SelectClient(props: Props) {

    return (
        <>
            <h3 className='text-xl font-medium mb-1'>Select client</h3>
            <p className='text-gray-500 font-normal'>Search by existing client or add a new one.</p>
            <div className="mt-5 search-client-block">
                <TextInput
                    id="email4"
                    type="email"
                    className='text-gray-500'
                    icon={HiSearch}
                    placeholder="Search by client name or email"
                    required
                    value={props.searchTerm}
                    onChange={props.handleSearchChange}
                    autoComplete={"false"} />
                {props.searchTerm && (
                    <div className="results-box p-4 bg-white border border-solid border-gray-300 rounded-lg mt-5">
                        <h3 className='mb-3 text-lg font-medium'>Clients found</h3>
                        {props.isLoadingClients ? (
                            <p className='text-gray-500 font-regurlar text-sm'>Loading clients...</p>
                        ) : props.clients.length > 0 ? (
                            <ul className='clients-results'>
                                {props.clients.map((client, index) => (
                                    <li key={index}
                                        onClick={() => props.handleClientSelect(client)} 
                                        className='flex items-center mb-2 cursor-pointer'>
                                        <HiUserCircle className="iconuser mr-1 h-5 w-5 !text-black" />
                                        <span className='text-gray-500 text-sm'>{client.first_name} {client.last_name}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='text-gray-500 font-regurlar text-sm'>No clients found, try again or add a new one.</p>
                        )}
                    </div>
                )}
                <Button
                    size={'lg'}
                    className='bg-teal-400 transition-all duration-300 mt-6'
                    onClick={props.handleCreateClient}
                >
                    <HiPlus className="iconplus -ml-1 mr-1 h-5 w-5 text-white" /> Add client
                </Button>
            </div>
        </>
    )
}