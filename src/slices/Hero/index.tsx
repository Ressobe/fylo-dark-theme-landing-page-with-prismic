import { Bounded } from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="font-bold font-heading text-4xl max-w-screen-md">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-body font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-mobile sm:bg-desktop bg-bottom bg-no-repeat"
    >
      <div className="flex flex-col gap-6 items-center justify-center text-center ">
        <PrismicNextImage field={slice.primary.image} className="max-w-md" />
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <p className="text-slate-300 max-w-md md:max-w-lg ">
          {slice.primary.description}
        </p>
        <PrismicNextLink field={slice.primary.link}>
          <button className="py-3 px-16 bg-green-200 rounded-3xl bg-gradient-to-r from-cyan-gradient to-blue-gradient">
            {slice.primary.label}
          </button>
        </PrismicNextLink>
      </div>
    </Bounded>
  );
};

export default Hero;
