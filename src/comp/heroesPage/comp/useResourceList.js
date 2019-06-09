import { useState, useEffect } from 'react';
import getAxios from "../../../setupAxios";

const useResourceList = (resourceName) => {
  const [ resourceList, setResourceList ] = useState();

  useEffect(() => {
    const fetchResourceList = async () => {
      const response = await getAxios().get(`/list?resourceName=${ resourceName }`);
      setResourceList(response.data.results);
    };
    fetchResourceList();
  }, []);

  return resourceList;
};

export default useResourceList;
