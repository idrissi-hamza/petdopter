// import { parseCookies } from '@/helpers/index'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Select from "react-select";

export default function AddPetPage() {
  const characteristicsOptions = [
    { value: "affectionate", label: "Affectionate" },
    { value: "playful", label: "Playful" },
    { value: "curious", label: "Curious" },
    { value: "independent", label: "Independent" },
    { value: "friendly", label: "Friendly" },
    { value: "protective", label: "Protective" },
  ];
  const breedsOptions = [
    { value: "Labrador Retriever", label: "Affectionate" },
    { value: "French Bulldogs", label: "Playful" },
    { value: "Retrievers (Golden)", label: "Curious" },
    { value: "German Shepherd Dogs", label: "Independent" },
    { value: "Poodles", label: "Friendly" },
    { value: "Bulldogs", label: "Protective" },
  ];

  const [values, setValues] = useState({
    name: "",
    breed: "",
    age: "",
    characteristics: [],
    color: "",
    health: "",
    adoptionFees: "",
    goodInHomeWith: [],
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === "" || []
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Add New Pet">
      <Link href="/pets">Go Back</Link>
      <h1>Add Pet</h1>
      <form onSubmit={handleSubmit} className="">
        <div className=" flex flex-col gap-4 p-8">
          <div>
            <label htmlFor="name">Pet Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex">
            <label htmlFor="performers">Breed </label>
            <Select options={breedsOptions} />
          </div>
          <div>
            <label htmlFor="performers">Adoption fees</label>
            <input
              type="text"
              name="performers"
              id="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="venue">Gender</label>
            <input
              type="text"
              name="venue"
              id="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="venue">Color</label>
            <input
              type="text"
              name="venue"
              id="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex">
            <label htmlFor="performers">Characteristics </label>
            <Select
              options={characteristicsOptions}
              // onChange={(option) => setAssignedUsers(option)}
              isMulti
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Birth date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="description">Pet Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <input type="submit" value="Add Pet" className="btn" />
        </div>
      </form>
    </Layout>
  );
}
