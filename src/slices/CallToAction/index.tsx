import { Bounded } from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="font-bold font-heading text-3xl text-center">{children}</h3>
  ),
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-dark-blue2 relative w-full"
    >
      <div className="bg-dark-blue1 shadow-lg p-10 flex flex-col items-center gap-6 relative top-32 rounded-lg">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <p className="max-w-screen-md text-center">
          {slice.primary.description}
        </p>

        <div className="flex items-center justify-center w-3/4 gap-10">
          <input
            type="text"
            className="h-12 flex-1 rounded-3xl pl-6"
            placeholder="example@fylo.com"
          />
          <PrismicNextLink field={slice.primary.link}>
            <button className="py-3 px-8 bg-green-200 rounded-3xl bg-gradient-to-r from-cyan-gradient to-blue-gradient">
              {slice.primary.label}
            </button>
          </PrismicNextLink>
        </div>
      </div>
    </Bounded>
  );
};

export default CallToAction;
