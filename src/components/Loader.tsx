import { StyledLoader } from "./styles/Loader.styles";

export const Loader = () => {
  const generateSpans = (times: number) => {
    return [...Array(times).keys()].map((_, index) => {
      return (
        <span
          key={index + 1}
          style={{ "--i": index + 1 } as React.CSSProperties}
        ></span>
      );
    });
  };
  return (
    <StyledLoader>
      <section>
        <p>Loading...</p>
        {generateSpans(20)}
      </section>
    </StyledLoader>
  );
};
