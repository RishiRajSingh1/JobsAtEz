import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "JobsAtEz");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/rishicloudinary/image/upload", data, {
      timeout: 60000 // Timeout of 60 seconds
    });

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
