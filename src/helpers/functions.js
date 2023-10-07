export const addDataToLocalStorage = (user) => {
  localStorage.setItem("name", JSON.stringify(user.name));
  localStorage.setItem("password", JSON.stringify(user.password));
};

export const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("name");
  if (!user) return false;
  return true;
};

// export const updateToken = () => {
//   let updateFunc = setInterval(async () => {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     if (!tokens) return clearInterval(updateFunc);
//     const Authorization = `Bearer ${tokens.access}`;
//     const { data } = await axios.post(
//       `${ACCOUNT_API}/api/token/refresh/`,
//       { refresh: tokens.refresh },
//       { headers: { Authorization } }
//     );
//     localStorage.setItem(
//       "tokens",
//       JSON.stringify({ refresh: tokens.refresh, access: data.access })
//     );
//   }, 1000 * 60 * 9);
// };
