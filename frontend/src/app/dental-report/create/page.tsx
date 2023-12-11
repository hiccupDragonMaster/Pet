'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/dashboard/Layout';
import { Avatar, Badge, Button, Dropdown, Label, Select, ListGroup, Checkbox, Radio } from 'flowbite-react';
import Image from 'next/image'
import { Datepicker } from 'flowbite-react';
import { HiSearch, HiPlus, HiUser, HiUserCircle } from 'react-icons/hi';
import CustomPagination from '@/components/ui/CustomPagination';

import { useAuth } from '@/contexts/authContext';
import { getInitials } from '@/app/utils/Helpers';

import { BsChevronDown } from 'react-icons/bs';


// Define an interface for the client
interface Client {
    name: string;
    email: string;
}

interface conditionType {
    id: string;
    name: string;
    checked: boolean;
}

interface toothConditionType {
    name: string;
    checked: boolean;
    parentId: number;
}

interface listItem {
    name: string;
    parentID: number;
}

interface list {
    name: string;
    id: string;
    checked: boolean;
    parentId : number;
}

const CreateDentalReport = () => {
    
    const { client, pet } = useAuth();
    const [conditions, setConditions] = useState<conditionType[]>([
        {id: "absess", name: "Absess", checked: false},
        {id: "attachment_loss", name: "Attachment Loss", checked: false},
        {id: "crowding", name: "Crowding", checked: false},
        {id: "epulis", name: "Epulis", checked: false},
        {id: "furcation", name: "Furcation", checked: false},
        {id: "gingvial_hyperplasis", name: "Gingival Hyperplasia", checked: false},
        {id: "gingival_recession", name: "Gingival Recession", checked: false},
        {id: "gingivitis", name: "Gingivitis", checked: false},
        {id: "malocclusion", name: "Malocclusion", checked: false},
        {id: "oral_mass", name: "Oral Mass", checked: false},
        {id: "periodontal_pocket", name: "Periodontal Pocket", checked: false},
        {id: "pyorrhea", name: "Pyorrhea", checked: false},
        {id: "stomatitis", name: "Stomatitis", checked: false},
        {id: "tooth_mobility", name: "Tooth Mobility", checked: false},
        {id: "malposition", name: "Malposition", checked: false},
    ]);
    const [toothConditions, setToothConditions] = useState<conditionType[]>([
        {id: "attrtion", name: "Attrition", checked: false},
        {id: "cavities", name: "Cavities", checked: false},
        {id: "enamel_defet", name: "Enamel defet", checked: false},
        {id: "enamel_stains", name: "Enamel stains", checked: false},
        {id: "injured_tooth", name: "Injured tooth", checked: false},
        {id: "missing_tooth", name: "Missing Tooth", checked: false},
        {id: "pulp_exposure", name: "Pulp Exposure", checked: false},
        {id: "retained_deciduous", name: "Retained Deciduous", checked: false},
        {id: "retained_root", name: "Retained Root", checked: false},
        {id: "supernumerary", name: "Supernumerary", checked: false}
    ]);
    const [list, setList] = useState<list[]>([]);
    const [listFinding, setListFinding] = useState<list[]>([]);

    // useEffect(() => {
    // }, []);
    
    const [toothListItem, setToothListItem] = useState<listItem[]>([]);
    const [findingListItem, setFindingListItem] = useState<listItem[]>([]);
    const [checkedToothConditions, setCheckedToothConditions] = useState<toothConditionType[]>([]);
    const [checkedConditions, setCheckedConditions] = useState<toothConditionType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();


    useEffect(() => {
        const user = localStorage.getItem('authToken');
        if (!user) {
            router.push('/');
        } else {
            setIsLogged(true);
        }
    }, [router]);

    useEffect(() => {
        setIsLoading(true);

        let newItems = [];

        // Iterate from 0 to 9 for parentId
        for (let parentId = 0; parentId < 10; parentId++) {
        // Add "All teeth" object for each parentId
        newItems.push({ name: "All teeth", id: "all_teeth", checked: false, parentId: parentId });

        // Initialize a counter for each parentId
        let countForParentId = 1; // "All teeth" item included

        // Random number generator function returning a string
        const getRandomNumberString = () => (108 + Math.floor(Math.random() * (150 - 108 + 1))).toString();

        // Add more items with random names and ids until there are at least 6 per parentId
        while (countForParentId < 6) {
            newItems.push({
            name: getRandomNumberString(),
            id: getRandomNumberString(),
            checked: false,
            parentId: parentId
            });
            countForParentId++;
        }
        }

        setList(newItems);

        let newFinding = [];

        // Iterate from 0 to 9 for parentId
        for (let parentId = 0; parentId < 15; parentId++) {
        // Add "All teeth" object for each parentId
        newFinding.push({ name: "All teeth", id: "all_teeth", checked: false, parentId: parentId });

        // Initialize a counter for each parentId
        let countForFindingParentId = 1; // "All teeth" item included

        // Random number generator function returning a string
        const getRandomNumberString = () => (108 + Math.floor(Math.random() * (150 - 108 + 1))).toString();

        // Add more items with random names and ids until there are at least 6 per parentId
        while (countForFindingParentId < 6) {
            newFinding.push({
            name: getRandomNumberString(),
            id: getRandomNumberString(),
            checked: false,
            parentId: parentId
            });
            countForFindingParentId++;
        }
        }

        setListFinding(newFinding);
    }, []);

    const handleContinue = () => {
        console.log("Continue clicked")
    }

    const handleBack = () => {
        console.log("Back clicked")
    }

    const handleOnChange = (id: number, name: string, parentId: number) => {
        setConditions(conditions.map((item, index) =>  id == index ? {...item, checked: !item.checked} : item));
        setCheckedConditions((prevArray) => {
            // Check if the name exists in the current array
            const existingObjectIndex = prevArray.findIndex(item => item.name === name);
      
            if (existingObjectIndex > -1) {
              // If the name exists, remove it from the array
              return prevArray.filter(item => item.name !== name);
            } else {
              // If the name doesn't exist, add a new object to the array
              return [...prevArray, { name: name, checked: false, parentId: parentId }];
            }
        });
    }

    const handleToothChange = (id: number, name: string, parentId: number) => {
        setToothConditions(toothConditions.map((item, index) =>  id == index ? {...item, checked: !item.checked} : item));
        
        setCheckedToothConditions((prevArray) => {
            // Check if the name exists in the current array
            const existingObjectIndex = prevArray.findIndex(item => item.name === name);
      
            if (existingObjectIndex > -1) {
              // If the name exists, remove it from the array
              return prevArray.filter(item => item.name !== name);
            } else {
              // If the name doesn't exist, add a new object to the array
              return [...prevArray, { name: name, checked: false, parentId: parentId }];
            }
        });
    }

    const handleTooth = (name: string) => {
        setCheckedToothConditions(checkedToothConditions.map((item, index) => item.name == name ? {...item, checked: !item.checked} : item));
    }

    const handleFinding = (name: string) => {
        setCheckedConditions(checkedConditions.map((item, index) => item.name == name ? {...item, checked: !item.checked}: item));
    }

    const handleListChange = (name: string, parentId: number, id: number) => {
        setList(list.map((item, index) => index == id && item.parentId == parentId ? {...item, checked: !item.checked} : item));
        setToothListItem((prevArray) => {
            const existingObjectIndex = prevArray.findIndex((item) => item.name === name && item.parentID === parentId);
            if(existingObjectIndex > -1) {
                return [
                    ...prevArray.slice(0, existingObjectIndex),
                    ...prevArray.slice(existingObjectIndex + 1)
                ];
            }else{
                return [...prevArray, {name: name, parentID: parentId}];
            }
        });
    }

    const handleFindingChange = (name: string, parentId: number, id: number) => {
        setListFinding(listFinding.map((item, index) => index == id && item.parentId == parentId ? {...item, checked: !item.checked} : item));
        setFindingListItem((prevArray) => {
            const existingObjectIndex = prevArray.findIndex((item) => item.name === name && item.parentID === parentId);
            if(existingObjectIndex > -1) {
                return [
                    ...prevArray.slice(0, existingObjectIndex),
                    ...prevArray.slice(existingObjectIndex + 1)
                ];
            }else{
                return [...prevArray, {name: name, parentID: parentId}];
            }
        });
    }

    const handleListItemClick = (listItem: listItem, parentId: number) => {
        setToothListItem((prev) => {
            const existing = prev.findIndex((item) => item.name === listItem.name && item.parentID === listItem.parentID);
            return [
                ...prev.slice(0, existing),
                ...prev.slice(existing + 1)
            ]
        })

        setList(list.map((item, index) => item.name == listItem.name && item.parentId == parentId ? {...item, checked:!item.checked} : item));
    }
    
    const handleFindingListItemClick = (listItem: listItem, parentId: number) => {
        setFindingListItem((prev) => {
            const existing = prev.findIndex((item) => item.name === listItem.name && item.parentID === listItem.parentID);
            return [
                ...prev.slice(0, existing),
                ...prev.slice(existing + 1)
            ]
        })

        setListFinding(listFinding.map((item, index) => item.name == listItem.name && item.parentId == parentId ? {...item, checked:!item.checked} : item));
    }

    // Your page content
    const content = (
        <>
            <div className='flex justify-between items-center pl-8 pr-8 pt-8 pb-10'>
                <div className="flex justify-center w-full">
                    <div className="container max-w-[1300px] mx-auto flex flex-col md:flex-row">
                        {/* Left Column */}
                        <div className="md:w-8/12 lg:w-7/12 lg:pr-10">
                            <div className='report-head flex justify-between'>
                                <div className="report-pet-info">
                                    <h3 className='text-lg font-medium mb-1 first-letter-uppercase'>{pet?.name} <Badge className="inline-flex ml-1 first-letter-uppercase" size="sm" color="dog">{pet?.type}</Badge></h3>
                                    <div className='flex'>
                                        <p className='text-gray-500 text-sm font-regular first-letter-uppercase'>{pet?.breed}</p>
                                        <p className='text-gray-500 text-sm font-regular first-letter-uppercase'> · {pet?.size} </p>
                                    </div>
                                </div>
                                <div className='report-pet-parent-info flex'>
                                    <Avatar className="mr-2 avatar-client-info" size={"lg"} placeholderInitials={getInitials(client?.first_name, client?.last_name)} rounded color="purple" />
                                    <div className="inline-flex items-start flex-col justify-center">
                                        <div className='flex gap-x-2'>
                                            <h3 className="text-gray-900 text-lg font-medium first-letter-uppercase">
                                                {client?.first_name} 
                                            </h3>
                                            <h3 className="text-gray-900 text-lg font-medium first-letter-uppercase">
                                                {client?.last_name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-500 font-regurlar text-sm">
                                            {client?.email} · {client?.phone}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-default mt-6">
                                <div className="default-form-block flex flex-wrap">
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full mb-5 px-3">
                                                <div className="mb-2 block">
                                                    <Label className='label-form' htmlFor="countries" value="Select staff" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>John Doe</option>
                                                    <option>Jame Hetfield</option>
                                                    <option>Bruce dickinson</option>
                                                    <option>Katy Perry</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <div className="mb-2 block">
                                                    <Label className='label-form' value="Appointment Date" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>John Doe</option>
                                                    <option>Jame Hetfield</option>
                                                    <option>Bruce dickinson</option>
                                                    <option>Katy Perry</option>
                                                </Select>
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <div className="mb-2 block">
                                                    <Label className='label-form' value="Location" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>Miami</option>
                                                    <option>Plantation</option>
                                                    <option>Fort Lauderdale</option>
                                                    <option>Texas</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Procedure record" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="hand_scale" className="mr-2"/>
                                                        <Label htmlFor="hand_scale" value="Hand scale" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="polished" className="mr-2"/>
                                                        <Label htmlFor="polished" value="Polished" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="oral_rinse" className="mr-2"/>
                                                        <Label htmlFor="oral_rinse" value="Oral rinse" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="routine" className="mr-2"/>
                                                        <Label htmlFor="routine" value="Routine" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="extended" className="mr-2"/>
                                                        <Label htmlFor="extended" value="Extended" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex gap-x-12'>
                                    <div>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Calculus" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Radio id="first" className="mr-2 text-black" name="calculus" value={1} />
                                                        <Label htmlFor="first">1</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="second" className="mr-2 text-black" name="calculus" value={2} />
                                                        <Label htmlFor="second">2</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="third" className="mr-2 text-black" name="calculus" value={3} />
                                                        <Label htmlFor="third">3</Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Plaque" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Radio id="one" className="mr-2 text-black" name="plaque" value={1} />
                                                        <Label htmlFor="one">1</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="two" className="mr-2 text-black" name="plaque" value={2} />
                                                        <Label htmlFor="two">2</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="three" className="mr-2 text-black" name="plaque" value={3} />
                                                        <Label htmlFor="three">3</Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3 flex items-center justify-between">
                                                <div className="block">
                                                    <p className='label-form'> Tooth abnormalities </p>
                                                </div>
                                                <Dropdown className='h-48 overflow-y-scroll scrollbar-style' label="Add conditions" style={{background: "#16BDCA"}} dismissOnClick={false}>
                                                    {toothConditions.map((item, index) => (
                                                            <Dropdown.Item key={index}>
                                                                <Checkbox id={item.id} className="mr-2 text-black" name={item.name} checked={item.checked} onChange={() => handleToothChange(index, item.name, index)}/>
                                                                <Label htmlFor={item.id} value={item.name} />
                                                            </Dropdown.Item>
                                                    ))}
                                                </Dropdown>
                                            </div>
                                            <div className="w-full grid grid-cols-2 px-3 gap-x-6">
                                                {checkedToothConditions.map((item, index) => (
                                                    <div>
                                                        <div className='mb-2'>
                                                            <Label htmlFor={item.name} value={item.name}/>
                                                        </div>
                                                        <div className='gap-x-6 relative'>
                                                            <div className='flex rounded-lg border border-gray-300 border-solid justify-between px-4 py-3 mb-3 items-center' onClick={() => handleTooth(item.name)}>
                                                                <Label htmlFor="all_tooth" value="Select teeth" className='text-gray-500'/>
                                                                <BsChevronDown className='text-gray-500 w-3 h-3'/>
                                                            </div>
                                                            {item.checked &&
                                                                <ListGroup className='py-4 absolute top-14 lef-0 w-full z-10'>
                                                                    {list.map((listItem, id) => (
                                                                        <>
                                                                            {listItem.parentId == item.parentId &&
                                                                                <ListGroup.Item style={{borderBottom: 'none'}} key={id}>
                                                                                    <Checkbox className="mr-2 text-black" checked={listItem.checked} onChange={() => handleListChange(listItem.name, item.parentId, id)}/>
                                                                                    <Label value={listItem.name} className='text-gray-500'/>
                                                                                </ListGroup.Item>
                                                                            }
                                                                        </>
                                                                    ))}
                                                                </ListGroup>
                                                            }
                                                        </div>
                                                        {!item.checked && 
                                                            <div className='flex flex-wrap'>
                                                                {toothListItem.map((listItem, index) => (
                                                                    <div>
                                                                    {listItem.parentID == item.parentId && 
                                                                        <div key={index} className='flex items-center gap-x-2 mr-2 mb-2 bg-gray-200 rounded-md px-2 py-0.5'>
                                                                            <p>{listItem.name}</p>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" onClick={() => handleListItemClick(listItem, item.parentId)}>
                                                                                <path d="M8.33202 7.50719L11.4196 4.41961C11.4753 4.36579 11.5198 4.30143 11.5503 4.23026C11.5809 4.15909 11.597 4.08254 11.5977 4.00509C11.5983 3.92763 11.5836 3.85082 11.5543 3.77913C11.5249 3.70744 11.4816 3.64231 11.4268 3.58754C11.3721 3.53277 11.3069 3.48946 11.2352 3.46013C11.1636 3.4308 11.0867 3.41604 11.0093 3.41671C10.9318 3.41738 10.8553 3.43347 10.7841 3.46405C10.713 3.49462 10.6486 3.53906 10.5948 3.59477L7.50719 6.68236L4.41961 3.59477C4.30959 3.48851 4.16224 3.42972 4.00929 3.43105C3.85634 3.43237 3.71003 3.49372 3.60188 3.60188C3.49372 3.71003 3.43237 3.85634 3.43105 4.00929C3.42972 4.16224 3.48851 4.30959 3.59477 4.41961L6.68236 7.50719L3.59477 10.5948C3.53906 10.6486 3.49462 10.713 3.46405 10.7841C3.43347 10.8553 3.41738 10.9318 3.41671 11.0093C3.41604 11.0867 3.4308 11.1636 3.46013 11.2352C3.48946 11.3069 3.53277 11.3721 3.58754 11.4268C3.64231 11.4816 3.70744 11.5249 3.77913 11.5543C3.85082 11.5836 3.92763 11.5983 4.00509 11.5977C4.08254 11.597 4.15909 11.5809 4.23026 11.5503C4.30143 11.5198 4.36579 11.4753 4.41961 11.4196L7.50719 8.33202L10.5948 11.4196C10.7048 11.5259 10.8521 11.5847 11.0051 11.5833C11.158 11.582 11.3043 11.5207 11.4125 11.4125C11.5207 11.3043 11.582 11.158 11.5833 11.0051C11.5847 10.8521 11.5259 10.7048 11.4196 10.5948L8.33202 7.50719Z" fill="#6B7280"/>
                                                                            </svg>
                                                                        </div>
                                                                    }
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3 mb-2 flex items-center justify-between">
                                                <div className="block">
                                                    <p className='label-form'> Periodontal findings </p>
                                                </div>
                                                <Dropdown className='h-48 overflow-y-scroll scrollbar-style' label="Add conditions" style={{background: "#16BDCA"}} dismissOnClick={false}>
                                                    {conditions.map((item, index) => (
                                                        <Dropdown.Item key={index}>
                                                            <Checkbox id={item.id} name={item.id} checked={item.checked} className="mr-2 text-black" onChange={() => handleOnChange(index, item.name, index)}/>
                                                            <Label htmlFor={item.id} value={item.name} />
                                                        </Dropdown.Item>
                                                    ))}
                                                </Dropdown>
                                            </div>
                                            <div className="w-full grid grid-cols-2 px-3 gap-x-6">
                                                {checkedConditions.map((item, index) => (
                                                    <div key={index}>
                                                        <div className='mb-2'>
                                                            <Label htmlFor={item.name} value={item.name}/>
                                                        </div>
                                                        <div className='relative gap-x-6'>
                                                            <div className='flex rounded-lg border border-gray-300 border-solid justify-between px-4 py-3 mb-3 items-center' onClick={() => handleFinding(item.name)}>
                                                                <Label htmlFor="all_periodontal" value="Select teeth" className='text-gray-500'/>
                                                                <BsChevronDown className='text-gray-500 w-3 h-3'/>
                                                            </div>
                                                            {item.checked &&
                                                                <ListGroup className='py-4 absolute top-14 lef-0 w-full z-10'>
                                                                    {listFinding.map((listItem, id) => (
                                                                        <>
                                                                            {listItem.parentId == item.parentId &&
                                                                                <ListGroup.Item style={{borderBottom: 'none'}} key={id}>
                                                                                    <Checkbox className="mr-2 text-black" checked={listItem.checked} onChange={() => handleFindingChange(listItem.name, item.parentId, id)}/>
                                                                                    <Label value={listItem.name} className='text-gray-500'/>
                                                                                </ListGroup.Item>
                                                                            }
                                                                        </>
                                                                    ))}
                                                                </ListGroup>
                                                            }
                                                        </div>
                                                        {!item.checked && 
                                                            <div className='flex flex-wrap'>
                                                                {findingListItem.map((listItem, index) => (
                                                                    <div>
                                                                    {listItem.parentID == item.parentId && 
                                                                        <div key={index} className='flex items-center gap-x-2 mr-2 mb-2 bg-gray-200 rounded-md px-2 py-0.5'>
                                                                            <p>{listItem.name}</p>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" onClick={() => handleFindingListItemClick(listItem, item.parentId)}>
                                                                                <path d="M8.33202 7.50719L11.4196 4.41961C11.4753 4.36579 11.5198 4.30143 11.5503 4.23026C11.5809 4.15909 11.597 4.08254 11.5977 4.00509C11.5983 3.92763 11.5836 3.85082 11.5543 3.77913C11.5249 3.70744 11.4816 3.64231 11.4268 3.58754C11.3721 3.53277 11.3069 3.48946 11.2352 3.46013C11.1636 3.4308 11.0867 3.41604 11.0093 3.41671C10.9318 3.41738 10.8553 3.43347 10.7841 3.46405C10.713 3.49462 10.6486 3.53906 10.5948 3.59477L7.50719 6.68236L4.41961 3.59477C4.30959 3.48851 4.16224 3.42972 4.00929 3.43105C3.85634 3.43237 3.71003 3.49372 3.60188 3.60188C3.49372 3.71003 3.43237 3.85634 3.43105 4.00929C3.42972 4.16224 3.48851 4.30959 3.59477 4.41961L6.68236 7.50719L3.59477 10.5948C3.53906 10.6486 3.49462 10.713 3.46405 10.7841C3.43347 10.8553 3.41738 10.9318 3.41671 11.0093C3.41604 11.0867 3.4308 11.1636 3.46013 11.2352C3.48946 11.3069 3.53277 11.3721 3.58754 11.4268C3.64231 11.4816 3.70744 11.5249 3.77913 11.5543C3.85082 11.5836 3.92763 11.5983 4.00509 11.5977C4.08254 11.597 4.15909 11.5809 4.23026 11.5503C4.30143 11.5198 4.36579 11.4753 4.41961 11.4196L7.50719 8.33202L10.5948 11.4196C10.7048 11.5259 10.8521 11.5847 11.0051 11.5833C11.158 11.582 11.3043 11.5207 11.4125 11.4125C11.5207 11.3043 11.582 11.158 11.5833 11.0051C11.5847 10.8521 11.5259 10.7048 11.4196 10.5948L8.33202 7.50719Z" fill="#6B7280"/>
                                                                            </svg>
                                                                        </div>
                                                                    }
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="homw_care" value="Home care" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="brushing" className="mr-2"/>
                                                        <Label htmlFor="brushing" value="Brushing" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="rinsing" className="mr-2"/>
                                                        <Label htmlFor="rinsing" value="Rinsing" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="dry_food" className="mr-2"/>
                                                        <Label htmlFor="dry_food" value="Dry food" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="soft_food" className="mr-2"/>
                                                        <Label htmlFor="soft_food" value="Soft food" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Recommendations" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="vet_evaluation" className="mr-2"/>
                                                        <Label htmlFor="vet_evaluation" value="Vet evaluation" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="anesthetic_dental" className="mr-2"/>
                                                        <Label htmlFor="anesthetic_dental" value="Anesthetic dental" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="photos" value="Before & after photos" />
                                                </div>
                                                <div className='grid grid-cols-2 gap-x-4 text-center'>
                                                    <div className='flex flex-col justify-center items-center flex-shrink-0 border-dashed border-2 rounded-lg py-14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                            <path d="M21.3199 4.6841L21.3203 4.68455L27.9837 11.5185C28.196 11.7455 28.3155 12.0512 28.3128 12.3709C28.3101 12.692 28.1844 12.9966 27.9667 13.2199C27.7494 13.4428 27.458 13.5669 27.1562 13.5696C26.8556 13.5723 26.5636 13.4544 26.343 13.2373L22.5246 9.32126L21.6666 8.44131V9.67032V24.3467C21.6666 24.6714 21.5407 24.9804 21.3205 25.2063C21.1007 25.4317 20.8053 25.556 20.5 25.556C20.1947 25.556 19.8993 25.4317 19.6795 25.2063C19.4592 24.9804 19.3333 24.6714 19.3333 24.3467V9.67032V8.44131L18.4753 9.32126L14.6537 13.2408L14.6534 13.241C14.4336 13.4668 14.138 13.5914 13.8325 13.5916C13.5269 13.5918 13.2312 13.4677 13.0111 13.2422C12.7905 13.0163 12.6643 12.7072 12.6641 12.3822C12.6638 12.0573 12.7895 11.7481 13.0096 11.5219C13.0097 11.5218 13.0098 11.5217 13.0099 11.5216L19.6763 4.68455L19.6767 4.6841C19.7857 4.57205 19.9145 4.48385 20.0553 4.42391C20.1961 4.36398 20.3466 4.33331 20.4983 4.33331C20.65 4.33331 20.8005 4.36399 20.9413 4.42391C21.0821 4.48385 21.2109 4.57205 21.3199 4.6841ZM26 24.3467V23.992H33.8333C34.5806 23.992 35.3 24.2963 35.8323 24.8423C36.3651 25.3888 36.6666 26.1326 36.6666 26.9107V33.748C36.6666 34.5261 36.3651 35.2698 35.8323 35.8163C35.3 36.3623 34.5806 36.6666 33.8333 36.6666H7.16665C6.41934 36.6666 5.7 36.3623 5.16762 35.8163C4.63481 35.2698 4.33331 34.5261 4.33331 33.748V26.9107C4.33331 26.1326 4.63481 25.3888 5.16762 24.8423C5.7 24.2963 6.41934 23.992 7.16665 23.992H15V24.3467C15 25.8353 15.5765 27.2654 16.6065 28.3218C17.6369 29.3786 19.0372 29.9747 20.5 29.9747C21.9628 29.9747 23.3631 29.3786 24.3935 28.3218C25.4235 27.2654 26 25.8353 26 24.3467ZM27.9951 33.7283C28.4887 34.0666 29.0704 34.248 29.6666 34.248C30.4664 34.248 31.2308 33.922 31.7924 33.3461C32.3536 32.7705 32.6666 31.9926 32.6666 31.184C32.6666 30.5808 32.4923 29.9901 32.1643 29.4866C31.8361 28.9829 31.3684 28.5884 30.8189 28.355C30.2691 28.1214 29.6634 28.0601 29.079 28.1793C28.4946 28.2986 27.9596 28.5925 27.5409 29.0219C27.1223 29.4512 26.8386 29.9966 26.7238 30.5886C26.609 31.1805 26.6679 31.7941 26.8933 32.3524C27.1189 32.9108 27.5016 33.3901 27.9951 33.7283Z" fill="#9CA3AF" stroke="#9CA3AF"/>
                                                        </svg>
                                                        <div className='my-3'>
                                                            <p className='not-italic text-base font-semibold text-gray-500'> Before photo </p>
                                                            <p className='not-italic font-normal text-sm text-gray-500'> Press to upload or drag and drop </p>
                                                        </div>
                                                        <div>
                                                            <p className='not-italic font-normal text-xs text-gray-500'> JPG or PNG (Max. 800x400px) </p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-center items-center flex-shrink-0 border-dashed border-2 rounded-lg py-14'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                                <path d="M21.3199 4.6841L21.3203 4.68455L27.9837 11.5185C28.196 11.7455 28.3155 12.0512 28.3128 12.3709C28.3101 12.692 28.1844 12.9966 27.9667 13.2199C27.7494 13.4428 27.458 13.5669 27.1562 13.5696C26.8556 13.5723 26.5636 13.4544 26.343 13.2373L22.5246 9.32126L21.6666 8.44131V9.67032V24.3467C21.6666 24.6714 21.5407 24.9804 21.3205 25.2063C21.1007 25.4317 20.8053 25.556 20.5 25.556C20.1947 25.556 19.8993 25.4317 19.6795 25.2063C19.4592 24.9804 19.3333 24.6714 19.3333 24.3467V9.67032V8.44131L18.4753 9.32126L14.6537 13.2408L14.6534 13.241C14.4336 13.4668 14.138 13.5914 13.8325 13.5916C13.5269 13.5918 13.2312 13.4677 13.0111 13.2422C12.7905 13.0163 12.6643 12.7072 12.6641 12.3822C12.6638 12.0573 12.7895 11.7481 13.0096 11.5219C13.0097 11.5218 13.0098 11.5217 13.0099 11.5216L19.6763 4.68455L19.6767 4.6841C19.7857 4.57205 19.9145 4.48385 20.0553 4.42391C20.1961 4.36398 20.3466 4.33331 20.4983 4.33331C20.65 4.33331 20.8005 4.36399 20.9413 4.42391C21.0821 4.48385 21.2109 4.57205 21.3199 4.6841ZM26 24.3467V23.992H33.8333C34.5806 23.992 35.3 24.2963 35.8323 24.8423C36.3651 25.3888 36.6666 26.1326 36.6666 26.9107V33.748C36.6666 34.5261 36.3651 35.2698 35.8323 35.8163C35.3 36.3623 34.5806 36.6666 33.8333 36.6666H7.16665C6.41934 36.6666 5.7 36.3623 5.16762 35.8163C4.63481 35.2698 4.33331 34.5261 4.33331 33.748V26.9107C4.33331 26.1326 4.63481 25.3888 5.16762 24.8423C5.7 24.2963 6.41934 23.992 7.16665 23.992H15V24.3467C15 25.8353 15.5765 27.2654 16.6065 28.3218C17.6369 29.3786 19.0372 29.9747 20.5 29.9747C21.9628 29.9747 23.3631 29.3786 24.3935 28.3218C25.4235 27.2654 26 25.8353 26 24.3467ZM27.9951 33.7283C28.4887 34.0666 29.0704 34.248 29.6666 34.248C30.4664 34.248 31.2308 33.922 31.7924 33.3461C32.3536 32.7705 32.6666 31.9926 32.6666 31.184C32.6666 30.5808 32.4923 29.9901 32.1643 29.4866C31.8361 28.9829 31.3684 28.5884 30.8189 28.355C30.2691 28.1214 29.6634 28.0601 29.079 28.1793C28.4946 28.2986 27.9596 28.5925 27.5409 29.0219C27.1223 29.4512 26.8386 29.9966 26.7238 30.5886C26.609 31.1805 26.6679 31.7941 26.8933 32.3524C27.1189 32.9108 27.5016 33.3901 27.9951 33.7283Z" fill="#9CA3AF" stroke="#9CA3AF"/>
                                                            </svg>
                                                        </div>
                                                        <div className='my-3'>
                                                            <p className='not-italic text-base font-semibold text-gray-500'> After photo </p>
                                                            <p className='not-italic font-normal text-sm text-gray-500'> Press to upload or drag and drop </p>
                                                        </div>
                                                        <div>
                                                            <p className='not-italic font-normal text-xs text-gray-500'> JPG or PNG (Max. 800x400px) </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="photos" value="Additional notes" />
                                                </div>
                                                <textarea className='w-full rounded-lg border-2 border-solid border-gray-300 h-44' placeholder='Write text here...'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="homw_care" value="Next dental date" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="first_period" className="mr-2"/>
                                                        <Label htmlFor="first_period" value="3 months" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="second_period" className="mr-2"/>
                                                        <Label htmlFor="second_period" value="4 months" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="third_period" className="mr-2"/>
                                                        <Label htmlFor="third_period" value="6 months" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="fourth_period" className="mr-2"/>
                                                        <Label htmlFor="fourth_period" value="1 year" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:w-4/12 lg:w-5/12 md:ml-4">
                            <div className="teeth-image-wrapper flex justify-center">
                                <Image src={'/images/dog-teeth.png'} alt="Dog teeth" width={300} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex p-5 border justify-between items-center fixed bottom-0 left-0 w-full bg-white screen-bottom-actions'>
                <Button 
                    href='/dental-report/client'
                    size={'lg'}
                    color="light"
                    className='button-action'
                    onClick={handleBack}>
                        Back
                </Button>

                <Button
                    size={'lg'}
                    className='bg-teal-400 button-action transition-all duration-300'
                    onClick={handleContinue}
                >Create report</Button>
            </div>
        </>

    );

    return (
        <>
            {isLoading && isLogged && (
                <Layout showSidebar={false} navbarType='simple' exitLink={'/dental-report'} bottomNav={true}>
                    {content}
                </Layout>
            )}
        </>
    );
};

export default CreateDentalReport;