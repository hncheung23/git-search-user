const ENDPOINT = " https://api.github.com/search";
//+type:org
const getSearchItems = async (params) => {
  const { searchString, type, per_page = 30, page = 1 } = params;
  return fetch(
    `${ENDPOINT}/users?q=${searchString}+type:${
      type === "users" ? "user" : "org"
    }&per_page=${per_page}&page=${page}`,
    {
      method: "GET",
    }
  );
};

export { getSearchItems };
