import useResourceList from "./useResourceList";

const useTypes = () => {
  const types = useResourceList('types');

  const findTypeId = (resourceName) => types.find(type => type.detail_resource_name === resourceName).id;

  return [types, findTypeId];
};

export default useTypes;
