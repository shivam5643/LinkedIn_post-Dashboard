import React, { useState } from "react";
import FormField from "./FormField";
import { useFormData } from "../FormDataContext";
import ContactPage from "../Pages/ContactPage";

const Postdetails = () => {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const openDialog = () => {
    if (formSubmitted) {
      setOpen(true);
    } else {
      alert("Please submit the form details before viewing the post.");
    }
  };

  const { storeFormData } = useFormData();
  const [form, setForm] = useState({
    title: "",
    disclaimer: "",
    description: "",
    instruction: "",
    hashtags: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    storeFormData(form);
    setFormSubmitted(true); // Mark form as submitted
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col  sm:p-10 p-4 ">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          LinkedIn_post Details
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Title  *"
            placeholder="write your title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
          <FormField
            labelName="Short Disclaimer *"
            placeholder="Write a short disclaimer"
            inputType="text"
            value={form.disclaimer}
            handleChange={(e) => handleFormFieldChange("disclaimer", e)}
          />
        </div>

        <FormField
          labelName="Description of the Post *"
          placeholder="Write your content"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <h4 className="font-epilogue font-bold text-[25px] text-white">
            You will get a good and attractive post .{" "}
          </h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Important Instructions *"
            placeholder="write any important instruction"
            inputType="text"
            value={form.instruction}
            handleChange={(e) => handleFormFieldChange("instruction", e)}
          />
          <FormField
            labelName="Hashtags"
            placeholder="Give some hashtags"
            inputType=""
            value={form.hashtags}
            handleChange={(e) => handleFormFieldChange("hashtags", e)}
          />
        </div>

        <FormField
          labelName="Image *"
          placeholder="Place image URL of your Post"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />

        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="px-4 py-4 bg-red-500 text-white cursor-pointer font-semibold rounded-[10px] mr-4"
            >
              Submit Details
            </button>

            <button
              onClick={openDialog} // changed from () => openDialog()
              className="px-4 py-4 bg-blue-500 text-white cursor-pointer font-semibold rounded-[10px]"
            >
              View Post
            </button>
          </div>
          <ContactPage open={open} setOpen={setOpen} />
        </div>
      </form>
    </div>
  );
};

export default Postdetails;
