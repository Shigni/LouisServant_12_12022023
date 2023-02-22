import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = styled.div`
  background-color: ${(props) => props.color};
`;

/**
 * Create right nutrients boxes
 *
 * @param {number} data total weight of the nutrient
 * @param {string} unit kCal or grams
 * @param {string} image icon of the nutrient
 * @param {string} color color of the nutrient box
 * @param {string} alt alt text for the image
 * @param {string} text name of the nutrient
 *
 */

export function NutriInfos({ data, unit, image, color, alt, text }) {
  return (
    <div className="key-container">
      <IconContainer className="icon-container" color={color}>
        <img src={image} alt={alt} />
      </IconContainer>
      <div className="text-container">
        <h3>
          {data}
          {unit}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

NutriInfos.propTypes = {
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  alt: PropTypes.string,
  text: PropTypes.string.isRequired,
};
