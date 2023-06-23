export const getUser = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) return;
  const data = await res.json();
  console.log(data);
  return data;
};
