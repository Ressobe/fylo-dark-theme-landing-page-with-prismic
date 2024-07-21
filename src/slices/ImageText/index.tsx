import { Bounded } from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `ImageText`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageTextSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h1 className="font-bold font-heading text-3xl text-center md:text-left  md:max-w-xs">
      {children}
    </h1>
  ),
};

/**
 * Component for "ImageText" Slices.
 */
const ImageText = ({ slice }: ImageTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-dark-blue2"
    >
      <div className="flex flex-col items-center lg:flex-row gap-10">
        <PrismicNextImage field={slice.primary.image} />
        <div className="flex flex-col justify-center gap-6">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <p className="text-slate-300 max-w-md  md:max-w-sm ">
            {slice.primary.description}
          </p>
          <PrismicNextLink field={slice.primary.link}>
            {slice.primary.label}
          </PrismicNextLink>
        </div>
      </div>
    </Bounded>
  );
};

export default ImageText;
