import { Bounded } from "@/components/bounded";
import { CheckmarkIcon } from "@/components/checkmark-icon";
import { ComputerIcon } from "@/components/computer-icon";
import { FolderIcon } from "@/components/folder-icon";
import { ShieldIcon } from "@/components/shield-icon";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const icons = {
  computer: <ComputerIcon />,
  folder: <FolderIcon />,
  checkmark: <CheckmarkIcon />,
  shield: <ShieldIcon />,
};

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="font-bold font-heading text-2xl max-w-screen-md pt-6 pb-3">
      {children}
    </h2>
  ),
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-dark-blue2"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 place-items-center text-center gap-20">
        {slice.primary.feature.map((item, idx) => {
          return (
            <li key={idx} className="">
              <div className="flex justify-center">
                {item.icon && icons[item.icon]}
              </div>
              <PrismicRichText field={item.heading} components={components} />
              <p className="text-slate-300 max-w-xs text-sm">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Bounded>
  );
};

export default Features;
