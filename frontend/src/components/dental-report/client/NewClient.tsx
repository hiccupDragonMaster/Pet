import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Label, TextInput, Select, Radio } from "flowbite-react";
import { HiSearch, HiPlus, HiUserCircle } from 'react-icons/hi';
import { AddClientType } from '@/types/Client';
import { eventNames } from 'process';
import { AddPetType } from '@/types/Pet';

import { getGender, getAge, getSize, getBreed } from '@/api/item';
import { AgeType, BreedType, GenderType, SizeType } from '@/types/Item';

interface Props {
    clientData: AddClientType;
    petData: AddPetType;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handlePetNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handlePetChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handlePetTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NewClient(props: Props) {
    const authToken = localStorage.getItem('authToken');
    const [gender, setGender] = useState<GenderType[]>([]);
    const [age, setAge] = useState<AgeType[]>([]);
    const [size, setSize] = useState<SizeType[]>([]);
    const [breed, setBreed] = useState<BreedType[]>([]);

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        getAllBreed(props.petData.pet_type_id);
    }, [props.petData.pet_type_id]);

    const init = async () => {
        const {data: {data: genderData}} = await getGender(authToken);
        const {data: {data: ageData}} = await getAge(authToken);
        const {data: {data: sizeData}} = await getSize(authToken);
        genderData && setGender(genderData);
        ageData && setAge(ageData);
        sizeData && setSize(sizeData);
    }

    const getAllBreed = async (id: number) => {
        const {data: {data: breedData}} = await getBreed(id, authToken);
        breedData && setBreed(breedData);
    }

    return (
        <>
            <h3 className='text-xl font-medium mb-1'>New client</h3>
            <p className='text-gray-500 font-normal'>Enter the client's personal information.</p>
            <div className='mt-5 grid gap-x-4 grid-cols-2'>
                <div>
                    <Label className='label-form' htmlFor="first_name" value="First Name" />
                    <TextInput id="first_name" className="mt-2" name="first_name" type="text" value={props.clientData.first_name} onChange={props.handleChange} required/>
                </div>
                <div>
                    <Label className='label-form' htmlFor="last_name" value="Second Name" />
                    <TextInput id="last_name" className="mt-2" name="last_name" type="text" value={props.clientData.last_name} onChange={props.handleChange} required/>
                </div>
            </div>
            <div className='mt-3'>
                <Label className='label-form' htmlFor="email" value="Email" />
                <TextInput id="email" type="email" className="mt-2" name="email" value={props.clientData.email} onChange={props.handleChange} required/>
            </div>
            <div className='mt-3'>
                <Label className='label-form' htmlFor="phone_number" value="Phone number" />
                <div className="grid grid-cols-4 gap-x-4">
                    <div className="col-span-1">
                        <Select id="countries" className="select-option font-normal mt-2" required disabled>
                            <option value="US">US</option>
                        </Select>
                    </div>
                    <div className="col-span-3">
                        <TextInput id="phone_number" className="mt-2" type="tel" name="phone" value={props.clientData.phone} onChange={props.handleChange} required/>
                    </div>
                </div>
            </div>
            <div className="border-t my-10" />
            <h3 className='text-xl font-medium mb-1'>Add pet</h3>
            <p className='text-gray-500 font-normal'>Enter the pet imformation.</p>
            <p className='mt-6 mb-4 text-500 font-normal'>Pet type</p>
            
            <div className="flex gap-x-4">
                <div>
                    <Radio id="dog" className="mr-2 text-black" name="pet_type_id" onChange={props.handlePetTypeChange} value={1} defaultChecked={props.petData.pet_type_id == 1} />
                    <Label htmlFor="dog">Dog</Label>
                </div>
                <div>
                    <Radio id="cat" className="mr-2 text-black" name="pet_type_id" onChange={props.handlePetTypeChange} value={2} defaultChecked={props.petData.pet_type_id == 2}/>
                    <Label htmlFor="cat">Cat</Label>
                </div>
            </div>
            
            <div className='mt-3'>
                <Label className='label-form' htmlFor="pet_name" value="Pet name" />
                <TextInput id="pet_name" className="mt-2" type="text" name="name" value={props.petData.name} onChange={props.handlePetNameChange} required/>
            </div>
            <div className='mt-3 grid gap-4 grid-cols-2'>
                <div>
                    <Label className='label-form' htmlFor="genre" value="Genre" />
                    <Select id="genre" className="mt-2" name="gender_id" value={props.petData.gender_id} onChange={props.handlePetChange} required>
                        <option className="select-option font-normal" value={0}>Select an option</option>
                        {gender.map((item, index) => (
                            <option className="select-option font-normal" value={item.id} key={index}>{item.name}</option>
                        ))}
                    </Select>
                </div>
                <div>
                    <Label className='label-form' htmlFor="size" value="Size" />
                    <Select id="size" className="mt-2" name="size_id" value={props.petData.size_id} onChange={props.handlePetChange} required>
                        <option className="select-option font-normal" value={0}>Select an option</option>
                        {size.map((item, index) => (
                            <option className="select-option font-normal" value={item.id} key={index}>{item.name}</option>
                        ))}
                    </Select>
                </div>
                <div>
                    <Label className='label-form' htmlFor="breed" value="Breed" />
                    <Select id="breed" className="mt-2" name="breed_id" value={props.petData.breed_id} onChange={props.handlePetChange} required>
                        <option className="select-option font-normal" value={0}>Select an option</option>
                        {breed.map((item, index) => (
                            <option className="select-option font-normal" value={item.id} key={index}>{item.name}</option>
                        ))}
                    </Select>
                </div>
                <div>
                    <Label className='label-form' htmlFor="age" value="Age" />
                    <Select id="age" className="mt-2" name="age_id" value={props.petData.age_id} onChange={props.handlePetChange} required>
                        <option className="select-option font-normal" value={0}>Select an option</option>
                        {age.map((item, index) => (
                            <option className="select-option font-normal" value={item.id} key={index}>{item.name}</option>
                        ))}
                    </Select>
                </div>
            </div>
        </>
    )
}