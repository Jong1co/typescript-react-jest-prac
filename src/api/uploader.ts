export const uploadImage = async (file: File) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET as string);

  return fetch(process.env.REACT_APP_CLOUDINARY_URL as string, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => data.url);
};
