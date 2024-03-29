import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { title, desc } = props;

  if (!title) {
    return null;
  }

  return (
    <div data-test="list-item-component">
      <h2 data-test="component-title">{title}</h2>
      <p data-test="component-desc">{desc}</p>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ListItem;
