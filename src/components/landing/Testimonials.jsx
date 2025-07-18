import React from "react";

const testimonials = [
  {
    name: "Ozzy",
    text: "If a new tool comes out and saves you time and costs less than the equivalent value, it's usually an insta buy. @nudgr likely falls into this category for many.",
  },
  {
    name: "Martin",
    text: "The featured streak for my latest habit was automatically created using the amazing @nudgr + integration. Simple and consistent!",
  },
  {
    name: "Nile",
    text: "Oh my god I've been using Nudgr for 15 minutes and I LOVE this.",
  },
  {
    name: "Parker",
    text: "Not only is @nudgr an amazing tool, I just got a highly detailed support email response in <15 minutes from the founder on a Saturday night. I'm sold.",
  },
  {
    name: "Typeform",
    text: "What do Typeform, Notion, and @nudgr have in common? They were all used by automated processes in this tutorial.",
  },
  {
    name: "Andy",
    text: "Bannerbear is honestly just soooo good. I actually think it's the best product I've seen this year. I think before long it will be a must in habit formation.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-accent py-16 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-dark mb-8">What our users say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[160px]"
          >
            <div className="text-dark text-lg font-medium mb-2">{t.text}</div>
            <div className="text-accent font-bold mt-2">- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
