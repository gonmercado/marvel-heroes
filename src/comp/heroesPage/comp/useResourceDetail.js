import { useEffect, useState } from 'react';
import getAxios from "../../../setupAxios";
import useTypes from "./useTypes";

const useResourceDetail = (resourceName, resourceId) => {
  const [ resourceDetail, setResourceDetail ] = useState();
  const [ types, findTypeId ] = useTypes();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAxios()
        .get(`/detail?resourceName=${ resourceName }&resourceId=${ resourceId }&typeId=${ findTypeId(resourceName) }`);
      setResourceDetail(response.data.results);
    };
    if(types) {
      fetchData();
    }
  }, [ types, resourceId ])

  return resourceDetail;
};

export default useResourceDetail;
