import React, { useEffect } from 'react'
import {useCateoryStore} from '../../../../store/category/useCategoryStore';

const Category = () => {
const {ongetCateory }= useCateoryStore();

    useEffect(() => {
        ongetCateory();
    }, []);


  return (
    <div>
      
    </div>
  )
}

export default Category