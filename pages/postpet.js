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
    { value: "labradorRetriever", label: "Labrador Retriever" },
    { value: "frenchBulldogs", label: "French Bulldogs" },
    { value: "RetrieversGolden", label: "Retrievers (Golden)" },
    { value: "germanShepherdDogs", label: "German Shepherd Dogs" },
    { value: "Poodles", label: "Poodles" },
    { value: "Bulldogs", label: "Bulldogs" },
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
      <div className="p-6 mx-auto mt-10 border-2">
        <Link href="/pets">
          <a className="text-blue-500 font-semibold"> Go Back</a>
        </Link>
        <h1 className="text-4xl text-purple-700 text-center m-6">Add Pet</h1>
        <form onSubmit={handleSubmit} className="">
          <div className=" flex flex-col gap-4 p-8">
            <div className="flex gap-4">
              <label htmlFor="name">Pet Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="performers">Breed </label>
              <Select className="w-60" options={breedsOptions} />
            </div>
            <div className="flex gap-4">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="characteristics">Characteristics </label>
              <Select
                className="w-60"
                options={characteristicsOptions}
                onChange={(option) => handleInputChange(option)}
                isMulti
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="performers">Adoption fees</label>
              <input
                type="text"
                name="performers"
                id="performers"
                value={values.fees}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="venue">Gender</label>
              <input
                type="text"
                name="venue"
                id="venue"
                value={values.gender}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-4">
              <label htmlFor="date">Birth date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={values.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-4">
              <label htmlFor="description">Pet Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                value={values.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <input
              type="submit"
              value="Add Pet"
              className="bg-purple-500 p-2 rounded mx-36 text-purple-100 mt-10"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}
