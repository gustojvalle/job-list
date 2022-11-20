type MediaTypes = {
  tablet: string;
  laptop: string;
};

const size: MediaTypes = {
  tablet: "768px",
  laptop: "1024px",
};

export const device: MediaTypes = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
