import { Bounded } from "@/components/bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.primary.testimonials.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID("testimonials", item.testimonial.uid);
      }
    }),
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-dark-blue2"
    >
      <ul className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-6 relative">
        <Image
          src="/bg-quotes.png"
          width={50}
          height={50}
          alt="quote img"
          className="absolute -top-8 -left-2  z-0"
        />
        {testimonials.map(
          (item, index) =>
            item && (
              <li
                key={index}
                className="text-sm bg-dark-blue1 p-12 space-y-8 rounded-xl shadow-lg z-10"
              >
                <p className="max-w-md text-slate-300">{item.data.quote}</p>
                <div className="flex items-center gap-4">
                  <PrismicNextImage
                    className="w-10 h-10 rounded-full"
                    field={item.data.avatar}
                  />
                  <div>
                    <h3 className="font-bold font-heading text-md">
                      {item.data.name}
                    </h3>
                    <span className="text-sm">{item.data.job_title}</span>
                  </div>
                </div>
              </li>
            ),
        )}
      </ul>
    </Bounded>
  );
};

export default Testimonials;
