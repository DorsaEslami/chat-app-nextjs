
export const UploadImageToFirebaseAndReturnUrl = async (file: File) => {
  try {
    // const storage = getStorage(firebaseApp);
    // const storageRef = ref(storage, "images" + "/" + file.name);
    // const uploadedImageResponse = await uploadBytes(storageRef, file);
    // const downloadURL = await getDownloadURL(uploadedImageResponse.ref);
    // return downloadURL;
    return ''
  } catch (error: any) {
    throw new Error(error.message);
  }
};
