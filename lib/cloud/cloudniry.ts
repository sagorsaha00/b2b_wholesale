export const uploadToCloudinary = async (
  file: File,
  folder: string,
): Promise<string> => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("folder", folder);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  const url = data.url;
  console.log("data", url);
  return url;
};
