import { useEffect, useState, useContext } from 'react';
import queryString from 'query-string';
import getAxios from "../../../setupAxios";
import typesContext from "../../../typesContext";

const useResourceDetail = (resourceName, resourceId, filters) => {
  const [ resourceDetail, setResourceDetail ] = useState();
  const { types, findTypeId } = useContext(typesContext);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = {
        resourceName,
        resourceId,
        typeId: findTypeId(resourceName),
        ...filters
      };
      const response = await getAxios()
        .get(`/detail?${ queryString.stringify(queryParams, { arrayFormat: 'comma' }) }`);
      setResourceDetail(response.data.results);
    };
    if(types) {
      fetchData();
    }
  }, [ types, resourceId ]);

  return resourceDetail;
};

export default useResourceDetail;
