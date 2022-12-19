import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostingKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const handleAddDcotor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
    fetch(imageURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.speciality,
            image: imageData.data.url,
          };
          // post doctor details
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully.`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit(handleAddDcotor)}>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white text-center sm:px-12 md:px-[60px]">
                <div className="mb-5 text-center md:mb-16">
                  <Link className="mx-auto inline-block">
                    <p className="text-primary text-4xl font-bold">
                      Add Doctor
                    </p>
                  </Link>
                </div>

                <div className="mb-6">
                  <input
                    {...register("name", {
                      required: "Name Address is required",
                    })}
                    type="text"
                    placeholder="Name"
                    className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 pt-2 text-left">
                      {errors.name?.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <input
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    type="text"
                    placeholder="Email"
                    className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 pt-2 text-left">
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                <select
                  className="select select-bordered w-full mb-6"
                  {...register("speciality", {
                    required: "Specialty is required",
                  })}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty._id} value={specialty.name}>
                      {specialty.name}
                    </option>
                  ))}
                </select>

                <div className="mb-6">
                  <input
                    {...register("image", {
                      required: "Image is required",
                    })}
                    type="file"
                    className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  {errors.img && (
                    <p className="text-red-500 pt-2 text-left">
                      {errors.img?.message}
                    </p>
                  )}
                </div>

                <Toaster />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Add"
                    className="bordder-primary btn btn-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
