import { Avatar, Badge, Button, TextInput } from "flowbite-react";
import { HiSearch, HiPlus, HiUserCircle } from 'react-icons/hi';
import { Label, Radio } from 'flowbite-react';
import { Client } from '@/types/Client';
import { getInitials } from '@/app/utils/Helpers';
import { ResponsePetType } from '@/types/Pet';


interface Props {
    pets: ResponsePetType[];
    selectedClient: Client | null;
    isLoadingClients: boolean;
    searchTerm: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContinue: () => void;
    handleClearSelectedClient: () => void;
    handleCreatePet: () => void;
    handlePetClick: (item: ResponsePetType) => void;
}

export default function SelectClient(props: Props) {

    return (
        <>
            <h3 className='text-xl font-medium mb-1'>Search existing client</h3>
            <p className='text-gray-500 font-normal'>Search for previously created clients.</p>
            <div className="mt-5 search-client-block selected-client-block">
                <TextInput
                    id="client_email_selected"
                    type="email"
                    className='text-gray-500'
                    icon={HiUserCircle}
                    value={`${props.selectedClient?.first_name || ''} ${props.selectedClient?.last_name || ''}`}
                    readOnly={true}
                    onChange={props.handleSearchChange}
                    autoComplete={"false"} />

                <div className="client_selected_info flex pt-6 pb-5 border-b border-gray-200">
                    <Avatar className="mr-2 avatar-client-info" size={"lg"} placeholderInitials={getInitials(props.selectedClient?.first_name, props.selectedClient?.last_name)} rounded color="purple" />
                    <div className="inline-flex items-start flex-col justify-center">
                        <h3 className="text-gray-900 text-lg font-medium">
                            {props.selectedClient?.first_name} {props.selectedClient?.last_name}
                        </h3>
                        <p className="text-gray-500 font-regurlar text-sm">
                            {props.selectedClient?.email}
                            {props.selectedClient?.phone && ` · ${props.selectedClient.phone}`}
                        </p>
                    </div>
                </div>

                <div className="client_pets_info flex flex-col pt-5 pb-5">
                    <h3 className="text-gray-900 text-md font-medium">
                        {props.selectedClient?.first_name}'s pets
                    </h3>
                    <p className="text-gray-500 font-regurlar text-sm">
                        Enter the pet information.
                    </p>
                </div>

                <div className="client_pets_list">
                    {props.pets.length > 0 && props.pets.map((item, index) => (
                        <div className={`item-pet-list rounded-lg border border-gray-200 ${index == 0 ? '' : 'my-4' }`} key={index} onClick={() => props.handlePetClick(item)}>
                            <Label htmlFor={index.toString()} className="pet-label-card w-full h-full relative block py-[12px] px-[14px] pl-9 cursor-pointer">
                                {item.type == 'dog' 
                                    ? 
                                    <Radio size={6} className="absolute left-3 top-4 !ring-offset-0 focus:ring-opacity-0" color="gray" id={index.toString()} name="pet" value="Pet 1"/>
                                    :
                                    <Radio className="absolute left-3 top-4 !ring-offset-0 focus:ring-opacity-0" color="gray" id={index.toString()} name="pet" value="Pet 2" />
                                }
                                <h4 className="text-md text-gray-900 font-medium first-letter-uppercase">{item.name}</h4>
                                <p className="text-sm font-regurlar text-gray-500 first-letter-uppercase">{item.breed} · {item.size}</p>
                                <Badge className="inline-flex absolute right-3 top-4" size="sm" color={item.type}><p className="first-letter-uppercase">{item.type}</p></Badge>
                            </Label>
                        </div>
                    ))}
                </div>
                
                <Button
                    size={'lg'}
                    className='bg-teal-400 transition-all duration-300 mt-6'
                    onClick={props.handleCreatePet}
                >
                    <HiPlus className="iconplus -ml-1 mr-1 h-5 w-5 text-white" /> Add pet
                </Button>
            </div>
        </>
    )
}