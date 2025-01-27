const imageToBase64 = async (image) => {
    const reader = new FileReader();

    const data = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result); // Fix typo: "reader,result" -> "reader.result"
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(image); // Move this line here to start reading
    });

    return data;
};

export default imageToBase64;
