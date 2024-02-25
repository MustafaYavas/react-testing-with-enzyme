import './Headline.scss';

const Headline = (props) => {
  const { header, desc } = props;

  if (!header) {
    return null;
  }

  return (
    <div data-test="headline-component">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
};

export default Headline;
