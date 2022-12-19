import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.error("Deleted Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="text-3xl">Manage Doctors</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={doctor?.image} alt="" />
                    </div>
                  </div>
                </th>
                <th>{doctor?.name}</th>
                <th>{doctor?.email}</th>
                <th>{doctor?.specialty}</th>
                <th>
                  <label
                    htmlFor="confirmationModal"
                    className="btn btn-sm btn-error"
                    onClick={() => setDeletingDoctor(doctor)}
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete`}
          message={`if you delete ${deletingDoctor.name} you will not able to recover it`}
          closeModal={closeModal}
          successAction={handleDeleteDoctor}
          modalData={deletingDoctor}
          successButtonName="Delete"
        />
      )}
    </div>
  );
};

export default ManageDoctors;
