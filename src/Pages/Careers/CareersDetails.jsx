import { useLoaderData, useParams } from "react-router-dom";

export default function CareersDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        doloribus quaerat, illo quas, ipsam quidem accusamus obcaecati suscipit
        labore iure fugiat doloremque ut mollitia cupiditate sed optio
        consectetur voluptates autem!
      </div>
    </div>
  );
}

//loader function
export const CareersDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(" http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error('could not find that career')
  }

  return res.json();
};
