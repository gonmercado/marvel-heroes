import { useState, useEffect } from 'react';
import queryString from 'query-string';
import getAxios from "../../../setupAxios";

const useResourceList = (resourceName, filters, searchField, searchValue) => {
  const [ resourceList, setResourceList ] = useState();

  useEffect(() => {
    const fetchResourceList = async () => {
      const queryParams = {
        resourceName,
        ...filters
      };
      if (searchValue) queryParams.filter = `${ searchField }:${ searchValue }`;

      const response = await getAxios().get(`/list?${ queryString.stringify(queryParams, { arrayFormat: 'comma' }) }`);
      setResourceList(response.data.results);
    };
    fetchResourceList();
  }, [ searchField, searchValue ]);

  return resourceList;
};

export default useResourceList;
