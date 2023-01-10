import React, { useEffect, useState } from 'react'
import { useSubCategoryStore } from '../../../../store/subcategory/useSubCategory';
import SubCategoryTable from './SubCategoryTable';

const SubCategory = () => {

  const {SubCategory }= useSubCategoryStore();
  const [subCategory, setSubCategory] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  //Effects
  useEffect(() => { setSubCategory(SubCategory);}, [SubCategory]);
  

  return (
    <div>
      <SubCategoryTable subCategory={subCategory}/>
    </div>
  )
}

export default SubCategory