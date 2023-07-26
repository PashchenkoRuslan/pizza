import React from 'react';

const PizzaSVG = () => {
  const svgMarkup = `
    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
      <!-- Форма пиццы - круг -->
      <circle cx="30" cy="30" r="28" fill="#f9e79f" />

      <!-- Круг на верху пиццы (колбаса или пепперони) -->
      <circle cx="30" cy="22" r="12" fill="#d35400" />

      <!-- Первый круг помидор (красный) -->
      <circle cx="20" cy="34" r="8" fill="#c0392b" />

      <!-- Второй круг помидор (красный) -->
      <circle cx="38" cy="36" r="8" fill="#c0392b" />

      <!-- Круг шампиньонов (коричневый) -->
      <circle cx="26" cy="42" r="7" fill="#8e705e" />

      <!-- Круг шампиньонов (коричневый) -->
      <circle cx="42" cy="45" r="7" fill="#8e705e" />

      <!-- Круг оливок (черный) -->
      <circle cx="30" cy="50" r="6" fill="#2c3e50" />

      <!-- Круг оливок (черный) -->
      <circle cx="20" cy="48" r="6" fill="#2c3e50" />

      <!-- Круг оливок (черный) -->
      <circle cx="40" cy="52" r="6" fill="#2c3e50" />
    </svg>
  `;

  return <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />;
};

export default PizzaSVG;
