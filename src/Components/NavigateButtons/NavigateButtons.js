import React from 'react'
import { Button } from "@material-tailwind/react";
import clothes from "../../Assets/StoreImages/clothes.jpg";
import { filterProducts } from '../../features/Slices/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigateButtons = () => {
    const buttons = [
        'Hoodies',
        'Shoes',
        'Suits',
        'Dresses',
        'T-Shirts',
        'Jeans',
        'Jackets',
        'Bags',
    ];

    const dispatch = useDispatch();
    return (
        <div>
            <div className="flex items-center justify-center py-8 ">
                {buttons.map((button, index) => {
                    return <div className="mr-4" key={index}>
                        <Link to={"/filteredProducts/" + button}>
                            <Button
                                color="gray"
                                size="md"
                                variant="outlined"
                                ripple={true}
                                onClick={() => dispatch(filterProducts(button))}
                                className="hover:bg-black hover:transition-300 hover:text-white duration-300 ease-in-out ">
                                {button}
                            </Button>
                        </Link>

                    </div>
                })}
            </div>
            <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
                <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">SALES UP TO 60%</h3>
            </div>
            <div className="flex justify-center item-center py-4">
                <img
                    className="h-[600px] w-[70%] mx-auto rounded-md shadow-lg shadow-grey-600"
                    src={clothes} alt="" />
            </div>
        </div>

    )
}

export default NavigateButtons