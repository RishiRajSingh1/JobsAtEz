import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"


const AddGig = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If singleFile or files are not selected, prevent submission
    if (!singleFile || files.length === 0) {
      alert("Please select cover image and upload images.");
      return;
    }

    // Upload images before submitting
    try {
      setUploading(true);
      const cover = await upload(singleFile);
      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);

      // Once all images are uploaded, mutate the gig data and create the gig
      mutation.mutate({
        ...state,
        cover,
        images,
      });

      // Navigate to mygigs page
      navigate("/mygigs");
    } catch (error) {
      console.error("Error uploading images:", error);
      setUploading(false);
    }
  };

  return (
    <div className="add">
      <div className="box">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Title</label>
              <Input
                type="text"
                name="title"
                placeholder="e.g. I will do something I'm really good at"
                onChange={handleChange}
              />
              <label htmlFor="">Category</label>
              <select name="cat" id="cat" onChange={handleChange}>
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
                <option value="writing">Writing & Translation</option>
                <option value="marketing">Digital Marketing</option>
                <option value="video">Video & Animation</option>
                <option value="photography">Photography</option>
                <option value="programming">Programming & Tech</option>
                <option value="business">Business</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="data">Data Entry & Admin</option>
                <option value="engineering">Engineering & Science</option>
                <option value="sales">Sales & Marketing</option>
                <option value="support">Customer Support</option>
              </select>

              <div className="images">
                <div className="imagesInputs">
                  <label htmlFor="">Cover Image</label>
                  <Input
                    type="file"
                    onChange={(e) => setSingleFile(e.target.files[0])}
                  />
                  <label htmlFor="">Upload Images</label>
                  <Input
                    type="file"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </div>
              </div>
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                id=""
                placeholder="Brief descriptions to introduce your service to customers"
                cols="0"
                rows="16"
                onChange={handleChange}
              ></textarea>
              <button type="submit" disabled={uploading}>
                {uploading ? "Creating..." : "Create"}
              </button>
            </form>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <Input
              type="text"
              name="shortTitle"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <Input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Revision Number</label>
            <Input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <Input type="number" onChange={handleChange} name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGig;