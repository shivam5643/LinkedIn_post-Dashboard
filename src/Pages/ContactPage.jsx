import React from 'react';
import { Dialog } from '@mui/material';
import { useFormData } from '../FormDataContext';

const ContactPage = ({ open, setOpen }) => {
    const { formData } = useFormData();
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <div className=" mx-auto bg-white rounded-lg shadow-md p-6 max-h-[800px] py-2">
                {formData && (
                    <div>
                        <h3 className="text-3xl font-bold mb-4  text-gray-800">{formData.title}</h3>
                        <p className="text-lg text-gray-700 mb-3 font-montserrat">{formData.disclaimer}</p>
                        <p className="text-xl text-gray-800 mb-3 font-palanquin font-semibold">{formData.description}</p>
                        <p className="text-lg text-gray-800 ">{formData.instruction}</p>
                        <div className="flex flex-wrap mb-4">
                            {formData.hashtags && formData.hashtags.split(',').map((tag, index) => (
                                <span key={index} className="mr-2 mb-2 text-blue-500">#{tag.trim()}</span>
                            ))}
                        </div>
                        <img src={formData.image} alt="Post Image" className="w-[500px] ml-4 mb-4 rounded-lg shadow-md h-[300px]" />
                    </div>
                )}
            </div>
        </Dialog>
    );
};

export default ContactPage;
