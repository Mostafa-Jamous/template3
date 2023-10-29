import React from "react";
import MainTitle from "../components/MainTitle";
import avatar1 from "../imgs/avatar-01.png";
import avatar2 from "../imgs/avatar-02.png";
import avatar3 from "../imgs/avatar-03.png";
import avatar4 from "../imgs/avatar-04.png";
import avatar5 from "../imgs/avatar-05.png";
import avatar6 from "../imgs/avatar-06.png";

import TestimonialsItem from "../components/TestimonialsItem";

function Testimonials() {
  return (
    <div className="py-[100px] bg-bgColor" id="testimonials">
      <MainTitle title="TESTIMONIALS" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] featuresContainer">
        <TestimonialsItem
          boxClass="testimonialsBox"
          photo={avatar1}
          name="Mostafa Jamous"
          job="Front end developer"
        />
        <TestimonialsItem
          boxClass="testimonialsBox"
          photo={avatar2}
          name="Hashem Kammasheh"
          job="Graphic designer"
        />
        <TestimonialsItem
          boxClass="testimonialsBox"
          photo={avatar3}
          name="Osama Elzero"
          job="Full stack developer"
        />
        <TestimonialsItem
          boxClass="testimonialsBox"
          photo={avatar4}
          name="Mohammed"
          job="Front end developer"
        />
        <TestimonialsItem
          boxClass="testimonialsBox"
          photo={avatar5}
          name="Omar"
          job="Front end developer"
        />
        <TestimonialsItem
          boxClass="testimonialsBox"
          photo={avatar6}
          name="Hamada"
          job="Front end developer"
        />
      </div>
    </div>
  );
}

export default Testimonials;
