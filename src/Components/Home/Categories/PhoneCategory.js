import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function PhoneCategory() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-5 md:px-10  mt-20 lg:hidden">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className=" text-white">
          Products
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li className="pb-5  text-white">Patient Monitoring</li>
            <li className="pb-5  text-white">Ultrasound</li>
            <li className="pb-5  text-white">Radiology</li>
            <li className="pb-5  text-white">AED</li>
            <li className="pb-5  text-white">Defibrillation System</li>
            <li className="pb-5  text-white">Anesthesia</li>
            <li className="pb-5  text-white">Hematology</li>
            <li className="pb-5  text-white">Chemistry</li>
            <li className="pb-5  text-white">Chemiluminescence Immunoassay</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-white">
          Solutions
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li className="pb-5 text-white">Hospitalwide Solution</li>
            <li className="pb-5 text-white">Emergency Care</li>
            <li className="pb-5 text-white">Critical Care</li>
            <li className="pb-5 text-white">Perioperative Care</li>
            <li className="pb-5 text-white">Medical Imaging</li>
            <li className="pb-5 text-white">Laboratory Diagnostics</li>
            <li className="pb-5 text-white">Minimally Invasive Surgery</li>
            <li className="pb-5 text-white">Resource Center</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="text-white">
          Services
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li className="pb-5 text-white">Training and Education</li>
            <li className="pb-5 text-white">Patient Monitoring Accessories</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className="text-white">
          Media Center
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li className="pb-5 text-white">Events & Activities</li>
            <li className="pb-5 text-white">Events & Activities</li>
            <li className="pb-5 text-white">News</li>
            <li className="pb-5 text-white">Blog</li>
            <li className="pb-5 text-white">Press</li>
            <li className="pb-5 text-white">Career</li>
            <li className="pb-5 text-white">Join Us</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} className="text-white">
          About Us
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li className="pb-5 text-white">Purpose</li>
            <li className="pb-5 text-white">Perspective</li>
            <li className="pb-5 text-white">Our Business</li>
            <li className="pb-5 text-white">History</li>
            <li className="pb-5 text-white">Our Culture</li>
            <li className="pb-5 text-white">ESG</li>
            <li className="pb-5 text-white">Investor Relations</li>
            <li className="pb-5 text-white">Virtual Tour with Mindray</li>
            <li className="pb-5 text-white">Covid-19 Response</li>
            <li className="pb-5 text-white">Contact Information</li>
            <li className="pb-5 text-white">Contact Us</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </section>
  );
}
